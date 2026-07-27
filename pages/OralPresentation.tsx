import React, { useState } from 'react';
import { FileText, Download, Award, Search } from 'lucide-react';

interface OralAbstract {
  id: string;
  abstractNo: string;
  title: string;
  authors: string[];
  category: string;
  fileUrl: string;
  summary: {
    objective: string;
    methods?: string;
    results?: string;
    conclusion?: string;
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
    category: 'Pharmacy & Digital Health',
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
    category: 'Infectious Disease & Antimicrobial Stewardship',
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
    category: 'Hematology & Transfusion Medicine',
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
    category: 'Surgery & Clinical Audit',
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
    category: 'Pediatrics & Patient Safety',
    fileUrl: '/abstracts/v2_026 KAP oral liquid parents SC Chiew.docx',
    summary: {
      objective: 'This study aimed to determine the extent of knowledge and practice of caretakers of paediatric patients on the use and storage of oral liquid medications.'
    }
  }
];

export const OralPresentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAbstract, setSelectedAbstract] = useState<string | null>(null);

  const filteredAbstracts = TOP_ORAL_ABSTRACTS.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.abstractNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.authors.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
          {filteredAbstracts.map((abstract) => {
            const isExpanded = selectedAbstract === abstract.id;
            return (
              <div 
                key={abstract.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition duration-200"
              >
                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-lime-500 text-white font-bold text-xs rounded-md uppercase tracking-wider">
                        {abstract.abstractNo}
                      </span>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                        {abstract.category}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                      {abstract.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium text-gray-700">Authors:</span> {abstract.authors.join(', ')}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedAbstract(isExpanded ? null : abstract.id)}
                      className="text-xs font-semibold text-lime-700 hover:text-lime-800 flex items-center gap-1 focus:outline-none"
                    >
                      {isExpanded ? 'Hide Details ▲' : 'Read Abstract Details ▼'}
                    </button>

                    <a
                      href={abstract.fileUrl}
                      download
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                    >
                      <Download className="w-3.5 h-3.5" /> Download Document
                    </a>
                  </div>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-100 bg-gray-50 rounded-lg p-4 space-y-3 text-sm text-gray-700 animate-fadeIn">
                      <div>
                        <strong className="text-gray-900 block font-semibold">Objective:</strong>
                        <p className="text-gray-600">{abstract.summary.objective}</p>
                      </div>
                      {abstract.summary.methods && (
                        <div>
                          <strong className="text-gray-900 block font-semibold">Methodology:</strong>
                          <p className="text-gray-600">{abstract.summary.methods}</p>
                        </div>
                      )}
                      {abstract.summary.results && (
                        <div>
                          <strong className="text-gray-900 block font-semibold">Results:</strong>
                          <p className="text-gray-600">{abstract.summary.results}</p>
                        </div>
                      )}
                      {abstract.summary.conclusion && (
                        <div>
                          <strong className="text-gray-900 block font-semibold">Conclusion:</strong>
                          <p className="text-gray-600">{abstract.summary.conclusion}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {filteredAbstracts.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
              <FileText className="w-10 h-10 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 font-medium">No abstracts found matching your search.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default OralPresentation;
