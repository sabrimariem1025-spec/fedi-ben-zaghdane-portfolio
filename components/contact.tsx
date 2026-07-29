'use client'

import { motion } from 'framer-motion'
import { Mail, Share2, ExternalLink, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export function Contact() {
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

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:fedi@example.com', handle: 'fedi@example.com' },
    { icon: Share2, label: 'LinkedIn', href: 'https://linkedin.com/in/fedibenzaghdane', handle: 'fedibenzaghdane' },
    { icon: ExternalLink, label: 'Twitter', href: 'https://twitter.com/fedibenzaghdane', handle: '@fedibenzaghdane' },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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
              <span className="text-sm font-medium text-primary">LET&apos;S TALK</span>
              <div className="h-1 w-12 bg-accent rounded-full mt-1 mx-auto" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you need a marketing consultation, have a project in mind, or just want to connect,
              I&apos;d love to hear from you.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-all text-center"
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <Link
                href="mailto:fedi@example.com"
                className="text-sm text-accent hover:text-primary transition-colors break-all"
              >
                fedi@example.com
              </Link>
            </motion.div>

            {/* Phone */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-all text-center"
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <Link
                href="tel:+21692345678"
                className="text-sm text-accent hover:text-primary transition-colors"
              >
                +216 92 345 678
              </Link>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-all text-center"
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">
                Tunis, Tunisia
                <br />
                Available for remote work
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="text-center">
            <Link
              href="mailto:fedi@example.com?subject=Let's collaborate"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <Mail className="w-5 h-5" />
              Send Me an Email
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="border-t border-border pt-12">
            <h3 className="text-center font-semibold text-foreground mb-6">Connect With Me</h3>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group p-3 bg-secondary rounded-lg hover:bg-primary transition-colors"
                    title={link.label}
                  >
                    <Icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div variants={itemVariants} className="border-t border-border pt-12 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Fedi Ben Zaghdane. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Available for consulting, freelance projects, and full-time opportunities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
