import React, { useState, useEffect, ReactNode } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Quote, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
// Assumes these constants exist in your project
import { CONFERENCE_DATE, REGISTRATION_LINK } from '../constants';
// Adjust path if necessary based on your actual project structure
import heroBg from '../components/assets/brain-network-banner.png';
import logoCRC from '../components/assets/CRC logo Latest.jpg';
import logoJKN from '../components/assets/jkn perak.jpeg';
import logoPGMES from '../components/assets/pgmes.jpeg';

// --- Constants & Data ---

const ROTATING_IMAGES = [
  'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80', // Lab research
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80', // Data/Network nodes
  'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80', // Scientists collaborating
];

const ORGANIZERS = [
  { 
    name: "CRC", 
    logo: logoCRC,
    // CRC is likely square, so we make it smaller (h-14) to match the others visually
    sizeClass: "h-10 md:h-20" 
  },
  { 
    name: "PGMES", 
    logo: logoPGMES,
    // PGMES might be wider, so we allow it to be taller (h-16)
    sizeClass: "h-18 md:h-24" 
  },
  { 
    name: "JKN Perak", 
    logo: logoJKN,
    // Standard size
    sizeClass: "h-18 md:h-24" 
  },
];

// --- Sub-Components ---

// Interface for the extracted card component
interface InfoCardProps {
    Icon: LucideIcon;
    title: string;
    theme: 'lime' | 'pink';
    children: ReactNode;
}

// Extracted reusable InfoCard component
const InfoCard: React.FC<InfoCardProps> = ({ Icon, title, theme, children }) => {
    const themeStyles = {
        lime: {
            containerHover: 'hover:border-lime-300',
            iconBg: 'bg-lime-100',
            iconText: 'text-lime-600',
            iconHoverBg: 'group-hover:bg-lime-500',
        },
        pink: {
            containerHover: 'hover:border-pink-300',
            iconBg: 'bg-pink-100',
            iconText: 'text-pink-500',
            iconHoverBg: 'group-hover:bg-pink-500',
        }
    };

    const s = themeStyles[theme];

    return (
        <div className={`bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center text-center group transition-all ${s.containerHover}`}>
            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors ${s.iconBg} ${s.iconText} ${s.iconHoverBg} group-hover:text-white`}>
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
            <div className="text-slate-600">
                {children}
            </div>
        </div>
    );
};

// --- NEW SUB-COMPONENT: Countdown Timer ---
interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [hasEnded, setHasEnded] = useState(false);

    const calculateTimeLeft = () => {
        // --- IMPORTANT: FIX ---
        // Changed date format from '2026-9-9' to '2026-09-09' for cross-browser compatibility.
        const targetDate = new Date('2026-09-09T08:00:00'); 

        const now = new Date();
        // Ensure we don't get NaN if date parsing fails
        if (isNaN(targetDate.getTime())) {
             console.error("Invalid Target Date in CountdownTimer");
             return;
        }

        const difference = targetDate.getTime() - now.getTime();

        if (difference > 0) {
            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            });
            setHasEnded(false);
        } else {
             setHasEnded(true);
        }
    };

    useEffect(() => {
        calculateTimeLeft(); 
        const timer = setInterval(calculateTimeLeft, 1000); // Update every second
        return () => clearInterval(timer);
    }, []);

    // Small helper for the timer number blocks
    const TimerBlock = ({ value, label }: { value: number, label: string }) => (
         <div className="flex flex-col items-center mx-2 sm:mx-4">
            {/* Frosted glass style box */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-md rounded-xl border border-lime-400/30 flex items-center justify-center text-2xl sm:text-3xl font-bold text-white shadow-lg mb-2">
                {/* Pad with leading zero if needed */}
                {value.toString().padStart(2, '0')}
            </div>
            <div className="text-lime-300 text-xs sm:text-sm uppercase tracking-widest font-bold">{label}</div>
        </div>
    );

    if (hasEnded) {
         return <div className="text-2xl text-lime-300 font-bold animate-bounce mb-10">Conference has started!</div>;
    }

    return (
        <div className="flex flex-wrap justify-center items-center mb-12 animate-fade-in-up">
            <TimerBlock value={timeLeft.days} label="Days" />
            <TimerBlock value={timeLeft.hours} label="Hours" />
            <TimerBlock value={timeLeft.minutes} label="Mins" />
            <TimerBlock value={timeLeft.seconds} label="Secs" />
        </div>
    );
};


// --- Main Component ---

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ROTATING_IMAGES.length);
    }, 4000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-900">
        {/* Background Image container */}
        <div className="absolute inset-0">
            <img
              src={heroBg}
              alt="Brain Network Abstract Background"
              className="w-full h-full object-cover opacity-20 mix-blend-screen"
            />
            {/* Gradients */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-radial-gradient from-pink-500/30 to-transparent blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] rounded-full bg-radial-gradient from-lime-500/20 to-transparent blur-3xl pointer-events-none"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-lime-400/30 shadow-sm text-lime-300 text-sm font-semibold mb-6 animate-fade-in-up">
            <span className="flex h-2 w-2 relative justify-center items-center">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
            </span>
            Registration Open Now
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-8 drop-shadow-lg">
            Perak Annual Medical <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-300">Research Conference</span>
            <span className="text-pink-400"> 2026</span>
          </h1>
          
          <p className="max-w-4xl mx-auto text-2xl md:text-3xl text-slate-200 mb-10 font-bold leading-snug drop-shadow-md">
            "Connecting Minds: Empowering Clinical Research Through Collaborative Networks"
          </p>

          {/* --- NEW: COUNTDOWN TIMER ADDED HERE --- */}
          <CountdownTimer />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={REGISTRATION_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="px-8 py-4 bg-pink-500 text-white rounded-full font-bold text-lg shadow-lg shadow-pink-500/20 hover:bg-pink-600 hover:shadow-pink-500/40 transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
              Register for Free <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/agenda"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-lg shadow-sm hover:bg-white/20 hover:border-white/40 transition-all"
            >
              View Agenda
            </Link>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16 bg-transparent relative z-10 -mt-20 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <InfoCard Icon={Calendar} title="Date & Time" theme="lime">
                <p>{CONFERENCE_DATE}</p>
                <p className="text-slate-500 text-sm mt-1">8.00 AM - 5.00 PM</p>
            </InfoCard>

            {/* Card 2 */}
            <InfoCard Icon={MapPin} title="Venue" theme="pink">
                 <p className="text-sm max-w-xs mx-auto">
                  Auditorium, Level 4,<br/>
                  Ambulatory Care Centre,<br/>
                  Hospital Raja Permaisuri Bainun,<br/>
                  Ipoh, Perak
                </p>
            </InfoCard>

            {/* Card 3 */}
            <InfoCard Icon={Clock} title="Important Deadlines" theme="lime">
              <ul className="text-sm space-y-3">
                <li className="flex flex-col">
                  <span className="font-bold text-pink-500 uppercase text-xs tracking-wider">Abstract Submission</span>
                  <span>12 June 2026</span>
                </li>
                <li className="flex flex-col border-t border-slate-100 pt-2">
                  <span className="font-bold text-lime-600 uppercase text-xs tracking-wider">Registration Close</span>
                  <span>21 August 2026</span>
                </li>
              </ul>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* About Section (with Rotating Images) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Attend?</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    The Perak Annual Medical Research Conference 2026 brings together the brightest minds in clinical research. This year, we focus on the power of networks—how connecting researchers, clinicians, and institutions can accelerate medical breakthroughs.
                  </p>
                  <ul className="space-y-4">
                    {[
                        "Gain insights from expert Keynote and Plenary speakers.",
                        "Network with professionals from CRC, MOH, academia, and private sectors.",
                        "Showcase your research in Oral and Poster presentations.",
                        "Participate in lucky draws and win exciting prizes."
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1 w-6 h-6 rounded-full bg-lime-100 flex items-center justify-center text-lime-600 flex-shrink-0">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                          <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                    ))}
                  </ul>
              </div>
              
              {/* Rotating Image Container */}
              <div className="relative aspect-[4/3] md:aspect-square max-h-[500px] mx-auto w-full">
                <div className="absolute inset-0 transform translate-x-4 translate-y-4 bg-gradient-to-tr from-pink-200/60 to-lime-200/60 rounded-[2rem] -z-10 rotate-3"></div>
                
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                    {ROTATING_IMAGES.map((imageUrl, index) => (
                    <img
                        key={index}
                        src={imageUrl}
                        alt={`Conference Highlight ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                    ))}
                </div>
              </div>

            </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
           <span className="absolute top-0 left-10 text-9xl text-slate-100 font-serif -z-10 select-none">“</span>
          <Quote className="w-12 h-12 text-pink-400 mx-auto mb-8 opacity-80" />
          <blockquote className="text-2xl md:text-4xl font-serif text-slate-800 italic leading-relaxed mb-8 relative z-10">
            "Research is to see what everybody else has seen, and to think what nobody else has thought."
          </blockquote>
          <cite className="text-lime-700 font-bold tracking-wider not-italic uppercase text-sm flex items-center justify-center gap-4">
             <span className="h-px w-8 bg-lime-300"></span>
             Albert Szent-Györgyi
             <span className="h-px w-8 bg-lime-300"></span>
          </cite>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Event Location</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-slate-600">
               <MapPin className="w-5 h-5 text-pink-500" />
               <span className="font-semibold">Ambulatory Care Centre (ACC),</span>
               <span>Raja Permaisuri Bainun Hospital, Ipoh</span>
            </div>
          </div>
          <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.885662706859!2d101.08947631538356!3d4.603411043685519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31caec830e017681%3A0x629158025287518!2sHospital%20Raja%20Permaisuri%20Bainun!5e0!3m2!1sen!2smy!4v1629876543210!5m2!1sen!2smy" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Map to Ambulatory Care Centre (ACC), HRPB Ipoh"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Organizers Section */}
<section className="py-20 bg-white border-t border-slate-100">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">
      Co-Organised By
    </p>
    
    <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
      {ORGANIZERS.map((org, index) => (
        <div 
          key={index} 
          className="group relative flex items-center justify-center p-4"
        >
          {/* Logo Image - UPDATED CLASSNAME */}
          <img 
            src={org.logo} 
            alt={org.name} 
            className="h-20 md:h-28 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
          
          {/* Tooltip */}
          <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-200 pointer-events-none whitespace-nowrap z-20">
            {org.name}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;
