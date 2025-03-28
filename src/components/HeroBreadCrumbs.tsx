'use client'

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Home, ChevronDown } from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
}

interface Breadcrumb {
  name: string;
  path: string | null;
  isActive?: boolean;
}

const HeroBreadCrumbs: React.FC<HeroProps> = ({ 
  title = "Page Title", 
  subtitle = "Découvrez nos solutions innovantes"
}) => {
  // Generate breadcrumb items based on title
  const generateBreadcrumbs = (): Breadcrumb[] => {
    const pathSegments = title.split(' / ');
    const breadcrumbs: Breadcrumb[] = [];
    
    breadcrumbs.push({ name: 'Accueil', path: '/' });
    
    if (pathSegments.length > 1) {
      for (let i = 0; i < pathSegments.length - 1; i++) {
        breadcrumbs.push({ 
          name: pathSegments[i], 
          path: `/${pathSegments.slice(0, i + 1).join('/').toLowerCase().replace(/ /g, '-')}` 
        });
      }
    }
    
    breadcrumbs.push({ 
      name: pathSegments[pathSegments.length - 1], 
      path: null, 
      isActive: true 
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbs = generateBreadcrumbs();
  const mainTitle = title.split(' / ').pop() || title;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Animated SVG Background */}
      <svg 
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="softRedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop 
              offset="0%" 
              style={{ stopColor: '#f87171', stopOpacity: 1 }}
              className="animate-gradient-stop-1"
            />
            <stop 
              offset="100%" 
              style={{ stopColor: '#dc2626', stopOpacity: 1 }}
              className="animate-gradient-stop-2"
            />
          </linearGradient>
        </defs>
        
        <rect 
          width="100%" 
          height="100%" 
          fill="url(#softRedGradient)"
          className="animate-background-pulse"
        />
        
        {/* Soft Animated Shapes */}
        <motion.circle 
          cx="20%" 
          cy="80%" 
          r="100" 
          fill="rgba(255,255,255,0.08)"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.circle 
          cx="80%" 
          cy="20%" 
          r="150" 
          fill="rgba(255,255,255,0.04)"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* Content container */}
      <div className="relative z-20 flex flex-col items-center justify-between h-full px-6 md:px-20 pt-32 pb-12 text-white">
        {/* Top content */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20 backdrop-blur-sm">
              {subtitle}
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {mainTitle}
          </motion.h1>
          
          <motion.div
            className="w-24 h-1 bg-white/80 mx-auto my-8"
            initial={{ width: 0 }}
            animate={{ width: '6rem' }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Explorez nos solutions d&apos;IA avancées conçues pour transformer votre entreprise et créer des expériences client exceptionnelles.
          </motion.p>
          
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            href="/services"
            transition={{ duration: 0.5, delay: 1.2 }}
            
          >
            <button className="px-8 py-3 bg-white text-red-700 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Découvrir
            </button>
          </motion.a>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute left-1/2 bottom-28 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-white/70" />
        </motion.div>

        {/* Bottom breadcrumb */}
        <motion.div 
          className="w-full max-w-4xl mx-auto bg-white/10 rounded-full py-3 px-6 border border-white/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <nav className="flex items-center justify-center text-sm">
            {breadcrumbs.map((breadcrumb, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight size={14} className="mx-2 text-white/50" />
                )}
                
                {breadcrumb.isActive ? (
                  <span className="text-white font-medium">
                    {breadcrumb.name}
                  </span>
                ) : (
                  <a 
                    href={breadcrumb.path || undefined} 
                    className="text-white/70 hover:text-white flex items-center transition-colors"
                  >
                    {index === 0 && <Home size={14} className="mr-1" />}
                    {breadcrumb.name}
                  </a>
                )}
              </div>
            ))}
          </nav>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBreadCrumbs;