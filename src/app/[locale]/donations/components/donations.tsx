"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Heart,
  GraduationCap,
  Stethoscope,
  ShoppingBag,
  Users,
  Languages,
  DollarSign,
  Clock,
  Package,
  Mail,
  HandHeart,
  Sparkles,
} from "lucide-react";

export default function Donations() {
  const t = useTranslations("donations");
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

  const programs = [
    {
      icon: GraduationCap,
      title: t("whyGive.programs.college.title"),
      description: t("whyGive.programs.college.description"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Stethoscope,
      title: t("whyGive.programs.health.title"),
      description: t("whyGive.programs.health.description"),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: ShoppingBag,
      title: t("whyGive.programs.foodPantry.title"),
      description: t("whyGive.programs.foodPantry.description"),
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: t("whyGive.programs.leadership.title"),
      description: t("whyGive.programs.leadership.description"),
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Languages,
      title: t("whyGive.programs.translation.title"),
      description: t("whyGive.programs.translation.description"),
      color: "from-indigo-500 to-blue-500",
    },
  ];

  const waysToGive = [
    {
      icon: DollarSign,
      title: t("waysToGive.online.title"),
      description: t("waysToGive.online.description"),
      buttonText: t("waysToGive.online.button"),
      action: "https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19304",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Clock,
      title: t("waysToGive.volunteer.title"),
      description: t("waysToGive.volunteer.description"),
      buttonText: t("waysToGive.volunteer.button"),
      action: "mailto:Cristelamoreno@unidxswnc.org",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: ShoppingBag,
      title: t("waysToGive.foodPantry.title"),
      description: t("waysToGive.foodPantry.description"),
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Package,
      title: t("waysToGive.inKind.title"),
      description: t("waysToGive.inKind.description"),
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Fondo1-Donation.webp */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/Fondo1-Donation.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-br from-pink-500 to-orange-500 rounded-full shadow-2xl">
              <Heart className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/95 font-light drop-shadow-lg mb-8"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a
              href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-19304"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-orange-600 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-xl transition-shadow"
            >
              <Heart className="w-5 h-5" />
              {t("hero.donateButton")}
            </a>
           
          </motion.div>
        </motion.div>
      </section>

      {/* Why Give Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg">
                <HandHeart className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              {t("whyGive.title")}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12"
            >
              {t("whyGive.description")}
            </motion.p>
          </motion.div>

          {/* Programs Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {programs.map((program, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-transparent hover:border-purple-500"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${program.color} rounded-xl mb-4 shadow-md`}
                >
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Local Impact Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl shadow-xl text-center"
          >
            <Sparkles className="w-10 h-10 text-white mx-auto mb-4" />
            <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
              {t("whyGive.localImpact")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Give Section with Fondo2-Donation.webp */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Fondo2-Donation.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl"
            >
              {t("waysToGive.title")}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {waysToGive.map((way, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-white/20"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${way.color} rounded-xl mb-6 shadow-lg`}
                >
                  <way.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {way.title}
                </h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  {way.description}
                </p>
                {way.buttonText && (
                  <button
                    disabled={way.action === "disabled"}
                    onClick={() => {
                      if (way.action !== "disabled" && way.action) {
                        if (way.action.startsWith("mailto:")) {
                          window.location.href = way.action;
                        } else {
                          window.open(way.action, "_blank", "noopener,noreferrer");
                        }
                      }
                    }}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                      way.action === "disabled"
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : `bg-gradient-to-r ${way.color} text-white hover:shadow-lg`
                    }`}
                  >
                    {way.action === "disabled" ? (
                      <Clock className="w-5 h-5" />
                    ) : way.action.startsWith("mailto:") ? (
                      <Mail className="w-5 h-5" />
                    ) : (
                      <Heart className="w-5 h-5" />
                    )}
                    {way.buttonText}
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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

      {/* Impact Section with Fondo3-Donation.webp */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Fondo3-Donation.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-pink-900/80 to-orange-900/80" />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-6">
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-white/20 backdrop-blur-md rounded-full shadow-2xl">
              <Heart className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-2xl"
          >
            {t("impact.title")}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-white/95 leading-relaxed font-light"
          >
            {t("impact.description")}
          </motion.p>
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
                {t("dialog.getInvolved.title")}
              </h3>
              <p className="text-gray-600">
                {t("dialog.getInvolved.subtitle")}
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
                    {t("dialog.getInvolved.joinUnidxs.title")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t("dialog.getInvolved.joinUnidxs.description")}
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
                    {t("dialog.getInvolved.donate.title")}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t("dialog.getInvolved.donate.description")}
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
