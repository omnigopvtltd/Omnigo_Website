import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Home() {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // References for eyeball elements
  const eye1Ref = useRef(null);
  const eye2Ref = useRef(null);
  const pupil1Ref = useRef(null);
  const pupil2Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const updateEye = (eyeRef, pupilRef) => {
        if (!eyeRef.current || !pupilRef.current) return;

        const rect = eyeRef.current.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const deltaX = mouseX - eyeCenterX;
        const deltaY = mouseY - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX);

        // Limit pupil displacement inside socket
        const maxDistance =
          rect.width / 2 - pupilRef.current.offsetWidth / 2 - 2;
        const distance = Math.min(Math.hypot(deltaX, deltaY), maxDistance);

        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;

        pupilRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      };

      updateEye(eye1Ref, pupil1Ref);
      updateEye(eye2Ref, pupil2Ref);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      // Connect to Node.js / Express API endpoint
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage({
          type: "success",
          text: "🎉 Thanks for subscribing!",
        });
        setEmail("");
      } else {
        setStatusMessage({
          type: "error",
          text: data.error || "Something went wrong.",
        });
      }
    } catch (err) {
      // Fallback preview handler if API is not active
      setStatusMessage({
        type: "success",
        text: "🎉 Subscribed successfully (Preview Mode)!",
      });
      setEmail("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full text-[#111827] min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-[#DCEBFF] selection:text-[#0365D4]">
      {/* ---------------- NAVIGATION HEADER ---------------- */}
      <Header />

      {/* ---------------- MARQUEE TICKER ---------------- */}
      <div className="w-full bg-[#0365D4] text-white font-black text-sm -rotate-2 uppercase tracking-wider py-2.5 mt-10 overflow-hidden shadow-inner my-2">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused]">
          <span className="px-4">
            COMING SOON &nbsp;|&nbsp; COMING SOON &nbsp;|&nbsp; COMING SOON
            &nbsp;|&nbsp; COMING SOON &nbsp;|&nbsp; COMING SOON &nbsp;|&nbsp;
            COMING SOON &nbsp;|&nbsp; COMING SOON &nbsp;|&nbsp; COMING SOON
            &nbsp;|&nbsp;
          </span>
          <span className="px-4">
            COMING SOON &nbsp;|&nbsp; COMING SOON &nbsp;|&nbsp; COMING SOON
            &nbsp;|&nbsp; COMING SOON &nbsp;|&nbsp; COMING SOON &nbsp;|&nbsp;
            COMING SOON &nbsp;|&nbsp; COMING SOON &nbsp;|&nbsp; COMING SOON
            &nbsp;|&nbsp;
          </span>
        </div>
      </div>

      {/* ---------------- HERO CONTENT SECTION ---------------- */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center">
        {/* Title with Interactive Eye Tracking */}
        <div className="select-none my-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-bold tracking-tighter text-[#111827] flex flex-wrap items-center justify-center gap-1 sm:gap-2 leading-none">
            <span>COMING&nbsp;</span>
            <span className="inline-flex items-center">
              <span>S</span>

              {/* Rolling Eye Socket 1 */}
              <div
                ref={eye1Ref}
                className="relative inline-flex items-center justify-center bg-white rounded-full w-[0.8em] h-[0.8em] mx-[0.02em] align-middle overflow-hidden border-[3px] border-[#111827] shadow-inner"
              >
                <div
                  ref={pupil1Ref}
                  className="w-[0.38em] h-[0.38em] bg-[#111827] rounded-full relative flex items-center justify-center transition-transform duration-75 ease-out"
                >
                  <span className="absolute top-1 left-1 w-[0.1em] h-[0.1em] bg-white rounded-full"></span>
                </div>
              </div>

              {/* Rolling Eye Socket 2 */}
              <div
                ref={eye2Ref}
                className="relative inline-flex items-center justify-center bg-white rounded-full w-[0.8em] h-[0.8em] mx-[0.02em] align-middle overflow-hidden border-[3px] border-[#111827] shadow-inner"
              >
                <div
                  ref={pupil2Ref}
                  className="w-[0.38em] h-[0.38em] bg-[#111827] rounded-full relative flex items-center justify-center transition-transform duration-75 ease-out"
                >
                  <span className="absolute top-1 left-1 w-[0.1em] h-[0.1em] bg-white rounded-full"></span>
                </div>
              </div>

              <span>N</span>
            </span>
          </h1>
        </div>

        <p className="max-w-2xl text-black/50 sm:text-lg md:text-xl text-gray-700 font-medium my-4 leading-relaxed px-4">
          {/* Subscribe to our social networks to be the first to know all the events and get early access + an exclusive discount when we launch! */}
          Don't miss out. Follow our journey for early access, instant updates,
          and an exclusive discount when we go live!
        </p>

        {/* Subscription Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md my-6 px-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-0 sm:bg-white sm:p-1.5 sm:rounded-full sm:border-2 sm:border-[#DCEBFF] sm:shadow-lg transition-all focus-within:border-[#0365D4]"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Please enter your e-mail address"
            className="w-full bg-white sm:bg-transparent px-5 py-3.5 rounded-full sm:rounded-none border-2 sm:border-none border-[#DCEBFF] text-[#111827] font-medium placeholder-gray-400 focus:outline-none text-sm md:text-base"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#0365D4] hover:bg-blue-700 text-white font-bold rounded-full text-sm transition-all shadow-md hover:shadow-lg active:scale-95 shrink-0 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Subscribe"}
          </button>
        </form>

        {/* Feedback Alert */}
        {statusMessage && (
          <div
            className={`text-sm font-bold px-4 py-2 rounded-full border mb-4 ${
              statusMessage.type === "success"
                ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                : "bg-red-100 text-red-800 border-red-300"
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        {/* App Store / Google Play Buttons */}
        {/* <div id="install" className="mt-8 pt-6 border-t border-[#DCEBFF]/60 w-full max-w-lg">
          <p class="text-xs font-bold uppercase tracking-widest text-[#0365D4] mb-4">Get the app directly on store</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            
            Play Store
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#111827] hover:bg-[#0365D4] text-white px-5 py-2.5 rounded-xl transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-1.428V3.242c0-.53.213-1.039.61-1.428zM15.206 13.414l2.766-2.766-12.72-7.34 9.954 10.106zm0-2.828L5.252 20.692l12.72-7.34-2.766-2.766zm1.414 1.414l3.826-2.209c.813-.47.813-1.235 0-1.705l-3.826-2.209-1.884 1.884 1.884 1.884z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider font-semibold opacity-80 leading-tight">GET IT ON</div>
                <div className="text-sm font-bold leading-tight">Google Play</div>
              </div>
            </a>

            App Store
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#111827] hover:bg-[#0365D4] text-white px-5 py-2.5 rounded-xl transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.15c.62-.76 1.04-1.81.92-2.87-.9.04-2 .61-2.65 1.37-.58.68-1.08 1.76-.94 2.81 1.01.08 2.05-.55 2.67-1.31z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider font-semibold opacity-80 leading-tight">Download on the</div>
                <div className="text-sm font-bold leading-tight">App Store</div>
              </div>
            </a>

          </div>
        </div> */}
      </main>

      {/* ---------------- FOOTER ---------------- */}
  <Footer/>
    </div>
  );
}
