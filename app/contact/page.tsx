"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Form */}
          <div className="lg:col-span-7">
            <div className="mb-12">
              <p className="text-secondary font-semibold tracking-widest uppercase text-xs mb-4">Inquiry Channel</p>
              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-primary leading-none mb-4 md:mb-6 font-headline">
                CONNECT WITH <br />US.
              </h1>
              <p className="text-on-surface-variant max-w-xl text-base md:text-lg leading-relaxed font-light">
                Direct communication for high-specification packaging systems. Submit your requirements for a call back.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-10">
                <div className="relative">
                  <label className="text-xs font-bold text-on-surface-variant mb-2 block uppercase tracking-widest" htmlFor="email">
                    Email ID
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 text-lg font-medium transition-all duration-300 placeholder:text-outline-variant/50 outline-none"
                    id="email"
                    placeholder="client@organization.com"
                    type="email"
                  />
                </div>

                <div className="relative">
                  <label className="text-xs font-bold text-on-surface-variant mb-2 block uppercase tracking-widest" htmlFor="requirement">
                    Requirement
                  </label>
                  <select
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 text-lg font-medium transition-all duration-300 appearance-none outline-none"
                    id="requirement"
                    defaultValue=""
                  >
                    <option disabled value="">Select machinery category</option>
                    <option value="hffs">Horizontal Form Fill Seal</option>
                    <option value="liquid-filling">Liquid Filling Lines</option>
                    <option value="pfs">Pick Fill Seal</option>
                    <option value="bulk">Bulk HFFS & VFFS</option>
                    <option value="secondary">Secondary Automation</option>
                    <option value="inspection">Vision Inspection</option>
                    <option value="checkweighers">Checkweighers</option>
                    <option value="xray">X-ray and Metal Detector</option>
                    <option value="printing">Printers and Coders</option>
                    <option value="unwinders">Roller Unwinders</option>
                  </select>
                  <div className="absolute right-0 bottom-4 pointer-events-none text-on-surface-variant">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>

                <div className="relative">
                  <label className="text-xs font-bold text-on-surface-variant mb-2 block uppercase tracking-widest" htmlFor="notes">
                    Notes
                  </label>
                  <textarea
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-0 py-3 text-lg font-medium transition-all duration-300 placeholder:text-outline-variant/50 resize-none outline-none"
                    id="notes"
                    placeholder="Briefly describe your requirement specifications..."
                    rows={4}
                  />
                </div>
              </div>

              <div className="pt-4">
                <button className="group flex items-center gap-4 bg-primary hover:bg-primary-container text-on-primary px-10 py-5 font-bold transition-all duration-300 uppercase tracking-widest">
                  <span>Submit Form</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Info Panel */}
          <aside className="lg:col-span-5 lg:sticky lg:top-40">
            <div className="bg-surface-container-low p-10 md:p-14 space-y-12">
              <div>
                <h3 className="text-xs font-bold text-primary mb-8 uppercase tracking-widest">
                  Factory Contact
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <div>
                      <p className="font-bold text-lg leading-tight text-on-surface">Ahmedabad, Gujarat, India</p>
                      <p className="text-on-surface-variant font-medium">Bakrol, Indore-Ahmedabad Highway, Ahmedabad</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary">mail</span>
                    <div>
                      <p className="font-bold text-lg leading-tight text-on-surface">vikrant@vedvikmachinery.com</p>
                      <p className="text-on-surface-variant font-medium">Please Call for Any Urgent Queries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary">call</span>
                    <div>
                      <p className="font-bold text-lg leading-tight text-on-surface">+91 81558 92080</p>
                      <p className="text-on-surface-variant font-medium">Mon - Sat: 09:00 - 18:00 IST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-outline-variant/20">
                <h3 className="text-xs font-bold text-on-surface-variant mb-6 uppercase tracking-widest">
                  Works
                </h3>
                <div className="aspect-video w-full bg-surface-container overflow-hidden">
                  <img
                    alt="Vedvik Machinery"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    src="https://res.cloudinary.com/dnts8gzbh/image/upload/v1778852182/Screenshot_2026-05-15_at_7.06.09_PM_r3gh2m.png"
                  />
                </div>
              </div>

              <div className="p-6 bg-surface-container-highest/30">
                <p className="text-sm font-medium text-on-surface-variant italic leading-snug">
                  &quot;We look forward to fulfilling your packaging requirements with the best solution.&quot;
                </p>
                <p className="text-xs font-bold uppercase tracking-widest mt-4 text-primary">
                  - Vedvik Machinery
                </p>
              </div>
            </div>
          </aside>

        </div>
      </main>

      <Footer />
    </div>
  );
}
