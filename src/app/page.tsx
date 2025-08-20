import { portfolioData } from '../lib/data';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedWork from '../components/FeaturedWork';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header name={portfolioData.personal.name} />
      <Hero 
        name={portfolioData.personal.name}
        title={portfolioData.personal.title}
        subtitle={portfolioData.personal.subtitle}
        profileImage={portfolioData.personal.profileImage}
        codeIcon={portfolioData.personal.codeIcon}
      />
      <About 
        title={portfolioData.about.title}
        subtitle={portfolioData.about.subtitle}
        features={portfolioData.about.features}
      />
      <FeaturedWork 
        title={portfolioData.work.title}
        subtitle={portfolioData.work.subtitle}
        projects={portfolioData.work.projects}
      />
      <Skills 
        title={portfolioData.skills.title}
        subtitle={portfolioData.skills.subtitle}
        categories={portfolioData.skills.categories}
      />
      <Certifications 
        title={portfolioData.certifications.title}
        subtitle={portfolioData.certifications.subtitle}
        items={portfolioData.certifications.items}
      />
      <Contact 
        title={portfolioData.contact.title}
        subtitle={portfolioData.contact.subtitle}
        email={portfolioData.contact.email}
        resumes={portfolioData.contact.resumes}
        socialLinks={portfolioData.contact.socialLinks}
        copyright={portfolioData.contact.copyright}
      />
    </main>
  );
}
