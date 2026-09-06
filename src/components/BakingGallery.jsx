import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { bakingItems, bakingCategories } from '../config/baking'
import styles from './BakingGallery.module.css'

function Lightbox({ item, onClose }) {
  const [photoIdx, setPhotoIdx] = useState(0)
  const photos = item.photos || []

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.lightbox}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.lbClose} onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {photos.length > 0 ? (
          <>
            <img
              src={`/images/baking/${photos[photoIdx]}`}
              alt={item.name}
              className={styles.lbImg}
            />
            {photos.length > 1 && (
              <div className={styles.lbNav}>
                {photos.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.lbDot} ${i === photoIdx ? styles.lbDotActive : ''}`}
                    onClick={() => setPhotoIdx(i)}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className={styles.lbPlaceholder}>📸 Photo coming soon</div>
        )}

        <div className={styles.lbInfo}>
          <h3 className={styles.lbTitle}>{item.name}</h3>
          <span className={styles.lbMeta}>{item.category} · {item.date}</span>
          {item.description && <p className={styles.lbDesc}>{item.description}</p>}
        </div>
      </motion.div>
    </motion.div>
  )
}

const PLACEHOLDER_ITEMS = [
  { id: 'p1', name: 'Sourdough Loaf', category: 'Bread', date: '2024', photos: [], description: 'Classic country sourdough with a crispy crust.' },
  { id: 'p2', name: 'Butter Croissants', category: 'Pastry', date: '2024', photos: [], description: 'Laminated dough, 3-day process.' },
  { id: 'p3', name: 'Chocolate Babka', category: 'Bread', date: '2023', photos: [], description: 'Swirled chocolate babka with a syrup glaze.' },
  { id: 'p4', name: 'Almond Tart', category: 'Pastry', date: '2023', photos: [], description: 'Frangipane almond filling in a shortcrust shell.' },
  { id: 'p5', name: 'Cinnamon Rolls', category: 'Pastry', date: '2024', photos: [], description: 'Cardamom and cinnamon in a brioche dough.' },
  { id: 'p6', name: 'Focaccia', category: 'Bread', date: '2024', photos: [], description: 'Herb and olive oil focaccia, dimpled and fluffy.' },
]

export default function BakingGallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selected, setSelected] = useState(null)

  const displayItems = bakingItems.length > 0 ? bakingItems : PLACEHOLDER_ITEMS

  const filtered = activeCategory === 'All'
    ? displayItems
    : displayItems.filter(item => item.category === activeCategory)

  const usedCategories = ['All', ...new Set(displayItems.map(i => i.category))]

  return (
    <section id="baking" className={styles.section}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Baking
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Made by hand, with patience
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Baking and coding have more in common than you'd think — both require precision, patience, and the willingness to start over when things go wrong.
        </motion.p>

        {/* Category filter */}
        <motion.div
          className={styles.filters}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          {usedCategories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <div className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.button
                key={item.id}
                className={styles.photoCard}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: 0.04 * i }}
                whileHover="hover"
                onClick={() => setSelected(item)}
              >
                <div className={styles.photoInner}>
                  {item.photos && item.photos.length > 0 ? (
                    <img src={`/images/baking/${item.photos[0]}`} alt={item.name} className={styles.photoImg} />
                  ) : (
                    <div className={styles.photoPlaceholder}>
                      <span className={styles.photoEmoji}>🍞</span>
                    </div>
                  )}
                  <motion.div
                    className={styles.photoOverlay}
                    variants={{ hover: { opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className={styles.photoName}>{item.name}</span>
                    <span className={styles.photoCat}>{item.category} · {item.date}</span>
                  </motion.div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {bakingItems.length === 0 && (
          <p className={styles.addPhotosNote}>
            📸 Add your baking photos to <code>src/config/baking.js</code> and place images in <code>public/images/baking/</code>
          </p>
        )}
      </div>

      <AnimatePresence>
        {selected && <Lightbox item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
