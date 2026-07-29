'use client'

import { motion } from 'framer-motion'

export function Experience() {
  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Digital Marketing Manager',
      company: 'Tech Innovations Ltd',
      location: 'Dubai, UAE',
      description: 'Leading digital strategy and execution for tech-focused B2B SaaS platform. Grew lead generation by 250% YoY.',
      achievements: [
        'Built and scaled marketing team from 0 to 5',
        'Implemented full-funnel marketing automation',
        'Managed $500K+ annual marketing budget',
      ],
    },
    {
      year: '2022 - 2023',
      title: 'Marketing Manager',
      company: 'E-Commerce Solutions',
      location: 'Tunis, Tunisia',
      description: 'Managed all digital marketing channels for fast-growing e-commerce platform. Increased customer acquisition by 180%.',
      achievements: [
        'Launched 5 successful product campaigns',
        'Optimized ad spend, reducing CPA by 35%',
        'Built organic social following from 0 to 50K',
      ],
    },
    {
      year: '2021 - 2022',
      title: 'Digital Marketing Specialist',
      company: 'Brand Studio MENA',
      location: 'Tunis, Tunisia',
      description: 'Specialized in social media management and paid advertising for MENA region clients.',
      achievements: [
        'Managed 20+ client accounts simultaneously',
        'Average client ROI improvement: 280%',
        'Created 100+ social media campaigns',
      ],
    },
    {
      year: '2020 - 2021',
      title: 'Junior Marketing Executive',
      company: 'Digital First Agency',
      location: 'Tunis, Tunisia',
      description: 'Started career in digital marketing, learning across all channels and tactics.',
      achievements: [
        'Developed expertise in all digital marketing channels',
        'Supported 15+ client onboarding projects',
        'Trained in Google Analytics and marketing automation',
      ],
    },
  ]

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
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
              <span className="text-sm font-medium text-primary">CAREER PATH</span>
              <div className="h-1 w-12 bg-accent rounded-full mt-1" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
              Experience
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 pb-8 border-l-2 border-primary last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-4 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background" />

                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-primary mt-2 md:mt-0 md:text-right">
                      {exp.year}
                    </p>
                  </div>

                  <p className="text-muted-foreground mt-3">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-accent font-bold flex-shrink-0 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
