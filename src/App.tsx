import { DATA } from './data';
import { MouseGlow } from './components/MouseGlow';
import { Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TelegramIcon } from './components/Icons';

export default function App() {
  return (
      <div className="relative font-sans selection:bg-teal selection:text-navy">
        <MouseGlow />

        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">

            {/* LEFT COLUMN: Header & Nav */}
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  <a href="/">{DATA.name}</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-white sm:text-xl">
                  {DATA.role}
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-slate">
                  I build secure, pixel-perfect, and AI-powered web and mobile experiences.
                </p>
                <p className="mt-4 max-w-xs text-xs font-medium text-slate/80 uppercase tracking-wide">
                  Full work authorization in the Czech Republic
                </p>

                {/* КНОПКА СКАЧАТЬ РЕЗЮМЕ */}
                <div className="mt-6">
                  <a
                      href="/VladyslavKholod_Frontend_CV.pdf" // Путь к файлу в папке public
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-teal/50 px-4 py-2 text-sm font-semibold text-teal transition-all hover:bg-teal/10 hover:border-teal focus-visible:bg-teal/10 outline-none"
                  >
                    <FileText size={18} />
                    <span>View Full Resume (PDF)</span>
                  </a>
                </div>

                {/* LANGUAGES: Добавили сюда */}
                <div className="mt-8">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-2">Languages</h3>
                  <ul className="text-sm text-slate space-y-1">
                    {DATA.languages.map(lang => (
                        <li key={lang}>{lang}</li>
                    ))}
                  </ul>
                </div>

                <nav className="nav hidden lg:block mt-16">
                  <ul className="w-max">
                    {/* Добавили EDUCATION в навигацию */}
                    {['ABOUT', 'EXPERIENCE', 'PROJECTS', 'EDUCATION'].map((item) => (
                        <li key={item}>
                          <a className="group flex items-center py-3" href={`#${item.toLowerCase()}`}>
                            <span className="mr-4 h-px w-8 bg-slate transition-all group-hover:w-16 group-hover:bg-white"></span>
                            <span className="text-xs font-bold uppercase tracking-widest text-slate group-hover:text-white">
                          {item}
                        </span>
                          </a>
                        </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <ul className="ml-1 mt-8 flex items-center gap-5">
                <li><a href="https://github.com/Kholod13" className="text-slate hover:text-white"><GithubIcon size={24} /></a></li>
                <li><a href="https://linkedin.com/in/vladyslav-kholod-86647120a/" className="text-slate hover:text-white"><LinkedinIcon size={24}/></a></li>
                <li><a href="https://t.me/kah13x" className="text-slate hover:text-white"><TelegramIcon size={24}/></a></li>
                <li><a href="mailto:vlad13holod@gmail.com" className="text-slate hover:text-white"><Mail size={24}/></a></li>
              </ul>
            </header>

            {/* RIGHT COLUMN: Content sections */}
            <main className="pt-24 lg:w-1/2 lg:py-24">
              <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">About</h2>
                </div>
                <p className="mb-4 text-slate leading-relaxed">
                  {DATA.summary}
                </p>
                <p className="text-slate leading-relaxed">
                  Currently, I am based in <span className="text-white">Prague, Czech Republic</span>, working as a Frontend Developer at <span className="text-white">QRI Tech</span>. I am fluent in Czech (B2) and always looking for complex architectural challenges.
                </p>
              </section>

              {/* Experience Section */}
              <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                {DATA.experience.map((exp, idx) => (
                    <div key={idx} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-12">
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate sm:col-span-2">
                        {exp.dates}
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-white">
                          <span className="text-base font-medium leading-tight text-white hover:text-teal transition-colors">
                            {exp.title} · {exp.company}
                          </span>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate">
                          {exp.description}
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          {exp.tech.map(t => (
                              <li key={t} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal/10 px-3 py-1 text-xs font-medium leading-5 text-teal">
                                  {t}
                                </div>
                              </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                ))}
              </section>

              {/* Projects Section */}
              <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                {DATA.projects.map((proj, idx) => (
                    <div key={idx} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 mb-12">
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-white">
                          <a href={proj.link} target="_blank" rel="noreferrer" className="inline-flex items-baseline font-medium leading-tight text-white hover:text-teal text-base">
                            {proj.title}
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate">
                          {proj.description}
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                          {proj.tech.map(t => (
                              <li key={t} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal/10 px-3 py-1 text-xs font-medium leading-5 text-teal uppercase">
                                  {t}
                                </div>
                              </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                ))}
              </section>

              {/* EDUCATION: Добавленная секция */}
              <section id="education" className="scroll-mt-16 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-white">Education</h2>
                </div>
                {DATA.education.map((edu, idx) => (
                    <div key={idx} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 mb-12">
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate sm:col-span-2">
                        {edu.dates}
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-white text-base">
                          {edu.title}
                        </h3>
                        <p className="text-sm text-slate mt-1 font-medium italic">
                          {edu.description}
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                          {edu.tech.map(t => (
                              <li key={t} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full border border-slate/30 px-3 py-1 text-xs font-medium leading-5 text-slate/80">
                                  {t}
                                </div>
                              </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                ))}
              </section>

              {/* FOOTER */}
              <footer className="mt-24 text-sm text-slate/50">
                <p>
                  Built with React, TypeScript and Tailwind CSS.
                </p>
              </footer>
            </main>
          </div>
        </div>
      </div>
  );
}