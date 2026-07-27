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
    methods: string;
    results: string;
    conclusion: string;
  };
}

const TOP_ORAL_ABSTRACTS: OralAbstract[] = [
  {
    id: '1',
    abstractNo: 'Abstract 003',
    title: 'Artificial Intelligence Adoption in Pharmacy Practice: Knowledge, Attitude and Practice of Malaysian Pharmacists',
    authors: ['Yew K. M.', 'Pharmacy Research Team'],
    category: 'Pharmacy & Digital Health',
    fileUrl: '/abstracts/v2_003 OR KAP Pharmacist AI YEW KM.docx',
    summary: {
      objective: 'To evaluate the Knowledge, Attitude, and Practice (KAP) regarding Artificial Intelligence (AI) adoption among Malaysian pharmacists.',
      methods: 'A cross-sectional study conducted using a validated structured questionnaire distributed to clinical and hospital pharmacists.',
      results: 'Assessed baseline readiness, perceived clinical utility, and educational gaps in implementing AI tools in hospital pharmacy practice.',
      conclusion: 'Recommends targeted AI literacy training modules to foster safe and effective digital adoption in pharmacy practice.'
    }
  },
  {
    id: '2',
    abstractNo: 'Abstract 006',
    title: 'Impact of Meropenem De-escalation Protocol in Intensive Care Units',
    authors: ['Antimicrobial Stewardship Team'],
    category: 'Infectious Disease & Antimicrobial Stewardship',
    fileUrl: '/abstracts/V2_006~1.DOC',
    summary: {
      objective: 'To evaluate clinical outcomes and duration of therapy following Meropenem de-escalation in ICU settings.',
      methods: 'A retrospective study analyzing ICU patient records undergoing broad-spectrum carbapenem therapy.',
      results: 'Timely de-escalation significantly reduced carbapenem treatment duration without compromising 30-day clinical success.',
      conclusion: 'Structured antimicrobial stewardship de-escalation protocols effectively optimize carbapenem utilization in critical care.'
    }
  },
  {
    id: '3',
    abstractNo: 'Abstract 016',
    title: 'Prevalence and Specificity of Unexpected Red Blood Cell Antibodies in Transfused Patients',
    authors: ['Blood Bank & Transfusion Team'],
    category: 'Hematology & Transfusion Medicine',
    fileUrl: '/abstracts/v2_016_RBC anti MIA.docx',
    summary: {
      objective: 'To determine the incidence and specificity of red blood cell (RBC) alloantibodies (including Anti-Mi(a)) among transfused patients.',
      methods: 'Cross-sectional study utilizing standard antibody screening and identification panels during pre-transfusion testing.',
      results: 'Identified major alloantibody patterns dominated by Rh system antibodies (Anti-E) and anti-Mi(a).',
      conclusion: 'Emphasizes extended blood antigen matching prior to transfusion to mitigate alloimmunization risks in high-risk patients.'
    }
  },
  {
    id: '4',
    abstractNo: 'Abstract 023',
    title: 'Audit on Surgical Antibiotic Prophylaxis (SAP) Adherence in Surgical-based Departments in a Tertiary-Centred Hospital in Malaysia: Pre- and Post-Interventions',
    authors: ['Surgical Audit Team'],
    category: 'Surgery & Clinical Audit',
    fileUrl: '/abstracts/v2_023_surgical antibiotcs prophylaxis audit.docx',
    summary: {
      objective: 'To evaluate adherence to Surgical Antibiotic Prophylaxis (SAP) guidelines across surgical-based departments before and after targeted interventions.',
      methods: 'A pre- and post-intervention clinical audit assessing SAP indication, timing of administration, drug choice, and duration of prophylaxis.',
      results: 'Demonstrated significant improvements in protocol compliance, particularly regarding timely preoperative administration and optimal duration.',
      conclusion: 'Targeted clinical interventions and feedback routines substantially enhanced SAP adherence, promoting better antimicrobial stewardship.'
    }
  },
  {
    id: '5',
    abstractNo: 'Abstract 026',
    title: 'Knowledge, Attitude, and Practice (KAP) of Parents Regarding Oral Liquid Medication Administration',
    authors: ['SC Chiew', 'Pediatric Pharmacy Team'],
    category: 'Pediatrics & Patient Safety',
    fileUrl: '/abstracts/v2_026 KAP oral liquid parents SC Chiew.docx',
    summary: {
      objective: 'To evaluate parental dosing accuracy, knowledge, and practice regarding pediatric oral liquid medications.',
      methods: 'Questionnaire survey combined with a practical measurement demonstration among pediatric outpatient caregivers.',
      results: 'Revealed common dosing measurement errors linked to kitchen spoon use vs. standard oral syringes.',
      conclusion: 'Recommends mandatory oral syringe distribution and visual counseling aids at pediatric outpatient dispensaries.'
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
                      <div>
                        <strong className="text-gray-900 block font-semibold">Methodology:</strong>
                        <p className="text-gray-600">{abstract.summary.methods}</p>
                      </div>
                      <div>
                        <strong className="text-gray-900 block font-semibold">Results:</strong>
                        <p className="text-gray-600">{abstract.summary.results}</p>
                      </div>
                      <div>
                        <strong className="text-gray-900 block font-semibold">Conclusion:</strong>
                        <p className="text-gray-600">{abstract.summary.conclusion}</p>
                      </div>
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
