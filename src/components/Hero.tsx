'use client';

interface HeroProps {
  name: string;
  title: string;
  subtitle: string;
  profileImage: string;
  codeIcon: string;
}

export default function Hero({ name, title, subtitle, profileImage, codeIcon }: HeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {title.split('**').map((part, index) => 
                index % 2 === 1 ? (
                  <span key={index} className="text-purple-600">{part}</span>
                ) : (
                  part
                )
              )}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('work')}
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors cursor-pointer"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors cursor-pointer"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Profile Picture Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                <div className="text-6xl text-gray-600">{profileImage}</div>
              </div>
              {/* Code Icon Overlay */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{codeIcon}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
