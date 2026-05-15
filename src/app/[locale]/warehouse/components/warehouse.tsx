"use client";

import { Link } from "@/i18n/routing";
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
                    <a
                      href="https://whatsapp.com/channel/0029Vb6kmSUFy72JtZoyDf3O"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white hover:underline transition-colors font-medium"
                    >
                      {t("calendar.whatsappChannel")}
                    </a>
                  </div>
                  <p className="text-white/80 text-sm mt-2 mb-6">{t("calendar.stayTuned")}</p>
                  <a
                    href="https://whatsapp.com/channel/0029Vb6kmSUFy72JtZoyDf3O"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 font-bold rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 text-sm md:text-base"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    {t("calendar.joinGroup")}
                  </a>
                </div>
                {/* QR Code */}
                <a
                  href="https://whatsapp.com/channel/0029Vb6kmSUFy72JtZoyDf3O"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group transition-transform hover:scale-105"
                >
                  <img
                    src="/qr group.png"
                    alt="WhatsApp QR Code"
                    className="w-24 h-24 md:w-28 md:h-28 rounded-lg bg-white p-1 shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                  <span className="text-white/90 text-xs mt-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                    {t("calendar.whatsappChannel")}
                  </span>
                </a>
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

            {/* Calendar Days - May 2026 */}
            <div className="grid grid-cols-7">
              {/* Week 1 - May starts on Friday */}
              {/* Empty - Sunday */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-gray-50" />
              {/* Empty - Monday */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-gray-50" />
              {/* Empty - Tuesday */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-gray-50" />
              {/* Empty - Wednesday */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-gray-50" />
              {/* Empty - Thursday */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-gray-50" />

              {/* Friday - May 1 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">1</div>
              </div>

              {/* Saturday - May 2 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">2</div>
              </div>

              {/* Week 2 */}
              {/* Sunday - May 3 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">3</div>
              </div>
              {/* Monday - May 4 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">4</div>
              </div>
              {/* Tuesday - May 5 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">5</div>
              </div>
              {/* Wednesday - May 6 - Open Pantry + Health Check */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[120px] bg-green-50 hover:bg-green-100 transition-colors">
                <div className="font-bold text-lg mb-1 text-gray-800">6</div>
                <div className="text-xs md:text-sm text-green-700 font-semibold">
                  {t("calendar.events.openPantry")}
                </div>
                <div className="text-xs md:text-sm text-purple-700 font-semibold">
                  {t("calendar.events.healthCheck")}
                </div>
                <div className="text-xs text-green-900 font-bold">2-6pm</div>
              </div>
              {/* Thursday - May 7 - Open Pantry */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-green-50 hover:bg-green-100 transition-colors">
                <div className="font-bold text-lg mb-1 text-gray-800">7</div>
                <div className="text-xs md:text-sm text-green-700 font-semibold">
                  {t("calendar.events.openPantry")}
                </div>
                <div className="text-xs text-green-900 font-bold">1-4pm</div>
              </div>
              {/* Friday - May 8 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">8</div>
              </div>
              {/* Saturday - May 9 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">9</div>
              </div>

              {/* Week 3 */}
              {/* Sunday - May 10 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">10</div>
              </div>
              {/* Monday - May 11 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">11</div>
              </div>
              {/* Tuesday - May 12 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">12</div>
              </div>
              {/* Wednesday - May 13 - Mini Market + Health Check */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[120px] bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="font-bold text-lg mb-1 text-gray-800">13</div>
                <div className="text-xs md:text-sm text-blue-700 font-semibold">
                  {t("calendar.events.miniMarket")}
                </div>
                <div className="text-xs md:text-sm text-purple-700 font-semibold">
                  {t("calendar.events.healthCheck")}
                </div>
                <div className="text-xs text-blue-900 font-bold">2-6pm</div>
              </div>
              {/* Thursday - May 14 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">14</div>
              </div>
              {/* Friday - May 15 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">15</div>
              </div>
              {/* Saturday - May 16 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">16</div>
              </div>

              {/* Week 4 */}
              {/* Sunday - May 17 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">17</div>
              </div>
              {/* Monday - May 18 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">18</div>
              </div>
              {/* Tuesday - May 19 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">19</div>
              </div>
              {/* Wednesday - May 20 - Open Pantry + Health Check */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[120px] bg-green-50 hover:bg-green-100 transition-colors">
                <div className="font-bold text-lg mb-1 text-gray-800">20</div>
                <div className="text-xs md:text-sm text-green-700 font-semibold">
                  {t("calendar.events.openPantry")}
                </div>
                <div className="text-xs md:text-sm text-purple-700 font-semibold">
                  {t("calendar.events.healthCheck")}
                </div>
                <div className="text-xs text-green-900 font-bold">2-6pm</div>
              </div>
              {/* Thursday - May 21 - Open Pantry */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-green-50 hover:bg-green-100 transition-colors">
                <div className="font-bold text-lg mb-1 text-gray-800">21</div>
                <div className="text-xs md:text-sm text-green-700 font-semibold">
                  {t("calendar.events.openPantry")}
                </div>
                <div className="text-xs text-green-900 font-bold">1-4pm</div>
              </div>
              {/* Friday - May 22 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">22</div>
              </div>
              {/* Saturday - May 23 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">23</div>
              </div>

              {/* Week 5 */}
              {/* Sunday - May 24 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">24</div>
              </div>
              {/* Monday - May 25 - Memorial Day */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-red-50">
                <div className="font-bold text-lg mb-1 text-gray-800">25</div>
                <div className="text-xs md:text-sm text-red-600 font-semibold">
                  {t("calendar.events.closed")}
                </div>
              </div>
              {/* Tuesday - May 26 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">26</div>
              </div>
              {/* Wednesday - May 27 - Mini Market + Health Check */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[120px] bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="font-bold text-lg mb-1 text-gray-800">27</div>
                <div className="text-xs md:text-sm text-blue-700 font-semibold">
                  {t("calendar.events.miniMarket")}
                </div>
                <div className="text-xs md:text-sm text-purple-700 font-semibold">
                  {t("calendar.events.healthCheck")}
                </div>
                <div className="text-xs text-blue-900 font-bold">2-6pm</div>
              </div>
              {/* Thursday - May 28 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">28</div>
              </div>
              {/* Friday - May 29 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">29</div>
              </div>
              {/* Saturday - May 30 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">30</div>
              </div>

              {/* Week 6 */}
              {/* Sunday - May 31 */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-white">
                <div className="font-bold text-lg mb-1 text-gray-800">31</div>
              </div>
              {/* Empty cells to complete the last row */}
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-gray-50" />
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-gray-50" />
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-gray-50" />
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-gray-50" />
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-gray-50" />
              <div className="border border-gray-200 p-2 md:p-4 min-h-[100px] bg-gray-50" />
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
