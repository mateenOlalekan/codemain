import React, { useState, useEffect } from 'react';
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
  FaClock,
  FaExclamationTriangle,
  FaArrowUp
} from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ success: false, message: '' });
  const [touched, setTouched] = useState({});
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    let timer;
    if (formStatus.success) {
      timer = setTimeout(() => {
        setFormStatus({ success: false, message: '' });
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [formStatus]);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (touched[name]) validateField(name, value);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = '';
    switch (name) {
      case 'name':
        errorMessage = !value.trim() ? "Name is required" : 
                      value.length < 2 ? "Name must be at least 2 characters" : '';
        break;
      case 'email':
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errorMessage = !value.trim() ? "Email is required" : 
                      !emailPattern.test(value) ? "Please enter a valid email address" : '';
        break;
      case 'subject':
        errorMessage = !value.trim() ? "Subject is required" : '';
        break;
      case 'message':
        errorMessage = !value.trim() ? "Message is required" : 
                      value.length < 10 ? "Message must be at least 10 characters long" : '';
        break;
      default:
        break;
    }
    setErrors(prev => ({ ...prev, [name]: errorMessage }));
    return !errorMessage;
  };

  const validateForm = () => {
    let formIsValid = true;
    ['name', 'email', 'subject', 'message'].forEach(field => {
      const isValid = validateField(field, formData[field]);
      if (!isValid) formIsValid = false;
      setTouched(prev => ({ ...prev, [field]: true }));
    });
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setFormStatus({ 
          success: true, 
          message: "Thank you! Your message has been sent successfully." 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched({});
      } catch (error) {
        setFormStatus({ 
          success: false, 
          message: "Oops! Something went wrong. Please try again later." 
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const isFieldValid = (field) => touched[field] && !errors[field];
  const isFieldInvalid = (field) => touched[field] && errors[field];

  return (
    <section className="h-screen flex flex-col" id="contact">
      <div className="max-w-7xl mx-auto w-full px-4 py-10 flex-1 flex flex-col">
        <div className="text-center mb-8">
          <div className="inline-block text-blue-600 mb-2">
            <FaRegCommentDots className="text-3xl mx-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
            Get in Touch
          </h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto mb-2"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            I'm always interested in new projects and opportunities. Let's build something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-2 flex-1">
          <div className="md:col-span-5 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <FaRegCommentDots className="mr-3 text-blue-200" />
              Contact Information
            </h3>
            <div className="space-y-6 mb-4">
              <div className="flex items-start">
                <div className="bg-blue-500/30 p-2 rounded-lg mr-3">
                  <FaPhoneAlt className="w-4 h-4 text-blue-100" />
                </div>
                <div>
                  <h4 className="text-blue-100 text-sm font-medium mb-1">Phone</h4>
                  <p className="text-white font-medium">09130199317</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500/30 p-2 rounded-lg mr-3">
                  <FaEnvelope className="w-4 h-4 text-blue-100" />
                </div>
                <div>
                  <h4 className="text-blue-100 text-sm font-medium mb-1">Email</h4>
                  <p className="text-white font-medium">Olalekanbilal.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-500/30 p-2 rounded-lg mr-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-blue-100" />
                </div>
                <div>
                  <h4 className="text-blue-100 text-sm font-medium mb-1">Location</h4>
                  <p className="text-white font-medium">Ikorodu, Lagos</p>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <h4 className="text-lg font-semibold mb-3">Connect With Me</h4>
              <div className="flex space-x-3">
                <a href="#" className="bg-blue-500/30 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white transition-all duration-300 group">
                  <FaLinkedinIn className="text-white group-hover:text-blue-600" />
                </a>
                <a href="#" className="bg-blue-500/30 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white transition-all duration-300 group">
                  <FaGithub className="text-white group-hover:text-blue-600" />
                </a>
                <a href="#" className="bg-blue-500/30 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white transition-all duration-300 group">
                  <FaTwitter className="text-white group-hover:text-blue-600" />
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
              <FaPaperPlane className="mr-3 text-blue-600" />
              Send Me a Message
            </h3>
            
            {formStatus.message && (
              <div className={`mb-4 rounded-lg p-3 flex items-center ${formStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {formStatus.success ? 
                  <FaCheckCircle className="mr-2" /> : 
                  <FaExclamationTriangle className="mr-2" />
                }
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">Full Name</label>
                  <div className="relative">
                    <FaUser className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                      isFieldInvalid('name') ? 'text-red-400' : 
                      isFieldValid('name') ? 'text-green-500' : 'text-gray-400'
                    }`} />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John Doe"
                      className={`w-full bg-gray-50 border rounded-lg pl-10 py-2 px-4 focus:outline-none focus:ring-2 transition-all duration-200 ${
                        isFieldInvalid('name') ? 'border-red-300 focus:ring-red-200 text-red-700' : 
                        isFieldValid('name') ? 'border-green-300 focus:ring-green-200' : 'border-gray-200 focus:ring-blue-200'
                      }`}
                    />
                    {isFieldValid('name') && (
                      <FaCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" />
                    )}
                  </div>
                  {errors.name && touched.name && (
                    <p className="text-red-600 text-sm mt-1 flex items-center">
                      <FaExclamationTriangle className="mr-1 text-xs" /> {errors.name}
                    </p>
                  )}
                </div>
                
                <div className="relative">
                  <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">Email Address</label>
                  <div className="relative">
                    <FaEnvelope className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                      isFieldInvalid('email') ? 'text-red-400' : 
                      isFieldValid('email') ? 'text-green-500' : 'text-gray-400'
                    }`} />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="johndoe@example.com"
                      className={`w-full bg-gray-50 border rounded-lg pl-10 py-2 px-4 focus:outline-none focus:ring-2 transition-all duration-200 ${
                        isFieldInvalid('email') ? 'border-red-300 focus:ring-red-200 text-red-700' : 
                        isFieldValid('email') ? 'border-green-300 focus:ring-green-200' : 'border-gray-200 focus:ring-blue-200'
                      }`}
                    />
                    {isFieldValid('email') && (
                      <FaCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" />
                    )}
                  </div>
                  {errors.email && touched.email && (
                    <p className="text-red-600 text-sm mt-1 flex items-center">
                      <FaExclamationTriangle className="mr-1 text-xs" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-gray-700 mb-1 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell me about your project, questions, or any message you'd like to share..."
                  className={`w-full bg-gray-50 border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 transition-all duration-200 ${
                    isFieldInvalid('message') ? 'border-red-300 focus:ring-red-200 text-red-700' : 
                    isFieldValid('message') ? 'border-green-300 focus:ring-green-200' : 'border-gray-200 focus:ring-blue-200'
                  }`}
                  rows={4}
                />
                {errors.message && touched.message && (
                  <p className="text-red-600 text-sm mt-1 flex items-center">
                    <FaExclamationTriangle className="mr-1 text-xs" /> {errors.message}
                  </p>
                )}
              </div>
              
              <div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors font-semibold ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <footer className="mt-8 text-center">
          <div className="h-px w-full bg-gray-200 mb-4"></div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} | Designed & Developed with <span className="text-red-500">❤</span> by Ola<span className='text-blue-600 font-semibold'>lekan</span>
          </p>
        </footer>
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 animate-bounce"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </section>
  );
};

export default ContactSection;