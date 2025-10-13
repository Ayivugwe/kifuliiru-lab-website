export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <h2 id="about-heading">About Kifuliiru Lab</h2>
      <p>
        <strong>Kifuliiru Lab</strong> is a specialized <strong>indigenous language preservation</strong> 
        research laboratory under <strong>Wekify LLC</strong>, dedicated to preserving and 
        revitalizing the <strong>Kifuliiru language</strong> spoken by the <strong>Bafuliiru people</strong> 
        of <strong>Ibufuliiru</strong> in the Democratic Republic of Congo. Through <strong>computational linguistics</strong> 
        and <strong>template-based generation</strong> methods, we work directly with the Bafuliiru community 
        to create comprehensive educational resources in their native language.
      </p>
      <p>
        Our work demonstrates that <strong>systematic content generation</strong>, when paired with 
        <strong>native speaker validation</strong> from the Bafuliiru community, can produce 
        <strong>educational materials</strong> at unprecedented scale—transforming the Kifuliiru language 
        from minimal documentation to a comprehensive <strong>digital language ecosystem</strong>. 
        This <strong>language preservation methodology</strong> will be replicated across other 
        <strong>language laboratories</strong> as Wekify expands to serve additional 
        <strong>endangered languages</strong> and their communities.
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
