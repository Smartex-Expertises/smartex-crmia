'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";
import { 
  Menu, 
  PhoneCall, 
  MessageCircle, 
  Cpu, 
  Users, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  MapPin, 
  ArrowRight, 
  Bot, 
  Headphones, 
  Settings, 
  BarChart, 
  Zap, 
  ShoppingBag,
  Stethoscope,
  BookOpen,
  Building,
  ExternalLink,
  Briefcase,
  PieChart,
  DollarSign
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
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
  
  // Canvas pour le fond animé avec une référence
  const canvasRef = useRef(null);
  
  // Suivi de la position de la souris pour les effets interactifs - optimisé avec un throttle
  // useEffect(() => {
  //   let lastTime = 0;
  //   const throttleDelay = 30; // ms

  //   const handleMouseMove = (e :any) => {
  //     const now = Date.now();
  //     if (now - lastTime > throttleDelay) {
  //       setCursorPosition({ x: e.clientX, y: e.clientY });
  //       lastTime = now;
  //     }
  //   };
    
  //   window.addEventListener('mousemove', handleMouseMove);
  //   return () => window.removeEventListener('mousemove', handleMouseMove);
  // }, []);
  
  // Effet de fond animé - optimisé
  useEffect(() => {
    const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    if (!canvas) {
        throw new Error("Canvas element not found");
    }

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    
    // Réduction du nombre de particules et optimisation
    const numberOfParticles = Math.min(60, Math.floor(window.innerWidth / 20)); // Adapte les particules à la taille de l'écran
    const particlesArray : any[] = [];
    
    // Créer des particules moins nombreuses
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1, // Particules plus petites
        speedX: (Math.random() - 0.5) * 0.8, // Vitesse réduite
        speedY: (Math.random() - 0.5) * 0.8, // Vitesse réduite
        // color: `rgba(${255 - Math.random() * 50}, ${Math.random() * 20}, ${Math.random() * 20}, ${Math.random() * 0.3 + 0.1})`
        color: `rgba(${255 - Math.random() * 70}, ${Math.random() * 20}, ${Math.random() * 20}, ${Math.random() * 0.5 + 0.1})`
      });
    }
    
    // Distance maximale de connexion réduite
    const maxDistance = Math.min(80, window.innerWidth / 15);
    
    // Optimisation de la fonction d'animation
    let animationFrameId : any;
    
    function animate() {
      // Laisser une légère trace pour l'effet de "traînée" au lieu d'effacer complètement
      if (ctx){
        ctx.fillStyle = 'rgba(13, 13, 13, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      }
      
      
      // Mettre à jour et dessiner les particules
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i];
        
        // Déplacer les particules
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Vérification des limites
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        
        // Dessiner la particule
        if (ctx){
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          
        }
        
        
        // Connecter les particules à une distance réduite et seulement pour certaines
        if (i % 2 === 0) { // Skip d'une particule sur deux pour les connexions
          for (let j = i + 1; j < particlesArray.length; j += 2) {
            const dx = p.x - particlesArray[j].x;
            const dy = p.y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < maxDistance) {
              if (ctx){
                ctx.beginPath();
                ctx.strokeStyle = `rgba(169, 16, 22, ${0.1 - (distance/1000)})`;
                ctx.lineWidth = 0.2;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();

              }
              
            }
          }
        }
        
        // Effet interactif avec le curseur - moins intensif
        if (isHovering) {
          const dx = p.x - cursorPosition.x;
          const dy = p.y - cursorPosition.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 80) {
            const angle = Math.atan2(dy, dx);
            p.x += Math.cos(angle) * 0.7;
            p.y += Math.sin(angle) * 0.7;
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Optimisation du redimensionnement avec un debounce
    let resizeTimeout : any;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }, 200);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [cursorPosition, isHovering]);
  
  // Suivi de la position de défilement pour les effets parallaxes - avec throttle
  useEffect(() => {
    let lastScrollTime = 0;
    const scrollThrottleDelay = 50; // ms

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime > scrollThrottleDelay) {
        setScrollY(window.scrollY);
        lastScrollTime = now;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Observateurs d'intersection pour différentes sections - optimisés avec threshold plus bas
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: false });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: false });
  const [solutionsRef, solutionsInView] = useInView({ threshold: 0.1, triggerOnce: false });
  const [secteursRef, secteursInView] = useInView({ threshold: 0.1, triggerOnce: false });
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: false });
  
  // Suivi de la section active pour la barre de navigation
  useEffect(() => {
    if (heroInView) setActiveSection('hero');

    else if (servicesInView) setActiveSection('services');
    else if (solutionsInView) setActiveSection('solutions');
    else if (secteursInView) setActiveSection('secteurs');
    else if (contactInView) setActiveSection('contact');
  }, [heroInView, servicesInView, solutionsInView, secteursInView, contactInView]);

  // Items de navigation pour ordinateur et mobile
  const navItems = [
    { name: "Accueil", href: "/accueil", section: "hero" },
    { name: "Services", href: "/services", section: "services" },
    { name: "Nos modes de collaboration", href: "/modes-collaboration", section: "solutions" },
    { name: "Nos secteurs prioritaires", href: "/secteurs-prioritaires", section: "secteurs" }, 
    { name: "Contactez-nous", href: "/contact", section: "contact" }
  ];
  
  // Fermer le menu quand un lien est cliqué
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <main 
      className="relative text-[#F5F5F5] min-h-screen flex flex-col items-center overflow-hidden"
     
    >
      {/* Canvas de fond animé */}
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        id="myCanvas"
      />
      
      
      {/* Background gradients */}
      {/* <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-[#0d0d0d] to-[#121212] z-0 opacity-80"></div>
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <div 
          className="absolute top-0 right-0 w-96 h-96 bg-[#ff3333]/10 rounded-full blur-3xl" 
          style={{ transform: `translate(${cursorPosition.x * 0.02}px, ${scrollY * 0.05}px)` }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#a91016]/10 rounded-full blur-3xl" 
          style={{ transform: `translate(${cursorPosition.x * -0.02}px, ${scrollY * -0.05}px)` }}
        ></div>
        <div 
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#ff6b6b]/5 rounded-full blur-3xl" 
          style={{ transform: `translate(${cursorPosition.y * 0.01}px, ${scrollY * 0.03}px)` }}
        ></div>
      </div> */}

      
      {/* Conteneur de contenu - tout va dans z-10 pour apparaître au-dessus du fond */}
      <div className="w-full flex flex-col items-center relative z-10">
        {/* HEADER */}
        <header className="w-full flex justify-between items-center py-1 px-6 md:px-10 bg-[#0a0a0a]/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-[#333333]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <Link href="/" className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#ff3333] to-[#a91016] bg-clip-text text-transparent flex items-center gap-2">
              <motion.div
                initial={{ rotate: -10, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image 
                  src="/logo.png" 
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
                SMARTEX CRMIA
              </motion.span>
            </Link>
          </motion.div>

          {/* Navigation sur Desktop */}
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
                className={`text-md font-medium transition-all relative hover:text-[#ff3333] 
                  
                `}
              >
                {item.name}
                
              </motion.a>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
             <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#ff3333] to-[#a91016] hover:from-[#a91016] hover:to-[#ff3333] text-white font-medium transition-all shadow-lg shadow-[#a91016]/20 hover:shadow-[#a91016]/40">
                Démo gratuite
              </Button>
            </Link>
            </motion.div>
          </motion.nav>
          
          {/* Bouton de menu mobile */}
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <Menu size={28} />
          </motion.button>
        </header>

        {/* MENU MOBILE - rendus conditionnels simplifiés */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full bg-gradient-to-b from-[#0a0a0a]/95 to-[#121212]/95 backdrop-blur-md flex flex-col items-center py-6 space-y-6 z-40 border-b border-[#333333]"
            >
              {navItems.map((item, index) => (
                <motion.a 
                  key={item.name}
                  href={item.href} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.07 }}
                  className={`text-lg font-medium transition-colors hover:text-[#ff3333] ${
                    activeSection === item.section ? 'text-[#ff3333]' : 'text-gray-300'
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

        {/* SECTION HERO */}
        <section 
          id="hero" 
          ref={heroRef}
          className="w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-20 pt-24 pb-12 relative"
        >
          <motion.div 
            variants={animations.fadeInUp}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="container mx-auto flex flex-col items-center text-center max-w-5xl"
          >
            <motion.span 
              variants={animations.zoomIn}
              className="px-4 py-2 bg-gradient-to-r from-[#a91016]/20 to-[#ff3333]/20 text-[#ff3333] rounded-full text-sm font-medium mb-8 border border-[#ff3333]/20 shadow-lg shadow-[#ff3333]/5"
            >
              Solutions IA pour la relation client
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight mb-6"
              variants={animations.slideIn}
            >
              Propulsez votre relation client avec l'
              <motion.span 
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-r from-[#ff3333] via-[#ff6b6b] to-[#a91016] bg-clip-text text-transparent bg-size-200"
              >
                Intelligence Artificielle
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={animations.fadeIn}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-12"
            >
              SMARTEX CRMIA développe des solutions d'IA avancées pour améliorer la performance de votre entreprise et accélérer votre croissance.
            </motion.p>
            
            <motion.div 
              variants={animations.staggerContainer}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <motion.a
                variants={animations.fadeIn}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="/services"
              >
                 
                <Button className="bg-gradient-to-r from-[#ff3333] to-[#a91016] hover:from-[#a91016] hover:to-[#ff3333] text-white px-8 py-6 text-lg font-medium transition-all shadow-xl shadow-[#a91016]/20 hover:shadow-[#a91016]/40 group">
                  Découvrir nos solutions 
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="ml-2" size={18} />
                  </motion.span>
                </Button>
              </motion.a>
              <motion.a
                variants={animations.fadeIn}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="/contact"
              >
                <Button variant="outline" className="bg-[#0a0a0a]/40 backdrop-blur-md border-[#333] text-white hover:bg-[#1a1a1a]/60 px-8 py-6 text-lg hover:text-white font-medium shadow-lg hover:border-[#ff3333]/40">
                  Prendre rendez-vous
                </Button>
              </motion.a>
            </motion.div>
            
            {/* Logos "Ils nous font confiance" - optimisés */}
            {/* <motion.div 
              variants={animations.fadeInUp}
              className="w-full mt-12"
            >
              <motion.p 
                variants={animations.fadeIn}
                className="text-gray-500 mb-6 text-sm uppercase tracking-wider"
              >
                Ils nous font confiance
              </motion.p>
              <motion.div 
                variants={animations.staggerContainer}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
              >
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i}
                    variants={animations.fadeIn}
                    whileHover={{ y: -3, scale: 1.03 }}
                    className="h-12 w-32 bg-gradient-to-br from-[#1A1A1A]/80 to-[#0D0D0D]/80 rounded-md flex items-center justify-center border border-[#333] shadow-md"
                  >
                    <span className="text-gray-500 text-xs">LOGO CLIENT {i}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div> */}
            
            {/* Éléments graphiques flottants pour la profondeur - optimisés et rendus conditionnellement */}
            {/* Uniquement visibles sur les grands écrans */}
            <div className="hidden lg:block absolute top-20 right-20 w-40 h-40 opacity-10">
              <motion.div
                initial={{ rotate: 0, scale: 1 }}
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-[#ff3333] rounded-full"
              />
            </div>
            <div className="hidden lg:block absolute bottom-40 left-20 w-20 h-20 opacity-10">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-[#ff3333] rounded-full"
              />
            </div>
          </motion.div>
          
          {/* Indicateur de défilement animé */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 0.7, 0], y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-[#ff3333] rounded-full flex justify-center">
              <motion.div 
                initial={{ y: 0 }}
                animate={{ y: 8 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="w-2 h-2 bg-[#ff3333] rounded-full mt-2"
              />
            </div>
          </motion.div>
        </section>

        {/* SECTION SERVICES */}
       
      </div>
    </main>
    
              )
            }