"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Eye,
  GraduationCap,
  HandHeart,
  Heart,
  Lightbulb,
  Newspaper,
  Palette,
  Scale,
  ShoppingBag,
  Sparkles,
  Store,
  Target,
  UserCheck,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function About() {
  const t = useTranslations("about");
  const tDialog = useTranslations("dialog");
  const locale = useLocale();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [activeNewsletterPage, setActiveNewsletterPage] = useState(0);
  const [newsletterLang, setNewsletterLang] = useState<"es" | "en">(
    locale === "es" ? "es" : "en"
  );

  const spanishNewsletterPages = [
    "/post/Spanish NL Sept. Draft (5)_page-0001.jpg",
    "/post/Spanish NL Sept. Draft (5)_page-0002.jpg",
    "/post/Spanish NL Sept. Draft (5)_page-0003.jpg",
    "/post/Spanish NL Sept. Draft (5)_page-0004.jpg",
    "/post/Spanish NL Sept. Draft (5)_page-0005.jpg",
  ];

  const englishNewsletterPages = [
    "/post/NL Sept. Draft (3)_page-0001.jpg",
    "/post/NL Sept. Draft (3)_page-0002.jpg",
    "/post/NL Sept. Draft (3)_page-0003.jpg",
    "/post/NL Sept. Draft (3)_page-0004.jpg",
    "/post/NL Sept. Draft (3)_page-0005.jpg",
  ];

  const currentNewsletterPages =
    newsletterLang === "es" ? spanishNewsletterPages : englishNewsletterPages;

  useEffect(() => {
    if (!isNewsletterOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsNewsletterOpen(false);
      } else if (e.key === "ArrowLeft") {
        setActiveNewsletterPage((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "ArrowRight") {
        setActiveNewsletterPage((prev) => Math.min(prev + 1, 4));
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isNewsletterOpen]);

  const newsletterHighlights = [
    {
      icon: ShoppingBag,
      tag: t("newsletter.highlights.pantry.tag"),
      title: t("newsletter.highlights.pantry.title"),
      desc: t("newsletter.highlights.pantry.desc"),
      color: "from-emerald-500 to-green-600",
      pageIndex: 1,
    },
    {
      icon: Store,
      tag: t("newsletter.highlights.thrift.tag"),
      title: t("newsletter.highlights.thrift.title"),
      desc: t("newsletter.highlights.thrift.desc"),
      color: "from-purple-500 to-indigo-600",
      pageIndex: 2,
    },
    {
      icon: GraduationCap,
      tag: t("newsletter.highlights.education.tag"),
      title: t("newsletter.highlights.education.title"),
      desc: t("newsletter.highlights.education.desc"),
      color: "from-blue-500 to-cyan-600",
      pageIndex: 2,
    },
    {
      icon: Palette,
      tag: t("newsletter.highlights.community.tag"),
      title: t("newsletter.highlights.community.title"),
      desc: t("newsletter.highlights.community.desc"),
      color: "from-amber-500 to-orange-600",
      pageIndex: 3,
    },
  ];

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

  const _valueIcons = [
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
                  key={item}
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

      {/* Community Highlights & September 2026 Newsletter Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-50 via-purple-50/20 to-white relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-gradient-to-tr from-purple-200/25 via-pink-200/20 to-indigo-200/20 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold bg-purple-100 text-purple-800 border border-purple-200/80 shadow-sm">
                <Sparkles className="w-4 h-4 text-purple-600" />
                {t("newsletter.badge")}
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
            >
              {t("newsletter.title")}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              {t("newsletter.subtitle")}
            </motion.p>
          </motion.div>

          {/* Main Grid: Newsletter Cover Preview & Highlights Cards */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Interactive Newsletter Cover Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950 rounded-3xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden border border-purple-800/40 group"
            >
              <div className="absolute -right-16 -top-16 w-56 h-56 bg-purple-500/15 rounded-full blur-2xl group-hover:bg-purple-500/25 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-purple-200">
                    {t("newsletter.modal.edition")}
                  </span>
                  <span className="text-xs font-medium text-purple-300/80">
                    5 {locale === "es" ? "páginas" : "pages"}
                  </span>
                </div>

                {/* Clickable cover preview */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveNewsletterPage(0);
                    setIsNewsletterOpen(true);
                  }}
                  className="w-full text-left relative cursor-pointer rounded-2xl overflow-hidden shadow-2xl border border-white/20 group-hover:border-purple-300/80 transition-all duration-300 group-hover:scale-[1.02]"
                >
                  {/* biome-ignore lint/performance/noImgElement: Newsletter cover preview */}
                  <img
                    src={currentNewsletterPages[0]}
                    alt={t("newsletter.modal.title")}
                    className="w-full h-64 sm:h-72 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-white bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/30">
                      <BookOpen className="w-3.5 h-3.5 text-purple-300" />
                      <span>{t("newsletter.coverCaption")}</span>
                    </div>
                  </div>
                </button>

                <blockquote className="mt-5 text-sm md:text-base text-purple-100/90 italic border-l-2 border-purple-400 pl-3.5 font-light">
                  {t("newsletter.quote")}
                </blockquote>
              </div>

              {/* Action Button to View Details */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <motion.button
                  type="button"
                  onClick={() => {
                    setActiveNewsletterPage(0);
                    setIsNewsletterOpen(true);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-500 hover:via-pink-500 hover:to-rose-500 text-white font-semibold text-base shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>{t("newsletter.viewButton")}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column: 4 Key Highlights from the Newsletter */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {newsletterHighlights.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}
                      >
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveNewsletterPage(item.pageIndex);
                      setIsNewsletterOpen(true);
                    }}
                    className="mt-5 pt-3 border-t border-slate-100 text-xs font-bold text-purple-600 hover:text-purple-800 flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <span>
                      {t("newsletter.modal.page")} {item.pageIndex + 1}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
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
          <p className="text-xl text-gray-600 mb-8">{t("cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <motion.button
              onClick={() => setIsDialogOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer w-full sm:w-auto text-center"
            >
              {t("cta.button")}
            </motion.button>

            <motion.a
              href={`https://notices.unidxswnc.org/${locale}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white border-2 border-purple-600 text-purple-700 text-base font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-purple-50 transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2 cursor-pointer no-underline"
            >
              <Newspaper className="w-5 h-5 text-purple-600" />
              <span>{t("cta.noticesButton")}</span>
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Dialog Modal */}
      {isDialogOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Cerrar modal"
            className="absolute inset-0 -z-10 w-full h-full cursor-default bg-transparent border-0 p-0"
            onClick={() => setIsDialogOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative z-10"
          >
            <button
              type="button"
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
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

      {/* Newsletter Full Document Viewer Modal */}
      {isNewsletterOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md"
        >
          {/* Dismiss backdrop */}
          <button
            type="button"
            aria-label="Cerrar boletín"
            className="absolute inset-0 -z-10 w-full h-full cursor-default bg-transparent border-0 p-0"
            onClick={() => setIsNewsletterOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-slate-950 border border-white/15 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[96vh] flex flex-col overflow-hidden text-white relative z-10"
          >
            {/* Modal Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-md">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {t("newsletter.modal.title")}
                  </h3>
                  <p className="text-xs text-purple-300">
                    {t("newsletter.modal.edition")} • {t("newsletter.modal.page")}{" "}
                    {activeNewsletterPage + 1} {t("newsletter.modal.of")}{" "}
                    {currentNewsletterPages.length}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Language Switcher */}
                <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/10 text-xs">
                  <button
                    type="button"
                    onClick={() => setNewsletterLang("es")}
                    className={`px-3 py-1 rounded-full font-semibold transition-colors cursor-pointer ${
                      newsletterLang === "es"
                        ? "bg-purple-600 text-white shadow"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    ES
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewsletterLang("en")}
                    className={`px-3 py-1 rounded-full font-semibold transition-colors cursor-pointer ${
                      newsletterLang === "en"
                        ? "bg-purple-600 text-white shadow"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    EN
                  </button>
                </div>

                {/* Open full resolution image */}
                <a
                  href={currentNewsletterPages[activeNewsletterPage]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
                  title={t("newsletter.modal.openFull")}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Close modal */}
                <button
                  type="button"
                  onClick={() => setIsNewsletterOpen(false)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
                  title={t("newsletter.modal.close")}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Page Title Subheader */}
            <div className="px-4 sm:px-6 py-2.5 bg-purple-950/40 border-b border-white/5 flex items-center justify-between">
              <p className="text-xs sm:text-sm text-purple-200 font-medium truncate">
                📌{" "}
                {
                  ((t.raw("newsletter.modal.pageTitles") as string[]) || [])[
                    activeNewsletterPage
                  ]
                }
              </p>
              <span className="text-[11px] text-gray-400 hidden sm:inline">
                {t("newsletter.modal.page")} {activeNewsletterPage + 1} /{" "}
                {currentNewsletterPages.length}
              </span>
            </div>

            {/* Main Document Viewer Canvas */}
            <div className="relative flex-1 min-h-0 bg-black/40 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
              {/* Previous page arrow button */}
              <button
                type="button"
                disabled={activeNewsletterPage === 0}
                onClick={() =>
                  setActiveNewsletterPage((prev) => Math.max(prev - 1, 0))
                }
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-purple-600 text-white border border-white/20 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xl cursor-pointer"
                title={t("newsletter.modal.prev")}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Page Image */}
              <div className="max-h-[58vh] sm:max-h-[64vh] flex items-center justify-center overflow-hidden">
                {/* biome-ignore lint/performance/noImgElement: Newsletter full page viewer */}
                <img
                  key={`${newsletterLang}-${activeNewsletterPage}`}
                  src={currentNewsletterPages[activeNewsletterPage]}
                  alt={`${t("newsletter.modal.title")} - ${t("newsletter.modal.page")} ${activeNewsletterPage + 1}`}
                  className="max-h-[58vh] sm:max-h-[64vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
                />
              </div>

              {/* Next page arrow button */}
              <button
                type="button"
                disabled={
                  activeNewsletterPage === currentNewsletterPages.length - 1
                }
                onClick={() =>
                  setActiveNewsletterPage((prev) =>
                    Math.min(prev + 1, currentNewsletterPages.length - 1)
                  )
                }
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-purple-600 text-white border border-white/20 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xl cursor-pointer"
                title={t("newsletter.modal.next")}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Bottom Controls & Thumbnail Strip */}
            <div className="p-3 sm:p-4 bg-slate-900/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Thumbnail Strip */}
              <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0">
                {currentNewsletterPages.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveNewsletterPage(index)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all cursor-pointer flex-shrink-0 ${
                      activeNewsletterPage === index
                        ? "border-purple-500 scale-105 shadow-md shadow-purple-500/30"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    {/* biome-ignore lint/performance/noImgElement: Newsletter thumbnail */}
                    <img
                      src={src}
                      alt={`Page ${index + 1}`}
                      className="w-10 h-14 object-cover object-top"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/70 text-[9px] text-center font-bold text-white py-0.5">
                      {index + 1}
                    </div>
                  </button>
                ))}
              </div>

              {/* Prev / Next buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={activeNewsletterPage === 0}
                  onClick={() =>
                    setActiveNewsletterPage((prev) => Math.max(prev - 1, 0))
                  }
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 disabled:opacity-40 disabled:pointer-events-none text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{t("newsletter.modal.prev")}</span>
                </button>

                <span className="text-xs text-gray-300 font-medium px-2">
                  {activeNewsletterPage + 1} / {currentNewsletterPages.length}
                </span>

                <button
                  type="button"
                  disabled={
                    activeNewsletterPage === currentNewsletterPages.length - 1
                  }
                  onClick={() =>
                    setActiveNewsletterPage((prev) =>
                      Math.min(prev + 1, currentNewsletterPages.length - 1)
                    )
                  }
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 disabled:opacity-40 disabled:pointer-events-none text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>{t("newsletter.modal.next")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
