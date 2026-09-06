import { motion } from 'framer-motion'
import styles from './About.module.css'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

const traits = [
  { icon: '🏔️', label: 'Backpacker', detail: 'Adirondacks, Smokies & beyond' },
  { icon: '🍞', label: 'Baker', detail: 'Sourdough, pastry & everything in between' },
  { icon: '🏰', label: 'Disney Fan', detail: 'Annual passholder' },
  { icon: '🔴', label: 'Kickball Captain', detail: 'Rec league team captain' },
  { icon: '🌍', label: 'World Traveler', detail: 'Always planning the next trip' },
  { icon: '🏃', label: 'Runner', detail: 'Always training for the next one' },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <motion.p className="section-label" {...fadeUp}>About Me</motion.p>

        <div className={styles.grid}>
          {/* Bio */}
          <div className={styles.bioCol}>
            <motion.h2 className="section-title" {...fadeUp} transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}>
              Developer, designer,<br />and relentless builder.
            </motion.h2>
            <motion.div className={styles.bio} {...fadeUp} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
              <p>
                I'm a UI developer based in Tampa, FL with a passion for crafting beautiful,
                intuitive interfaces that make people's lives easier. I believe great software
                isn't just functional — it's an experience. From the pixel-perfect detail of a
                component to the full flow of an application, I care deeply about every interaction
                a user has with the products I build.
              </p>
              <p>
                With experience across the full frontend stack — TypeScript, React, Figma,
                and beyond — I bring both the technical depth to execute and the design sensitivity
                to make it feel right. I've built internal developer tools, AI-powered workflows,
                and production component libraries used by real teams daily.
              </p>
            </motion.div>
          </div>

          {/* What Drives Me */}
          <motion.div
            className={styles.driveCol}
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.driveCard}>
              <span className={styles.driveIcon}>💡</span>
              <h3 className={styles.driveTitle}>What Drives Me</h3>
              <p className={styles.driveText}>
                My goal is to help people through thoughtful design and well-built software.
                Whether it's an internal tool that saves a developer hours every week, a component
                library that raises the quality bar for an entire team, or a personal app that
                makes a friend's day easier — I want the software I build to feel effortless and human.
              </p>
              <p className={styles.driveText}>
                Beautiful interfaces aren't a luxury. They're how we show people they matter.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Personality Traits */}
        <motion.div
          className={styles.traits}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className={styles.traitsLabel}>Outside of code</p>
          <div className={styles.traitsGrid}>
            {traits.map((trait, i) => (
              <motion.div
                key={trait.label}
                className={styles.traitCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                whileHover={{ y: -4, borderColor: 'var(--color-accent)' }}
              >
                <span className={styles.traitIcon}>{trait.icon}</span>
                <span className={styles.traitLabel}>{trait.label}</span>
                <span className={styles.traitDetail}>{trait.detail}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
