'use client';

import { SocialLink } from '../lib/data';

interface Resume {
  id: string;
  title: string;
  url: string;
}

interface ContactProps {
  title: string;
  subtitle: string;
  email: string;
  resumes: Resume[];
  socialLinks: SocialLink[];
  copyright: string;
}

export default function Contact({ title, subtitle, email, resumes, socialLinks, copyright }: ContactProps) {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-gray-300 mb-8">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href={`mailto:${email}`}
            className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
          >
            <span>📧</span>
            Email Me
          </a>
          {resumes.map((resume) => (
            <a 
              key={resume.id}
              href={resume.url}
              className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
            >
              <span>📄</span>
              {resume.title}
            </a>
          ))}
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => (
            <a 
              key={social.id}
              href={social.url} 
              className="text-white hover:text-purple-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                <img 
                  src={social.icon} 
                  alt={social.name}
                  className="w-6 h-6 object-contain"
                />
              </div>
            </a>
          ))}
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400">{copyright}</p>
        </div>
      </div>
    </section>
  );
}
