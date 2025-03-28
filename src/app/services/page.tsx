'use client';

import React from 'react';
import Hero from "@/components/HeroBreadCrumbs";
import Header from "@/components/Header";
import { motion } from 'framer-motion';
import {
    MessageCircle,
    Settings,
    BookOpen,
    Cpu,
    Headphones,
    LucideIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Define the type for the service card props
interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, features }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#333] rounded-2xl p-6 space-y-4 hover:shadow-xl hover:shadow-[#ff3333]/10 transition-all"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-gradient-to-r from-[#ff3333] to-[#a91016] p-3 rounded-xl">
        <Icon className="text-white" size={28} />
      </div>
      <h3 className="text-xl font-bold text-[#ff3333]">{title}</h3>
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2 text-gray-400">
          <span className="w-2 h-2 bg-[#ff3333] rounded-full"></span>
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

const ServicesPage: React.FC = () => {
  // Define the type for the service
  interface Service {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
  }

  const services: Service[] = [
    {
      icon: Headphones,
      title: "Smartex Vocalia",
      description: "Notre solution d'Agent IA Vocal intelligent pour gérer les interactions téléphoniques de manière autonome.",
      features: [
        "Accueil et filtrage des appels 24h/24",
        "Prise et confirmation de rendez-vous",
        "Qualification des appels",
        "Réponse aux questions fréquentes",
        "Assistance en situation d'urgence"
      ]
    },
    {
      icon: MessageCircle,
      title: "Smartex Chatbots IA",
      description: "Assistants conversationnels intelligents multicanaux pour automatiser la gestion des échanges clients.",
      features: [
        "Assistance 24/7 sur tous les canaux digitaux",
        "Réponse automatique aux questions",
        "Aide à la navigation et à la commande",
        "Qualification des prospects",
        "Support après-vente"
      ]
    },
    {
      icon: Cpu,
      title: "Automatisation IA",
      description: "Solutions d'automatisation pour réduire la charge de travail et minimiser les erreurs humaines.",
      features: [
        "Automatisation des processus métiers",
        "Traitement automatique des documents",
        "Workflows IA intégrés",
        "Réduction des tâches répétitives",
        "Optimisation des ressources"
      ]
    },
    {
      icon: Settings,
      title: "Conseil Stratégique IA",
      description: "Prestations de conseil pour intégrer l'IA de manière pertinente et rentable dans vos activités.",
      features: [
        "Audit de maturité digitale",
        "Conception de feuilles de route IA",
        "Accompagnement projet",
        "Mise en place de KPIs",
        "Transformation digitale durable"
      ]
    },
    {
      icon: BookOpen,
      title: "Formation IA et CRM",
      description: "Formations pratiques sur l'usage des agents vocaux IA, chatbots et intégration de l'IA.",
      features: [
        "Maîtrise de l'IA dans le service client",
        "Utilisation des agents vocaux",
        "Exploitation des données CRM",
        "Sécurisation des données",
        "Conformité RGPD"
      ]
    }
  ];

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      <Header />
      <Hero title="Nos Services" />
      
      <section className="container mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#ff3333]"
        >
          Nos Solutions IA Intelligentes
        </motion.h2>

        <div className="flex flex-col items-center">
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
          <div className="flex justify-center gap-8">
            {services.slice(3).map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button variant="destructive" size="lg" className="px-10 py-4 text-lg">
            Consulter une démo
          </Button>
        </motion.div>
      </section>
    </main>
  );
};

export default ServicesPage;