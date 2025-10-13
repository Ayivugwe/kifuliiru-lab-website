export default function CulturalContext() {
  return (
    <section id="cultural-context" aria-labelledby="cultural-heading">
      <h2 id="cultural-heading">The Kifuliiru Language & People</h2>
      
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '1.3rem', color: '#4a9eff', marginBottom: '15px' }}>
          Language & People
        </h3>
        <p>
          <strong>Kifuliiru</strong> is the language spoken by the <strong>Bafuliiru</strong> (also known as 
          <strong> Abafuliiru</strong>) people. The Bafuliiru are the traditional inhabitants of 
          <strong> Ibufuliiru</strong>, their ancestral homeland and kingdom in <strong>Uvira, South Kivu</strong>, 
          Democratic Republic of Congo.
        </p>
        <p>
          The Kifuliiru language is part of the Bantu language family and is spoken by approximately 
          200,000-300,000 people in the <strong>Uvira region of South Kivu</strong>, Democratic Republic of Congo.
        </p>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '1.3rem', color: '#4a9eff', marginBottom: '15px' }}>
          Geographical & Political Hierarchy
        </h3>
        <div className="hierarchy-container">
          <div className="hierarchy-tree">
            <div><strong>🇨🇩 Democratic Republic of Congo (DRC)</strong></div>
            <div className="hierarchy-level-1">└── <strong>South Kivu Province</strong></div>
            <div className="hierarchy-level-2">└── <strong>Uvira Territory</strong></div>
            <div className="hierarchy-level-3">└── <strong>Ibufuliiru</strong> (Bafuliiru Kingdom/Chiefdom)</div>
            <div className="hierarchy-level-4">└── <strong>Bafuliiru/Abafuliiru</strong> (The People)</div>
            <div className="hierarchy-level-5">└── <strong>Kifuliiru</strong> (The Language)</div>
          </div>
        </div>
        <p>
          Ibufuliiru represents the traditional territory and cultural heartland of the Bafuliiru people 
          in <strong>Uvira, South Kivu</strong>, encompassing their historical kingdom and chiefdom structures 
          that have existed for centuries before colonial boundaries were established.
        </p>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '1.3rem', color: '#4a9eff', marginBottom: '15px' }}>
          Current Situation of Kifuliiru
        </h3>
        <p>
          <strong>Endangered Status:</strong> Kifuliiru is currently classified as a vulnerable language, 
          facing significant threats from urbanization, migration, and the dominance of French and Swahili 
          in education and official contexts.
        </p>
        <p>
          <strong>Documentation Gap:</strong> Prior to our work, Kifuliiru had minimal written documentation, 
          with no comprehensive dictionaries, grammar books, or educational materials available. This lack 
          of resources threatened the language's transmission to younger generations.
        </p>
        <p>
          <strong>Community Challenges:</strong> The Bafuliiru people face challenges in maintaining their 
          linguistic heritage due to limited access to education in their native language, economic pressures 
          that drive migration to urban centers, and the absence of digital content in Kifuliiru.
        </p>
        <p>
          <strong>Our Impact:</strong> Through our computational methods and community engagement, we have 
          created over 141,000 books in Kifuliiru, providing the Bafuliiru people with unprecedented access 
          to educational materials in their native language, helping to reverse the trend of language loss.
        </p>
      </div>

      <div className="cultural-significance">
        <h4 className="cultural-significance-title">
          Cultural Significance
        </h4>
        <p className="cultural-significance-text">
          "Kifuliiru kigayamaho" — "Kifuliiru will shine" — This traditional saying reflects the 
          Bafuliiru people's hope and determination to preserve their language and cultural identity 
          for future generations.
        </p>
      </div>
    </section>
  )
}
