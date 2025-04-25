import React, { useState, useEffect } from 'react';
import { 
  TreePine, 
  Search, 
  ChevronDown, 
  Users, 
  Info, 
  Filter,
  Calendar,
  MapPin,
  Heart,
  User,
  ArrowLeft,
  Download,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

export default function Genealogie() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeGeneration, setActiveGeneration] = useState('all');
  const [activeView, setActiveView] = useState('tree'); // 'tree' or 'list'
  const [selectedMember, setSelectedMember] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  
  // Effet pour le scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simulons des données pour l'arbre généalogique
  const familyMembers = [
    {
      id: 1,
      name: "Joseph Hebga",
      birthYear: 1929,
      deathYear: 2005,
      location: "Douala, Cameroun",
      generation: 1,
      image: "/api/placeholder/150/150",
      role: "Fondateur",
      bio: "Fondateur de la lignée Hebga, Joseph était un homme respecté connu pour sa sagesse et son dévouement à l'éducation.",
      children: [2, 3, 4],
      spouse: "Marie Hebga (1932-2010)"
    },
    {
      id: 2,
      name: "Paul Hebga",
      birthYear: 1952,
      location: "Yaoundé, Cameroun",
      generation: 2,
      image: "/api/placeholder/150/150",
      role: "Aîné",
      bio: "Fils aîné de Joseph, Paul a poursuivi l'héritage familial en devenant un médecin renommé.",
      children: [5, 6],
      spouse: "Claire Hebga (1955-présent)"
    },
    {
      id: 3,
      name: "Pierre Hebga",
      birthYear: 1954,
      location: "Paris, France",
      generation: 2,
      image: "/api/placeholder/150/150",
      role: "Entrepreneur",
      bio: "Second fils de Joseph, Pierre a fondé plusieurs entreprises prospères en France.",
      children: [7, 8, 9],
      spouse: "Jeanne Hebga (1957-présent)"
    },
    {
      id: 4,
      name: "Jeanne Hebga",
      birthYear: 1957,
      location: "Montréal, Canada",
      generation: 2,
      image: "/api/placeholder/150/150",
      role: "Écrivaine",
      bio: "Fille cadette de Joseph, Jeanne est une auteure reconnue avec plusieurs livres publiés.",
      children: [10],
      spouse: "Marc Dubois (1955-présent)"
    },
    {
      id: 5,
      name: "Thomas Hebga",
      birthYear: 1978,
      location: "Lyon, France",
      generation: 3,
      image: "/api/placeholder/150/150",
      role: "Ingénieur",
      bio: "Fils de Paul, Thomas travaille comme ingénieur en informatique.",
      children: [11, 12],
      spouse: "Sophie Hebga (1980-présent)"
    },
    {
      id: 6,
      name: "Émilie Hebga",
      birthYear: 1981,
      location: "Douala, Cameroun",
      generation: 3,
      image: "/api/placeholder/150/150",
      role: "Médecin",
      bio: "Fille de Paul, Émilie a suivi les pas de son père en devenant médecin.",
      children: [],
      spouse: "Samuel Nkoa (1979-présent)"
    },
    {
      id: 7,
      name: "Michel Hebga",
      birthYear: 1982,
      location: "Paris, France",
      generation: 3,
      image: "/api/placeholder/150/150",
      role: "Avocat",
      bio: "Fils aîné de Pierre, Michel exerce comme avocat à Paris.",
      children: [13],
      spouse: "Laure Hebga (1984-présent)"
    },
    {
      id: 8,
      name: "Nicolas Hebga",
      birthYear: 1985,
      location: "Marseille, France",
      generation: 3,
      image: "/api/placeholder/150/150",
      role: "Artiste",
      bio: "Second fils de Pierre, Nicolas est un artiste visuel reconnu.",
      children: [],
      spouse: ""
    },
    {
      id: 9,
      name: "Sophie Hebga",
      birthYear: 1987,
      location: "Bordeaux, France",
      generation: 3,
      image: "/api/placeholder/150/150",
      role: "Professeure",
      bio: "Fille cadette de Pierre, Sophie enseigne l'histoire à l'université.",
      children: [14, 15],
      spouse: "Martin Dupont (1985-présent)"
    },
    {
      id: 10,
      name: "Julie Dubois-Hebga",
      birthYear: 1986,
      location: "Montréal, Canada",
      generation: 3,
      image: "/api/placeholder/150/150",
      role: "Architecte",
      bio: "Fille unique de Jeanne, Julie est une architecte primée.",
      children: [16],
      spouse: "Robert Lee (1984-présent)"
    },
    {
      id: 11,
      name: "Lucas Hebga",
      birthYear: 2005,
      location: "Lyon, France",
      generation: 4,
      image: "/api/placeholder/150/150",
      role: "Étudiant",
      bio: "Fils de Thomas, Lucas étudie l'informatique.",
      children: [],
      spouse: ""
    },
    {
      id: 12,
      name: "Léa Hebga",
      birthYear: 2007,
      location: "Lyon, France",
      generation: 4,
      image: "/api/placeholder/150/150",
      role: "Étudiante",
      bio: "Fille de Thomas, Léa se passionne pour les arts.",
      children: [],
      spouse: ""
    },
    {
      id: 13,
      name: "Mathieu Hebga",
      birthYear: 2010,
      location: "Paris, France",
      generation: 4,
      image: "/api/placeholder/150/150",
      role: "Élève",
      bio: "Fils de Michel, Mathieu excelle en mathématiques.",
      children: [],
      spouse: ""
    },
    {
      id: 14,
      name: "Emma Dupont-Hebga",
      birthYear: 2012,
      location: "Bordeaux, France",
      generation: 4,
      image: "/api/placeholder/150/150",
      role: "Élève",
      bio: "Fille aînée de Sophie, Emma est passionnée de littérature.",
      children: [],
      spouse: ""
    },
    {
      id: 15,
      name: "Louis Dupont-Hebga",
      birthYear: 2014,
      location: "Bordeaux, France",
      generation: 4,
      image: "/api/placeholder/150/150",
      role: "Élève",
      bio: "Fils cadet de Sophie, Louis adore les sports.",
      children: [],
      spouse: ""
    },
    {
      id: 16,
      name: "Alice Lee-Dubois",
      birthYear: 2015,
      location: "Montréal, Canada",
      generation: 4,
      image: "/api/placeholder/150/150",
      role: "Élève",
      bio: "Fille de Julie, Alice montre des talents précoces en musique.",
      children: [],
      spouse: ""
    }
  ];

  // Filtrer les membres en fonction de la recherche et des filtres
  const filteredMembers = familyMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         member.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGeneration = activeGeneration === 'all' || member.generation === parseInt(activeGeneration);
    return matchesSearch && matchesGeneration;
  });

  // Fonction pour trouver un membre par ID
  const findMemberById = (id) => {
    return familyMembers.find(member => member.id === id);
  };

  // Fonction pour afficher les détails d'un membre
  const showMemberDetails = (member) => {
    setSelectedMember(member);
  };

  // Fonction pour fermer les détails
  const closeMemberDetails = () => {
    setSelectedMember(null);
  };

  // Fonction pour zoomer/dézoomer l'arbre
  const handleZoom = (direction) => {
    if (direction === 'in' && zoomLevel < 1.5) {
      setZoomLevel(prev => prev + 0.1);
    } else if (direction === 'out' && zoomLevel > 0.5) {
      setZoomLevel(prev => prev - 0.1);
    }
  };

  // Rendu de l'arbre généalogique
  const renderFamilyTree = () => {
    // Les membres de première génération
    const rootMembers = familyMembers.filter(member => member.generation === 1);
    
    return (
      <div className="relative overflow-x-auto mt-8" style={{ minHeight: '70vh' }}>
        <div className="flex justify-center mb-4">
          <button onClick={() => handleZoom('in')} className="mr-2 p-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200">
            <ZoomIn size={20} />
          </button>
          <button onClick={() => handleZoom('out')} className="p-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200">
            <ZoomOut size={20} />
          </button>
        </div>
        
        <div className="tree-container" style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center', transition: 'transform 0.3s ease' }}>
          {rootMembers.map(root => (
            <div key={root.id} className="flex flex-col items-center">
              <div 
                className="relative cursor-pointer transform transition hover:scale-105"
                onClick={() => showMemberDetails(root)}
              >
                <div className="bg-white shadow-lg rounded-lg p-4 border-2 border-blue-500">
                  <img src={root.image} alt={root.name} className="w-24 h-24 rounded-full mx-auto mb-3 border-4 border-blue-300" />
                  <h3 className="text-lg font-semibold text-center">{root.name}</h3>
                  <p className="text-sm text-center text-gray-600">{root.birthYear} - {root.deathYear || "présent"}</p>
                </div>
              </div>
              
              {root.children.length > 0 && (
                <>
                  <div className="h-8 w-0.5 bg-gray-400"></div>
                  <div className="flex justify-center">
                    <div className="h-0.5 bg-gray-400" style={{ width: `${root.children.length * 240 - 10}px` }}></div>
                  </div>
                  <div className="flex justify-center space-x-6">
                    {root.children.map(childId => {
                      const child = findMemberById(childId);
                      return renderFamilyMember(child);
                    })}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Fonction récursive pour rendre chaque membre de la famille et ses enfants
  const renderFamilyMember = (member) => {
    if (!member) return null;
    
    return (
      <div key={member.id} className="flex flex-col items-center mt-4">
        <div className="h-8 w-0.5 bg-gray-400"></div>
        <div 
          className="relative cursor-pointer transform transition hover:scale-105"
          onClick={() => showMemberDetails(member)}
        >
          <div className="bg-white shadow-lg rounded-lg p-4 border-2 border-blue-400">
            <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-2 border-4 border-blue-200" />
            <h3 className="text-base font-semibold text-center">{member.name}</h3>
            <p className="text-xs text-center text-gray-600">{member.birthYear} - {member.deathYear || "présent"}</p>
          </div>
        </div>
        
        {member.children.length > 0 && (
          <>
            <div className="h-8 w-0.5 bg-gray-400"></div>
            <div className="flex justify-center">
              <div className="h-0.5 bg-gray-400" style={{ width: `${member.children.length * 180 - 10}px` }}></div>
            </div>
            <div className="flex justify-center space-x-4">
              {member.children.map(childId => {
                const child = findMemberById(childId);
                return renderFamilyMember(child);
              })}
            </div>
          </>
        )}
      </div>
    );
  };

  // Rendu de la vue en liste
  const renderListView = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredMembers.map(member => (
          <div 
            key={member.id} 
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition hover:shadow-lg hover:-translate-y-1 border-t-4 border-blue-500"
            onClick={() => showMemberDetails(member)}
          >
            <div className="md:flex">
              <div className="md:shrink-0">
                <img src={member.image} alt={member.name} className="h-48 w-full object-cover md:h-full md:w-32" />
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Génération {member.generation}
                  </span>
                  {member.role && (
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium ml-2 px-2.5 py-0.5 rounded">
                      {member.role}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mt-2">{member.name}</h3>
                <p className="text-sm text-gray-600">
                  {member.birthYear} - {member.deathYear || "présent"}
                </p>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  {member.location}
                </div>
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                  {member.bio}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Fenêtre modale pour les détails d'un membre
  const renderMemberDetailModal = () => {
    if (!selectedMember) return null;

    const member = selectedMember;
    const spouse = member.spouse ? member.spouse : "Non renseigné";
    const children = member.children.map(childId => findMemberById(childId));

    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <button 
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            onClick={closeMemberDetails}
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="relative h-48 sm:h-64 bg-blue-600">
            <div className="absolute inset-0 opacity-20 bg-[url('/api/placeholder/1200/400')]" style={{backgroundPosition: 'center'}}></div>
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 flex items-end">
              <div className="relative mr-6 -mb-16">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl border-4 border-white shadow-lg object-cover" 
                />
                <div className="absolute top-2 right-2 bg-blue-500 rounded-full p-1 shadow-lg">
                  <User className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="text-white pb-4">
                <h2 className="text-2xl sm:text-3xl font-bold">{member.name}</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-700 bg-opacity-50 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300 mr-1.5"></span>
                    Génération {member.generation}
                  </span>
                  {member.role && (
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded flex items-center">
                      {member.role}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 px-6 py-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Biographie</h3>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Liens familiaux</h3>
                  
                  {member.spouse && (
                    <div className="bg-pink-50 rounded-lg p-4 mb-4 border-l-4 border-pink-300">
                      <div className="flex items-center">
                        <Heart className="h-5 w-5 text-pink-500 mr-2" />
                        <h4 className="font-medium">Conjoint(e)</h4>
                      </div>
                      <p className="mt-1 text-gray-700">{spouse}</p>
                    </div>
                  )}
                  
                  {children.length > 0 && (
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-300">
                      <div className="flex items-center mb-2">
                        <Users className="h-5 w-5 text-blue-500 mr-2" />
                        <h4 className="font-medium">Enfants</h4>
                      </div>
                      <ul className="space-y-2">
                        {children.map(child => (
                          <li key={child.id} className="flex items-center">
                            <img 
                              src={child.image} 
                              alt={child.name} 
                              className="w-8 h-8 rounded-full mr-2 border border-blue-200" 
                            />
                            <div>
                              <p className="font-medium text-gray-900">{child.name}</p>
                              <p className="text-xs text-gray-600">{child.birthYear} - {child.deathYear || "présent"}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Informations</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                      <div>
                        <span className="text-gray-600 block text-sm">Date de naissance</span>
                        <span className="font-medium">{member.birthYear}</span>
                      </div>
                    </li>
                    {member.deathYear && (
                      <li className="flex items-start">
                        <Calendar className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                        <div>
                          <span className="text-gray-600 block text-sm">Date de décès</span>
                          <span className="font-medium">{member.deathYear}</span>
                        </div>
                      </li>
                    )}
                    <li className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                      <div>
                        <span className="text-gray-600 block text-sm">Localisation</span>
                        <span className="font-medium">{member.location}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <button className="w-full bg-blue-50 text-blue-700 font-medium py-2 px-4 border border-blue-300 rounded-lg flex items-center justify-center hover:bg-blue-100 transition">
                  <Download className="h-5 w-5 mr-2" />
                  Exporter les informations
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-10">
      {/* Header de la page */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <a href="/" className="flex items-center text-blue-100 hover:text-white transition">
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span>Retour à l'accueil</span>
            </a>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-3">
                <TreePine className="h-8 w-8 mr-3 text-blue-200" />
                <h1 className="text-3xl md:text-4xl font-bold">Généalogie Familiale</h1>
              </div>
              <p className="text-blue-100 text-lg max-w-2xl">
                Explorez l'arbre généalogique de la famille Hebga et découvrez l'histoire qui lie chaque membre à travers les générations.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 md:text-right">
              <p className="text-blue-50 text-sm">Nombre de membres</p>
              <p className="text-2xl font-bold">{familyMembers.length}</p>
              <div className="flex items-center mt-1 text-blue-100 text-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-300 mr-2"></span>
                <span>4 générations</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Outils de recherche et navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Rechercher un membre de la famille..."
                  className="block w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 relative"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <Filter className="h-5 w-5 text-gray-500 mr-2" />
                <span>Filtres</span>
                <ChevronDown className={`h-4 w-4 text-gray-500 ml-2 transition ${filterOpen ? 'transform rotate-180' : ''}`} />
                
                {filterOpen && (
                  <div className="absolute top-full right-0 mt-2 w-60 bg-white rounded-lg shadow-lg z-10 border border-gray-100">
                    <div className="p-4">
                      <h4 className="font-medium text-gray-900 mb-3">Génération</h4>
                      <div className="space-y-2">
                        <label className="flex items-center cursor-pointer">
                          <input 
                            type="radio" 
                            name="generation" 
                            value="all" 
                            checked={activeGeneration === 'all'} 
                            onChange={() => setActiveGeneration('all')}
                            className="mr-2 text-blue-600 focus:ring-blue-500"
                          />
                          <span>Toutes les générations</span>
                        </label>
                        {[1, 2, 3, 4].map((gen) => (
                          <label key={gen} className="flex items-center cursor-pointer">
                            <input 
                              type="radio" 
                              name="generation" 
                              value={gen} 
                              checked={activeGeneration === gen.toString()} 
                              onChange={() => setActiveGeneration(gen.toString())}
                              className="mr-2 text-blue-600 focus:ring-blue-500"
                            />
                            <span>Génération {gen}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </button>
              
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button 
                  className={`flex-1 px-4 py-2.5 flex items-center justify-center ${activeView === 'tree' ? 'bg-blue-100 text-blue-800' : 'bg-white text-gray-700'}`}
                  onClick={() => setActiveView('tree')}
                >
                  <TreePine className="h-4 w-4 mr-2" />
                  <span>Arbre</span>
                </button>
                <button 
                  className={`flex-1 px-4 py-2.5 flex items-center justify-center ${activeView === 'list' ? 'bg-blue-100 text-blue-800' : 'bg-white text-gray-700'}`}
                  onClick={() => setActiveView('list')}
                >
                  <Users className="h-4 w-4 mr-2" />
                  <span>Liste</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {searchTerm && (
          <div className="my-4 bg-blue-50 rounded-lg p-4 flex items-center">
            <Info className="h-5 w-5 text-blue-500 mr-2" />
              <p className="text-blue-700">
              {filteredMembers.length} membre(s) trouvé(s) pour la recherche "{searchTerm}"
            </p>
          </div>
        )}
        
        {filteredMembers.length === 0 ? (
          <div className="my-12 text-center">
            <div className="inline-block p-6 rounded-full bg-gray-100 mb-4">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Aucun résultat trouvé</h3>
            <p className="text-gray-600">
              Aucun membre ne correspond à votre recherche "{searchTerm}".<br />
              Essayez avec d'autres termes ou réinitialisez les filtres.
            </p>
            <button 
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => {
                setSearchTerm('');
                setActiveGeneration('all');
              }}
            >
              Réinitialiser la recherche
            </button>
          </div>
        ) : (
          <>
            {activeView === 'tree' ? renderFamilyTree() : renderListView()}
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <TreePine className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-gray-700 font-medium">Généalogie Familiale Hebga</span>
            </div>
            <div className="flex space-x-6 text-gray-500">
              <button className="hover:text-blue-600 transition flex items-center">
                <Download className="h-5 w-5 mr-1" />
                <span>Exporter</span>
              </button>
              <button className="hover:text-blue-600 transition flex items-center">
                <Info className="h-5 w-5 mr-1" />
                <span>Aide</span>
              </button>
            </div>
          </div>
          <div className="mt-6 md:mt-8 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Famille Hebga. Tous droits réservés.</p>
            <p className="mt-2">Conçu et développé avec ❤️ pour préserver notre histoire familiale.</p>
          </div>
        </div>
      </footer>

      {/* Modal pour les détails d'un membre */}
      {selectedMember && renderMemberDetailModal()}
    </div>
  );
}

// Définition du composant X (bouton de fermeture) manquant dans votre importation
function X(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}