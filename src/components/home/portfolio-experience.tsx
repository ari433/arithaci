"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Copy, Menu, Play, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";

const projects = [
  {
    index: "01",
    title: "AGJENTI AI",
    eyebrow: "FOUNDER PROJECT",
    text: "AI employee platform per biznese — Instagram, Facebook, WhatsApp dhe web. Lead capture, qualification, booking, support, multilingual flows dhe human handoff.",
    meta: ["AI AGENTS", "AUTOMATION", "SALES", "BOOKING"],
    href: "https://agjenti-ai.com",
    accent: "LIVE / BUILDING",
  },
  {
    index: "02",
    title: "AI SALES MANAGER",
    eyebrow: "US SALES OPERATION",
    text: "Punoj remote me nje sales operation ne SHBA ne workflows per AI sales management, QA, daily operations dhe multi-agent systems. Fokus: sistemi me ndihmu ekipin me punu me mire, jo vec me u dok mire ne demo.",
    meta: ["MULTI-AGENT", "QA", "WORKFLOWS", "OPS"],
    accent: "CONFIDENTIAL",
  },
  {
    index: "03",
    title: "AI-BIBLIOTEKA",
    eyebrow: "AI PRODUCT",
    text: "Platforme per learning/productivity me document parsing, citations reale, flashcards, quiz, chat me burime dhe RAG-style workflows.",
    meta: ["RAG", "PGVECTOR", "SUPABASE", "PRODUCT"],
    accent: "SHIPPED / ITERATING",
  },
  {
    index: "04",
    title: "AI RECEPTIONIST",
    eyebrow: "AUTOMATION SYSTEM",
    text: "Voice + chat reception, lead handling, qualification, booking dhe handoff. Ndertohet rreth procesit real te biznesit, jo rreth nje prompti te vetem.",
    meta: ["VOICE", "CHAT", "LEADS", "BOOKING"],
    accent: "EXPERIMENT / CLIENT USE",
  },
  {
    index: "05",
    title: "CLIENT BUILDS",
    eyebrow: "PRODUCT WORK",
    text: "FoodFlow, e-commerce builds, booking/rent-a-car demos, internal AI tools dhe custom agent systems. Disa production, disa pilots, disa experiments — krejt te ndertume per me testu ide reale.",
    meta: ["NEXT.JS", "APIS", "PWA", "AUTOMATION"],
    accent: "REAL-WORLD BUILDS",
  },
];

const experience = [
  ["FOUNDER", "AGJENTI AI", "Po e ndertoj si AI employee platform per biznese — conversations, leads, qualification, booking dhe automations across social + web."],
  ["REMOTE AI SYSTEMS", "US SALES OPERATION", "AI sales manager workflows, QA, multi-agent systems, daily operations dhe automation per nje ekip shitjesh ne SHBA."],
  ["AI PRODUCT BUILDER", "PERSONAL + CLIENT", "AI-Biblioteka, E-Ditari concept, AI Receptionist, Sales Agent Builder, FoodFlow, custom AI agents dhe business demos."],
  ["AI EDUCATION", "WORKSHOPS / ACADEMIES", "Practical AI, product building, vibe coding, AI content, agents dhe automation me nxenes e grupe."],
  ["CONTENT / MEDIA", "AI / TECH / BUILDING", "Content rreth AI, automation, tech dhe procesit real te ndertimit — plus media conversations dhe interviews."],
];

const process = [
  ["01", "FIND THE REAL PROBLEM"],
  ["02", "TALK TO USERS / BUSINESS"],
  ["03", "PROMPT / ARCHITECT"],
  ["04", "BUILD FAST"],
  ["05", "TEST IN REAL LIFE"],
  ["06", "BREAK IT"],
  ["07", "FIX IT"],
  ["08", "SHIP"],
];

const prompts = [
  ["AI AGENT ARCHITECT", "Analizo biznesin si system architect. Nxirr objektivat, knowledge boundaries, lead qualification, booking, escalation, edge cases dhe anti-hallucination rules. Pastaj nderto agentin production-ready."],
  ["BUSINESS AUTOMATION", "Mapo procesin prej first touch deri te outcome. Gjej ku humbet kohe, ku ka manual work dhe ku AI/API automation sjell ROI real. Mos automatizo hapa qe sduhen automatizu."],
  ["PRODUCT BUILDER", "Sillu si senior product engineer. Nderto MVP funksional, mobile-first, me architecture te paster, real states, error handling dhe zero fake-success flows."],
  ["SALES AGENT", "Krijo nje sales agent qe pyet, kualifikon, kupton intentin, trajton objections dhe e leviz lead-in drejt next step pa u bo agresiv ose robotik."],
  ["CONTENT / VIDEO", "Ktheje idene ne content qe duket human. Hook i shkurte, vizual i forte, nje mesazh kryesor dhe payoff. Mos e mbush me buzzwords."],
  ["QA / DEBUGGING", "Mos supozo qe UI success = backend success. Verifiko states, network calls, validation, edge cases, retries dhe failure paths para se me qujt feature-in done."],
];

const media = [
  ["SGkO9A3V5ao", "MEDIA APPEARANCE 01"],
  ["FgcXVc114PM", "MEDIA APPEARANCE 02"],
  ["X5K3QX17Fvs", "MEDIA APPEARANCE 03"],
  ["CCf4--N3KCc", "MEDIA APPEARANCE 04"],
];

const stack = ["ChatGPT","Claude","Gemini","Supabase","Vercel","Netlify","GitHub","Next.js","TypeScript","Make","APIs","RAG","Multi-agent systems","Automation"];

const qa = [
  ["who", "Une jom Ari — AI builder nga Prishtina, founder i Agjenti AI. Ndertoj AI products, automations dhe systems qe testohen ne pune reale."],
  ["agjenti", "Agjenti AI eshte projekti jem kryesor: AI employee platform per customer conversations, leads, qualification, booking dhe support ne social + web."],
  ["america", "Punoj remote me nje US sales operation ne AI sales management workflows, QA, multi-agent systems dhe daily operations. Detajet e ekipit i mbaj private."],
  ["built", "Kam punu ne Agjenti AI, AI Sales Manager systems, AI-Biblioteka, AI Receptionist, FoodFlow, e-commerce/client builds dhe custom business automations."],
  ["work", "Nis me problemin, jo me tool-in. E mapoj procesin, ndertoj shpejt, e testoj ne real life, e thyej, e rregulloj dhe e ship."],
  ["tools", "Per build perdori kombinime si ChatGPT, Claude, Gemini, Supabase, Vercel, GitHub, Next.js, TypeScript, Make, APIs, RAG dhe multi-agent workflows."],
  ["teach", "Po. Kam punu me workshops dhe academy-style sessions rreth practical AI, product building, vibe coding, agents, automation dhe content."],
  ["contact", "Per project, collaboration ose invite: hape pjesen LET'S BUILD ne fund dhe lidhemi direkt."],
];

export default function PortfolioExperience() {
  const [menu, setMenu] = useState(false);
  const [activePrompt, setActivePrompt] = useState<number | null>(0);
  const [copied, setCopied] = useState<number | null>(null);
  const [video, setVideo] = useState<string | null>(null);
  const [askOpen, setAskOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const { scrollYProgress } = useScroll();
  const coreY = useTransform(scrollYProgress, [0, .28], [0, 120]);
  const coreRotate = useTransform(scrollYProgress, [0, .28], [0, 24]);

  useEffect(() => {
    if (!menu) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = old; };
  }, [menu]);

  const nav = useMemo(() => [
    ["WORK", "#work"], ["EXPERIENCE", "#experience"], ["PROMPTS", "#prompts"], ["MEDIA", "#media"], ["ABOUT", "#about"]
  ], []);

  function copyPrompt(text: string, i: number) {
    navigator.clipboard?.writeText(text);
    setCopied(i);
    window.setTimeout(() => setCopied(null), 1200);
  }

  function ask(e: React.FormEvent) {
    e.preventDefault();
    const q = question.toLowerCase();
    const hit = qa.find(([key]) => q.includes(key)) || qa.find(([key]) => key === "who");
    setAnswer(hit?.[1] || qa[0][1]);
  }

  return (
    <div className="ari-site" id="top">
      <motion.div className="progress" style={{ scaleX: scrollYProgress }} />
      <header className="ari-nav">
        <a href="#top" className="brand">ARI<span>.</span></a>
        <nav className="desktop-nav">
          {nav.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          <a className="talk-link" href="#contact">LET&apos;S TALK ↗</a>
        </nav>
        <button className="menu-btn" onClick={() => setMenu(true)} aria-label="Open menu"><Menu size={21}/></button>
      </header>

      <AnimatePresence>
        {menu && <motion.div className="mobile-menu" initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: .45, ease: [0.16,1,.3,1] }}>
          <div className="mobile-menu-top"><span className="brand">ARI<span>.</span></span><button onClick={() => setMenu(false)} aria-label="Close menu"><X/></button></div>
          <div className="mobile-menu-links">
            {nav.map(([label, href], i) => <a href={href} key={href} onClick={() => setMenu(false)}><small>0{i+1}</small>{label}</a>)}
            <a href="#contact" onClick={() => setMenu(false)}><small>06</small>LET&apos;S TALK</a>
          </div>
          <p>PRISHTINA / AI PRODUCTS / AUTOMATION</p>
        </motion.div>}
      </AnimatePresence>

      <main>
        <section className="hero">
          <div className="hero-grid" />
          <motion.div className="hero-core" style={{ y: coreY, rotate: coreRotate }} aria-hidden>
            <span/><span/><span/>
          </motion.div>
          <div className="hero-top-meta mono">
            <span>CURRENT_STATUS / BUILDING</span>
            <span>SYSTEM / ONLINE</span>
          </div>
          <div className="hero-copy">
            <p className="kicker">HEY, UNE JOM ARI.</p>
            <h1>I BUILD<br/><em>WITH AI.</em></h1>
            <div className="hero-sub">
              <p>Founder of <a href="https://agjenti-ai.com" target="_blank" rel="noreferrer">Agjenti AI ↗</a>. Building AI products, automations and systems that actually get used.</p>
              <div className="mono">PRISHTINA / AI PRODUCTS / AUTOMATION / CONTENT / SHIPPING IN PUBLIC</div>
            </div>
          </div>
          <a className="scroll-cue mono" href="#work">SCROLL TO EXPLORE <ArrowDown size={14}/></a>
        </section>

        <section className="manifesto">
          <p className="section-label mono">00 / THE POINT</p>
          <h2>I DON&apos;T JUST<br/>USE AI.<br/><span>I BUILD WITH IT.</span></h2>
          <p className="manifesto-copy">Ideja osht e thjeshte: AI duhet me bo pune reale. Une e lidh me product thinking, automation, sales, content dhe code — pastaj e testoj jashte demos.</p>
        </section>

        <section className="projects" id="work">
          <div className="section-head">
            <p className="section-label mono">01 / SELECTED WORK</p>
            <h2>BUILT IN<br/>THE REAL WORLD.</h2>
          </div>
          <div className="project-list">
            {projects.map((p) => (
              <article className="project-row" key={p.index}>
                <div className="project-index mono">{p.index}</div>
                <div className="project-main">
                  <div className="mono project-eyebrow">{p.eyebrow}</div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <div className="tags">{p.meta.map(x => <span key={x}>{x}</span>)}</div>
                  {p.href && <a href={p.href} target="_blank" rel="noreferrer" className="project-link">OPEN PROJECT <ArrowUpRight size={16}/></a>}
                </div>
                <div className="project-status mono">{p.accent}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience" id="experience">
          <div className="section-head inverted">
            <p className="section-label mono">02 / EXPERIENCE</p>
            <h2>FROM IDEA<br/>TO REAL WORK.</h2>
          </div>
          <div className="experience-list">
            {experience.map(([role, place, text], i) => (
              <div className="experience-row" key={role}>
                <span className="mono">0{i+1}</span>
                <div><strong>{role}</strong><small>{place}</small></div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="how" id="about">
          <div className="how-intro">
            <p className="section-label mono">03 / HOW I BUILD</p>
            <h2>BUILD FAST.<br/>PO JO FAKE.</h2>
            <div className="how-quotes">
              <p>&ldquo;Une nuk nis me &apos;cilin AI tool me perdor&apos;. Nis me problemin.&rdquo;</p>
              <p>&ldquo;Prompti osht vec fillimi. Produkti duhet me funksionu.&rdquo;</p>
            </div>
          </div>
          <div className="process">
            {process.map(([n, text]) => <div className="process-row" key={n}><span className="mono">{n}</span><strong>{text}</strong><i/></div>)}
          </div>
        </section>

        <section className="prompts" id="prompts">
          <div className="section-head">
            <p className="section-label mono">04 / PROMPTS + PLAYBOOK</p>
            <h2>HOW I THINK<br/>BEFORE I BUILD.</h2>
          </div>
          <div className="prompt-grid">
            {prompts.map(([title, text], i) => (
              <article className={"prompt-card " + (activePrompt === i ? "active" : "")} key={title}>
                <button className="prompt-title" onClick={() => setActivePrompt(activePrompt === i ? null : i)}>
                  <span className="mono">0{i+1}</span><strong>{title}</strong><span>{activePrompt === i ? "−" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {activePrompt === i && <motion.div className="prompt-body" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                    <p>{text}</p>
                    <button onClick={() => copyPrompt(text, i)}>{copied === i ? <><Check size={15}/> COPIED</> : <><Copy size={15}/> COPY PROMPT</>}</button>
                  </motion.div>}
                </AnimatePresence>
              </article>
            ))}
          </div>
        </section>

        <section className="stack-section">
          <p className="section-label mono">05 / STACK / TOOLING</p>
          <div className="stack-marquee">
            <div>{[...stack, ...stack].map((x,i) => <span key={i}>{x}</span>)}</div>
          </div>
          <p className="stack-note">Tools change. Problemi, architecture dhe execution jane pjesa qe mbetet.</p>
        </section>

        <section className="media" id="media">
          <div className="section-head inverted">
            <p className="section-label mono">06 / MEDIA</p>
            <h2>ON AIR.</h2>
            <p className="media-copy">Conversations about AI, technology and building. Media eshte pjese e story-t — jo story-ja e krejt webit.</p>
          </div>
          <div className="media-grid">
            {media.map(([id,label],i) => (
              <button className="media-card" key={id} onClick={() => setVideo(id)}>
                <div className="media-thumb" style={{ backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)` }}>
                  <div className="play"><Play fill="currentColor" size={18}/></div>
                </div>
                <div className="media-meta"><span className="mono">0{i+1}</span><strong>{label}</strong><span>WATCH ↗</span></div>
              </button>
            ))}
          </div>
        </section>

        <section className="story">
          <p className="section-label mono">07 / ABOUT</p>
          <div className="story-grid">
            <h2>STILL LEARNING.<br/><em>ALWAYS BUILDING.</em></h2>
            <div className="story-copy">
              <p>Hey, une jom Ari.</p>
              <p>Jam AI builder nga Prishtina dhe founder i Agjenti AI. Shumicen e kohes e kaloj tu ndertu produkte, automations dhe experiments — shpesh para se me u ndi 100% gati.</p>
              <p>Disa funksionojne. Disa thyhen. Disa ndryshojne krejt drejtim.</p>
              <p>Po secili build ma jep diqka qe teoria nuk ma jep: feedback real.</p>
              <p className="story-end">Ship. Learn. Build the next one.</p>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="section-label mono">08 / CONTACT</p>
          <h2>LET&apos;S<br/>BUILD<br/><em>SOMETHING.</em></h2>
          <div className="contact-actions">
            <a href="https://agjenti-ai.com" target="_blank" rel="noreferrer">AGJENTI AI <ArrowUpRight size={17}/></a>
            <button onClick={() => setAskOpen(true)}>ASK ARI</button>
            <a href="https://github.com/ari433" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={17}/></a>
          </div>
          <footer><span>ARI THACI / AI BUILDER</span><span>PRISHTINA / 2026</span></footer>
        </section>
      </main>

      <button className="ask-fab" onClick={() => setAskOpen(true)}>ASK ARI <span>↗</span></button>

      <AnimatePresence>
        {video && <motion.div className="modal-backdrop" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} onClick={() => setVideo(null)}>
          <motion.div className="video-modal" initial={{ scale:.96, y:30 }} animate={{ scale:1, y:0 }} exit={{ scale:.96, y:30 }} onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setVideo(null)} aria-label="Close video"><X/></button>
            <iframe src={`https://www.youtube.com/embed/${video}?autoplay=1`} title="Ari Thaci media appearance" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen/>
          </motion.div>
        </motion.div>}
      </AnimatePresence>

      <AnimatePresence>
        {askOpen && <motion.aside className="ask-panel" initial={{ x:"100%" }} animate={{ x:0 }} exit={{ x:"100%" }} transition={{ duration:.45, ease:[.16,1,.3,1] }}>
          <div className="ask-head"><div><small className="mono">LOCAL KNOWLEDGE / ONLINE</small><h3>ASK ARI.</h3></div><button onClick={() => setAskOpen(false)}><X/></button></div>
          <p className="ask-intro">Pyet per Agjenti AI, projects, US work, tools, workshops ose how I build.</p>
          <div className="ask-suggestions">
            {["Who is Ari?","What is Agjenti AI?","What have you built?","What tools do you use?"].map(q => <button key={q} onClick={() => setQuestion(q)}>{q}</button>)}
          </div>
          <form onSubmit={ask}><input value={question} onChange={e => setQuestion(e.target.value)} placeholder="Ask about what Ari builds..." /><button>ASK ↗</button></form>
          {answer && <motion.div className="answer" initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}><span className="mono">ARI / ANSWER</span><p>{answer}</p></motion.div>}
        </motion.aside>}
      </AnimatePresence>
    </div>
  );
}
