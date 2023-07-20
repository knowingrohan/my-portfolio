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
            👋 Hey I'm Rohan, a Frontend Magician, a Full Stack Troublemaker,
            and a Digital Alchemist all in one, based out of Bangalore, India.
            I'm currently working at Walmart Global Tech India building the
            next-generation of web based dashboards for Ad Tech domain.
          </p>

          <p>
            As a seasoned Frontend Magician, I excel at crafting captivating
            user interfaces and seamless interactions that leave users
            spellbound. But that's not all - I'm also a Full Stack Troublemaker,
            fearlessly diving into complex backend challenges and transforming
            them into opportunities.
          </p>

          <p>
            With a touch of alchemy, I can weave together the perfect blend of
            technology and creativity to produce extraordinary web experiences.
            So, if you're ready to embark on a journey of digital mayhem, let's
            collaborate and conjure some magic together!
          </p>

          <hr />

          <h2>Experience</h2>
          <p>
            <strong>Walmart Global Tech india</strong>{" "}
            <small>(Feb'2023 - current)</small>
          </p>
          <p>
            As a senior software engineer at Walmart, I collaborate with
            cross-functional teams to develop and maintain a cutting-edge
            dashboard utilizing React, Go, PostgreSQL, and BigQuery
            technologies.
          </p>
          <p>
            <strong>Kalo</strong> <small>(2017 - 2019)</small>
          </p>
          <p>
            Before Walmart, I spent 1.5 years at Nagarro in a complete WFA (Work
            From Anywhere) seytup building products to help freelancers and
            businesses work more seamlessly together.
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
