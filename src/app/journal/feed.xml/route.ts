import { getAllArticles } from "@/lib/journal";
import { siteConfig } from "@/lib/site-config";

export async function GET() {
  const articles = await getAllArticles();

  const items = articles
    .map(
      (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.excerpt}]]></description>
      <link>${siteConfig.url}/journal/${article.slug}</link>
      <guid isPermaLink="true">${siteConfig.url}/journal/${article.slug}</guid>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <category>${article.category}</category>
    </item>`,
    )
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${siteConfig.name} — Journal</title>
    <link>${siteConfig.url}/journal</link>
    <description>${siteConfig.description}</description>
    <language>en-us</language>
    ${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
