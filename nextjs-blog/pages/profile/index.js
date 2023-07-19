import Head from "next/head";
import styles from "./profile.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../../components/header/header";

export default function () {
  return (
    <div>
      <Header />
      <main className={`${styles["container"]} ${styles["home-page"]}`}>
        <section className="section">
          <h1>Profile</h1>

          <p>Hey there! 👋</p>

          <p>
            I'm Alex, a web engineer and designer. I'm currently based in
            London, and working with Monzo where I'm helping build the next
            generation of web banking apps at Monzo.
          </p>

          <p>
            I have a particular passion for design systems and design tooling,
            having been fortunate enough to work on these problems at my
            previous three companies.
          </p>

          <p>
            Every now and then I also write articles, including for Awwwards,
            Web Designer Magazine and net Magazine.
          </p>

          <hr />

          <h2>Experience</h2>
          <p>
            <strong>Monzo</strong> <small>(2019 - current)</small>
          </p>
          <p>
            As a web engineer at Monzo, I've led engineering on several
            high-profile projects including Year in Monzo. Likewise, I've helped
            launch our first public web banking app.
          </p>
          <p>
            <strong>Kalo</strong> <small>(2017 - 2019)</small>
          </p>
          <p>
            Before Monzo, I spent 2 years at Kalo (now Polywork) building
            products to help freelancers and businesses work more seamlessly
            together.
          </p>
          <p>
            <strong>Pusher</strong> <small>(2015 - 2017)</small>
          </p>
          <p>
            Prior to this, I worked at Pusher as a hybrid designer and developer
            working with the product team to evolve the client dashboard. I also
            contributed in a DevRel capacity, helping introduce Pusher to new
            developers at several tech conferences around the world.
          </p>

          <hr />

          <h2>Get in touch</h2>
          <p>
            You can find me at various places around the web, including{" "}
            <a href="https://twitter.com/alexjpate">Twitter</a>,{" "}
            <a href="https://github.com/alexpate">GitHub</a>, and{" "}
            <a href="https://dribbble.com/alexpate">Dribbble</a>. Or send me an
            email on hey@alexjpate.com
          </p>
        </section>
      </main>
    </div>
  );
}
