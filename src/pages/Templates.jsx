import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Templates.module.css'

import MinimalBio from '../templates/personal/MinimalBio'
import CreativePortfolio from '../templates/personal/CreativePortfolio'
import GymLanding from '../templates/fitness/GymLanding'
import YogaRetreat from '../templates/fitness/YogaRetreat'
import RecipeBlog from '../templates/cooking/RecipeBlog'
import BakeryCafe from '../templates/cooking/BakeryCafe'
import AgencyLanding from '../templates/business/AgencyLanding'
import FreelancerCard from '../templates/business/FreelancerCard'

const CATEGORIES = ['All', 'Personal', 'Fitness', 'Cooking', 'Business']

const TEMPLATES = [
  {
    id: 'minimal-bio',
    name: 'Minimal Bio',
    category: 'Personal',
    description: 'A clean, focused personal landing page. Perfect for professionals who want to make a strong first impression with minimal distraction.',
    palette: ['#0d0d0d', '#f0f0f0', '#6c63ff'],
    component: MinimalBio,
  },
  {
    id: 'creative-portfolio',
    name: 'Creative Portfolio',
    category: 'Personal',
    description: 'A bold, image-heavy portfolio template for creatives. Designed to let your work do the talking.',
    palette: ['#1a0a2e', '#e040fb', '#00e5ff'],
    component: CreativePortfolio,
  },
  {
    id: 'gym-landing',
    name: 'Gym Landing',
    category: 'Fitness',
    description: 'An energetic, dark landing page for gyms and fitness coaches. High-impact typography with strong CTAs.',
    palette: ['#0a0a0a', '#ff6b35', '#ffffff'],
    component: GymLanding,
  },
  {
    id: 'yoga-retreat',
    name: 'Yoga Retreat',
    category: 'Fitness',
    description: 'A serene, minimal wellness page with soft tones and calming layout. Perfect for yoga studios and wellness coaches.',
    palette: ['#f9f5ef', '#a8927a', '#4a4238'],
    component: YogaRetreat,
  },
  {
    id: 'recipe-blog',
    name: 'Recipe Blog',
    category: 'Cooking',
    description: 'A warm, inviting food blog template with beautiful recipe cards and photography-first layout.',
    palette: ['#fef9ef', '#c75c2f', '#2c2c2c'],
    component: RecipeBlog,
  },
  {
    id: 'bakery-cafe',
    name: 'Bakery & Café',
    category: 'Cooking',
    description: 'A charming, artisan-feel landing page for bakeries and cafés. Warm tones with a handcrafted aesthetic.',
    palette: ['#fdf6e8', '#8b5e3c', '#d4a76a'],
    component: BakeryCafe,
  },
  {
    id: 'agency-landing',
    name: 'Agency Landing',
    category: 'Business',
    description: 'A bold, conversion-focused landing page for agencies and studios. Strong visual hierarchy with clear CTAs.',
    palette: ['#0f0f0f', '#970c10', '#f5f5f5'],
    component: AgencyLanding,
  },
  {
    id: 'freelancer-card',
    name: 'Freelancer Card',
    category: 'Business',
    description: 'A clean, elegant personal brand page for freelancers and consultants. Focuses on trust and credibility.',
    palette: ['#f8f8f8', '#1a1a1a', '#0066cc'],
    component: FreelancerCard,
  },
]

function TemplateModal({ template, onClose }) {
  const Component = template.component
  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.previewModal}
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={e => e.stopPropagation()}
      >
        <div className={styles.previewHeader}>
          <div>
            <h3 className={styles.previewTitle}>{template.name}</h3>
            <span className={styles.previewCategory}>{template.category}</span>
          </div>
          <button className={styles.previewClose} onClick={onClose}>×</button>
        </div>
        <div className={styles.previewFrame}>
          <div className={styles.previewInner}>
            <Component />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Templates() {
  const [category, setCategory] = useState('All')
  const [preview, setPreview] = useState(null)

  const filtered = category === 'All'
    ? TEMPLATES
    : TEMPLATES.filter(t => t.category === category)

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <Link to="/" className={styles.back}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
          <h1 className={styles.pageTitle}>Website Templates</h1>
          <p className={styles.pageSubtitle}>
            8 responsive, production-ready website templates. Each is a React component that accepts a content props object, and also available as standalone HTML/CSS.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        {/* Filters */}
        <div className={styles.filters}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${category === cat ? styles.filterBtnActive : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Template Grid */}
        <div className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filtered.map((template, i) => (
              <motion.div
                key={template.id}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: 0.06 * i }}
                whileHover={{ y: -4 }}
              >
                {/* Color palette preview */}
                <div className={styles.cardPreview}>
                  <div className={styles.palette}>
                    {template.palette.map(color => (
                      <div key={color} className={styles.paletteColor} style={{ background: color }} />
                    ))}
                  </div>
                  <span className={styles.cardCategory}>{template.category}</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardName}>{template.name}</h3>
                  <p className={styles.cardDesc}>{template.description}</p>

                  <div className={styles.cardActions}>
                    <button
                      className={styles.previewBtn}
                      onClick={() => setPreview(template)}
                    >
                      Preview
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {preview && <TemplateModal template={preview} onClose={() => setPreview(null)} />}
      </AnimatePresence>
    </div>
  )
}
