"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  User,
  ZoomIn,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import type React from "react";
import { useEffect, useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: {
        url: string;
        locale?: string;
        embed_locale?: string;
        prefill?: {
          name?: string;
          email?: string;
          smsReminderNumber?: string;
          customAnswers?: Record<string, string>;
        };
      }) => void;
    };
  }
}

export default function AppointmentsPage() {
  const t = useTranslations("appointments");
  const locale = useLocale();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load Calendly Widget CSS & JS dynamically
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = t("validation.name");
    }
    if (!formData.email.trim()) {
      newErrors.email = t("validation.email");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("validation.emailInvalid");
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t("validation.phone");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    if (window.Calendly) {
      const calendlyUrl =
        process.env.NEXT_PUBLIC_CALENDLY_URL ||
        "https://calendly.com/sirfucho/30min";

      window.Calendly.initPopupWidget({
        url: calendlyUrl,
        locale: locale,
        embed_locale: locale,
        prefill: {
          name: formData.name,
          email: formData.email,
          smsReminderNumber: formData.phone,
          customAnswers: {
            a1: formData.message,
          },
        },
      });
    }

    // Reset submitting status after a brief delay
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  const scheduleCards = [
    {
      day: t("days.tuesday"),
      hours: t("hours.tuesday"),
      color: "from-purple-500 to-indigo-500",
    },
    {
      day: t("days.wednesday"),
      hours: t("hours.wednesday"),
      color: "from-indigo-500 to-blue-500",
    },
    {
      day: t("days.thursday"),
      hours: t("hours.thursday"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      day: t("days.friday"),
      hours: t("hours.friday"),
      color: "from-purple-500 to-pink-500",
    },
    {
      day: t("days.sunday"),
      hours: t("hours.sunday"),
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <main className="min-h-screen pt-28 pb-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full mb-4 shadow-lg text-white">
            <Calendar className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-purple-950 mb-4 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-lg text-purple-900/80 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Schedules Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-purple-100 shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-purple-100 rounded-xl text-purple-700">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-purple-950">
                    {t("schedulesTitle")}
                  </h2>
                  <p className="text-xs text-purple-900/60 mt-0.5">
                    {t("schedulesSubtitle")}
                  </p>
                </div>
              </div>

              {/* Weekly blocks */}
              <div className="space-y-4">
                {scheduleCards.map((card) => (
                  <div
                    key={card.day}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/90 border border-purple-50 hover:shadow-md transition-shadow"
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded-full bg-gradient-to-br ${card.color} mt-1.5 shrink-0`}
                    />
                    <div>
                      <h3 className="font-semibold text-purple-950 text-base">
                        {card.day}
                      </h3>
                      <p className="text-sm text-purple-900/70 mt-0.5 font-medium">
                        {card.hours}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra Info / Callout */}
            <div className="mt-8 p-5 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border border-purple-100 flex items-start gap-3.5">
              <ZoomIn className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <p className="text-xs text-purple-950/80 leading-relaxed">
                {locale === "es"
                  ? "Las citas virtuales se realizan a través de Zoom. Una vez que selecciones tu fecha y hora en Calendly, recibirás un correo automático con el enlace de acceso."
                  : "Virtual appointments are held via Zoom. Once you select your date and time in Calendly, you will receive an automatic email with the access link."}
              </p>
            </div>
          </motion.div>

          {/* Booking Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-purple-100 shadow-xl relative overflow-hidden"
          >
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-2xl -z-10" />
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-gradient-to-br from-indigo-400/10 to-pink-400/10 rounded-full blur-2xl -z-10" />

            <h2 className="text-2xl font-bold text-purple-950 mb-6 flex items-center gap-3">
              <User className="w-6 h-6 text-purple-600" />
              {t("form.title")}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-purple-950 mb-1.5"
                >
                  {t("form.name")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-purple-400">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t("form.namePlaceholder")}
                    className={`w-full pl-11 pr-4 py-3 bg-purple-50/50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 transition-all font-medium ${
                      errors.name
                        ? "border-red-400 focus:ring-red-400/20"
                        : "border-purple-100"
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1.5 font-medium ml-2">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email and Phone group */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Email field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-purple-950 mb-1.5"
                  >
                    {t("form.email")}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-purple-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t("form.emailPlaceholder")}
                      className={`w-full pl-11 pr-4 py-3 bg-purple-50/50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 transition-all font-medium ${
                        errors.email
                          ? "border-red-400 focus:ring-red-400/20"
                          : "border-purple-100"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1.5 font-medium ml-2">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-purple-950 mb-1.5"
                  >
                    {t("form.phone")}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-purple-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={t("form.phonePlaceholder")}
                      className={`w-full pl-11 pr-4 py-3 bg-purple-50/50 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 transition-all font-medium ${
                        errors.phone
                          ? "border-red-400 focus:ring-red-400/20"
                          : "border-purple-100"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1.5 font-medium ml-2">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Message field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-purple-950 mb-1.5"
                >
                  {t("form.message")}
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3.5 text-purple-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t("form.messagePlaceholder")}
                    className="w-full pl-11 pr-4 py-3 bg-purple-50/50 border border-purple-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 transition-all font-medium resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mt-6 cursor-pointer border-none outline-none"
              >
                {isSubmitting ? t("form.loading") : t("form.submit")}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
