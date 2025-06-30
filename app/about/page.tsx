'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';

const founders = [
  {
    name: 'Trần Thanh Đức',
    role: 'Founder & Creative Director',
    image: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/434360483_3781747028772641_1698884527041649178_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=lOm2iliPWy0Q7kNvwEY7TQ5&_nc_oc=AdkpGeAmTCqJoEjwS-3uQfISlFfzFWjf3gAdt4Ahnr13VIOJbcxeTSveRSCEZdBKQO_PJ8IqSmRMscpxt0JhAGC3&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=NaSmoenr0iyabth6CMavkQ&oh=00_AfNo855JsUj_wFDO2qVm2pJQRR5_0H_5i_aP4hd6PUqzmQ&oe=686832D1',
    description: 'Với hơn 10 năm kinh nghiệm trong lĩnh vực nhiếp ảnh cưới, Thanh Đức luôn mang đến những góc nhìn độc đáo và sáng tạo trong từng bức ảnh. Anh tin rằng mỗi câu chuyện tình yêu đều xứng đáng được kể một cách đặc biệt và riêng biệt.',
    quote: '"Nhiếp ảnh không chỉ là việc chụp những bức ảnh đẹp, mà còn là nghệ thuật kể chuyện bằng hình ảnh"'
  },
  {
    name: 'Ông Hòa Hạnh',
    role: 'Co-Founder & Art Director',
    image: 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/487392042_1969357763593067_5996567816280357569_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ynSutwIWCawQ7kNvwESMIB-&_nc_oc=AdnhvTBRmwDvqHAAmIQ1AwggERuNYBUpvhuZRlzNi_MHmZDGqIQKLyIIe7mN0cl5XizsHC-BE6B66V4tiu5UpZU_&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=R1uo3IuXUOM6Z619b4HhRg&oh=00_AfMysxHLzBEjjPqSiG64NXa5rDAi-ggK2bGdWO_xUd0vIw&oe=6868301F',
    description: 'Hòa Hạnh mang trong mình niềm đam mê với nghệ thuật và thời trang. Với con mắt thẩm mỹ tinh tế, anh luôn biết cách tạo nên những khung hình độc đáo, kết hợp giữa cổ điển và hiện đại một cách hài hòa.',
    quote: '"Mỗi khoảnh khắc đều là một tác phẩm nghệ thuật đang chờ được khám phá"'
  }
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-[#faf9f7]">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm tracking-[0.3em] text-gray-500 mb-6 block font-light">
            NGƯỜI SÁNG LẬP
          </span>
          <h1 className="text-4xl md:text-6xl font-light mb-8 tracking-wide playfair-font">
            Câu Chuyện Của Chúng Tôi
          </h1>
          <div className="w-20 h-[1px] bg-gray-200 mx-auto mb-12"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed tracking-wide font-light">
            Được thành lập bởi hai người bạn với niềm đam mê nhiếp ảnh, studio của chúng tôi là nơi những câu chuyện tình yêu được kể lại một cách đẹp đẽ và độc đáo nhất.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {founders.map((founder, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-24`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[3/4] overflow-hidden group">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div className="max-w-xl mx-auto md:mx-0">
                    <span className="text-sm tracking-[0.2em] text-gray-400 mb-4 block">
                      {founder.role}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light mb-8 playfair-font">
                      {founder.name}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8 tracking-wide">
                      {founder.description}
                    </p>
                    <blockquote className="text-xl md:text-2xl font-light italic text-gray-500 mb-12 playfair-font">
                      {founder.quote}
                    </blockquote>
                    <button className="group relative inline-flex items-center cursor-pointer">
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-500 group-hover:w-full"></span>
                      <span className="tracking-[0.2em] text-sm font-light pr-10">XEM BỘ SƯU TẬP</span>
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

      {/* Quote Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0">
          <Image
            src="/images/quote-bg.jpg"
            alt="Studio Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wide playfair-font italic">
            "Chúng tôi không chỉ chụp ảnh cưới, chúng tôi tạo nên những kỷ niệm đáng nhớ"
          </h2>
          <div className="w-20 h-[1px] bg-white/20 mx-auto"></div>
        </div>
      </section>
    </div>
  );
} 