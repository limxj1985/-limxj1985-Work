import React from 'react';
import { ABSTRACT_DEADLINE, POSTER_TEMPLATE_LINK } from '../constants';
import { MonitorPlay, Layout, Award, Download, Quote, Gavel } from 'lucide-react';

const PosterPresentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Poster Presentation</h1>
          <p className="text-lg text-slate-600">Showcase your research visually to a wider audience.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
           <div className="bg-gradient-to-r from-lime-500 to-green-600 p-8 text-white flex justify-between items-center">
              <div>
                 <h2 className="text-2xl font-bold">E-Poster Presentation</h2>
                 <p className="opacity-90">Digital Format Only - Guidelines and Specifications</p>
              </div>
              <MonitorPlay className="w-12 h-12 opacity-80" />
           </div>
           
           <div className="p-8 grid md:grid-cols-2 gap-10">
              <div>
                 <div className="mb-8">
                    <a 
                      href={POSTER_TEMPLATE_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-white border-2 border-lime-100 text-lime-700 rounded-lg font-bold shadow-sm hover:bg-lime-50 hover:border-lime-300 transition-all"
                    >
                      <Download className="w-5 h-5" />
                      Download Template Slide
                    </a>
                    <p className="text-xs text-slate-500 mt-2 italic">
                       Please download the template slide as your starting point.
                    </p>
                 </div>

                 <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Layout className="w-5 h-5 text-lime-600" />
                    Formatting Rules
                 </h3>
                 <ul className="space-y-3 text-slate-600 text-sm">
                    <li className="flex gap-3">
                       <span className="text-lime-500 font-bold">•</span>
                       <span className="leading-relaxed"><strong>Use the Template:</strong> Please strictly follow the layout, dimensions, and specifications provided in the downloadable template.</span>
                    </li>
                    <li className="flex gap-3">
                       <span className="text-lime-500 font-bold">•</span>
                       <span><strong>File Format:</strong> Save your final poster as a PDF.</span>
                    </li>
                    <li className="flex gap-3">
                       <span className="text-lime-500 font-bold">•</span>
                       <span className="leading-relaxed"><strong>Readability:</strong> Ensure all text and graphics are high-resolution and readable on a digital screen.</span>
                    </li>
                    <li className="flex gap-3">
                       <span className="text-lime-500 font-bold">•</span>
                       <span className="leading-relaxed"><strong>Content:</strong> Include Abstract Title, Authors, Institution, Introduction, Methodology, Results, and Conclusion as per the template structure.</span>
                    </li>
                 </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl h-fit">
                 <h3 className="text-lg font-bold text-slate-800 mb-4">Submission Details</h3>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                       <span className="text-slate-600">Abstract Due</span>
                       <span className="font-bold text-slate-900">{ABSTRACT_DEADLINE}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                       <span className="text-slate-600">Softcopy PDF Due</span>
                       <span className="font-bold text-slate-900">3 August 2026</span>
                    </div>
                 </div>
                 
                 <div className="mt-6 p-4 bg-lime-100 rounded-lg text-sm text-lime-800">
                    <strong>Note:</strong> This is an E-Poster only event. No physical poster printing is required.
                 </div>

                 {/* Committee Decision Notice */}
                 <div className="mt-4 p-4 bg-amber-50 border border-amber-100 rounded-lg flex items-start gap-3">
                     <div className="mt-0.5 text-amber-600">
                        <Gavel className="w-4 h-4" />
                     </div>
                     <p className="text-amber-900 text-xs leading-relaxed">
                        The Scientific Committee reserves the right to decide on the acceptance of abstracts for either oral or poster presentation. Any appeal will not be entertained.
                     </p>
                 </div>
              </div>
           </div>
        </div>

        <div className="grid md:grid-cols-1 gap-6 mb-12">
           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="p-3 bg-pink-100 rounded-full text-pink-600">
                 <Award className="w-6 h-6" />
              </div>
              <div>
                 <h3 className="font-bold text-slate-800 text-lg">Best Poster Awards</h3>
                 <p className="text-slate-600 text-sm mt-1">
                    There will be <span className="font-bold text-pink-600">3 Prizes</span> for poster presentations.
                 </p>
              </div>
           </div>
        </div>

        <div className="text-center pt-8 border-t border-slate-200">
           <Quote className="w-6 h-6 text-lime-400 mx-auto mb-3" />
           <p className="text-lg text-slate-600 font-serif italic mb-2">
             "The only way of discovering the limits of the possible is to venture a little way past them into the impossible."
           </p>
           <p className="text-xs font-bold text-pink-500 uppercase tracking-widest">— Arthur C. Clarke</p>
        </div>

      </div>
    </div>
  );
};

export default PosterPresentation;
