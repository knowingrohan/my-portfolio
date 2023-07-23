import Link from "next/link";
import Header from "../components/header/header";
import Head from "next/head";
import { workCopy } from "../constants/copytext/workCopy";
import Image from "next/image";

//TODO add robot google font in next app. this is page.js file
export default function () {
  return (
    <>
      {/* TODO - add appropriate meta tags to do a goo seo of this next app  */}
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rohan Mahajan - Coder | Traveller | Foodie</title>
        <meta
          name="description"
          content="Hey I'm Rohan, a Frontend Magician, a Full Stack Troublemaker, and a Digital Alchemist all in one, based out of Bangalore, India"
        />
        <meta name="author" content="Rohan Mahajan" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Rohan Mahajan, frontend developer, coder, personal blog, blog, portfolio wesbsite, rohanmahajan.in"
        />
        {/* Twitter Cards */}

        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@knowingrohan" />
        <meta name="twitter:creator" content="@knowingrohan" />
        <meta name="twitter:image" content="static/twitter-card.png" />
        <meta
          name="twitter:title"
          content="Rohan Mahajan - Coder, Traveller & Foodie"
        /> */}
        {/* Open Graph (OG) meta tags */}
        <meta
          property="og:title"
          content="Rohan Mahajan - Coder | Traveller | Foodie"
        />
        <meta
          property="og:description"
          content="Hey I'm Rohan, a Frontend Magician, a Full Stack Troublemaker, and a Digital Alchemist all in one, based out of Bangalore, India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rohanmahajan.in" />
        <meta property="og:image" content="/images/index-meta.jpg" />
        <link
          rel="alternate"
          href="404.html"
          type="application/atom+xml"
          title="Alex Pate"
        />
        <link
          rel="alternate"
          href="404.html"
          type="application/json"
          title="Alex Pate"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container home-page">
        <section className="section home-hero">
          <div className="orbs">
            <div id="orb1" />
            <div id="orb2" />
            <div id="orb3" />
          </div>
          <h1>
            If you're ready to conjure up some digital mayhem and create
            extraordinary web experiences, let's collaborate and make magic
            happen.
          </h1>
          <p>
            👋 Hey I'm Rohan, a Frontend Magician, a Full Stack Troublemaker,
            and a Digital Alchemist all in one, based out of Bangalore, India.
            I'm currently working at Walmart Global Tech India building the
            next-generation of web based dashboards for Ad Tech domain.
          </p>
          <p>
            <Link href="profile" className="underline">
              View profile →
            </Link>
          </p>
        </section>
        <section className="section">
          <h2>Selected work</h2>
          {workCopy.projects.map((project, index) => (
            <Link href={project.link} key={index} className="selected-project">
              <figure>
                <Image
                  src={project.imgSrc}
                  width={330}
                  height={160}
                  style={{ objectFit: "cover" }}
                  alt="uiuxops landing page"
                />
              </figure>
              <div>
                <h3>{project.title}</h3>
                <p>
                  {project.desc} <br /> <br />
                  Read more →
                </p>
              </div>
            </Link>
          ))}
          <p>
            <Link href="/projects" className="underline">
              View all work →
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}
