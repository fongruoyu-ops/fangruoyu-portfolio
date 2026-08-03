"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  id: string;
  title: string;
  company: "快手" | "美团";
  companyLogo: string;
  tag: string;
  metric: string;
  pdf: string;
  cover: string;
  gallery: string[];
  accent: string;
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

const projects: Project[] = [
  {
    id: "kuaishou-1",
    title: "中小达人 AI 直播助手",
    company: "快手",
    companyLogo: "/logos/kuaishou.png",
    tag: "设计主R · 0-1",
    metric: "日均 13 万+ 次使用",
    pdf: "/projects/kuaishou-1.pdf",
    cover: "/projects/previews/kuaishou-1-01.jpg",
    gallery: [1, 2, 3, 4].map((page) => `/projects/previews/kuaishou-1-0${page}.jpg`),
    accent: "violet",
  },
  {
    id: "kuaishou-2",
    title: "分销商家 AI 赋能体系建设",
    company: "快手",
    companyLogo: "/logos/kuaishou.png",
    tag: "AI赋能B端",
    metric: "工具辅助 → 经营代理",
    pdf: "/projects/kuaishou-2.pdf",
    cover: "/projects/previews/kuaishou-2-01.jpg",
    gallery: [1, 2, 3, 4].map((page) => `/projects/previews/kuaishou-2-0${page}.jpg`),
    accent: "blue",
  },
  {
    id: "kuaishou-3",
    title: "达人分销体验治理",
    company: "快手",
    companyLogo: "/logos/kuaishou.png",
    tag: "多页面体验优化",
    metric: "33 个页面完成升级",
    pdf: "/projects/kuaishou-3.pdf",
    cover: "/projects/previews/kuaishou-3-01.jpg",
    gallery: [1, 2, 3, 4].map((page) => `/projects/previews/kuaishou-3-0${page}.jpg`),
    accent: "orange",
  },
  {
    id: "meituan-1",
    title: "商家服务 / 运营工具",
    company: "美团",
    companyLogo: "/logos/meituan.png",
    tag: "B端效率工具",
    metric: "配置时长 60s → 10s",
    pdf: "/projects/meituan-1.pdf",
    cover: "/projects/previews/meituan-1-01.jpg",
    gallery: [1, 2, 3, 4].map((page) => `/projects/previews/meituan-1-0${page}.jpg`),
    accent: "yellow",
  },
  {
    id: "meituan-2",
    title: "站外推广流量池",
    company: "美团",
    companyLogo: "/logos/meituan.png",
    tag: "增长体验",
    metric: "社群拉新与转化",
    pdf: "/projects/meituan-2.pdf",
    cover: "/projects/previews/meituan-2-01.jpg",
    gallery: [1, 2, 3, 4].map((page) => `/projects/previews/meituan-2-0${page}.jpg`),
    accent: "yellow",
  },
];

const journeyEntries: JourneyEntry[] = [
  {
    id: "ctrip",
    kind: "work",
    organization: "携程",
    role: "高级体验设计师",
    period: "2026.05 — 至今",
    team: "内容平台产品部",
    summary: "负责 AI 线路规划产品体验设计，并参与搭建团队设计侧 AI 提效工作流。",
    bullets: [
      "覆盖用户需求采集、线路生成、方案展示选择、行程编辑等核心场景，涉及国内、海外、移动端与 PC 端多端需求设计。",
      "沉淀竞品分析、需求分析等 AI Skill，提升需求理解、方案探索及设计研究效率。",
    ],
    projects: [],
    accent: "lime",
    logo: "/logos/ctrip.png",
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
      "0—1 设计并推动电商中小主播 AI 直播助手落地，上线后点击率 9.7%，日均 13 万+ 使用量，覆盖 6000+ 主播。",
      "搭建分销商家 AI 赋能体系，将经营模式从辅助决策逐步推进到 Agent 化自动执行。",
      "牵头达人分销全链路体验升级，识别 50+ 问题页面，两个季度推动 33 个页面升级上线。",
      "推动电商 C 端平台级文案治理，归纳 6 类问题并建立文案规范、上线 SOP 与设计走查机制。",
    ],
    projects: ["kuaishou-1", "kuaishou-2", "kuaishou-3"],
    accent: "violet",
    logo: "/logos/kuaishou.png",
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
    logo: "/logos/meituan.png",
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
    logo: "/logos/gsa.png",
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
    logo: "/logos/anhui-university.png",
    top: 507,
    height: 278,
  },
];

const journeyYears = Array.from({ length: 12 }, (_, index) => 2027 - index);

const tabs = ["About me", "Career journey", "Highlighted work"];

export default function Home() {
  const boardRef = useRef<HTMLDivElement>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeColumn, setActiveColumn] = useState(0);
  const [openJourney, setOpenJourney] = useState<JourneyEntry | null>(null);
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
    if (!openJourney) return;
    const close = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenJourney(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [openJourney]);

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
            <img className="about-avatar" src="/about/ruoyu-avatar.png" alt="方若玉卡通头像" />
            <p className="avatar-intro"><strong>HI,</strong> this is Ruoyu.</p>
          </div>

          <div className="about-copy">
            <p>
              <strong>4 年+ 用户体验与交互设计经验</strong>，长期负责复杂业务系统、AI 产品及
              <strong>多终端体验设计</strong>（移动端 / PC 端），具备从设计策略到执行落地的全流程能力，覆盖用户研究、需求分析、任务流程、信息架构到交互方案。
            </p>
            <p>
              擅长以全链路视角看待产品体验，把复杂业务逻辑抽象为结构化任务流程；具备参与
              <strong>多端设计规范与业务组件</strong>建设的经验。
            </p>
            <p>
              对用户行为数据与满意度有较高敏感度，擅长结合
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
                    <img src="/awards/if-design.svg" alt="iF Design Award" />
                  </span>
                  <span className="award-copy"><strong>iF</strong><small>Design Award</small></span>
                </span>
                <span className="award-item">
                  <span className="award-logo red-dot-logo">
                    <img src="/awards/red-dot.svg" alt="Red Dot Design Award" />
                  </span>
                  <span className="award-copy"><strong>Red Dot</strong><small>Design Award</small></span>
                </span>
                <span className="award-item">
                  <span className="award-logo a-design-logo">
                    <img src="/awards/a-design-award.jpg" alt="Gold A' Design Award" />
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
            <span>{projects.length} 个项目</span>
          </div>

          <div className="work-list">
            {projects.map((project, index) => (
              <a
                className="project-card"
                key={project.id}
                href={project.pdf}
                target="_blank"
                rel="noreferrer"
                aria-label={`打开 ${project.title} PDF 案例`}
              >
                <div className="project-cover">
                  <img src={project.cover} alt={`${project.title}案例封面`} />
                  <span className="project-index">0{index + 1}</span>
                  <span className="cover-arrow">PDF ↗</span>
                </div>
                <div className="project-thumbnails" aria-hidden="true">
                  {project.gallery.map((image, imageIndex) => (
                    <img src={image} alt="" key={image} className={imageIndex === 0 ? "is-active" : ""} />
                  ))}
                </div>
                <div className="project-meta">
                  <div className="project-title-block">
                    <h3>{project.title}</h3>
                    <span>{project.company} · {project.tag}</span>
                  </div>
                </div>
              </a>
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
                      <a key={project.id} href={project.pdf} target="_blank" rel="noreferrer">
                        <div className="drawer-project-cover">
                          <img src={project.cover} alt={`${project.title}案例封面`} />
                        </div>
                        <div>
                          <strong>{project.title}</strong>
                          <span>打开 PDF ↗</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </aside>
        </div>
      )}
    </main>
  );
}
