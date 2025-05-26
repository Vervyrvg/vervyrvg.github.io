import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, Zap } from 'lucide-react';

interface HardSkill {
  name: string;
  description: string;
  icon: string;
  certificationLink: string;
  level: string;
  color: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Fortinet NSE",
    description: "Network Security Expert - Certificación en soluciones de seguridad de red Fortinet, incluyendo FortiGate firewalls, FortiAnalyzer y gestión de políticas de seguridad avanzadas",
    icon: "shield",
    certificationLink: "https://training.fortinet.com/local/staticpage/view.php?page=nse_institute",
    level: "Professional",
    color: "from-red-500 to-orange-600"
  },
  {
    name: "WatchGuard Certified",
    description: "WatchGuard Certified Professional - Especialización en firewalls WatchGuard, configuración de políticas de seguridad y protección contra amenazas avanzadas",
    icon: "eye",
    certificationLink: "https://www.watchguard.com/wgrd-training/certification",
    level: "Professional",
    color: "from-blue-500 to-cyan-600"
  },
  {
    name: "Check Point CCSA",
    description: "Certified Security Administrator - Administración y configuración de soluciones Check Point, incluyendo SmartConsole, políticas de seguridad y VPN",
    icon: "lock",
    certificationLink: "https://training-certifications.checkpoint.com",
    level: "Administrator",
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "Palo Alto PCNSE",
    description: "Certified Network Security Engineer - Certificación avanzada en plataforma Palo Alto Networks, incluyendo Next-Generation Firewalls y Panorama",
    icon: "zap",
    certificationLink: "https://www.paloaltonetworks.com/services/education/certification",
    level: "Expert",
    color: "from-purple-500 to-indigo-600"
  }
];

const TypewriterText = ({ text, isVisible, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isVisible && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (!isVisible) {
      setDisplayText('');
      setCurrentIndex(0);
    }
  }, [currentIndex, isVisible, text, speed]);

  return (
    <p className="text-gray-300 text-sm leading-relaxed min-h-[80px]">
      {displayText}
      {isVisible && currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </p>
  );
};

const IconComponent = ({ iconType, className }) => {
  const icons = {
    shield: Shield,
    eye: Eye,
    lock: Lock,
    zap: Zap
  };
  
  const Icon = icons[iconType] || Shield;
  return <Icon className={className} />;
};

const CertificationCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationDelay, setAnimationDelay] = useState(0);

  useEffect(() => {
    setAnimationDelay(index * 200);
  }, [index]);

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${skill.color} p-1 transform transition-all duration-500 hover:scale-105 hover:rotate-1 shadow-lg hover:shadow-2xl`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="bg-gray-900 rounded-lg p-6 h-full relative overflow-hidden">
        {/* Animated background effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-10' : ''}`}></div>
        
        {/* Floating particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-gradient-to-r ${skill.color} rounded-full animate-bounce opacity-60`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s'
                }}
              ></div>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} transform transition-transform duration-300 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
              <IconComponent iconType={skill.icon} className="w-6 h-6 text-white" />
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${skill.color} text-white transform transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}>
              {skill.level}
            </span>
          </div>

          {/* Title */}
          <h3 className={`text-xl font-bold text-white mb-4 transform transition-all duration-300 ${isHovered ? 'text-transparent bg-clip-text bg-gradient-to-r ' + skill.color : ''}`}>
            {skill.name}
          </h3>

          {/* Typewriter Description */}
          <TypewriterText 
            text={skill.description} 
            isVisible={isHovered}
            speed={30}
          />

          {/* Link Button */}
          <div className={`mt-4 transform transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <a
              href={skill.certificationLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r ${skill.color} text-white text-sm font-semibold hover:shadow-lg transform transition-all duration-300 hover:scale-105`}
            >
              Ver Certificación
              <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Animated border */}
        <div className={`absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r ${skill.color} opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-30' : ''}`}></div>
      </div>
    </div>
  );
};

export default function CybersecurityCertifications() {
  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Certificaciones de Ciberseguridad
          </h1>
          <p className="text-gray-400 text-lg">
            Pasa el cursor sobre cada tarjeta para ver la descripción completa
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 animate-fade-in">
          {hardSkills.map((skill, index) => (
            <CertificationCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            🛡️ Especialista en Seguridad de Redes y Firewalls Enterprise
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
