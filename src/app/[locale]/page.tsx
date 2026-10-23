"use client";

import { motion } from "framer-motion";
import {
  Bus,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  Heart,
  MapPin,
  Sparkles,
  Users,
  Vote,
  X,
  ZoomIn,
} from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function MainPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  // Automatically open calendar dialog on page load
  useEffect(() => {
    setIsCalendarOpen(true);
  }, []);

  // Handle ESC key for poster modal
  useEffect(() => {
    if (!isPosterModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsPosterModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPosterModalOpen]);

  const t = useTranslations("main");
  const tDialog = useTranslations("dialog");
  const locale = useLocale();

  const calendarImgSrc =
    locale === "es"
      ? "/calendario octubre-español.png"
      : "/calendario octubre-english.png";

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
              filter: "brightness(0.7)",
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
              {t("Titulo")}
              <span className="block">{t("SubTitulo")}</span>
            </motion.h1>
            {/*         
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-lg sm:text-xl text-white mb-8 leading-relaxed bg-gradient-to-r from-purple-600/30 to-indigo-600/30 backdrop-blur-sm border-l-4 border-purple-400 p-6 rounded-lg shadow-lg"
        >
          {t('Descripcion')}
        </motion.p> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            ></motion.div>
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
              {t("about.title")}
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
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Community Icon</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                {t("about.paragraph1")}
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
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Success Icon</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                {t("about.paragraph2")}
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
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Heart Icon</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                {t("about.paragraph3")}
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
              href={`/${locale}/about`}
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-sans font-semibold text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t("about.button")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Vote Early & Free Voter Transportation Section (Poster Initiative) */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-indigo-50/40 to-slate-50 overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-0 translate-x-1/3 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold bg-indigo-100 text-indigo-900 border border-indigo-200/80 shadow-sm mb-4">
              <Vote className="w-4 h-4 text-indigo-600" />
              <span>{t("voteEarly.badge")}</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t("voteEarly.tag")}
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
                {t("voteEarly.title")}
              </span>
            </h2>

            <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("voteEarly.subtitle")}
            </p>
          </motion.div>

          {/* Main Grid: Poster Card (Left) & Information & Logistics (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Interactive Poster Showcase */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex flex-col items-center"
            >
              <div className="w-full max-w-md relative group">
                {/* Glow ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />

                {/* Card Container */}
                <div className="relative bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 p-4 sm:p-5 rounded-3xl border border-white/20 shadow-2xl text-white overflow-hidden">
                  {/* Floating Limited Seats Badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-lg shadow-rose-500/30">
                      <Sparkles className="w-3.5 h-3.5" />
                      {t("voteEarly.limitedSeats")}
                    </span>
                  </div>

                  {/* Clickable Image Preview */}
                  <button
                    type="button"
                    onClick={() => setIsPosterModalOpen(true)}
                    className="w-full relative rounded-2xl overflow-hidden cursor-pointer group/img block text-left border border-white/10"
                  >
                    {/* biome-ignore lint/performance/noImgElement: Poster preview */}
                    <img
                      src="/post/poster.jpeg"
                      alt={t("voteEarly.title")}
                      className="w-full h-auto object-cover rounded-2xl group-hover/img:scale-[1.03] transition-transform duration-500"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-white/90 text-gray-900 shadow-xl backdrop-blur-md">
                        <ZoomIn className="w-4 h-4 text-indigo-600" />
                        {t("voteEarly.clickToZoom")}
                      </span>
                    </div>
                  </button>

                  {/* Slogan card below poster */}
                  <div className="mt-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
                    <p className="text-sm sm:text-base font-semibold text-purple-200 italic leading-snug">
                      {t("voteEarly.slogan")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Structured Info, Schedules, Badges & Actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              {/* Limited seats alert bar */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-purple-500/10 border-l-4 border-amber-500 rounded-r-2xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-md">
                    <Bus className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">
                      {t("voteEarly.limitedSeats")}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {locale === "es"
                        ? "Reserva tu horario llegando puntual al punto de encuentro."
                        : "Secure your spot by arriving on time at the meeting location."}
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">
                  Sylva, NC
                </span>
              </div>

              {/* 4 Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date Card */}
                <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-3 group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                    {t("voteEarly.dateLabel")}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mt-0.5">
                    {t("voteEarly.dateValue")}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {locale === "es"
                      ? "Jornada de votación anticipada"
                      : "Early voting day initiative"}
                  </p>
                </div>

                {/* Departure Times Card */}
                <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-3 group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-600">
                    {t("voteEarly.departuresLabel")}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mt-0.5">
                    {t("voteEarly.departuresValue")}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {t("voteEarly.departuresDesc")}
                  </p>
                </div>

                {/* Meeting Point Card */}
                <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-3 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-rose-600">
                    {t("voteEarly.meetingPointLabel")}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mt-0.5">
                    {t("voteEarly.meetingPointValue")}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {t("voteEarly.meetingPointDesc")}
                  </p>
                </div>

                {/* Free Transport Card */}
                <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-3 group-hover:scale-110 transition-transform">
                    <Bus className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                    {t("voteEarly.costLabel")}
                  </span>
                  <h4 className="text-lg font-bold text-emerald-700 mt-0.5">
                    {t("voteEarly.costValue")}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {t("voteEarly.costDesc")}
                  </p>
                </div>
              </div>

              {/* Checkmarks / Benefits List */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-50/70 to-indigo-50/70 border border-purple-100/80">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-sm font-medium text-gray-800">
                      {t("voteEarly.features.safe")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-sm font-medium text-gray-800">
                      {t("voteEarly.features.eligible")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-sm font-medium text-gray-800">
                      {t("voteEarly.features.free")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-sm font-medium text-gray-800">
                      {t("voteEarly.features.vote")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setIsPosterModalOpen(true)}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
                >
                  <ZoomIn className="w-4 h-4" />
                  {t("voteEarly.viewPoster")}
                </button>

                <a
                  href="https://maps.google.com/?q=503+Mill+St,+Sylva,+NC+28779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-full shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  <MapPin className="w-4 h-4 text-rose-500" />
                  {t("voteEarly.openMaps")}
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </a>

                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:text-indigo-900 transition-colors ml-auto underline underline-offset-4"
                >
                  {t("voteEarly.contactUs")}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Empower Together Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/Fondo1.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-2xl"
            >
              {t("empower.title")}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 hover:bg-white/20 transition-all duration-500"
            >
              <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                {t("empower.paragraph")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <button
                type="button"
                onClick={() => setIsDialogOpen(true)}
                className="inline-block bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-1 hover:scale-105"
              >
                {t("empower.cta")}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dialog Modal */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm w-full h-full cursor-default border-none outline-none"
            onClick={() => setIsDialogOpen(false)}
            aria-label="Close dialog"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative z-10"
          >
            <button
              type="button"
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <title>Close Dialog</title>
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
              <p className="text-gray-600">{tDialog("getInvolved.subtitle")}</p>
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

      {/* Calendar Dialog - Auto opens on page load */}
      {isCalendarOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            className="fixed inset-0 bg-black/70 backdrop-blur-sm w-full h-full cursor-default border-none outline-none"
            onClick={() => setIsCalendarOpen(false)}
            aria-label="Close dialog"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-3xl shadow-2xl max-w-4xl lg:max-w-5xl w-full p-2 sm:p-3 relative z-10 overflow-hidden border border-white/40"
          >
            <button
              type="button"
              onClick={() => setIsCalendarOpen(false)}
              className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/80 text-white transition-all rounded-full p-2 shadow-xl backdrop-blur-md hover:scale-110 active:scale-95"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <title>Close Dialog</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="w-full flex justify-center rounded-2xl overflow-hidden">
              {/* biome-ignore lint/performance/noImgElement: Using local image in public */}
              <img
                src={calendarImgSrc}
                alt={
                  locale === "es"
                    ? "Calendario Octubre 2026 - UNIDXS"
                    : "October 2026 Calendar - UNIDXS"
                }
                className="w-full h-auto max-h-[85vh] rounded-2xl object-contain shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      )}

      {/* Poster Zoom Lightbox Modal */}
      {isPosterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md">
          <button
            type="button"
            className="fixed inset-0 w-full h-full cursor-default border-none outline-none bg-transparent"
            onClick={() => setIsPosterModalOpen(false)}
            aria-label={t("voteEarly.close")}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-slate-950 border border-white/20 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[95vh] flex flex-col overflow-hidden text-white relative z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                  <Vote className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {t("voteEarly.modalTitle")}
                  </h3>
                  <p className="text-xs text-purple-300">
                    503 Mill St, Sylva, NC • {t("voteEarly.dateValue")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/post/poster.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
                  title={t("voteEarly.openOriginal")}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsPosterModalOpen(false)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
                  title={t("voteEarly.close")}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Poster Canvas */}
            <div className="relative flex-1 min-h-0 bg-black/60 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
              {/* biome-ignore lint/performance/noImgElement: Full poster modal display */}
              <img
                src="/post/poster.jpeg"
                alt={t("voteEarly.title")}
                className="max-h-[75vh] w-auto rounded-2xl shadow-2xl object-contain border border-white/10"
              />
            </div>
          </motion.div>
        </div>
      )}
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
  );
}
