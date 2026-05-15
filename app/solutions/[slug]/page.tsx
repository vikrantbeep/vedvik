import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

const products: Record<string, {
  badge: string;
  name: string;
  subtitle: string;
  description: string;
  heroImage: string;
  youtubeId: string;
  brand: string;
  brandDesc: string;
  specs: { parameter: string; rating: string }[];
  showcaseImages: string[];
}> = {
  "hp-500": {
    badge: "Precision Series",
    name: "HP-Series 500",
    subtitle: "Horizontal Form Fill Seal",
    description: "An architectural marvel in mechanical engineering. Designed for quiet precision, the HP-500 delivers high-speed pouching with zero material waste and surgical accuracy.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOvMpK3M5VFxjZk-P7OmiDhQrH-cHycmYWKaNUJEek-zW4ySCC5g2G1AX_g54UaBr9wMJxwNLB5ihvGp_GVSyta4CRZn4DDRcujtU21PSqZmSW8O3wNmVzqObIjXsNeNkRCbHPQAySGSYPDea-bvHSqaBn9Ha-cS-gZKDIXC6_gQiVBF1nSzOSBkDzVPcb3KvSfGUyA19GPHIYBxW3bN1YEWcXNlHZCUA_lUMCo7Xp77XsHYey-RVr6BkeDuymBMlfaaFkAv2SdZI",
    youtubeId: "dQw4w9WgXcQ",
    brand: "Effytec, Spain",
    brandDesc: "Advanced HFFS systems since 1992.",
    specs: [
      { parameter: "Max Pouch Width", rating: "500 mm" },
      { parameter: "Operating Speed", rating: "120 pouches / min" },
      { parameter: "Material Compatibility", rating: "PE, PET, ALU, Bio-Composites" },
      { parameter: "Power Consumption", rating: "4.5 kW (Energy-Saver Mode)" },
      { parameter: "Precision Tolerance", rating: "± 0.2 mm" },
      { parameter: "HMI Control System", rating: '15" Multi-touch Panel' },
    ],
    showcaseImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOmaektmZQxq9dNwffq38NanshUV_oFLLw05U50OfHmqJt4RV5o088qomi-gfgJXPKdku9qs76feKt997glc3qc4L4SPuZguJ19dodPNkP811ZDmzuY6kyiitEPVZOa9Zb4g9_EonvVKxd5Suno2NTSz5m4gcroRK3myOZTb4i3-ZReAgpEItI-Y_AadMYtVh7Z1XZ6oNpCcZ_lI954gTbmXE-nmEyKPfpF-T3vFjwjsLtVLYUdry9eAhsJs9bBHwrnqUeEmoKWL4",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgPhd7Npd41TxrmYcBziTB1NYXtTxrsiS49qB_3sSaXaa1xj2i0sGKKQ_okSGlhTQ_8grYdElrhwv89J6ikYGwegHTuWFzUtAxVGgSo5WUAAHzb5fod9z2iUn07LEWScq70Wu7GSspkmX2TLLwYHo-nSErOzoIRnTtDg0WNjqwHW099AqUI3SU0PRCZv_lrQSZh8wvaMxW4DUdS55FhmGm9WWE_CjYLL7fu0GQ2b1p3EfSPCZC83wHPh9-m7aCP1LP6Yi9Y7atCMo",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARiiLOYkwPdE-UA9zAF-Qi9NzjP9605kPnWQ1MKETWinWxRrfm_fy93Zxd8g2XEtsmMgrusip8dCI83x2fM_GUHFwiHNLDh1X3GcOol7l3rrA9wn7-jcBGhUlSuchetLFEfkZE6kL1klhLyJkHZHg1V1_tAkWdWuNhDoHiuAoywxoDWR4sC72nZ0RteVUOvUdx5SY-g8lI3tFPhKtuIxH1L6FQLEP5PlHX8Cy3TDUwTiczeL-hSDxk2D_Wad9U657wYSJHKI",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ0Rhuo5sWwxTKvISGISt2XIswf7GWBddctXBRRkUPvwD9jXQWwnDTlVqsVH5xel4UWqZRhxzSGaoiTm1xdi15pkS2-isNaSu0jZ7MUMOo6F0AcjcvS1hzDouyhrg8t93fLmsVv7E-AJrvyZN7mJFtorKXfzqfacnmPZPIYmbYcyDBAID-NwG__L8kkGyCVbQTSIMcncr3KcNYbfWLJDqMjbiWhynHDrvrZNWwDVhdBcnR8SznTJrjVPMA1Wkgzb6zGXR7b2LNxuc",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCd4q2UinzZZOH-_bZODrsStRe-ejRhvH4nob8ieCJybE_EnWHJ8off8ek-PWtcioYBz1yiI4EfwM__UjON14JMTe9afCB8Ly6Flf7wUeywfzwiHQCeCUzY2E3gG5O6OMBNj1tw3ldZM-4Wji2Pg0-lppP5mccEIQfmJvtME02LbUb97VHZvk6Kfut9Mpyi6nIXBklJLJzmHuJexyyuvG_qUX9cMz6Piyl6vqRJNsvEmU0el4kwGBz6L6KYVdwgycEwqSOZEGxjqmQ",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOmaektmZQxq9dNwffq38NanshUV_oFLLw05U50OfHmqJt4RV5o088qomi-gfgJXPKdku9qs76feKt997glc3qc4L4SPuZguJ19dodPNkP811ZDmzuY6kyiitEPVZOa9Zb4g9_EonvVKxd5Suno2NTSz5m4gcroRK3myOZTb4i3-ZReAgpEItI-Y_AadMYtVh7Z1XZ6oNpCcZ_lI954gTbmXE-nmEyKPfpF-T3vFjwjsLtVLYUdry9eAhsJs9bBHwrnqUeEmoKWL4",
    ],
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products[slug];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary font-headline mb-4">Product Not Found</h1>
            <Link href="/solutions" className="text-secondary underline">Back to Solutions</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="pt-24 flex-grow">
        {/* Hero */}
        <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-4">
              <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full text-[0.6875rem] font-bold tracking-widest uppercase">{product.badge}</span>
            </div>
            <h1 className="text-4xl md:text-[3.5rem] font-extrabold leading-tight tracking-tighter text-primary mb-6">
              {product.name} <br />{product.subtitle}
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed mb-8">{product.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-primary-container text-on-primary px-8 py-4 rounded-md font-bold tracking-tight shadow-sm text-center">Request Technical Quote</Link>
              <button className="border border-outline-variant/20 text-secondary px-8 py-4 rounded-md font-bold tracking-tight hover:bg-surface-container transition-colors">Download Brochure</button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-square bg-surface-container-lowest rounded-xl overflow-hidden">
              <img className="w-full h-full object-cover" src={product.heroImage} alt={product.name} />
            </div>
          </div>
        </section>

        {/* YouTube Demo */}
        <section className="bg-primary py-16">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="flex flex-col items-center mb-10 text-center">
              <h2 className="text-white text-3xl font-bold mb-4 tracking-tight">Machine Demo</h2>
              <div className="h-1 w-24 bg-secondary" />
            </div>
            <div className="aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${product.youtubeId}?autoplay=1&mute=1`}
                title="Machine Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Specs + Showcase */}
        <section className="py-24 max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-12 text-primary border-l-4 border-secondary pl-6">Technical Specifications</h3>
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-surface-container-low border-b border-outline-variant/20">
                    <tr>
                      <th className="px-6 py-4 font-bold text-primary uppercase tracking-widest text-[0.6875rem]">Parameter</th>
                      <th className="px-6 py-4 font-bold text-primary uppercase tracking-widest text-[0.6875rem]">Rating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {product.specs.map((spec) => (
                      <tr key={spec.parameter}>
                        <td className="px-6 py-5 font-semibold text-on-surface">{spec.parameter}</td>
                        <td className="px-6 py-5 text-on-surface-variant">{spec.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-12 flex items-center gap-6 p-8 bg-surface-container-low rounded-xl">
                <span className="material-symbols-outlined text-4xl text-secondary">verified_user</span>
                <div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Manufacturer Info</p>
                  <p className="text-lg font-bold text-primary">Engineering by {product.brand}</p>
                  <p className="text-sm text-on-surface-variant">{product.brandDesc}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-12 text-primary border-l-4 border-secondary pl-6">Packaging Showcase</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {product.showcaseImages.map((src, i) => (
                  <div key={i} className="aspect-square bg-surface-container-low rounded-lg overflow-hidden">
                    <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src={src} alt={`Showcase ${i + 1}`} />
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 bg-surface-container-lowest shadow-sm rounded-xl border border-outline-variant/10">
                <h4 className="font-bold text-primary mb-4 italic">Custom Tooling Available</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Our modular forming stations allow for rapid changeovers between complex shapes. Whether you require shaped sachets, twin-packs, or custom corner-valves, the system adapts to your brand&apos;s unique silhouette.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
