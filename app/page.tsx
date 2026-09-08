"use client";

import { useEffect, useRef, useState } from "react";

const assetPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

type Project = {
  id: string;
  title: string;
  company: "携程" | "快手" | "美团";
  companyLogo: string;
  tag: string;
  metric: string;
  pdf: string;
  cover: string;
  gallery: string[];
  pages: string[];
  accent: string;
  featured?: boolean;
};

type JourneyEntry = {
  id: string;
  kind: "work" | "education";
  organization: string;
  role: string;
  period: string;
  team: string;
  summary: string;
  bullets: string[];
  projects: string[];
  accent: string;
  logo: string;
  top: number;
  height: number;
};

const projectPages = (projectId: string, pageCount: number) =>
  Array.from({ length: pageCount }, (_, index) =>
    assetPath(`/projects/web/${projectId}/${String(index + 1).padStart(3, "0")}.webp`),
  );

const projects: Project[] = [
  {
    id: "ctrip-trip-planner",
    title: "Trip Planner 对话体验优化",
    company: "携程",
    companyLogo: assetPath("/logos/ctrip.png"),
    tag: "对话式AI体验",
    metric: "意图识别 · 动态对话",
    pdf: assetPath("/projects/ctrip-trip-planner.pdf"),
    cover: assetPath("/projects/previews/ctrip-trip-planner-01.jpg"),
    gallery: [1, 2, 3, 4].map((page) => assetPath(`/projects/previews/ctrip-trip-planner-0${page}.jpg`)),
    pages: projectPages("ctrip-trip-planner", 38),
    accent: "lime",
  },
  {
    id: "kuaishou-ai",
    title: "AI为中小经营者赋能",
    company: "快手",
    companyLogo: assetPath("/logos/kuaishou.png"),
    tag: "AI赋能 · 0-1体系建设",
    metric: "达人 + 商家双场景",
    pdf: assetPath("/projects/kuaishou-ai.pdf"),
    cover: assetPath("/projects/previews/kuaishou-ai-01.jpg"),
    gallery: [1, 2, 3, 4].map((page) => assetPath(`/projects/previews/kuaishou-ai-0${page}.jpg`)),
    pages: projectPages("kuaishou-ai", 44),
    accent: "violet",
  },
  {
    id: "kuaishou-3",
    title: "达人分销全链路体验升级",
    company: "快手",
    companyLogo: assetPath("/logos/kuaishou.png"),
    tag: "30+页面体验优化 · 设计自驱",
    metric: "33 个页面完成升级",
    pdf: assetPath("/projects/kuaishou-3.pdf"),
    cover: assetPath("/projects/previews/kuaishou-3-01.jpg"),
    gallery: [1, 2, 3, 4].map((page) => assetPath(`/projects/previews/kuaishou-3-0${page}.jpg`)),
    pages: projectPages("kuaishou-3", 23),
    accent: "orange",
  },
  {
    id: "meituan-1",
    title: "商家服务 / 运营工具",
    company: "美团",
    companyLogo: assetPath("/logos/meituan.png"),
    tag: "B端效率工具",
    metric: "配置时长 60s → 10s",
    pdf: assetPath("/projects/meituan-1.pdf"),
    cover: assetPath("/projects/previews/meituan-1-01.jpg"),
    gallery: [1, 2, 3, 4].map((page) => assetPath(`/projects/previews/meituan-1-0${page}.jpg`)),
    pages: projectPages("meituan-1", 19),
    accent: "yellow",
    featured: false,
  },
  {
    id: "meituan-2",
    title: "站外推广流量池",
    company: "美团",
    companyLogo: assetPath("/logos/meituan.png"),
    tag: "增长体验",
    metric: "社群拉新与转化",
    pdf: assetPath("/projects/meituan-2.pdf"),
    cover: assetPath("/projects/previews/meituan-2-01.jpg"),
    gallery: [1, 2, 3, 4].map((page) => assetPath(`/projects/previews/meituan-2-0${page}.jpg`)),
    pages: projectPages("meituan-2", 14),
    accent: "yellow",
    featured: false,
  },
];

const highlightedProjects = projects.filter((project) => project.featured !== false);

const journeyEntries: JourneyEntry[] = [
  {
    id: "ctrip",
    kind: "work",
    organization: "携程",
    role: "高级体验设计师",
    period: "2026.05 — 至今",
    team: "内容平台产品部",
    summary: "负责 Trip.Planner AI 旅行规划对话页体验设计，覆盖灵感探索、线路理解与交通资源决策等场景，推动对话从一次性回答升级为基于用户意图的动态任务承接。",
    bullets: [
      "通过用户反馈、Query 与行为数据分析，构建旅行意图与任务状态框架，识别差异化场景及对应的信息、交互与行动需求。",
      "设计可复用的对话组件与编排规则，支持 AI 根据用户上下文动态组织内容、补充条件并引导下一步任务。",
      "优化路线详情阅读与 A-B 交通问询体验，建立“方案理解—方案比较—资源确认”的连续决策链路。",
    ],
    projects: ["ctrip-trip-planner"],
    accent: "lime",
    logo: assetPath("/logos/ctrip.png"),
    top: 70,
    height: 76,
  },
  {
    id: "kuaishou",
    kind: "work",
    organization: "快手科技",
    role: "高级体验设计师",
    period: "2023.10 — 2026.05",
    team: "电商设计中心 · 服务 500 万+ 达人与商家",
    summary: "负责快手电商达人分销核心经营场景体验设计，对接 2 个产品组织、15 位 PM，服务 500 万+ 中小达人与商家。",
    bullets: [
      "围绕中小达人与分销商家双场景推进 AI 产品体系建设，从直播经营辅助延展至 Agent 化经营执行；相关能力上线后点击率 9.7%，日均 13 万+ 使用量，覆盖 6000+ 主播。",
      "牵头达人分销全链路体验升级，识别 50+ 问题页面，两个季度推动 33 个页面升级上线。",
      "推动电商 C 端平台级文案治理，归纳 6 类问题并建立文案规范、上线 SOP 与设计走查机制。",
    ],
    projects: ["kuaishou-ai", "kuaishou-3"],
    accent: "violet",
    logo: assetPath("/logos/kuaishou.png"),
    top: 152,
    height: 109,
  },
  {
    id: "meituan",
    kind: "work",
    organization: "美团",
    role: "交互设计师",
    period: "2021.12 — 2023.10",
    team: "到家设计中心 · 后台产品设计组",
    summary: "独立负责后台产品组多个模块，通过用户研究与交互设计持续提升需求体验和业务效能。",
    bullets: [
      "通过前线跟岗、用户访谈与社区反馈深入研究 BD 活动运营全场景，产出活动运营旅程图。",
      "与产品共建活动运营中心框架和天天神券提报方案，配置时长由 1 分钟缩短至 10 秒。",
      "功能满意度 4.13，使用率长期稳定在 90% 左右。",
    ],
    projects: ["meituan-1", "meituan-2"],
    accent: "blue",
    logo: assetPath("/logos/meituan.png"),
    top: 267,
    height: 130,
  },
  {
    id: "gsa",
    kind: "education",
    organization: "格拉斯哥艺术学院",
    role: "创新交互设计 · 硕士",
    period: "2020.09 — 2021.11",
    team: "The Glasgow School of Art · 全日制",
    summary: "创新交互设计硕士学习经历。",
    bullets: [],
    projects: [],
    accent: "orange",
    logo: assetPath("/logos/gsa.png"),
    top: 403,
    height: 86,
  },
  {
    id: "ahu",
    kind: "education",
    organization: "安徽大学",
    role: "工业设计 · 本科",
    period: "2016.09 — 2020.06",
    team: "工业设计专业 · 全日制",
    summary: "工业设计本科学习经历。",
    bullets: [],
    projects: [],
    accent: "yellow",
    logo: assetPath("/logos/anhui-university.png"),
    top: 507,
    height: 278,
  },
];

const journeyYears = Array.from({ length: 12 }, (_, index) => 2027 - index);

const tabs = ["About me", "Career journey", "Highlighted work"];

export default function Home() {
  const boardRef = useRef<HTMLDivElement>(null);
  const projectViewerRef = useRef<HTMLElement>(null);
  const copyTimerRef = useRef<number | null>(null);
  const [activeColumn, setActiveColumn] = useState(0);
  const [openJourney, setOpenJourney] = useState<JourneyEntry | null>(null);
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [copied, setCopied] = useState<"contact" | "email" | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const copyText = async (value: string, key: "contact" | "email") => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }

    setCopied(key);
    if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current);
    copyTimerRef.current = window.setTimeout(() => setCopied(null), 1800);
  };

  const toggleTheme = () => {
    setTheme((current) => {
      const nextTheme = current === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      window.localStorage.setItem("portfolio-theme", nextTheme);
      return nextTheme;
    });
  };

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const initialTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
    document.documentElement.dataset.theme = initialTheme;
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;
    const handleScroll = () => {
      const firstPanel = board.querySelector<HTMLElement>("[data-column]");
      const gap = Number.parseFloat(window.getComputedStyle(board).gap) || 0;
      const step = (firstPanel?.offsetWidth ?? board.clientWidth) + gap;
      setActiveColumn(Math.max(0, Math.min(2, Math.round(board.scrollLeft / step))));
    };
    board.addEventListener("scroll", handleScroll, { passive: true });
    return () => board.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!openJourney && !openProject) return;
    const close = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (openProject) setOpenProject(null);
      else setOpenJourney(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [openJourney, openProject]);

  useEffect(() => {
    if (!openJourney && !openProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [openJourney, openProject]);

  const showProject = (project: Project) => {
    setOpenJourney(null);
    setOpenProject(project);
    window.requestAnimationFrame(() => projectViewerRef.current?.scrollTo({ top: 0 }));
  };

  const showAdjacentProject = (direction: -1 | 1) => {
    if (!openProject) return;
    const currentIndex = projects.findIndex((project) => project.id === openProject.id);
    const nextIndex = Math.max(0, Math.min(projects.length - 1, currentIndex + direction));
    setOpenProject(projects[nextIndex]);
    window.requestAnimationFrame(() => projectViewerRef.current?.scrollTo({ top: 0, behavior: "smooth" }));
  };

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current);
    };
  }, []);

  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="identity">
          <span className="status-dot" aria-hidden="true" />
          <strong>方若玉</strong>
          <span>UX / Interaction Designer</span>
        </div>
        <div className="top-actions">
          <div className="header-contacts" aria-label="联系方式">
            <a href="tel:17305691755" aria-label="拨打手机 17305691755">
              <span className="contact-icon phone-icon" aria-hidden="true" />
              <span>17305691755</span>
            </a>
            <a href="mailto:fangruoyu2023@163.com" aria-label="发送邮件至 fangruoyu2023@163.com">
              <span className="contact-icon mail-icon" aria-hidden="true" />
              <span>fangruoyu2023@163.com</span>
            </a>
          </div>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "切换到浅色模式" : "切换到深色模式"}
          >
            <span aria-hidden="true">{theme === "dark" ? "☀" : "◐"}</span>
            <span>{theme === "dark" ? "浅色" : "深色"}</span>
          </button>
        </div>
      </header>

      <div className="mobile-progress" aria-hidden="true">
        {tabs.map((tab, index) => (
          <span key={tab} className={activeColumn === index ? "is-active" : ""} />
        ))}
      </div>

      <div className="board" ref={boardRef}>
        <section className="column about-column" data-column="0" aria-labelledby="about-title">
          <div className="column-label">
            <span>01</span>
            <h2 id="about-title">About me</h2>
            <span>自我介绍</span>
          </div>

          <div className="about-visual">
            <img className="about-avatar" src={assetPath("/about/ruoyu-avatar.png")} alt="方若玉卡通头像" />
            <p className="avatar-intro"><strong>👋 Hi,</strong> this is Ruoyu.</p>
          </div>

          <div className="about-copy">
            <p>
              <strong>4 年+ 用户体验与交互设计经验</strong>，长期负责复杂业务系统、AI 产品及
              <strong>多终端体验设计</strong>（移动端 / PC 端），具备从设计策略到执行落地的全流程能力，覆盖用户研究、需求分析、任务流程、信息架构到交互方案。
            </p>
            <p>
              擅长以全链路视角看待产品体验，把复杂业务逻辑抽象为结构化任务流程；对用户行为数据与满意度有较高敏感度，擅长结合
              <strong>用户调研、数据诊断与行业趋势研究</strong>识别问题、推动迭代。
            </p>
          </div>

          <dl className="profile-grid">
            <div>
              <dt>专注方向</dt>
              <dd>多端体验 · 复杂系统 · AI赋能提效</dd>
            </div>
            <div>
              <dt>教育背景</dt>
              <dd>创新交互设计硕士 · 工业设计本科</dd>
            </div>
            <div>
              <dt>当前职位</dt>
              <dd>高级体验设计师 · 携程 · 内容中心</dd>
            </div>
            <div className="awards-row">
              <dt>获奖经历</dt>
              <dd className="awards-grid" aria-label="获奖经历">
                <span className="award-item">
                  <span className="award-logo if-logo">
                    <img src={assetPath("/awards/if-design.svg")} alt="iF Design Award" />
                  </span>
                  <span className="award-copy"><strong>iF</strong><small>Design Award</small></span>
                </span>
                <span className="award-item">
                  <span className="award-logo red-dot-logo">
                    <img src={assetPath("/awards/red-dot.svg")} alt="Red Dot Design Award" />
                  </span>
                  <span className="award-copy"><strong>Red Dot</strong><small>Design Award</small></span>
                </span>
                <span className="award-item">
                  <span className="award-logo a-design-logo">
                    <img src={assetPath("/awards/a-design-award.jpg")} alt="Gold A' Design Award" />
                  </span>
                  <span className="award-copy"><strong>A&apos; Design</strong><small>Gold Award</small></span>
                </span>
              </dd>
            </div>
          </dl>

          <div className="contact-row">
            <button
              className="primary-button"
              type="button"
              onClick={() => copyText("17305691755", "contact")}
            >
              <span>{copied === "contact" ? "已复制手机号 / 微信号" : "复制手机号 / 微信号"}</span>
              <span aria-hidden="true">{copied === "contact" ? "✓" : "＋"}</span>
            </button>
            <button
              className="secondary-button"
              type="button"
              onClick={() => copyText("fangruoyu2023@163.com", "email")}
            >
              <span>{copied === "email" ? "邮箱已复制" : "复制邮箱"}</span>
              <span aria-hidden="true">{copied === "email" ? "✓" : "＋"}</span>
            </button>
          </div>
        </section>

        <section className="column journey-column" data-column="1" aria-labelledby="journey-title">
          <div className="column-label">
            <span>02</span>
            <h2 id="journey-title">Career journey</h2>
            <span>2016 — NOW</span>
          </div>

          <div className="journey-board" aria-label="2016 年至今的教育与职业时间轴">
            <div className="year-axis" aria-hidden="true">
              {journeyYears.map((year, index) => (
                <div className="year-row" key={year} style={{ top: `${20 + index * 74}px` }}>
                  <span>{year}</span>
                  <i />
                </div>
              ))}
            </div>
            <div className="journey-cards">
              {journeyEntries.map((entry) => {
                const content = (
                  <>
                  <span className="entry-mark" aria-hidden="true">
                    <img src={entry.logo} alt="" />
                  </span>
                  <span className="entry-copy">
                    <strong>{entry.organization}</strong>
                    <span>{entry.role}</span>
                  </span>
                  <span className="entry-period">{entry.period}</span>
                  {entry.kind === "work" && <span className="entry-arrow">↗</span>}
                  </>
                );

                if (entry.kind === "education") {
                  return (
                    <article
                      className={`journey-entry ${entry.accent} education is-static`}
                      key={entry.id}
                      style={{ top: `${entry.top}px`, height: `${entry.height}px` }}
                      aria-label={`${entry.organization} ${entry.role}`}
                    >
                      {content}
                    </article>
                  );
                }

                return (
                  <button
                    className={`journey-entry ${entry.accent} work`}
                    key={entry.id}
                    type="button"
                    style={{ top: `${entry.top}px`, height: `${entry.height}px` }}
                    onClick={() => setOpenJourney(entry)}
                    aria-label={`查看 ${entry.organization} ${entry.role} 的详情`}
                  >
                    {content}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="column work-column" data-column="2" aria-labelledby="work-title">
          <div className="column-label">
            <span>03</span>
            <h2 id="work-title">Highlighted work</h2>
            <span>{highlightedProjects.length} 个项目</span>
          </div>

          <div className="work-list">
            {highlightedProjects.map((project, index) => (
              <article
                className="project-card"
                key={project.id}
              >
                <button
                  className="project-card-trigger"
                  type="button"
                  onClick={() => showProject(project)}
                  aria-label={`站内查看 ${project.title} 案例`}
                >
                  <div className="project-cover">
                    <img
                      src={project.cover}
                      alt={`${project.title}案例封面`}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                    <span className="project-index">0{index + 1}</span>
                    <span className="cover-arrow">查看 ↗</span>
                  </div>
                  <div className="project-thumbnails" aria-hidden="true">
                    {project.gallery.map((image, imageIndex) => (
                      <img
                        src={image}
                        alt=""
                        key={image}
                        className={imageIndex === 0 ? "is-active" : ""}
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                  </div>
                  <div className="project-meta">
                    <div className="project-title-block">
                      <h3>{project.title}</h3>
                      <span>{project.company} · {project.tag}</span>
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>

      <footer className="footer-note">
        <span>© 2026 方若玉</span>
        <span>Designed & vibe coded with intention.</span>
      </footer>

      {openJourney && (
        <div className="drawer-backdrop" role="presentation" onMouseDown={() => setOpenJourney(null)}>
          <aside
            className="journey-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="journey-drawer-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="drawer-handle" aria-hidden="true" />
            <header className="drawer-header">
              <div>
                <span className="eyebrow">
                  {openJourney.kind === "work" ? "WORK EXPERIENCE" : "EDUCATION"}
                </span>
                <h2 id="journey-drawer-title">{openJourney.organization}</h2>
                <p>{openJourney.role} · {openJourney.period}</p>
              </div>
              <button type="button" aria-label="关闭履历详情" onClick={() => setOpenJourney(null)}>×</button>
            </header>

            <div className="drawer-section">
              <div className="section-heading"><span>履历概述</span><i /></div>
              <p className="drawer-summary">{openJourney.summary}</p>
            </div>

            {openJourney.bullets.length > 0 && (
              <div className="drawer-section">
                <div className="section-heading"><span>主要工作</span><i /></div>
                <ul className="experience-list">
                  {openJourney.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </div>
            )}

            {openJourney.projects.length > 0 && (
              <div className="drawer-section">
                <div className="section-heading"><span>对应作品</span><i /></div>
                <div className="drawer-projects">
                  {openJourney.projects.map((projectId) => {
                    const project = projects.find((item) => item.id === projectId)!;
                    return (
                      <button key={project.id} type="button" onClick={() => showProject(project)}>
                        <div className="drawer-project-cover">
                          <img src={project.cover} alt={`${project.title}案例封面`} loading="lazy" decoding="async" />
                        </div>
                        <div>
                          <strong>{project.title}</strong>
                          <span>查看作品 ↗</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </aside>
        </div>
      )}

      {openProject && (() => {
        const projectIndex = projects.findIndex((project) => project.id === openProject.id);
        return (
          <div className="project-viewer-backdrop" role="presentation" onMouseDown={() => setOpenProject(null)}>
            <section
              className="project-viewer"
              ref={projectViewerRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-viewer-title"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <header className="project-viewer-header">
                <div className="project-viewer-title">
                  <span>SELECTED WORK · {String(projectIndex + 1).padStart(2, "0")}</span>
                  <h2 id="project-viewer-title">{openProject.title}</h2>
                  <p>{openProject.company} · {openProject.tag}</p>
                </div>
                <div className="project-viewer-actions">
                  <div className="project-switcher" aria-label="切换项目">
                    <button
                      type="button"
                      onClick={() => showAdjacentProject(-1)}
                      disabled={projectIndex === 0}
                      aria-label="上一个项目"
                    >
                      ←
                    </button>
                    <span aria-live="polite">{projectIndex + 1} / {projects.length}</span>
                    <button
                      type="button"
                      onClick={() => showAdjacentProject(1)}
                      disabled={projectIndex === projects.length - 1}
                      aria-label="下一个项目"
                    >
                      →
                    </button>
                  </div>
                  <button className="project-viewer-close" type="button" onClick={() => setOpenProject(null)} aria-label="关闭作品详情">×</button>
                </div>
              </header>

              <div className="project-pages">
                {openProject.pages.map((page, pageIndex) => (
                  <figure className="project-page" key={page}>
                    <img
                      src={page}
                      alt={`${openProject.title} 第 ${pageIndex + 1} 页`}
                      loading={pageIndex < 2 ? "eager" : "lazy"}
                      decoding="async"
                    />
                    <figcaption>{String(pageIndex + 1).padStart(2, "0")} / {String(openProject.pages.length).padStart(2, "0")}</figcaption>
                  </figure>
                ))}
                <p className="project-end">— 案例结束 · END OF CASE STUDY —</p>
              </div>
            </section>
          </div>
        );
      })()}
    </main>
  );
}
