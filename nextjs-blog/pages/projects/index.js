import Head from "next/head";
import styles from "./projects.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../../components/header/header";

export default function () {
  return (
    <div>
      <Header />
      <main className={`${styles.container} ${styles["home-page"]}`}>
        <section className="section">
          <h1>Work</h1>
          <p>A selection of recent and past projects</p>
        </section>

        <section className="section">
          <Link href="projects/uiuxops">
            <figure>
              <img src="img/featured-images/year-in-monzo-2020.png" />
            </figure>
            <div>
              <h3>UIUX OPS</h3>
              <p>
                A unique experience in to how each customer has spent over the
                past year <br /> <br />
                Read more →{" "}
              </p>
            </div>
          </Link>

          <Link href="projects/royalerado">
            <figure>
              <img src="img/featured-images/year-in-monzo-2020.png" />
            </figure>
            <div>
              <h3>Royal Erado</h3>
              <p>
                A unique experience in to how each customer has spent over the
                past year <br /> <br />
                Read more →{" "}
              </p>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}
