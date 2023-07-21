import Link from "next/link";
import Header from "../components/header/header";
import Head from "next/head";
import { workCopy } from "./projects/workCopy";
import Image from "next/image";

//TODO add robot google font in next app. this is page.js file
export default function () {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rohan Mahajan - Coder | Traveller | Foodie</title>
        <meta
          name="description"
          content="Rohan Mahajan is a frontend magician, a full-stack troublemaker and a digital alchemist!"
        />
        {/* Twitter Cards */}
        <meta name="author" content="Alex Pate" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alexjpate" />
        <meta name="twitter:creator" content="@alexjpate" />
        <meta name="twitter:image" content="static/twitter-card.png" />
        <meta name="twitter:title" content="Alex Pate - Engineer & Designer" />
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
