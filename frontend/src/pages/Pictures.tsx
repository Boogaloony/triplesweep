import { useState, useEffect } from 'react';
import { Trash2, Upload } from 'lucide-react';

interface Picture {
  id: string;
  url: string;
  name: string;
  date: string;
}

export const Pictures = () => {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  // Load pictures from localStorage on mount
  useEffect(() => {
    const savedPictures = localStorage.getItem('pictures');
    if (savedPictures) {
      setPictures(JSON.parse(savedPictures));
    }
  }, []);

  // Save pictures to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('pictures', JSON.stringify(pictures));
  }, [pictures]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      handleFiles(Array.from(files));
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    handleFiles(Array.from(files));
  };

  const handleFiles = (files: File[]) => {
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newPicture: Picture = {
            id: crypto.randomUUID(),
            url: e.target?.result as string,
            name: file.name,
            date: new Date().toISOString(),
          };
          setPictures(prev => [...prev, newPicture]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const deletePicture = (id: string) => {
    setPictures(prev => prev.filter(picture => picture.id !== id));
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Our Work</h1>
        
        {/* Upload Area */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 mb-8 text-center transition-colors
            ${isDragging ? 'border-primary bg-primary/10' : 'border-gray-300'}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-lg mb-4">Drag and drop images here, or</p>
          <label className="bg-primary text-white px-4 py-2 rounded-md cursor-pointer hover:bg-primary/90 transition-colors">
            Choose Files
            <input
              type="file"
              className="hidden"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
            />
          </label>
        </div>

        {/* Pictures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pictures.map(picture => (
            <div key={picture.id} className="group relative rounded-lg overflow-hidden shadow-md">
              <img
                src={picture.url}
                alt={picture.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => deletePicture(picture.id)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  aria-label="Delete picture"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 