"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { Instagram, Mail, MapPin, Phone, Youtube, Facebook } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function MainPage() {
  const [isVisible, setIsVisible] = useState(true);
  const t = useTranslations('main');

  return (

    <main>


    <section className="relative min-h-screen bg-white">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
    <img
    src="/Fondo.webp"
    alt="Fondo desenfocado"
    className="w-full h-full object-cover object-center blur-xs scale-100"
    sizes="100vw"
    style={{
      filter: 'brightness(0.7)'
    }}
  />
      <div className="absolute inset-0 bg-black/30" />
    </div>

    {/* Hero Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
      <div className="max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6"
        >
           {t('Titulo')}
          <span className="block">{t('SubTitulo')}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-lg sm:text-xl text-white mb-8 leading-relaxed bg-gradient-to-r from-purple-600/30 to-indigo-600/30 backdrop-blur-sm border-l-4 border-purple-400 p-6 rounded-lg shadow-lg"
        >
          {t('Descripcion')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
         
        </motion.div>
      </div>
    </div>
  </section>

  {/* About Section */}
  <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-purple-900 mb-4">
          {t('about.title')}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-purple-600"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <p className="text-gray-700 leading-relaxed text-base">
            {t('about.paragraph1')}
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-indigo-600"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gray-700 leading-relaxed text-base">
            {t('about.paragraph2')}
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <p className="text-gray-700 leading-relaxed text-base">
            {t('about.paragraph3')}
          </p>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link 
          href="/about"
          className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-sans font-semibold text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          {t('about.button')}
        </Link>
      </motion.div>
    </div>
  </section>

  <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-16 relative overflow-hidden">
    {/* Decorative Background */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        
        {/* General Contact */}
        <div>
          <h3 className="font-sans text-lg font-bold mb-4 text-purple-200 uppercase tracking-wide">{t('footer.generalContact')}</h3>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">{t('footer.office')}</p>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-green-400" />
              <a 
                href="tel:+18282427345" 
                className="text-sm hover:text-green-400 transition-colors"
              >
                (828) 242-7345
              </a>
            </div>
            <div className="flex items-start space-x-2 mt-4">
              <MapPin className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
              <a 
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x885915004dd228f7:0x53b4262b6ea76d6d?sa=X&ved=1t:8290&ictx=111" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-green-400 transition-colors"
              >
                Western North Carolina
              </a>
            </div>
          </div>
        </div>

        {/* Health Contact */}
        <div>
          <h3 className="font-sans text-lg font-bold mb-4 text-purple-200 uppercase tracking-wide">{t('footer.health')}</h3>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">Paul Witty</p>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-green-400" />
              <a 
                href="mailto:pwitty@unidxswnc.org" 
                className="text-sm hover:text-green-400 transition-colors break-all"
              >
                pwitty@unidxswnc.org
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-green-400" />
              <a 
                href="tel:+18285061318" 
                className="text-sm hover:text-green-400 transition-colors"
              >
                (828) 506-1318
              </a>
            </div>
          </div>
        </div>

        {/* Education Contact */}
        <div>
          <h3 className="font-sans text-lg font-bold mb-4 text-purple-200 uppercase tracking-wide">{t('footer.education')}</h3>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">Sarah West</p>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-green-400" />
              <a 
                href="mailto:swest@unidxswnc.org" 
                className="text-sm hover:text-green-400 transition-colors break-all"
              >
                swest@unidxswnc.org
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-green-400" />
              <a 
                href="https://wa.me/19196248266" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-green-400 transition-colors"
              >
                (919) 624-8266 (WhatsApp)
              </a>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-sans text-lg font-bold mb-4 text-purple-200 uppercase tracking-wide">{t('footer.followUs')}</h3>
          <div className="flex flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://www.instagram.com/unidxswnc?igsh=MXR1azgwb3g1cG93Ng=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white p-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-pink-500/50 flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://www.facebook.com/share/1Cqw9P99FF/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white p-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://www.tiktok.com/@unidxs_wnc?_t=ZM-90E2MZT98MS&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white p-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-gray-500/50 flex items-center justify-center"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </Link>
            </motion.div>
          </div>
          <p className="mt-4 text-xs text-purple-300">
            {t('footer.socialText')}
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-purple-500/30">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-purple-200">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6 text-sm">
            <Link 
              href="/privacidad" 
              className="hover:text-green-400 transition-colors text-purple-200"
            >
              {t('footer.privacy')}
            </Link>
            <Link 
              href="/terminos" 
              className="hover:text-green-400 transition-colors text-purple-200"
            >
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>

  </main>


//     <div className="absolute inset-0 z-0">
//     <div className="absolute inset-0 z-0">
//   <Image
//     src="/Fondo.webp"
//     alt="Fondo desenfocado"
//     fill
//     className="object-cover object-[50%] blur-xs scale-100"
//     priority
//     quality={85}
//     sizes="100vw"
//     style={{
//       filter: 'brightness(0.7)'
//     }}
//   />
//   <div className="absolute inset-0 bg-black/60"></div>
// </div>
// </div>
  )
}
