// RecipeBlog — Warm food photography-focused blog
const defaultContent = {
  name: 'The Salted Table',
  tagline: 'Simple food, made beautifully.',
  description: 'A collection of recipes that celebrate real ingredients and honest cooking.',
  recipes: [
    { title: 'Caramelized Onion Pasta', time: '45 min', difficulty: 'Easy', emoji: '🍝' },
    { title: 'Lemon Herb Roasted Chicken', time: '1h 20m', difficulty: 'Medium', emoji: '🍗' },
    { title: 'Brown Butter Banana Bread', time: '1h', difficulty: 'Easy', emoji: '🍌' },
  ],
  categories: ['Breakfast', 'Dinner', 'Baking', 'Vegetarian'],
}

export default function RecipeBlog({ content = defaultContent }) {
  const c = { ...defaultContent, ...content }
  return (
    <div style={{ fontFamily: "'Georgia', serif", background: '#fef9ef', minHeight: '100vh', color: '#2c2c2c' }}>
      {/* Header */}
      <header style={{ textAlign: 'center', padding: '2.5rem 2rem 2rem', borderBottom: '1px solid #ede5d5' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#2c2c2c', marginBottom: '0.25rem' }}>{c.name}</h1>
        <p style={{ fontStyle: 'italic', color: '#a07050', fontSize: '0.95rem', fontFamily: "'Georgia', serif" }}>{c.tagline}</p>
      </header>

      {/* Category Nav */}
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', padding: '1rem 2rem', borderBottom: '1px solid #ede5d5', background: 'white', flexWrap: 'wrap' }}>
        {c.categories.map((cat, i) => (
          <a key={i} href="#" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 500, color: i === 0 ? '#c75c2f' : '#888', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            {cat}
          </a>
        ))}
      </nav>

      {/* Hero text */}
      <div style={{ maxWidth: 600, margin: '2.5rem auto', padding: '0 2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1.05rem', color: '#6b5a4a', lineHeight: 1.8 }}>{c.description}</p>
      </div>

      {/* Recipe Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', padding: '0 2rem 3rem', maxWidth: 800, margin: '0 auto' }}>
        {c.recipes.map((recipe, i) => (
          <div key={i} style={{
            background: 'white',
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            cursor: 'pointer',
          }}>
            <div style={{
              height: 120,
              background: `hsl(${30 + i * 20}, 60%, 92%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
            }}>
              {recipe.emoji}
            </div>
            <div style={{ padding: '1rem' }}>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#2c2c2c', marginBottom: '0.5rem', lineHeight: 1.3 }}>{recipe.title}</h3>
              <div style={{ display: 'flex', gap: '0.75rem', fontFamily: "'Inter', sans-serif" }}>
                <span style={{ fontSize: '0.72rem', color: '#a07050' }}>⏱ {recipe.time}</span>
                <span style={{ fontSize: '0.72rem', color: '#a07050' }}>· {recipe.difficulty}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
