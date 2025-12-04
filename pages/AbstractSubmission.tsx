import React from 'react';
import { ABSTRACT_SUBMISSION_LINK, CONTACT_EMAIL, ABSTRACT_TEMPLATE_LINK } from '../constants';
import { FileText, ShieldCheck, Users, AlertCircle, Camera, Gavel, FileCheck, Send, Calendar, Mail, FileDown, Type, AlignLeft, Quote, ListChecks, Info } from 'lucide-react';

const AbstractSubmission: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Abstract Submission</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Submit your research for a chance to present at PRC 2026. Please review the specific formatting rules and templates below.
          </p>
        </div>

        {/* Quote Block */}
        <div className="bg-gradient-to-r from-lime-50 to-pink-50 p-6 rounded-xl border border-lime-100 mb-8 text-center shadow-sm">
           <Quote className="w-6 h-6 text-lime-500 mx-auto mb-2 opacity-50" />
           <p className="text-slate-700 italic font-serif text-lg leading-relaxed">
             "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world."
           </p>
           <p className="text-xs font-bold text-pink-500 mt-2 uppercase tracking-wide">— Louis Pasteur</p>
        </div>

        {/* Submission Action Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-lime-200 p-8 mb-8 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Ready to Submit?</h2>
            
            <a 
              href={ABSTRACT_SUBMISSION_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-lime-500 to-green-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-lime-200/50 hover:scale-105 transition-all transform mb-6"
            >
              <Send className="w-5 h-5" />
              Submit Abstract Online
            </a>

            <div className="grid md:grid-cols-3 gap-6 text-left mt-6 pt-6 border-t border-slate-100">
               <div className="flex items-start gap-3">
                  <div className="mt-1 text-pink-500"><Calendar className="w-5 h-5" /></div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">Submission Deadline</h3>
                    <p className="text-sm text-slate-600">
                      12 June 2026, 11:59 PM (MYT)<br/>
                      <span className="text-xs text-red-500 font-medium">Late submissions will not be accepted</span>
                    </p>
                  </div>
               </div>
               <div className="flex items-start gap-3">
                  <div className="mt-1 text-lime-500"><Mail className="w-5 h-5" /></div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">Amendments/Issues</h3>
                    <p className="text-sm text-slate-600">
                      Contact Secretariat at<br/>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-lime-600 font-medium hover:underline">{CONTACT_EMAIL}</a>
                    </p>
                  </div>
               </div>
               <div className="flex items-start gap-3">
                  <div className="mt-1 text-blue-500"><FileCheck className="w-5 h-5" /></div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">Review Process</h3>
                    <p className="text-sm text-slate-600">
                      Reviewed by Scientific Committee.<br/>
                      Notification via email.
                    </p>
                  </div>
               </div>
            </div>
        </div>

        {/* Study Types & Submission Details */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-10">
                 {/* Accepted Study Types */}
                 <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                            <ListChecks className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-slate-800 text-lg">Accepted Study Types</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">All clinical studies will be considered, including:</p>
                    <ul className="space-y-2 text-sm text-slate-600 list-disc list-outside ml-4">
                       <li>Observational or Interventional studies</li>
                       <li>Cross-sectional surveys</li>
                       <li>Case series / Case reports</li>
                       <li>Quality Assurance (QA) studies</li>
                       <li>Clinical audits</li>
                    </ul>
                 </div>

                 {/* Submission Details */}
                 <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                            <Info className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-slate-800 text-lg">Submission Details</h4>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-600 list-disc list-outside ml-4">
                       <li>Participants may submit more than ONE abstract.</li>
                       <li>Abstracts must be in <strong>ENGLISH</strong>.</li>
                       <li>
                          <strong>NMRR ID Requirement:</strong> All abstracts must include an NMRR ID (or equivalent ethical approval ID for non-MOH studies). This is compulsory.
                       </li>
                    </ul>
                 </div>
            </div>
        </div>

        {/* Formatting Rules Section */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden mb-8">
           <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-6 flex justify-between items-center text-white">
              <h2 className="text-xl font-bold flex items-center gap-2">
                 <Type className="w-6 h-6" />
                 Formatting Specifications
              </h2>
              <a 
                href={ABSTRACT_TEMPLATE_LINK}
                target="_blank"
                rel="noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all"
              >
                <FileDown className="w-4 h-4" />
                View Format Template
              </a>
           </div>
           
           <div className="p-8 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                   <AlignLeft className="w-5 h-5 text-pink-500" />
                   Text & Style
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                   <li className="flex gap-2">
                      <span className="text-pink-500 font-bold">•</span>
                      <span><strong>Word Limit:</strong> Maximum 500 words (including headings).</span>
                   </li>
                   <li className="flex gap-2">
                      <span className="text-pink-500 font-bold">•</span>
                      <span><strong>Font:</strong> Arial, Size 10.</span>
                   </li>
                   <li className="flex gap-2">
                      <span className="text-pink-500 font-bold">•</span>
                      <span><strong>Title:</strong> Bold and Title Case (e.g., "Mental Health Challenges"). Brief and clear.</span>
                   </li>
                   <li className="flex gap-2">
                      <span className="text-pink-500 font-bold">•</span>
                      <span><strong>Structure:</strong> Follow the structured format in the template.</span>
                   </li>
                   <li className="flex gap-2">
                      <span className="text-pink-500 font-bold">•</span>
                      <span><strong>Abbreviations:</strong> Define in parenthesis on first use.</span>
                   </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                   <AlertCircle className="w-5 h-5 text-pink-500" />
                   Restrictions & Authors
                </h3>
                <ul className="space-y-3 text-sm text-slate-600">
                   <li className="flex gap-2">
                      <span className="text-pink-500 font-bold">•</span>
                      <span><strong>Content:</strong> Do NOT include graphs, tables, figures, or references.</span>
                   </li>
                   <li className="flex gap-2">
                      <span className="text-pink-500 font-bold">•</span>
                      <span><strong>Submitter:</strong> Must be submitted by the <strong>PRESENTING AUTHOR</strong> only.</span>
                   </li>
                   <li className="flex gap-2">
                      <span className="text-pink-500 font-bold">•</span>
                      <span><strong>Author Names:</strong> Full names (no titles/degrees). List institutional affiliation, state, and country.</span>
                   </li>
                   <li className="flex gap-2">
                      <span className="text-pink-500 font-bold">•</span>
                      <span><strong>Contribution:</strong> Ensure all authors contributed significantly.</span>
                   </li>
                </ul>
              </div>
           </div>
        </div>

        {/* General Guidelines Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
           
           <div className="bg-slate-800 p-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                 <FileText className="w-6 h-6 text-lime-400" />
                 General Guidelines
              </h2>
           </div>

           <div className="p-8">
              
              {/* Highlighted Agreement Statement (UPDATED) */}
              <div className="bg-lime-50 border-l-4 border-lime-500 p-4 rounded-r-xl mb-8">
                 <p className="text-slate-700 text-sm font-medium italic leading-relaxed">
                    By submitting the abstract, you have agreed to the terms and conditions as set out below.
                 </p>
              </div>

              <div className="space-y-6">

                  {/* Publication Permission (MOVED HERE) */}
                  <div className="flex gap-4 items-start">
                     <div className="mt-1 bg-lime-100 p-2 rounded-lg text-lime-700">
                        <FileCheck className="w-5 h-5" />
                     </div>
                     <p className="text-slate-600 leading-relaxed text-sm">
                        By submitting an abstract, you grant us permission to publish it in print, electronic, and digital formats (including the PRC website) if it is accepted for oral or poster presentation.
                     </p>
                  </div>

                  {/* Originality */}
                  <div className="flex gap-4 items-start">
                     <div className="mt-1 bg-blue-100 p-2 rounded-lg text-blue-700">
                        <ShieldCheck className="w-5 h-5" />
                     </div>
                     <p className="text-slate-600 leading-relaxed text-sm">
                        Abstracts must be of <strong>original work</strong>. The author is responsible for the accuracy of the abstract content.
                     </p>
                  </div>

                  {/* Authorship */}
                  <div className="flex gap-4 items-start">
                     <div className="mt-1 bg-lime-100 p-2 rounded-lg text-lime-700">
                        <Users className="w-5 h-5" />
                     </div>
                     <p className="text-slate-600 leading-relaxed text-sm">
                        The corresponding author should ensure that all appropriate co-authors are included and that the submission has been approved by all authors.
                     </p>
                  </div>

                {/* Home town */}
                  <div className="flex gap-4 items-start">
                     <div className="mt-1 bg-lime-100 p-2 rounded-lg text-lime-700">
                        <Users className="w-5 h-5" />
                     </div>
                     <p className="text-slate-600 leading-relaxed text-sm">
                        At least one author must be based in Perak at the time of the study.
                     </p>
                  </div>
                
                  {/* Mandatory Registration (Pink Warning) */}
                  <div className="flex gap-4 items-start">
                     <div className="mt-1 bg-pink-100 p-2 rounded-lg text-pink-600">
                        <AlertCircle className="w-5 h-5" />
                     </div>
                     <p className="text-slate-600 text-sm leading-relaxed">
                        The presenting author <strong>MUST register</strong> for the conference and attend as a delegate. If none of the authors is registered for the conference, the abstract will be withdrawn. Authors must immediately notify the PRC secretariat if they are unable to present or if the presenting author changes.
                     </p>
                  </div>

                  {/* Conflict of Interest (Amber Warning) */}
                  <div className="flex gap-4 items-start">
                     <div className="mt-1 bg-amber-100 p-2 rounded-lg text-amber-600">
                        <AlertCircle className="w-5 h-5" />
                     </div>
                     <div>
                        <p className="text-slate-600 text-sm mb-1">
                           Commercial interests or associations that might pose a conflict of interest must be declared.
                        </p>
                        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 ml-1">
                           <li><strong>If accepted:</strong> Declaration must be made on the title slide (Oral) or at the bottom of the poster (Poster).</li>
                           <li>Poster presentations should include funding and other acknowledgments where applicable.</li>
                        </ul>
                     </div>
                  </div>

                  {/* Photography Permission */}
                  <div className="flex gap-4 items-start">
                     <div className="mt-1 bg-lime-100 p-2 rounded-lg text-lime-700">
                        <Camera className="w-5 h-5" />
                     </div>
                     <p className="text-slate-600 text-sm leading-relaxed">
                        You give us permission to photograph your oral or poster presentation at the conference, which may be used on the PRC website and/or CRC promotional material.
                     </p>
                  </div>

                  {/* Disclaimer */}
                  <div className="flex gap-4 items-start">
                     <div className="mt-1 bg-slate-100 p-2 rounded-lg text-slate-600">
                        <Gavel className="w-5 h-5" />
                     </div>
                     <p className="text-slate-600 text-sm">
                        The Scientific Committee reserves the right to decide on the acceptance of abstracts for either oral or poster presentation. <strong>Any appeal will not be entertained.</strong>
                     </p>
                  </div>

              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default AbstractSubmission;
