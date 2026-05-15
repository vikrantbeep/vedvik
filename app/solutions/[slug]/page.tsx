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
  "HFFS": {
    badge: "Packaging",
    name: "Horizontal Form Fill Seal",
    subtitle: "High-Speed Pouch Packaging",
    description: "Advanced horizontal form-fill-seal systems engineered for high-speed pouching with zero material waste and surgical accuracy. Ideal for granular and liquid products.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuASYw6roxZQLw2TfrRUN0ptzhsGM69inW3KS_s2ZY9R6wCyMY3wdoFc5ajxzf_GJZj7axSCKoy0MpVQP6qBhwB7mkYlebgNWijtOs8soBZOQLAhiGZhsoRzf3Kfeo1WRFGBuTCzzcZGXIBEs9zvnbGR9OEPyPQgHsBSzcDWx8LaxGN7971SuNdLHtHI75Iv9BKZFFTJQ3iGV41u1u0zjfP7qGzPjISQ0GXPaBRFBBI-k43RPS9S81ArXDL4xUEMa6OM-OsP5V7fN9w",
    youtubeId: "dQw4w9WgXcQ",
    brand: "Effytec, Spain",
    brandDesc: "Advanced HFFS systems since 1992.",
    specs: [
      { parameter: "Max Pouch Width", rating: "500 mm" },
      { parameter: "Operating Speed", rating: "120 pouches / min" },
      { parameter: "Material Compatibility", rating: "PE, PET, ALU, Bio-Composites" },
      { parameter: "Power Consumption", rating: "4.5 kW" },
      { parameter: "Precision Tolerance", rating: "± 0.2 mm" },
      { parameter: "HMI Control System", rating: '15" Multi-touch Panel' },
    ],
    showcaseImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASYw6roxZQLw2TfrRUN0ptzhsGM69inW3KS_s2ZY9R6wCyMY3wdoFc5ajxzf_GJZj7axSCKoy0MpVQP6qBhwB7mkYlebgNWijtOs8soBZOQLAhiGZhsoRzf3Kfeo1WRFGBuTCzzcZGXIBEs9zvnbGR9OEPyPQgHsBSzcDWx8LaxGN7971SuNdLHtHI75Iv9BKZFFTJQ3iGV41u1u0zjfP7qGzPjISQ0GXPaBRFBBI-k43RPS9S81ArXDL4xUEMa6OM-OsP5V7fN9w",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASYw6roxZQLw2TfrRUN0ptzhsGM69inW3KS_s2ZY9R6wCyMY3wdoFc5ajxzf_GJZj7axSCKoy0MpVQP6qBhwB7mkYlebgNWijtOs8soBZOQLAhiGZhsoRzf3Kfeo1WRFGBuTCzzcZGXIBEs9zvnbGR9OEPyPQgHsBSzcDWx8LaxGN7971SuNdLHtHI75Iv9BKZFFTJQ3iGV41u1u0zjfP7qGzPjISQ0GXPaBRFBBI-k43RPS9S81ArXDL4xUEMa6OM-OsP5V7fN9w",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASYw6roxZQLw2TfrRUN0ptzhsGM69inW3KS_s2ZY9R6wCyMY3wdoFc5ajxzf_GJZj7axSCKoy0MpVQP6qBhwB7mkYlebgNWijtOs8soBZOQLAhiGZhsoRzf3Kfeo1WRFGBuTCzzcZGXIBEs9zvnbGR9OEPyPQgHsBSzcDWx8LaxGN7971SuNdLHtHI75Iv9BKZFFTJQ3iGV41u1u0zjfP7qGzPjISQ0GXPaBRFBBI-k43RPS9S81ArXDL4xUEMa6OM-OsP5V7fN9w",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASYw6roxZQLw2TfrRUN0ptzhsGM69inW3KS_s2ZY9R6wCyMY3wdoFc5ajxzf_GJZj7axSCKoy0MpVQP6qBhwB7mkYlebgNWijtOs8soBZOQLAhiGZhsoRzf3Kfeo1WRFGBuTCzzcZGXIBEs9zvnbGR9OEPyPQgHsBSzcDWx8LaxGN7971SuNdLHtHI75Iv9BKZFFTJQ3iGV41u1u0zjfP7qGzPjISQ0GXPaBRFBBI-k43RPS9S81ArXDL4xUEMa6OM-OsP5V7fN9w",
    ],
  },

  "Liquid Filling": {
    badge: "Packaging",
    name: "Liquid Filling Lines",
    subtitle: "Aseptic Rotary Filling Systems",
    description: "Aseptic rotary filling systems with high accuracy. CIP/SIP ready for FMCG and pharmaceutical applications with precision dosing and hygienic design.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjaUfaI189h7y5hMuXRmmvvvCM1bCaQYpRGkaFzAT8MTPBQtiLo091cOM3sZZchjfiDJl1Xi1HiVqkQ91sigAKf9jdCoAJJMuIQl2_oalzY_r4Gu-M6rAilfOXXOcXUKmB6cpIlZbPbyja00kUbR3RuXb7FuT8LxNDUgPC9I0pYdapceISuU-5H6WuNpifFCJfTUe49iYy6er0JYr3khoaTaMqJz3CsGD69fjh3YepsNc5Aotma0cRiQ49FLxKdfhULkKVakv4apk",
    youtubeId: "dQw4w9WgXcQ",
    brand: "Filtec Automation, South Africa",
    brandDesc: "Specialists in liquid filling and capping technology.",
    specs: [
      { parameter: "Filling Range", rating: "50 ml – 5000 ml" },
      { parameter: "Operating Speed", rating: "Up to 200 BPM" },
      { parameter: "Accuracy", rating: "± 0.5%" },
      { parameter: "Cleaning System", rating: "CIP / SIP Ready" },
      { parameter: "Material", rating: "316L Stainless Steel" },
      { parameter: "Control System", rating: "PLC + HMI" },
    ],
    showcaseImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjaUfaI189h7y5hMuXRmmvvvCM1bCaQYpRGkaFzAT8MTPBQtiLo091cOM3sZZchjfiDJl1Xi1HiVqkQ91sigAKf9jdCoAJJMuIQl2_oalzY_r4Gu-M6rAilfOXXOcXUKmB6cpIlZbPbyja00kUbR3RuXb7FuT8LxNDUgPC9I0pYdapceISuU-5H6WuNpifFCJfTUe49iYy6er0JYr3khoaTaMqJz3CsGD69fjh3YepsNc5Aotma0cRiQ49FLxKdfhULkKVakv4apk",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjaUfaI189h7y5hMuXRmmvvvCM1bCaQYpRGkaFzAT8MTPBQtiLo091cOM3sZZchjfiDJl1Xi1HiVqkQ91sigAKf9jdCoAJJMuIQl2_oalzY_r4Gu-M6rAilfOXXOcXUKmB6cpIlZbPbyja00kUbR3RuXb7FuT8LxNDUgPC9I0pYdapceISuU-5H6WuNpifFCJfTUe49iYy6er0JYr3khoaTaMqJz3CsGD69fjh3YepsNc5Aotma0cRiQ49FLxKdfhULkKVakv4apk",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjaUfaI189h7y5hMuXRmmvvvCM1bCaQYpRGkaFzAT8MTPBQtiLo091cOM3sZZchjfiDJl1Xi1HiVqkQ91sigAKf9jdCoAJJMuIQl2_oalzY_r4Gu-M6rAilfOXXOcXUKmB6cpIlZbPbyja00kUbR3RuXb7FuT8LxNDUgPC9I0pYdapceISuU-5H6WuNpifFCJfTUe49iYy6er0JYr3khoaTaMqJz3CsGD69fjh3YepsNc5Aotma0cRiQ49FLxKdfhULkKVakv4apk",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjaUfaI189h7y5hMuXRmmvvvCM1bCaQYpRGkaFzAT8MTPBQtiLo091cOM3sZZchjfiDJl1Xi1HiVqkQ91sigAKf9jdCoAJJMuIQl2_oalzY_r4Gu-M6rAilfOXXOcXUKmB6cpIlZbPbyja00kUbR3RuXb7FuT8LxNDUgPC9I0pYdapceISuU-5H6WuNpifFCJfTUe49iYy6er0JYr3khoaTaMqJz3CsGD69fjh3YepsNc5Aotma0cRiQ49FLxKdfhULkKVakv4apk",
    ],
  },

  "PFS": {
    badge: "Packaging",
    name: "Pick Fill Seal",
    subtitle: "Automated Hygienic Packaging",
    description: "Automated pick, fill and seal systems for precise and hygienic packaging of products. Designed for high-speed lines requiring consistent output and minimal downtime.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcN-bXfDgugrZZA-NYmFbDDXhuEP3CllefMJs99e1Mcbi6mmIm9go_tStux-WAQe2Y4HNbir8c7Qpo-uBdUdDr1Y9rzwfNvLmH5yiSuOCfhAIQyxzvUDzvHvZoM5sk6qQMqwcfqsjgh9aCpalQzgYqo6H480vC0D2Mep64mZTJEXZU212HM7v1z7lFC_XK6sE66U7f9I9p-c6AGEDHvGkn3JengqVTCQlVHyqCixAnlWY_73UQrunV_QDKgzoHh-XKdv0vLoZlxJo",
    youtubeId: "dQw4w9WgXcQ",
    brand: "Vedvik Machinery, India",
    brandDesc: "In-house engineered pick fill seal solutions.",
    specs: [
      { parameter: "Speed", rating: "Up to 60 cycles / min" },
      { parameter: "Cup Diameter", rating: "30 – 120 mm" },
      { parameter: "Fill Volume", rating: "20 ml – 500 ml" },
      { parameter: "Seal Type", rating: "Heat / Peel Foil" },
      { parameter: "Drive System", rating: "Servo-driven" },
      { parameter: "Compliance", rating: "GMP / FDA Ready" },
    ],
    showcaseImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcN-bXfDgugrZZA-NYmFbDDXhuEP3CllefMJs99e1Mcbi6mmIm9go_tStux-WAQe2Y4HNbir8c7Qpo-uBdUdDr1Y9rzwfNvLmH5yiSuOCfhAIQyxzvUDzvHvZoM5sk6qQMqwcfqsjgh9aCpalQzgYqo6H480vC0D2Mep64mZTJEXZU212HM7v1z7lFC_XK6sE66U7f9I9p-c6AGEDHvGkn3JengqVTCQlVHyqCixAnlWY_73UQrunV_QDKgzoHh-XKdv0vLoZlxJo",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcN-bXfDgugrZZA-NYmFbDDXhuEP3CllefMJs99e1Mcbi6mmIm9go_tStux-WAQe2Y4HNbir8c7Qpo-uBdUdDr1Y9rzwfNvLmH5yiSuOCfhAIQyxzvUDzvHvZoM5sk6qQMqwcfqsjgh9aCpalQzgYqo6H480vC0D2Mep64mZTJEXZU212HM7v1z7lFC_XK6sE66U7f9I9p-c6AGEDHvGkn3JengqVTCQlVHyqCixAnlWY_73UQrunV_QDKgzoHh-XKdv0vLoZlxJo",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcN-bXfDgugrZZA-NYmFbDDXhuEP3CllefMJs99e1Mcbi6mmIm9go_tStux-WAQe2Y4HNbir8c7Qpo-uBdUdDr1Y9rzwfNvLmH5yiSuOCfhAIQyxzvUDzvHvZoM5sk6qQMqwcfqsjgh9aCpalQzgYqo6H480vC0D2Mep64mZTJEXZU212HM7v1z7lFC_XK6sE66U7f9I9p-c6AGEDHvGkn3JengqVTCQlVHyqCixAnlWY_73UQrunV_QDKgzoHh-XKdv0vLoZlxJo",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcN-bXfDgugrZZA-NYmFbDDXhuEP3CllefMJs99e1Mcbi6mmIm9go_tStux-WAQe2Y4HNbir8c7Qpo-uBdUdDr1Y9rzwfNvLmH5yiSuOCfhAIQyxzvUDzvHvZoM5sk6qQMqwcfqsjgh9aCpalQzgYqo6H480vC0D2Mep64mZTJEXZU212HM7v1z7lFC_XK6sE66U7f9I9p-c6AGEDHvGkn3JengqVTCQlVHyqCixAnlWY_73UQrunV_QDKgzoHh-XKdv0vLoZlxJo",
    ],
  },

  "Bulk Packing": {
    badge: "Packaging",
    name: "Bulk HFFS & VFFS",
    subtitle: "5 to 50 kg Bulk Packaging",
    description: "Heavy-duty bulk packing systems in HFFS and VFFS format. Designed for 5 to 50 kg applications in agricultural, chemical, and food processing industries.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ5yRuj22JmhL1ZJHXb2sJCHUAC_UecQO4nb9v_tZX237QZoveFHjoOijZnY78SCIA-s9h5HulDqOdjQvbTRib2XvmU0ykqVbiQv9Y8e7RCiFQY8WAUawZAFsLw3YAwMROss4DoaRjaxNJBnFXw8DtzOZd9rT1KvAvY7LX2aY8307tK1Se-GHXFmexfhLUncFYg_hQZBbji79pKF8MLub6NofRzZ4ixurOv6ny_m3Z65CHwYZDfrwii9ank4nZrw6INF8-1JoNVc",
    youtubeId: "dQw4w9WgXcQ",
    brand: "MF Tecno, Italy",
    brandDesc: "Italian engineering for heavy-duty bulk packaging.",
    specs: [
      { parameter: "Bag Weight Range", rating: "5 – 50 kg" },
      { parameter: "Speed", rating: "Up to 600 bags / hour" },
      { parameter: "Bag Format", rating: "HFFS / VFFS" },
      { parameter: "Film Thickness", rating: "80 – 200 microns" },
      { parameter: "Sealing System", rating: "Heat seal / Ultrasonic" },
      { parameter: "Control", rating: "PLC + Touchscreen HMI" },
    ],
    showcaseImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ5yRuj22JmhL1ZJHXb2sJCHUAC_UecQO4nb9v_tZX237QZoveFHjoOijZnY78SCIA-s9h5HulDqOdjQvbTRib2XvmU0ykqVbiQv9Y8e7RCiFQY8WAUawZAFsLw3YAwMROss4DoaRjaxNJBnFXw8DtzOZd9rT1KvAvY7LX2aY8307tK1Se-GHXFmexfhLUncFYg_hQZBbji79pKF8MLub6NofRzZ4ixurOv6ny_m3Z65CHwYZDfrwii9ank4nZrw6INF8-1JoNVc",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ5yRuj22JmhL1ZJHXb2sJCHUAC_UecQO4nb9v_tZX237QZoveFHjoOijZnY78SCIA-s9h5HulDqOdjQvbTRib2XvmU0ykqVbiQv9Y8e7RCiFQY8WAUawZAFsLw3YAwMROss4DoaRjaxNJBnFXw8DtzOZd9rT1KvAvY7LX2aY8307tK1Se-GHXFmexfhLUncFYg_hQZBbji79pKF8MLub6NofRzZ4ixurOv6ny_m3Z65CHwYZDfrwii9ank4nZrw6INF8-1JoNVc",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ5yRuj22JmhL1ZJHXb2sJCHUAC_UecQO4nb9v_tZX237QZoveFHjoOijZnY78SCIA-s9h5HulDqOdjQvbTRib2XvmU0ykqVbiQv9Y8e7RCiFQY8WAUawZAFsLw3YAwMROss4DoaRjaxNJBnFXw8DtzOZd9rT1KvAvY7LX2aY8307tK1Se-GHXFmexfhLUncFYg_hQZBbji79pKF8MLub6NofRzZ4ixurOv6ny_m3Z65CHwYZDfrwii9ank4nZrw6INF8-1JoNVc",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ5yRuj22JmhL1ZJHXb2sJCHUAC_UecQO4nb9v_tZX237QZoveFHjoOijZnY78SCIA-s9h5HulDqOdjQvbTRib2XvmU0ykqVbiQv9Y8e7RCiFQY8WAUawZAFsLw3YAwMROss4DoaRjaxNJBnFXw8DtzOZd9rT1KvAvY7LX2aY8307tK1Se-GHXFmexfhLUncFYg_hQZBbji79pKF8MLub6NofRzZ4ixurOv6ny_m3Z65CHwYZDfrwii9ank4nZrw6INF8-1JoNVc",
    ],
  },

  "Secondary Automation": {
    badge: "Packaging",
    name: "Secondary Automation",
    subtitle: "End-of-Line Packaging Systems",
    description: "End-of-line secondary packaging systems including cartoning, case packing, and shrink wrapping. Designed for seamless integration with primary packaging lines.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ5yRuj22JmhL1ZJHXb2sJCHUAC_UecQO4nb9v_tZX237QZoveFHjoOijZnY78SCIA-s9h5HulDqOdjQvbTRib2XvmU0ykqVbiQv9Y8e7RCiFQY8WAUawZAFsLw3YAwMROss4DoaRjaxNJBnFXw8DtzOZd9rT1KvAvY7LX2aY8307tK1Se-GHXFmexfhLUncFYg_hQZBbji79pKF8MLub6NofRzZ4ixurOv6ny_m3Z65CHwYZDfrwii9ank4nZrw6INF8-1JoNVc",
    youtubeId: "dQw4w9WgXcQ",
    brand: "Vedvik Machinery, India",
    brandDesc: "Custom secondary automation for diverse industries.",
    specs: [
      { parameter: "System Type", rating: "Cartoning / Case Packing / Shrink" },
      { parameter: "Speed", rating: "Up to 150 cartons / min" },
      { parameter: "Integration", rating: "Compatible with all primary lines" },
      { parameter: "Control", rating: "PLC + SCADA" },
      { parameter: "Format Change", rating: "Tool-free changeover" },
      { parameter: "Footprint", rating: "Customizable" },
    ],
    showcaseImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ5yRuj22JmhL1ZJHXb2sJCHUAC_UecQO4nb9v_tZX237QZoveFHjoOijZnY78SCIA-s9h5HulDqOdjQvbTRib2XvmU0ykqVbiQv9Y8e7RCiFQY8WAUawZAFsLw3YAwMROss4DoaRjaxNJBnFXw8DtzOZd9rT1KvAvY7LX2aY8307tK1Se-GHXFmexfhLUncFYg_hQZBbji79pKF8MLub6NofRzZ4ixurOv6ny_m3Z65CHwYZDfrwii9ank4nZrw6INF8-1JoNVc",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ5yRuj22JmhL1ZJHXb2sJCHUAC_UecQO4nb9v_tZX237QZoveFHjoOijZnY78SCIA-s9h5HulDqOdjQvbTRib2XvmU0ykqVbiQv9Y8e7RCiFQY8WAUawZAFsLw3YAwMROss4DoaRjaxNJBnFXw8DtzOZd9rT1KvAvY7LX2aY8307tK1Se-GHXFmexfhLUncFYg_hQZBbji79pKF8MLub6NofRzZ4ixurOv6ny_m3Z65CHwYZDfrwii9ank4nZrw6INF8-1JoNVc",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ5yRuj22JmhL1ZJHXb2sJCHUAC_UecQO4nb9v_tZX237QZoveFHjoOijZnY78SCIA-s9h5HulDqOdjQvbTRib2XvmU0ykqVbiQv9Y8e7RCiFQY8WAUawZAFsLw3YAwMROss4DoaRjaxNJBnFXw8DtzOZd9rT1KvAvY7LX2aY8307tK1Se-GHXFmexfhLUncFYg_hQZBbji79pKF8MLub6NofRzZ4ixurOv6ny_m3Z65CHwYZDfrwii9ank4nZrw6INF8-1JoNVc",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ5yRuj22JmhL1ZJHXb2sJCHUAC_UecQO4nb9v_tZX237QZoveFHjoOijZnY78SCIA-s9h5HulDqOdjQvbTRib2XvmU0ykqVbiQv9Y8e7RCiFQY8WAUawZAFsLw3YAwMROss4DoaRjaxNJBnFXw8DtzOZd9rT1KvAvY7LX2aY8307tK1Se-GHXFmexfhLUncFYg_hQZBbji79pKF8MLub6NofRzZ4ixurOv6ny_m3Z65CHwYZDfrwii9ank4nZrw6INF8-1JoNVc",
    ],
  },

  "Inspection": {
    badge: "Inspection",
    name: "Vision Inspection",
    subtitle: "Vision-Based Quality Control",
    description: "Vision-based quality control systems for cap defects, label integrity, fill level detection, and seal verification. Suitable for high-speed FMCG and pharma lines.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGQlkjWxKqj6UvtrYvIkjTcNtTSrZ2MYctGL64Syj8g8K1TNOdzZJC2RLIpaph4NrFYlwS0Iif85m8T9rBG3VRs-A-YdAENlMwWQGueeJ7t14wJiHwk6-eTLYe8DsGa4JiANG4hYtVNGW7ILgzfp2bcmB-WHMIK3JxK9oz2ABl0pKt21ViZlKNXH8rHi10V_9krTg4B25547gjxLAZsfY4U4olbUf5dUDmcKKGs_lJ05r3bLNVoLmTQOaROzRxdLqws669gzOQWmk",
    youtubeId: "dQw4w9WgXcQ",
    brand: "E2M Couth, Spain",
    brandDesc: "Vision inspection specialists for packaging lines.",
    specs: [
      { parameter: "Camera Resolution", rating: "Up to 20 MP" },
      { parameter: "Inspection Speed", rating: "Up to 1200 units / min" },
      { parameter: "Detection", rating: "Cap, Label, Fill Level, Seal" },
      { parameter: "Reject System", rating: "Pneumatic / Diverter" },
      { parameter: "Interface", rating: "Industry 4.0 / OPC-UA" },
      { parameter: "Lighting", rating: "LED Multi-angle" },
    ],
    showcaseImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGQlkjWxKqj6UvtrYvIkjTcNtTSrZ2MYctGL64Syj8g8K1TNOdzZJC2RLIpaph4NrFYlwS0Iif85m8T9rBG3VRs-A-YdAENlMwWQGueeJ7t14wJiHwk6-eTLYe8DsGa4JiANG4hYtVNGW7ILgzfp2bcmB-WHMIK3JxK9oz2ABl0pKt21ViZlKNXH8rHi10V_9krTg4B25547gjxLAZsfY4U4olbUf5dUDmcKKGs_lJ05r3bLNVoLmTQOaROzRxdLqws669gzOQWmk",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGQlkjWxKqj6UvtrYvIkjTcNtTSrZ2MYctGL64Syj8g8K1TNOdzZJC2RLIpaph4NrFYlwS0Iif85m8T9rBG3VRs-A-YdAENlMwWQGueeJ7t14wJiHwk6-eTLYe8DsGa4JiANG4hYtVNGW7ILgzfp2bcmB-WHMIK3JxK9oz2ABl0pKt21ViZlKNXH8rHi10V_9krTg4B25547gjxLAZsfY4U4olbUf5dUDmcKKGs_lJ05r3bLNVoLmTQOaROzRxdLqws669gzOQWmk",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGQlkjWxKqj6UvtrYvIkjTcNtTSrZ2MYctGL64Syj8g8K1TNOdzZJC2RLIpaph4NrFYlwS0Iif85m8T9rBG3VRs-A-YdAENlMwWQGueeJ7t14wJiHwk6-eTLYe8DsGa4JiANG4hYtVNGW7ILgzfp2bcmB-WHMIK3JxK9oz2ABl0pKt21ViZlKNXH8rHi10V_9krTg4B25547gjxLAZsfY4U4olbUf5dUDmcKKGs_lJ05r3bLNVoLmTQOaROzRxdLqws669gzOQWmk",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGQlkjWxKqj6UvtrYvIkjTcNtTSrZ2MYctGL64Syj8g8K1TNOdzZJC2RLIpaph4NrFYlwS0Iif85m8T9rBG3VRs-A-YdAENlMwWQGueeJ7t14wJiHwk6-eTLYe8DsGa4JiANG4hYtVNGW7ILgzfp2bcmB-WHMIK3JxK9oz2ABl0pKt21ViZlKNXH8rHi10V_9krTg4B25547gjxLAZsfY4U4olbUf5dUDmcKKGs_lJ05r3bLNVoLmTQOaROzRxdLqws669gzOQWmk",
    ],
  },

  "Checkweighers": {
    badge: "Quality Control",
    name: "Checkweighers & Metal Detectors",
    subtitle: "Dynamic Inline Weight Verification",
    description: "Dynamic inline weighing with automatic reject systems for high-speed lines. Combined with metal detection for comprehensive product safety and compliance.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMWyNZnZx249Akh42ITb4hyRwacvHhZ2czLD61qcuJuNQH7UkBCimmJLOqVQxdlaZNzWOeGAqNgCKPzJfTMyj9Mcj1I_wEeu5OuIYHGzoETH7D8hA66eQCoFjxSElUFbKQXluuyeQpRTJunMiLbmxqw55egy_2uNJcrvg1hNEXGOTeq7xAyo0WiXENG0tWrcHxPfzDbR5rhfdpaRW72gR0EngrjfH-rOyeGrYSC-r2Wqibh7hBMsQ7VZMlRhpRkIqk4mF1X02QN1k",
    youtubeId: "dQw4w9WgXcQ",
    brand: "Varpe, Spain",
    brandDesc: "Precision weighing and detection systems.",
    specs: [
      { parameter: "Weighing Range", rating: "5 g – 15 kg" },
      { parameter: "Accuracy", rating: "± 0.1 g" },
      { parameter: "Speed", rating: "Up to 300 packs / min" },
      { parameter: "Metal Detection", rating: "Fe, Non-Fe, SS" },
      { parameter: "Reject System", rating: "Air blast / Push arm" },
      { parameter: "Certification", rating: "OIML / CE" },
    ],
    showcaseImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMWyNZnZx249Akh42ITb4hyRwacvHhZ2czLD61qcuJuNQH7UkBCimmJLOqVQxdlaZNzWOeGAqNgCKPzJfTMyj9Mcj1I_wEeu5OuIYHGzoETH7D8hA66eQCoFjxSElUFbKQXluuyeQpRTJunMiLbmxqw55egy_2uNJcrvg1hNEXGOTeq7xAyo0WiXENG0tWrcHxPfzDbR5rhfdpaRW72gR0EngrjfH-rOyeGrYSC-r2Wqibh7hBMsQ7VZMlRhpRkIqk4mF1X02QN1k",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMWyNZnZx249Akh42ITb4hyRwacvHhZ2czLD61qcuJuNQH7UkBCimmJLOqVQxdlaZNzWOeGAqNgCKPzJfTMyj9Mcj1I_wEeu5OuIYHGzoETH7D8hA66eQCoFjxSElUFbKQXluuyeQpRTJunMiLbmxqw55egy_2uNJcrvg1hNEXGOTeq7xAyo0WiXENG0tWrcHxPfzDbR5rhfdpaRW72gR0EngrjfH-rOyeGrYSC-r2Wqibh7hBMsQ7VZMlRhpRkIqk4mF1X02QN1k",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMWyNZnZx249Akh42ITb4hyRwacvHhZ2czLD61qcuJuNQH7UkBCimmJLOqVQxdlaZNzWOeGAqNgCKPzJfTMyj9Mcj1I_wEeu5OuIYHGzoETH7D8hA66eQCoFjxSElUFbKQXluuyeQpRTJunMiLbmxqw55egy_2uNJcrvg1hNEXGOTeq7xAyo0WiXENG0tWrcHxPfzDbR5rhfdpaRW72gR0EngrjfH-rOyeGrYSC-r2Wqibh7hBMsQ7VZMlRhpRkIqk4mF1X02QN1k",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMWyNZnZx249Akh42ITb4hyRwacvHhZ2czLD61qcuJuNQH7UkBCimmJLOqVQxdlaZNzWOeGAqNgCKPzJfTMyj9Mcj1I_wEeu5OuIYHGzoETH7D8hA66eQCoFjxSElUFbKQXluuyeQpRTJunMiLbmxqw55egy_2uNJcrvg1hNEXGOTeq7xAyo0WiXENG0tWrcHxPfzDbR5rhfdpaRW72gR0EngrjfH-rOyeGrYSC-r2Wqibh7hBMsQ7VZMlRhpRkIqk4mF1X02QN1k",
    ],
  },

  "roller-unwinders": {
    badge: "Packaging Support",
    name: "Roller Unwinders",
    subtitle: "Precision Film Tension Control",
    description: "Precision film unwinding systems for consistent tension control in packaging lines. Ensures smooth, uninterrupted film feed for high-speed operations.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuASYw6roxZQLw2TfrRUN0ptzhsGM69inW3KS_s2ZY9R6wCyMY3wdoFc5ajxzf_GJZj7axSCKoy0MpVQP6qBhwB7mkYlebgNWijtOs8soBZOQLAhiGZhsoRzf3Kfeo1WRFGBuTCzzcZGXIBEs9zvnbGR9OEPyPQgHsBSzcDWx8LaxGN7971SuNdLHtHI75Iv9BKZFFTJQ3iGV41u1u0zjfP7qGzPjISQ0GXPaBRFBBI-k43RPS9S81ArXDL4xUEMa6OM-OsP5V7fN9w",
    youtubeId: "dQw4w9WgXcQ",
    brand: "Vedvik Machinery, India",
    brandDesc: "In-house designed film handling systems.",
    specs: [
      { parameter: "Roll Diameter", rating: "Up to 600 mm" },
      { parameter: "Core Size", rating: "76 mm / 152 mm" },
      { parameter: "Tension Control", rating: "Dancer / Servo" },
      { parameter: "Max Film Width", rating: "600 mm" },
      { parameter: "Speed", rating: "Up to 150 m/min" },
      { parameter: "Splicing", rating: "Manual / Auto Splice" },
    ],
    showcaseImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASYw6roxZQLw2TfrRUN0ptzhsGM69inW3KS_s2ZY9R6wCyMY3wdoFc5ajxzf_GJZj7axSCKoy0MpVQP6qBhwB7mkYlebgNWijtOs8soBZOQLAhiGZhsoRzf3Kfeo1WRFGBuTCzzcZGXIBEs9zvnbGR9OEPyPQgHsBSzcDWx8LaxGN7971SuNdLHtHI75Iv9BKZFFTJQ3iGV41u1u0zjfP7qGzPjISQ0GXPaBRFBBI-k43RPS9S81ArXDL4xUEMa6OM-OsP5V7fN9w",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASYw6roxZQLw2TfrRUN0ptzhsGM69inW3KS_s2ZY9R6wCyMY3wdoFc5ajxzf_GJZj7axSCKoy0MpVQP6qBhwB7mkYlebgNWijtOs8soBZOQLAhiGZhsoRzf3Kfeo1WRFGBuTCzzcZGXIBEs9zvnbGR9OEPyPQgHsBSzcDWx8LaxGN7971SuNdLHtHI75Iv9BKZFFTJQ3iGV41u1u0zjfP7qGzPjISQ0GXPaBRFBBI-k43RPS9S81ArXDL4xUEMa6OM-OsP5V7fN9w",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASYw6roxZQLw2TfrRUN0ptzhsGM69inW3KS_s2ZY9R6wCyMY3wdoFc5ajxzf_GJZj7axSCKoy0MpVQP6qBhwB7mkYlebgNWijtOs8soBZOQLAhiGZhsoRzf3Kfeo1WRFGBuTCzzcZGXIBEs9zvnbGR9OEPyPQgHsBSzcDWx8LaxGN7971SuNdLHtHI75Iv9BKZFFTJQ3iGV41u1u0zjfP7qGzPjISQ0GXPaBRFBBI-k43RPS9S81ArXDL4xUEMa6OM-OsP5V7fN9w",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASYw6roxZQLw2TfrRUN0ptzhsGM69inW3KS_s2ZY9R6wCyMY3wdoFc5ajxzf_GJZj7axSCKoy0MpVQP6qBhwB7mkYlebgNWijtOs8soBZOQLAhiGZhsoRzf3Kfeo1WRFGBuTCzzcZGXIBEs9zvnbGR9OEPyPQgHsBSzcDWx8LaxGN7971SuNdLHtHI75Iv9BKZFFTJQ3iGV41u1u0zjfP7qGzPjISQ0GXPaBRFBBI-k43RPS9S81ArXDL4xUEMa6OM-OsP5V7fN9w",
    ],
  },

  "Printing": {
    badge: "Printing",
    name: "Printers and Coders",
    subtitle: "Thermal Inkjet & IoT Coding",
    description: "From Thermal Inkjet (TIJ) printers to advanced IoT and Industry 4.0 enabled coding systems. Reliable, high-resolution printing for batch codes, dates, and barcodes.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ5yRuj22JmhL1ZJHXb2sJCHUAC_UecQO4nb9v_tZX237QZoveFHjoOijZnY78SCIA-s9h5HulDqOdjQvbTRib2XvmU0ykqVbiQv9Y8e7RCiFQY8WAUawZAFsLw3YAwMROss4DoaRjaxNJBnFXw8DtzOZd9rT1KvAvY7LX2aY8307tK1Se-GHXFmexfhLUncFYg_hQZBbji79pKF8MLub6NofRzZ4ixurOv6ny_m3Z65CHwYZDfrwii9ank4nZrw6INF8-1JoNVc",
    youtubeId: "dQw4w9WgXcQ",
    brand: "MapleJet, Canada",
    brandDesc: "Industrial coding and marking solutions.",
    specs: [
      { parameter: "Technology", rating: "TIJ / CIJ / Laser" },
      { parameter: "Print Resolution", rating: "Up to 600 DPI" },
      { parameter: "Line Speed", rating: "Up to 300 m/min" },
      { parameter: "Connectivity", rating: "Wi-Fi / Ethernet / USB" },
      { parameter: "Industry 4.0", rating: "OPC-UA / MQTT Ready" },
      { parameter: "Ink Types", rating: "Aqueous / Solvent / UV" },
    ],
    showcaseImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ5yRuj22JmhL1ZJHXb2sJCHUAC_UecQO4nb9v_tZX237QZoveFHjoOijZnY78SCIA-s9h5HulDqOdjQvbTRib2XvmU0ykqVbiQv9Y8e7RCiFQY8WAUawZAFsLw3YAwMROss4DoaRjaxNJBnFXw8DtzOZd9rT1KvAvY7LX2aY8307tK1Se-GHXFmexfhLUncFYg_hQZBbji79pKF8MLub6NofRzZ4ixurOv6ny_m3Z65CHwYZDfrwii9ank4nZrw6INF8-1JoNVc",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ5yRuj22JmhL1ZJHXb2sJCHUAC_UecQO4nb9v_tZX237QZoveFHjoOijZnY78SCIA-s9h5HulDqOdjQvbTRib2XvmU0ykqVbiQv9Y8e7RCiFQY8WAUawZAFsLw3YAwMROss4DoaRjaxNJBnFXw8DtzOZd9rT1KvAvY7LX2aY8307tK1Se-GHXFmexfhLUncFYg_hQZBbji79pKF8MLub6NofRzZ4ixurOv6ny_m3Z65CHwYZDfrwii9ank4nZrw6INF8-1JoNVc",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ5yRuj22JmhL1ZJHXb2sJCHUAC_UecQO4nb9v_tZX237QZoveFHjoOijZnY78SCIA-s9h5HulDqOdjQvbTRib2XvmU0ykqVbiQv9Y8e7RCiFQY8WAUawZAFsLw3YAwMROss4DoaRjaxNJBnFXw8DtzOZd9rT1KvAvY7LX2aY8307tK1Se-GHXFmexfhLUncFYg_hQZBbji79pKF8MLub6NofRzZ4ixurOv6ny_m3Z65CHwYZDfrwii9ank4nZrw6INF8-1JoNVc",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtZ5yRuj22JmhL1ZJHXb2sJCHUAC_UecQO4nb9v_tZX237QZoveFHjoOijZnY78SCIA-s9h5HulDqOdjQvbTRib2XvmU0ykqVbiQv9Y8e7RCiFQY8WAUawZAFsLw3YAwMROss4DoaRjaxNJBnFXw8DtzOZd9rT1KvAvY7LX2aY8307tK1Se-GHXFmexfhLUncFYg_hQZBbji79pKF8MLub6NofRzZ4ixurOv6ny_m3Z65CHwYZDfrwii9ank4nZrw6INF8-1JoNVc",
    ],
  },

  "xray-metal-detector": {
    badge: "Inspection",
    name: "X-ray and Metal Detector",
    subtitle: "High-Sensitivity Foreign Body Detection",
    description: "High-sensitivity X-ray inspection for detecting foreign bodies, voids, and fill-level anomalies combined with metal detection for complete product safety.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMWyNZnZx249Akh42ITb4hyRwacvHhZ2czLD61qcuJuNQH7UkBCimmJLOqVQxdlaZNzWOeGAqNgCKPzJfTMyj9Mcj1I_wEeu5OuIYHGzoETH7D8hA66eQCoFjxSElUFbKQXluuyeQpRTJunMiLbmxqw55egy_2uNJcrvg1hNEXGOTeq7xAyo0WiXENG0tWrcHxPfzDbR5rhfdpaRW72gR0EngrjfH-rOyeGrYSC-r2Wqibh7hBMsQ7VZMlRhpRkIqk4mF1X02QN1k",
    youtubeId: "dQw4w9WgXcQ",
    brand: "Vedvik Machinery, India",
    brandDesc: "Advanced detection systems for food and pharma safety.",
    specs: [
      { parameter: "Detection Type", rating: "X-ray + Metal (Fe / Non-Fe / SS)" },
      { parameter: "X-ray Energy", rating: "80 kV / 40 W" },
      { parameter: "Min Detectable Size", rating: "0.3 mm steel sphere" },
      { parameter: "Belt Speed", rating: "Up to 60 m/min" },
      { parameter: "Max Product Weight", rating: "10 kg" },
      { parameter: "Certification", rating: "CE / FDA 21 CFR" },
    ],
    showcaseImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMWyNZnZx249Akh42ITb4hyRwacvHhZ2czLD61qcuJuNQH7UkBCimmJLOqVQxdlaZNzWOeGAqNgCKPzJfTMyj9Mcj1I_wEeu5OuIYHGzoETH7D8hA66eQCoFjxSElUFbKQXluuyeQpRTJunMiLbmxqw55egy_2uNJcrvg1hNEXGOTeq7xAyo0WiXENG0tWrcHxPfzDbR5rhfdpaRW72gR0EngrjfH-rOyeGrYSC-r2Wqibh7hBMsQ7VZMlRhpRkIqk4mF1X02QN1k",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMWyNZnZx249Akh42ITb4hyRwacvHhZ2czLD61qcuJuNQH7UkBCimmJLOqVQxdlaZNzWOeGAqNgCKPzJfTMyj9Mcj1I_wEeu5OuIYHGzoETH7D8hA66eQCoFjxSElUFbKQXluuyeQpRTJunMiLbmxqw55egy_2uNJcrvg1hNEXGOTeq7xAyo0WiXENG0tWrcHxPfzDbR5rhfdpaRW72gR0EngrjfH-rOyeGrYSC-r2Wqibh7hBMsQ7VZMlRhpRkIqk4mF1X02QN1k",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMWyNZnZx249Akh42ITb4hyRwacvHhZ2czLD61qcuJuNQH7UkBCimmJLOqVQxdlaZNzWOeGAqNgCKPzJfTMyj9Mcj1I_wEeu5OuIYHGzoETH7D8hA66eQCoFjxSElUFbKQXluuyeQpRTJunMiLbmxqw55egy_2uNJcrvg1hNEXGOTeq7xAyo0WiXENG0tWrcHxPfzDbR5rhfdpaRW72gR0EngrjfH-rOyeGrYSC-r2Wqibh7hBMsQ7VZMlRhpRkIqk4mF1X02QN1k",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMWyNZnZx249Akh42ITb4hyRwacvHhZ2czLD61qcuJuNQH7UkBCimmJLOqVQxdlaZNzWOeGAqNgCKPzJfTMyj9Mcj1I_wEeu5OuIYHGzoETH7D8hA66eQCoFjxSElUFbKQXluuyeQpRTJunMiLbmxqw55egy_2uNJcrvg1hNEXGOTeq7xAyo0WiXENG0tWrcHxPfzDbR5rhfdpaRW72gR0EngrjfH-rOyeGrYSC-r2Wqibh7hBMsQ7VZMlRhpRkIqk4mF1X02QN1k",
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
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-primary leading-none mb-4 md:mb-6 font-headline">
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
                  Our modular systems allow for rapid changeovers between formats. Whether you require custom configurations or specialised integrations, our team adapts the solution to your line&apos;s unique requirements.
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
