import { SectionCover } from '../components/SectionCover'
import { projectStatusClass, projects } from '../data/projectsData'

export function ProjectsPage() {
  return (
    <>
      <SectionCover
        eyebrow="Projects / Portfolio"
        title="营造"
        quote="「九层之台，起于累土。」——《老子·第六十四章》"
        intro="九层之台是一筐土一筐土垒起来的。这里是我在做的事情的完整清单：做了什么、怎么做的、学到什么。状态和亮点随实际进展更新，不写空头支票。"
        stats={[{ value: projects.length, label: '个项目 · 边做边学' }]}
        cueHref="#projects-content"
      />
      <section className="content-band after-cover" id="projects-content">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.id}>
            <div className="project-card-topline">
              <span className={`project-status ${projectStatusClass[project.status]}`}>
                {project.status}
              </span>
              <b>{String(index + 1).padStart(2, '0')}</b>
            </div>
            <h2>{project.name}</h2>
            <p className="project-tagline">{project.tagline}</p>
            <p className="project-description">{project.description}</p>
            <div className="project-stack-row">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="project-highlights">
              <span>亮点</span>
              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div className="project-links">
              {project.liveUrl ? (
                <a className="review-btn ghost review-btn-small" href={project.liveUrl} target="_blank" rel="noreferrer">
                  访问 ↗
                </a>
              ) : null}
              {project.repoUrl ? (
                <a className="review-btn ghost review-btn-small" href={project.repoUrl} target="_blank" rel="noreferrer">
                  仓库 ↗
                </a>
              ) : null}
              <em className="project-year">{project.year}</em>
            </div>
          </article>
        ))}
      </div>
      </section>
    </>
  )
}
