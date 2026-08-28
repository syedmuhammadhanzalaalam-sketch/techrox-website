/**
 * Single source of truth for site-wide SEO values.
 *
 * IMPORTANT — action needed after you deploy:
 * You don't have a custom domain yet, so SITE_URL below points at a
 * Netlify subdomain placeholder. Once your site is live on Netlify:
 *   1. Go to Site settings → Site details → Change site name (or add a
 *      custom domain later).
 *   2. Update SITE_URL below to match exactly (e.g. "https://your-name.netlify.app"
 *      or "https://yourdomain.com" if you add a custom domain).
 *   3. Redeploy. This one change updates canonical URLs, sitemap.xml,
 *      robots.txt, and Open Graph/Twitter tags across the whole site.
 */
export const SITE_URL = "https://techrox.netlify.app";
export const SITE_NAME = "TechRox";
export const SITE_TITLE = "TechRox — AI, Automation, Cloud & Web Development Company";
export const SITE_DESCRIPTION =
  "TechRox is an IT company engineering AI systems, autonomous agents, business automation, cloud infrastructure, and high-performance web products for ambitious teams worldwide.";
