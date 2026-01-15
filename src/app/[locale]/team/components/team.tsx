"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Users, Briefcase, Heart } from 'lucide-react'

export default function Team() {
  const t = useTranslations('team')
  const tAbout = useTranslations('about')
  const tDialog = useTranslations('dialog')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const boardMembers = [
    { id: 'victoria', hasImage: false },
    { id: 'edithBoard', hasImage: false },
    { id: 'valeria', hasImage: false }
  ]

  const teamMembers = [
    { id: 'ricardo', image: '/Ricardo.png', hasImage: true },
    { id: 'paul', image: '/Paul.png', hasImage: true },
    { id: 'sarahWest', image: '/Sarah-West.png', hasImage: true },
    { id: 'sarah', image: '/Sarah.png', hasImage: true },
    { id: 'nita', image: '/Nita.webp', hasImage: true },
    { id: 'esteban', image: '/JuanEs.webp', hasImage: true }
  ]

  const volunteers: { id: string; hasImage?: boolean }[] = []

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const BoardMemberCard = ({ member, index }: { member: any, index: number }) => {
    const initials = t(`members.${member.id}.name`).split(' ').map((n: string) => n[0]).join('').slice(0, 2)
    const isEven = index % 2 === 0

    return (
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="group"
      >
        <div className="bg-white rounded-2xl p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-500">
          <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-5 lg:gap-6`}>
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-sm opacity-60 group-hover:opacity-90 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 rounded-full">
                <div className="bg-white p-0.5 rounded-full">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center ring-2 ring-white">
                    <span className="text-4xl lg:text-5xl font-bold text-white">{initials}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className={`flex-1 space-y-2 ${isEven ? 'lg:text-left' : 'lg:text-right'} text-center`}>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                {t(`members.${member.id}.name`)}
              </h3>
              <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 uppercase tracking-wide">
                {t(`members.${member.id}.role`)}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(`members.${member.id}.description`)}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  const TeamMemberCard = ({ member, index }: { member: any, index: number }) => {
    const isEven = index % 2 === 0

    return (
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="group"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 lg:p-6 hover:bg-white/20 transition-all duration-500">
          <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-5 lg:gap-6`}>
            {/* Image */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-green-500 rounded-full blur-sm opacity-60 group-hover:opacity-90 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-purple-600 via-purple-500 to-green-500 p-0.5 rounded-full">
                <div className="bg-white p-0.5 rounded-full">
                  <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden ring-2 ring-white">
                    <Image
                      src={member.image}
                      alt={t(`members.${member.id}.name`)}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                      sizes="160px"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className={`flex-1 space-y-2 ${isEven ? 'lg:text-left' : 'lg:text-right'} text-center`}>
              <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">
                {t(`members.${member.id}.name`)}
              </h3>
              <p className="text-sm font-semibold text-purple-300 uppercase tracking-wide">
                {t(`members.${member.id}.role`)}
              </p>
              <p className="text-white/90 text-sm leading-relaxed">
                {t(`members.${member.id}.description`)}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  const VolunteerCard = ({ member }: { member: any }) => {
    if (member.id === 'cristela') {
      return (
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {t('members.cristela.name')}
          </h3>
          <p className="text-pink-600 font-medium mb-4">
            {t('members.cristela.role')}
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('members.cristela.description')}
          </p>
        </div>
      )
    }

    const initials = t(`members.${member.id}.name`).split(' ').map((n: string) => n[0]).join('').slice(0, 2)

    return (
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className={`rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group ${member.id === 'cristela' ? 'bg-gradient-to-br from-pink-50 to-orange-50 border-2 border-pink-200' : 'bg-white'}`}
      >
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4">
            <div className={`w-32 h-32 rounded-full flex items-center justify-center ring-4 transition-all ${member.id === 'cristela' ? 'bg-gradient-to-br from-pink-600 to-orange-500 ring-pink-300 group-hover:ring-pink-400' : 'bg-gradient-to-br from-pink-500 to-orange-500 ring-pink-200 group-hover:ring-pink-400'}`}>
              <span className="text-4xl font-bold text-white">{initials}</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            {t(`members.${member.id}.name`)}
            {member.id === 'cristela' && (
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-pink-100 text-pink-700 border border-pink-200">{t(`members.${member.id}.role`)}</span>
            )}
          </h3>
          {member.id !== 'cristela' && (
            <p className="text-sm font-semibold text-pink-600 uppercase tracking-wide mb-3">
              {t(`members.${member.id}.role`)}
            </p>
          )}
          <p className="text-gray-600 text-sm leading-relaxed">
            {t(`members.${member.id}.description`)}
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/Fondo2.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mb-4">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('boardTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('boardSubtitle')}
            </p>
          </motion.div>

          <div className="space-y-6">
            {boardMembers.map((member, index) => (
              <BoardMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/Fondo3.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
              {t('teamTitle')}
            </h2>
            <p className="text-xl text-white/95 max-w-2xl mx-auto drop-shadow-lg">
              {t('teamSubtitle')}
            </p>
          </motion.div>

          <div className="space-y-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('volunteersTitle')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {volunteers.map((member) => (
              <VolunteerCard key={member.id} member={member} />
            ))}
          </div>

          {/* Inline Volunteer CTA to expand the section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 max-w-4xl mx-auto text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {tAbout('cta.title')}
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              {tAbout('cta.subtitle')}
            </p>
            <motion.button
              onClick={() => setIsDialogOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              {tAbout('cta.button')}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Bottom Decorative Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Fondo4.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-8 rounded-3xl hover:bg-white/20 transition-all">
            <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              Juntos construimos un futuro mejor • Together we build a better future
            </p>
          </div>
        </motion.div>
      </section>

      {/* Dialog Modal */}
      {isDialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsDialogOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
          >
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {tDialog("getInvolved.title")}
              </h3>
              <p className="text-gray-600">
                {tDialog("getInvolved.subtitle")}
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=NBZCBZ5ElECAXHd-BjEgvM4bR7TIS7ZFgL9CnjYDPDNUNlJJMDhHVk1PVDIzT1A5RUFWU0MyMUpXTiQlQCN0PWcu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-xl transition-all border-2 border-purple-200 hover:border-purple-400 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {tDialog("getInvolved.joinUnidxs.title")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {tDialog("getInvolved.joinUnidxs.description")}
                  </p>
                </div>
              </a>

              <a
                href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19304"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-pink-50 hover:from-orange-100 hover:to-pink-100 rounded-xl transition-all border-2 border-orange-200 hover:border-orange-400 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {tDialog("getInvolved.donate.title")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {tDialog("getInvolved.donate.description")}
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  )
}
