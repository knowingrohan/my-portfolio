import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Header from "../components/header/header";
import Head from "next/head";

//TODO add robot google font in next app. this is page.js file
export default function () {
  return (
    <div className={`${styles.container}`}>
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

      <main className={`${styles.container} ${styles["home-page"]}`}>
        <section className={`${styles.section} ${styles["home-hero"]}`}>
          <div className={styles.orbs}>
            <div className={styles["orb1"]} />
            <div className={styles["orb2"]} />
            <div className={styles["orb3"]} />
          </div>
          <h1>
            A web engineer interested in design systems and closing the gap
            between design and development
          </h1>
          <p>
            👋 Hey I'm Alex, a design-focused engineer based in Milan. I'm
            currently working at Monzo building the next-generation of web based
            banking tools.
          </p>
          <p>
            <Link href="profile">View profile →</Link>
          </p>
        </section>
        <section className="section">
          <h2>Selected work</h2>
          <Link className={styles["selected-project"]} href="projects/uiuxops">
            <figure>
              <img
                src="https://picsum.photos/300/200"
                alt="Year in Monzo 2020"
              />
            </figure>
            <div>
              <h3>UIUXOPS</h3>
              <p>
                A unique experience in to how each customer has spent over the
                past year <br /> <br />
                Read more →{" "}
              </p>
            </div>
          </Link>
          <Link
            className={styles["selected-project"]}
            href="projects/royalerado"
          >
            <figure>
              <img
                src="https://picsum.photos/300/200"
                alt="Monzo Web Banking"
              />
            </figure>
            <div>
              <h3>Royal Erado</h3>
              <p>
                Building a consumer web banking product from scratch <br />{" "}
                <br />
                Read more →
              </p>
            </div>
          </Link>
          <p>
            <Link href="/projects">View all work →</Link>
          </p>
        </section>
      </main>
    </div>
  );
}
