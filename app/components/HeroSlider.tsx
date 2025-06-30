'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Custom styles
const customStyles = `
.swiper-button-next,
.swiper-button-prev {
  display: none;
}

.swiper-pagination-bullet {
  width: 40px;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background: #fff;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-title {
  animation: fadeInUp 1s ease-out forwards;
}

.slide-description {
  animation: fadeInUp 1s ease-out 0.3s forwards;
  opacity: 0;
}

.slide-button {
  animation: fadeInUp 1s ease-out 0.6s forwards;
  opacity: 0;
}
`;

const slides = [
  {
    image: 'https://www.patrickkok.com/wp-content/uploads/2020/08/Malaysia-Pre-wedding-Photographer-Gianina-Gary-8-X2.jpg',
    title: 'Khoảnh Khắc Hạnh Phúc',
    description: 'Nơi những câu chuyện tình yêu được viết nên'
  },
  {
    image: 'https://i.ytimg.com/vi/EfAP9TElVYk/maxresdefault.jpg',
    title: 'Lễ Cưới Trong Mơ',
    description: 'Chúng tôi biến ước mơ của bạn thành hiện thực'
  },
  {
    image: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV80M19waG90b19vZl90YWl3YW5lc2VfY291cGxlX21hcnJpZWRfYmVhdXRpZnVsX184ODU4NjkwZC1kNzdhLTQ1YzYtYjRkZS04OThkMzRjNjZiZGZfMS5qcGc.jpg',
    title: 'Không Gian Lãng Mạn',
    description: 'Thiết kế độc đáo cho ngày trọng đại của bạn'
  }
];

const HeroSlider = () => {
  return (
    <div className="h-screen w-full">
      <style>{customStyles}</style>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="slide-title text-6xl md:text-7xl font-light mb-6 tracking-wider playfair-font">
                  {slide.title}
                </h2>
                <p className="slide-description text-lg md:text-xl max-w-2xl mb-12 tracking-wide font-light">
                  {slide.description}
                </p>
                <button className="slide-button group relative px-12 py-4 overflow-hidden">
                  <span className="absolute inset-x-0 bottom-0 h-[1px] bg-white/30 transition-all group-hover:h-full group-hover:bg-white/10"></span>
                  <span className="relative inline-flex items-center">
                    <span className="tracking-[0.3em] text-sm font-light">KHÁM PHÁ NGAY</span>
                    <svg className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider; 