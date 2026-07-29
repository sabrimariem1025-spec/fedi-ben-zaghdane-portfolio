'use client'

import { motion } from 'framer-motion'

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary">WHO I AM</span>
              <div className="h-1 w-12 bg-accent rounded-full mt-1" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
              About Me
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a digital marketing specialist with a passion for turning data into growth. 
                With 5+ years of experience, I&apos;ve worked with startups, SMEs, and established brands 
                across multiple industries.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines creative strategy with data-driven execution. I focus on measurable 
                results—whether that&apos;s increased leads, higher engagement, or sustainable revenue growth.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">What I Do</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">→</span>
                    <span>Growth marketing strategy & execution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">→</span>
                    <span>Social media management & content strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">→</span>
                    <span>Paid advertising (Google Ads, Facebook, LinkedIn)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">→</span>
                    <span>Analytics & performance optimization</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Highlights */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border"
          >
            {[
              { label: 'Campaigns Run', value: '200+' },
              { label: 'ROI Avg', value: '300%+' },
              { label: 'Team Led', value: '15+' },
              { label: 'Languages', value: 'FR, EN, AR' },
            ].map((item, index) => (
              <div key={index} className="space-y-2 text-center">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                  {item.value}
                </p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
