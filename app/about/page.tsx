import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Vedvik Machinery – Packaging Machinery Manufacturer, Ahmedabad",
  description: "Vedvik Machinery is an Ahmedabad-based manufacturer of packaging systems and official Indian representative of Effytec (Spain) and other European machinery brands. 30+ years of team expertise.",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="max-w-screen-2xl mx-auto px-12 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="inline-block py-1 px-4 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
                Our Mission
              </span>
              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-primary leading-none mb-4 md:mb-6 font-headline">
                ABOUT VEDVIK<br />MACHINERY
              </h1>
              <div className="space-y-6 text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
                <p>
                  Vedvik Machinery is a trusted provider of advanced packaging and inspection solutions for the food, beverage, pharmaceutical, chemical, and consumer goods industries. We represent leading international manufacturers and deliver high-quality machinery designed to improve production efficiency, product quality, and operational reliability.
                </p>
                <p>
                  Our portfolio includes filling, packaging, coding, inspection, and quality control equipment tailored to the unique requirements of each customer. By combining global technology with local support, we help businesses optimize their production processes and achieve long-term growth.
                </p>
                <p>
                  At Vedvik Machinery, we are committed to building lasting partnerships through technical expertise, responsive service, and solutions that deliver real value to our customers.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden">
              <img alt="Vedvik Machinery facility" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/Filtec_pjlyz3.png" />
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-32">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-primary mb-8">
                  Advanced Solutions for Modern Manufacturing
                </h2>
                <p className="text-lg text-on-surface-variant">
                  We empower manufacturers with advanced packaging and automation solutions backed by international technology and reliable local support. With our team's 30+ years of experience, we help industries improve efficiency, productivity, and long-term growth.
                </p>
              </div>
              <div className="hidden md:block w-32 h-1 bg-secondary rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 group relative bg-surface-container-lowest p-12 rounded-xl hover:shadow-[0_32px_32px_rgba(26,28,28,0.04)] transition-all duration-300">
                <span className="material-symbols-outlined text-4xl text-secondary mb-8 block">support_agent</span>
                <h3 className="text-2xl font-bold text-primary mb-4">Local Sales & Service</h3>
                <p className="text-on-surface-variant leading-relaxed max-w-md">
                  Our team is based in Ahmedabad and handles enquiries, site visits, installation and after-sales support directly — no third-party middlemen.
                </p>
              </div>

              <div className="group relative bg-primary-container p-12 rounded-xl overflow-hidden">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl text-on-primary-container mb-8 block">language</span>
                  <h3 className="text-2xl font-bold text-white mb-4">International Technology Partners</h3>
                  <p className="text-blue-100 leading-relaxed">
                    We represent established manufacturers from Spain, Italy, South Africa and Canada — proven European engineering without managing overseas procurement yourself.
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-container to-secondary opacity-50"></div>
              </div>

              <div className="group relative bg-surface-container-lowest p-12 rounded-xl hover:shadow-[0_32px_32px_rgba(26,28,28,0.04)] transition-all duration-300">
                <span className="material-symbols-outlined text-4xl text-secondary mb-8 block">hub</span>
                <h3 className="text-2xl font-bold text-primary mb-4">Scalable Line Integration</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Whether you need a standalone machine or a full integrated line, our systems are designed to connect with upstream and downstream equipment as your output grows.
                </p>
              </div>

              <div className="md:col-span-2 flex flex-col md:flex-row bg-white rounded-xl overflow-hidden border border-outline-variant/10">
                <div className="w-full md:w-1/2 p-12">
                  <span className="material-symbols-outlined text-4xl text-secondary mb-8 block">verified</span>
                  <h3 className="text-2xl font-bold text-primary mb-4">Reliable, Tested Equipment</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Every system we supply comes with manufacturer-backed technical documentation, CE or equivalent certification, and a clear warranty and service agreement.
                  </p>
                </div>
                <div className="w-full md:w-1/2 min-h-[300px]">
                  <img alt="Modern automated factory floor" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2pbaT9xlQUC_d9QYo2KCp-c5viFjdQYldRf_siu08lv2jFil7nc3cB8prsdN8C4-lbylCKwBoey2ZCpKZmtI7gNM8kJfFi1ap5sZO745VNW0V9CJwx_SDeCdRzJJ0codzrxmGnBJJVwRNa6-1dM9Pxy2JFXcl2c1jSSCvO59C6NJ1LQvXHknlFyxqVOLuCLN-ApmZ9lCV1Z7zCl2_Su7UTbjGsPL7hrDXbwRFclduZGZU8UHKPEmmql3aQG2kK9UUyjZFeUDfTeQ" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl mx-auto px-12 py-32 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Let's Talk About Your Line.</h2>
          <p className="text-on-surface-variant mb-12 max-w-xl mx-auto">
            Share your product and packing requirements with us. We'll recommend the right system and follow up within one business day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="/contact" className="bg-primary-container text-on-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary transition-all text-center">Get in Touch</a>
            <a href="/solutions" className="text-secondary font-bold text-lg px-10 py-4 border border-outline-variant/30 rounded-lg hover:bg-surface-container-low transition-all text-center">View Our Solutions</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
