"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  Calendar,
  ChevronDown,
  ExternalLink,
  GraduationCap,
  Info,
  MessageSquare,
  Package,
  Search,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export default function NoticesPage() {
  const t = useTranslations("notices");
  const locale = useLocale();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedNotice, setExpandedNotice] = useState<string | null>(null);

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
      icon: Info,
      color: "from-orange-500 to-amber-500",
      categoryKey: "general",
    },
    {
      id: "notice1",
      icon: Package,
      color: "from-emerald-500 to-teal-500",
      categoryKey: "pantry",
    },
    {
      id: "notice2",
      icon: Calendar,
      color: "from-purple-500 to-indigo-500",
      categoryKey: "events",
    },
    {
      id: "notice3",
      icon: Info,
      color: "from-blue-500 to-cyan-500",
      categoryKey: "general",
    },
  ];

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
        return <Package className="w-4 h-4" />;
      case "education":
        return <GraduationCap className="w-4 h-4" />;
      case "events":
        return <Calendar className="w-4 h-4" />;
      default:
        return <Info className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Premium Header Section */}
      <section className="relative bg-gradient-to-tr from-green-700 via-emerald-600 to-teal-500 py-16 md:py-20 text-white overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-800/20 rounded-full blur-2xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl mb-6"
          >
            <Bell className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto font-light leading-relaxed mb-8"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a
              href={mainUrl}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 hover:border-white/30 text-white rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95"
            >
              <span>{t("backToMain")}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content & Filtering */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-2xl shadow-sm text-slate-800 transition-all outline-none"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-1.5 px-4.5 py-2 rounded-full text-xs font-bold transition-all hover:scale-105 cursor-pointer uppercase tracking-wider border ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-transparent shadow-md"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                }`}
              >
                {getCategoryIcon(cat)}
                <span>{t(`categories.${cat}`)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Notices Board / Accordion Grid */}
        <div className="grid gap-6">
          <AnimatePresence mode="popLayout">
            {filteredNotices.length > 0 ? (
              filteredNotices.map((notice, index) => {
                const isExpanded = expandedNotice === notice.id;
                const Icon = notice.icon;

                return (
                  <motion.div
                    key={notice.id}
                    layoutId={notice.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-100 overflow-hidden transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedNotice(isExpanded ? null : notice.id)
                      }
                      className="w-full text-left p-6 md:p-8 flex items-start gap-4 md:gap-6 cursor-pointer focus:outline-none"
                    >
                      <div
                        className={`p-3 bg-gradient-to-br ${notice.color} rounded-2xl shadow-md text-white shrink-0`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="flex-1 min-w-0 pr-6">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                            {t(`categories.${notice.categoryKey}`)}
                          </span>
                          <span className="text-xs text-slate-400 font-semibold">
                            {t(`items.${notice.id}.date`)}
                          </span>
                        </div>

                        <h2 className="text-lg md:text-xl font-bold text-slate-800 leading-tight">
                          {t(`items.${notice.id}.title`)}
                        </h2>

                        <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-2 line-clamp-2">
                          {t(`items.${notice.id}.description`)}
                        </p>
                      </div>

                      <div className="self-center">
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="p-2 bg-slate-50 rounded-full text-slate-400"
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-slate-50 bg-slate-50/50"
                        >
                          <div className="px-6 pb-6 pt-4 md:px-8 md:pb-8 text-slate-700 text-sm md:text-base leading-relaxed">
                            {t(`items.${notice.id}.description`)}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-white border border-dashed border-slate-200 rounded-3xl"
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400">
                  <Search className="w-6 h-6" />
                </div>
                <p className="text-slate-500 font-medium">{t("noResults")}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* WhatsApp Channel Callout Section */}
        <div className="relative group mt-16 overflow-hidden rounded-3xl border border-emerald-100 shadow-md hover:shadow-xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 opacity-95" />
          {/* Decorative shapes */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-emerald-500/20 rounded-full blur-xl" />

          <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] font-bold tracking-wider uppercase">
                  {t("whatsappChannel")}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
                {t("whatsappChannel")}
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl font-light">
                {t("whatsappDesc")}
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-6">
              {/* QR Code Container */}
              <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-2xl border border-white/20 shadow-xl group-hover:scale-105 transition-all">
                {/* biome-ignore lint/performance/noImgElement: Using local group QR code */}
                <img
                  src="/qr group.png"
                  alt="WhatsApp Group QR Code"
                  className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-white p-1"
                />
              </div>

              <a
                href="https://whatsapp.com/channel/0029Vb6kmSUFy72JtZoyDf3O"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 hover:bg-emerald-50 font-bold rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 text-sm md:text-base cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>{t("whatsappBtn")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
