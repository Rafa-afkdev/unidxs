"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Target,
  Eye,
  Sparkles,
  HandHeart,
  Scale,
  UserCheck,
  Award,
  Zap,
  Lightbulb,
} from "lucide-react";

export default function About() {
  const t = useTranslations("about");
  const tDialog = useTranslations("dialog");
  const locale = useLocale();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const valueIcons = [
    { icon: Users, color: "from-purple-500 to-purple-600" },
    { icon: HandHeart, color: "from-orange-500 to-orange-600" },
    { icon: Scale, color: "from-blue-500 to-blue-600" },
    { icon: UserCheck, color: "from-green-500 to-green-600" },
    { icon: Award, color: "from-pink-500 to-pink-600" },
    { icon: Zap, color: "from-yellow-500 to-yellow-600" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Fondo2.webp */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/Fondo2.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/95 font-light drop-shadow-lg"
          >
            {t("hero.subtitle")}
          </motion.p>
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              {t("intro.title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6"
            >
              {t("intro.description")}
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
            >
              {t("intro.description2")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section with Fondo3.webp */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Fondo3.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-6">
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl shadow-2xl">
              <Target className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            {t("mission.title")}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-white/95 leading-relaxed font-light"
          >
            {t("mission.description")}
          </motion.p>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
            >
              {t("vision.title")}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {t.raw("vision.items").map((item: string, index: number) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <p className="text-lg text-gray-700 text-left leading-relaxed">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Fondo4.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-6">
              <div className="flex items-center justify-center w-20 h-20 mx-auto bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-2xl"
            >
              {t("values.title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              {t("values.description")}
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {/* Unity */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {t("values.unity")}
              </h3>
            </motion.div>

            {/* Respect */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {t("values.respect")}
              </h3>
            </motion.div>

            {/* Opportunity */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {t("values.opportunity")}
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section with Fondo4.webp */}
      {/* <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Fondo4.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {t("impact.title")}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-white/95 font-light mb-12"
          >
            {t("impact.subtitle")}
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            {[
              { number: "7", label: t("impact.stats.counties"), color: "from-green-400 to-emerald-500" },
              { number: "1000+", label: t("impact.stats.members"), color: "from-blue-400 to-cyan-500" },
              { number: "100%", label: t("impact.stats.commitment"), color: "from-purple-400 to-pink-500" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                  {stat.number}
                </div>
                <div className="text-white text-lg font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-50">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t("cta.subtitle")}
          </p>
          <motion.button
            onClick={() => setIsDialogOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            {t("cta.button")}
          </motion.button>
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
    </div>
  );
}
