import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: Identity */}
          <div>
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 rounded-full bg-lime-500 flex items-center justify-center font-bold text-slate-900">P</div>
               <span className="text-xl font-bold text-lime-400">PRC 2026</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Connecting Minds: Empowering Clinical Research Through Collaborative Networks.
            </p>
            <div className="text-xs text-slate-500 space-y-1">
              <p className="font-semibold text-slate-400 mb-1">Co-organised by:</p>
              <ul className="space-y-1">
                 <li>CRC Hospital Raja Permaisuri Bainun</li>
                 <li>CRC Hospital Taiping</li>
                 <li>CRC Hospital Seri Manjung</li>
                 <li>Postgraduate Medical Education Society (PGMES)</li>
                 <li>Jabatan Kesihatan Negeri Perak</li>
              </ul>
            </div>
          </div>

          {/* Column 2: Quick Links (Visual only since nav handles routing) */}
          <div>
            <h3 className="text-lg font-semibold text-pink-300 mb-4">Venue</h3>
            <div className="flex items-start gap-3 text-slate-300 text-sm">
              <MapPin className="w-5 h-5 text-lime-500 flex-shrink-0 mt-1" />
              <p>
                Auditorium, Level 4,<br />
                Ambulatory Care Centre,<br />
                Hospital Raja Permaisuri Bainun,<br />
                Ipoh, Perak
              </p>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div>
             <h3 className="text-lg font-semibold text-pink-300 mb-4">Contact Us</h3>
             <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                   <Mail className="w-4 h-4 text-lime-500" />
                   <span>{CONTACT_EMAIL}</span>
                </li>
                <li className="flex items-center gap-2">
                   <Phone className="w-4 h-4 text-lime-500" />
                   <span>05-2085146</span>
                </li>
             </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
          &copy; 2026 Perak Annual Medical Research Conference. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
