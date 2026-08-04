import React from 'react';
import { MessageSquareHeart, Award, ExternalLink, CheckCircle2, FileText } from 'lucide-react';

// Exact HRPB portal links added
const FEEDBACK_FORM_LINK = 'https://hrpb.moh.gov.my/ecert/q_answer.php?key=Njc5';
const CERTIFICATE_CLAIM_LINK = 'https://hrpb.moh.gov.my/ecert/muatturun_sijil.php';

const Registration: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Icon Badge */}
        <div className="w-20 h-20 mx-auto rounded-full bg-lime-100 flex items-center justify-center text-lime-600 mb-6 shadow-md">
          <Award className="w-10 h-10" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Feedback & E-Certificate
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Thank you for participating in the <span className="font-semibold text-slate-800">Perak Annual Medical Research Conference 2026</span>. Please complete the evaluation form below to claim your digital certificate of attendance.
        </p>

        {/* Two-Step Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
          
          {/* Step 1: Feedback Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col justify-between hover:border-pink-300 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-500 flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                1
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                <MessageSquareHeart className="w-6 h-6 text-pink-500" />
                Submit Feedback
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Your feedback helps us improve future conferences. Please take a few moments to evaluate the speakers, sessions, and overall organization.
              </p>
            </div>

            <a
              href={FEEDBACK_FORM_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="w-full py-3.5 px-6 bg-pink-500 text-white rounded-xl font-bold text-center shadow-lg shadow-pink-500/20 hover:bg-pink-600 transition-all flex items-center justify-center gap-2"
            >
              Fill Feedback Form <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Step 2: Claim Certificate */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col justify-between hover:border-lime-300 transition-all group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-lime-100 text-lime-700 flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-lime-500 group-hover:text-white transition-colors">
                2
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                <FileText className="w-6 h-6 text-lime-600" />
                Claim E-Certificate
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                After submitting your feedback, access the HRPB e-Cert portal below to search and download your official E-Certificate.
              </p>
            </div>

            <a
              href={CERTIFICATE_CLAIM_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="w-full py-3.5 px-6 bg-slate-900 text-white rounded-xl font-bold text-center shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              Download Certificate <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Note / Notice */}
        <div className="bg-lime-50 border border-lime-200 rounded-2xl p-6 text-slate-700 text-sm flex items-start gap-4 max-w-2xl mx-auto text-left">
          <CheckCircle2 className="w-6 h-6 text-lime-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-slate-800 mb-1">Important Notice:</p>
            <p>E-Certificates are strictly issued to registered participants who submit the evaluation form. For any technical inquiries or name corrections, please contact the CRC Secretariat team.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Registration;
