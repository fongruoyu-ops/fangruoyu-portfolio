"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  id: string;
  title: string;
  tag: string;
  metric: string;
  summary: string;
  role: string;
  accent: string;
};

type Job = {
  company: string;
  role: string;
  period: string;
  team: string;
  summary: string;
  projects: string[];
};

const projects: Project[] = [
  {
    id: "trip-ai",
    title: "AI 线路规划产品",
    tag: "AI · 多端体验",
    metric: "国内 / 海外用户",
    summary:
      "围绕旅行规划的完整决策链路，设计从需求输入、线路生成、方案选择到行程调整的多端体验。",
    role: "需求分析、场景研究、任务流程、信息架构与落地协同",
    accent: "lime",
  },
  {
    id: "live-ai",
    title: "AI 直播助手",
    tag: "0—1 · 商业化",
    metric: "日均 13 万+ 次使用",
    summary:
      "帮助中小主播降低讲品、操作和经营分析的学习成本，构建 AI 辅助讲品、语音操作与实时建议体验。",
    role: "用户研究、用户旅程、交互方案、数据诊断与 MVP 推进",
    accent: "violet",
  },
  {
    id: "agent",
    title: "AI Agent 经营体系",
    tag: "人机协同",
    metric: "建议 → 确认 → 执行",
    summary:
      "将复杂经营流程拆解为任务驱动型交互，推动 AI 能力从辅助工具向可执行 Agent 演进。",
    role: "交互范式、任务建模、人机协同机制",
    accent: "blue",
  },
  {
    id: "distribution",
    title: "达人分销体验治理",
    tag: "复杂系统 · Design System",
    metric: "33 个页面完成升级",
    summary:
      "横向梳理达人分销前后台关键链路，完成 50+ 页面体验评估、问题分级与统一升级。",
    role: "全链路诊断、信息架构、业务组件与设计规范",
    accent: "orange",
  },
  {
    id: "bee",
    title: "蜜蜂活动运营中心",
    tag: "B 端效率工具",
    metric: "配置时长 60s → 10s",
    summary:
      "通过访谈、前线跟岗与社区反馈梳理活动运营全场景，重构信息架构与配置流程。",
    role: "用户研究、旅程地图、信息架构与交互设计",
    accent: "yellow",
  },
];

const jobs: Job[] = [
  {
    company: "携程",
    role: "高级体验设计师",
    period: "2026.05 — 至今",
    team: "内容平台产品部",
    summary:
      "负责面向国内外用户的 AI 旅行规划体验，以全链路视角打通移动端与 PC 端的决策过程。",
    projects: ["trip-ai"],
  },
  {
    company: "快手科技",
    role: "高级体验设计师",
    period: "2023.10 — 2026.05",
    team: "电商设计中心 · 服务 500 万+ 达人与商家",
    summary:
      "聚焦 AI 产品与复杂经营系统，从 0—1 商业化创新到跨页面体验治理，推动设计策略落地。",
    projects: ["live-ai", "agent", "distribution"],
  },
  {
    company: "美团",
    role: "交互设计师",
    period: "2021.12 — 2023.10",
    team: "到家设计中心",
    summary:
      "深入一线运营场景，以研究与流程重构提升 B 端工具效率，让复杂配置变得快速、清晰。",
    projects: ["bee"],
  },
];

const tabs = ["About me", "Career journey", "Highlighted work"];

export default function Home() {
  const boardRef = useRef<HTMLDivElement>(null);
  const [activeColumn, setActiveColumn] = useState(0);
  const [activeJob, setActiveJob] = useState(1);
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const scrollToColumn = (index: number) => {
    const next = Math.max(0, Math.min(tabs.length - 1, index));
    const board = boardRef.current;
    const panel = board?.querySelector<HTMLElement>(`[data-column="${next}"]`);
    panel?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActiveColumn(next);
  };

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;
    const handleScroll = () => {
      const width = board.clientWidth || 1;
      setActiveColumn(Math.max(0, Math.min(2, Math.round(board.scrollLeft / width))));
    };
    board.addEventListener("scroll", handleScroll, { passive: true });
    return () => board.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!openProject) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenProject(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [openProject]);

  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="identity">
          <span className="status-dot" aria-hidden="true" />
          <strong>方若玉</strong>
          <span>UX / Interaction Designer</span>
        </div>
        <div className="top-actions">
          <span className="availability">Shanghai · Open to opportunities</span>
          <a className="text-link" href="mailto:fangruoyu2023@163.com">
            联系我 ↗
          </a>
          <nav className="arrow-nav" aria-label="模块切换">
            <button
              type="button"
              aria-label="上一模块"
              onClick={() => scrollToColumn(activeColumn - 1)}
              disabled={activeColumn === 0}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="下一模块"
              onClick={() => scrollToColumn(activeColumn + 1)}
              disabled={activeColumn === tabs.length - 1}
            >
              →
            </button>
          </nav>
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

          <div className="about-visual" aria-label="方若玉个人标识">
            <div className="monogram">FRY</div>
            <div className="visual-note">DESIGN × AI × CODE</div>
          </div>

          <div className="about-copy">
            <p className="lead">
              嗨，我是方若玉。<br />
              我把复杂业务，设计成清晰、可执行的体验。
            </p>
            <p>
              4 年+ 用户体验与交互设计经验，长期负责复杂业务系统、AI 产品及多终端体验设计，覆盖用户研究、需求分析、任务流程、信息架构到交互落地。
            </p>
            <p>
              我擅长从全链路视角抽象业务问题，也在用 vibe coding 把设计想法更快变成真实、可体验的产品。
            </p>
          </div>

          <dl className="profile-grid">
            <div>
              <dt>Focus</dt>
              <dd>AI 产品 · 复杂系统 · 多端体验</dd>
            </div>
            <div>
              <dt>Superpower</dt>
              <dd>从策略视角到像素级落地</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>创新交互设计硕士 · 工业设计本科</dd>
            </div>
            <div>
              <dt>Now</dt>
              <dd>高级体验设计师 · 上海</dd>
            </div>
          </dl>

          <div className="contact-row">
            <a className="primary-button" href="mailto:fangruoyu2023@163.com">
              发邮件聊聊 <span>↗</span>
            </a>
            <button
              className="secondary-button"
              type="button"
              onClick={() => navigator.clipboard?.writeText("fangruoyu2023@163.com")}
            >
              复制邮箱
            </button>
          </div>
        </section>

        <section className="column journey-column" data-column="1" aria-labelledby="journey-title">
          <div className="column-label">
            <span>02</span>
            <h2 id="journey-title">Career journey</h2>
            <span>点击经历展开</span>
          </div>

          <div className="journey-intro">
            <span className="big-number">04+</span>
            <p>年体验设计实践，从 B 端效率工具到 AI 原生产品。</p>
          </div>

          <div className="timeline">
            {jobs.map((job, index) => {
              const isOpen = activeJob === index;
              return (
                <article className={`job ${isOpen ? "is-open" : ""}`} key={job.company}>
                  <button
                    className="job-trigger"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setActiveJob(index)}
                  >
                    <span className="timeline-dot" aria-hidden="true" />
                    <span className="job-main">
                      <span className="job-company">{job.company}</span>
                      <span>{job.role}</span>
                    </span>
                    <span className="job-period">{job.period}</span>
                    <span className="expand-icon">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="job-detail">
                      <span className="job-team">{job.team}</span>
                      <p>{job.summary}</p>
                      <div className="linked-projects">
                        <span className="linked-label">对应作品</span>
                        {job.projects.map((projectId) => {
                          const project = projects.find((item) => item.id === projectId)!;
                          return (
                            <button key={project.id} type="button" onClick={() => setOpenProject(project)}>
                              <span className={`mini-accent ${project.accent}`} />
                              {project.title}
                              <span>↗</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="career-footer">
            <span>2021</span>
            <div />
            <span>NOW</span>
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
              <button
                type="button"
                className="project-card"
                key={project.id}
                onClick={() => setOpenProject(project)}
              >
                <div className={`project-cover ${project.accent}`}>
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-signal">{project.metric}</span>
                  <span className="cover-arrow">↗</span>
                </div>
                <div className="project-meta">
                  <span>{project.tag}</span>
                  <h3>{project.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>

      <footer className="footer-note">
        <span>© 2026 方若玉</span>
        <span>Designed & vibe coded with intention.</span>
      </footer>

      {openProject && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setOpenProject(null)}>
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className={`modal-banner ${openProject.accent}`}>
              <span>{openProject.tag}</span>
              <button type="button" aria-label="关闭项目详情" onClick={() => setOpenProject(null)}>
                ×
              </button>
              <strong>{openProject.metric}</strong>
            </div>
            <div className="modal-content">
              <span className="eyebrow">SELECTED CASE</span>
              <h2 id="project-modal-title">{openProject.title}</h2>
              <p className="modal-summary">{openProject.summary}</p>
              <div className="modal-info">
                <div>
                  <span>我的职责</span>
                  <p>{openProject.role}</p>
                </div>
                <div>
                  <span>作品状态</span>
                  <p>案例素材待接入</p>
                </div>
              </div>
              <div className="upload-placeholder">
                <span>PDF / IMAGE / CASE STUDY</span>
                <p>你提供作品文件后，这里会替换为完整案例内容。</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
