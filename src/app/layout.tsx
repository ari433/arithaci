import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const geistSans = Geist({ variable:"--font-geist-sans", subsets:["latin"] });
const geistMono = Geist_Mono({ variable:"--font-geist-mono", subsets:["latin"] });
const fraunces = Fraunces({ variable:"--font-fraunces", subsets:["latin"], axes:["opsz","SOFT","WONK"], style:["normal","italic"] });

export const metadata: Metadata = {
  metadataBase:new URL(siteConfig.url),
  title:"Ari Thaci — AI Builder",
  description:"Ari Thaci builds AI products, AI agents and automation systems. Founder of Agjenti AI.",
  keywords:["Ari Thaci","AI Builder","Agjenti AI","AI Automation","AI Agents","Prishtina"],
  authors:[{name:"Ari Thaci",url:siteConfig.url}],
  creator:"Ari Thaci",
  openGraph:{type:"website",locale:"en_US",url:siteConfig.url,title:"Ari Thaci — AI Builder",description:"AI products, agents, automation and real-world builds.",siteName:"Ari Thaci"},
  twitter:{card:"summary_large_image",title:"Ari Thaci — AI Builder",description:"AI products, agents, automation and real-world builds."},
  alternates:{canonical:siteConfig.url},
  icons:{icon:"/favicon.ico"},
};
export const viewport: Viewport={themeColor:"#f3f0e8",width:"device-width",initialScale:1};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable}`}><body>{children}</body></html>
}
