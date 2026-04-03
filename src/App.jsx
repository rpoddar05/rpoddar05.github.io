export default function RahulPoddarPortfolio() {
  const projects = [
    {
      title: "AI Log Analyzer",
      summary:
        "LLM-powered backend tool that analyzes application logs, summarizes probable root causes, and suggests likely fixes to accelerate debugging and production support workflows.",
      stack: ["Spring Boot", "OpenAI API", "Java", "REST APIs"],
      status: "AI Project",
      github: "#",
      cta: "View Code"
    },
    {
      title: "AI API Assistant",
      summary:
        "AI-assisted developer productivity tool that helps generate backend API scaffolding, validates generated code, and refines outputs for cleaner service and controller design.",
      stack: ["Java", "Spring Boot", "LLM APIs", "Prompt Validation"],
      status: "AI Project",
      github: "#",
      cta: "View Code"
    },
    {
      title: "Event-Driven Case Management System",
      summary:
        "Kafka-based distributed systems project modeling patient resolution, case lifecycle, and lab ingestion workflows with idempotent processing, partition-aware design, retries, and DLQ handling.",
      stack: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker", "Flyway"],
      status: "Built",
      github: "#",
      cta: "View Code"
    },
    {
      title: "IMAPS Backend Modernization",
      summary:
        "Backend modernization work for a centralized assignment and investigation platform focused on REST APIs, Oracle PL/SQL integration, RBAC security, caching, and performance optimization for data-heavy healthcare workflows.",
      stack: ["Java", "Spring Boot", "Oracle", "Spring Security", "Caffeine", "Zipkin"],
      status: "Professional Work",
      github: "#",
      cta: "Case Study"
    }
  ];

  const skills = {
    "Languages & Databases": ["Java", "Oracle (SQL/PLSQL)", "PostgreSQL", "MySQL"],
    "Backend & APIs": ["Spring Boot", "Spring MVC", "REST APIs", "JPA/Hibernate", "MyBatis"],
    "Architecture & Patterns": ["Distributed Systems", "Event-Driven Architecture", "Caching", "RBAC"],
    "Servers, Build & Observability": ["Kafka", "Docker", "Maven", "Git", "Apache Tomcat", "Oracle WebLogic", "Zipkin"],
    "Testing & Quality": ["JUnit", "Mockito", "SonarQube", "JaCoCo"],
    "Frontend": ["Thymeleaf", "JavaScript", "jQuery", "AngularJS", "HTML", "CSS", "AG Grid"],
    "AI & LLMs": ["OpenAI API", "Prompt Engineering", "LLM Integration", "Structured Output Parsing", "AI-assisted Workflows"]
  };

  const experience = [
    {
      title: "Senior Software Engineer",
      company: "Smart Source Technologies Inc",
      period: "Feb 2021 – Present",
      projects: [
        {
          name: "IMAPS (Information Management Application for Partner Services)",
          bullets: [
            "Owned backend development of IMAPS, a centralized assignment and investigation platform modernizing a legacy public-health MIS system used across multiple disease programs (HIV, Syphilis, Chlamydia, Gonorrhea, Mpox).",
            "Designed Spring Boot REST APIs and service-layer workflows, integrating complex Oracle PL/SQL stored procedures while enforcing secure access control using Spring Security RBAC.",
            "Improved backend scalability and reduced database load by introducing caching (Spring Cache/Caffeine) for frequently accessed data.",
            "Diagnosed investigation workflow latency using Zipkin-based tracing with correlation IDs and reduced endpoint latency from ~500ms to ~20–40ms by eliminating redundant writes, adding indexing, and implementing pagination.",
            "Built unit tests using JUnit and Mockito to validate business logic and improve code quality with SonarQube coverage tracking."
          ]
        },
        {
          name: "NYEHMS (Continued Support)",
          bullets: [
            "Redesigned data ingestion workflows to support SFTP-based file processing alongside HL7/HIE feeds, ensuring uninterrupted ingestion during a production transition.",
            "Investigated production ingestion failures and bottlenecks, redesigning a long-running HL7 deduplication job from per-record to batched queries and building tooling (job runners, ingestion alerts) to improve reliability and observability."
          ]
        }
      ]
    },
    {
      title: "Application Development Specialist III",
      company: "Health Research Incorporated",
      period: "May 2019 – Feb 2021",
      projects: [
        {
          name: "NYEHMS (New York Electronic HIV Monitoring System)",
          bullets: [
            "Contributed to backend development of NYEHMS, a statewide HIV monitoring platform ingesting high-volume clinical data feeds (CCD XML, HL7 messages, death records) from regional healthcare partners.",
            "Built data ingestion workflows to parse HL7, CCD XML, CSV, and text-based healthcare documents into normalized patient and laboratory records using Java and Oracle PL/SQL.",
            "Implemented parsing and normalization logic using JDOM and HAPI HL7 libraries to extract patient demographics, encounters, diagnoses, and laboratory results into structured database tables.",
            "Designed error-recovery workflows using HIT_ERROR tracking tables so failed records could be reviewed, corrected, and safely reprocessed during nightly batch runs."
          ]
        }
      ]
    },
    {
      title: "Software Developer / Engineer",
      company: "Health Research Incorporated",
      period: "May 2018 – May 2019",
      projects: [
        {
          name: "Environmental Public Health Tracking Application",
          bullets: [
            "Developed backend business logic and RESTful services using Java, Spring Boot, and Hibernate for public-health applications.",
            "Integrated backend services with AngularJS-based UI components and supported enterprise deployments on Oracle WebLogic Server."
          ]
        }
      ]
    }
  ];

  const metrics = [
    { label: "6+ Years", value: "Backend engineering" },
    { label: "Performance Optimization", value: "Caching, tracing, latency tuning" },
    { label: "Java • Spring Boot • Kafka", value: "Core engineering stack" }
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.20),_transparent_25%),linear-gradient(135deg,_#07111f,_#0b1020_45%,_#111827)] text-white">
      <div className="mx-auto max-w-7xl px-5 py-6 md:px-8 lg:px-10">
        <nav className="sticky top-4 z-30 mb-8 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-xl shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold tracking-wide">Rahul Poddar</div>
              <div className="text-sm text-white/70">Senior Backend Engineer</div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-white/80">
              <a href="#projects" className="transition hover:text-white">Projects</a>
              <a href="#experience" className="transition hover:text-white">Experience</a>
              <a href="#skills" className="transition hover:text-white">Skills</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>
          </div>
        </nav>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <div className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-2xl shadow-2xl shadow-black/25">
            <div className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
              Java • Spring Boot • Distributed Systems • AI Projects
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Backend engineer building scalable systems and practical AI tooling.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              I build data-intensive APIs, ingestion workflows, secure backend services, and performance-focused enterprise systems.
              This portfolio showcases production backend experience and AI-oriented engineering projects designed to stand out quickly.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl border border-cyan-300/30 bg-cyan-300/15 px-5 py-3 text-sm font-medium text-cyan-100 backdrop-blur-md transition hover:bg-cyan-300/20"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/15"
              >
                Connect With Me
              </a>
              <a href="/Rahul_Poddar_Resume.pdf" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="rounded-2xl border border-white/20 px-6 py-3 font-medium hover:bg-white/10 transition"
              >
                Resume (PDF)
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-lg font-semibold text-white">{metric.label}</div>
                  <div className="mt-1 text-sm text-white/65">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-2xl shadow-2xl shadow-black/25">
              <div className="text-sm uppercase tracking-[0.2em] text-white/60">Why I stand out</div>
              <div className="mt-4 grid gap-3 text-sm text-white/85">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Production backend experience with real system modernization work</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Clear impact story around performance, caching, and data-heavy workflows</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Kafka and AI projects that show modern engineering direction</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Strong Java + Spring Boot foundation with pragmatic system design thinking</div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-2xl shadow-2xl shadow-black/25">
              <div className="text-sm uppercase tracking-[0.2em] text-white/60">Recruiter snapshot</div>
              <div className="mt-4 space-y-4 text-sm text-white/80">
                <div>
                  <div className="text-2xl font-semibold text-white">Java + Spring Boot</div>
                  <div>6+ years building backend systems, REST APIs, and secure enterprise workflows.</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">Healthcare Data Platforms</div>
                  <div>Hands-on experience with ingestion pipelines, Oracle PL/SQL integration, RBAC, and high-volume investigation workflows.</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">Performance + AI Direction</div>
                  <div>Production performance optimization backed by tracing, plus AI and event-driven systems projects.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-20 scroll-mt-40">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/55">Featured Work</p>
              <h2 className="mt-2 text-3xl font-semibold">Projects & Engineering Highlights</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex h-full flex-col rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-2xl shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold leading-7">{project.title}</h3>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/70">
                    {project.status}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-white/75">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-6">
                  <a
                    href={project.github}
                    className="inline-flex text-sm font-medium text-cyan-300 transition hover:text-cyan-200 hover:underline"
                  >
                    {project.cta} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

       <section id="experience" className="mt-20 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] scroll-mt-40">
          <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-2xl shadow-2xl shadow-black/20 lg:sticky lg:top-32 lg:h-fit">
            <p className="text-sm uppercase tracking-[0.25em] text-white/55">About</p>
            <h2 className="mt-2 text-3xl font-semibold">What I bring</h2>
            <p className="mt-4 text-sm leading-7 text-white/75">
              I’m a senior backend engineer with 6+ years building data-intensive systems in Java and Spring Boot. My experience spans REST APIs, ingestion pipelines, role-based security, Oracle-heavy workflows, caching, and production performance tuning. I’m now pairing that foundation with AI and distributed-systems projects to expand into modern engineering roles.
            </p>
          </div>

          <div className="space-y-6">
            {experience.map((role) => (
              <div
                key={role.title + role.company}
                className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-2xl shadow-2xl shadow-black/20"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{role.title}</h3>
                    <p className="text-white/70">{role.company}</p>
                  </div>
                  <div className="text-sm text-white/55">{role.period}</div>
                </div>
                <div className="mt-5 space-y-6">
                  {role.projects.map((project) => (
                    <div key={project.name}>
                      <h4 className="text-base font-semibold text-cyan-200">{project.name}</h4>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-white/78">
                        {project.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300/80" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-20 scroll-mt-40">
          <p className="text-sm uppercase tracking-[0.25em] text-white/55">Core Stack</p>
          <h2 className="mt-2 text-3xl font-semibold">Skills</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-2xl shadow-2xl shadow-black/20"
              >
                <h3 className="text-lg font-semibold">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-20 mb-8 scroll-mt-40 rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-2xl shadow-2xl shadow-black/25">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/55">Contact</p>
              <h2 className="mt-2 text-3xl font-semibold">Let’s build something meaningful.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
                Currently exploring backend and AI engineering opportunities. Open to roles focused on distributed systems, data platforms, clean APIs, and developer tooling.
              </p>
            </div>
            <div className="grid gap-3 text-sm text-white/85">
              <a className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10" href="mailto:rpoddar05@gmail.com">
                rpoddar05@gmail.com
              </a>
              <a className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10" href="https://www.linkedin.com/in/rahul-poddar05">
                LinkedIn
              </a>
              <a className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10" href="https://github.com/">
                GitHub
              </a>
              <a href="/Rahul_Poddar_Resume.pdf"
                 target="_blank"
                 className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
              >
                Resume
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}