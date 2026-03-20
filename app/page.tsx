export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--navy)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(32px, 4vw, 56px)',
        color: 'var(--off-white)',
        fontStyle: 'italic',
        opacity: 0.5,
      }}>
        Landing page coming soon
      </h1>
    </div>
  )
}
