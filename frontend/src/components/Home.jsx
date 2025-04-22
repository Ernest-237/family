import React, { useState, useEffect } from 'react';
import { 
  TreePine, 
  Calendar, 
  Megaphone, 
  Image, 
  BookOpen, 
  Search, 
  User, 
  Heart,
  Users,
  Medal,
  Menu,
  X
} from 'lucide-react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold text-blue-700 tracking-tight">HEBGA LEGACY</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#accueil" className="text-white bg-blue-600 px-5 py-2.5 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 font-medium">Accueil</a>
              <a href="#genealogie" className="text-gray-700 hover:text-blue-600 transition hover:scale-105 font-medium">Généalogie</a>
              <a href="#biographie" className="text-gray-700 hover:text-blue-600 transition hover:scale-105 font-medium">Biographie</a>
              <a href="#oeuvres" className="text-gray-700 hover:text-blue-600 transition hover:scale-105 font-medium">Oeuvres</a>
              <a href="#loisirs" className="text-gray-700 hover:text-blue-600 transition hover:scale-105 font-medium">Loisirs</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2.5 border border-gray-200 hover:border-gray-300 transition">
                <input
                  type="text"
                  placeholder="Faites des recherches"
                  className="bg-transparent outline-none w-48 lg:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="h-5 w-5 text-gray-500 hover:text-blue-600 cursor-pointer" />
              </div>
              
              <div className="flex items-center">
                <div className="rounded-full bg-gray-200 p-2.5 hover:bg-blue-100 transition cursor-pointer hover:text-blue-600">
                  <User className="h-6 w-6 text-gray-700" />
                </div>
              </div>
              
              {/* Mobile menu button */}
              <button 
                className="lg:hidden rounded-md p-2 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-3 pb-3">
                <a href="#accueil" className="text-white bg-blue-600 px-4 py-2 rounded text-center font-medium hover:bg-blue-700">Accueil</a>
                <a href="#genealogie" className="text-gray-700 hover:text-blue-600 py-2 px-4 rounded hover:bg-blue-50">Généalogie</a>
                <a href="#biographie" className="text-gray-700 hover:text-blue-600 py-2 px-4 rounded hover:bg-blue-50">Biographie</a>
                <a href="#oeuvres" className="text-gray-700 hover:text-blue-600 py-2 px-4 rounded hover:bg-blue-50">Oeuvres</a>
                <a href="#loisirs" className="text-gray-700 hover:text-blue-600 py-2 px-4 rounded hover:bg-blue-50">Loisirs</a>
              </div>
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 border border-gray-200 mt-2">
                <input
                  type="text"
                  placeholder="Faites des recherches"
                  className="bg-transparent outline-none flex-1"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-96 md:h-screen max-h-[700px] bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/api/placeholder/1920/1080")' }}>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Découvrez la biographie des membres de Hebga Legacy.</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto px-4 leading-relaxed">Un espace dédié à l'histoire et aux liens qui unissent notre grande famille à travers les générations</p>
            <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 hover:scale-105 transition transform duration-300 shadow-lg">
              Explorer notre histoire
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Nos Fonctionnalités</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">Explorez l'histoire, partagez des moments et restez connecté avec la famille Hebga</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 mb-20">
          {/* Arbre Généalogique */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-green-500">
            <div className="flex items-center mb-5">
              <div className="p-3 bg-green-100 rounded-full mr-4">
                <TreePine className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Arbre Généalogique</h3>
            </div>
            <p className="text-gray-600 mb-5 leading-relaxed">Visualisez notre arbre généalogique interactif et découvrez les liens qui unissent chaque membre de la famille.</p>
            <a href="#genealogie" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group">
              En savoir plus 
              <span className="transform transition group-hover:translate-x-1 ml-1">→</span>
            </a>
          </div>

          {/* Événements Familiaux */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-orange-500">
            <div className="flex items-center mb-5">
              <div className="p-3 bg-orange-100 rounded-full mr-4">
                <Calendar className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Événements Familiaux</h3>
            </div>
            <p className="text-gray-600 mb-5 leading-relaxed">Restez informé des anniversaires, mariages et réunions. Ne manquez plus aucun moment important.</p>
            <a href="#evenements" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group">
              Voir le calendrier 
              <span className="transform transition group-hover:translate-x-1 ml-1">→</span>
            </a>
          </div>

          {/* Annonces & Offres */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-red-500">
            <div className="flex items-center mb-5">
              <div className="p-3 bg-red-100 rounded-full mr-4">
                <Megaphone className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Annonces & Offres</h3>
            </div>
            <p className="text-gray-600 mb-5 leading-relaxed">Partagez vos annonces, trouvez de l'aide ou proposez vos services au sein de la famille.</p>
            <a href="#annonces" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group">
              Publier une annonce 
              <span className="transform transition group-hover:translate-x-1 ml-1">→</span>
            </a>
          </div>

          {/* Galerie Photo & Vidéo */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-purple-500">
            <div className="flex items-center mb-5">
              <div className="p-3 bg-purple-100 rounded-full mr-4">
                <Image className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Galerie Photo & Vidéo</h3>
            </div>
            <p className="text-gray-600 mb-5 leading-relaxed">Albums classés par événements et années. Partagez et commentez les moments précieux.</p>
            <a href="#galerie" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group">
              Voir la galerie 
              <span className="transform transition group-hover:translate-x-1 ml-1">→</span>
            </a>
          </div>

          {/* Biographies & Histoires */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-blue-500">
            <div className="flex items-center mb-5">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <BookOpen className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Biographies & Histoires</h3>
            </div>
            <p className="text-gray-600 mb-5 leading-relaxed">Découvrez les portraits de nos ancêtres et les récits qui ont façonné notre histoire familiale.</p>
            <a href="#biographies" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group">
              Lire les histoires 
              <span className="transform transition group-hover:translate-x-1 ml-1">→</span>
            </a>
          </div>

          {/* Entraide Familiale */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-pink-500">
            <div className="flex items-center mb-5">
              <div className="p-3 bg-pink-100 rounded-full mr-4">
                <Heart className="h-10 w-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold">Entraide Familiale</h3>
            </div>
            <p className="text-gray-600 mb-5 leading-relaxed">Un espace dédié à l'entraide où chaque membre peut demander ou offrir son soutien.</p>
            <a href="#entraide" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group">
              Voir les demandes 
              <span className="transform transition group-hover:translate-x-1 ml-1">→</span>
            </a>
          </div>
        </div>

        {/* Featured Members Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 mb-20 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Membres à l'honneur</h2>
            <div className="flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Medal className="h-6 w-6 mr-2" />
              <span className="text-lg font-medium">Ce mois-ci</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img src={`/api/placeholder/70/70`} alt="Membre" className="rounded-full w-16 h-16 mr-4 border-2 border-white/50" />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-blue-800">
                      <Medal className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Jean Hebga</h4>
                    <p className="text-sm text-blue-200">3ème génération</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed">Pour sa contribution exceptionnelle à la documentation de notre histoire familiale et son dévouement à préserver notre héritage culturel.</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">Rejoignez la communauté</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Connectez-vous pour accéder à l'ensemble des fonctionnalités et participer activement à la vie de notre famille.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 duration-300 shadow-lg flex items-center mx-auto">
            <Users className="mr-2" />
            Se connecter
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-400">HEBGA LEGACY</h3>
              <p className="text-gray-400 leading-relaxed">L'espace numérique dédié à notre famille, son histoire et son avenir. Préservons ensemble notre patrimoine.</p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition">
                  <span className="sr-only">Facebook</span>
                  {/* Icon placeholder */}
                  <div className="h-5 w-5 bg-white/30 rounded-sm"></div>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition">
                  <span className="sr-only">Twitter</span>
                  {/* Icon placeholder */}
                  <div className="h-5 w-5 bg-white/30 rounded-full"></div>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition">
                  <span className="sr-only">Instagram</span>
                  {/* Icon placeholder */}
                  <div className="h-5 w-5 bg-white/30 rounded"></div>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Navigation</h3>
              <ul className="space-y-3">
                <li><a href="#accueil" className="text-gray-400 hover:text-white transition flex items-center"><span className="h-1 w-3 bg-blue-500 mr-2"></span>Accueil</a></li>
                <li><a href="#genealogie" className="text-gray-400 hover:text-white transition flex items-center"><span className="h-1 w-3 bg-blue-500 mr-2"></span>Généalogie</a></li>
                <li><a href="#evenements" className="text-gray-400 hover:text-white transition flex items-center"><span className="h-1 w-3 bg-blue-500 mr-2"></span>Événements</a></li>
                <li><a href="#biographies" className="text-gray-400 hover:text-white transition flex items-center"><span className="h-1 w-3 bg-blue-500 mr-2"></span>Biographies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Ressources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition flex items-center"><span className="h-1 w-3 bg-blue-500 mr-2"></span>Guide d'utilisation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition flex items-center"><span className="h-1 w-3 bg-blue-500 mr-2"></span>FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition flex items-center"><span className="h-1 w-3 bg-blue-500 mr-2"></span>Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition flex items-center"><span className="h-1 w-3 bg-blue-500 mr-2"></span>Confidentialité</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Restez connecté</h3>
              <p className="text-gray-400 mb-6">Inscrivez-vous à notre newsletter pour rester informé des nouveautés.</p>
              <div className="flex flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="w-full sm:flex-1 px-4 py-3 rounded-l sm:rounded-r-none bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 px-6 py-3 mt-2 sm:mt-0 rounded-r sm:rounded-l-none hover:bg-blue-700 transition font-medium">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Hebga Legacy. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}