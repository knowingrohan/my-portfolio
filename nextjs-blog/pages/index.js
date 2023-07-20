import Link from "next/link";
import Header from "../components/header/header";
import Head from "next/head";

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
            <Link href="profile">View profile →</Link>
          </p>
        </section>
        <section className="section">
          <h2>Selected work</h2>
          <Link className="selected-project" href="projects/uiuxops">
            <figure>
              <img
                src="https://picsum.photos/300/200"
                alt="Year in Monzo 2020"
              />
            </figure>
            <div>
              <h3>UIUXOPS</h3>
              <p>
                The team at UIUX OPS, craft high-quality mobile and web
                applications that not only impress but captures your tareget
                audience <br /> <br />
                Read more →{" "}
              </p>
            </div>
          </Link>
          <Link className="selected-project" href="projects/royalerado">
            <figure>
              <img
                src="https://picsum.photos/300/200"
                alt="Monzo Web Banking"
              />
            </figure>
            <div>
              <h3>Royal Erado</h3>
              <p>
                Royal Erado is an Indian company that specialises in the
                manufacture and sale of Royal Enfield and other motorcycle
                accessories and parts. <br /> <br />
                Read more →
              </p>
            </div>
          </Link>
          <p>
            <Link href="/projects">View all work →</Link>
          </p>
        </section>
      </main>
    </>
  );
}
