import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';
import { CONFERENCE_DATE, REGISTRATION_LINK } from '../constants';

// Images for rotating carousel
const ROTATING_IMAGES = [
  'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80', // Lab research
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80', // Data/Network nodes
  'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80', // Scientists collaborating
];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Logic to rotate images every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ROTATING_IMAGES.length);
    }, 4000); // Change image every 4000ms (4 seconds)

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div className="min-h-screen">
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
              <p className="text-slate-600 text-sm max-w-xs">
                Auditorium, Level 4,<br/>
                Ambulatory Care Centre,<br/>
                Hospital Raja Permaisuri Bainun,<br/>
                Ipoh, Perak
              </p>
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

      {/* About Section (with Rotating Images) */}
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
              
              {/* Rotating Image Container */}
              <div className="relative h-96">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-lime-200 rounded-2xl transform rotate-3"></div>
                
                {ROTATING_IMAGES.map((imageUrl, index) => (
                  <img 
                    key={index}
                    src={imageUrl} 
                    alt={`Conference Topic ${index + 1}`} 
                    className={`absolute inset-0 rounded-2xl shadow-lg w-full h-full object-cover hover:scale-[1.02] transition-all duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  />
                ))}
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

      {/* Location Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Event Location</h2>
            <p className="text-slate-600 flex flex-col md:flex-row items-center justify-center gap-2 text-center">
              <span className="inline-flex items-center gap-1"><MapPin className="w-5 h-5 text-pink-500" /> Auditorium, Level 4,</span>
              <span>Ambulatory Care Centre, HRPB, Ipoh</span>
            </p>
          </div>
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.885662706859!2d101.08947631538356!3d4.603411043685519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31caec830e017681%3A0x629158025287518!2sHospital%20Raja%20Permaisuri%20Bainun!5e0!3m2!1sen!2smy!4v1629876543210!5m2!1sen!2smy" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Conference Venue Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Organizers */}
      <section className="py-12 bg-white">
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
