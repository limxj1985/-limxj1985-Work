import React from 'react';
import { ABSTRACT_DEADLINE, POSTER_TEMPLATE_LINK } from '../constants';
import { MonitorPlay, Layout, Award, Download, Quote, AlertCircle, FileText, FileCheck, ShieldCheck, Users, Camera, Gavel, Mail } from 'lucide-react';

const PosterPresentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Mobile optimized title size */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Poster Presentation Guidelines</h1>
          <p className="text-lg text-slate-600">Showcase your research visually to a wider audience.</p>
        </div>

        {/* Notices Section (Grouped for consistent spacing) */}
        <div className="space-y-4 mb-10">
            
            {/* Communication Notice */}
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl flex items-start gap-4 shadow-sm">
                <div className="p-2 bg-blue-100 rounded-full text-blue-600 shrink-0">
                   <Mail className="w-5 h-5" />
                </div>
                <div>
                   <h3 className="text-blue-900 font-bold mb-1">Communication</h3>
                   <p className="text-blue-800 text-sm leading-relaxed">
                      All necessary information—including the acceptance decision, technical guidelines, and presentation logistics—will be communicated to authors via email.
                   </p>
                </div>
            </div>

            {/* Important Reminder Section */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                    <h3 className="font-bold text-amber-900 text-lg mb-2">Important Reminder</h3>
                    <p className="text-amber-800 leading-relaxed">
                        All participants are required to{' '}
                        <a 
                          href="https://docs.google.com/forms/d/e/1FAIpQLSfKbb-GYcvo_qT0BwtdS5jbizj-y6FIizKoHh9tNGcQn7mYfw/viewform?usp=sharing&ouid=102140745386971931896"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline decoration-amber-800 hover:text-amber-950 transition-colors"
                        >
                          submit their work
                        </a>{' '}
                        in the form of an abstract. The Scientific Committee will review all submissions and determine whether each accepted abstract will be assigned to an oral or poster presentation.
                    </p>
                </div>
            </div>

        </div>

        {/* E-Poster Specs Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
           {/* Mobile optimized banner: stacked flex-col on mobile, row on desktop */}
           <div className="bg-gradient-to-r from-lime-500 to-green-600 p-8 text-white flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 text-center md:text-left">
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
                      // Mobile optimized button: w-full and justify-center
                      className="inline-flex items-center justify-center w-full md:w-auto gap-2 px-5 py-3 bg-white border-2 border-lime-100 text-lime-700 rounded-lg font-bold shadow-sm hover:bg-lime-50 hover:border-lime-300 transition-all"
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
                    Poster Format
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
                 </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl h-fit">
                 <h3 className="text-lg font-bold text-slate-800 mb-4">Important Dates</h3>
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
              </div>
           </div>
        </div>

        {/* Awards Section */}
        <div className="grid md:grid-cols-1 gap-6 mb-8">
           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="p-3 bg-pink-100 rounded-full text-pink-600 shrink-0">
                 <Award className="w-6 h-6" />
              </div>
              <div>
                 <h3 className="font-bold text-slate-800 text-lg">Best Poster Awards</h3>
                 <p className="text-slate-600 text-sm mt-1 mb-3">
                    There will be <span className="font-bold text-pink-600">3 Prizes</span> for poster presentations.
                 </p>
                 
                 {/* Disclaimer Added Here */}
                 <p className="text-xs text-slate-400 italic border-t border-slate-100 pt-2">
                    * Subject to change by the organizer without prior notice.
                 </p>
              </div>
           </div>
        </div>

        {/* General Guidelines Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-8">
           
           <div className="bg-slate-800 p-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                 <FileText className="w-6 h-6 text-lime-400" />
                 General Guidelines
              </h2>
           </div>

           <div className="p-8">
              
              {/* Highlighted Agreement Statement */}
              <div className="bg-lime-50 border-l-4 border-lime-500 p-4 rounded-r-xl mb-8">
                 <p className="text-slate-700 text-sm font-medium italic leading-relaxed">
                    By submitting a poster, you grant us permission to publish it in print, electronic, and digital formats (including the PRC website).
                 </p>
              </div>

              <div className="space-y-6">

                 {/* Authorship */}
                 <div className="flex gap-4 items-start">
                    <div className="mt-1 bg-lime-100 p-2 rounded-lg text-lime-700">
                       <Users className="w-5 h-5" />
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                       The corresponding author should ensure that all appropriate co-authors are included and that the submission has been approved by all authors.
                    </p>
                 </div>

                 {/* Originality */}
                 <div className="flex gap-4 items-start">
                    <div className="mt-1 bg-blue-100 p-2 rounded-lg text-blue-700">
                       <ShieldCheck className="w-5 h-5" />
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                       Posters must be of original research. The author is responsible for the accuracy of the poster content.
                    </p>
                 </div>

                 {/* Mandatory Registration (Pink Warning) */}
                 <div className="flex gap-4 items-start">
                    <div className="mt-1 bg-pink-100 p-2 rounded-lg text-pink-600">
                       <AlertCircle className="w-5 h-5" />
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                       The presenting author <strong>MUST register</strong> for the conference. If not registered, the poster will be withdrawn. Authors must immediately notify the PRC secretariat if they are unable to present.
                    </p>
                 </div>

                 {/* Conflict of Interest (Amber Warning) */}
                 <div className="flex gap-4 items-start">
                    <div className="mt-1 bg-amber-100 p-2 rounded-lg text-amber-600">
                       <AlertCircle className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-slate-600 text-sm mb-1">
                          Commercial interests or associations that might pose a conflict of interest must be declared at the <strong>bottom of the poster</strong>.
                       </p>
                       <p className="text-slate-600 text-sm">
                          Funding sources should also be acknowledged where applicable.
                       </p>
                    </div>
                 </div>

                 {/* Disclaimer */}
                 <div className="flex gap-4 items-start">
                    <div className="mt-1 bg-slate-100 p-2 rounded-lg text-slate-600">
                       <Gavel className="w-5 h-5" />
                    </div>
                    <p className="text-slate-600 text-sm">
                       The decision of the judges for poster presentations is final and any appeal will not be entertained.
                    </p>
                 </div>

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
