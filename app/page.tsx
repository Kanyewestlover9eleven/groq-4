'use client';

import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface BusinessInfo {
  BusinessName: string;
  BusinessEmail: string;
  BusinessAddress: string;
  BusinessPhone: string;
}

interface Branding {
  PrimaryColor: string;
  SecondaryColor: string;
  AccentColor1: string;
  AccentColor2: string;
  LogoURL: string;
}

interface Language {
  Language: string;
}

interface AboutUs {
  AboutUsVisionMission: string;
}

interface ProductsServices {
  ProductsServices: string;
}

interface ProductImages {
  ProductImagesURLs: string[];
}

interface AboutUsImages {
  AboutUsImagesURLs: string[];
}

interface SocialMedia {
  SocialMediaLinks: { [key: string]: string };
}

const businessInfo: BusinessInfo = {
  BusinessName: 'Syarikat Contoh Sdn Bhd',
  BusinessEmail: 'contoh@example.com',
  BusinessAddress: 'No. 12, Jalan Contoh, 43000 Kajang, Selangor',
  BusinessPhone: '+603-8734-5678',
};

const branding: Branding = {
  PrimaryColor: '#3b82f6',
  SecondaryColor: '#1e293b',
  AccentColor1: '#10b981',
  AccentColor2: '#f59e0b',
  LogoURL: 'https://example.com/logo.png',
};

const language: Language = {
  Language: 'Both',
};

const aboutUs: AboutUs = {
  AboutUsVisionMission: 'Membina masyarakat yang lebih baik melalui perkhidmatan yang berkualiti.',
};

const productsServices: ProductsServices = {
  ProductsServices: 'Perkhidmatan kami termasuk pembinaan, pengubahsuaian, dan penyelenggaraan.',
};

const productImages: ProductImages = {
  ProductImagesURLs: [
    'https://example.com/product1.jpg',
    'https://example.com/product2.jpg',
    'https://example.com/product3.jpg',
  ],
};

const aboutUsImages: AboutUsImages = {
  AboutUsImagesURLs: [
    'https://example.com/aboutus1.jpg',
    'https://example.com/aboutus2.jpg',
    'https://example.com/aboutus3.jpg',
  ],
};

const socialMedia: SocialMedia = {
  SocialMediaLinks: {
    Facebook: 'https://facebook.com/example',
    Instagram: 'https://instagram.com/example',
    Twitter: 'https://twitter.com/example',
  },
};

function Navbar() {
  return (
    <nav className={`fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-${branding.PrimaryColor} text-white`}>
      <Link href="#">
        <Image src={branding.LogoURL} alt={businessInfo.BusinessName} width={100} height={50} />
      </Link>
      <ul className="flex items-center space-x-4">
        <li>
          <Link href="#hero">Home</Link>
        </li>
        <li>
          <Link href="#about-us">About Us</Link>
        </li>
        <li>
          <Link href="#products-services">Products/Services</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" className={`h-screen flex justify-center items-center p-4 bg-gradient-to-b from-${branding.PrimaryColor} to-${branding.SecondaryColor} text-white`}>
      <h1 className="text-5xl font-bold">{businessInfo.BusinessName}</h1>
    </section>
  );
}

function AboutUs() {
  return (
    <section id="about-us" className="p-4">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-lg">{aboutUs.AboutUsVisionMission}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {aboutUsImages.AboutUsImagesURLs.map((image, index) => (
          <Image key={index} src={image} alt={`About Us ${index + 1}`} width={300} height={200} />
        ))}
      </div>
    </section>
  );
}

function ProductsServices() {
  return (
    <section id="products-services" className="p-4">
      <h2 className="text-3xl font-bold mb-4">Products/Services</h2>
      <p className="text-lg">{productsServices.ProductsServices}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {productImages.ProductImagesURLs.map((image, index) => (
          <Image key={index} src={image} alt={`Product ${index + 1}`} width={300} height={200} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, email, message);
  };

  return (
    <section id="contact" className="p-4">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-lg">{businessInfo.BusinessAddress}</p>
      <p className="text-lg">{businessInfo.BusinessEmail}</p>
      <p className="text-lg">{businessInfo.BusinessPhone}</p>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
          className="block w-full p-2 mb-4 border border-gray-400 rounded"
        />
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          className="block w-full p-2 mb-4 border border-gray-400 rounded"
        />
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Message"
          className="block w-full p-2 mb-4 border border-gray-400 rounded"
        />
        <button type="submit" className={`bg-${branding.PrimaryColor} text-white p-2 rounded`}>
          Send
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className={`p-4 bg-${branding.PrimaryColor} text-white`}>
      <ul className="flex items-center space-x-4">
        {Object.keys(socialMedia.SocialMediaLinks).map((key, index) => (
          <li key={index}>
            <Link href={socialMedia.SocialMediaLinks[key]} target="_blank" rel="noreferrer">
              {key}
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-lg mt-4">
        {businessInfo.BusinessName} &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AboutUs />
      <ProductsServices />
      <Contact />
      <Footer />
    </div>
  );
}