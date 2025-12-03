import React from 'react';
import { REGISTRATION_LINK } from '../constants';
import { Ticket, Users, CheckCircle, ExternalLink, Quote } from 'lucide-react';

const Registration: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-20 px-4">
       
       <div className="max-w-3xl w-full text-center">
          <div className="inline-block p-4 rounded-full bg-lime-100 text-lime-600 mb-6">
             <Ticket className="w-12 h-12" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Secure Your Spot</h1>
          
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
             Registration for the Perak Annual Medical Research Conference 2026 is officially open.
             <br />
             <span className="font-bold text-pink-500">Admission is Free</span>, but seats are limited.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-10 text-left max-w-xl mx-auto shadow-sm">
             <h3 className="text-lg font-bold text-slate-800 mb-4">What's included:</h3>
             <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700">
                   <CheckCircle className="w-5 h-5 text-lime-500" />
                   Access to all Keynote and Plenary sessions
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                   <CheckCircle className="w-5 h-5 text-lime-500" />
                   Morning tea and Lunch
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                   <CheckCircle className="w-5 h-5 text-lime-500" />
                   e-Certificate
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                   <CheckCircle className="w-5 h-5 text-lime-500" />
                   Networking opportunities
                </li>
             </ul>
          </div>

          <a 
             href={REGISTRATION_LINK} 
             target="_blank" 
             rel="noreferrer"
             className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-lime-500 to-green-600 text-white rounded-full font-bold text-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all transform"
          >
             Register via Google Form <ExternalLink className="w-6 h-6" />
          </a>

          <p className="mt-8 text-sm text-slate-400">
             You will be redirected to an external Google Form to complete your registration.
          </p>
       </div>

       {/* Urgency Badge */}
       <div className="mt-12 flex items-center gap-2 px-6 py-3 bg-pink-50 text-pink-700 rounded-full border border-pink-100 animate-pulse mb-16">
          <Users className="w-4 h-4" />
          <span className="font-semibold text-sm">Limited spots available - First come, first serve!</span>
       </div>

       {/* Quote */}
       <div className="max-w-2xl text-center border-t border-slate-100 pt-8">
           <Quote className="w-6 h-6 text-lime-300 mx-auto mb-3" />
           <p className="text-slate-600 italic font-serif">
              "Medicine is a science of uncertainty and an art of probability."
           </p>
           <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wide">— Sir William Osler</p>
       </div>

    </div>
  );
};

export default Registration;