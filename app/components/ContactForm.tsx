'use client';
import { useState, useEffect } from 'react';

export default function ContactForm({ service = 'Chụp Thôi Nôi' }: { service?: string }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', date: '', message: '' });
        setShowToast(true);
      } else {
        const data = await res.json();
        setStatus(data.message || 'error');
      }
    } catch (error: any) {
      setStatus(error?.message || 'error');
    }

    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-light text-gray-600 mb-2">
            Họ và tên
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
            placeholder="Nhập họ và tên của bạn"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-light text-gray-600 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
            placeholder="Nhập email của bạn"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-light text-gray-600 mb-2">
            Số điện thoại
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
            placeholder="Nhập số điện thoại của bạn"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-light text-gray-600 mb-2">
            Ngày chụp dự kiến
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
            placeholder="Chọn ngày chụp dự kiến"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-light text-gray-600 mb-2">
          Tin nhắn
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
          placeholder="Nhập nội dung tin nhắn"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors tracking-[0.1em] text-sm disabled:opacity-50"
        >
          {loading ? 'ĐANG GỬI...' : 'GỬI TIN NHẮN'}
        </button>
      </div>
      {showToast && (
        <div style={{position: 'fixed', bottom: 32, right: 32, zIndex: 9999}} className="bg-green-600 text-white px-6 py-3 rounded shadow-lg animate-fade-in">
          Gửi tin nhắn thành công! Chúng tôi sẽ liên hệ lại với bạn sớm nhất.
        </div>
      )}
      {status && status !== 'success' && (
        <div className="text-center text-red-600">
          {status}
        </div>
      )}
    </form>
  );
} 