import React from 'react';
import { Mic2, Quote } from 'lucide-react';

const Speakers: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-20 px-4">
       <div className="max-w-2xl text-center">
          <div className="w-24 h-24 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
             <Mic2 className="w-10 h-10 text-lime-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Speakers Revealed Soon</h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
             We are currently finalizing an exciting lineup of Keynote and Plenary speakers who are leaders in clinical research and medical innovation.
          </p>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 mb-12">
             <p className="text-slate-500 text-sm font-medium">Stay tuned for announcements.</p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-sm border border-pink-100">
             <Quote className="w-8 h-8 text-pink-300 mx-auto mb-4" />
             <p className="text-xl font-serif text-slate-700 italic leading-relaxed">
               "Research is formalized curiosity. It is poking and prying with a purpose."
             </p>
             <p className="mt-4 font-bold text-lime-600 text-sm uppercase tracking-wider">— Zora Neale Hurston</p>
          </div>
       </div>
    </div>
  );
};

export default Speakers;