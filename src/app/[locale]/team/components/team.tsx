"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Users, Briefcase, Heart } from 'lucide-react'

export default function Team() {
  const t = useTranslations('team')

  const boardMembers = [
    { id: 'victoria', hasImage: false },
    { id: 'edithBoard', hasImage: false },
    { id: 'valeria', hasImage: false }
  ]

  const teamMembers = [
    { id: 'ricardo', image: '/Ricardo.png', hasImage: true },
    { id: 'paul', image: '/Paul.png', hasImage: true },
    { id: 'sarahWest', image: '/Sarah-West.png', hasImage: true },
    { id: 'sarah', image: '/Sarah.png', hasImage: true }
  ]

  const volunteers = [
    { id: 'cristela', hasImage: false }
  ]

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
    const initials = t(`members.${member.id}.name`).split(' ').map((n: string) => n[0]).join('').slice(0, 2)

    return (
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
      >
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center ring-4 ring-pink-200 group-hover:ring-pink-400 transition-all">
              <span className="text-4xl font-bold text-white">{initials}</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {t(`members.${member.id}.name`)}
          </h3>
          <p className="text-sm font-semibold text-pink-600 uppercase tracking-wide mb-3">
            {t(`members.${member.id}.role`)}
          </p>
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
    </main>
  )
}
