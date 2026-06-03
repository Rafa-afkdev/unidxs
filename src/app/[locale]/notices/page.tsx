"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Clock,
  GraduationCap,
  Info,
  MessageSquare,
  Newspaper,
  Package,
  Search,
  Share2,
  X,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export default function NoticesPage() {
  const t = useTranslations("notices");
  const locale = useLocale();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeNoticeId, setActiveNoticeId] = useState<string | null>(null);

  // Dynamic host determination for main site links
  const mainHost =
    typeof window !== "undefined" && window.location.host.includes("localhost")
      ? "http://localhost:3000"
      : "https://unidxswnc.org";

  const mainUrl = `${mainHost}/${locale}`;

  // Notice items data matching the translation structure
  const noticesData = [
    {
      id: "notice4",
      icon: Newspaper,
      color: "from-amber-500 to-orange-600",
      categoryKey: "general",
      image: "/group.jpg",
      featured: true,
      author: "Luis Neyra",
    },
    {
      id: "notice1",
      icon: Package,
      color: "from-emerald-500 to-teal-500",
      categoryKey: "pantry",
      image: "/pantry_notice_thumb.png",
      author: "UNIDXS Bodega",
    },
    {
      id: "notice2",
      icon: Calendar,
      color: "from-purple-500 to-indigo-500",
      categoryKey: "events",
      image: "/cooking_notice_thumb.png",
      author: "UNIDXS Eventos",
    },
    {
      id: "notice3",
      icon: Info,
      color: "from-blue-500 to-cyan-500",
      categoryKey: "general",
      image: "/volunteer_notice_thumb.png",
      author: "UNIDXS WNC",
    },
  ];

  // Quick Bulletins in the sidebar
  const quickAlertsKeys = ["q1", "q2", "q3"];

  // Filter categories
  const categories = ["all", "pantry", "education", "events", "general"];

  // Filter notice items based on search and category
  const filteredNotices = noticesData.filter((item) => {
    const title = t(`items.${item.id}.title`).toLowerCase();
    const description = t(`items.${item.id}.description`).toLowerCase();
    const matchesSearch =
      title.includes(searchTerm.toLowerCase()) ||
      description.includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || item.categoryKey === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "pantry":
        return <Package className="w-3.5 h-3.5" />;
      case "education":
        return <GraduationCap className="w-3.5 h-3.5" />;
      case "events":
        return <Calendar className="w-3.5 h-3.5" />;
      default:
        return <Info className="w-3.5 h-3.5" />;
    }
  };

  const activeNotice = noticesData.find((n) => n.id === activeNoticeId);

  // Helper to share on WhatsApp
  const handleShareWhatsApp = (id: string) => {
    const title = t(`items.${id}.title`);
    const text = encodeURIComponent(`*${title}*\n${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  // Date formatted today
  const todayDateFormatted =
    locale === "es" ? "Martes, 2 de Junio de 2026" : "Tuesday, June 2, 2026";

  const mastheadTitle =
    locale === "es" ? "EL VOCERO DE UNIDXS" : "THE UNIDXS HERALD";

  const isSearchActive = searchTerm !== "" || selectedCategory !== "all";

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-slate-900 pb-20 selection:bg-amber-100 selection:text-amber-900">
      {/* Newspaper Header (Masthead) */}
      <header className="max-w-7xl mx-auto px-4 pt-10 md:pt-14 pb-6">
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
            <h1 className="font-serif font-black tracking-tighter text-4xl sm:text-6xl md:text-8xl text-slate-900 select-none leading-none">
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
      <main className="max-w-7xl mx-auto px-4 mt-8">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left / Center Grid (2/3 width on desktop): Article Feeds */}
          <div className="lg:col-span-2 space-y-10">
            {isSearchActive ? (
              // Search / Filter view: Simple News Grid
              <div>
                <h2 className="font-serif text-2xl font-black border-b-2 border-slate-900 pb-2 mb-6 uppercase tracking-tight">
                  {locale === "es"
                    ? "Resultados de búsqueda"
                    : "Search Results"}{" "}
                  ({filteredNotices.length})
                </h2>

                {filteredNotices.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-8">
                    {filteredNotices.map((notice, idx) => (
                      <motion.article
                        key={notice.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
                      >
                        {/* Thumbnail Container */}
                        <div className="aspect-video relative overflow-hidden bg-slate-100 shrink-0">
                          {/* biome-ignore lint/performance/noImgElement: Native img is easier to configure locally */}
                          <img
                            src={notice.image}
                            alt={t(`items.${notice.id}.title`)}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                          />
                          <div
                            className={`absolute top-3 left-3 px-2 py-0.5 text-[9px] font-black tracking-wider uppercase text-white rounded bg-gradient-to-r ${notice.color}`}
                          >
                            {t(`categories.${notice.categoryKey}`)}
                          </div>
                        </div>

                        {/* Text details */}
                        <div className="p-5 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold mb-2">
                              <span>{notice.author}</span>
                              <span>&bull;</span>
                              <span>{t(`items.${notice.id}.date`)}</span>
                            </div>
                            <h3 className="font-serif font-black text-lg md:text-xl text-slate-900 leading-tight group-hover:text-amber-800 transition-colors mb-3 line-clamp-2">
                              {t(`items.${notice.id}.title`)}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                              {t(`items.${notice.id}.description`)}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => setActiveNoticeId(notice.id)}
                            className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-900 group/btn mt-auto"
                          >
                            <span>{t("readMore")}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-white border border-dashed border-slate-200 rounded-2xl">
                    <Newspaper className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-500 font-medium">
                      {t("noResults")}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              // Traditional Newspaper Front Page Layout
              <div className="space-y-10">
                {(() => {
                  const featured = noticesData.find((n) => n.featured);
                  if (!featured) return null;
                  return (
                    <motion.article
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="border-b border-slate-200 pb-10 group"
                    >
                      <div className="grid md:grid-cols-1 gap-6">
                        {/* Large Image Header */}
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md">
                          {/* biome-ignore lint/performance/noImgElement: Using native img */}
                          <img
                            src={featured.image}
                            alt={t(`items.${featured.id}.title`)}
                            className="object-cover w-full h-full group-hover:scale-[1.01] transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur text-white px-3 py-1 rounded text-xs font-black tracking-wider uppercase">
                            {t("featured")}
                          </div>
                        </div>

                        {/* Content text */}
                        <div className="mt-2">
                          <div className="flex items-center gap-3 text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">
                            <span className="text-amber-800 font-extrabold">
                              {t(`categories.${featured.categoryKey}`)}
                            </span>
                            <span>&bull;</span>
                            <span>{featured.author}</span>
                            <span>&bull;</span>
                            <span>{t(`items.${featured.id}.date`)}</span>
                          </div>

                          <h2
                            onClick={() => setActiveNoticeId(featured.id)}
                            onKeyDown={(e) =>
                              e.key === "Enter" &&
                              setActiveNoticeId(featured.id)
                            }
                            className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 leading-tight tracking-tight hover:text-amber-800 transition-colors cursor-pointer"
                          >
                            {t(`items.${featured.id}.title`)}
                          </h2>

                          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-4 antialiased">
                            {t(`items.${featured.id}.description`)}
                          </p>

                          <div className="mt-6 flex justify-between items-center">
                            <button
                              type="button"
                              onClick={() => setActiveNoticeId(featured.id)}
                              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all hover:scale-105 active:scale-95"
                            >
                              <span>{t("readMore")}</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleShareWhatsApp(featured.id)}
                              className="p-2 text-slate-400 hover:text-green-600 rounded-full hover:bg-slate-100 transition-colors"
                              title={t("shareWhatsApp")}
                            >
                              <Share2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  );
                })()}

                {/* 2. Secondary Articles Section (2 Columns) */}
                <div>
                  <h3 className="font-serif text-xl font-black border-b-2 border-slate-900 pb-2 mb-6 uppercase tracking-wider">
                    {t("latestNews")}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    {noticesData
                      .filter((n) => !n.featured)
                      .map((notice, idx) => (
                        <motion.article
                          key={notice.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="flex flex-col group border-b border-slate-200/50 md:border-b-0 pb-6 md:pb-0"
                        >
                          <div className="aspect-video relative overflow-hidden rounded-xl bg-slate-100 shadow-sm mb-4">
                            {/* biome-ignore lint/performance/noImgElement: Using native img */}
                            <img
                              src={notice.image}
                              alt={t(`items.${notice.id}.title`)}
                              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-0.5 rounded text-[9px] font-black uppercase text-slate-800 tracking-wider">
                              {t(`categories.${notice.categoryKey}`)}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-[11px] text-slate-400 font-semibold mb-2">
                            <span>{notice.author}</span>
                            <span>&bull;</span>
                            <span>{t(`items.${notice.id}.date`)}</span>
                          </div>

                          <h4
                            onClick={() => setActiveNoticeId(notice.id)}
                            onKeyDown={(e) =>
                              e.key === "Enter" && setActiveNoticeId(notice.id)
                            }
                            className="font-serif font-black text-lg md:text-xl text-slate-900 leading-tight group-hover:text-amber-800 cursor-pointer transition-colors mb-2 line-clamp-2"
                          >
                            {t(`items.${notice.id}.title`)}
                          </h4>

                          <p className="text-slate-600 text-xs md:text-sm leading-relaxed line-clamp-3 mb-4">
                            {t(`items.${notice.id}.description`)}
                          </p>

                          <button
                            type="button"
                            onClick={() => setActiveNoticeId(notice.id)}
                            className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-900 group/btn mt-auto"
                          >
                            <span>{t("readMore")}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </motion.article>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column / Sidebar (1/3 width on desktop) */}
          <aside className="space-y-10 lg:border-l lg:border-slate-200 lg:pl-10">
            {/* 1. Search Box */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400">
                {locale === "es" ? "Búsqueda" : "Search"}
              </h4>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder={t("searchPlaceholder")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-sm font-medium text-slate-800 rounded-none shadow-sm"
                />
              </div>
            </div>

            {/* 2. Newspaper Sections directory (Categories) */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400">
                {locale === "es" ? "Secciones" : "Sections"}
              </h4>
              <div className="border-t border-slate-900 divide-y divide-slate-100 font-serif">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full py-3 flex items-center justify-between text-left transition-colors cursor-pointer group ${
                      selectedCategory === cat
                        ? "text-amber-800 font-extrabold font-serif"
                        : "text-slate-800 hover:text-amber-800 font-medium"
                    }`}
                  >
                    <span className="flex items-center gap-2 text-sm md:text-base capitalize">
                      {getCategoryIcon(cat)}
                      {t(`categories.${cat}`)}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 text-slate-300 group-hover:text-amber-800 transition-colors ${
                        selectedCategory === cat
                          ? "text-amber-800 scale-110"
                          : ""
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Quick Bulletins (Newspaper-styled mini updates) */}
            <div className="space-y-4">
              <div className="border-b-2 border-slate-900 pb-1">
                <h4 className="font-serif text-lg font-black uppercase tracking-tight">
                  {t("quickAlerts")}
                </h4>
                <p className="text-[10px] text-slate-500 italic mt-0.5">
                  {t("quickAlertsDesc")}
                </p>
              </div>

              <div className="divide-y divide-slate-200">
                {quickAlertsKeys.map((key) => (
                  <div key={key} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex justify-between items-baseline gap-2 mb-1">
                      <h5 className="font-serif font-black text-sm text-slate-950">
                        {t(`quickItems.${key}.title`)}
                      </h5>
                      <span className="text-[9px] font-mono text-slate-400 shrink-0 uppercase">
                        {t(`quickItems.${key}.date`)}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t(`quickItems.${key}.desc`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. WhatsApp Channel Banner Card */}
            <div className="border-4 border-double border-slate-900 p-6 bg-emerald-50/30 rounded-none relative overflow-hidden group">
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-3 shadow-inner">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-black text-lg text-slate-900 mb-1">
                  {t("whatsappChannel")}
                </h4>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed px-2">
                  {t("whatsappDesc")}
                </p>

                {/* QR Code */}
                <div className="bg-white p-2 border border-slate-200 shadow-md rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300">
                  {/* biome-ignore lint/performance/noImgElement: Local static QR */}
                  <img
                    src="/qr group.png"
                    alt="WhatsApp QR"
                    className="w-24 h-24 rounded-lg bg-white"
                  />
                </div>

                <a
                  href="https://whatsapp.com/channel/0029Vb6kmSUFy72JtZoyDf3O"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl shadow transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t("whatsappBtn")}</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Premium Article Reader Modal */}
      <AnimatePresence>
        {activeNoticeId && activeNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            {/* Modal Backdrop overlay click */}
            <button
              type="button"
              onClick={() => setActiveNoticeId(null)}
              className="absolute inset-0 cursor-zoom-out w-full h-full bg-transparent border-none outline-none"
              aria-label={t("close")}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl border border-slate-200 flex flex-col z-10"
            >
              {/* Header Bar */}
              <div className="sticky top-0 bg-white/95 backdrop-blur z-20 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                  {t("featured")} &bull;{" "}
                  {t(`categories.${activeNotice.categoryKey}`)}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveNoticeId(null)}
                  className="p-1.5 hover:bg-slate-100 rounded-full text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body Content */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 leading-tight">
                    {t(`items.${activeNotice.id}.title`)}
                  </h3>

                  {/* Meta */}
                  <div className="flex items-center gap-3 mt-4 text-xs text-slate-500 font-bold uppercase tracking-wider pb-4 border-b border-slate-100">
                    <span>{activeNotice.author}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {t(`items.${activeNotice.id}.date`)}
                    </span>
                  </div>
                </div>

                {/* Big Image */}
                <div className="aspect-video w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-200">
                  {/* biome-ignore lint/performance/noImgElement: Using native img */}
                  <img
                    src={activeNotice.image}
                    alt={t(`items.${activeNotice.id}.title`)}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Article Text Content */}
                <p className="font-serif text-slate-800 text-base md:text-lg leading-relaxed antialiased first-letter:text-4xl first-letter:font-black first-letter:float-left first-letter:mr-2 first-letter:mt-1 whitespace-pre-line">
                  {t(`items.${activeNotice.id}.description`)}
                </p>
              </div>

              {/* Footer Actions */}
              <div className="sticky bottom-0 bg-slate-50 border-t border-slate-100 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
                <span className="text-xs italic font-serif text-slate-400">
                  {locale === "es"
                    ? "Gracias por leer El Vocero"
                    : "Thank you for reading The Herald"}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleShareWhatsApp(activeNotice.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl shadow transition-transform active:scale-95 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t("shareWhatsApp")}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveNoticeId(null)}
                    className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl shadow-sm transition-transform active:scale-95 cursor-pointer"
                  >
                    {t("close")}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
