import { useState } from 'react';
import { Mail } from 'lucide-react';
import { isValidEmail } from '@/utils';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (isValidEmail(formData.email)) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          aria-required="true"
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          aria-required="true"
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          required
          aria-required="true"
          rows={4}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        aria-busy={status === 'submitting'}
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none disabled:opacity-50"
      >
        {status === 'submitting' ? (
          <span className="flex items-center justify-center">
            <Mail className="animate-spin -ml-1 mr-2 h-5 w-5" />
            Sending...
          </span>
        ) : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-green-600" role="alert">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600" role="alert">There was an error sending your message.</p>
      )}
    </form>
  );
}; 