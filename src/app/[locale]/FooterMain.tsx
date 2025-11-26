"use client"
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import PrivacyDialog from '@/components/PrivacyDialog'
import TermsDialog from '@/components/TermsDialog'

export default function FooterMain() {

const t = useTranslations('main');
const locale = useLocale();

  return (
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
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-green-400" />
              <a 
                href="mailto:ricardo@unidxswnc.org" 
                className="text-sm hover:text-green-400 transition-colors break-all"
              >
                Rball@unidxswnc.org
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
        {/* <div>
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
        </div> */}

        {/* Education Contact */}
        <div>
          <h3 className="font-sans text-lg font-bold mb-4 text-purple-200 uppercase tracking-wide">{t('footer.education')}</h3>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">Sarah West</p>
            <p className="text-xs text-purple-300 italic">{t('footer.sarahDescription')}</p>
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
            <p className="text-sm font-semibold text-white mt-4">Nita Lipan</p>
            <p className="text-xs text-purple-300 italic">{t('footer.nitaDescription')}</p>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-green-400" />
              <a 
                href="mailto:Nlipan@unidxswnc.org" 
                className="text-sm hover:text-green-400 transition-colors break-all"
              >
                Nlipan@unidxswnc.org
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-green-400" />
              <a 
                href="tel:+18283471234" 
                className="text-sm hover:text-green-400 transition-colors"
              >
                (828) 347-1234
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
            <PrivacyDialog>
              <button className="hover:text-green-400 transition-colors text-purple-200 cursor-pointer">
                {t('footer.privacy')}
              </button>
            </PrivacyDialog>
            <TermsDialog>
              <button className="hover:text-green-400 transition-colors text-purple-200 cursor-pointer">
                {t('footer.terms')}
              </button>
            </TermsDialog>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
