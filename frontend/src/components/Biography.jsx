import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, Award, Heart, Clock, BookOpen } from 'lucide-react';

export default function Biography() {
  const [activeTab, setActiveTab] = useState('profile');

  const personalInfo = {
    name: "Dr. Jean Hebga",
    title: "Psychologue & Consultant en Santé Mentale",
    email: "jean.hebga@example.com",
    phone: "+237 691 234 567",
    location: "Douala, Cameroun",
    birthdate: "15 Mars 1975",
    languages: ["Français", "Anglais", "Douala"]
  };

  const experience = [
    {
      period: "2020 - 2024",
      role: "Consultant",
      organization: "Organisation Mondiale de la Santé (OMS)",
      description: "Travail dans la santé mentale et soutien psychosocial, réponse COVID-19, services pour populations clés."
    },
    {
      period: "2015 - 2020",
      role: "Manager des activités de santé mentale",
      organization: "CARE, Médecins du Monde",
      description: "Coordination des programmes de santé mentale et soutien psychosocial dans les contextes humanitaires."
    },
    {
      period: "2006 - 2015",
      role: "Psychologue",
      organization: "Hôpitaux publics et privés",
      description: "Accompagnement psychologique des patients atteints de maladies chroniques, particulièrement VIH/SIDA."
    }
  ];

  const education = [
    {
      period: "2002 - 2005",
      degree: "Doctorat en Psychologie Clinique",
      institution: "Université de Yaoundé I"
    },
    {
      period: "2000 - 2002",
      degree: "Master en Psychologie de la Santé",
      institution: "Université de Douala"
    },
    {
      period: "1996 - 2000",
      degree: "Licence en Psychologie",
      institution: "Université de Yaoundé I"
    }
  ];

  const projects = [
    {
      title: "Santé mentale pour tous",
      type: "Émission radiophonique",
      platform: "RBR 99.5 FM",
      description: "Animateur d'une émission hebdomadaire sur la santé mentale et le bien-être psychologique."
    },
    {
      title: "Soutien psychologique aux enfants drépanocytaires",
      type: "Projet en cours",
      description: "Accompagnement des enfants atteints de drépanocytose et soutien à leurs familles."
    },
    {
      title: "Programme DDR",
      type: "Consultant",
      description: "Formations sanitaires comme porte d'entrée pour les activités sociales et économiques inclusives."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre principal */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700">Biographie</h1>
          <p className="text-gray-600 mt-3">Découvrez l'histoire de notre famille à travers ses membres</p>
        </div>

        {/* Contenu principal */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* En-tête avec photo et informations principales */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
              <div className="md:mr-10">
                <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden shadow-lg">
                  <img src="/api/placeholder/400/400" alt="Dr. Jean Hebga" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold">{personalInfo.name}</h2>
                <p className="text-blue-200 text-lg mb-4">{personalInfo.title}</p>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-3 md:gap-6 justify-center md:justify-start">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-blue-300" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-blue-300" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-blue-300" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation par onglets */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              <button 
                onClick={() => setActiveTab('profile')}
                className={`px-6 py-3 text-lg font-medium border-b-2 ${activeTab === 'profile' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Profil
              </button>
              <button 
                onClick={() => setActiveTab('experience')}
                className={`px-6 py-3 text-lg font-medium border-b-2 ${activeTab === 'experience' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Expérience
              </button>
              <button 
                onClick={() => setActiveTab('education')}
                className={`px-6 py-3 text-lg font-medium border-b-2 ${activeTab === 'education' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Formation
              </button>
              <button 
                onClick={() => setActiveTab('projects')}
                className={`px-6 py-3 text-lg font-medium border-b-2 ${activeTab === 'projects' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Projets
              </button>
            </div>
          </div>

          {/* Contenu des onglets */}
          <div className="p-6 md:p-10">
            {/* Onglet Profil */}
            {activeTab === 'profile' && (
              <div className="space-y-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">À propos</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Je suis psychologue et responsable d'activités en Santé Mentale avec 17 ans d'expérience aux niveaux national et international. De 2006 à 2015, j'ai travaillé dans les hôpitaux publics et privés nationaux en tant que psychologue, en mettant une emphase aux maladies chroniques en général et au VIH/SIDA en particulier. À partir de 2015, j'ai travaillé avec des organisations non gouvernementales internationales (ONG) tel que CARE, Médecins du Monde en tant que Manager des activités de santé mentale et soutien psychosocial (SMSPS). De 2020 à 2024, j'ai travaillé pour l'Organisation Mondiale de la Santé (OMS). J'ai été tour à tour dans la réponse COVID-19, les services différenciés aux populations clés (homosexuels, drogués, prostitués) ayant ou exposées au SIDA, et la réponse aux urgences humanitaires en mettant un accent sur le renforcement du système de santé et l'approche Désarmement/Démobilisation/Réintégration en utilisant les formations sanitaires comme porte d'entrée pour les activités sociales et économiques inclusives contribuant à la résilience des ex-combattants enrôlés dans le programme gouvernemental DDR.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                      Informations personnelles
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <span className="font-medium w-32">Date de naissance:</span>
                        <span>{personalInfo.birthdate}</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="font-medium w-32">Langues parlées:</span>
                        <span>{personalInfo.languages.join(", ")}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-blue-600" />
                      Centres d'intérêt
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Santé mentale</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Psychologie clinique</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Humanitaire</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Lecture</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Radio</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                    Activité actuelle
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Actuellement je suis dans un projet de prise en charge psychologique des enfants drépanocytaires et leurs parents. Je suis aussi présentateur d'une émission radiophonique intitulé "Santé mentale pour tous" sur la RBR 99.5FM.
                  </p>
                </div>
              </div>
            )}

            {/* Onglet Expérience */}
            {activeTab === 'experience' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
                  <Briefcase className="h-6 w-6 mr-2" />
                  Parcours professionnel
                </h3>

                <div className="relative border-l-2 border-blue-200 pl-6 space-y-10 ml-6">
                  {experience.map((item, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-10 top-0 bg-blue-600 rounded-full w-4 h-4 border-4 border-white"></div>
                      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-3">
                          {item.period}
                        </span>
                        <h4 className="text-lg font-semibold">{item.role}</h4>
                        <p className="text-blue-700 mb-3">{item.organization}</p>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Onglet Formation */}
            {activeTab === 'education' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
                  <GraduationCap className="h-6 w-6 mr-2" />
                  Parcours académique
                </h3>

                <div className="relative border-l-2 border-blue-200 pl-6 space-y-10 ml-6">
                  {education.map((item, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-10 top-0 bg-blue-600 rounded-full w-4 h-4 border-4 border-white"></div>
                      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-3">
                          {item.period}
                        </span>
                        <h4 className="text-lg font-semibold">{item.degree}</h4>
                        <p className="text-blue-700">{item.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Onglet Projets */}
            {activeTab === 'projects' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center">
                  <Award className="h-6 w-6 mr-2" />
                  Projets et réalisations
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-t-4 border-blue-600">
                      <h4 className="text-lg font-semibold text-blue-800">{project.title}</h4>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{project.type}</span>
                        {project.platform && (
                          <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs">
                            {project.platform}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation familiale */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-6">Autres membres de la famille</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full overflow-hidden mb-3">
                  <img src={`/api/placeholder/100/100`} alt="Membre" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-medium">Marie Hebga</h4>
                <p className="text-sm text-gray-500">Soeur</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}