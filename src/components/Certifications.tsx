'use client';

import { Certification } from '../lib/data';
import Image from "next/image";

interface CertificationsProps {
  title: string;
  subtitle: string;
  items: Certification[];
}

export default function Certifications({ title, subtitle, items }: CertificationsProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-100';
      case 'purple': return 'bg-purple-100';
      case 'green': return 'bg-green-100';
      case 'orange': return 'bg-orange-100';
      default: return 'bg-gray-100';
    }
  };

  const getImageSize = (certId: string) => {
    // Use larger dimensions for better quality, then scale down with CSS
    switch (certId) {
      case 'uva':
      case 'umass':
        return { width: 80, height: 80, scale: 'scale-75' };
      default:
        return { width: 64, height: 64, scale: 'scale-100' };
    }
  };

  return (
    <section id="certifications" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((cert) => (
            <div key={cert.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md border-2 border-gray-100 overflow-hidden">
                    <Image 
                      className={`rounded-full object-contain transform transition-transform ${getImageSize(cert.id).scale}`}
                      src={cert.icon} 
                      alt={cert.title} 
                      width={getImageSize(cert.id).width} 
                      height={getImageSize(cert.id).height}
                      quality={100}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-purple-600">{cert.issuer}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-500">{cert.date}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
