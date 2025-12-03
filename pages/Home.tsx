import React from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';
import { CONFERENCE_DATE, CONFERENCE_VENUE, REGISTRATION_LINK } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-lime-50 via-white to-pink-50 py-20 lg:py-32 overflow-hidden">
        <NetworkBackground />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-lime-200 shadow-sm text-lime-700 text-sm font-semibold mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></span>
            Registration Open Now
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
            Perak Annual Medical <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-green-500">Research Conference</span> 
            <span className="text-pink-500"> 2026</span>
          </h1>
          
          <p className="max-w-4xl mx-auto text-3xl md:text-4xl text-slate-800 mb-10 font-bold leading-snug drop-shadow-sm">
            "Connecting Minds: Empowering Clinical Research Through Collaborative Networks"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={REGISTRATION_LINK}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-pink-500 text-white rounded-full font-bold text-lg shadow-lg hover:bg-pink-600 hover:shadow-pink-200/50 transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
              Register for Free <ArrowRight className="w-5 h-5" />
            </a>
            <Link 
              to="/agenda"
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold text-lg shadow-sm hover:bg-lime-50 hover:border-lime-200 transition-all"
            >
              View Agenda
            </Link>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-white relative z-10 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:border-lime-300 transition-all">
              <div className="w-14 h-14 bg-lime-100 rounded-full flex items-center justify-center text-lime-600 mb-4 group-hover:bg-lime-500 group-hover:text-white transition-colors">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Date & Time</h3>
              <p className="text-slate-600">{CONFERENCE_DATE}</p>
              <p className="text-slate-500 text-sm mt-1">8.00 AM - 5.00 PM</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:border-pink-300 transition-all">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 mb-4 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Venue</h3>
              <p className="text-slate-600 text-sm max-w-xs">{CONFERENCE_VENUE}</p>
            </div>

            {/* Card 3 - Important Deadlines */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:border-lime-300 transition-all">
              <div className="w-14 h-14 bg-lime-100 rounded-full flex items-center justify-center text-lime-600 mb-4 group-hover:bg-lime-500 group-hover:text-white transition-colors">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Important Deadlines</h3>
              <ul className="text-slate-600 text-sm space-y-2">
                <li className="flex flex-col">
                  <span className="font-semibold text-pink-500 uppercase text-xs tracking-wider">Abstract Submission</span>
                  <span>12 June 2026</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-lime-600 uppercase text-xs tracking-wider">Registration Close</span>
                  <span>21 August 2026</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Attend?</h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    The Perak Annual Medical Research Conference 2026 brings together the brightest minds in clinical research. This year, we focus on the power of networks—how connecting researchers, clinicians, and institutions can accelerate medical breakthroughs.
                  </p>
                  <ul className="space-y-4 mt-8">
                     {[
                        "Gain insights from expert Keynote and Plenary speakers.",
                        "Network with professionals from CRC, MOH, and private sectors.",
                        "Showcase your research in Oral and Poster presentations.",
                        "Participate in lucky draws and win exciting prizes."
                     ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                           <div className="mt-1 w-5 h-5 rounded-full bg-lime-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">✓</div>
                           <span className="text-slate-700">{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-lime-200 rounded-2xl transform rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80" 
                    alt="Medical Research Laboratory" 
                    className="relative rounded-2xl shadow-lg w-full h-auto object-cover hover:scale-[1.02] transition-all duration-500"
                  />
               </div>
            </div>
         </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <Quote className="w-12 h-12 text-pink-300 mx-auto mb-6 opacity-50" />
           <blockquote className="text-2xl md:text-3xl font-serif text-slate-700 italic leading-relaxed mb-6">
             "Research is to see what everybody else has seen, and to think what nobody else has thought."
           </blockquote>
           <cite className="text-lime-600 font-bold tracking-wide not-italic uppercase text-sm">
             — Albert Szent-Györgyi
           </cite>
        </div>
      </section>

      {/* Organizers */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">Co-Organised By</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Text Placeholders for Logos based on User Request */}
             <div className="font-bold text-sm text-slate-800 leading-tight">CRC Hospital<br/>Raja Permaisuri Bainun</div>
             <div className="font-bold text-sm text-slate-800 leading-tight">CRC Hospital<br/>Taiping</div>
             <div className="font-bold text-sm text-slate-800 leading-tight">CRC Hospital<br/>Seri Manjung</div>
             <div className="font-bold text-sm text-slate-800 leading-tight">PGMES</div>
             <div className="font-bold text-sm text-slate-800 leading-tight">JKN Perak</div>
             <div className="font-bold text-sm text-slate-800 leading-tight">CRM</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
