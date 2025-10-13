export default function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <p>
        Kifuliiru Lab is a specialized research laboratory under Wekify LLC, dedicated to 
        preserving and revitalizing the Kifuliiru language through computational methods. 
        As part of Wekify's broader mission to preserve endangered languages worldwide, 
        we develop scalable methodologies that combine computational linguistics, 
        template-based generation, and community engagement.
      </p>
      <p>
        Our work demonstrates that systematic content generation, when paired with native 
        speaker validation, can produce educational materials at unprecedented scale—transforming 
        languages from minimal documentation to comprehensive digital ecosystems. This 
        methodology will be replicated across other language laboratories as Wekify 
        expands to serve additional endangered languages.
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
