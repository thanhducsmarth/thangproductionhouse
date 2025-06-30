'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

// Tách data ra khỏi component để tránh re-render không cần thiết
const albums = [
  {
    id: 1,
    title: 'Đám Cưới Trên Biển',
    description: 'Album chụp tại bãi biển Nha Trang với concept lãng mạn',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1067&fit=crop',
    date: 'Tháng 3, 2024',
    location: 'Nha Trang',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1067&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=1067&fit=crop',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=1067&fit=crop',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1067&fit=crop'
    ]
  },
  {
    id: 2,
    title: 'Tiệc Cưới Trong Nhà',
    description: 'Không gian sang trọng tại trung tâm tiệc cưới',
    coverImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=1067&fit=crop',
    date: 'Tháng 2, 2024',
    location: 'TP.HCM',
    images: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=1067&fit=crop',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=1067&fit=crop',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1067&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1067&fit=crop'
    ]
  },
  {
    id: 3,
    title: 'Chụp Ảnh Ngoại Cảnh',
    description: 'Album chụp tại các địa điểm nổi tiếng Đà Lạt',
    coverImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=1067&fit=crop',
    date: 'Tháng 1, 2024',
    location: 'Đà Lạt',
    images: [
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=1067&fit=crop',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1067&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1067&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=1067&fit=crop'
    ]
  }
];

// Tách Modal thành component riêng
function AlbumModal({ album, onClose, onImageClick }: {
  album: typeof albums[0] | undefined;
  onClose: () => void;
  onImageClick: (imagePath: string) => void;
}) {
  if (!album) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-screen px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <button
            className="fixed top-8 right-8 text-white hover:text-gray-300 transition-colors"
            onClick={onClose}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" onClick={(e) => e.stopPropagation()}>
            {album.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square cursor-pointer group"
                onClick={() => onImageClick(image)}
              >
                <Image
                  src={image}
                  alt={`Album image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Tách ImageModal thành component riêng
function ImageModal({ imagePath, onClose }: { imagePath: string | null; onClose: () => void }) {
  if (!imagePath) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <button
        className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors"
        onClick={onClose}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="relative w-full h-full md:w-auto md:h-auto md:max-w-[90vw] md:max-h-[90vh] p-4">
        <Image
          src={imagePath}
          alt="Selected image"
          width={1200}
          height={800}
          className="object-contain max-h-[90vh]"
          priority
          sizes="100vw"
        />
      </div>
    </div>
  );
}

// Component chính
export default function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openAlbum = (albumId: number) => {
    setSelectedAlbum(albumId);
    document.body.classList.add('overflow-hidden');
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
    setSelectedImage(null);
    document.body.classList.remove('overflow-hidden');
  };

  const openImage = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const selectedAlbumData = albums.find(a => a.id === selectedAlbum);

  return (
    <div className="relative min-h-screen bg-[#faf9f7]">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm tracking-[0.3em] text-gray-500 mb-6 block font-light">
            BỘ SƯU TẬP
          </span>
          <h1 className="text-4xl md:text-6xl font-light mb-8 tracking-wide playfair-font">
            Album Cưới Tiêu Biểu
          </h1>
          <div className="w-20 h-[1px] bg-gray-200 mx-auto mb-12"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed tracking-wide font-light">
            Khám phá những album cưới đẹp nhất của chúng tôi, nơi mỗi khoảnh khắc đều được lưu giữ một cách nghệ thuật và độc đáo.
          </p>
        </div>
      </section>

      {/* Albums Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <div
                key={album.id}
                className="group cursor-pointer"
                onClick={() => openAlbum(album.id)}
              >
                {/* Album Cover */}
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <Image
                    src={album.coverImage}
                    alt={album.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-sm tracking-wider mb-2">{album.date}</p>
                    <p className="text-sm tracking-wider">{album.location}</p>
                  </div>
                </div>
                {/* Album Info */}
                <h3 className="text-xl font-light mb-2 playfair-font">{album.title}</h3>
                <p className="text-gray-600">{album.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modals */}
      <AlbumModal
        album={selectedAlbumData}
        onClose={closeAlbum}
        onImageClick={openImage}
      />
      <ImageModal
        imagePath={selectedImage}
        onClose={closeImage}
      />
    </div>
  );
} 