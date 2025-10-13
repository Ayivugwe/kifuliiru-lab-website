export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <h2 id="about-heading">About Kifuliiru Lab</h2>
      <p>
        <strong>Kifuliiru Lab</strong> is a specialized <strong>indigenous language preservation</strong> 
        research laboratory under <strong>Wekify LLC</strong>, dedicated to preserving and 
        revitalizing the <strong>Kifuliiru language</strong> through <strong>computational linguistics</strong> 
        and <strong>template-based generation</strong> methods. As part of Wekify's broader mission 
        to preserve <strong>endangered languages worldwide</strong>, we develop scalable methodologies 
        that combine <strong>computational linguistics</strong>, <strong>template-based content generation</strong>, 
        and <strong>community engagement</strong>.
      </p>
      <p>
        Our work demonstrates that <strong>systematic content generation</strong>, when paired with 
        <strong>native speaker validation</strong>, can produce <strong>educational materials</strong> 
        at unprecedented scale—transforming languages from minimal documentation to comprehensive 
        <strong>digital language ecosystems</strong>. This <strong>language preservation methodology</strong> 
        will be replicated across other <strong>language laboratories</strong> as Wekify expands 
        to serve additional <strong>endangered languages</strong>.
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
