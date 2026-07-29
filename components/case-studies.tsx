'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function CaseStudies() {
  const [expandedId, setExpandedId] = useState<string | null>('case-1')

  const caseStudies = [
    {
      id: 'case-1',
      title: 'Tech SaaS: 250% Lead Growth',
      company: 'CloudSync Technologies',
      challenge: 'B2B SaaS startup struggling with lead generation. Had minimal brand awareness and inconsistent marketing efforts.',
      solution:
        'Implemented comprehensive growth strategy including Google Ads, LinkedIn outreach, and content marketing. Built automated lead nurturing workflows.',
      results: [
        '250% increase in qualified leads (40 to 140/month)',
        'Reduced cost per lead from $85 to $32',
        'Achieved 18% conversion rate (industry avg: 8%)',
        'Generated $500K pipeline in 6 months',
      ],
      metrics: [
        { label: 'Lead Growth', value: '+250%' },
        { label: 'CPA Reduction', value: '-62%' },
        { label: 'Pipeline Created', value: '$500K' },
      ],
      duration: '6 months',
      industry: 'SaaS / B2B',
    },
    {
      id: 'case-2',
      title: 'E-Commerce: 180% Revenue Increase',
      company: 'Fashion Forward Store',
      challenge: 'E-commerce store plateaued at $50K/month revenue. Heavy reliance on organic traffic without diversified channels.',
      solution:
        'Built multi-channel strategy with Facebook/Instagram ads, Google Shopping, email marketing, and influencer partnerships.',
      results: [
        'Revenue grew from $50K to $140K/month (180% increase)',
        'AOV increased from $65 to $95',
        'Repeat customer rate: 28% to 42%',
        'ROAS improved from 2.5x to 5.2x',
      ],
      metrics: [
        { label: 'Revenue Growth', value: '+180%' },
        { label: 'AOV Increase', value: '+46%' },
        { label: 'ROAS', value: '5.2x' },
      ],
      duration: '9 months',
      industry: 'E-Commerce / Retail',
    },
    {
      id: 'case-3',
      title: 'B2B Services: 320% Qualified Leads',
      company: 'Enterprise Consulting Group',
      challenge: 'Consulting firm getting low-quality leads from generic campaigns. Sales team frustrated with conversion rates.',
      solution:
        'Developed targeted LinkedIn campaign combined with thought leadership content and personalized outreach sequences.',
      results: [
        '320% increase in qualified leads',
        'Sales cycle reduced from 4 months to 2.5 months',
        'Deal size increased by 40%',
        'Closed $2.3M in new contracts',
      ],
      metrics: [
        { label: 'Qualified Leads', value: '+320%' },
        { label: 'Sales Cycle', value: '-37%' },
        { label: 'Contracts Closed', value: '$2.3M' },
      ],
      duration: '8 months',
      industry: 'B2B Services / Consulting',
    },
    {
      id: 'case-4',
      title: 'Startup: 0 to 50K Followers',
      company: 'HealthTech Innovations',
      challenge: 'New startup with zero brand awareness and minimal budget for paid advertising.',
      solution:
        'Built organic social strategy with consistent content, community engagement, strategic partnerships, and micro-influencer collaborations.',
      results: [
        'Grew from 0 to 50K followers in 12 months',
        'Achieved 8% average engagement rate (3x industry avg)',
        'Generated 2,000+ qualified leads organically',
        'Built foundation for Series A fundraising',
      ],
      metrics: [
        { label: 'Followers Gained', value: '50K' },
        { label: 'Engagement Rate', value: '8%' },
        { label: 'Organic Leads', value: '2,000+' },
      ],
      duration: '12 months',
      industry: 'HealthTech / SaaS',
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
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8">
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
              <span className="text-sm font-medium text-primary">PORTFOLIO</span>
              <div className="h-1 w-12 bg-accent rounded-full mt-1" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
              Case Studies
            </h2>
            <p className="text-lg text-muted-foreground">
              Real projects, real results, real impact on business growth.
            </p>
          </motion.div>

          {/* Case Studies */}
          <div className="space-y-4">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                variants={itemVariants}
                className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary transition-colors"
              >
                <button
                  onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-background/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-secondary text-xs font-medium rounded-full text-foreground">
                        {study.industry}
                      </span>
                      <span className="text-xs text-muted-foreground">{study.duration}</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{study.company}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === study.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-muted-foreground" />
                  </motion.div>
                </button>

                {/* Expanded Content */}
                <motion.div
                  animate={{ height: expandedId === study.id ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 space-y-6 border-t border-border pt-6">
                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                        <p className="text-muted-foreground text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                        <p className="text-muted-foreground text-sm">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Results</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary font-bold flex-shrink-0 mt-1">✓</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                      {study.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <p className="font-serif text-2xl font-bold text-primary">
                            {metric.value}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
