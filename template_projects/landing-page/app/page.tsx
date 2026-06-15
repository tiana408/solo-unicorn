// ============================================================
// AGENTIC LANDING PAGE TEMPLATE - Career Focused
// ============================================================
// Customized for Tiana Le, AI Enablement Specialist.
// Designed to be concise and highlight career contributions.
// ============================================================

import { MobileNav } from "@/components/MobileNav";
import {
  CheckIcon,
  ArrowRightIcon,
  TrendingUpIcon,
  MailIcon,
  BeakerIcon,
  BriefcaseIcon,
  SparklesIcon,
  LinkedInIcon,
  GitHubIcon,
} from "@/components/Icons";

export default function Home() {
  return (
    <>
      {/* Skip link for accessibility - allows keyboard users to skip navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
        {/* ============================================================ */}
        {/* NAVIGATION - Fixed header with logo and nav links            */}
        {/* ============================================================ */}
        <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-sm">
                TL
              </div>
              <span className="text-xl font-bold tracking-tight font-display text-slate-900 dark:text-white">
                Tiana Le
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="/resume" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Resume
              </a>
              <a href="/ai-portfolio" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                AI Portfolio
              </a>
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </nav>

        {/* ============================================================ */}
        {/* HERO SECTION - Main headline and call to action              */}
        {/* ============================================================ */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          {/* Background gradient blurs */}
          <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-indigo-100/50 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-70 -translate-x-1/3 translate-y-1/4"></div>

          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              {/* Optional badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Seeking AI Enablement Roles
              </div>

              {/* Main headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-6">
                Hi, I&apos;m{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Tiana Le
                </span>
              </h1>

              {/* Title/Specialty */}
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 font-medium">
                AI Enablement Specialist
              </p>

              {/* Tagline */}
              <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Driving innovation through AI technology evaluation, workflow automation, and strategic process improvements for leading organizations.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/resume" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
                  View My Resume
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </a>
                <a href="/ai-portfolio" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition-all">
                  View AI Portfolio
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ABOUT/AUTHORITY SECTION - Credentials and trust signals      */}
        {/* ============================================================ */}
        <section id="about" className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section header */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                  My Value Proposition
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  I bridge the gap between complex AI technologies and practical business applications, delivering tangible results through strategic implementation, process optimization, and cross-functional collaboration.
                </p>
              </div>

              {/* Credentials */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <BeakerIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Education</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">M.B.A. Data Science & Business Admin, B.S. Computer Systems and Engineering</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                    <BriefcaseIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Experience</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">AI Innovation & Enablement Leader</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0">
                    <SparklesIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Recognition</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">AI Solution Development & Process Optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* MY AI PROJECTS & CONTRIBUTIONS                               */}
        {/* ============================================================ */}
        <section id="ai-projects" className="py-20 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section header */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                  My AI Projects & Contributions
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Showcasing key projects and technical contributions in AI enablement and data-driven solutions.
                </p>
              </div>

              {/* Link to full AI Portfolio */}
              <div className="text-center mb-12">
                <a href="/ai-portfolio" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-blue-200 dark:border-blue-700 rounded-xl transition-all">
                  View Full AI Portfolio
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </a>
              </div>

              {/* Simplified Case studies grid for overview */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project 1: GeoWatch Dashboard */}
                <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mb-6">
                    <TrendingUpIcon />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">GeoWatch Dashboard</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    Developed an AI-driven geopolitical news dashboard for real-time aggregation and automated article classification, enhancing information delivery.
                  </p>
                  <a href="/ai-portfolio#geowatch" className="text-blue-600 dark:text-blue-400 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>

                {/* Project 2: AI-Generated Media Workflows */}
                <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white mb-6">
                    <SparklesIcon />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">AI-Generated Media Workflows</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    Engineered end-to-end AI video generation pipelines and trained custom models for professional music video and short film productions.
                  </p>
                  <a href="/ai-portfolio#ai-video" className="text-blue-600 dark:text-blue-400 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>

                {/* Project 3: Robotics AI Training Data */}
                <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white mb-6">
                    <BriefcaseIcon />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Robotics AI Training Data</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    Designed and documented robust data collection methodologies and AI training procedures for a robotics company, improving data quality.
                  </p>
                  <a href="/ai-portfolio#robotics-ai" className="text-blue-600 dark:text-blue-400 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* CONTACT SECTION - How to reach you                           */}
        {/* ============================================================ */}
        <section id="contact" className="relative py-20 bg-white dark:bg-slate-900 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Connect with Me
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                I'm always open to discussing new opportunities and collaborations. Feel free to reach out!
              </p>

              {/* Contact options */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="mailto:tianale9@gmail.com"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-500/25"
                >
                  <MailIcon className="w-5 h-5 mr-2" />
                  tianale9@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/tiana-le-a9b0951b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition-all"
                >
                  View LinkedIn
                </a>
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/tiana-le-a9b0951b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://github.com/tiana408"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FOOTER - Copyright and additional links                      */}
        {/* ============================================================ */}
        <footer className="py-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-slate-600 dark:text-slate-400">
                © {new Date().getFullYear()} Tiana Le. All rights reserved.
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
