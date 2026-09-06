import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { travelLocations } from '../config/travel'
import styles from './TravelMap.module.css'

// Bounds covering North America (incl. Hawaii) + Europe
const MAP_BOUNDS = [[10, -170], [75, 55]]
const MAP_CENTER = [42, -45]
const MAP_ZOOM = 3

// Above this many photos, dot indicators get too cramped - rely on arrows + the counter instead.
const MAX_DOTS = 10

// --- Photo Carousel Dialog ---
function PhotoDialog({ location, onClose }) {
  const [idx, setIdx] = useState(0)
  const photos = location.photos || []
  const hasPhotos = photos.length > 0
  const current = photos[idx]

  const prev = (e) => { e.stopPropagation(); setIdx(i => (i - 1 + photos.length) % photos.length) }
  const next = (e) => { e.stopPropagation(); setIdx(i => (i + 1) % photos.length) }

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
          <div>
            <h3 className={styles.dialogTitle}>
              📍 {location.name}
            </h3>
            <span className={styles.dialogMeta}>
              {location.country} · {location.year}
              {hasPhotos && ` · ${idx + 1} / ${photos.length}`}
            </span>
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
                  src={`/images/travel/${location.id}/${current.file}`}
                  alt={current.caption}
                  className={styles.photo}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>

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
                  {photos.length <= MAX_DOTS && (
                    <div className={styles.dots}>
                      {photos.map((_, i) => (
                        <button
                          key={i}
                          className={`${styles.dot} ${i === idx ? styles.dotActive : ''}`}
                          onClick={e => { e.stopPropagation(); setIdx(i) }}
                          aria-label={`Photo ${i + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            <div className={styles.emptyPhoto}>
              <span className={styles.emptyIcon}>✈️</span>
              <p className={styles.emptyText}>Photos coming soon</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={styles.dialogFooter}>
          {hasPhotos ? (
            <>
              {current.caption && <p className={styles.footerCaption}>{current.caption}</p>}
              {current.date && <span className={styles.footerDate}>{current.date}</span>}
              {current.details && <p className={styles.footerDetails}>{current.details}</p>}
            </>
          ) : (
            location.description && <p className={styles.footerDesc}>{location.description}</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

// --- Leaflet Map ---
let MapContainer, TileLayer, Marker, L
let leafletLoaded = false

function MapContent({ locations, onSelect, selected }) {
  const [loaded, setLoaded] = useState(leafletLoaded)

  useEffect(() => {
    if (leafletLoaded) return
    Promise.all([
      import('react-leaflet'),
      import('leaflet'),
      import('leaflet/dist/leaflet.css'),
    ]).then(([rl, leaflet]) => {
      MapContainer = rl.MapContainer
      TileLayer = rl.TileLayer
      Marker = rl.Marker
      L = leaflet.default

      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      })

      leafletLoaded = true
      setLoaded(true)
    })
  }, [])

  if (!loaded || !MapContainer) return <div className={styles.mapPlaceholder}>Loading map…</div>

  const pinIcon = (isSelected) => L.divIcon({
    className: '',
    html: `<div style="
      width: ${isSelected ? 16 : 12}px;
      height: ${isSelected ? 16 : 12}px;
      background: #970c10;
      border: 2.5px solid ${isSelected ? '#fff' : 'rgba(255,255,255,0.8)'};
      border-radius: 50%;
      box-shadow: 0 0 0 ${isSelected ? '4px' : '2px'} rgba(151,12,16,0.35), 0 2px 6px rgba(0,0,0,0.5);
      cursor: pointer;
      transition: all 0.15s;
    "></div>`,
    iconSize: [isSelected ? 16 : 12, isSelected ? 16 : 12],
    iconAnchor: [isSelected ? 8 : 6, isSelected ? 8 : 6],
  })

  return (
    <MapContainer
      center={MAP_CENTER}
      zoom={MAP_ZOOM}
      minZoom={2}
      maxZoom={7}
      maxBounds={MAP_BOUNDS}
      maxBoundsViscosity={0.85}
      scrollWheelZoom={false}
      zoomControl={false}
      dragging={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        className={styles.tileLayer}
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map(loc => (
        <Marker
          key={loc.id}
          position={[loc.lat, loc.lng]}
          icon={pinIcon(selected?.id === loc.id)}
          eventHandlers={{ click: () => onSelect(loc) }}
        />
      ))}
    </MapContainer>
  )
}

// --- Main Component ---
export default function TravelMap() {
  const [selected, setSelected] = useState(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const chipListRef = useRef(null)

  const handleSelect = (loc) => {
    setSelected(loc)
    setDialogOpen(true)
  }

  const scrollChips = (dir) => {
    chipListRef.current?.scrollBy({ left: dir * 240, behavior: 'smooth' })
  }

  useEffect(() => {
    if (!selected || !chipListRef.current) return
    const chip = chipListRef.current.querySelector(`[data-id="${selected.id}"]`)
    chip?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [selected])

  return (
    <section id="travel" className={styles.section}>
      <div className="container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Travel
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Places I've explored
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          From the peaks of the Adirondacks to the trails of the Smokies — click a pin to see photos and stories.
        </motion.p>
      </div>

      <motion.div
        className={styles.mapWrap}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        <MapContent locations={travelLocations} onSelect={handleSelect} selected={selected} />
        <div className={styles.scrollHint}>Drag to pan · Click a pin for photos</div>
      </motion.div>

      {/* Location chips */}
      <div className="container">
        <motion.div
          className={styles.locationRow}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button className={styles.chipNav} onClick={() => scrollChips(-1)} aria-label="Scroll locations left">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className={styles.locationList} ref={chipListRef}>
            {travelLocations.map(loc => (
              <button
                key={loc.id}
                data-id={loc.id}
                className={`${styles.locationChip} ${selected?.id === loc.id ? styles.locationChipActive : ''}`}
                onClick={() => handleSelect(loc)}
              >
                📍 {loc.name}
              </button>
            ))}
          </div>
          <button className={styles.chipNav} onClick={() => scrollChips(1)} aria-label="Scroll locations right">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {dialogOpen && selected && (
          <PhotoDialog
            location={selected}
            onClose={() => { setDialogOpen(false) }}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
