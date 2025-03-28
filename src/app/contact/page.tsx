import Hero from "@/components/HeroBreadCrumbs";
import Header from "@/components/Header";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const metadata = {
  title: "SMARTEX CRMIA - Contact",
  description: "Découvrez nos services d'intelligence artificielle pour votre entreprise",
};

export default function ContactPage() {
  // Les éléments de navigation (breadcrumbs)
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Contact", href: "/contact", isCurrent: true },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      content: "contact@smartex-expertises.com",
      link: "mailto:contact@smartex-expertises.com"
    },
   
  ];

  return (
    <main className="bg-gray-50">
      <Header />
      <Hero title="Contact" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Contactez-nous
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="firstName" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Prénom
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="lastName" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nom
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre nom"
                  />
                </div>
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="votre.email@exemple.com"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Sujet
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Objet de votre message"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Détaillez votre demande..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="mr-2 w-5 h-5" />
                Envoyer le message
              </button>
            </form>
          </div>
          
          {/* Informations de contact */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Nos coordonnées
            </h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="flex items-center bg-gray-50 p-4 rounded-lg"
                >
                  <div className="mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {info.title}
                    </h3>
                    <a 
                      href={info.link} 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {info.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            
          </div>
        </div>
      </div>
    </main>
  );
}

