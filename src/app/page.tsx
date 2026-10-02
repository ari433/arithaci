import { JsonLd } from "@/components/shared/json-ld";
import PortfolioExperience from "@/components/home/portfolio-experience";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <JsonLd data={{
        "@context":"https://schema.org",
        "@type":"Person",
        name:"Ari Thaci",
        url:siteConfig.url,
        jobTitle:"AI Builder / Founder of Agjenti AI",
        sameAs:Object.values(siteConfig.social),
      }} />
      <PortfolioExperience />
    </>
  );
}

// deployment trigger: portfolio production sync
