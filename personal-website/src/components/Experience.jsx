import React from 'react'

// Newest first. Facts mirror the résumé (public/Matthew-Farah-Resume.pdf); update both together.
const roles = [
  {
    title: 'Undergraduate Mathematics Researcher',
    org: 'McMaster University',
    dates: 'May 2026 - Present',
    tag: { Name: 'Research', Colour: 'bg-green-800' },
    bullets: [
      'Automated theorem proving research, supervised by Dr. Alicia Marinache',
      <>Built <a className='underline' href='https://github.com/ValueAchooMatthew/ProofGuard' target='_blank' rel='noopener noreferrer'>ProofGuard</a>, a checker for first-order logic proofs</>,
      'Placed 5th at ProoVer 2026, catching 40 of 47 broken proofs',
      'System description published in the competition proceedings',
    ],
  },
  {
    title: 'Software Engineer Co-op',
    org: 'AMD',
    dates: 'May 2026 - Present',
    tag: { Name: 'Co-op', Colour: 'bg-red-800' },
    bullets: [
      'Testing and test automation (Python, C++) for GPUs and APUs on Linux and Windows',
      'Driver and tooling development for the Navi32 GPU line',
      'Code promotion, plus reproducing and triaging defects with development teams',
    ],
  },
  {
    title: 'Teaching Assistant',
    org: 'McMaster University',
    dates: 'September 2025 - April 2026',
    tag: { Name: 'Teaching', Colour: 'bg-amber-600' },
    bullets: [
      'Led tutorials for 75+ students',
      'Made learning materials for MATLAB, systems analysis, and signal processing',
    ],
  },
  {
    title: 'Software Engineer Co-op',
    org: 'Scotiabank',
    dates: 'September 2024 - August 2025 (three team rotations)',
    tag: { Name: 'Co-op', Colour: 'bg-red-800' },
    bullets: [
      'Built Azure web apps for HR platforms (Java, SQL, React)',
      'Developed Apigee API gateway solutions and Java Spring endpoints',
      'Architected Spring Boot microservices, including money transfers for business clients',
    ],
  },
]

const schools = [
  {
    title: 'B.Eng Software Engineering, Minor in Mathematics',
    org: 'McMaster University',
    dates: 'September 2022 - April 2028',
    bullets: [
      'Co-op program',
      "Dean's Honour List (multiple terms)",
      'McMaster University Award of Excellence',
    ],
  },
  {
    title: 'Non-Degree Studies, Pure Mathematics',
    org: 'University of Toronto',
    dates: 'Summer 2026 - 2028 (expected)',
    bullets: [
      'Extra math courses alongside full-time work',
      'Abstract Algebra, Analysis III, and Number Theory',
    ],
  },
]

function Card({ title, org, dates, tag, bullets }) {
  return (
    <div className='bg-white rounded-t-2xl rounded-b-md shadow-2xl p-5 sm:p-6 text-left'>
      <div className='flex flex-wrap items-start justify-between gap-2'>
        <h4 className='text-xl sm:text-2xl font-semibold'>{title}</h4>
        {tag ? (
          <span className={`${tag.Colour} rounded-full px-2 py-1 text-white text-sm`}>{tag.Name}</span>
        ) : null}
      </div>
      <p className='font-semibold text-[#674832]'>{org}</p>
      <p className='text-sm italic text-gray-600'>{dates}</p>
      <ul className='mt-3 list-disc pl-5 space-y-1'>
        {bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
      </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <div className="bg-[#F0EAD2] text-center pb-16 sm:pb-20 pt-14 px-3 sm:px-6 rounded-t-3xl border-[#302721] border-2 border-b-0 scroll-mt-16" id = "Experience">
      <h2 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-semibold text-[#302721]">
        My Experience
      </h2>
      <p className="text-xl sm:text-2xl font-semibold text-[#302721]">(so far!)</p>

      <h3 className="text-3xl sm:text-4xl font-semibold italic mt-12 sm:mt-16 mb-8 sm:mb-12">
        Work and Research
      </h3>
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {roles.map((role) => <Card key={`${role.org}-${role.title}`} {...role} />)}
      </div>

      <h3 className="text-3xl sm:text-4xl font-semibold italic mt-12 sm:mt-16 mb-8 sm:mb-12">
        Education
      </h3>
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {schools.map((school) => <Card key={school.org} {...school} />)}
      </div>
    </div>
  )
}
