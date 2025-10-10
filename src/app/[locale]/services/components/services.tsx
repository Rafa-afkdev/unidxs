"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { GraduationCap, Heart, HandHelping, Shirt, Users, Car, BookOpen } from "lucide-react";

export default function Services() {
  const t = useTranslations("services");

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

  const supportServices = [
    {
      icon: HandHelping,
      title: t("support.getHelp.title"),
      description: t("support.getHelp.description"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shirt,
      title: t("support.clothing.title"),
      description: t("support.clothing.description"),
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: t("support.family.title"),
      description: t("support.family.description"),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Car,
      title: t("support.transportation.title"),
      description: t("support.transportation.description"),
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/Fondo3.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-6"
            >
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30">
                <span className="text-white/90 font-semibold text-sm tracking-wider uppercase">
                  Community Support
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 font-bold drop-shadow-2xl"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/95 mb-8 leading-relaxed max-w-3xl"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              
              <a
                href="/contact"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 border-2 border-white/30 hover:border-white/50"
              >
                {t("hero.contact")}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="services" className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Fondo4.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/30">
                <span className="text-white/90 font-semibold text-sm tracking-wider uppercase">
                  What We Offer
                </span>
              </div>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl"
            >
              {t("mainServices.title")}
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Education Access */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 border border-white/20 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {t("mainServices.education.title")}
              </h3>
              <p className="text-white/90 leading-relaxed text-lg">
                {t("mainServices.education.description")}
              </p>
            </motion.div>

            {/* Family Support */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 border border-white/20 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {t("mainServices.familySupport.title")}
              </h3>
              <p className="text-white/90 leading-relaxed text-lg">
                {t("mainServices.familySupport.description")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Services Section with Background */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <div className="bg-purple-100 px-6 py-2 rounded-full">
                <span className="text-purple-900 font-semibold text-sm tracking-wider uppercase">
                  Community Resources
                </span>
              </div>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              {t("support.title")}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {supportServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group border-t-4 border-transparent hover:border-purple-500"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Fondo.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-500 rounded-3xl shadow-2xl">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-2xl">
              {t("education.title")}
            </h2>
            
            <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-3xl p-10 md:p-16 hover:bg-white/20 transition-all duration-500 shadow-2xl">
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-light">
                {t("education.description")}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              {/* <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 hover:scale-105"
              >
                Get Started Today
              </a> */}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
