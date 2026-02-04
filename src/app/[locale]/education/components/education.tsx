"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import {
  AlertCircle,
  BookOpen,
  Calendar,
  CheckCircle,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  Phone,
  School,
  Send,
  Sparkles,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

export default function EducationComponent() {
  const t = useTranslations("education");
  const [isFlyerDialogOpen, setIsFlyerDialogOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    recipient: 'nita' // Para identificar que va a Nita
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const currentProjects = [
    {
      icon: School,
      title: t("currentProjects.university.title"),
      description: t("currentProjects.university.description"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: t("currentProjects.thanksgiving.title"),
      description: t("currentProjects.thanksgiving.description"),
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Palette,
      title: t("currentProjects.yearlong.title"),
      description: t("currentProjects.yearlong.description"),
      color: "from-purple-500 to-pink-500",
    },
  ];

  const partnerships = [
    "Smoky Mountain High School",
    "Blue Ridge Early College",
    "Jackson Community School",
    "Macon Early College",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Error response:', data);
        throw new Error(data.error || 'Failed to send email');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', recipient: 'nita' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Abrir el dialog automáticamente cuando se carga la página
  useEffect(() => {
    setIsFlyerDialogOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/Educacion2.webp')",
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
            <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-2xl">
              <GraduationCap className="w-10 h-10 text-white" />
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

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
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

      {/* Current Projects Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Educacion1.webp')",
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
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white/20 backdrop-blur-md rounded-2xl shadow-lg">
                <Calendar className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl"
            >
              {t("currentProjects.title")}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-white/20"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl mb-6 shadow-lg`}
                >
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Area & Partnerships Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Service Area */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl shadow-md">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {t("serviceArea.title")}
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("serviceArea.description")}
              </p>
            </motion.div>

            {/* Partnerships */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-md">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {t("partnerships.title")}
                </h3>
              </div>
              <ul className="space-y-3">
                {partnerships.map((partner, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                      <School className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg">{partner}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Educacion4.webp')",
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
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-2xl"
          >
            {t("whatsapp.title")}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-white/95 leading-relaxed font-light mb-8"
          >
            {t("whatsapp.description")}
          </motion.p>

          <motion.a
            variants={fadeInUp}
            href="https://whatsapp.com/channel/0029VbAst3v8F2pFAZJMbz0T"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-xl transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            {t("whatsapp.button")}
          </motion.a>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              {t("contact.title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-700"
            >
              {t("contact.subtitle")}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{t("contact.title")}</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        {t("contact.form.name")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder={t("contact.form.namePlaceholder")}
                        className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-gray-50 focus:bg-white text-gray-900 placeholder:text-gray-400 ${
                          focusedField === 'name' 
                            ? 'border-purple-500 shadow-lg shadow-purple-200 scale-[1.02]' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        {t("contact.form.email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder={t("contact.form.emailPlaceholder")}
                        className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-gray-50 focus:bg-white text-gray-900 placeholder:text-gray-400 ${
                          focusedField === 'email' 
                            ? 'border-purple-500 shadow-lg shadow-purple-200 scale-[1.02]' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Phone and Subject Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        {t("contact.form.phone")}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        placeholder={t("contact.form.phonePlaceholder")}
                        className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-gray-50 focus:bg-white text-gray-900 placeholder:text-gray-400 ${
                          focusedField === 'phone' 
                            ? 'border-purple-500 shadow-lg shadow-purple-200 scale-[1.02]' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        {t("contact.form.subject")}
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        required
                        placeholder={t("contact.form.subjectPlaceholder")}
                        className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-gray-50 focus:bg-white text-gray-900 placeholder:text-gray-400 ${
                          focusedField === 'subject' 
                            ? 'border-purple-500 shadow-lg shadow-purple-200 scale-[1.02]' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Recipient Selector */}
                  <div>
                    <label htmlFor="recipient" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                      {t("contact.form.recipient")}
                    </label>
                    <select
                      id="recipient"
                      name="recipient"
                      value={formData.recipient}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('recipient')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-gray-50 focus:bg-white text-gray-900 ${
                        focusedField === 'recipient' 
                          ? 'border-purple-500 shadow-lg shadow-purple-200 scale-[1.02]' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <option value="nita">Nita Lipan - {t("contact.form.nitaRole")}</option>
                      <option value="sarah">Sarah West - {t("contact.form.sarahRole")}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      placeholder={t("contact.form.messagePlaceholder")}
                      className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none resize-none bg-gray-50 focus:bg-white text-gray-900 placeholder:text-gray-400 ${
                        focusedField === 'message' 
                          ? 'border-purple-500 shadow-lg shadow-purple-200 scale-[1.02]' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group relative w-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-700 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-5 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    {status === 'sending' ? (
                      <>
                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-lg">{t("contact.form.sending")}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                        <span className="text-lg">{t("contact.form.submit")}</span>
                      </>
                    )}
                  </button>

                  {/* Success Message */}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="flex items-center space-x-3 text-green-700 bg-gradient-to-r from-green-50 to-green-100 p-5 rounded-xl border-2 border-green-200 shadow-lg"
                    >
                      <CheckCircle className="w-6 h-6 flex-shrink-0" />
                      <span className="font-semibold text-base">{t("contact.success")}</span>
                    </motion.div>
                  )}

                  {/* Error Message */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="flex items-center space-x-3 text-red-700 bg-gradient-to-r from-red-50 to-red-100 p-5 rounded-xl border-2 border-red-200 shadow-lg"
                    >
                      <AlertCircle className="w-6 h-6 flex-shrink-0" />
                      <span className="font-semibold text-base">{t("contact.error")}</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t("contact.contactInfo")}
                </h3>

                <div className="space-y-6">
                  {/* Nita Lipan */}
                  <div className="pb-4 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-3">Nita Lipan</h4>
                    <div className="space-y-2">
                      <a
                        href="mailto:Nlipan@unidxswnc.org"
                        className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-all duration-300 p-2 rounded-lg hover:bg-purple-50 group"
                      >
                        <div className="bg-purple-100 p-2 rounded-lg group-hover:bg-purple-200 transition-colors">
                          <Mail className="w-4 h-4 text-purple-600" />
                        </div>
                        <span className="text-sm font-medium break-all">{t("contact.nitaEmail")}</span>
                      </a>
                      <a
                        href="tel:+18283471234"
                        className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-all duration-300 p-2 rounded-lg hover:bg-purple-50 group"
                      >
                        <div className="bg-purple-100 p-2 rounded-lg group-hover:bg-purple-200 transition-colors">
                          <Phone className="w-4 h-4 text-purple-600" />
                        </div>
                        <span className="text-sm font-medium">{t("contact.nitaPhone")}</span>
                      </a>
                    </div>
                  </div>

                  {/* Sarah West */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Sarah West</h4>
                    <div className="space-y-2">
                      <a
                        href="mailto:SarahWest@unidxswnc.org"
                        className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-all duration-300 p-2 rounded-lg hover:bg-purple-50 group"
                      >
                        <div className="bg-purple-100 p-2 rounded-lg group-hover:bg-purple-200 transition-colors">
                          <Mail className="w-4 h-4 text-purple-600" />
                        </div>
                        <span className="text-sm font-medium break-all">{t("contact.sarahEmail")}</span>
                      </a>
                      <a
                        href="tel:+18283471234"
                        className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-all duration-300 p-2 rounded-lg hover:bg-purple-50 group"
                      >
                        <div className="bg-purple-100 p-2 rounded-lg group-hover:bg-purple-200 transition-colors">
                          <Phone className="w-4 h-4 text-purple-600" />
                        </div>
                        <span className="text-sm font-medium">{t("contact.sarahPhone")}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Card */}
              <div className="relative bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 rounded-2xl shadow-2xl p-8 text-white overflow-hidden group hover:shadow-purple-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <GraduationCap className="w-12 h-12 text-white mb-4" />
                  <p className="text-lg font-bold leading-relaxed">
                    {t("impact.description")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Banner */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-50">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl shadow-xl text-center">
            <Sparkles className="w-10 h-10 text-white mx-auto mb-4" />
            <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
              {t("impact.description")}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Flyer Dialog - Popup */}
      <Dialog open={isFlyerDialogOpen} onOpenChange={setIsFlyerDialogOpen}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
          <DialogTitle className="sr-only">Información Educativa</DialogTitle>
          <DialogDescription className="sr-only">
            Flyer con información sobre nuestros programas educativos
          </DialogDescription>
          <div className="relative">
            <img
              src="/flyer.jpeg"
              alt="Flyer Educativo"
              className="w-full h-auto object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
