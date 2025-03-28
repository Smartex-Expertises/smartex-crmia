import Hero from "@/components/HeroBreadCrumbs";
import Header from "@/components/Header";

import { 
  Banknote, 
  HeartPulse, 
  ShoppingCart, 
  GraduationCap, 
  Building 
} from "lucide-react";

export const metadata = {
  title: "Nos secteurs prioritaires",
  description: "Découvrez nos services d'intelligence artificielle pour votre entreprise",
};

interface Sector {
  title: string;
  icon: any;
  description: string;
  useCases: string[];
}

export default function SecteursPage() {
  const prioritySectors: Sector[] = [
    {
      title: "Banque & Assurance",
      icon: <Banknote className="w-12 h-12 text-blue-600" />, 
      description: "Solutions d'IA pour une gestion intelligente des contacts et une détection avancée des fraudes.",
      useCases: [
        "Gestion intelligente des contacts",
        "Détection des fraudes",
        "Analyse prédictive des risques"
      ]
    },
    {
      title: "Santé & Téléconsultation",
      icon: <HeartPulse className="w-12 h-12 text-red-600" />, 
      description: "Optimisation des processus médicaux grâce à des technologies d'IA innovantes.",
      useCases: [
        "Prise de rendez-vous automatisée",
        "Télésecrétariat médical",
        "Suivi personnalisé des patients"
      ]
    },
    {
      title: "Retail & E-commerce",
      icon: <ShoppingCart className="w-12 h-12 text-green-600" />, 
      description: "Solutions d'IA pour améliorer l'expérience client et optimiser les ventes.",
      useCases: [
        "Chatbots de vente intelligents",
        "Automatisation du service client",
        "Recommandations personnalisées"
      ]
    },
    {
      title: "Éducation & Formation",
      icon: <GraduationCap className="w-12 h-12 text-purple-600" />, 
      description: "Assistants virtuels et solutions technologiques pour faciliter l'apprentissage et l'administration.",
      useCases: [
        "Assistants virtuels d'apprentissage",
        "Gestion des inscriptions",
        "Support pédagogique personnalisé"
      ]
    },
    {
      title: "Services publics & Collectivités",
      icon: <Building className="w-12 h-12 text-teal-600" />, 
      description: "Solutions numériques pour moderniser et simplifier les services administratifs.",
      useCases: [
        "Portails interactifs",
        "Assistants administratifs numériques",
        "Gestion des demandes citoyennes"
      ]
    }
  ];

  const getIconColor = (title: string): string => {
    const colorMap: Record<string, string> = {
      "Banque & Assurance": "text-blue-500",
      "Santé & Téléconsultation": "text-red-500",
      "Retail & E-commerce": "text-green-500",
      "Éducation & Formation": "text-purple-500",
      "Services publics & Collectivités": "text-teal-500"
    };

    return colorMap[title] || "text-gray-500";
  };

  return (
    <main className="bg-gray-50">
      <Header />
      <Hero title="Nos Secteurs prioritaires" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 gap-8 max-w-6xl mb-8">
            {prioritySectors.slice(0, 3).map((sector) => (
              <div 
                key={sector.title} 
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className={`mx-auto mb-4 w-12 h-12 ${getIconColor(sector.title)}`}>
                  {sector.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {sector.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {sector.description}
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-md font-semibold mb-3 text-gray-700">
                    Cas d'usage :
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-left">
                    {sector.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-center">
                        <svg 
                          className="w-4 h-4 mr-2 text-blue-500" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8 max-w-6xl">
            {prioritySectors.slice(3).map((sector) => (
              <div 
                key={sector.title} 
                className="bg-white p-6 rounded-xl shadow-md text-center w-1/2"
              >
                <div className={`mx-auto mb-4 w-12 h-12 ${getIconColor(sector.title)}`}>
                  {sector.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {sector.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {sector.description}
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-md font-semibold mb-3 text-gray-700">
                    Cas d'usage :
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-left">
                    {sector.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-center">
                        <svg 
                          className="w-4 h-4 mr-2 text-blue-500" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
