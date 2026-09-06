import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { accomplishments } from '../config/accomplishments'
import styles from './Accomplishments.module.css'

function AccomplishmentModal({ item, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.modal}
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={e => e.stopPropagation()}
        >
          <div className={styles.modalHeader}>
            <span className={styles.modalEmoji}>{item.emoji}</span>
            <div>
              <h3 className={styles.modalTitle}>{item.title}</h3>
              <div className={styles.modalTags}>
                {item.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className={styles.modalBody}>
            {item.description.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Accomplishments() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="accomplishments" className={styles.section}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Work
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Tools I've built for real teams
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          I don't just ship features — I build the tools that make the whole team faster. Click any card to read more.
        </motion.p>

        {/* Stats bar */}
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <div className={styles.stat}>
            <span className={styles.statNum}>9</span>
            <span className={styles.statLabel}>Internal Tools Built</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>3</span>
            <span className={styles.statLabel}>VS Code / IDE Plugins</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>∞</span>
            <span className={styles.statLabel}>Hours Saved for Teammates</span>
          </div>
        </motion.div>

        {/* Card Grid */}
        <div className={styles.grid}>
          {accomplishments.map((item, i) => (
            <motion.button
              key={item.id}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 * i }}
              whileHover={{ y: -4, borderColor: 'var(--color-accent)' }}
              onClick={() => setSelected(item)}
            >
              <span className={styles.cardEmoji}>{item.emoji}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardTeaser}>{item.teaser}</p>
              <div className={styles.cardFooter}>
                <div className={styles.tags}>
                  {item.tags.slice(0, 2).map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <span className={styles.readMore}>Read more →</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {selected && <AccomplishmentModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
