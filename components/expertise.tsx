'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Target, BarChart3, MessageSquare, Zap, Users } from 'lucide-react'

export function Expertise() {
  const skills = [
    {
      icon: TrendingUp,
      title: 'Growth Marketing',
      description: 'Data-driven strategies to scale businesses sustainably. From lead generation to customer retention.',
      details: ['Funnel optimization', 'Conversion rate optimization', 'Growth experiments', 'Retention strategies'],
    },
    {
      icon: Target,
      title: 'Paid Advertising',
      description: 'Strategic ad campaigns across Google Ads, Facebook, LinkedIn, and TikTok with proven ROI.',
      details: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Campaign optimization'],
    },
    {
      icon: MessageSquare,
      title: 'Social Media Strategy',
      description: 'Content strategy and management that builds engaged communities and drives brand awareness.',
      details: ['Content calendar', 'Community management', 'Influencer outreach', 'Crisis management'],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Transform data into actionable insights. GA4, custom dashboards, and strategic recommendations.',
      details: ['GA4 implementation', 'Custom dashboards', 'A/B testing', 'Attribution modeling'],
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Streamline workflows with HubSpot, Marketo, and Zapier to scale operations efficiently.',
      details: ['Email marketing', 'Workflow automation', 'Lead scoring', 'CRM management'],
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Built and mentored high-performing marketing teams. Strong background in staff training and development.',
      details: ['Team building', 'Mentoring', 'Process optimization', 'Cross-functional collaboration'],
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
    <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary">MY STRENGTHS</span>
              <div className="h-1 w-12 bg-accent rounded-full mt-1 mx-auto" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
              Areas of Expertise
            </h2>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group p-6 bg-background rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                    {skill.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {skill.description}
                  </p>

                  <ul className="space-y-2">
                    {skill.details.map((detail, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Marketing Process */}
          <motion.div variants={itemVariants} className="mt-16 pt-16 border-t border-border">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              My Marketing Process
            </h3>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                {
                  step: '01',
                  title: 'Analyze',
                  description: 'Deep dive into your business, market, and competition',
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description: 'Develop comprehensive, goal-aligned marketing strategy',
                },
                {
                  step: '03',
                  title: 'Execute',
                  description: 'Implement campaigns across chosen channels with precision',
                },
                {
                  step: '04',
                  title: 'Optimize',
                  description: 'Continuously test, measure, and refine for maximum impact',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative p-6 bg-background rounded-lg border border-border hover:border-primary transition-all"
                >
                  <div className="text-4xl font-serif font-bold text-primary/20 mb-3">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>

                  {index < 3 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 text-2xl text-primary/30">
                      →
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
