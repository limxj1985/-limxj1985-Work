import React, { useState } from 'react';

interface AbstractItem {
  id: string;
  filename: string;
  title?: string;
  authors?: string;
  objective?: string;
}

// Complete list of your poster presentation abstracts
const posterList: AbstractItem[] = [
  { 
    id: '001', 
    filename: 'V2_001~1.DOC',
    title: 'Healthcare Worker Burnout as a Determinant of Patient Care Quality: A Systematic Review'
  },
  { 
    id: '002', 
    filename: 'v2_002 CR endometrial ca alyza yusof.docx',
    title: 'Metastatic Endometrial Cancer Presenting as Suspected Primary Lung Cancer: A Case Study'
  },
  { 
    id: '004', 
    filename: 'v2_004_OR vaccine hesitancy zatil.docx',
    title: 'CHARACTERISTICS OF VACCINE HESITANCY AMONG PARENTS IN HILIR PERAK DISTRICT (2016-2024)'
  },
  { 
    id: '005', 
    filename: 'v2_IVOS antibiotics switch - Wan.docx',
    title: 'Antibiotic Stewardship Practices in a District Hospital: A Retrospective Study of the IV-to-Oral Switch (IVOS) in Orthopaedic Patients'
  },
  { 
    id: '007', 
    filename: '007V2_~1.DOC',
    title: 'ASSESSING KNOWLEDGE OF PATIENT EDUCATION AND TREATMENT TOWARDS CLASSICAL SCABIES AMONG HEALTHCARE WORKERS IN KINTA DISTRICT'
  },
  { 
    id: '008', 
    filename: '008 v2 Revised (030626) Abstract PRC tan hoo seng.docx',
    title: 'Budget Impact Analysis of Ferric Derisomaltose for Heart Failure in a Rapidly Aging Regional Population'
  },
  { 
    id: '009', 
    filename: 'v2 Abstract PRC Jia Sheng Lee revised 009.docx',
    title: 'Real-World Clinical and Economic Impact of Oral Antidiabetic Drug Optimization for Insulin De-intensification in Type 2 Diabetes: A Retrospective Cohort Study in Malaysian Public Hospital'
  },
  { 
    id: '011', 
    filename: 'v2Abstract PRC KAP MTS 011.docx',
    title: 'A cross-sectional Study of Assessing Knowledge, Attitude, and Practice of 5-Level Malaysian Triage Scale 2022 among Emergency Health Care Workers in Malaysia'
  },
  { 
    id: '012', 
    filename: 'v2_abstract ravac (Alyza y).docx',
    title: 'Screening Outcomes and Referral Rates of Refractive Error Among Standard One Primary School Children in Hilir Perak Using the Rapid Assessment Visual Acuity Chart (RAVAC)'
  },
  { 
    id: '014', 
    filename: 'v2_014_abstract_Ng Chin Hui.docx',
    title: 'Economic Feasibility of Transitioning from Manual to Automated Dispensing Systems (ADS) in a Malaysian State Hospital: A 10-Year Cost-Simulation Analysis'
  },
  { 
    id: '015', 
    filename: 'v2_Abstract 015 PPI Ng Chin Hui.docx',
    title: 'Clinical Audit on Proton Pump Inhibitor (PPI) Therapy: Evaluation of Prescribing Trends and Appropriateness of Use in Adults at Hospital Raja Permaisuri Bainun (HRPB), Ipoh.'
  },
  { 
    id: '017', 
    filename: 'V2017K~1.DOC',
    title: 'A Study on the Knowledge and Perception of Molar Incisor Hypomineralisation Among Dental Officers in Perak'
  },
  { 
    id: '018', 
    filename: 'V2_018~1.DOC',
    title: 'Decoding a Giant Cell-Rich Lesion of the Posterior Mandible: The Role of Clinicopathological Correlation'
  },
  { 
    id: '019', 
    filename: '019 v2_abstract crc ipoh.docx_ editted.docx',
    title: 'EFFECTIVENESS OF AQUATIC LAND EXERCISE ON PHYSICAL PERFORMANCE AND PSYCHO-SOCIAL FACTORS AMONG INDIVIDUALS WITH KNEE OSTEOARTHRITIS'
  },
  { 
    id: '020', 
    filename: 'ABSTRA~1.DOC',
    title: 'A Pilot Study on the Effect of Educational Intervention on Nurses’ Knowledge towards Insulin Therapy for Diabetes Mellitus'
  },
  { 
    id: '021', 
    filename: 'V2_021~1.DOC',
    title: 'Physicochemical, Antioxidant, and Sensory Profiling of Commercial Immunonutritional Milk Supplements'
  },
  { 
    id: '022', 
    filename: 'v2_022_accupuncture hypertensio_Kan Kar Yiu.docx',
    title: 'Acupuncture visits Frequency and Its Associations with quality of life, and cardiovascular parameters among hypertension outpatients: A Cross-sectional study'
  },
  { 
    id: '024', 
    filename: 'v2_024 Endoscoping Aspergillus Yvonn.docx',
    title: 'Nature’s Endoscopic Surgery: A Case Report of Extensive Multi-Sinus Osteolysis Caused by an Aspergillus niger Fungal Ball'
  },
  { 
    id: '025', 
    filename: 'v2_025_Breastfeeding practices and maternal health outcomes.docx',
    title: 'Associations Between Breastfeeding Practices, Nutritional Intake Adequacy, Blood Pressure and Body Mass Index in Postpartum Mothers'
  },
  { 
    id: '027', 
    filename: '027_v2_SANTHYA ABSTRACT CRC.docx',
    title: 'Comparative Effectiveness of Group-Based versus Individual Exercise on Pain and Psychosocial Outcomes in Post-Traumatic Knee Osteoarthritis: A Randomized Controlled Trial'
  },
  { id: '028', filename: 'v2_028Abstract 28_Santibuana_revised.docx' },
  { id: '029', filename: '029AZI~1.DOC' },
  { id: '030', filename: '030 Swiss ball Puvanes Physio Taiping.docx' },
  { id: '031', filename: '031V2_~1.DOC' }
];

export const PosterPresentation: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter abstracts by ID, title, or filename
  const filteredAbstracts = posterList.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      item.id.toLowerCase().includes(term) ||
      item.filename.toLowerCase().includes(term) ||
      (item.title && item.title.toLowerCase().includes(term))
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Search Bar */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by abstract #, title, or filename..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Abstract List */}
        <div className="space-y-6">
          {filteredAbstracts.length > 0 ? (
            filteredAbstracts.map((abstract) => {
              const filePath = `/abstracts/${encodeURIComponent(abstract.filename)}`;

              return (
                <div
                  key={abstract.id}
                  className="bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow"
                >
                  {/* Badge */}
                  <div className="mb-4">
                    <span className="inline-block bg-[#78A800] text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                      ABSTRACT {abstract.id}
                    </span>
                  </div>

                  {/* Title / Filename */}
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug mb-3">
                    {abstract.title || abstract.filename}
                  </h2>

                  {/* Optional Authors Section if defined */}
                  {abstract.authors && (
                    <p className="text-sm text-gray-700 mb-4">
                      <span className="font-bold text-gray-800">Authors: </span>
                      <span className="text-gray-600">{abstract.authors}</span>
                    </p>
                  )}

                  {/* Optional Objective Box if defined */}
                  {abstract.objective && (
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 mb-6 text-sm text-gray-600 leading-relaxed">
                      <span className="font-semibold text-gray-700">Objective: </span>
                      {abstract.objective}
                    </div>
                  )}

                  {/* Download / View Button */}
                  <div className="flex justify-end mt-4">
                    <a
                      href={filePath}
                      download
                      className="inline-flex items-center gap-2 bg-[#6B9E00] hover:bg-[#5a8600] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors shadow-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      View Full Abstract Document
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200 text-gray-500">
              No abstracts found matching your search.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default PosterPresentation;
