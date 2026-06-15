// ============================================================
// DIGITAL RESUME - Tiana Le
// ============================================================

import {
  CheckIcon,
  LinkedInIcon,
  GitHubIcon,
} from "@/components/Icons";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-sm">
                TL
              </div>
              <span className="text-xl font-bold tracking-tight font-display text-slate-900 dark:text-white">
                Tiana Le
              </span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Home</a>
            <a href="#experience" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#skills" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#education" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Education</a>
            <a href="/ai-portfolio" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">AI Portfolio</a>
            <a href="mailto:tianale9@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* HERO - Professional Summary */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-grow">
                <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-2">
                  Tiana Le
                </h1>
                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-4">
                  AI Enablement Specialist
                </p>

                {/* Quick info */}
                <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    San Jose, CA
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    tianale9@gmail.com
                  </div>
                </div>

                {/* Professional Summary */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Analyst with experience supporting complex, customer-facing organizations in higher education and large enterprise environments. Proven ability to collect, analyze, and report operational and performance data to support leadership decision-making. Experienced in cross-functional coordination, administrative and technical support, and process improvement, with a strong background in data analysis, reporting, and systems navigation. Adept at communicating findings clearly to technical and non-technical stakeholders while maintaining compliance with organizational policies and performance standards.
                </p>

                {/* Social links */}
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/in/tiana-le-a9b0951b1/" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                    <LinkedInIcon className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a href="https://github.com/tiana408" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                    <GitHubIcon className="w-5 h-5" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Impact & Experience
            </h2>

            <div className="space-y-8">
              {/* Ed.D. Program Analyst */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Ed.D. Program Analyst</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">San Jose State University, San Jose, CA | 02/2025 - Current</p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Independently administer all operations of a 120-student doctoral program; Managing faculty appointments, course scheduling, budget, and compliance across multiple departments with minimal supervision.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Serve as the primary point of contact and liaison between faculty, students, and institutional offices; translate complex university and CSU policies into clear, actionable guidance for non-technical stakeholders.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Develop and maintain administrative systems and tracking tools to support program efficiency; identify process gaps and recommend solutions to the Director.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Produce financial reports, budget analyses, and program documentation for leadership; maintain accuracy across all program systems and records.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Supervise 2 student assistants; Assigning tasks, reviewing deliverables, and ensuring quality of output.</span>
                  </li>
                </ul>
              </div>

              {/* AI Workflow Engineer & Technical Coordinator */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">AI Workflow Engineer & Technical Coordinator</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Freelance, San Jose, CA | 02/2022 - 06/2024</p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Evaluated, tested, and built production workflows using open-source AI tools, including WarpFusion, ComfyUI, Automatic1111, AnimateDiff, and Stable Diffusion/SDXL, selecting the right tool for each client use case and documenting findings for the broader community in forums/discord.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Engineered end-to-end AI video generation pipelines running locally on a dedicated NVIDIA RTX A5000, troubleshooting CUDA installations, configuring Python environments, and optimizing workflows for consistent, client-ready output without cloud dependency.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Trained custom LoRA models for personalized image generation; iterated on datasets, training parameters, and prompt engineering to meet specific creative requirements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Independently evaluated each new tool before workflow implementation, running personal proof-of-concept tests, assessing usability, output quality, and performance trade-offs, and documenting findings in published technical blog posts for the open-source community.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Translated client creative briefs into AI-enabled outputs, iterating based on feedback until deliverables met professional standards; produced published music video credits for MIZMOR (Profound Lore Records, featured in Revolver Magazine), Frost Children, Look What I Did, Entheos and a short film.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Built and deployed GeoWatch, a live geopolitical news dashboard (React, TypeScript, Node.js, PostgreSQL) aggregating 19+ international RSS sources with automatic article classification, built on Replit using an AI-assisted development workflow.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Completed data collection and annotation work for a robotics company (NDA); Designed optimal recording environments, established reproducible data collection methodologies, and documented AI training procedures.</span>
                  </li>
                </ul>
              </div>

              {/* QA Analyst @ Google Search/Youtube */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">QA Analyst @ Google Search/Youtube</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Tech Mahindra, San Jose, CA | 02/2022 - 02/2023</p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Evaluated AI and human system outputs against policy guidelines for Google Search and YouTube, identifying edge cases, quality failures, and process gaps; developed structured test cases to improve reliability of human evaluation workflows.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Executed test environments across multiple locales using Google Colab and shell scripting; collaborated cross-functionally to analyze outcomes and drive resolution.</span>
                  </li>
                </ul>
              </div>

              {/* Sr. Business Analyst @ Google Maps */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Sr. Business Analyst @ Google Maps</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Tech Mahindra, San Jose, CA | 10/2019 - 02/2022</p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Implemented ML-based automation to classify and tag user-submitted reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Triaged and analyzed large-scale user-reported issues for Google Maps and Google Earth; produced trend analyses and actionable recommendations for engineering and product leadership.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Developed and maintained process documentation and training materials; served as subject matter expert on feedback workflows for cross-functional teams.</span>
                  </li>
                </ul>
              </div>

              {/* Executive Escalations @ Google */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Executive Escalations @ Google</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Milestone Technologies, San Jose, CA | 05/2019 - 10/2019</p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Managed high-priority cases escalated to Google executives — collaborating with Product Managers to identify process gaps and implement improvements across Google products.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Promoted from Tier III Hardware Support within three months based on performance, communication, and judgment.</span>
                  </li>
                </ul>
              </div>

              {/* Android Hardware Support Agent Tier III @ Google */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Android Hardware Support Agent Tier III @ Google</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Milestone Technologies, San Jose, CA | 03/2019 - 05/2019</p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Served as last line of technical support for Pixel, Nexus, Chrome OS, and Android devices; analyzed system logs, conducted interoperability testing, and created troubleshooting documentation.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Core Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Data Analysis & Business Intelligence</h3>
                <div className="flex flex-wrap gap-2">
                  {[ 'Data Collection', 'Analysis & Reporting', 'Performance Metrics', 'Trend Analysis', 'Dashboard & Report Development', 'Operational & CX Metrics', 'Process Analysis', 'Feedback Data Analysis', 'SQL', 'Python (Pandas, NumPy)', 'Tableau', 'Power BI', 'Excel', 'Statistical Analysis', 'ETL Processes' ].map((skill) => (
                    <span key={skill} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">AI Workflow & Operations</h3>
                <div className="flex flex-wrap gap-2">
                  {[ 'AI Tool Evaluation & Integration', 'Custom AI Model Training (LoRA)', 'AI Video Generation', 'Prompt Engineering', 'Robotics Data Collection', 'Quality Assurance', 'Workflow Optimization & Automation', 'Technical Documentation', 'Open-Source AI Tools (WarpFusion, ComfyUI, Automatic1111, AnimateDiff, Stable Diffusion/SDXL)', 'Solution Integration', 'Training & Communication', 'Change Management Support' ].map((skill) => (
                    <span key={skill} className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Education
            </h2>

            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Master of Business Administration (M.B.A.)</h3>
                    <p className="text-blue-600 dark:text-blue-400">Data Science & Business Administration | California Science & Technology University, Milpitas, CA</p>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 flex-shrink-0">Expected 2027</p>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Bachelor of Science (B.S.)</h3>
                    <p className="text-blue-600 dark:text-blue-400">Computer Systems and Engineering | California Science & Technology University, Milpitas, CA</p>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 flex-shrink-0">9/2023 - 08/2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Tiana Le. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}