// components/Header.tsx
"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState, useEffect, useRef, useMemo } from "react";
import { Menu, Settings } from "lucide-react";

import { AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Bot, Shield, Database, BarChart3, Users, Zap, BrainCircuit, Rocket, Headphones} from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: "Accueil", href: "/accueil", section: "hero" },
    { name: "Services", href: "/services", section: "services" },
    { name: "Nos modes de collaboration", href: "/modes-collaboration", section: "solutions" },
    { name: "Nos secteurs prioritaires", href: "/secteurs-prioritaires", section: "secteurs" }, 
    { name: "Contactez-nous", href: "/contact", section: "contact" }
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full flex flex-col items-center relative z-1000">
    {/* HEADER - modifié pour fond clair */}
    <header className="w-full flex justify-between items-center py-1 px-6 md:px-10 bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-200 shadow-sm">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center"
      >
        <Link href="/" className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#ff3333] to-[#a91016] bg-clip-text text-transparent flex items-center gap-2">
          <motion.a
            initial={{ rotate: -10, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            href="/"
          >
            <Image 
              src="/logo2.png" 
              alt="Logo" 
              width={80} 
              height={100} 
              priority
              className="filter drop-shadow-lg"
            />
          </motion.a>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
             CRMIA
          </motion.span>
        </Link>
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
  );
}