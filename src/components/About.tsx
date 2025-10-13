export default function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <p>
        Kifuliiru Lab is a research subsidiary of Wekify LLC developing scalable methodologies 
        for indigenous language documentation and preservation. We combine computational 
        linguistics, template-based generation, and community engagement to create 
        comprehensive educational resources for under-resourced languages.
      </p>
      <p>
        Our work demonstrates that systematic content generation, when paired with native 
        speaker validation, can produce educational materials at unprecedented scale—transforming 
        languages from minimal documentation to comprehensive digital ecosystems.
      </p>

      {/* Stats */}
      <div className="stats">
        <div className="stat">
          <span className="stat-number">141,000+</span>
          <span className="stat-label">Books Generated</span>
        </div>
        <div className="stat">
          <span className="stat-number">8GB</span>
          <span className="stat-label">Training Data</span>
        </div>
        <div className="stat">
          <span className="stat-number">100%</span>
          <span className="stat-label">Community Validated</span>
        </div>
        <div className="stat">
          <span className="stat-number">3 Years</span>
          <span className="stat-label">Zero to Complete</span>
        </div>
      </div>
    </section>
  )
}
