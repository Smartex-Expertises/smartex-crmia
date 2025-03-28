'use client'

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";
import { Menu, Settings } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Bot, Shield, Database, BarChart3, Users, Zap, BrainCircuit, Rocket, Headphones} from "lucide-react";
import Image from "next/image";

import { useInView } from "framer-motion";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  // Items de navigation pour ordinateur et mobile
  const navItems = [
    { name: "Accueil", href: "/accueil", section: "hero" },
    { name: "Services", href: "/services", section: "services" },
    { name: "Nos modes de collaboration", href: "/solutions", section: "solutions" },
    { name: "Nos secteurs prioritaires", href: "/secteurs-prioritaires", section: "secteurs" },
    
    { name: "Contactez-nous", href: "/contact", section: "contact" }
  ];
  // Animation variants - déplacé en dehors du composant avec useMemo pour éviter les re-rendus
  const animations = useMemo(() => ({
    fadeInUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    },
    staggerContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15
        }
      }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.7 }
      }
    },
    slideIn: {
      hidden: { x: -80, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
    },
    zoomIn: {
      hidden: { scale: 0.9, opacity: 0 },
      visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } }
    },
    pulse: {
      initial: { scale: 1 },
      animate: { 
        scale: [1, 1.03, 1],
        transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
      }
    }
  }), []);
  

  // Fermer le menu quand un lien est cliqué
  const handleNavClick = () => {
    setMenuOpen(false);
  };
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="hero" className="w-full min-h-screen relative overflow-hidden">

      {/* Gradient background - modifié pour être plus clair */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f8f8] to-[#efefef] z-0"></div>
      
      {/* Animated dots background - points plus subtils */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="pattern-circles" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="2" cy="2" r="0.5" fill="#ff3333" fillOpacity="0.15"></circle>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
      </div>
      
      {/* Accent shapes - rendus plus subtils */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.5 }}
        className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#ff3333]/30 blur-[100px] z-0"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#a91016]/30 blur-[120px] z-0"
      />
      
      {/* Conteneur de contenu - tout va dans z-10 pour apparaître au-dessus du fond */}
      <div className="w-full flex flex-col items-center relative z-1000">
        {/* HEADER - modifié pour fond clair */}
        <header className="w-full flex justify-between items-center py-1 px-6 md:px-10 bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-200 shadow-sm">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#ff3333] to-[#a91016] bg-clip-text text-transparent flex items-center gap-2">
              <motion.div
                initial={{ rotate: -10, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image 
                  src="/logo2.png" 
                  alt="Logo" 
                  width={80} 
                  height={100} 
                  priority
                  className="filter drop-shadow-lg"
                />
              </motion.div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                 CRMIA
              </motion.span>
            </h1>
          </motion.div>

          {/* Navigation sur Desktop - texte adapté pour fond clair */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item, index) => (
              <motion.a 
                key={item.name}
                href={item.href} 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.07 }}
                className={`text-md font-medium transition-all relative text-gray-700 hover:text-[#ff3333]`}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button className="bg-gradient-to-r from-[#ff3333] to-[#a91016] hover:from-[#a91016] hover:to-[#ff3333] text-white font-medium transition-all shadow-lg shadow-[#a91016]/20 hover:shadow-[#a91016]/40">
                Démo gratuite
              </Button>
            </motion.div>
          </motion.nav>
          
          {/* Bouton de menu mobile */}
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-800" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <Menu size={28} />
          </motion.button>
        </header>

        {/* MENU MOBILE - adapté pour fond clair */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md flex flex-col items-center py-6 space-y-6 z-40 border-b border-gray-200 shadow-md"
            >
              {navItems.map((item, index) => (
                <motion.a 
                  key={item.name}
                  href={item.href} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.07 }}
                  className={`text-lg font-medium transition-colors hover:text-[#ff3333] ${
                    activeSection === item.section ? 'text-[#ff3333]' : 'text-gray-700'
                  }`}
                  onClick={handleNavClick}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-[#ff3333] to-[#a91016] hover:from-[#a91016] hover:to-[#ff3333] text-white font-medium w-4/5 mt-4 shadow-lg shadow-[#a91016]/20">
                  Démo gratuite
                </Button>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>    
      
      <div className="container mx-auto px-6 lg:px-8 py-20 pt-36 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left side - Text Content - adapté pour fond clair */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff3333]/30 bg-[#ff3333]/10 text-[#ff3333] text-sm font-medium mb-6"
          >
            <Zap size={16} />
            <span>Technologie IA de pointe</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-800"
          >
            Révolutionnez votre 
            <span className="relative inline-block mx-3">
              <span className="relative z-10 bg-gradient-to-r from-[#ff3333] to-[#a91016] bg-clip-text text-transparent">
                relation client
              </span>
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -bottom-2 left-0 w-full"
                width="100%"
                height="8"
                viewBox="0 0 100 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5C20 -0.5 50 -0.5 99 5.5"
                  stroke="#ff3333"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
            <br />
            avec SMARTEX CRMIA
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl"
          >
            SMARTEX CRMIA optimise votre service client, automatise vos tâches et
            génère des insights précieux pour accélérer votre croissance.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              href="/contact"
            >
              <Button className="bg-gradient-to-r from-[#ff3333] to-[#a91016] hover:from-[#a91016] hover:to-[#ff3333] text-white px-8 py-6 text-lg font-medium shadow-xl shadow-[#a91016]/20 hover:shadow-[#a91016]/30">
                Démonstration gratuite
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              href="/contact"
            >
              <Button variant="outline" className="bg-white/60 backdrop-blur-md border-gray-300 text-gray-700 hover:bg-gray-100/60 px-8 py-6 text-lg font-medium">
                <MessageCircle size={18} className="mr-2" />
                Parler à un expert
              </Button>
            </motion.a>
          </motion.div>
          
          {/* Stats - adaptés pour fond clair */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-8 mt-12"
          >
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-[#ff3333]/10 flex items-center justify-center">
                <Bot size={24} className="text-[#ff3333]" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-800">97%</h4>
                <p className="text-gray-500 text-sm">Satisfaction client</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-[#ff3333]/10 flex items-center justify-center">
                <Zap size={24} className="text-[#ff3333]" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-800">+45%</h4>
                <p className="text-gray-500 text-sm">Efficacité opérationnelle</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-[#ff3333]/10 flex items-center justify-center">
                <Shield size={24} className="text-[#ff3333]" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-800">24/7</h4>
                <p className="text-gray-500 text-sm">Disponibilité</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right side - 3D visual - adapté pour arrière-plan clair */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-lg">
            {/* Main Image */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="w-full h-full relative">
                <Image 
                  src="/dash.jpg" 
                  alt="IA Dashboard" 
                  width={600} 
                  height={350} 
                  className="rounded-xl shadow-2xl shadow-[#ff3333]/10"
                />
                <div className="absolute inset-0 rounded-xl border border-gray-200 bg-gradient-to-tr from-white/20 to-transparent"></div>
                
                {/* Floating elements - adaptés pour fond clair */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="absolute -top-8 -right-8 p-4 bg-white rounded-lg border border-gray-200 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#ff3333]/20 flex items-center justify-center">
                      <Bot size={20} className="text-[#ff3333]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Assistant IA</h4>
                      <p className="text-sm text-gray-500">Actif 24/7</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                  className="absolute -bottom-6 -left-6 p-4 bg-white rounded-lg border border-gray-200 shadow-xl"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-500">Satisfaction</span>
                      <span className="text-sm text-[#ff3333]">97%</span>
                    </div>
                    <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "97%" }}
                        transition={{ delay: 1.6, duration: 1 }}
                        className="h-full bg-gradient-to-r from-[#ff3333] to-[#a91016]"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Background glow */}
            <div className="absolute -inset-4 bg-[#ff3333]/5 rounded-full blur-3xl z-0"></div>
            
            {/* Animated rings */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0.1, 0.3, 0.1], scale: [0.8, 1.1, 0.8] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 border-2 border-[#ff3333]/10 rounded-full z-0"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: [0.05, 0.2, 0.05], scale: [0.9, 1.2, 0.9] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute inset-0 border border-[#ff3333]/5 rounded-full z-0"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator - adapté pour fond clair */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-14 border-2 border-[#ff3333]/30 rounded-full flex justify-center pt-3"
        >
          <div className="w-2 h-2 bg-[#ff3333] rounded-full" />
        </motion.div>
      </motion.div>
      <section 
      id="about" 
      ref={sectionRef}
      className="w-full py-24 relative overflow-hidden bg-gradient-to-b from-[#efefef] to-white"
    >
      {/* Background accent elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#ff3333]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#a91016]/5 rounded-full blur-3xl -z-10"></div>
      
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute top-0 right-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="about-pattern-circles" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="about-pattern-circle" cx="2" cy="2" r="0.5" fill="#ff3333" fillOpacity="0.15"></circle>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#about-pattern-circles)"></rect>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff3333]/30 bg-[#ff3333]/10 text-[#ff3333] text-sm font-medium mb-6"
          >
            <BrainCircuit size={16} />
            <span>Notre solution</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          >
            SMARTEX CRMIA : La puissance de l'IA au service de votre{" "}
            <span className="bg-gradient-to-r from-[#ff3333] to-[#a91016] bg-clip-text text-transparent">
              relation client
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Le CRM (Customer Relationship Management) est une stratégie de gestion des relations et 
            interactions d'une entreprise avec ses clients ou clients potentiels. SMARTEX CRMIA regroupe 
            l'ensemble des prestations qui visent à développer des solutions IA pour vous aider à 
            scaler plus rapidement et à améliorer votre performance globale.
          </motion.p>
        </motion.div>
        
        {/* Content with image and text */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          {/* Left side - Image with animations */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <motion.div
                initial={{ y: 0 }}
                animate={isInView ? { y: [0, -10, 0] } : { y: 0 }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image 
                  src="/crm.jpg" 
                  alt="CRM Analytics Dashboard" 
                  width={600} 
                  height={450}
                  className="rounded-xl shadow-2xl shadow-[#ff3333]/10 z-10 relative"
                />
                <div className="absolute inset-0 rounded-xl border border-gray-200 bg-gradient-to-tr from-white/20 to-transparent"></div>
              </motion.div>
              
              {/* Animated elements around the image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: [0.3, 0.7, 0.3], scale: [0.8, 1, 0.8] } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-4 border-2 border-[#ff3333]/10 rounded-full z-0"
              />
              
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute top-10 -right-10 p-4 bg-white rounded-lg border border-gray-200 shadow-xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ff3333]/20 flex items-center justify-center">
                    <BarChart3 size={20} className="text-[#ff3333]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Performance</h4>
                    <p className="text-sm text-gray-500">+45% d'efficacité</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating engagement card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-10 -left-10 p-4 bg-white rounded-lg border border-gray-200 shadow-xl z-20"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-500">Engagement client</span>
                    <span className="text-sm text-[#ff3333]">+68%</span>
                  </div>
                  <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "68%" } : { width: 0 }}
                      transition={{ delay: 1.2, duration: 1 }}
                      className="h-full bg-gradient-to-r from-[#ff3333] to-[#a91016]"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side - Text content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl font-bold text-gray-800 mb-6"
            >
              Optimisez votre stratégie CRM avec l'intelligence artificielle
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-600 mb-6"
            >
              Le CRM cherche à regrouper et rationaliser les processus, les activités de vente, 
              de marketing et d'assistance à la clientèle pour améliorer la rentabilité. 
              Avec SMARTEX CRMIA, nous intégrons les technologies d'intelligence artificielle les plus avancées 
              pour transformer votre approche client.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-600 mb-8"
            >
              Notre solution permet de documenter, suivre et gérer les relations avec les clients 
              existants et potentiels de manière intelligente. Grâce à l'analyse prédictive et 
              aux algorithmes d'apprentissage automatique, SMARTEX CRMIA vous aide à anticiper les 
              besoins de vos clients et à personnaliser vos interactions à grande échelle.
            </motion.p>
            
            {/* Benefits list */}
            <motion.ul 
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="space-y-4"
            >
              <motion.li variants={itemVariants} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#ff3333]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#ff3333]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700">Augmentez votre taux de conversion grâce à l'analyse prédictive</p>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#ff3333]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#ff3333]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700">Réduisez les coûts opérationnels via l'automatisation intelligente</p>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#ff3333]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#ff3333]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700">Personnalisez l'expérience client à grande échelle</p>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#ff3333]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#ff3333]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700">Obtenez des insights exploitables pour votre croissance</p>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
        
        {/* Feature cards */}
        {/* <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl font-bold text-gray-800 mb-10 text-center"
        >
          Fonctionnalités principales
        </motion.h3> */}
        
        {/* <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(169, 16, 22, 0.1)" }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#ff3333]/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div> */}
        
        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 bg-gradient-to-r from-[#ff3333]/10 to-[#a91016]/10 rounded-2xl p-10 text-center relative overflow-hidden"
        >
          {/* Background accent */}
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#ff3333]/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-[#a91016]/20 blur-3xl"></div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 relative z-10"
          >
            Prêt à transformer votre <span className="bg-gradient-to-r from-[#ff3333] to-[#a91016] bg-clip-text text-transparent">gestion de la relation client</span> ?
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto relative z-10"
          >
            Découvrez comment SMARTEX CRMIA peut aider votre entreprise à scaler plus rapidement 
            et à améliorer sa performance globale.
          </motion.p>
          
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            href="/contact"
            className="bg-gradient-to-r from-[#ff3333] to-[#a91016] hover:from-[#a91016] hover:to-[#ff3333] text-white px-8 py-4 rounded-lg text-lg font-medium shadow-xl shadow-[#a91016]/20 hover:shadow-[#a91016]/30 relative z-10"
          >
            Demander une démo
          </motion.a>
        </motion.div>
      </div>
    </section>
    {/* SECTION SERVICES */}
    <section 
  id="services" 
  className="w-full py-20 px-6 md:px-20 relative"
>
  <div className="absolute inset-0 bg-[#0a0a0a] opacity-80 z-0"></div>
  
  <motion.div 
    variants={animations.fadeInUp}
    initial="hidden"
    animate={"visible"}
    className="container mx-auto relative z-10"
  >
    <motion.div 
      variants={animations.fadeIn}
      className="text-center mb-16"
    >
      <motion.span 
        variants={animations.zoomIn}
        className="px-4 py-2 bg-gradient-to-r from-[#a91016]/20 to-[#ff3333]/20 text-[#ff3333] rounded-full text-sm font-medium inline-block border border-[#ff3333]/20 shadow-lg shadow-[#ff3333]/5"
      >
        Nos Services
      </motion.span>
      <motion.h2 
        variants={animations.slideIn}
        className="text-4xl font-bold mt-6 mb-4"
      >
        Solutions IA pour tous vos besoins
      </motion.h2>
      <motion.p 
        variants={animations.fadeIn}
        className="text-xl text-gray-400 max-w-2xl mx-auto"
      >
        Découvrez comment notre technologie peut transformer votre relation client et booster vos performances
      </motion.p>
    </motion.div>
    
    <motion.div 
      variants={animations.staggerContainer}
      initial="hidden"
      animate={"visible"}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {/* Service 1 */}
      <motion.div 
        variants={animations.fadeIn}
        whileHover={{ y: -5, scale: 1.01 }}
        className="bg-gradient-to-br from-[#1A1A1A] to-[#121212] p-8 rounded-2xl border border-[#333] hover:border-[#a91016] transition-all group shadow-xl hover:shadow-[#a91016]/20"
      >
        <motion.div 
          variants={animations.pulse}
          initial="initial"
          animate="animate"
          className="w-16 h-16 bg-[#a91016]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#a91016]/20 transition-all border border-[#a91016]/20"
        >
          <Headphones className="text-[#ff3333]" size={32} />
        </motion.div>
        <h3 className="text-2xl font-bold mb-4 group-hover:text-[#ff3333]  text-white transition-colors">Smartex Vocalia</h3>
        <p className="text-gray-400 mb-6">
          Assistant vocal intelligent qui gère vos appels téléphoniques, automatise les RDV et optimise la relation client.
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <div className="min-w-4 h-4 bg-gradient-to-r from-[#ff3333] to-[#a91016] rounded-full mt-1.5 mr-2"></div>
            <span className="text-gray-300">Disponibilité 24/7</span>
          </li>
          <li className="flex items-start">
            <div className="min-w-4 h-4 bg-gradient-to-r from-[#ff3333] to-[#a91016] rounded-full mt-1.5 mr-2"></div>
            <span className="text-gray-300">Multi-langue personnalisable</span>
          </li>
          <li className="flex items-start">
            <div className="min-w-4 h-4 bg-gradient-to-r from-[#ff3333] to-[#a91016] rounded-full mt-1.5 mr-2"></div>
            <span className="text-gray-300">Intégration CRM</span>
          </li>
         
        </ul>
        <motion.a 
          href="/services" 
          className="inline-flex items-center text-[#ff3333] hover:text-[#a91016] transition-colors font-medium group"
          whileHover={{ x: 5 }}
        >
          En savoir plus 
          <motion.span
            initial={{ x: 0 }}
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="ml-2" size={16} />
          </motion.span>
        </motion.a>

      </motion.div>

       {/* Service 2  */}
      <motion.div 
        variants={animations.fadeIn}
        whileHover={{ y: -5, scale: 1.01 }}
        className="bg-gradient-to-br from-[#1A1A1A] to-[#121212] p-8 rounded-2xl border border-[#333] hover:border-[#a91016] transition-all group shadow-xl hover:shadow-[#a91016]/20"
      >
        <motion.div 
          variants={animations.pulse}
          initial="initial"
          animate="animate"
          className="w-16 h-16 bg-[#a91016]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#a91016]/20 transition-all border border-[#a91016]/20"
        >
          <Bot className="text-[#ff3333]" size={32} />
        </motion.div>
        <h3 className="text-2xl font-bold mb-4 group-hover:text-[#ff3333] transition-colors text-white">Smartex Chatbots IA</h3>
        <p className="text-gray-400 mb-6">
        Nos chatbots intelligents sont conçus pour automatiser la gestion des échanges avec les clients sur 
        tous vos canaux digitaux : site internet, réseaux sociaux, messageries instantanées
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <div className="min-w-4 h-4 bg-gradient-to-r from-[#ff3333] to-[#a91016] rounded-full mt-1.5 mr-2"></div>
            <span className="text-gray-300">Accueil et assistance 24/7 sur les plateformes digitales</span>
          </li>
          <li className="flex items-start">
            <div className="min-w-4 h-4 bg-gradient-to-r from-[#ff3333] to-[#a91016] rounded-full mt-1.5 mr-2"></div>
            <span className="text-gray-300">Réponse automatique aux questions fréquentes (FAQ) et demandes simples</span>
          </li>
          <li className="flex items-start">
            <div className="min-w-4 h-4 bg-gradient-to-r from-[#ff3333] to-[#a91016] rounded-full mt-1.5 mr-2"></div>
            <span className="text-gray-300">Prise de rendez-vous et gestion de réservation en ligne</span>
          </li>
         
        </ul>
        <motion.a 
          href="/services" 
          className="inline-flex items-center text-[#ff3333] hover:text-[#a91016] transition-colors font-medium group"
          whileHover={{ x: 5 }}
        >
          En savoir plus 
          <motion.span
            initial={{ x: 0 }}
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="ml-2" size={16} />
          </motion.span>
        </motion.a>

      </motion.div>

      {/* Service 3 */}
      <motion.div 
        variants={animations.fadeIn}
        whileHover={{ y: -5, scale: 1.01 }}
        className="bg-gradient-to-br from-[#1A1A1A] to-[#121212] p-8 rounded-2xl border border-[#333] hover:border-[#a91016] transition-all group shadow-xl hover:shadow-[#a91016]/20"
      >
        <motion.div 
          variants={animations.pulse}
          initial="initial"
          animate="animate"
          className="w-16 h-16 bg-[#a91016]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#a91016]/20 transition-all border border-[#a91016]/20"
        >
          <Settings className="text-[#ff3333]" size={32} />
        </motion.div>
        <h3 className="text-2xl font-bold mb-4 group-hover:text-[#ff3333] transition-colors text-white">Automatisation IA </h3>
        <p className="text-gray-400 mb-6">
        Nos solutions d'automatisation IA permettent de réduire la charge de travail, de minimiser les 
        erreurs humaines et d'optimiser les ressources.
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <div className="min-w-4 h-4 bg-gradient-to-r from-[#ff3333] to-[#a91016] rounded-full mt-1.5 mr-2"></div>
            <span className="text-gray-300">Automatisation des process métiers récurrents : comptabilité, ressources humaines, gestion 
            administrative</span>
          </li>
          <li className="flex items-start">
            <div className="min-w-4 h-4 bg-gradient-to-r from-[#ff3333] to-[#a91016] rounded-full mt-1.5 mr-2"></div>
            <span className="text-gray-300">Traitement automatique des emails, devis, factures et relances</span>
          </li>
          <li className="flex items-start">
            <div className="min-w-4 h-4 bg-gradient-to-r from-[#ff3333] to-[#a91016] rounded-full mt-1.5 mr-2"></div>
            <span className="text-gray-300">Workflows IA intégrés à votre CRM et systèmes métiers</span>
          </li>
         
        </ul>
        <motion.a 
          href="/services" 
          className="inline-flex items-center text-[#ff3333] hover:text-[#a91016] transition-colors font-medium group"
          whileHover={{ x: 5 }}
        >
          En savoir plus 
          <motion.span
            initial={{ x: 0 }}
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="ml-2" size={16} />
          </motion.span>
        </motion.a>
      </motion.div>
    </motion.div>

    {/* CTA pour voir plus de services */}
    <motion.div 
      variants={animations.fadeInUp}
      className="text-center mt-16"
    >
      <motion.a
        href="/services"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-gradient-to-r from-[#a91016] to-[#ff3333] text-white font-medium rounded-xl inline-flex items-center shadow-lg shadow-[#ff3333]/20 hover:shadow-xl hover:shadow-[#ff3333]/30 transition-all"
      >
        <span>Découvrir tous nos services</span>
        <motion.span
          initial={{ x: 0 }}
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="ml-2" size={20} />
        </motion.span>
      </motion.a>
    </motion.div>
  </motion.div>
</section>



    </section>
    
  );
};

export default HeroSection;