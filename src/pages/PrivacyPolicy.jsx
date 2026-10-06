import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const PrivacyPolicy = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen  text-[#111827] flex flex-col font-sans">
      {/* Header */}
      <Header/>

      {/* Main Content */}
      <main className="w-full mx-auto px-6 flex-1">
        <div className=" rounded-2xl p-8 sm:p-12">
          <div className="inline-block bg-[#DCEBFF] text-[#0365D4] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Legal & Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last Updated: October 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-lg font-bold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                We collect personal information that you voluntarily provide to us when registering for product updates, subscribing to our newsletter, or contacting us directly.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li><strong>Personal Data:</strong> Email address, contact preferences.</li>
                <li><strong>Device & Usage Data:</strong> IP address, browser type, operating system, and interactions with our web app.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                2. How We Use Your Information
              </h2>
              <p className="mb-2">We use the collected information for various purposes, including:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Sending notification emails regarding app launch and product updates.</li>
                <li>Improving and optimizing our user experience and platform responsiveness.</li>
                <li>Responding to your support requests, questions, and comments.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                3. Data Protection & Security
              </h2>
              <p>
                We implement strict security measures to maintain the safety of your personal information. Your data is stored behind secured networks and accessible only by a limited number of authorized personnel.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                4. Third-Party Services
              </h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to trusted third parties who assist us in operating our application and conducting our business, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                5. Your Rights & Contact
              </h2>
              <p>
                You have the right to request access to your stored personal data, request corrections, or opt-out of newsletter notifications at any time. For questions regarding this policy, please reach out via our contact page.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
