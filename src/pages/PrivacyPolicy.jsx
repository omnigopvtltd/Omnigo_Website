import React, { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const PrivacyPolicy = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const informationSections = [
    {
      title: "Account and Profile Information",
      content:
        "When you create or use an OMNIGO account, we may collect information such as your name, mobile number, email address, password, account details, and other information you choose to provide.",
    },
    {
      title: "Delivery and Order Information",
      content:
        "To process and complete orders and deliveries, we may collect information relating to your orders and deliveries, including delivery addresses, pickup and drop-off locations, order details, recipient information, order history, and other information required to provide the requested service.",
    },
    {
      title: "Location Information",
      content:
        "Where necessary for our services, OMNIGO may collect or use location information to help identify delivery locations, facilitate deliveries, improve service availability, and provide location-based features.",
    },
    {
      title: "Payment Information",
      content:
        "Where payments are made through OMNIGO or its payment partners, relevant payment and transaction information may be processed by the applicable payment service provider. OMNIGO may receive transaction-related information necessary to confirm and manage payments.",
    },
    {
      title: "Device and Technical Information",
      content:
        "We may automatically collect certain technical information when you access or use our platform, such as device type, operating system, application version, IP address, browser information, device identifiers, network information, and usage or diagnostic data.",
    },
    {
      title: "Communications and Support Information",
      content:
        "If you contact OMNIGO, communicate with our support team, report an issue, or otherwise interact with us, we may retain information relating to that communication for customer support, service improvement, security, and operational purposes.",
    },
  ];

  const useInformationList = [
    "Create and manage user accounts",
    "Process and fulfill orders and deliveries",
    "Connect customers with participating restaurants, merchants, and delivery partners",
    "Confirm payments and transactions",
    "Provide customer support",
    "Improve the performance, reliability, and functionality of our platform",
    "Detect, prevent, and investigate fraud, misuse, unauthorized activity, and security incidents",
    "Maintain platform and operational security",
    "Understand how our services are used and improve the user experience",
    "Send service-related communications",
    "Provide promotional communications, offers, and updates where appropriate",
    "Meet legal, regulatory, and operational requirements",
  ];

  const serviceProviderAndTechnologyPartner = [
    "Cloud hosting and infrastructure",
    "Payment processing",
    "SMS and communication services",
    "Maps and location services",
    "Analytics",
    "Customer support",
    "Security and fraud prevention",
    "Technical maintenance",
    "Platform development and operations",
  ];

  return (
    <div className="min-h-screen  text-[#111827] flex flex-col font-sans">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="w-full mx-auto px-6 flex-1">
        <div className=" rounded-2xl p-8 sm:p-12">
          <div className="inline-block bg-[#DCEBFF] text-[#0365D4] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Legal & Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold uppercase text-[#111827] mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Last Updated: October 2026
          </p>

          <p className="text-base text-gray-700 mb-8">
            At OMNIGO, we are building a technology-driven platform designed to
            make everyday services more convenient, connected, and accessible.
            Our journey begins in Chakwal, Pakistan, where we are establishing
            the foundation of a platform with the vision to expand its services
            across Pakistan as OMNIGO grows. As our platform develops, we
            understand that the information shared with us is an important part
            of the relationship between OMNIGO and its users. This Privacy
            Policy explains, in a clear and practical way, what information we
            collect, how we use it, when it may be shared, and how we work to
            keep it secure while providing and improving our services. By using
            OMNIGO, its website, mobile applications, or related services, you
            acknowledge that your information may be handled in accordance with
            this Privacy Policy.
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-xl font-bold text-[#111827] mb-6 border-b border-[#DCEBFF] pb-2">
                1. Information We Collect
              </h2>

              {informationSections.map((section, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-base font-semibold text-[#111827] mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-700">{section.content}</p>
                </div>
              ))}
              {/* <p className="mb-3">
                We collect personal information that you voluntarily provide to
                us when registering for product updates, subscribing to our
                newsletter, or contacting us directly.
              </p> */}
              {/* <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>
                  <strong>Personal Data:</strong> Email address, contact
                  preferences.
                </li>
                <li>
                  <strong>Device & Usage Data:</strong> IP address, browser
                  type, operating system, and interactions with our web app.
                </li>
              </ul> */}
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                2. How We Use Information
              </h2>
              <p className="mb-2">OMNIGO may use collected information to:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                {useInformationList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                3. Information Shared During an Order
              </h2>
              <p>
                When you place an order or request a service through OMNIGO,
                certain information may need to be shared with the relevant
                restaurant, merchant, or delivery partner to complete the order.
                This may include information such as your name, contact details,
                delivery location, order details, and other information
                reasonably required to fulfill the requested service. <br />
                We aim to limit shared information to what is reasonably
                necessary for the relevant service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                4. Delivery Partner Information
              </h2>
              <p>
                Where a delivery partner is involved in fulfilling an order,
                relevant information may be provided to that delivery partner to
                enable the delivery to be completed. This may include delivery
                location, order details, recipient information, and contact
                information necessary for delivery-related communication. <br />
                Delivery partners may only use such information for legitimate
                purposes connected with the services they are providing through
                OMNIGO.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                5. Marketing and Communications
              </h2>
              <p>
                OMNIGO may use certain information to communicate with users
                about new services, features, promotions, offers, updates, and
                other information that may be relevant to their use of the
                platform. Marketing communications may be delivered through
                channels such as email, SMS, push notifications, or other
                communication methods used by OMNIGO. <br />
                Users may also receive essential service-related communications,
                such as order confirmations, delivery updates, account
                notifications, and security-related messages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                6. Cookies and Similar Technologies
              </h2>
              <p>
                OMNIGO and its technology partners may use cookies, software
                development kits, analytics tools, and similar technologies to
                understand platform usage, maintain functionality, improve
                performance, personalize certain experiences, and help protect
                our services. <br />
                These technologies may collect information about how users
                interact with our website or applications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                7. Platform Security
              </h2>
              <p>
                OMNIGO takes reasonable technical and organizational measures to
                protect information against unauthorized access, misuse,
                alteration, loss, or disclosure. <br />
                Security measures may include access controls, authentication
                systems, encryption where appropriate, monitoring, and other
                safeguards designed to protect our systems and information.{" "}
                <br />
                However, no online platform, application, or method of
                electronic transmission can be guaranteed to be completely
                secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                8. Service Providers and Technology Partners
              </h2>
              <p className="mb-2">
                OMNIGO may work with trusted third-party service providers to
                operate and improve its services. These providers may assist
                with areas such as:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                {serviceProviderAndTechnologyPartner.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mb-2">
                Such providers may process information only as necessary to
                perform the services they provide to OMNIGO.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                9. Business Partners and Participating Businesses
              </h2>
              <p>
                OMNIGO may share relevant information with restaurants,
                merchants, businesses, and other participating partners when
                necessary to provide the requested service. <br />
                We expect participating businesses and partners to handle
                information responsibly and only for legitimate purposes
                connected with their relationship with OMNIGO or the services
                being provided.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                10. Legal and Regulatory Disclosure
              </h2>
              <p>
                OMNIGO may disclose information where reasonably necessary to
                comply with applicable laws, legal processes, court orders,
                regulatory requirements, government requests, or to protect the
                safety, security, and property of OMNIGO, its users, partners,
                or the public.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                11. Business Transfers
              </h2>
              <p>
                If OMNIGO is involved in a merger, acquisition, restructuring,
                sale of assets, investment transaction, or similar business
                activity, certain information may be transferred as part of that
                transaction, subject to applicable requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                12. Data Retention
              </h2>
              <p>
                OMNIGO may retain information for as long as reasonably
                necessary for the purposes described in this Privacy Policy,
                including providing services, maintaining business and
                transaction records, resolving disputes, preventing fraud,
                maintaining security, improving our platform, and meeting
                applicable legal or regulatory requirements. <br />
                When information is no longer reasonably required for these
                purposes, it may be securely deleted, anonymized, or otherwise
                handled in accordance with applicable requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                13. Information Relating to Other Individuals
              </h2>
              <p>
                If you provide OMNIGO with information relating to another
                person, such as a delivery recipient, you should ensure that you
                are authorized to provide that information and that the
                information is accurate for the purpose for which it is being
                provided.
              </p>
            </section>


            <section>
              <h2 className="text-xl font-semibold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                14. Children's Information
              </h2>
              <p>
                OMNIGO's services are intended for individuals who are legally
                able to use and enter into agreements for the services provided
                through the platform. <br />
                OMNIGO does not knowingly seek or intentionally collect personal
                information from children where such collection is prohibited by
                applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                15. Third-Party Services and Links
              </h2>
              <p>
                The OMNIGO platform may contain integrations, services, or links
                provided by third parties. Third-party services may operate
                under their own terms and privacy policies. OMNIGO is not
                responsible for the privacy practices of independent third-party
                services that are outside our control. <br />
                Users should review the relevant third-party policies when
                interacting with such services.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                16. Changes to This Privacy Policy
              </h2>
              <p>
                OMNIGO may update or modify this Privacy Policy from time to
                time as our platform, services, technology, or applicable
                requirements develop. <br />
                When changes are made, the updated version will be made
                available through the relevant OMNIGO platform or website, along
                with an updated “Last Updated” date where appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                17. Contacting OMNIGO
              </h2>
              <p>
                For questions or concerns regarding this Privacy Policy or the
                handling of information by OMNIGO, you may contact us through
                the following details:
              </p>
              <div>
                <h3 className="text-base mt-2 font-semibold text-[#111827] mb-2">
                  OMNIGO Private Limited
                </h3>

                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>
                    <strong>Office Location:</strong> Chakwal, Pakistan
                  </li>
                  <li>
                    <strong>Email:</strong> ceo.founder@omnigoapp.com
                  </li>
                  <li>
                    <strong>Website:</strong> https://www.omnigoapp.com
                  </li>
                </ul>
              </div>
            </section>


            <section>
              <h2 className="text-xl font-semibold text-[#111827] mb-3 border-b border-[#DCEBFF] pb-2">
                Our Approach to Privacy
              </h2>
              <p>
               OMNIGO believes that responsible handling of information is an important part of building a reliable technology platform. We aim to collect information for legitimate and useful purposes, use it responsibly, share it only where reasonably necessary for our services or legitimate business and legal requirements, and continue improving the way information is protected as OMNIGO grows.
              </p>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
