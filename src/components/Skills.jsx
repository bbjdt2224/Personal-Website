import { motion } from 'framer-motion'
import { devSkills, softSkills } from '../config/skills'
import styles from './Skills.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <motion.p className="section-label" {...fadeUp()}>Skills</motion.p>
        <motion.h2 className="section-title" {...fadeUp(0.05)}>
          What I bring to the table
        </motion.h2>
        <motion.p className="section-subtitle" {...fadeUp(0.1)}>
          A technical foundation built over years of shipping real products, combined with the soft skills to collaborate, lead, and communicate effectively.
        </motion.p>

        {/* Dev Skills Grid */}
        <motion.div
          className={styles.devGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          {devSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className={styles.skillCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              whileHover={{ y: -4, borderColor: 'var(--color-accent)', boxShadow: 'var(--shadow-accent)' }}
            >
              <div className={styles.skillIcon}>
                <img src={skill.icon} alt={skill.name} onError={e => { e.currentTarget.style.display = 'none' }} />
              </div>
              <span className={styles.skillName}>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div className={styles.softSection} {...fadeUp(0.2)}>
          <p className={styles.softLabel}>Soft Skills</p>
          <div className={styles.chips}>
            {softSkills.map((skill, i) => (
              <motion.span
                key={skill}
                className={styles.chip}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
