import React from 'react';
import { ABSTRACT_DEADLINE } from '../constants';
import { Clock, Trophy, Award, Mail, FileText, CheckCircle, Quote, AlertCircle, FileCheck, ShieldCheck, Users, Camera, Gavel } from 'lucide-react';

const OralPresentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Oral Presentation Guidelines</h1>
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

            {/* Important Reminder Section - UPDATED */}
            <div className="bg-amber-50 border border-amber-100 p-6 rounded-xl flex items-start gap-4 shadow-sm">
                <div className="p-2 bg-amber-100 rounded-full text-amber-600 shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-amber-900 font-bold mb-1">Important Reminder</h3>
                  <p className="text-amber-800 text-sm leading-relaxed">
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

              {/* General Guidelines (Standardized) */}
              <section>
                 <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-lime-600" />
                    General Guidelines
                 </h2>
                 
                 <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    
                    {/* The Highlighted Agreement Statement */}
                    <div className="bg-lime-50 border-l-4 border-lime-500 p-4 rounded-r-xl mb-8">
                       <p className="text-slate-700 text-sm font-medium italic leading-relaxed">
                          By submitting the oral presentation, you have agreed to the terms and conditions as set out below.
                       </p>
                    </div>

                    {/* Standardized List Items */}
                    <div className="space-y-6">
                       
                       {/* Permission */}
                       <div className="flex gap-4 items-start">
                          <div className="mt-1 bg-lime-100 p-2 rounded-lg text-lime-700">
                             <FileCheck className="w-5 h-5" />
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed">
