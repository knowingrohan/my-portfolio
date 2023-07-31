import Head from "next/head";

const SEO = ({ title, description, image, keywords, link }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="url" content={`https://rohanmahajan.in${link}`} />
      <meta name="author" content="Rohan Mahajan" />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content={keywords} />
      <meta name="type" content="website" />

      {/* Open Graph (OG) meta tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`https://rohanmahajan.in${link}`} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default SEO;
