import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import Footer from '../components/layout/Footer';

const Contact = ({ onNavigate }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', text: '' });

    try {
      // Optional: Call Node.js API endpoint
      // await fetch('http://localhost:5000/api/contact', { ... })

      setTimeout(() => {
        setStatus({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }, 800);
    } catch (err) {
      setStatus({ type: 'error', text: 'Failed to send message. Please try again.' });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen  text-[#111827] flex flex-col font-sans">
      {/* Header */}
      {/* <header className="max-w-6xl w-full mx-auto px-6 py-6 flex justify-between items-center">
        <button 
          onClick={() => onNavigate && onNavigate('home')} 
          className="text-xl font-bold text-[#111827] flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="w-2.5 h-2.5 bg-[#0365D4] rounded-full inline-block"></span> Soonage
        </button>
        <button 
          onClick={() => onNavigate && onNavigate('home')} 
          className="text-sm font-semibold text-[#0365D4] hover:underline"
        >
          &larr; Back to Home
        </button>
      </header> */}

      <Header/>

      {/* Main Content */}
      <main className=" w-full mx-auto px-6 flex-1">
        <div className=" rounded-2xl p-8 sm:p-12">
          <div className="inline-block bg-[#DCEBFF] text-[#0365D4] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Get In Touch
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-2">CONTACT US</h1>
          <p className="text-gray-600 mb-8 max-w-lg">
            Have questions about our launch, features, or partnership opportunities? Send us a message!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {/* Contact Info Sidebar */}
            <div className="md:col-span-1 space-y-6 border-b md:border-b-0 md:border-r border-[#DCEBFF] pb-6 md:pb-0 md:pr-6">
              <div>
                <h3 className="text-sm font-bold uppercase text-[#0365D4] tracking-wider mb-1">General Inquiries</h3>
                <p className="text-base text-[#111827] font-medium">omnigopvtltd@gmail.com</p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase text-[#0365D4] tracking-wider mb-1">Business & Registration</h3>
                <p className="text-base text-[#111827] font-medium">ceo.founder@omnigoapp.com</p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase text-[#0365D4] tracking-wider mb-1">Headquarters</h3>
                <p className="text-base text-gray-600 leading-snug">
                  New Mohallah sadaat kocha e abbas<br />
                  bhoun road chakwal
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase text-[#0365D4] tracking-wider mb-1">Social Media</h3>
                <div className="flex items-center mt-4 space-x-4">
                  <a href="https://twitter.com/omnigoapp" target="_blank" rel="noopener noreferrer" className=" text-3xl text-[#0365D4] hover:text-[#024fb8] transition-colors">
                    <FaInstagramSquare />
                  </a>
                  <a href="https://facebook.com/omnigoapp" target="_blank" rel="noopener noreferrer" className=" text-3xl text-[#0365D4] hover:text-[#024fb8] transition-colors">
                    <FaFacebookSquare />
                  </a>
                  <a href="https://linkedin.com/company/omnigoapp" target="_blank" rel="noopener noreferrer" className=" text-3xl text-[#0365D4] hover:text-[#024fb8] transition-colors">
                    <FaLinkedin />
                  </a>
                  <a href="https://linkedin.com/company/omnigoapp" target="_blank" rel="noopener noreferrer" className=" transition-colors">
                  <div className="text-xl bg-[#0365D4] bg-[#024fb8] p-1 text-white rounded-sm transition-colors">
                    <SiTiktok />
                  </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-1 max-w-2xl right-0 bg-white rounded-2xl p-6 sm:p-8 border border-[#DCEBFF] shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase text-[#111827] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-[#EBF5FF] border border-[#DCEBFF] rounded-lg text-sm text-[#111827] focus:outline-none focus:border-[#0365D4] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase text-[#111827] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-[#EBF5FF] border border-[#DCEBFF] rounded-lg text-sm text-[#111827] focus:outline-none focus:border-[#0365D4] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase text-[#111827] mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 bg-[#EBF5FF] border border-[#DCEBFF] rounded-lg text-sm text-[#111827] focus:outline-none focus:border-[#0365D4] transition-colors resize-none"
                  ></textarea>
                </div>

                {status.text && (
                  <div
                    className={`p-3 rounded-lg text-sm font-medium ${
                      status.type === 'success'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}
                  >
                    {status.text}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0365D4] hover:bg-[#024fb8] text-white font-bold py-3.5 px-6 rounded-lg transition-colors text-sm shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;