// ============================================================
// AI PROJECTS & PORTFOLIO - Tiana Le
// ============================================================

import {
  CheckIcon,
  LinkedInIcon,
  GitHubIcon,
} from "@/components/Icons";

export default function AIPortfolioPage() {
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
            <a href="/resume" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Resume</a>
            <a href="/ai-portfolio" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">AI Portfolio</a>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* HERO - Contact Info */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-2">
              Tiana Le | AI Projects & Portfolio
            </h1>
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
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.071 1.14c-.754.412-.92 1.625-.133 2.387l.83 1.091c.677.897 1.607 1.487 2.76 1.737C14.735 18.064 16.29 17.53 17 17l.83-.83c.777-.778 1.99-.613 2.387.133l1.14 2.071a1 1 0 011.21.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>
                669-318-9928
              </div>
            </div>
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
      </section>

      {/* LIVE PROJECTS */}
      <section id="live-projects" className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Live Projects
            </h2>

            <div className="space-y-8">
              {/* GeoWatch Dashboard */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">GeoWatch — Real-Time Geopolitical News Dashboard</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3"><a href="https://github.com/tiana408/geowatch" target="_blank" rel="noopener noreferrer">github.com/tiana408/geowatch</a></p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Built and deployed a live geopolitical news intelligence dashboard aggregating 19+ international RSS sources (BBC, Al Jazeera, Reuters, Bloomberg, Financial Times, CGTN, and more). Articles are automatically classified by region, category, and impact level.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Features include cross-source deduplication, trending topics linked to live X conversations, search and filtering, auto-refresh every 30 minutes, and a dark/light theme.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Stack: React + TypeScript · Node.js + Express · PostgreSQL · Drizzle ORM · Tailwind CSS · Shadcn UI · Replit | Built with AI-assisted development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PUBLISHED AI VIDEO WORK */}
      <section id="ai-video-work" className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Published AI Video Work
            </h2>

            <div className="space-y-8">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Worked as an AI video artist on professional music video and short film productions using open-source generative tools — running entirely on local hardware (NVIDIA RTX A5000). Practiced by making fan art, developed paid client work, and was featured in Revolver Magazine.
              </p>
              {/* MIZMOR */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">MIZMOR — "No Place To Arrive"</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3"><a href="https://www.youtube.com/watch?v=-TH57EBpDDg" target="_blank" rel="noopener noreferrer">youtube.com/watch?v=-TH57EBpDDg</a></p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Featured in Revolver Magazine. AI video team alongside director Zev Deans (Ghost, Mastodon, Gojira).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Merged AI-generated Stable Diffusion imagery inspired by the paintings of Zdzislaw Beksinski with live-action footage. Published on Profound Lore Records.</span>
                  </li>
                </ul>
              </div>
              {/* Entheos */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Entheos — Music Video</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3"><a href="https://www.youtube.com/watch?v=sVjkG4JIxYk" target="_blank" rel="noopener noreferrer">youtube.com/watch?v=sVjkG4JIxYk</a></p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>AI video generation and editing for metal/progressive artist.</span>
                  </li>
                </ul>
              </div>
              {/* Look What I Did */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Look What I Did — "Jekyll Island Fiat Scratch"</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3"><a href="https://www.youtube.com/watch?v=Hg2IiPNT30" target="_blank" rel="noopener noreferrer">youtube.com/watch?v=Hg2IiPNT30</a></p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>AI video generation for indie rock artist.</span>
                  </li>
                </ul>
              </div>
              {/* Frost Children */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Frost Children — "HI 5"</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3"><a href="https://www.youtube.com/watch?v=3aIIIeDAECo" target="_blank" rel="noopener noreferrer">youtube.com/watch?v=3aIIIeDAECo</a></p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>AI-assisted video work for electronic/pop artist.</span>
                  </li>
                </ul>
              </div>
              {/* Gromo */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Gromo — "Prologue/The Vortex" (Short Film)</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3"><a href="https://www.youtube.com/watch?v=FgXyrtslrlM" target="_blank" rel="noopener noreferrer">youtube.com/watch?v=FgXyrtslrlM</a></p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>AI visual effects and video generation for short film production.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL RESEARCH & DOCUMENTATION */}
      <section id="technical-research" className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.206 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.523 5.794 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.794 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.523 18.206 18 16.5 18s-3.332-.477-4.5-1.253" />
              </svg>
              Technical Research & Documentation
            </h2>

            <div className="space-y-8">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Self-published technical evaluations and guides documenting hands-on experimentation with open-source AI tools — written for the broader AI art community.
              </p>
              {/* AnimateDiff */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">AnimateDiff: A Personal Evaluation</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3"><a href="https://gmo777.blogspot.com/2024/05/animatediff-personal-evaluation.html" target="_blank" rel="noopener noreferrer">gmo777.blogspot.com/2024/05/animatediff-personal-evaluation.html</a></p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Evaluated AnimateDiff integrated with ComfyUI and WarpFusion for smooth AI video generation. Documented methodology, setup complexity, performance benchmarks, and best practices. Used for a client music video project targeting Pika Labs-quality output.</span>
                  </li>
                </ul>
              </div>
              {/* Custom LoRA */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Development of a Custom LoRA: Personalized AI-Generated Imagery</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3"><a href="https://gmo777.blogspot.com/2024/05/october-29th-2023development-of.html" target="_blank" rel="noopener noreferrer">gmo777.blogspot.com/2024/05/october-29th-2023development-of.html</a></p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Deep dive into training a custom LoRA model for personalized image generation. Covered dataset preparation, training parameters, and iterative refinement. Also trained a personal LoRA model of myself for testing and experimentation.</span>
                  </li>
                </ul>
              </div>
              {/* AI Image Generation Guide */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">AI Image Generation: Step-by-Step Guide</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3"><a href="https://gmo777.blogspot.com/2024/05/use-case-ai-image-generation.html" target="_blank" rel="noopener noreferrer">gmo777.blogspot.com/2024/05/use-case-ai-image-generation.html</a></p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Practical overview of AI image generation workflows for new users, documenting the tools, parameters, and prompt engineering techniques developed through client work.</span>
                  </li>
                </ul>
              </div>
              {/* Testing SDXL */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Testing SDXL</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3"><a href="https://gmo777.blogspot.com/2024/05/entheos-interior-wilderness-drumcorps.html" target="_blank" rel="noopener noreferrer">gmo777.blogspot.com/2024/05/entheos-interior-wilderness-drumcorps.html</a></p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Evaluation of Stable Diffusion XL capabilities and limitations for music video production use cases.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HARDWARE & TOOLS */}
      <section id="hardware-tools" className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Hardware & Tools
            </h2>

            <div className="space-y-8">
              {/* Local Hardware Setup */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Local Hardware Setup</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  Ran all AI video and image generation locally on personal hardware — no cloud dependency. Invested in a dedicated GPU to handle generation workloads that exceeded Google Colab's free tier limitations.
                </p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>GPU: NVIDIA RTX A5000 (24GB VRAM)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>CPU: Intel Core i5-7500 @ 3.40GHz</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>RAM: 16GB</span>
                  </li>
                </ul>
              </div>

              {/* Open Source Tools & Platforms */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Open Source Tools & Platforms</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>**WarpFusion:** Video-to-video AI generation. Used for all client music video work. Disco Diffusion-based, supports ControlNets, LoRAs, and SDXL. Ran in Google Colab and locally.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>**ComfyUI:** Node-based Stable Diffusion interface. Used for AnimateDiff video generation and custom workflow engineering.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>**Automatic1111 (A1111):** Primary Stable Diffusion WebUI for image generation, fine-tuning, and LoRA training.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>**Stable Diffusion / SDXL:** Core image generation model. Fine-tuned and tested across multiple versions for client projects.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>**AnimateDiff:** Video animation extension for ComfyUI. Evaluated and documented for smooth video clip generation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>**Civitai.com:** Community model and LoRA repository. Used for sourcing and sharing models.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>**Topaz Video AI:** Post-processing and upscaling of AI-generated video content.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>**Adobe Premiere Pro & After Effects:** Video editing and compositing AI-generated content with live footage.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>**Replit:** Cloud development platform used to build and deploy GeoWatch.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>**Google Colab / Jupyter Notebooks:** Python environment for AI experimentation, data analysis, and early WarpFusion runs.</span>
                  </li>
                </ul>
              </div>

              {/* ADDITIONAL AI WORK */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Additional AI Work</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  Completed freelance data collection and annotation work for a robotics company (NDA). Responsibilities included designing optimal recording environments to maximize training data quality, establishing reproducible data collection methodologies, and documenting procedures for AI model training pipelines.
                </p>
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
