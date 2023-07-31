import Head from "next/head";

const SEO = ({ title, description, image, keywords }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta name="author" content="Rohan Mahajan" />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content={keywords} />
      {/* Open Graph (OG) meta tags */}
      <meta name="title" property="og:title" content={title} />
      <meta
        name="description"
        property="og:description"
        content={description}
      />
      <meta name="type" property="og:type" content="website" />
      <meta name="url" property="og:url" content="https://rohanmahajan.in" />
      <meta name="image" property="og:image" content={image} />
    </Head>
  );
};

export default SEO;
