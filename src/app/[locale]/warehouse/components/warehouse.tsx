"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Heart,
  Mail,
  MapPin,
  Package,
  Share2,
  ShoppingBag,
  Sparkles,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

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

      {/* Calendar Section - May 2026 */}
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
            className="max-w-6xl mx-auto bg-slate-50/50 backdrop-blur-md rounded-3xl shadow-2xl border border-slate-100/80 overflow-hidden p-4 md:p-6"
          >
            {/* Calendar Header with QR Code */}
            <div className="bg-gradient-to-tr from-purple-800 via-indigo-700 to-blue-600 p-6 md:p-8 rounded-2xl shadow-lg mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="text-center md:text-left flex-1">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-white/95 text-xs font-bold rounded-full border border-white/20 mb-3 tracking-wider uppercase">
                    {t("hero.title")}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
                    {t("calendar.title")}
                  </h3>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-white/90 text-sm mb-4">
                    <span className="font-semibold">
                      {t("calendar.stayTuned")}
                    </span>
                    <span className="opacity-60">•</span>
                    <a
                      href="https://whatsapp.com/channel/0029Vb6kmSUFy72JtZoyDf3O"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white hover:underline transition-colors font-medium flex items-center gap-1.5"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                      {t("calendar.whatsappChannel")}
                    </a>
                  </div>
                  <a
                    href="https://whatsapp.com/channel/0029Vb6kmSUFy72JtZoyDf3O"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 hover:bg-indigo-50 font-bold rounded-full shadow-lg transition-all hover:scale-[1.03] active:scale-95 text-sm md:text-base cursor-pointer"
                  >
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>WhatsApp Icon</title>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    {t("calendar.joinGroup")}
                  </a>
                </div>
                {/* QR Code with Premium Glowing Glassmorphism Wrapper */}
                <div className="relative group self-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
                  <a
                    href="https://whatsapp.com/channel/0029Vb6kmSUFy72JtZoyDf3O"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex flex-col items-center p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl hover:bg-white/15 transition-all"
                  >
                    {/* biome-ignore lint/performance/noImgElement: Using local image in public */}
                    <img
                      src="/qr group.png"
                      alt="WhatsApp QR Code"
                      className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-white p-1.5 shadow-md"
                    />
                    <span className="text-white/95 text-[11px] font-bold mt-2.5 px-2 py-0.5 bg-black/20 rounded-full border border-white/10">
                      {t("calendar.whatsappChannel")}
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Days of Week - Translucent Styling */}
            <div className="grid grid-cols-7 bg-slate-100/80 backdrop-blur-sm rounded-xl py-3 mb-4 shadow-sm px-2 gap-2">
              {[
                "sunday",
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday",
                "saturday",
              ].map((day) => (
                <div
                  key={day}
                  className="text-center font-extrabold text-slate-700 text-[10px] md:text-xs uppercase tracking-wide"
                >
                  {t(`calendar.days.${day}`)}
                </div>
              ))}
            </div>

            {/* Location Info Header Bar */}
            <div className="bg-gradient-to-r from-indigo-50/50 via-purple-50/30 to-indigo-50/50 px-6 py-3.5 rounded-xl border border-indigo-100/50 flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6 shadow-sm">
              <div className="flex items-center gap-2 text-indigo-950 font-semibold text-xs md:text-sm">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs">
                  📍
                </span>
                <span>{t("calendar.events.address")}</span>
              </div>
              <div className="flex items-center gap-2 text-indigo-950 font-semibold text-xs md:text-sm">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs">
                  📞
                </span>
                <span>(828) 242-7345</span>
              </div>
            </div>

            {/* Calendar Days - June 2026 Floating Cards */}
            <div className="grid grid-cols-7 gap-3 md:gap-4 p-1">
              {/* Week 1 - June starts on Monday */}
              {/* Sunday May 31 - Location Card in Grid */}
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50/30 border border-slate-100 rounded-2xl p-3 flex flex-col justify-center items-center text-center min-h-[110px] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <MapPin className="w-5 h-5 text-indigo-600 mb-1" />
                <span className="text-[10px] md:text-xs font-bold leading-tight text-slate-800">
                  503 Mill St.,
                </span>
                <span className="text-[9px] md:text-[10px] text-slate-500 leading-tight">
                  Sylva NC 28779
                </span>
              </div>

              {/* Monday - June 1 */}
              <div className="bg-white rounded-2xl border border-slate-100/80 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] group">
                <div className="font-extrabold text-base md:text-lg text-slate-700 group-hover:text-indigo-600 transition-colors">
                  1
                </div>
                <div className="text-[9px] md:text-[10px] text-indigo-600/80 font-bold mt-auto flex items-center gap-1 bg-indigo-50/60 py-1 px-1.5 rounded-lg border border-indigo-100/30">
                  <span>📞</span>
                  <span className="truncate">(828) 242-7345</span>
                </div>
              </div>

              {/* Tuesday - June 2 */}
              <div className="bg-white rounded-2xl border border-slate-100/80 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-indigo-100/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="font-bold text-base md:text-lg text-slate-500">
                  2
                </div>
              </div>

              {/* Wednesday - June 3 - Open Pantry + Cooking Class */}
              <div className="bg-gradient-to-br from-emerald-50/60 to-white rounded-2xl border border-emerald-100 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="flex justify-between items-start">
                  <div className="font-extrabold text-base md:text-lg text-slate-800">
                    3
                  </div>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-md shadow-emerald-200" />
                </div>
                <div className="space-y-1.5 mt-2">
                  <div className="flex flex-col bg-emerald-500/10 rounded-lg p-1 border border-emerald-500/20">
                    <span className="text-[9px] md:text-[10px] text-emerald-800 font-extrabold leading-tight">
                      {t("calendar.events.openPantry")}
                    </span>
                    <span className="text-[8px] md:text-[9px] text-emerald-600 font-bold">
                      2-6pm
                    </span>
                  </div>
                  <div className="flex flex-col bg-purple-500/10 rounded-lg p-1 border border-purple-500/20">
                    <span className="text-[9px] md:text-[10px] text-purple-800 font-extrabold leading-tight">
                      {t("calendar.events.cookingClasses")}
                    </span>
                    <span className="text-[8px] md:text-[9px] text-purple-600 font-bold">
                      11am-12:30pm
                    </span>
                  </div>
                </div>
              </div>

              {/* Thursday - June 4 - Open Pantry */}
              <div className="bg-gradient-to-br from-emerald-50/60 to-white rounded-2xl border border-emerald-100 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="flex justify-between items-start">
                  <div className="font-extrabold text-base md:text-lg text-slate-800">
                    4
                  </div>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-md shadow-emerald-200" />
                </div>
                <div className="mt-2 flex flex-col bg-emerald-500/10 rounded-lg p-1.5 border border-emerald-500/20">
                  <span className="text-[9px] md:text-[10px] text-emerald-800 font-extrabold leading-tight">
                    {t("calendar.events.openPantry")}
                  </span>
                  <span className="text-[8px] md:text-[9px] text-emerald-600 font-bold">
                    1-4pm
                  </span>
                </div>
              </div>

              {/* Friday - June 5 - Cooking Class */}
              <div className="bg-gradient-to-br from-purple-50/60 to-white rounded-2xl border border-purple-100 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="flex justify-between items-start">
                  <div className="font-extrabold text-base md:text-lg text-slate-800">
                    5
                  </div>
                  <span className="flex h-2 w-2 rounded-full bg-purple-500 shadow-md shadow-purple-200" />
                </div>
                <div className="mt-2 flex flex-col bg-purple-500/10 rounded-lg p-1.5 border border-purple-500/20">
                  <span className="text-[9px] md:text-[10px] text-purple-800 font-extrabold leading-tight">
                    {t("calendar.events.cookingClasses")}
                  </span>
                  <span className="text-[8px] md:text-[9px] text-purple-600 font-bold">
                    4-5:30pm
                  </span>
                </div>
              </div>

              {/* Saturday - June 6 */}
              <div className="bg-white rounded-2xl border border-slate-100/80 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-indigo-100/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="font-bold text-base md:text-lg text-slate-500">
                  6
                </div>
              </div>

              {/* Week 2 */}
              {/* Sunday - June 7 - Social Media */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50/30 border border-blue-100 rounded-2xl p-3 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] text-center">
                <div className="flex justify-between items-start">
                  <div className="font-extrabold text-base md:text-lg text-slate-800">
                    7
                  </div>
                  <span className="text-[8px] font-bold text-blue-600 bg-blue-100/50 px-1.5 py-0.5 rounded-full">
                    Social
                  </span>
                </div>
                <div className="mt-2 space-y-1">
                  <div className="flex justify-center gap-1.5 text-[9px] font-bold text-blue-600/90">
                    <span className="bg-blue-100/30 px-1 rounded">FB</span>
                    <span className="bg-pink-100/30 px-1 rounded text-pink-600">
                      IG
                    </span>
                    <span className="bg-green-100/30 px-1 rounded text-green-600">
                      WA
                    </span>
                  </div>
                  <div className="text-[9px] md:text-[10px] text-indigo-900 font-black tracking-tight">
                    @unidxswnc
                  </div>
                </div>
              </div>

              {/* Monday - June 8 */}
              <div className="bg-white rounded-2xl border border-slate-100/80 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-indigo-100/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="font-bold text-base md:text-lg text-slate-500">
                  8
                </div>
              </div>

              {/* Tuesday - June 9 - Closed */}
              <div className="bg-gradient-to-br from-red-50/40 to-white rounded-2xl border border-red-100 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="flex justify-between items-start">
                  <div className="font-extrabold text-base md:text-lg text-slate-800">
                    9
                  </div>
                  <span className="text-[9px] font-bold text-red-600 bg-red-100 px-1.5 py-0.5 rounded-full">
                    Closed
                  </span>
                </div>
                <div className="text-[10px] md:text-xs text-red-600 font-extrabold tracking-wide uppercase bg-red-50/50 p-1 rounded-lg border border-red-100/30 text-center">
                  {t("calendar.events.closed")}
                </div>
              </div>

              {/* Wednesday - June 10 - Closed + Cooking Class */}
              <div className="bg-gradient-to-br from-red-50/40 via-white to-purple-50/40 rounded-2xl border border-purple-100 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="flex justify-between items-start">
                  <div className="font-extrabold text-base md:text-lg text-slate-800">
                    10
                  </div>
                  <span className="text-[9px] font-bold text-red-600 bg-red-100 px-1.5 py-0.5 rounded-full">
                    Closed
                  </span>
                </div>
                <div className="space-y-1 mt-1">
                  <div className="text-[9px] text-red-600 font-extrabold tracking-wide uppercase bg-red-50/50 p-0.5 rounded-md border border-red-100/30 text-center">
                    {t("calendar.events.closed")}
                  </div>
                  <div className="flex flex-col bg-purple-500/10 rounded-lg p-1 border border-purple-500/20">
                    <span className="text-[8px] md:text-[9px] text-purple-800 font-extrabold leading-tight">
                      {t("calendar.events.cookingClasses")}
                    </span>
                    <span className="text-[7px] md:text-[8px] text-purple-600 font-bold">
                      11am-12:30pm
                    </span>
                  </div>
                </div>
              </div>

              {/* Thursday - June 11 - Closed */}
              <div className="bg-gradient-to-br from-red-50/40 to-white rounded-2xl border border-red-100 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="flex justify-between items-start">
                  <div className="font-extrabold text-base md:text-lg text-slate-800">
                    11
                  </div>
                  <span className="text-[9px] font-bold text-red-600 bg-red-100 px-1.5 py-0.5 rounded-full">
                    Closed
                  </span>
                </div>
                <div className="text-[10px] md:text-xs text-red-600 font-extrabold tracking-wide uppercase bg-red-50/50 p-1 rounded-lg border border-red-100/30 text-center">
                  {t("calendar.events.closed")}
                </div>
              </div>

              {/* Friday - June 12 - Cooking Class */}
              <div className="bg-gradient-to-br from-purple-50/60 to-white rounded-2xl border border-purple-100 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="flex justify-between items-start">
                  <div className="font-extrabold text-base md:text-lg text-slate-800">
                    12
                  </div>
                  <span className="flex h-2 w-2 rounded-full bg-purple-500 shadow-md shadow-purple-200" />
                </div>
                <div className="mt-2 flex flex-col bg-purple-500/10 rounded-lg p-1.5 border border-purple-500/20">
                  <span className="text-[9px] md:text-[10px] text-purple-800 font-extrabold leading-tight">
                    {t("calendar.events.cookingClasses")}
                  </span>
                  <span className="text-[8px] md:text-[9px] text-purple-600 font-bold">
                    4-5:30pm
                  </span>
                </div>
              </div>

              {/* Saturday - June 13 */}
              <div className="bg-white rounded-2xl border border-slate-100/80 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-indigo-100/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="font-bold text-base md:text-lg text-slate-500">
                  13
                </div>
              </div>

              {/* Week 3 */}
              {/* Sunday - June 14 */}
              <div className="bg-white rounded-2xl border border-slate-100/80 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-indigo-100/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="font-bold text-base md:text-lg text-slate-500">
                  14
                </div>
              </div>

              {/* Monday - June 15 */}
              <div className="bg-white rounded-2xl border border-slate-100/80 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-indigo-100/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="font-bold text-base md:text-lg text-slate-500">
                  15
                </div>
              </div>

              {/* Tuesday - June 16 */}
              <div className="bg-white rounded-2xl border border-slate-100/80 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-indigo-100/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="font-bold text-base md:text-lg text-slate-500">
                  16
                </div>
              </div>

              {/* Wednesday - June 17 - Open Pantry */}
              <div className="bg-gradient-to-br from-emerald-50/60 to-white rounded-2xl border border-emerald-100 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="flex justify-between items-start">
                  <div className="font-extrabold text-base md:text-lg text-slate-800">
                    17
                  </div>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-md shadow-emerald-200" />
                </div>
                <div className="mt-2 flex flex-col bg-emerald-500/10 rounded-lg p-1.5 border border-emerald-500/20">
                  <span className="text-[9px] md:text-[10px] text-emerald-800 font-extrabold leading-tight">
                    {t("calendar.events.openPantry")}
                  </span>
                  <span className="text-[8px] md:text-[9px] text-emerald-600 font-bold">
                    2-6pm
                  </span>
                </div>
              </div>

              {/* Thursday - June 18 - Open Pantry */}
              <div className="bg-gradient-to-br from-emerald-50/60 to-white rounded-2xl border border-emerald-100 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="flex justify-between items-start">
                  <div className="font-extrabold text-base md:text-lg text-slate-800">
                    18
                  </div>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-md shadow-emerald-200" />
                </div>
                <div className="mt-2 flex flex-col bg-emerald-500/10 rounded-lg p-1.5 border border-emerald-500/20">
                  <span className="text-[9px] md:text-[10px] text-emerald-800 font-extrabold leading-tight">
                    {t("calendar.events.openPantry")}
                  </span>
                  <span className="text-[8px] md:text-[9px] text-emerald-600 font-bold">
                    1-4pm
                  </span>
                </div>
              </div>

              {/* Friday - June 19 */}
              <div className="bg-white rounded-2xl border border-slate-100/80 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-indigo-100/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="font-bold text-base md:text-lg text-slate-500">
                  19
                </div>
              </div>

              {/* Saturday - June 20 */}
              <div className="bg-white rounded-2xl border border-slate-100/80 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-indigo-100/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="font-bold text-base md:text-lg text-slate-500">
                  20
                </div>
              </div>

              {/* Week 4 */}
              {/* Sunday - June 21 - MANNA Foodbank */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50/30 border border-amber-100 rounded-2xl p-3 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] text-left">
                <div className="flex justify-between items-start">
                  <div className="font-extrabold text-base md:text-lg text-slate-800">
                    21
                  </div>
                  <span className="text-[8px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded-full">
                    MANNA
                  </span>
                </div>
                <div className="mt-1.5 space-y-1">
                  <div className="text-[9px] font-extrabold text-amber-800 leading-tight">
                    MANNA FOODBANK
                  </div>
                  <div className="text-[8px] text-amber-900/90 leading-tight">
                    Helpline:{" "}
                    <span className="font-bold text-[9px]">(828) 290-9749</span>
                  </div>
                  <a
                    href="https://mannafoodbank.org/find-food/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[8px] text-amber-700 underline block font-semibold hover:text-amber-800 transition-colors"
                  >
                    mannafoodbank.org
                  </a>
                </div>
              </div>

              {/* Monday - June 22 */}
              <div className="bg-white rounded-2xl border border-slate-100/80 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-indigo-100/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="font-bold text-base md:text-lg text-slate-500">
                  22
                </div>
              </div>

              {/* Tuesday - June 23 - Closed */}
              <div className="bg-gradient-to-br from-red-50/40 to-white rounded-2xl border border-red-100 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="flex justify-between items-start">
                  <div className="font-extrabold text-base md:text-lg text-slate-800">
                    23
                  </div>
                  <span className="text-[9px] font-bold text-red-600 bg-red-100 px-1.5 py-0.5 rounded-full">
                    Closed
                  </span>
                </div>
                <div className="text-[10px] md:text-xs text-red-600 font-extrabold tracking-wide uppercase bg-red-50/50 p-1 rounded-lg border border-red-100/30 text-center">
                  {t("calendar.events.closed")}
                </div>
              </div>

              {/* Wednesday - June 24 - Closed */}
              <div className="bg-gradient-to-br from-red-50/40 to-white rounded-2xl border border-red-100 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="flex justify-between items-start">
                  <div className="font-extrabold text-base md:text-lg text-slate-800">
                    24
                  </div>
                  <span className="text-[9px] font-bold text-red-600 bg-red-100 px-1.5 py-0.5 rounded-full">
                    Closed
                  </span>
                </div>
                <div className="text-[10px] md:text-xs text-red-600 font-extrabold tracking-wide uppercase bg-red-50/50 p-1 rounded-lg border border-red-100/30 text-center">
                  {t("calendar.events.closed")}
                </div>
              </div>

              {/* Thursday - June 25 - Closed */}
              <div className="bg-gradient-to-br from-red-50/40 to-white rounded-2xl border border-red-100 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="flex justify-between items-start">
                  <div className="font-extrabold text-base md:text-lg text-slate-800">
                    25
                  </div>
                  <span className="text-[9px] font-bold text-red-600 bg-red-100 px-1.5 py-0.5 rounded-full">
                    Closed
                  </span>
                </div>
                <div className="text-[10px] md:text-xs text-red-600 font-extrabold tracking-wide uppercase bg-red-50/50 p-1 rounded-lg border border-red-100/30 text-center">
                  {t("calendar.events.closed")}
                </div>
              </div>

              {/* Friday - June 26 */}
              <div className="bg-white rounded-2xl border border-slate-100/80 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-indigo-100/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="font-bold text-base md:text-lg text-slate-500">
                  26
                </div>
              </div>

              {/* Saturday - June 27 */}
              <div className="bg-white rounded-2xl border border-slate-100/80 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-indigo-100/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="font-bold text-base md:text-lg text-slate-500">
                  27
                </div>
              </div>

              {/* Week 5 */}
              {/* Sunday - June 28 */}
              <div className="bg-white rounded-2xl border border-slate-100/80 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-indigo-100/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="font-bold text-base md:text-lg text-slate-500">
                  28
                </div>
              </div>

              {/* Monday - June 29 */}
              <div className="bg-white rounded-2xl border border-slate-100/80 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-indigo-100/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="font-bold text-base md:text-lg text-slate-500">
                  29
                </div>
              </div>

              {/* Tuesday - June 30 */}
              <div className="bg-white rounded-2xl border border-slate-100/80 p-3 md:p-4 min-h-[110px] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-indigo-100/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                <div className="font-bold text-base md:text-lg text-slate-500">
                  30
                </div>
              </div>

              {/* Cooking Classes Summary Spanning Last 4 Columns */}
              <div className="col-span-4 bg-gradient-to-br from-purple-600 via-indigo-600 to-indigo-700 text-white rounded-2xl p-4 shadow-md flex flex-col justify-between border border-purple-500/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-lg">🍳</span>
                    <h4 className="font-extrabold text-xs md:text-sm tracking-wide uppercase text-purple-100">
                      {t("calendar.events.cookingClasses")}
                    </h4>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[10px] md:text-xs text-white/95 font-medium">
                    <li className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-300" />
                      June 3rd (11am-12:30pm)
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-300" />
                      June 5th (4pm-5:30pm)
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-300" />
                      June 10th (11am-12:30pm)
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-300" />
                      June 12th (4pm-5:30pm)
                    </li>
                  </ul>
                </div>
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
                href="mailto:bodega@unidxswnc.org"
                className="text-blue-600 hover:text-blue-700 font-semibold underline"
              >
                bodega@unidxswnc.org
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
            backgroundImage: "url('/Fondo2.webp')",
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
            {services.map((service) => (
              <motion.div
                key={service.title}
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
            {howToHelp.map((item) => (
              <motion.div
                key={item.title}
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

      {/* Map / Location Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              {t("location.title")}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-700 mb-8"
            >
              {t("location.subtitle")}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-white/60"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.1234567890!2d-83.2218064!3d35.3737867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885915004dd228f7%3A0x53b4262b6ea76d6d!2sUnidxs%20of%20WNC!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Unidxs of WNC Location"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <a
              href="https://www.google.com/maps/place/Unidxs+of+WNC/@35.3737867,-83.2218064,17z"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-xl transition-all cursor-pointer"
              >
                <MapPin className="w-5 h-5" />
                {t("location.openInMaps")}
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Fondo4.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/80 to-black/80" />

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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-full shadow-2xl hover:shadow-xl transition-all cursor-pointer w-full"
              >
                <Mail className="w-5 h-5" />
                {t("cta.button")}
              </motion.div>
            </Link>

            <a
              href="https://whatsapp.com/channel/0029Vb6kmSUFy72JtZoyDf3O"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-xl transition-all cursor-pointer w-full"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>WhatsApp Icon</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {t("calendar.whatsappChannel")}
              </motion.div>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
