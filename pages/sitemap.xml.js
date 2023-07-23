// pages/sitemap.xml.js
import { xmlData } from "../constants/xmlData";

const URL = "https://rohanmahajan.in";

function generateSiteMap(blogs, projects) {
  const blogUrls = xmlData.blogs
    .map((name) => `<url><loc>${`${URL}/blogs/blog/${name}`}</loc></url>`)
    .join("");

  const projectUrls = xmlData.projects
    .map((name) => `<url><loc>${`${URL}/projects/${name}`}</loc></url>`)
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the static URLs manually -->
     <url>
       <loc>${URL}</loc>
     </url>
     <url>
        <loc>${URL}/profile</loc>
     </url>
     <url>
       <loc>${URL}/blogs</loc>
     </url>
      <url>
       <loc>${URL}/projects</loc>
     </url> 
     ${blogUrls}
     ${projectUrls}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
  // Generate the XML sitemap with the blog data

  const sitemap = generateSiteMap(xmlData.blogs, xmlData.projects);

  res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
