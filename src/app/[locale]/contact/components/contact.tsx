"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react'

export default function Contact() {
  const t = useTranslations('contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        console.error('Error response:', data)
        throw new Error(data.error || 'Failed to send email')
      }

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Fondo1.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20">
                <p className="text-purple-200 text-sm font-medium">Estamos aquí para ayudarte</p>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
            <motion.div 
              className="mt-8 w-32 h-1.5 bg-gradient-to-r from-purple-400 via-white to-green-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form - Currently Under Development */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 p-8 md:p-12">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Envíanos un mensaje</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <label htmlFor="name" className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                        {t('form.name')}
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          placeholder={t('form.namePlaceholder')}
                          className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white/20 focus:bg-white/30 text-white placeholder:text-white/60 ${
                            focusedField === 'name' 
                              ? 'border-purple-500 shadow-lg shadow-purple-200 scale-[1.02]' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <label htmlFor="email" className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                        {t('form.email')}
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          placeholder={t('form.emailPlaceholder')}
                          className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white/20 focus:bg-white/30 text-white placeholder:text-white/60 ${
                            focusedField === 'email' 
                              ? 'border-purple-500 shadow-lg shadow-purple-200 scale-[1.02]' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        />
                      </div>
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <label htmlFor="phone" className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                        {t('form.phone')}
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          placeholder={t('form.phonePlaceholder')}
                          className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white/20 focus:bg-white/30 text-white placeholder:text-white/60 ${
                            focusedField === 'phone' 
                              ? 'border-purple-500 shadow-lg shadow-purple-200 scale-[1.02]' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <label htmlFor="subject" className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                        {t('form.subject')}
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          required
                          placeholder={t('form.subjectPlaceholder')}
                          className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white/20 focus:bg-white/30 text-white placeholder:text-white/60 ${
                            focusedField === 'subject' 
                              ? 'border-purple-500 shadow-lg shadow-purple-200 scale-[1.02]' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        />
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <label htmlFor="message" className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                      {t('form.message')}
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={6}
                        placeholder={t('form.messagePlaceholder')}
                        className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none resize-none bg-white/20 focus:bg-white/30 text-white placeholder:text-white/60 ${
                          focusedField === 'message' 
                            ? 'border-purple-500 shadow-lg shadow-purple-200 scale-[1.02]' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="group relative w-full bg-gradient-to-r from-purple-600 via-purple-500 to-green-500 hover:from-purple-700 hover:via-purple-600 hover:to-green-600 text-white font-bold py-5 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      {status === 'sending' ? (
                        <>
                          <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span className="text-lg">{t('form.sending')}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                          <span className="text-lg">{t('form.submit')}</span>
                        </>
                      )}
                    </button>
                  </motion.div>

                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="flex items-center space-x-3 text-green-700 bg-gradient-to-r from-green-50 to-green-100 p-5 rounded-xl border-2 border-green-200 shadow-lg"
                    >
                      <CheckCircle className="w-6 h-6 flex-shrink-0" />
                      <span className="font-semibold text-base">{t('success')}</span>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="flex items-center space-x-3 text-red-700 bg-gradient-to-r from-red-50 to-red-100 p-5 rounded-xl border-2 border-red-200 shadow-lg"
                    >
                      <AlertCircle className="w-6 h-6 flex-shrink-0" />
                      <span className="font-semibold text-base">{t('error')}</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Info Card */}
              <motion.div 
                className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 p-8"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold text-white mb-8">
                  {t('info.title')}
                </h3>

                <motion.div 
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Office */}
                  <motion.div 
                    variants={itemVariants}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-purple-50 transition-colors duration-300 group cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3.5 rounded-xl shadow-lg group-hover:shadow-purple-300 group-hover:scale-110 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-base">{t('info.office')}</p>
                      <p className="text-white/90 text-sm mt-1 leading-relaxed">{t('info.location')}</p>
                    </div>
                  </motion.div>

                  {/* Hours */}
                  <motion.div 
                    variants={itemVariants}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-green-50 transition-colors duration-300 group cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-3.5 rounded-xl shadow-lg group-hover:shadow-green-300 group-hover:scale-110 transition-all duration-300">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-base">{t('info.hours')}</p>
                      <p className="text-white/90 text-sm mt-1 leading-relaxed">{t('info.hoursText')}</p>
                    </div>
                  </motion.div>

                  {/* General Inquiries */}
                  <motion.div 
                    variants={itemVariants}
                    className="pt-6 border-t-2 border-gray-100"
                  >
                    <p className="font-bold text-white mb-4 text-base">{t('info.generalInquiries')}</p>
                    <div className="space-y-3">
                      <a href="tel:+18282427345" className="flex items-center space-x-3 text-white/90 hover:text-purple-300 transition-all duration-300 p-3 rounded-lg hover:bg-white/10 group">
                        <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-medium">(828) 242-7345</span>
                      </a>
                    </div>
                  </motion.div>

                  {/* Health */}
                  {/* <motion.div 
                    variants={itemVariants}
                    className="pt-6 border-t-2 border-gray-100"
                  >
                    <p className="font-bold text-white mb-4 text-base">{t('info.health')}</p>
                    <div className="space-y-3">
                      <a href="mailto:pwitty@unidxswnc.org" className="flex items-center space-x-3 text-white/90 hover:text-purple-300 transition-all duration-300 p-3 rounded-lg hover:bg-white/10 group">
                        <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-medium break-all">pwitty@unidxswnc.org</span>
                      </a>
                      <a href="tel:+18285061318" className="flex items-center space-x-3 text-white/90 hover:text-purple-300 transition-all duration-300 p-3 rounded-lg hover:bg-white/10 group">
                        <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-medium">(828) 506-1318</span>
                      </a>
                    </div>
                  </motion.div> */}

                  {/* Education */}
                  <motion.div 
                    variants={itemVariants}
                    className="pt-6 border-t-2 border-gray-100"
                  >
                    <p className="font-bold text-white mb-4 text-base">{t('info.education')}</p>
                    <div className="space-y-3">
                      <a href="mailto:swest@unidxswnc.org" className="flex items-center space-x-3 text-white/90 hover:text-purple-300 transition-all duration-300 p-3 rounded-lg hover:bg-white/10 group">
                        <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-medium break-all">swest@unidxswnc.org</span>
                      </a>
                      <a href="https://wa.me/19196248266" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-white/90 hover:text-green-300 transition-all duration-300 p-3 rounded-lg hover:bg-white/10 group">
                        <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-medium">(919) 624-8266 (WhatsApp)</span>
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Decorative Card */}
              <motion.div 
                className="relative bg-gradient-to-br from-purple-600 via-purple-500 to-green-500 rounded-3xl shadow-2xl p-8 text-white overflow-hidden group hover:shadow-purple-500/50 transition-all duration-500"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <p className="text-xl font-bold text-center leading-relaxed">
                    Juntos construimos un futuro mejor
                  </p>
                  <p className="text-center text-purple-100 mt-3 text-base">
                    Together we build a better future
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}
