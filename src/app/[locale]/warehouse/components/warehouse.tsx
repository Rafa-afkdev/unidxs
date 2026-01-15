"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import {
  ShoppingBag,
  Package,
  Calendar,
  Users,
  Heart,
  Sparkles,
  Clock,
  Mail,
  Share2,
} from "lucide-react";

export default function WarehouseComponent() {
  const t = useTranslations("warehouse");

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

  const services = [
    {
      icon: ShoppingBag,
      title: t("services.openPantry.title"),
      description: t("services.openPantry.description"),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Package,
      title: t("services.foodBoxes.title"),
      description: t("services.foodBoxes.description"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Clock,
      title: t("services.grabAndGo.title"),
      description: t("services.grabAndGo.description"),
      color: "from-orange-500 to-red-500",
    },
  ];

  const howToHelp = [
    {
      icon: Users,
      title: t("howToHelp.volunteer.title"),
      description: t("howToHelp.volunteer.description"),
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Heart,
      title: t("howToHelp.donate.title"),
      description: t("howToHelp.donate.description"),
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Share2,
      title: t("howToHelp.spread.title"),
      description: t("howToHelp.spread.description"),
      color: "from-blue-500 to-indigo-500",
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
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-full shadow-2xl">
              <ShoppingBag className="w-10 h-10 text-white" />
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
            className="text-xl md:text-2xl text-white/95 font-light drop-shadow-lg"
          >
            {t("hero.subtitle")}
          </motion.p>
        </motion.div>
      </section>

      {/* Calendar Section - December 2025 */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-lg">
                <Calendar className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              {t("calendar.title")}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-700 mb-8"
            >
              {t("calendar.subtitle")}
            </motion.p>
          </motion.div>

          {/* Calendar Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Calendar Header with QR Code */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 p-6 md:p-8 rounded-t-3xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">
                    {t("calendar.title")}
                  </h3>
                  <div className="flex items-center justify-center md:justify-start gap-4 text-white/90 text-sm">
                    <span>{t("hero.title")}</span>
                    <span>•</span>
                    <span>{t("calendar.whatsappChannel")}</span>
                  </div>
                  <p className="text-white/80 text-sm mt-2">{t("calendar.stayTuned")}</p>
                </div>
                {/* QR Code */}
                <div className="flex flex-col items-center">
                  <img
                    src="/qr group.png"
                    alt="WhatsApp QR Code"
                    className="w-24 h-24 md:w-28 md:h-28 rounded-lg bg-white p-1"
                  />
                  <span className="text-white/90 text-xs mt-1">{t("calendar.whatsappChannel")}</span>
                </div>
              </div>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 bg-gradient-to-r from-gray-100 to-gray-50 border-b-2 border-gray-200">
              {["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].map((day) => (
                <div key={day} className="p-4 text-center font-bold text-gray-800 text-sm md:text-base border-r border-gray-200 last:border-r-0">
                  {t(`calendar.days.${day}`)}
                </div>
              ))}
            </div>

            {/* Location Info */}
            <div className="bg-white/90 px-6 py-4 border-b border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-lg">📍</span>
                <span className="font-medium">{t("calendar.events.address")}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-lg">📞</span>
                <span className="font-medium">(828) 242-7345</span>
              </div>
            </div>

            {/* Calendar Days - January 2026 */}
            <div className="grid grid-cols-7">
              {/* Week 1 - January starts on Thursday */}
              {/* Empty cells for Sunday through Wednesday */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-gray-50"></div>
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-gray-50"></div>
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-gray-50"></div>
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-gray-50"></div>

              {/* Thursday - Jan 1 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">1</div>
              </div>

              {/* Friday - Jan 2 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">2</div>
              </div>

              {/* Saturday - Jan 3 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">3</div>
              </div>

              {/* Week 2 */}
              {/* Sunday - Jan 4 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">4</div>
              </div>
              {/* Monday - Jan 5 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">5</div>
              </div>
              {/* Tuesday - Jan 6 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">6</div>
              </div>
              {/* Wednesday - Jan 7 - Food boxes + Health check */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[120px] bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="font-bold text-lg mb-1 text-gray-800">7</div>
                <div className="text-xs md:text-sm text-blue-700 font-semibold">
                  {t("calendar.events.foodBoxes")}
                </div>
                <div className="text-xs md:text-sm text-purple-700 font-semibold">
                  {t("calendar.events.healthCheck")}
                </div>
                <div className="text-xs text-blue-900 font-bold">2-6pm</div>
              </div>
              {/* Thursday - Jan 8 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">8</div>
              </div>
              {/* Friday - Jan 9 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">9</div>
              </div>
              {/* Saturday - Jan 10 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">10</div>
              </div>

              {/* Week 3 */}
              {/* Sunday - Jan 11 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">11</div>
              </div>
              {/* Monday - Jan 12 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">12</div>
              </div>
              {/* Tuesday - Jan 13 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">13</div>
              </div>
              {/* Wednesday - Jan 14 - Food boxes + Health check */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[120px] bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="font-bold text-lg mb-1 text-gray-800">14</div>
                <div className="text-xs md:text-sm text-blue-700 font-semibold">
                  {t("calendar.events.foodBoxes")}
                </div>
                <div className="text-xs md:text-sm text-purple-700 font-semibold">
                  {t("calendar.events.healthCheck")}
                </div>
                <div className="text-xs text-blue-900 font-bold">2-6pm</div>
              </div>
              {/* Thursday - Jan 15 - Open Pantry */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-green-50 hover:bg-green-100 transition-colors">
                <div className="font-bold text-lg mb-1 text-gray-800">15</div>
                <div className="text-xs md:text-sm text-green-700 font-semibold">
                  {t("calendar.events.openPantry")}
                </div>
                <div className="text-xs text-green-900 font-bold">1-4pm</div>
              </div>
              {/* Friday - Jan 16 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">16</div>
              </div>
              {/* Saturday - Jan 17 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">17</div>
              </div>

              {/* Week 4 */}
              {/* Sunday - Jan 18 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">18</div>
              </div>
              {/* Monday - Jan 19 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">19</div>
              </div>
              {/* Tuesday - Jan 20 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">20</div>
              </div>
              {/* Wednesday - Jan 21 - Food boxes + Health check */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[120px] bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="font-bold text-lg mb-1 text-gray-800">21</div>
                <div className="text-xs md:text-sm text-blue-700 font-semibold">
                  {t("calendar.events.foodBoxes")}
                </div>
                <div className="text-xs md:text-sm text-purple-700 font-semibold">
                  {t("calendar.events.healthCheck")}
                </div>
                <div className="text-xs text-blue-900 font-bold">2-6pm</div>
              </div>
              {/* Thursday - Jan 22 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">22</div>
              </div>
              {/* Friday - Jan 23 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">23</div>
              </div>
              {/* Saturday - Jan 24 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">24</div>
              </div>

              {/* Week 5 */}
              {/* Sunday - Jan 25 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">25</div>
              </div>
              {/* Monday - Jan 26 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">26</div>
              </div>
              {/* Tuesday - Jan 27 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">27</div>
              </div>
              {/* Wednesday - Jan 28 - Food boxes + Health check */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[120px] bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="font-bold text-lg mb-1 text-gray-800">28</div>
                <div className="text-xs md:text-sm text-blue-700 font-semibold">
                  {t("calendar.events.foodBoxes")}
                </div>
                <div className="text-xs md:text-sm text-purple-700 font-semibold">
                  {t("calendar.events.healthCheck")}
                </div>
                <div className="text-xs text-blue-900 font-bold">2-6pm</div>
              </div>
              {/* Thursday - Jan 29 - Open Pantry */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-green-50 hover:bg-green-100 transition-colors">
                <div className="font-bold text-lg mb-1 text-gray-800">29</div>
                <div className="text-xs md:text-sm text-green-700 font-semibold">
                  {t("calendar.events.openPantry")}
                </div>
                <div className="text-xs text-green-900 font-bold">1-4pm</div>
              </div>
              {/* Friday - Jan 30 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">30</div>
              </div>
              {/* Saturday - Jan 31 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">31</div>
              </div>
            </div>
          </motion.div>

          {/* Calendar Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <p className="text-lg text-gray-700 mb-4">
              *{t("calendar.volunteersNeeded")}{" "}
              <a
                href="mailto:cristelamoreno@unidxswnc.org"
                className="text-blue-600 hover:text-blue-700 font-semibold underline"
              >
                cristelamoreno@unidxswnc.org
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              {t("about.title")}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
            >
              {t("about.description")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              {t("services.title")}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-white/20"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-6 shadow-lg`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How to Help Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
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
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              {t("howToHelp.title")}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {howToHelp.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-transparent hover:border-purple-500"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl mb-4 shadow-md`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Fondo3-Donation.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-emerald-900/80 to-teal-900/80" />

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
            {t("cta.title")}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-white/95 leading-relaxed font-light mb-8"
          >
            {t("cta.subtitle")}
          </motion.p>

          <Link href="/contact">
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-xl transition-all cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              {t("cta.button")}
            </motion.div>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
