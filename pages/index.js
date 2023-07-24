import Link from "next/link";
import Header from "../components/header/header";
import Head from "next/head";
import { workCopy } from "../constants/copytext/workCopy";
import Image from "next/image";
import SEO from "../components/seo";

//TODO add robot google font in next app. this is page.js file
export default function () {
  return (
    <>
      <SEO
        title={"Rohan Mahajan - Coder | Traveller | Foodie"}
        description={`Hey I'm Rohan, a Frontend Magician, a Full Stack Troublemaker, and a Digital Alchemist all in one, based out of Bangalore, India.`}
        image={"https://rohanmahajan.in/images/index-meta.jpg"}
        keywords={
          "Rohan Mahajan, Frontend Developer, Coder, Personal Blog, Portfolio Wesbsite, rohanmahajan.in, Dev Portfolio"
        }
      />
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
