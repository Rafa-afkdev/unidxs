"use client";

import { motion } from "framer-motion";
import { Clock, ExternalLink, Share2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function NoticesPage() {
  const t = useTranslations("notices");
  const locale = useLocale();

  // Dynamic host determination for main site links
  const mainHost =
    typeof window !== "undefined" && window.location.host.includes("localhost")
      ? "http://localhost:3000"
      : "https://unidxswnc.org";

  const mainUrl = `${mainHost}/${locale}`;

  // Article direct URL
  const fullArticleUrl =
    "https://quepasamedia.com/carolina-del-norte/mas-de-150-lideres-latinos-analizan-en-washington-los-retos-de-sus-comunidades/";

  // Helper to share on WhatsApp
  const handleShareWhatsApp = () => {
    const title = t("items.notice4.title");
    const text = encodeURIComponent(`*${title}*\n${fullArticleUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  // Date formatted today
  const todayDateFormatted =
    locale === "es" ? "Martes, 2 de Junio de 2026" : "Tuesday, June 2, 2026";

  const mastheadTitle =
    locale === "es" ? "EL VOCERO DE UNIDXS" : "THE UNIDXS HERALD";

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-slate-900 pb-24 selection:bg-amber-100 selection:text-amber-900">
      {/* Newspaper Header (Masthead) */}
      <header className="max-w-4xl mx-auto px-4 pt-10 md:pt-14 pb-4">
        <div className="flex flex-col items-center">
          {/* Top small links */}
          <div className="w-full flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-slate-500 border-b border-slate-200 pb-3 mb-6">
            <a
              href={mainUrl}
              className="hover:text-amber-700 transition-colors flex items-center gap-1"
            >
              <span>&larr; {t("backToMain")}</span>
            </a>
            <div>VOL. IV NO. 2</div>
            <div>
              {locale === "es"
                ? "WNC, Carolina del Norte"
                : "WNC, North Carolina"}
            </div>
          </div>

          {/* Main Masthead Banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-serif font-black tracking-tighter text-4xl sm:text-6xl md:text-7xl text-slate-900 select-none leading-none">
              {mastheadTitle}
            </h1>
            <p className="mt-2 text-xs md:text-sm italic font-serif text-slate-600 max-w-lg mx-auto">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* Newspaper metadata row */}
          <div className="w-full border-y-4 border-double border-slate-900 py-2.5 mt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono font-bold uppercase tracking-widest text-slate-800 gap-2">
            <div>{todayDateFormatted}</div>
            <div className="hidden sm:block text-slate-400">|</div>
            <div>{t("locationText")}</div>
            <div className="hidden sm:block text-slate-400">|</div>
            <div className="bg-slate-900 text-white px-2 py-0.5 rounded text-[10px]">
              {t("free")}
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 mt-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-slate-200/50 p-6 md:p-10 rounded-3xl shadow-md group"
        >
          {/* Main Featured Photo */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm border border-slate-200">
            {/* biome-ignore lint/performance/noImgElement: Using native img */}
            <img
              src="/group.jpg"
              alt={t("items.notice4.title")}
              className="object-cover w-full h-full group-hover:scale-[1.01] transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur text-white px-3 py-1 rounded text-xs font-black tracking-wider uppercase">
              {t("featured")}
            </div>
          </div>

          {/* Article Info */}
          <div className="mt-8">
            <div className="flex items-center gap-3 text-xs text-slate-500 font-bold uppercase tracking-wider mb-3">
              <span className="text-amber-800 font-extrabold">
                {t("categories.general")}
              </span>
              <span>&bull;</span>
              <span>Luis Neyra</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {t("items.notice4.date")}
              </span>
            </div>

            <h2 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 leading-tight tracking-tight mb-6">
              {t("items.notice4.title")}
            </h2>

            <div className="border-t border-slate-100 pt-6">
              {/* Styled paragraph with a drop cap */}
              <p className="font-serif text-slate-800 text-base md:text-lg leading-relaxed antialiased first-letter:text-4xl first-letter:font-black first-letter:float-left first-letter:mr-2 first-letter:mt-1 whitespace-pre-line">
                {t("items.notice4.description")}
              </p>
            </div>

            {/* Premium Call to Action Bar */}
            <div className="border-t border-slate-100 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <a
                href={fullArticleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center text-center no-underline cursor-pointer"
              >
                <span>{t("readMore")}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-end">
                <button
                  type="button"
                  onClick={handleShareWhatsApp}
                  className="flex items-center justify-center gap-2 px-5 py-3 border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl shadow-sm transition-all hover:scale-105 active:scale-95 w-full sm:w-auto cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-slate-500" />
                  <span>{t("shareWhatsApp")}</span>
                </button>
              </div>
            </div>
          </div>
        </motion.article>
      </main>

      {/* Footer Return Link */}
      <footer className="max-w-4xl mx-auto px-4 mt-8 text-center text-xs text-slate-400 font-mono">
        <a
          href={mainUrl}
          className="hover:text-amber-800 underline transition-colors"
        >
          {t("backToMain")}
        </a>
      </footer>
    </div>
  );
}
