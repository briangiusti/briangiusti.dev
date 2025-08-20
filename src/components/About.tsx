'use client';

import { AboutFeature } from '../lib/data';

interface AboutProps {
  title: string;
  subtitle: string;
  features: AboutFeature[];
}

export default function About({ title, subtitle, features }: AboutProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple': return 'bg-purple-100';
      case 'orange': return 'bg-orange-100';
      case 'green': return 'bg-green-100';
      default: return 'bg-gray-100';
    }
  };

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className={`w-16 h-16 ${getColorClasses(feature.color)} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <div className="text-2xl">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
