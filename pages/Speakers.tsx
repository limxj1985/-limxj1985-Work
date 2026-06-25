import React from 'react';
import { Mic2, User } from 'lucide-react';

// Importing local images from your project structure
import RukmanPhoto from './assets/69017.jpg';
import AshaPhoto from './assets/69018.jpg';

interface Speaker {
  name: string;
  role: string;
  image: string; 
}

const Speakers: React.FC = () => {
  // Speaker data extracted from the official PRC 2026 agenda
  const speakers: Speaker[] = [
    {
      name: "PROF. DR. RUKMAN BIN AWANG HAMAT",
      role: "Plenary 1 Speaker",
      image: RukmanPhoto, 
    },
    {
      name: "PROF. DATIN DR. SARINDER KAUR DHILLON",
      role: "Plenary 2 Speaker",
      image: "", 
    },
    {
      name: "MS. ASHA THANABALAN",
      role: "Plenary 3 Speaker",
      image: AshaPhoto, 
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full text-center">
        {/* Header Icon */}
        <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mic2 className="w-8 h-8 text-lime-600" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Our Featured Speakers</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
          Meet the distinguished plenary speakers sharing their expertise at the Perak Annual Medical Research Conference 2026.
        </p>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col items-center transition-all duration-300 hover:shadow-md"
            >
              {/* Profile Image Wrapper */}
              <div className="w-40 h-40 rounded-full overflow-hidden bg-slate-100 border-4 border-slate-50 mb-6 flex items-center justify-center group">
                {speaker.image ? (
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallbackIcon = e.currentTarget.parentElement?.querySelector('.fallback-icon');
                      if (fallbackIcon) fallbackIcon.classList.remove('hidden');
                    }}
                  />
                ) : (
                  /* Initial Fallback Icon if no image source is provided */
                  <div className="text-slate-400">
                    <User className="w-16 h-16" />
                  </div>
                )}
                
                {/* Secondary Fallback Icon if image file fails to load */}
                <div className="fallback-icon hidden text-slate-400">
                  <User className="w-16 h-16" />
                </div>
              </div>

              {/* Speaker Details */}
              <h3 className="text-lg font-bold text-slate-900 text-center mb-1 line-clamp-2">
                {speaker.name}
              </h3>
              <p className="text-sm font-semibold text-lime-600 uppercase tracking-wider">
                {speaker.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
