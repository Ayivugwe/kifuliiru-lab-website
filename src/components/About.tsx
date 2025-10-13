export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <h2 id="about-heading">About Kifuliiru Lab</h2>
      <p>
        <strong>Kifuliiru Lab</strong> is a specialized <strong>Kifuliiru language preservation</strong> 
        research laboratory under <strong>Wekify LLC</strong>, dedicated to preserving and 
        revitalizing the <strong>Kifuliiru language</strong> spoken by the <strong>Bafuliiru people</strong> 
        of <strong>Ibufuliiru in Uvira, South Kivu</strong>, Democratic Republic of Congo. Through <strong>computational linguistics</strong> 
        and <strong>template-based generation</strong> methods, we work directly with the Bafuliiru community 
        to create comprehensive educational resources in their native language.
      </p>
      <p>
        Our work demonstrates that <strong>systematic content generation</strong>, when paired with 
        <strong>native speaker validation</strong> from the Bafuliiru community, can produce 
        <strong>educational materials</strong> at unprecedented scale—transforming the Kifuliiru language 
        from minimal documentation to a comprehensive <strong>digital language ecosystem</strong> including 
        <strong>websites, web applications, mobile apps, voice recordings, and connected resources</strong>. 
        This <strong>Kifuliiru language preservation methodology</strong> will be replicated across other 
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
          <span className="stat-number">4+</span>
          <span className="stat-label">Digital Platforms</span>
        </div>
        <div className="stat">
          <span className="stat-number">Voice</span>
          <span className="stat-label">Recordings Available</span>
        </div>
        <div className="stat">
          <span className="stat-number">2025</span>
          <span className="stat-label">Founded</span>
        </div>
      </div>
    </section>
  )
}
