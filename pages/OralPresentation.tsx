import React, { useState, useEffect } from 'react';
import { FileText, Award, Search, X, BookOpen } from 'lucide-react';

interface OralAbstract {
  id: string;
  abstractNo: string;
  title: string;
  authors: string[];
  fileUrl: string;
  summary: {
    objective: string;
  };
}

const TOP_ORAL_ABSTRACTS: OralAbstract[] = [
  {
    id: '1',
    abstractNo: 'Abstract 003',
    title: 'Artificial Intelligence Adoption in Pharmacy Practice: Knowledge, Attitude and Practice of Malaysian Pharmacists',
    authors: [
      'Chee Tao Chang', 'Xin Jie Lim', 'Jason Choong Yin Lee', 'Chii Chi Chew', 
      'Yen Jun Wong', 'Huan Keat Chan', 'Chern Choong Thum', 'Kar Meng Yew', 
      'Shiau Hueh Yeow', 'Philip Rajan'
    ],
    fileUrl: '/abstracts/v2_003 OR KAP Pharmacist AI YEW KM.docx',
    summary: {
      objective: 'To assess the baseline knowledge, attitudes, and practices (KAP) of Malaysian pharmacists toward AI adoption in pharmacy practice and identify factors associated with these domains.'
    }
  },
  {
    id: '2',
    abstractNo: 'Abstract 006',
    title: 'A Multicentre Study on De-escalation of Empirical Meropenem Therapy and the Clinical Outcomes (DEMECO)',
    authors: [
      'Ling Siew Hong', 'Cheah Meng Fei', 'Yean Yi Lyn', 'Lim Kim Khee', 
      'Nurul Aqidah Adnan', 'Chiew Shoen Chuen'
    ],
    fileUrl: '/abstracts/V2_006~1.DOC',
    summary: {
      objective: 'This study evaluated the rate of meropenem de-escalation in Perak hospitals and examined treatment characteristics, multidrug-resistant organisms (MDROs), predictors of de-escalation and clinical outcomes.'
    }
  },
  {
    id: '3',
    abstractNo: 'Abstract 016',
    title: 'Prevalence, Sociodemographic Patterns, and Clinical Distribution of Probable Anti-Mia Red Blood Cell Antibodies: A Retrospective Multi-Center Study in Peninsular Malaysia',
    authors: [
      'Nur Hanisah HAMDAN', 'Pei Pei TAN', 'Sabariah MOHD NOOR', 'Nurul Izzati MOHD FOHAD', 
      'Salman MOHD SAHID', 'Nor Amiza MAT AMIN', 'Chii-Chii CHEW'
    ],
    fileUrl: '/abstracts/v2_016_RBC anti MIA.docx',
    summary: {
      objective: 'This study aimed to analyze the prevalence, sociodemographic characteristics, and clinical distribution of patients possessing probable Anti-Mia antibodies across four major tertiary referral hospitals in Peninsular Malaysia.'
    }
  },
  {
    id: '4',
    abstractNo: 'Abstract 023',
    title: 'Audit on Surgical Antibiotic Prophylaxis (SAP) Adherence in Surgical-based Departments in a Tertiary-Centred Hospital in Malaysia: Pre- and Post-Interventions',
    authors: [
      'Kwek Lih Ling', 'Ros Sakinah binti Kamaludin', 'Cheah Meng Fei', 
      'Ang Ju Ying', 'Ker Hong Bee', 'Marsilla Mariaty Marzukie'
    ],
    fileUrl: '/abstracts/v2_023_surgical antibiotcs prophylaxis audit.docx',
    summary: {
      objective: 'This study aimed to identify and improve SAP adherence across three surgical-based departments to optimize antibiotic use and enhance patient safety.'
    }
  },
  {
    id: '5',
    abstractNo: 'Abstract 026',
    title: 'Assessment of Knowledge and Practice of Caretakers of Paediatric Patients on the Use and Storage of Oral Liquid Medications: A Multi-Centre Study',
    authors: [
      'Nurul Nadia Binti Jaafar Sah', 'Siti Noradila Binti Samsudin', 
      'Nor Aimi Liyana Binti Othman', 'Najwa Izzati Binti Mohamed', 
      'Nor Zuraida Binti Abdul Wahab', 'Chiew Shoen Chuen'
    ],
    fileUrl: '/abstracts/v2_026 KAP oral liquid parents SC Chiew.docx',
    summary: {
      objective: 'This study aimed to determine the extent of knowledge and practice of caretakers of paediatric patients on the use and storage of oral liquid medications.'
    }
  }
];

export const OralPresentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAbstract, setSelectedAbstract] = useState<OralAbstract | null>(null);

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedAbstract(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredAbstracts = TOP_ORAL_ABSTRACTS.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.abstractNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.authors.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Helper to generate full public URL for viewer iframe
  const getFullDocViewerUrl = (fileUrl: string) => {
    const origin = window.location.origin;
    const fullFileUrl = `${origin}${encodeURIComponent(fileUrl)}`;
    return `https://docs.google.com/gview?url=${fullFileUrl}&embedded=true`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold">
            <Award className="w-4 h-4" /> Final Top 5 Selected
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Oral Presentation Abstracts
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Top 5 selected research abstract submissions for the Perak Annual Medical Research Conference 2026.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by abstract #, title, or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition"
          />
        </div>

        {/* Abstract List */}
        <div className="space-y-6">
          {filteredAbstracts.map((abstract) => (
            <div 
              key={abstract.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition duration-200"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                  <span className="px-3 py-1 bg-lime-500 text-white font-bold text-xs rounded-md uppercase tracking-wider">
                    {abstract.abstractNo}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                    {abstract.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-medium text-gray-700">Authors:</span> {abstract.authors.join(', ')}
                  </p>
                  <p className="text-xs text-gray-500 mt-2 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                    <span className="font-semibold text-gray-700">Objective: </span>
                    {abstract.summary.objective}
                  </p>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedAbstract(abstract)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-lime-600 hover:bg-lime-700 rounded-lg transition shadow-sm"
                  >
                    <BookOpen className="w-4 h-4" /> View Full Abstract Document
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredAbstracts.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
              <FileText className="w-10 h-10 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 font-medium">No abstracts found matching your search.</p>
            </div>
          )}
        </div>

      </div>

      {/* FULL DOCUMENT VIEWER MODAL */}
      {selectedAbstract && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedAbstract(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-4xl w-full h-[90vh] flex flex-col relative overflow-hidden animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100 bg-gray-50">
              <div className="pr-4">
                <span className="px-2.5 py-0.5 bg-lime-500 text-white font-bold text-xs rounded-md uppercase tracking-wider">
                  {selectedAbstract.abstractNo}
                </span>
                <h2 className="text-base sm:text-lg font-bold text-gray-900 mt-1 line-clamp-1">
                  {selectedAbstract.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedAbstract(null)}
                className="text-gray-400 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Document Viewer Frame */}
            <div className="flex-1 w-full bg-gray-100 relative">
              <iframe
                src={getFullDocViewerUrl(selectedAbstract.fileUrl)}
                className="w-full h-full border-0"
                title={`Full Abstract - ${selectedAbstract.abstractNo}`}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500 px-2">
                Viewing uploaded abstract document
              </span>
              <button
                onClick={() => setSelectedAbstract(null)}
                className="px-4 py-1.5 text-xs font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OralPresentation;
