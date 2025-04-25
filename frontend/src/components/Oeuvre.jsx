import React, { useState } from 'react';
import { Book, Award, Globe, FileText, ChevronDown, ChevronUp, Star } from 'lucide-react';

export default function Oeuvre() {
  const [expandedCategory, setExpandedCategory] = useState('litterature');
  const [selectedOeuvre, setSelectedOeuvre] = useState(null);

  const categories = [
    { id: 'litterature', name: 'Littérature', icon: <Book className="h-6 w-6" />, color: 'indigo' },
    { id: 'académique', name: 'Académique', icon: <Award className="h-6 w-6" />, color: 'emerald' },
    { id: 'culturel', name: 'Patrimoine Culturel', icon: <Globe className="h-6 w-6" />, color: 'amber' },
    { id: 'documents', name: 'Documents Historiques', icon: <FileText className="h-6 w-6" />, color: 'rose' }
  ];

  const oeuvres = {
    litterature: [
      { id: 1, title: "Récits ancestraux des Hebga", auteur: "Marie Hebga", annee: "2015", description: "Collection de récits oraux transmis à travers les générations, illustrant les valeurs et traditions familiales." },
      { id: 2, title: "La longue route des Hebga", auteur: "Jean Hebga", annee: "2008", description: "Roman historique retraçant le parcours des premiers membres de la famille depuis leurs origines jusqu'à nos jours." },
      { id: 3, title: "Poèmes d'héritage", auteur: "Sophie Hebga", annee: "2020", description: "Recueil de poésie célébrant les liens familiaux et l'importance de l'héritage culturel." }
    ],
    académique: [
      { id: 4, title: "Étude généalogique des Hebga", auteur: "Prof. Antoine Hebga", annee: "2018", description: "Travail de recherche universitaire sur les origines et la dispersion géographique de la famille." },
      { id: 5, title: "Impact social des Hebga", auteur: "Dr. Claire Hebga", annee: "2012", description: "Analyse sociologique de l'influence familiale sur le développement communautaire local." }
    ],
    culturel: [
      { id: 6, title: "Chants traditionnels Hebga", auteur: "Collectif familial", annee: "2010", description: "Compilation de chants et musiques traditionnelles préservés au sein de la famille." },
      { id: 7, title: "Artisanat et savoir-faire", auteur: "Anciens de la famille", annee: "2017", description: "Documentation des techniques artisanales transmises entre générations." }
    ],
    documents: [
      { id: 8, title: "Archives familiales", auteur: "Comité de conservation", annee: "2022", description: "Numérisation et classification des documents historiques, photos et correspondances." },
      { id: 9, title: "Chroniques annuelles", auteur: "Historiens familiaux", annee: "Depuis 2005", description: "Recueil annuel des événements importants et réalisations familiales." }
    ]
  };

  const handleSelectOeuvre = (oeuvre) => {
    setSelectedOeuvre(oeuvre);
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div id="oeuvres" className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Œuvres & Contributions</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Découvrez l'héritage intellectuel et culturel de la famille Hebga à travers les générations
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Categories */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-3">Catégories</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => toggleCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition ${
                      expandedCategory === category.id 
                        ? `bg-${category.color}-100 text-${category.color}-800` 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full bg-${category.color}-100 text-${category.color}-600 mr-3`}>
                        {category.icon}
                      </div>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    {expandedCategory === category.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Works List */}
          <div className="md:col-span-2">
            {selectedOeuvre ? (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`bg-${categories.find(c => c.id === expandedCategory).color}-600 text-white p-6`}>
                  <button 
                    onClick={() => setSelectedOeuvre(null)}
                    className="mb-4 flex items-center text-white/80 hover:text-white transition"
                  >
                    <ChevronDown className="h-5 w-5 rotate-90 mr-1" /> Retour à la liste
                  </button>
                  <h3 className="text-2xl font-bold mb-2">{selectedOeuvre.title}</h3>
                  <div className="flex items-center">
                    <span className="mr-4">{selectedOeuvre.auteur}</span>
                    <span className="opacity-80">{selectedOeuvre.annee}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {selectedOeuvre.description}
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-3 text-gray-800">Disponibilité</h4>
                    <div className="flex items-center text-gray-600">
                      <div className="flex items-center mr-8">
                        <Book className="h-5 w-5 mr-2" />
                        <span>Bibliothèque familiale</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 mr-2" />
                        <span>Archive numérique</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 border-t pt-6">
                    <h4 className="font-medium mb-3 text-gray-800">Impact et reconnaissance</h4>
                    <div className="flex items-center mb-4">
                      <Star className="h-4 w-4 text-amber-500" />
                      <Star className="h-4 w-4 text-amber-500" />
                      <Star className="h-4 w-4 text-amber-500" />
                      <Star className="h-4 w-4 text-amber-500" />
                      <Star className="h-4 w-4 text-amber-500" />
                      <span className="ml-2 text-gray-600">Importance familiale</span>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                      Demander l'accès
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {expandedCategory && (
                  <div>
                    <div className="flex items-center mb-6">
                      <div className={`p-2 rounded-full bg-${categories.find(c => c.id === expandedCategory).color}-100 text-${categories.find(c => c.id === expandedCategory).color}-600 mr-3`}>
                        {categories.find(c => c.id === expandedCategory).icon}
                      </div>
                      <h3 className="text-2xl font-semibold">
                        {categories.find(c => c.id === expandedCategory).name}
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {oeuvres[expandedCategory].map((oeuvre) => (
                        <div 
                          key={oeuvre.id}
                          onClick={() => handleSelectOeuvre(oeuvre)}
                          className="bg-white border border-gray-200 rounded-xl p-6 cursor-pointer hover:shadow-md transition transform hover:-translate-y-1"
                        >
                          <h4 className="text-xl font-semibold mb-2 text-blue-800">{oeuvre.title}</h4>
                          <div className="flex items-center text-sm text-gray-500 mb-4">
                            <span className="mr-3">{oeuvre.auteur}</span>
                            <span>{oeuvre.annee}</span>
                          </div>
                          <p className="text-gray-600 line-clamp-3">{oeuvre.description}</p>
                          <div className="mt-4 flex justify-end">
                            <button className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                              Voir détails
                              <ChevronDown className="h-4 w-4 ml-1 rotate-270" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Featured Works */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Œuvres à l'honneur</h3>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition cursor-pointer">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-white/20 mr-3">
                      <Award className="h-6 w-6 text-yellow-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Œuvre primée</h4>
                      <p className="text-sm text-blue-200">2023</p>
                    </div>
                  </div>
                  <h5 className="text-lg font-semibold mb-2">
                    {["Mémoires de famille", "Heritage culturel", "Traditions préservées"][i-1]}
                  </h5>
                  <p className="text-sm mb-4 text-blue-100">
                    Par {["Marie Hebga", "Jean Hebga", "André Hebga"][i-1]}
                  </p>
                  <p className="text-sm leading-relaxed opacity-80">
                    Contribution exceptionnelle à la préservation et à la valorisation de notre patrimoine familial.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}