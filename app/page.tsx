'use client';

import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const services = [
  {
    title: 'Tổ Chức Tiệc',
    description: 'Chúng tôi sẽ giúp bạn tổ chức một buổi tiệc hoàn hảo với mọi chi tiết được chăm chút kỹ lưỡng. Từ không gian đến ẩm thực, từ ánh sáng đến âm nhạc, tất cả sẽ được sắp xếp một cách tinh tế nhất.',
    image: 'https://i.pinimg.com/736x/69/16/e5/6916e59c9471f856386ab5f4efed9e21.jpg',
    reverse: false
  },
  {
    title: 'Trang Trí',
    description: 'Tạo không gian lãng mạn và sang trọng với những mẫu trang trí độc đáo và tinh tế. Mỗi chi tiết đều được lựa chọn cẩn thận để phản ánh cá tính và phong cách của bạn.',
    image: 'https://i.pinimg.com/736x/1b/1c/99/1b1c99f63383a770a987b580c6281991.jpg',
    reverse: true
  },
  {
    title: 'Chụp Ảnh',
    description: 'Lưu giữ những khoảnh khắc đáng nhớ nhất của ngày trọng đại với đội ngũ nhiếp ảnh chuyên nghiệp. Mỗi bức ảnh là một câu chuyện, một kỷ niệm đẹp của tình yêu.',
    image: 'https://i.pinimg.com/736x/b8/34/76/b8347650fb39aec4af1ddd57327fb92f.jpg',
    reverse: false
  }
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.documentElement.classList.remove('overflow-hidden');
    }
  }, [selectedImage]);

  const openModal = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      <section className="relative h-screen">
        <HeroSlider />
      </section>
      
      {/* Services Section */}
      <section className="py-32 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-sm tracking-[0.3em] text-gray-500 mb-6 block">DỊCH VỤ CỦA CHÚNG TÔI</span>
            <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wide playfair-font">
              Trọn Vẹn Từng Khoảnh Khắc
            </h2>
            <div className="w-20 h-[1px] bg-gray-200 mx-auto"></div>
          </div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`flex flex-col ${service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-24`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[3/4] overflow-hidden group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div className="max-w-xl mx-auto md:mx-0">
                    <span className="text-sm tracking-[0.2em] text-gray-400 mb-4 block">
                      {`0${index + 1}`}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-light mb-8 playfair-font">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-12 tracking-wide">
                      {service.description}
                    </p>
                    <button className="group relative inline-flex items-center cursor-pointer">
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-500 group-hover:w-full"></span>
                      <span className="tracking-[0.2em] text-sm font-light pr-10">KHÁM PHÁ</span>
                      <svg className="w-4 h-4 absolute right-0 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memorable Moments Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[2000px] mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-[0.15em] mb-6">KHOẢNH KHẮC ĐÁNG NHỚ</h2>
            <p className="text-gray-600">
              Khám phá những khoảnh khắc đẹp nhất được lưu giữ qua ống kính của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-12 auto-rows-[250px] gap-4 md:gap-6">
            {/* Main Feature Image - Extra Tall Portrait */}
            <div className="col-span-12 md:col-span-4 row-span-4">
              <div className="relative w-full h-full group overflow-hidden cursor-pointer" onClick={() => openModal('https://i.pinimg.com/736x/9f/1c/07/9f1c072b75140b7ae2f54bd642edfade.jpg')}>
                <Image
                  src="https://i.pinimg.com/736x/9f/1c/07/9f1c072b75140b7ae2f54bd642edfade.jpg"
                  alt="Khoảnh khắc 1"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-white">
                    <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Xem chi tiết</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Stack - Mixed Heights */}
            <div className="col-span-12 md:col-span-4 row-span-2">
              <div className="relative w-full h-full group overflow-hidden cursor-pointer" onClick={() => openModal('https://i.pinimg.com/736x/7c/3a/5d/7c3a5db653b9855c9060dbff8ff65e03.jpg')}>
                <Image
                  src="https://i.pinimg.com/736x/7c/3a/5d/7c3a5db653b9855c9060dbff8ff65e03.jpg"
                  alt="Khoảnh khắc 2"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 row-span-3">
              <div className="relative w-full h-full group overflow-hidden cursor-pointer" onClick={() => openModal('https://i.pinimg.com/736x/d3/2e/79/d32e79636ba8999abfd524d20593b2b8.jpg')}>
                <Image
                  src="https://i.pinimg.com/736x/d3/2e/79/d32e79636ba8999abfd524d20593b2b8.jpg"
                  alt="Khoảnh khắc 3"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 row-span-2">
              <div className="relative w-full h-full group overflow-hidden cursor-pointer" onClick={() => openModal('https://i.pinimg.com/736x/27/78/a5/2778a500f63e8af3b642fff7e6bd9501.jpg')}>
                <Image
                  src="https://i.pinimg.com/736x/27/78/a5/2778a500f63e8af3b642fff7e6bd9501.jpg"
                  alt="Khoảnh khắc 4"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>

            {/* Right Stack - Tall Portrait */}
            <div className="col-span-12 md:col-span-4 row-span-3">
              <div className="relative w-full h-full group overflow-hidden cursor-pointer" onClick={() => openModal('https://i.pinimg.com/736x/ce/7b/87/ce7b87665bf35272ca6b5d2fa4dfb632.jpg')}>
                <Image
                  src="https://i.pinimg.com/736x/ce/7b/87/ce7b87665bf35272ca6b5d2fa4dfb632.jpg"
                  alt="Khoảnh khắc 5"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>

            {/* Bottom Row - Mixed Heights */}
            <div className="col-span-12 md:col-span-4 row-span-2">
              <div className="relative w-full h-full group overflow-hidden cursor-pointer" onClick={() => openModal('https://i.pinimg.com/736x/c7/ac/2c/c7ac2c09e22f053d79d1c4fcf4508192.jpg')}>
                <Image
                  src="https://i.pinimg.com/736x/c7/ac/2c/c7ac2c09e22f053d79d1c4fcf4508192.jpg"
                  alt="Khoảnh khắc 6"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 row-span-2">
              <div className="relative w-full h-full group overflow-hidden cursor-pointer" onClick={() => openModal('https://i.pinimg.com/736x/06/b5/ee/06b5eea6b63627313f023432e00a71fe.jpg')}>
                <Image
                  src="https://i.pinimg.com/736x/06/b5/ee/06b5eea6b63627313f023432e00a71fe.jpg"
                  alt="Khoảnh khắc 7"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 row-span-2">
              <div className="relative w-full h-full group overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src="https://i.pinimg.com/736x/1f/be/4a/1fbe4aa09f8f4fb1ef6af27631a3c7f5.jpg"
                    alt="Khoảnh khắc 8"
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-[2px]"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <Link 
                    href="/gallery"
                    className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"
                  >
                    <span className="text-white text-lg tracking-[0.2em] mb-4">XEM THÊM</span>
                    <span className="px-6 py-3 border border-white text-white hover:bg-white hover:text-gray-900 transition-colors tracking-[0.1em] text-sm">
                      BỘ SƯU TẬP
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Add View All Button */}
          <div className="text-center mt-20">
            <Link 
              href="/gallery" 
              className="inline-block group relative overflow-hidden"
            >
              <div className="relative px-12 py-5">
                {/* Background layers */}
                <div className="absolute inset-0 border border-gray-200 group-hover:border-black transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right delay-100"></div>
                
                {/* Text layers */}
                <div className="relative flex items-center justify-center space-x-6">
                  <span className="relative tracking-[0.3em] text-sm font-light text-black group-hover:text-white transition-colors duration-500">
                    XEM TẤT CẢ BỘ SƯU TẬP
                  </span>
                  <span className="relative w-12 h-[1px] bg-black group-hover:bg-white transition-colors duration-500 transform group-hover:translate-x-2 transition-transform"></span>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative w-full h-full md:w-auto md:h-auto md:max-w-[90vw] md:max-h-[90vh] p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 cursor-pointer"
              onClick={closeModal}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage}
                alt="Gallery Image"
                width={1200}
                height={800}
                className="object-contain max-h-[90vh]"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="relative py-40">
        <div className="absolute inset-0">
          <Image
            src="https://lorrynsmit.photography/wp-content/uploads/2022/04/CaseyandYingPrenup-13.jpg"
            alt="Contact Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <span className="text-sm tracking-[0.3em] text-gray-300 mb-6 block font-light">
              LIÊN HỆ
            </span>
            <h2 className="contact-title text-4xl md:text-5xl font-light mb-8 tracking-wide playfair-font">
              Hãy Để Chúng Tôi Giúp Bạn
            </h2>
            <div className="w-20 h-[1px] bg-white/20 mx-auto mb-8"></div>
            
            <p className="text-lg md:text-xl mb-12 text-gray-200 font-light tracking-wide leading-relaxed">
              Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí
            </p>
            
            <Link href="/contact" className="group relative inline-flex items-center cursor-pointer">
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
              <span className="tracking-[0.3em] text-sm font-light pr-10">ĐẶT LỊCH TƯ VẤN</span>
              <svg 
                className="w-4 h-4 absolute right-0 transition-transform duration-500 group-hover:translate-x-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1" 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
