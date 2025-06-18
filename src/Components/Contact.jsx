import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUser,
  FaPaperPlane,
  FaRegCommentDots,
  FaCheckCircle,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaExclamationTriangle,
  FaArrowUp,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Zod schema for validation
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid, isDirty, touchedFields },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    mode: "onTouched",
  });

  const [formStatus, setFormStatus] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  useEffect(() => {
    let timer;
    if (formStatus?.message) {
      timer = setTimeout(() => setFormStatus(null), 5000);
    }
    return () => clearTimeout(timer);
  }, [formStatus]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onSubmit = async (data) => {
    try {
      setFormStatus(null);
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200 || result.text === "OK") {
        setFormStatus({
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        });
        reset();
      } else {
        throw new Error("Email sending failed");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormStatus({
        success: false,
        message:
          error.message || "Failed to send message. Please try again later.",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isFieldValid = (field) => touchedFields[field] && !errors[field];
  const isFieldInvalid = (field) => touchedFields[field] && errors[field];

  return (
    <section className="min-h-screen flex flex-col" id="contact">
      <div className="max-w-7xl mx-auto w-full px-4 py-10 flex-1 flex flex-col">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block text-blue-600 mb-2">
            <FaRegCommentDots className="text-3xl mx-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
            Get in Touch
          </h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto mb-2"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            I'm always interested in new projects and opportunities. Let's build
            something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-4 flex-1">
          {/* Contact Info */}
          <div className="md:col-span-5 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold mb-5 flex items-center">
              <FaRegCommentDots className="mr-3 text-blue-200" />
              Contact Information
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-500/30 p-2 rounded-lg mr-3">
                  <FaPhoneAlt className="w-4 h-4 text-blue-100" />
                </div>
                <div>
                  <h4 className="text-blue-100 text-sm font-medium mb-1">
                    Phone
                  </h4>
                  <p className="text-white font-medium">09130199317</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500/30 p-2 rounded-lg mr-3">
                  <FaEnvelope className="w-4 h-4 text-blue-100" />
                </div>
                <div>
                  <h4 className="text-blue-100 text-sm font-medium mb-1">
                    Email
                  </h4>
                  <p className="text-white font-medium">
                    olalekanbilal@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500/30 p-2 rounded-lg mr-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-blue-100" />
                </div>
                <div>
                  <h4 className="text-blue-100 text-sm font-medium mb-1">
                    Location
                  </h4>
                  <p className="text-white font-medium">Ikorodu, Lagos</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500/30 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white transition-all duration-300 group"
                >
                  <FaLinkedinIn className="text-white group-hover:text-blue-600" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500/30 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white transition-all duration-300 group"
                >
                  <FaGithub className="text-white group-hover:text-blue-600" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500/30 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white transition-all duration-300 group"
                >
                  <FaTwitter className="text-white group-hover:text-blue-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            {/* Form Status */}
            {formStatus?.message && (
              <div
                className={`mb-4 rounded-lg p-3 flex items-center ${
                  formStatus.success
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {formStatus.success ? (
                  <FaCheckCircle className="mr-2" />
                ) : (
                  <FaExclamationTriangle className="mr-2" />
                )}
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 mb-1 font-medium"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser
                      className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                        isFieldInvalid("name")
                          ? "text-red-400"
                          : isFieldValid("name")
                          ? "text-green-500"
                          : "text-gray-400"
                      }`}
                    />
                    <input
                      id="name"
                      type="text"
                      {...register("name")}
                      placeholder="John Doe"
                      className={`w-full bg-gray-50 border rounded-lg pl-10 py-2 px-4 focus:outline-none focus:ring-2 transition-all duration-200 ${
                        isFieldInvalid("name")
                          ? "border-red-300 focus:ring-red-200 text-red-700"
                          : isFieldValid("name")
                          ? "border-green-300 focus:ring-green-200"
                          : "border-gray-200 focus:ring-blue-200"
                      }`}
                      disabled={isSubmitting}
                    />
                    {isFieldValid("name") && (
                      <FaCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" />
                    )}
                  </div>
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1 flex items-center">
                      <FaExclamationTriangle className="mr-1 text-xs" />{" "}
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 mb-1 font-medium"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope
                      className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                        isFieldInvalid("email")
                          ? "text-red-400"
                          : isFieldValid("email")
                          ? "text-green-500"
                          : "text-gray-400"
                      }`}
                    />
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="johndoe@example.com"
                      className={`w-full bg-gray-50 border rounded-lg pl-10 py-2 px-4 focus:outline-none focus:ring-2 transition-all duration-200 ${
                        isFieldInvalid("email")
                          ? "border-red-300 focus:ring-red-200 text-red-700"
                          : isFieldValid("email")
                          ? "border-green-300 focus:ring-green-200"
                          : "border-gray-200 focus:ring-blue-200"
                      }`}
                      disabled={isSubmitting}
                    />
                    {isFieldValid("email") && (
                      <FaCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" />
                    )}
                  </div>
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1 flex items-center">
                      <FaExclamationTriangle className="mr-1 text-xs" />{" "}
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 mb-1 font-medium"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject")}
                  placeholder="What is this regarding?"
                  className={`w-full bg-gray-50 border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    isFieldInvalid("subject")
                      ? "border-red-300 focus:ring-red-200 text-red-700"
                      : isFieldValid("subject")
                      ? "border-green-300 focus:ring-green-200"
                      : "border-gray-200 focus:ring-blue-200"
                  }`}
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <p className="text-red-600 text-sm mt-1 flex items-center">
                    <FaExclamationTriangle className="mr-1 text-xs" />{" "}
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-gray-700 mb-1 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  placeholder="Tell me about your project, questions, or any message you'd like to share..."
                  className={`w-full bg-gray-50 border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    isFieldInvalid("message")
                      ? "border-red-300 focus:ring-red-200 text-red-700"
                      : isFieldValid("message")
                      ? "border-green-300 focus:ring-green-200"
                      : "border-gray-200 focus:ring-blue-200"
                  }`}
                  rows={4}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1 flex items-center">
                    <FaExclamationTriangle className="mr-1 text-xs" />{" "}
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || !isDirty || !isValid}
                  className={`bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-700 transition-colors font-semibold ${
                    isSubmitting || !isDirty || !isValid
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:shadow-md"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" /> Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <FaArrowUp />
        </button>
      )}
    </section>
  );
};

export default ContactSection;
