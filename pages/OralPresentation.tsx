import React from 'react';
import { ABSTRACT_DEADLINE } from '../constants';
import { Clock, Trophy, Award, Mail, FileText, CheckCircle, Quote, AlertCircle } from 'lucide-react';

const OralPresentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Oral Presentation Guidelines</h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-semibold text-sm">
             <Clock className="w-4 h-4" />
             Abstract Deadline: {ABSTRACT_DEADLINE}
          </div>
        </div>

        {/* Notices Section */}
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

            {/* Important Reminder Section (New) */}
            <div className="bg-amber-50 border border-amber-100 p-6 rounded-xl flex items-start gap-4 shadow-sm">
                <div className="p-2 bg-amber-100 rounded-full text-amber-600 shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-amber-900 font-bold mb-1">Important Reminder</h3>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    All participants are required to submit their work in the form of an abstract. The Scientific Committee will review all submissions and determine whether each accepted abstract will be assigned to an oral or poster presentation.
                  </p>
                </div>
            </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-8">
           
           {/* Main Guidelines */}
           <div className="md:col-span-2 space-y-10">
              
              <section>
                 <h2 className="text-2xl font-bold text-slate-800 mb-4">Presentation Format</h2>
                 <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <ul className="space-y-4 text-slate-700">
                       <li className="flex justify-between border-b border-slate-200 pb-2">
                          <span>Presentation Duration</span>
                          <span className="font-bold">8 Minutes</span>
                       </li>
                       <li className="flex justify-between border-b border-slate-200 pb-2">
                          <span>Q&A Session</span>
                          <span className="font-bold">7 Minutes</span>
                       </li>
                       <li className="flex justify-between">
                          <span>Slide Format</span>
                          <span className="font-bold">PowerPoint (16:9)</span>
                       </li>
                    </ul>
                 </div>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-pink-500" />
                    Awards
                 </h2>
                 <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl border border-pink-100 shadow-sm">
                    <p className="text-slate-700 mb-4">
                       Presenters will be evaluated by a panel of judges. The following prizes will be awarded during the Prize Giving Ceremony:
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                           <Award className="w-5 h-5 text-yellow-500" />
                           <span className="font-bold text-slate-800">1st, 2nd, and 3rd Prize</span>
                        </li>
                        <li className="flex items-center gap-3">
                           <Award className="w-5 h-5 text-slate-400" />
                           <span className="font-bold text-slate-800">2 Consolation Prizes</span>
                        </li>
                        <li className="flex items-center gap-3">
                           <Award className="w-5 h-5 text-lime-500" />
                           <span className="font-bold text-slate-800">1 Prize for Best Case Report</span>
                        </li>
                    </ul>
                 </div>
              </section>

              {/* Terms and Conditions */}
              <section>
                 <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-lime-600" />
                    Terms and Conditions
                 </h2>
                 <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <p className="text-slate-600 mb-6 text-sm italic border-l-4 border-lime-500 pl-4 bg-lime-50 py-2 rounded-r-lg">
                       By submitting the oral presentation, you have agreed to the terms and conditions as set out below.
                    </p>
                    <ul className="space-y-4 text-sm text-slate-600">
                       <li className="flex gap-3 items-start">
                          <CheckCircle className="w-4 h-4 text-lime-500 mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">You agree to give us permission on behalf of all authors and/or co-authors to display and store the abstract (submitted text only), together with author names, and biographies where supplied in different formats including print, electronic and digital forms (including on the PRC webpage).</span>
                       </li>
                       <li className="flex gap-3 items-start">
                          <CheckCircle className="w-4 h-4 text-lime-500 mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">The author is responsible for the accuracy of the abstract and oral presentation and should ensure that they have written entirely original work which does not infringe any copyright.</span>
                       </li>
                       <li className="flex gap-3 items-start">
                          <CheckCircle className="w-4 h-4 text-lime-500 mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">The corresponding author should ensure that all appropriate co-authors are included in the abstract and that the submission has been approved by all authors.</span>
                       </li>
                       <li className="flex gap-3 items-start">
                          <CheckCircle className="w-4 h-4 text-lime-500 mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">Presenting authors for oral presentations must register and attend the conference as a delegate or the abstract will be withdrawn. The authors will immediately notify the PRC organizing committee if they are unable to present an abstract or if the presenting author is changed.</span>
                       </li>
                       <li className="flex gap-3 items-start">
                          <CheckCircle className="w-4 h-4 text-lime-500 mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">If the author(s) have any commercial interest or associations that might pose a conflict of interest regarding their submission, they must be declared on the title slide.</span>
                       </li>
                       <li className="flex gap-3 items-start">
                          <CheckCircle className="w-4 h-4 text-lime-500 mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">You give us permission to photograph your oral presentation at the conference, which may be used on the PRC website and/or CRC promotional material.</span>
                       </li>
                       <li className="flex gap-3 items-start">
                          <CheckCircle className="w-4 h-4 text-lime-500 mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">The decision of the judges for oral presentations is final and any appeal will not be entertained.</span>
                       </li>
                    </ul>
                 </div>
              </section>
           </div>

           {/* Sidebar Info */}
           <div className="space-y-6">
              <div className="bg-lime-50 p-6 rounded-xl border border-lime-100">
                 <h3 className="text-lg font-bold text-lime-800 mb-4">Important Dates</h3>
                 <div className="space-y-4">
                    <div className="flex items-start gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2"></div>
                       <div>
                          <div className="text-xs text-lime-600 uppercase font-bold">Abstract Submission</div>
                          <div className="text-slate-800 font-medium">{ABSTRACT_DEADLINE}</div>
                       </div>
                    </div>
                    <div className="flex items-start gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2"></div>
                       <div>
                          <div className="text-xs text-lime-600 uppercase font-bold">Slides Submission</div>
                          <div className="text-slate-800 font-medium">3 August 2026</div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                 <Quote className="absolute top-4 left-4 w-8 h-8 text-pink-100 -z-0" />
                 <p className="text-sm text-slate-600 italic font-serif relative z-10 leading-relaxed">
                   "Somewhere, something incredible is waiting to be known."
                 </p>
                 <p className="text-xs text-pink-500 font-bold mt-3 text-right">— Dr. Carl Sagan</p>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};

export default OralPresentation;
