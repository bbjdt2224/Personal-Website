import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { hobbies } from '../config/hobbies'
import styles from './Hobbies.module.css'

// Above this many photos, dot indicators get too cramped - rely on arrows + the counter instead.
const MAX_DOTS = 10

function CarouselDialog({ hobby, onClose }) {
  const [idx, setIdx] = useState(0)
  const photos = hobby.photos || []
  const hasPhotos = photos.length > 0
  const current = photos[idx]

  const prev = () => setIdx(i => (i - 1 + photos.length) % photos.length)
  const next = () => setIdx(i => (i + 1) % photos.length)

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.dialog}
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className={styles.dialogHeader}>
          <div className={styles.dialogTitleRow}>
            <span className={styles.dialogEmoji}>{hobby.emoji}</span>
            <div>
              <h3 className={styles.dialogTitle}>{hobby.name}</h3>
              {hasPhotos && (
                <span className={styles.dialogCount}>{idx + 1} / {photos.length}</span>
              )}
            </div>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Photo area */}
        <div className={styles.photoArea}>
          {hasPhotos ? (
            <>
              <AnimatePresence mode="wait">
                <motion.img
                  key={idx}
                  src={current.src || `/images/hobbies/${hobby.id}/${current.file}`}
                  alt={current.caption}
                  className={styles.photo}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>

              {/* Arrow nav */}
              {photos.length > 1 && (
                <>
                  <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </>
              )}

              {/* Dot indicators */}
              {photos.length > 1 && photos.length <= MAX_DOTS && (
                <div className={styles.dots}>
                  {photos.map((_, i) => (
                    <button
                      key={i}
                      className={`${styles.dot} ${i === idx ? styles.dotActive : ''}`}
                      onClick={() => setIdx(i)}
                      aria-label={`Photo ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className={styles.emptyPhoto}>
              <span className={styles.emptyEmoji}>{hobby.emoji}</span>
              <p className={styles.emptyText}>Photos coming soon</p>
            </div>
          )}
        </div>

        {/* Footer — description or per-photo details */}
        <div className={styles.dialogFooter}>
          {hasPhotos ? (
            <>
              {current.caption && <p className={styles.footerCaption}>{current.caption}</p>}
              {current.date && <span className={styles.footerDate}>{current.date}</span>}
              {current.details && <p className={styles.footerDetails}>{current.details}</p>}
            </>
          ) : (
            <p className={styles.footerDesc}>{hobby.description}</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

const PLACEHOLDER_HOBBIES = hobbies.map(h => h) // always use real config

export default function Hobbies() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="hobbies" className={styles.section}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Hobbies
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Life outside the screen
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          The same curiosity that drives my work fuels everything I do off the clock. Click any hobby to see photos.
        </motion.p>

        <div className={styles.grid}>
          {hobbies.map((hobby, i) => (
            <motion.button
              key={hobby.id}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.07 * i }}
              whileHover={{ y: -4, borderColor: hobby.color }}
              onClick={() => setSelected(hobby)}
              style={{ '--hobby-color': hobby.color }}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardEmoji}>{hobby.emoji}</span>
                {hobby.photos.length > 0 && (
                  <span className={styles.photoCount}>{hobby.photos.length} photo{hobby.photos.length !== 1 ? 's' : ''}</span>
                )}
              </div>
              <h3 className={styles.cardName}>{hobby.name}</h3>
              <p className={styles.cardDesc}>{hobby.description}</p>
              <span className={styles.viewPhotos}>
                View photos
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <CarouselDialog hobby={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
