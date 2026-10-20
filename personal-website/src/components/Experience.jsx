import React from 'react'

// Newest first. Facts mirror the résumé (public/Matthew-Farah-Resume.pdf); update both together.
const roles = [
  {
    title: 'Undergraduate Mathematics Researcher',
    org: 'McMaster University',
    dates: 'May 2026 - Present',
    tag: { Name: 'Research', Colour: 'bg-green-800' },
    summary: <>Supervised research on automated theorem proving with Dr. Alicia Marinache. I built <a className='underline' href='https://github.com/ValueAchooMatthew/ATP-Research-Project' target='_blank' rel='noopener noreferrer'>ProofGuard</a>, a checker for first-order logic proofs, which placed 5th by performance at ProoVer 2026 (held at FLoC 2026 in Lisbon). It classified 70 of the 91 competition proofs correctly, including 40 of the 47 deliberately broken ones, and its system description is published in the competition proceedings.</>,
  },
  {
    title: 'Software Engineer Co-op',
    org: 'AMD',
    dates: 'May 2026 - Present',
    tag: { Name: 'Co-op', Colour: 'bg-red-800' },
    summary: 'Software QA for GPU and APU products on Linux and Windows: functional, regression, performance, and reliability test plans, Python and C++ test automation, and reproducing and triaging defects with the development teams. I have also experimented with internal AI-assistant plugins.',
  },
  {
    title: 'Teaching Assistant',
    org: 'McMaster University',
    dates: 'September 2025 - April 2026',
    tag: { Name: 'Teaching', Colour: 'bg-amber-600' },
    summary: 'Led tutorials and made learning materials for 75+ students in MATLAB, systems analysis, and signal processing.',
  },
  {
    title: 'Software Engineer Co-op',
    org: 'Scotiabank',
    dates: 'September 2024 - August 2025',
    tag: { Name: 'Co-op', Colour: 'bg-red-800' },
    summary: 'Twelve months across three teams: Azure web applications for HR platforms in Java, SQL, and React; Apigee API gateway solutions and Java Spring endpoints; and Spring Boot microservices for wealth management, including money transfers for large business customers.',
  },
]

const schools = [
  {
    title: 'B.Eng Software Engineering, Minor in Mathematics',
    org: 'McMaster University',
    dates: 'September 2022 - April 2028',
    summary: "Co-op program. Dean's Honour List (multiple terms) and the McMaster University Award of Excellence.",
  },
  {
    title: 'Non-Degree Studies, Pure Mathematics',
    org: 'University of Toronto',
    dates: 'Summer 2026 - 2028 (expected)',
    summary: 'Extra math courses alongside full-time work: Abstract Algebra, Analysis III, and Number Theory.',
  },
]

function Card({ title, org, dates, tag, summary }) {
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
      <p className='mt-3'>{summary}</p>
    </div>
  )
}

export default function Experience() {
  return (
    <div className="bg-[#F0EAD2] text-center pb-16 sm:pb-20 pt-14 px-3 sm:px-6 rounded-t-3xl border-[#302721] border-2 border-b-0 scroll-mt-16" id = "Experience">
      <h2 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-semibold text-[#302721]">
        My experience
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
