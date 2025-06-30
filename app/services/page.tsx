'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const services = [
  {
    id: 'wedding',
    title: 'Chụp Ảnh Cưới',
    description: 'Lưu giữ những khoảnh khắc đẹp nhất trong ngày trọng đại của bạn.',
    features: [
      { text: 'Album ảnh cao cấp', icon: '✧' },
      { text: 'Trang điểm chuyên nghiệp', icon: '❋' },
      { text: 'Trang phục đa dạng', icon: '✦' },
      { text: 'Địa điểm đẹp', icon: '❊' },
      { text: 'Ekip chuyên nghiệp', icon: '✯' }
    ],
    image: 'https://i.pinimg.com/736x/9c/49/70/9c49700f84dbb9a405bb41c2c52462d8.jpg',
    price: '5.000.000đ'
  },
  {
    id: 'event',
    title: 'Sự Kiện & Tiệc',
    description: 'Tổ chức sự kiện trọn gói với không gian sang trọng.',
    features: [
      { text: 'Trang trí tiệc cưới', icon: '✧' },
      { text: 'Tổ chức sự kiện', icon: '❋' },
      { text: 'Cho thuê thiết bị', icon: '✦' },
      { text: 'Dịch vụ ẩm thực', icon: '❊' },
      { text: 'Âm thanh, ánh sáng', icon: '✯' }
    ],
    image: 'https://i.pinimg.com/736x/cd/d7/97/cdd797289310cc21c26ef533adabbca9.jpg',
    price: '15.000.000đ'
  },
  {
    id: 'baby',
    title: 'Chụp Ảnh Thôi Nôi',
    description: 'Ghi lại những khoảnh khắc đáng yêu của bé.',
    features: [
      { text: 'Chụp ảnh trong studio', icon: '✧' },
      { text: 'Chụp ảnh phóng sự', icon: '❋' },
      { text: 'Trang trí backdrop', icon: '✦' },
      { text: 'Album ảnh cao cấp', icon: '❊' },
      { text: 'Quà tặng kỷ niệm', icon: '✯' }
    ],
    image: 'https://i.pinimg.com/736x/5a/64/b7/5a64b7a5af979f1e9ae62f77d1e78ec0.jpg',
    price: '3.000.000đ'
  }
];

export default function Services() {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-wider playfair-font">
              Dịch Vụ
            </h1>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-[1px]">
              <span className="absolute inset-0 bg-black/20"></span>
              <span className="absolute inset-0 bg-black/40 scale-x-0 animate-expandLine"></span>
            </div>
          </div>
          <p className="max-w-xl mx-auto text-gray-500 text-lg leading-relaxed tracking-wide mt-12 opacity-0 animate-fadeInUp">
            Chúng tôi cung cấp đầy đủ các dịch vụ cao cấp, từ chụp ảnh cưới, sự kiện đến chụp ảnh thôi nôi.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center opacity-0 animate-fadeInUp group/card`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Image - Xen kẽ trái/phải */}
                <div className={`w-full lg:w-1/2 group ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} relative`}>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-md">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                    <div className="absolute inset-0 border border-black/5 rounded-lg"></div>
                  </div>
                  {/* Decorative borders */}
                  <div className="absolute -inset-2 border border-black/0 rounded-lg transition-all duration-500 group-hover/card:border-black/20 opacity-0 group-hover/card:opacity-100"></div>
                  <div className="absolute -inset-1 border border-black/0 rounded-lg transition-all duration-700 group-hover/card:border-black/10 opacity-0 group-hover/card:opacity-100 delay-100"></div>
                </div>

                {/* Content - Xen kẽ phải/trái */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} relative`}>
                  <div className="max-w-lg relative">
                    <div className="absolute -inset-2 border border-black/0 rounded-lg transition-all duration-500 group-hover/card:border-black/20 opacity-0 group-hover/card:opacity-100"></div>
                    <div className="absolute -inset-1 border border-black/0 rounded-lg transition-all duration-700 group-hover/card:border-black/10 opacity-0 group-hover/card:opacity-100 delay-100"></div>
                    <div className="relative z-10">
                      <h2 className="text-4xl font-light mb-8 playfair-font relative inline-block group">
                        {service.title}
                        <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-black transition-all duration-500 group-hover:w-full"></span>
                      </h2>
                      <p className="text-gray-500 mb-10 font-light text-lg leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-6 mb-12">
                        {service.features.map((feature, i) => (
                          <div 
                            key={i} 
                            className="flex items-center space-x-6 group"
                            style={{ transitionDelay: `${i * 100}ms` }}
                          >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-black/5 group-hover:border-black/20 transition-all duration-300">
                              <span className="text-gray-400 group-hover:text-gray-800 transition-colors duration-300 text-xl">
                                {feature.icon}
                              </span>
                            </div>
                            <span className="text-gray-500 font-light text-lg transition-colors duration-300 group-hover:text-gray-900">
                              {feature.text}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Price & Button */}
                      <div className="flex items-center justify-between pt-8 border-t border-black/5">
                        <div className="relative group">
                          <div className="flex items-baseline space-x-3">
                            <span className="text-sm font-light text-gray-500 tracking-wider">Từ</span>
                            <span className="text-4xl font-light text-gray-900 tracking-widest playfair-font relative z-10">
                              {service.price}
                            </span>
                          </div>
                          <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                          <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-500 group-hover:w-full"></div>
                        </div>
                        <Link 
                          href={`/services/${service.id}`}
                          className="relative group overflow-hidden"
                        >
                          <span className="absolute inset-0 bg-black/5 rounded blur opacity-0 group-hover:opacity-100 transition duration-500"></span>
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                          <span className="relative flex items-center space-x-3 text-sm tracking-widest font-light py-4 px-10 border border-black/10 group-hover:border-black/30 transition-all duration-500">
                            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">XEM CHI TIẾT</span>
                            <span className="text-xl relative z-10 group-hover:translate-x-1 transition-all duration-300 group-hover:text-white">→</span>
                            <span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/95">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
          <h2 className="text-4xl font-light mb-8 tracking-wide playfair-font opacity-0 animate-fadeInUp contact-title">
            Để Lại Khoảnh Khắc Đẹp Nhất
          </h2>
          <p className="text-gray-400 mb-10 font-light tracking-wide text-lg max-w-xl mx-auto opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            Liên hệ ngay để được tư vấn chi tiết về các gói dịch vụ
          </p>
          <Link 
            href="/contact"
            className="relative inline-block group"
          >
            <span className="absolute inset-0 border border-white/30 transition-colors duration-300 group-hover:border-white"></span>
            <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            <span className="relative inline-block text-sm tracking-widest font-light px-16 py-5 transition-colors duration-300 group-hover:text-black">
              ĐẶT LỊCH HẸN
            </span>
          </Link>
        </div>
      </section>

      <style jsx global>{`
        @keyframes expandLine {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-expandLine {
          animation: expandLine 1s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
} 