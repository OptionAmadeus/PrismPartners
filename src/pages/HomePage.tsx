import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Layers, ShieldCheck, ArrowRight, ChevronDown } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Self AI',
    description: 'Building trusted AI Agents based on the users background, but with all the skills of Wall St',
  },
  {
    icon: Layers,
    title: 'Orbit',
    description: 'Engineering the new middleware and middle office of Fintech with scalable AI Agent workforces.',
  },
  {
    icon: ShieldCheck,
    title: 'Coming Soon',
    description: 'Our 3rd portfolio company reimaging AI infrastructure.',
  },
];

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center relative z-10"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-bold text-white leading-tight mb-6">
              Illuminate Your
              <br />
              Financial Future
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 font-manrope max-w-3xl mx-auto mb-10">
              Harness the power of AI to optimize your investments and achieve your financial goals
              with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center text-white font-inter hover:text-gray-200 transition-colors"
              >
                Learn More
                <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-inter font-bold text-prism-charcoal mb-4">
                Why Choose Prism Partners?
              </h2>
              <p className="text-xl text-gray-600 font-manrope max-w-2xl mx-auto">
                Experience the future of financial planning with our cutting-edge platform powered by
                advanced AI technology.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-inter font-semibold text-prism-charcoal mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-manrope leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
          >
            <div>
              <p className="text-4xl font-inter font-bold text-prism-indigo mb-2">3</p>
              <p className="text-gray-600 font-manrope">Portfolio Companies</p>
            </div>
            <div>
              <p className="text-4xl font-inter font-bold text-prism-indigo mb-2">50+</p>
              <p className="text-gray-600 font-manrope">Pending Patents</p>
            </div>
            <div>
              <p className="text-4xl font-inter font-bold text-prism-indigo mb-2">20+</p>
              <p className="text-gray-600 font-manrope">AI Agents</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-primary py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-inter font-bold text-white mb-6">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl text-gray-100 font-manrope mb-10 max-w-2xl mx-auto">
              Join thousands of investors who are already benefiting from our AI-powered insights
              and expert guidance.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;