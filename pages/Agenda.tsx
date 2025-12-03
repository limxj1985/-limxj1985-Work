import React from 'react';
import { AGENDA_DATA } from '../constants';
import { Clock, MapPin, Quote } from 'lucide-react';

const Agenda: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Conference Agenda</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A packed day of insights, research findings, and networking opportunities.
          </p>
        </div>

        <div className="space-y-6">
          {AGENDA_DATA.map((item, index) => (
            <div 
              key={index}
              className={`relative flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-sm border-l-4 transition-all hover:shadow-md ${
                item.type === 'break' ? 'border-pink-300 bg-pink-50/30' : 
                item.type === 'keynote' ? 'border-lime-500 bg-lime-50/20' : 
                'border-slate-200'
              }`}
            >
              {/* Time Column */}
              <div className="md:w-48 bg-slate-50 p-6 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100">
                <div className="flex items-center gap-2 text-slate-700 font-bold text-lg">
                  <Clock className="w-5 h-5 text-lime-600" />
                  {item.time}
                </div>
              </div>

              {/* Content Column */}
              <div className="flex-1 p-6">
                 <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                    <h3 className={`text-xl font-bold ${item.type === 'keynote' ? 'text-lime-700' : 'text-slate-800'}`}>
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit">
                       <MapPin className="w-3 h-3" />
                       {item.location}
                    </div>
                 </div>
                 
                 {item.details && (
                   <ul className="mt-3 space-y-1">
                     {item.details.map((detail, idx) => (
                       <li key={idx} className="text-slate-600 text-sm flex items-start gap-2">
                         <span className="block w-1.5 h-1.5 mt-1.5 rounded-full bg-pink-300 flex-shrink-0"></span>
                         {detail}
                       </li>
                     ))}
                   </ul>
                 )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm mb-8">
                * Schedule is subject to change. Please check back for updates closer to the event date.
            </p>
            
            <div className="max-w-2xl mx-auto pt-8 border-t border-slate-200">
               <Quote className="w-8 h-8 text-lime-300 mx-auto mb-3" />
               <p className="text-lg text-slate-600 italic font-serif">
                  "If we knew what we were doing, it would not be called research, would it?"
               </p>
               <p className="text-sm text-pink-500 font-bold mt-2 uppercase tracking-wider">— Albert Einstein</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Agenda;