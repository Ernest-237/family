import React, { useState } from 'react';
import { 
  Music, 
  Utensils, 
  Bike, 
  Palette, 
  BookOpen, 
  Award,
  ChevronRight,
  Users,
  MapPin,
  Calendar,
  Globe
} from 'lucide-react';

export default function Loisirs() {
  const [activeCategory, setActiveCategory] = useState('tous');
  
  const categories = [
    { id: 'tous', name: 'Tous', icon: Award },
    { id: 'sport', name: 'Sports', icon: Bike },
    { id: 'culture', name: 'Culture', icon: BookOpen },
    { id: 'art', name: 'Art', icon: Palette },
    { id: 'voyages', name: 'Voyages', icon: Globe },
    { id: 'cuisine', name: 'Cuisine', icon: Utensils },
    { id: 'musique', name: 'Musique', icon: Music }
  ];
  
  const activitiesData = [
    {
      id: 1,
      title: "Football",
      category: "sport",
      description: "Tournois familiaux organisés deux fois par an, rassemblant toutes les générations autour du ballon rond.",
      image: "/api/placeholder/600/400",
      participants: 24,
      location: "Stade municipal",
      date: "Juillet & Décembre"
    },
    {
      id: 2,
      title: "Club de lecture",
      category: "culture",
      description: "Échanges littéraires mensuels autour d'ouvrages choisis par les membres, avec focus sur la littérature africaine.",
      image: "/api/placeholder/600/400",
      participants: 12,
      location: "En ligne",
      date: "Chaque dernier samedi"
    },
    {
      id: 3,
      title: "Danse traditionnelle",
      category: "art",
      description: "Préservation et transmission des danses traditionnelles camerounaises, avec spectacles lors des événements familiaux.",
      image: "/api/placeholder/600/400",
      participants: 15,
      location: "Salle polyvalente",
      date: "Hebdomadaire"
    },
    {
      id: 4,
      title: "Excursions montagne",
      category: "voyages",
      description: "Randonnées organisées dans les montagnes de l'Ouest camerounais, à la découverte de notre patrimoine naturel.",
      image: "/api/placeholder/600/400",
      participants: 18,
      location: "Mont Cameroun",
      date: "Annuel"
    },
    {
      id: 5,
      title: "Cuisine traditionnelle",
      category: "cuisine",
      description: "Ateliers culinaires intergénérationnels pour transmettre les recettes familiales et les techniques ancestrales.",
      image: "/api/placeholder/600/400",
      participants: 10,
      location: "Résidence familiale",
      date: "Trimestriel"
    },
    {
      id: 6,
      title: "Chorale familiale",
      category: "musique",
      description: "Répétitions et performances lors des cérémonies familiales, mêlant chants traditionnels et contemporains.",
      image: "/api/placeholder/600/400",
      participants: 20,
      location: "Variable",
      date: "Bimensuel"
    },
    {
      id: 7,
      title: "Basketball",
      category: "sport",
      description: "Entraînements réguliers et matchs amicaux entre les jeunes membres de la famille.",
      image: "/api/placeholder/600/400",
      participants: 12,
      location: "Terrain municipal",
      date: "Hebdomadaire"
    },
    {
      id: 8,
      title: "Peinture",
      category: "art",
      description: "Sessions de peinture collective où chacun exprime sa vision de l'histoire familiale sur toile.",
      image: "/api/placeholder/600/400",
      participants: 8,
      location: "Atelier d'art",
      date: "Mensuel"
    }
  ];
  
  const filteredActivities = activeCategory === 'tous' 
    ? activitiesData 
    : activitiesData.filter(activity => activity.category === activeCategory);

  return (
    <div className="bg-gray-50 py-16" id="loisirs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Nos Loisirs et Passions</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Découvrez les activités qui animent notre famille et renforcent nos liens à travers les générations
          </p>
        </div>
        
        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-5 py-3 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                <span className="font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>
        
        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredActivities.map((activity) => (
            <div 
              key={activity.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-blue-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">{activity.title}</h3>
                    <p className="opacity-90">{categories.find(c => c.id === activity.category)?.name}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{activity.description}</p>
                
                <div className="flex flex-col space-y-3 text-sm">
                  <div className="flex items-center text-blue-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{activity.participants} participants</span>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{activity.date}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="w-full flex items-center justify-center py-3 bg-gray-100 hover:bg-blue-50 text-blue-700 font-medium rounded-lg transition group">
                    Plus de détails
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">Vous avez une passion à partager ?</h3>
              <p className="text-blue-100 max-w-lg">
                Proposez une nouvelle activité et rassemblez les membres de la famille autour de vos centres d'intérêt
              </p>
            </div>
            <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-lg">
              Proposer une activité
            </button>
          </div>
        </div>
        
        {/* Testimonials / Success Stories */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-10">Témoignages</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src="/api/placeholder/60/60" 
                  alt="Marie Hebga" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Marie Hebga</h4>
                  <p className="text-sm text-gray-500">Club de lecture</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Le club de lecture m'a permis de redécouvrir notre patrimoine littéraire et de nouer des liens plus forts avec les membres de la famille que je voyais rarement."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src="/api/placeholder/60/60" 
                  alt="Thomas Hebga" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Thomas Hebga</h4>
                  <p className="text-sm text-gray-500">Excursions montagne</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Ces randonnées annuelles sont devenues un rendez-vous incontournable. C'est l'occasion de transmettre aux plus jeunes notre attachement à la terre de nos ancêtres."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}