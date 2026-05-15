import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        {/* Hero / Mission Section */}
        <section className="max-w-screen-2xl mx-auto px-12 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="inline-block py-1 px-4 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
                Our Mission
              </span>
              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-primary leading-none mb-4 md:mb-6 font-headline">
                PRECISION<br />PACKAGING
              </h1>
              <div className="space-y-8 text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
                <p>
                  Vedvik Machinery is a trusted Indian packaging machinery company with over 30 years of industry experience, delivering advanced automation and packaging solutions to manufacturers across diverse industries. Combining strong engineering expertise with globally proven technologies, we provide reliable, high-performance machinery designed to improve efficiency, accuracy, and long-term productivity. Our solutions are built around the evolving needs of modern manufacturing while maintaining the flexibility and understanding that comes from being deeply connected to the Indian market.
                </p>
                <p>
                  With a focus on bringing international machinery standards together with dependable local support, Vedvik Machinery represents leading global technology partners while ensuring responsive service, technical assistance, and customer-focused solutions within India. From consultation and installation to after-sales support, our team is committed to building long-term partnerships and delivering machinery solutions that businesses can rely on with confidence.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden">
              <img
                alt="Precision engineered steel gears"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/Filtec_pjlyz3.png"
              />
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="bg-surface-container-low py-32">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-primary mb-8">
                  Advanced Solutions for Modern Manufacturing
                </h2>
                <p className="text-lg text-on-surface-variant">
                  We empower manufacturers with advanced packaging and automation solutions backed by international technology and reliable local support. With over 30 years of experience, we help industries improve efficiency, productivity, and long-term growth.
                </p>
              </div>
              <div className="hidden md:block w-32 h-1 bg-secondary rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 group relative bg-surface-container-lowest p-12 rounded-xl hover:shadow-[0_32px_32px_rgba(26,28,28,0.04)] transition-all duration-300">
                <span className="material-symbols-outlined text-4xl text-secondary mb-8 block">precision_manufacturing</span>
                <h3 className="text-2xl font-bold text-primary mb-4">Service Support</h3>
                <p className="text-on-surface-variant leading-relaxed max-w-md">
                  Dedicated local service and technical support backed by industry expertise and quick response times.
                </p>
              </div>

              <div className="group relative bg-primary-container p-12 rounded-xl overflow-hidden">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl text-on-primary-container mb-8 block">language</span>
                  <h3 className="text-2xl font-bold text-white mb-4">Global Network</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Direct access to world-class engineering from Europe, South Africa, Canada, and beyond, delivered with local support.
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-container to-secondary opacity-50"></div>
              </div>

              <div className="group relative bg-surface-container-lowest p-12 rounded-xl hover:shadow-[0_32px_32px_rgba(26,28,28,0.04)] transition-all duration-300">
                <span className="material-symbols-outlined text-4xl text-secondary mb-8 block">hub</span>
                <h3 className="text-2xl font-bold text-primary mb-4">Scalability</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Modular designs that grow with your production needs. We engineer for today with a blueprint for tomorrow.
                </p>
              </div>

              <div className="md:col-span-2 flex flex-col md:flex-row bg-white rounded-xl overflow-hidden border border-outline-variant/10">
                <div className="w-full md:w-1/2 p-12">
                  <span className="material-symbols-outlined text-4xl text-secondary mb-8 block">verified</span>
                  <h3 className="text-2xl font-bold text-primary mb-4">Uncompromising Quality</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Rigorous testing protocols ensure that every component bearing the Vedvik name meets your expectations.
                  </p>
                </div>
                <div className="w-full md:w-1/2 min-h-[300px]">
                  <img
                    alt="Modern automated factory floor"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2pbaT9xlQUC_d9QYo2KCp-c5viFjdQYldRf_siu08lv2jFil7nc3cB8prsdN8C4-lbylCKwBoey2ZCpKZmtI7gNM8kJfFi1ap5sZO745VNW0V9CJwx_SDeCdRzJJ0codzrxmGnBJJVwRNa6-1dM9Pxy2JFXcl2c1jSSCvO59C6NJ1LQvXHknlFyxqVOLuCLN-ApmZ9lCV1Z7zCl2_Su7UTbjGsPL7hrDXbwRFclduZGZU8UHKPEmmql3aQG2kK9UUyjZFeUDfTeQ"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-screen-xl mx-auto px-12 py-32 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Ready to evolve?</h2>
          <p className="text-on-surface-variant mb-12 max-w-xl mx-auto">
            Join the network of forward-thinking Indian factories leveraging Vedvik's engineering prowess.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="/contact" className="bg-primary-container text-on-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary transition-all">
              Consult Us
            </a>
            <a href="/solutions" className="text-secondary font-bold text-lg px-10 py-4 border border-outline-variant/30 rounded-lg hover:bg-surface-container-low transition-all">
              View Solutions
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
