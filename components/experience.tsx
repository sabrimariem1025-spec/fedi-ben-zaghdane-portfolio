'use client'

import { motion } from 'framer-motion'

export function Experience() {
  const experiences = [
    {
      year: 'July 2024 - Present',
      title: 'Digital Marketer',
      company: 'DEVAXON',
      location: 'Tunisia',
      description: 'Digital marketing professional responsible for supporting the company\'s digital presence, creating marketing content, managing online communication and contributing to marketing performance improvement.',
      achievements: [
        'Develop and execute digital marketing actions to improve brand visibility',
        'Create and manage social media content plans across multiple platforms',
        'Design marketing visuals and communication materials using creative tools',
        'Monitor digital performance indicators and analyze campaign results',
        'Provide UI/UX support for web and mobile interfaces through wireframes and mockups',
      ],
    },
    {
      year: 'June 2023 - June 2024',
      title: 'Marketing Manager',
      company: 'Authentic Tourism Federation – Destination Dahar (FTADD)',
      location: 'Tunisia',
      description: 'Marketing Manager responsible for promoting Destination Dahar through digital communication strategies, tourism marketing initiatives and coordination with local stakeholders.',
      achievements: [
        'Developed marketing strategies to promote the Dahar destination',
        'Created communication plans highlighting cultural, heritage and tourism assets',
        'Managed social media communication and digital content for tourism promotion',
        'Participated in the creation of promotional campaigns',
        'Analyzed audience feedback and engagement to improve communication strategies',
      ],
    },
    {
      year: '2017 - 2022',
      title: 'Active Member & Leadership Development',
      company: 'Les Scouts Tunisiens',
      location: 'Tunisia',
      description: 'Active participation in Tunisian Scouts activities, developing leadership, teamwork and community engagement skills through youth and community service.',
      achievements: [
        'Participated in youth and community development activities',
        'Developed strong teamwork and communication abilities',
        'Contributed to organizing group activities and events',
        'Built leadership, responsibility and problem-solving skills',
        'Worked effectively within multidisciplinary teams',
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
