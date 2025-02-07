import express from 'express';
import multer from 'multer';
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { pool } from '../db';
import { Request } from 'express';

const router = express.Router();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM pictures ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pictures' });
  }
});

router.post('/', upload.single('image'), async (req: MulterRequest, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

  try {
    const key = `pictures/${Date.now()}-${req.file.originalname}`;
    
    await s3.send(new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    }));

    const url = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
    
    const result = await pool.query(
      'INSERT INTO pictures (url, name) VALUES ($1, $2) RETURNING *',
      [url, req.file.originalname]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload picture' });
  }
});

export default router; 