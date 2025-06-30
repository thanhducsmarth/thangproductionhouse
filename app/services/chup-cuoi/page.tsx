import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import ContactForm from '@/app/components/ContactForm';

export default function ChupCuoiPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-1.jpg"
              alt="Chụp ảnh cưới"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-[0.2em]">CHỤP ẢNH CƯỚI</h1>
            <p className="text-lg md:text-xl font-light tracking-wider mb-8 max-w-2xl mx-auto">
              Lưu giữ khoảnh khắc hạnh phúc và lãng mạn nhất của bạn với dịch vụ chụp ảnh cưới chuyên nghiệp, sáng tạo và đầy cảm xúc.
            </p>
          </div>
        </section>

        {/* Giới thiệu */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/hero-2.jpg"
                  alt="Chụp ảnh cưới nghệ thuật"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-light tracking-[0.15em] text-gray-900">Về Dịch Vụ</h2>
                <p className="text-gray-600 leading-relaxed">
                  Chúng tôi mang đến cho bạn trải nghiệm chụp ảnh cưới tuyệt vời với ekip chuyên nghiệp, trang thiết bị hiện đại và concept đa dạng phù hợp với từng cặp đôi. Mỗi bức ảnh là một câu chuyện tình yêu được kể lại bằng cảm xúc chân thật nhất.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5" />
                    <p className="text-gray-600 flex-1">Nhiếp ảnh gia giàu kinh nghiệm, sáng tạo</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5" />
                    <p className="text-gray-600 flex-1">Trang phục, make-up và phụ kiện đa dạng</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5" />
                    <p className="text-gray-600 flex-1">Chụp ngoại cảnh, studio hoặc theo yêu cầu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-light tracking-[0.15em] text-center mb-16">GÓI DỊCH VỤ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Package */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <h3 className="text-xl font-light tracking-[0.1em] mb-4">CƠ BẢN</h3>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">• 2 giờ chụp hình</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">• 30 ảnh đã chỉnh sửa</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">• 1 concept đơn giản</span>
                  </li>
                </ul>
                <div className="text-2xl font-light mb-6">5.900.000đ</div>
                <Link href="/contact" className="block text-center py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors tracking-[0.1em] text-sm">
                  LIÊN HỆ NGAY
                </Link>
              </div>

              {/* Premium Package */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-2 border-gray-900 flex flex-col">
                <h3 className="text-xl font-light tracking-[0.1em] mb-4">CAO CẤP</h3>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">• 4 giờ chụp hình</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">• 50 ảnh đã chỉnh sửa</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">• 2 concept cao cấp</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">• Album cao cấp 20x30</span>
                  </li>
                </ul>
                <div className="text-2xl font-light mb-6">9.900.000đ</div>
                <Link href="/contact" className="block text-center py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors tracking-[0.1em] text-sm">
                  LIÊN HỆ NGAY
                </Link>
              </div>

              {/* VIP Package */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <h3 className="text-xl font-light tracking-[0.1em] mb-4">VIP</h3>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">• 6 giờ chụp hình</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">• 100 ảnh đã chỉnh sửa</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">• 3 concept cao cấp</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">• Album cao cấp 25x35</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600">• Video highlights</span>
                  </li>
                </ul>
                <div className="text-2xl font-light mb-6">15.900.000đ</div>
                <Link href="/contact" className="block text-center py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors tracking-[0.1em] text-sm">
                  LIÊN HỆ NGAY
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-light tracking-[0.15em] text-center mb-16">QUY TRÌNH THỰC HIỆN</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="relative w-full aspect-square mb-8 overflow-hidden">
                  <Image
                    src="/images/process-1.jpg"
                    alt="Tư vấn concept"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-2xl font-light">
                    01
                  </div>
                </div>
                <h3 className="text-xl font-light tracking-[0.1em] mb-4">TƯ VẤN CONCEPT</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gặp gỡ trao đổi về ý tưởng, concept phù hợp với phong cách của bạn
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center group">
                <div className="relative w-full aspect-square mb-8 overflow-hidden">
                  <Image
                    src="/images/process-2.jpg"
                    alt="Chuẩn bị trang phục"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-2xl font-light">
                    02
                  </div>
                </div>
                <h3 className="text-xl font-light tracking-[0.1em] mb-4">CHUẨN BỊ TRANG PHỤC</h3>
                <p className="text-gray-600 leading-relaxed">
                  Lựa chọn trang phục, make-up và phụ kiện phù hợp với concept đã chọn
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center group">
                <div className="relative w-full aspect-square mb-8 overflow-hidden">
                  <Image
                    src="/images/process-3.jpg"
                    alt="Chụp hình"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-2xl font-light">
                    03
                  </div>
                </div>
                <h3 className="text-xl font-light tracking-[0.1em] mb-4">CHỤP HÌNH</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ekip chuyên nghiệp thực hiện chụp theo kế hoạch đã thống nhất
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="relative py-20">
          <div className="max-w-[2000px] mx-auto px-4">
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              {/* Text Content - Left Side */}
              <div className="col-span-12 md:col-span-4 relative">
                <div className="sticky top-20 pt-12 pb-8 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-light tracking-[0.15em] mb-8">
                    LƯU GIỮ KHOẢNH KHẮC ĐÁNG NHỚ
                  </h2>
                  <p className="text-lg mb-12 leading-relaxed">
                    Hãy để chúng tôi ghi lại những khoảnh khắc đáng nhớ trong ngày cưới của bạn
                  </p>
                  <Link href="/contact" className="inline-block px-12 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors tracking-[0.1em] text-sm">
                    ĐẶT LỊCH NGAY
                  </Link>
                </div>
              </div>

              {/* Image Grid - Right Side */}
              <div className="col-span-12 md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                <div className="relative aspect-[4/5] group overflow-hidden">
                  <Image
                    src="/images/hero-1.jpg"
                    alt="Khoảnh khắc cưới 1"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="relative aspect-[4/5] group overflow-hidden">
                  <Image
                    src="/images/hero-2.jpg"
                    alt="Khoảnh khắc cưới 2"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="relative aspect-[4/5] group overflow-hidden">
                  <Image
                    src="/images/hero-3.jpg"
                    alt="Khoảnh khắc cưới 3"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-light tracking-[0.15em] text-center mb-12">LIÊN HỆ TƯ VẤN</h2>
            <ContactForm service="Chụp Ảnh Cưới" />
          </div>
        </section>
      </main>
    </>
  );
} 