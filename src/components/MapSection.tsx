export default function MapSection() {
  return (
    <div style={{ padding: 0, lineHeight: 0 }}>
      <iframe
        className="map-iframe"
        src="https://maps.google.com/maps?q=Deputado%20Honorato%20de%20Carvalho%2C%20947&t=m&z=16&output=embed&iwloc=near"
        title="Deputado Honorato de Carvalho, 947"
        loading="lazy"
        allowFullScreen
      />
    </div>
  )
}
