// MinimalBio — Personal template
// Usage: <MinimalBio content={yourContent} />

const defaultContent = {
  name: 'Alex Morgan',
  title: 'Product Designer',
  location: 'San Francisco, CA',
  bio: "I design products that are simple, intuitive, and delightful to use. Currently at a fintech startup, previously at Google.",
  links: [
    { label: 'Twitter', url: '#' },
    { label: 'LinkedIn', url: '#' },
    { label: 'Dribbble', url: '#' },
  ],
  email: 'hello@alexmorgan.com',
}

export default function MinimalBio({ content = defaultContent }) {
  const c = { ...defaultContent, ...content }
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0d0d0d',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: "'Inter', -apple-system, sans-serif",
    }}>
      <div style={{ maxWidth: '480px', width: '100%', textAlign: 'center' }}>
        {/* Avatar placeholder */}
        <div style={{
          width: 80, height: 80,
          background: 'linear-gradient(135deg, #6c63ff, #00d4aa)',
          borderRadius: '50%',
          margin: '0 auto 1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '2rem', fontWeight: 800, color: 'white',
        }}>
          {c.name.charAt(0)}
        </div>

        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f0f0f0', margin: '0 0 0.25rem' }}>
          {c.name}
        </h1>
        <p style={{ fontSize: '1rem', color: '#6c63ff', fontWeight: 600, margin: '0 0 0.25rem' }}>
          {c.title}
        </p>
        <p style={{ fontSize: '0.85rem', color: '#666', margin: '0 0 1.5rem' }}>
          📍 {c.location}
        </p>
        <p style={{ fontSize: '1rem', color: '#aaa', lineHeight: 1.7, margin: '0 0 2rem' }}>
          {c.bio}
        </p>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {c.links.map(link => (
            <a key={link.label} href={link.url} style={{
              padding: '0.5rem 1.1rem',
              border: '1px solid #333',
              borderRadius: 9999,
              fontSize: '0.85rem',
              fontWeight: 500,
              color: '#aaa',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
              onMouseOver={e => { e.target.style.color = '#f0f0f0'; e.target.style.borderColor = '#666' }}
              onMouseOut={e => { e.target.style.color = '#aaa'; e.target.style.borderColor = '#333' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href={`mailto:${c.email}`} style={{
          display: 'inline-block',
          padding: '0.7rem 2rem',
          background: '#6c63ff',
          color: 'white',
          borderRadius: 8,
          fontWeight: 600,
          fontSize: '0.9rem',
          textDecoration: 'none',
        }}>
          Get in Touch
        </a>
      </div>
    </div>
  )
}
