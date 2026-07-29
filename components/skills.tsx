'use client'

import { motion } from 'framer-motion'

export function Skills() {
  const skillCategories = [
    {
      category: 'Marketing Platforms',
      skills: [
        'Google Analytics 4',
        'Google Ads',
        'Facebook Ads Manager',
        'LinkedIn Campaign Manager',
        'TikTok Ads',
        'Snapchat Ads',
      ],
    },
    {
      category: 'Marketing Automation',
      skills: ['HubSpot', 'Marketo', 'Active Campaign', 'Zapier', 'Make', 'Mailchimp'],
    },
    {
      category: 'Content & Analytics',
      skills: [
        'Content Calendar Management',
        'Data Studio',
        'Tableau',
        'Excel / Google Sheets',
        'Looker Studio',
        'Custom Dashboards',
      ],
    },
    {
      category: 'Social Media',
      skills: [
        'Instagram',
        'Facebook',
        'LinkedIn',
        'TikTok',
        'Twitter/X',
        'Pinterest',
      ],
    },
    {
      category: 'Design & Content',
      skills: ['Canva', 'Adobe Creative Suite', 'Figma', 'Video Editing', 'Copywriting', 'SEO'],
    },
    {
      category: 'Business Skills',
      skills: [
        'Strategic Planning',
        'Team Leadership',
        'Project Management',
        'Budget Management',
        'Client Relations',
        'Public Speaking',
      ],
    },
  ]

  const education = [
    {
      degree: 'Master in Digital Marketing',
      school: 'Digital Marketing Institute (Ireland)',
      year: '2020',
      certification: 'Certified Digital Marketer',
    },
    {
      degree: 'Bachelor in Business Administration',
      school: 'University of Tunis',
      year: '2018',
      focus: 'Marketing & Commerce',
    },
    {
      degree: 'Google Analytics Certification',
      school: 'Google Academy',
      year: '2021',
      certification: 'Google Analytics Certified Associate',
    },
    {
      degree: 'Facebook Blueprint Certification',
      school: 'Meta',
      year: '2022',
      certification: 'Certified Marketing Developer',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {/* Skills */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-medium text-primary">TECHNICAL SKILLS</span>
                <div className="h-1 w-12 bg-accent rounded-full mt-1" />
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
                Skills & Tools
              </h2>
            </motion.div>

            <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-background rounded-lg border border-border hover:border-primary transition-all"
                >
                  <h3 className="font-semibold text-foreground mb-4">{category.category}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-sm text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8 border-t border-border pt-16">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-medium text-primary">CREDENTIALS</span>
                <div className="h-1 w-12 bg-accent rounded-full mt-1" />
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
                Education & Certifications
              </h2>
            </motion.div>

            <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-background rounded-lg border border-border hover:border-primary transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{item.degree}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.school}</p>
                    </div>
                    <span className="text-sm font-medium text-primary flex-shrink-0">{item.year}</span>
                  </div>
                  {item.certification && (
                    <div className="mt-3 pt-3 border-t border-border">
                      <p className="text-xs text-accent font-medium">{item.certification}</p>
                    </div>
                  )}
                  {item.focus && (
                    <div className="mt-3 pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium">Focus:</span> {item.focus}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Languages */}
          <div className="border-t border-border pt-16">
            <motion.div variants={itemVariants} className="space-y-4 mb-8">
              <div className="inline-block">
                <span className="text-sm font-medium text-primary">LANGUAGES</span>
                <div className="h-1 w-12 bg-accent rounded-full mt-1" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground">Languages & Proficiency</h3>
            </motion.div>

            <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6">
              {[
                { language: 'Arabic', level: 'Native', proficiency: 100 },
                { language: 'French', level: 'Fluent', proficiency: 95 },
                { language: 'English', level: 'Fluent', proficiency: 90 },
              ].map((lang, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{lang.language}</h4>
                    <span className="text-xs font-medium text-muted-foreground">{lang.level}</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all"
                      style={{ width: `${lang.proficiency}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
