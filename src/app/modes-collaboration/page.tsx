import Hero from "@/components/HeroBreadCrumbs";
import Header from "@/components/Header";
import { CheckCircle2, Lightbulb, Settings, Award, CreditCard, Clock } from "lucide-react";

export const metadata = {
  title: "Nos modes de collaboration",
  description: "Découvrez nos services d'intelligence artificielle pour votre entreprise",
};

export default function ModeCollaborationPage() {
  // Les éléments de navigation (breadcrumbs)
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Nos modes de collaboration", href: "/modes-collaboration", isCurrent: true },
  ];

  const collaborationModes = [
    {
      title: "Diagnostic",
      icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
      description: "Analyse approfondie de vos besoins et processus métiers pour identifier les opportunités d'amélioration par l'IA."
    },
    {
      title: "Solutions sur mesure",
      icon: <Settings className="w-12 h-12 text-green-600" />,
      description: "Conception de solutions d'intelligence artificielle personnalisées, parfaitement alignées avec vos objectifs stratégiques."
    },
    {
      title: "Déploiement et tests",
      icon: <CheckCircle2 className="w-12 h-12 text-purple-600" />,
      description: "Mise en place progressive de la solution, avec des tests rigoureux et des ajustements précis pour garantir l'efficacité."
    },
    {
      title: "Livrable définitif",
      icon: <Award className="w-12 h-12 text-orange-600" />,
      description: "Remise d'une solution clé en main, accompagnée d'un support complet pour faciliter l'adoption et la transformation."
    }
  ];

  const accompagnementSteps = [
    "Audit de vos besoins et de vos flux métiers",
    "Conception de solutions IA adaptées à vos objectifs",
    "Déploiement pilote, tests et ajustements",
    "Livrable clé en main avec accompagnement au changement"
  ];

  const billingModes = [
    {
      title: "Abonnement",
      icon: <Clock className="w-12 h-12 text-indigo-600" />,
      description: "Formules mensuelles ou annuelles adaptées à différentes solutions (vocal, chatbot, CRM). Flexibilité et prévisibilité budgétaire."
    },
    {
      title: "Facturation à l'usage",
      icon: <CreditCard className="w-12 h-12 text-teal-600" />,
      description: "Paiement selon le volume réel : nombre d'appels, d'interactions ou de leads générés. Parfait pour un modèle économique agile."
    }
  ];

  return (
    <main className="bg-gray-50">
      <Header />
      <Hero title="Nos modes de collaboration" />
      
      <div className="container mx-auto px-4 py-16">
        {/* Modes de collaboration */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nos modes de collaboration
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {collaborationModes.map((mode, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  {mode.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{mode.title}</h3>
                <p className="text-gray-600">{mode.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Étapes d'accompagnement */}
        <section className="bg-blue-50 rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nos étapes d'accompagnement
          </h2>
          <div className="max-w-4xl mx-auto">
            {accompagnementSteps.map((step, index) => (
              <div 
                key={index} 
                className="flex items-center mb-6 bg-white p-4 rounded-lg shadow-md"
              >
                <span className="mr-4 text-2xl font-bold text-blue-600">
                  {index + 1}
                </span>
                <p className="text-gray-700 text-lg">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Modes de facturation */}
        <section className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nos modes de facturation
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {billingModes.map((mode, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    {mode.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">{mode.title}</h3>
                  <p className="text-gray-600 mb-6">{mode.description}</p>
                  
                  {index === 0 && (
                    <ul className="text-left text-gray-700 space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                        Vocal
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                        Chatbot
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                        CRM
                      </li>
                    </ul>
                  )}
                  
                  {index === 1 && (
                    <ul className="text-left text-gray-700 space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                        Nombre d'appels
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                        Interactions
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                        Leads générés
                      </li>
                    </ul>
                  )}
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-500 italic">
                      {index === 0 
                        ? "Prévisibilité budgétaire" 
                        : "Modèle économique agile"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-700 max-w-2xl mx-auto">
                Nous proposons des offres sur mesure adaptées à vos projets et à votre budget. 
                Nos options de maintenance et d'évolution continue garantissent que votre solution 
                IA reste toujours à la pointe de l'innovation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
