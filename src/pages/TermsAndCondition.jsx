import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const TermsAndConditions = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen  text-[#111827] flex flex-col font-sans">
      {/* Header */}
 <Header/>

      {/* Main Content */}
      <main className="w-full mx-auto px-6 py-8 flex-1">
        <div className=" rounded-2xl p-8 sm:p-12">
          <div className="inline-block bg-[#DCEBFF] text-[#0365D4] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Terms of Service
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold uppercase text-[#111827] mb-2">Terms & Conditions</h1>
          <p className="text-sm text-gray-500 mb-8">Effective Date: October 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-lg font-bold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the Soonage application and website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                2. Intellectual Property Rights
              </h2>
              <p>
                All content, features, layout, visual graphics, source code, logos, and software provided on this platform are the exclusive property of Soonage and are protected by international copyright, trademark, and intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                3. User Conduct & Responsibilities
              </h2>
              <p className="mb-2">When using our application and forms, you agree not to:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Submit false, misleading, or malicious contact information or email addresses.</li>
                <li>Attempt to disrupt, reverse engineer, or compromise the security of our application.</li>
                <li>Use automated bots or scripts to query our services without prior authorization.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                4. Limitation of Liability
              </h2>
              <p>
                In no event shall Soonage, its developers, or partners be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or inability to use our site, applications, or services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                5. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify or replace these terms at any time. Modifications will become effective immediately upon posting. Your continued use of the platform constitutes acceptance of those changes.
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

export default TermsAndConditions;