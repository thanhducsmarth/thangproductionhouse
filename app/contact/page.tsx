'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý gửi form ở đây
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative min-h-screen bg-[#faf9f7]">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm tracking-[0.3em] text-gray-500 mb-6 block font-light">
            LIÊN HỆ
          </span>
          <h1 className="text-4xl md:text-6xl font-light mb-8 tracking-wide playfair-font">
            Kết Nối Với Chúng Tôi
          </h1>
          <div className="w-20 h-[1px] bg-gray-200 mx-auto mb-12"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed tracking-wide font-light">
            Hãy chia sẻ với chúng tôi câu chuyện tình yêu của bạn. Chúng tôi sẽ giúp bạn lưu giữ những khoảnh khắc đẹp nhất.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Form */}
            <div className="w-full lg:w-2/3">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="w-full lg:w-1/3 space-y-12">
              <div>
                <h3 className="text-xl font-light mb-6 playfair-font">Thông Tin Liên Hệ</h3>
                <div className="space-y-4">
                  <p className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600">467/125/46A Lê Đức Thọ, Phường 16, Quận Gò Vấp, TP.HCM</span>
                  </p>
                  <p className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-600">info@studio.com</span>
                  </p>
                  <p className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-600">0983736767 - 0353752406</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-light mb-6 playfair-font">Giờ Làm Việc</h3>
                <div className="space-y-4 text-gray-600">
                  <p>Thứ 2 - Thứ 6: 9:00 - 18:00</p>
                  <p>Thứ 7 - Chủ nhật: 10:00 - 17:00</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-light mb-6 playfair-font">Theo Dõi</h3>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V21.88C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] w-full bg-gray-100">
            {/* Thêm Google Map ở đây */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.605579590685!2d106.66788237485788!3d10.8414658893113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529259c45310b%3A0xb63399b3b4fbddae!2sTh%C4%83ng%20Studio!5e0!3m2!1svi!2s!4v1751285660239!5m2!1svi!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
} 