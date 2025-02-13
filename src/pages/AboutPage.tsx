import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Target,
  Users,
  ArrowRight,
  Linkedin,
  Award,
  Lightbulb,
  Shield,
} from 'lucide-react';

const milestones = [
];

const teamMembers = [
  {
    id: 1,
    name: 'Matt Wesche',
    role: 'Managing Partner & Co-founder',
    image: 'https://dvkpanntfxehgasngylg.supabase.co/storage/v1/object/public/public-assets//Founder_SelfAI.png',
    bio: 'Former Executive at E*TRADE and Morgan Stanley with 15+ years in fintech',
    linkedin: 'https://linkedin.com/in/matthewwesche',
  },
  {
    id: 2,
    name: 'Joining Soon',
    role: 'Partner, Fintech',
    image: 'https://dvkpanntfxehgasngylg.supabase.co/storage/v1/object/public/public-assets//fintechExec.webp',
    bio: 'Former Goldman Sachs and Blackrock Executive',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 3,
    name: 'Joining Soon',
    role: 'Partner, Technology',
    image: 'https://dvkpanntfxehgasngylg.supabase.co/storage/v1/object/public/public-assets//techExec.webp',
    bio: 'Former Technology Executive at Meta and Paypal',
    linkedin: 'https://linkedin.com',
  },
];

const values = [
  {
    icon: Brain,
    title: 'Innovation First',
    description: 'Pushing boundaries in AI and financial technology',
  },
  {
    icon: Target,
    title: 'Client Success',
    description: "Dedicated to achieving our clients' financial goals",
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Unwavering commitment to protecting client assets',
  },
];

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-primary opacity-50"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-bold text-white leading-tight mb-6">
              Refining Financial Futures
              <br />
              Through AI Precision
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 font-manrope max-w-3xl mx-auto">
              We're on a mission to democratize sophisticated financial planning through
              the power of artificial intelligence and human expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h2 className="text-3xl font-inter font-bold text-prism-charcoal mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 font-manrope mb-8">
              At Prism Partners, we believe that sophisticated financial planning shouldn't be
              reserved for the ultra-wealthy. By combining cutting-edge AI technology with
              human expertise, we're making institutional-grade investment strategies accessible
              to everyone.
            </p>
            <blockquote className="text-2xl font-inter font-medium text-prism-indigo italic">
              "We believe finance should empower, not intimidate. Our AI-driven approach
              brings clarity and confidence to every investment decision."
            </blockquote>
            <p className="mt-4 text-gray-600 font-manrope">— Matt Wesche, CEO & Co-founder</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-primary transform -translate-y-1/2" />
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pt-8"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-gradient-primary" />
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-inter font-bold text-prism-indigo">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-inter font-semibold text-prism-charcoal mt-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 font-manrope mt-2">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-inter font-bold text-prism-charcoal mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600 font-manrope">
              Bringing together decades of experience in finance, technology, and client service.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
              {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
                    <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                      <p className="text-white font-manrope mb-4">{member.bio}</p>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center text-white hover:text-gray-200"
                      >
                        <Linkedin className="h-5 w-5 mr-2" />
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-inter font-semibold text-prism-charcoal">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 font-manrope">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-inter font-bold text-prism-charcoal mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 font-manrope">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-inter font-semibold text-prism-charcoal mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-manrope">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-inter font-bold text-prism-charcoal mb-6">
                Life at Prism Partners
              </h2>
              <p className="text-xl text-gray-600 font-manrope mb-8">
                We've built a culture that celebrates innovation, embraces diversity, and
                encourages continuous learning. Our award-winning hybrid work model combines
                the best of remote flexibility with meaningful in-person collaboration.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Award className="h-6 w-6 text-prism-indigo" />
                  <span className="text-gray-600 font-manrope">
                    Named "Best Fintech Workplace" 2023
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Lightbulb className="h-6 w-6 text-prism-indigo" />
                  <span className="text-gray-600 font-manrope">
                    20% time for innovation projects
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="h-6 w-6 text-prism-indigo" />
                  <span className="text-gray-600 font-manrope">
                    Regular team offsites and events
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-primary py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-inter font-bold text-white mb-6">
              Join Us in Shaping the Future of Finance
            </h2>
            <p className="text-xl text-gray-100 font-manrope mb-10 max-w-2xl mx-auto">
              Whether you're looking to grow your wealth or your career, we'd love to
              hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group px-8 py-4 border-2 border-white text-white rounded-lg font-inter font-semibold hover:bg-white hover:text-prism-indigo transition-colors inline-flex items-center"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;