import Head from "next/head";
import styles from "./projects.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../../components/header/header";

export default function () {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <>
          <img
            src="../../img/featured-images/design-kit.png"
            className="project-featured-image"
          />
          <h1 className="title">Royal Erado</h1>
          <p className="meta">
            <strong>Role:</strong>Full Stack Web Consultant <br />{" "}
            <strong>Time:</strong> Apr'23
          </p>
          <p>
            Royal Erado is an Indian company that specialises in the manufacture
            and sale of Royal Enfield and other motorcycle accessories and
            parts. We are one of India's first to sell and distribute Royal
            Enfield and other motorcycle accessories and parts. By offering
            high-quality items, timely delivery, and dedicated customer service
            over the last five decades, we have gained an exceptional reputation
            and goodwill from consumers.
          </p>
          <p>
            <img src="../../img/design-kit/preview.png" alt="Design Kit" />
          </p>
          <h2>Meeting designers where they work</h2>
          <p>
            Before Design Kit, our design documentation was scattered across
            various Google Docs, Notion pages, and in peoples heads. Rather than
            simply consolidating this in to a single place (such as a website),
            we wanted to find a way to bring the docs directly in to the
            workflow of designers.
          </p>
          <p>
            Building the documentation right in to Sketch removes the friction
            of having to switch context, open the browser, type in the URL.
            Instead, docs are a single click away from within Sketch.
          </p>
          <h2>Always up to date docs</h2>
          <p>
            As our design documentation is managed by designers, it was
            important that they had an easy way to create and update the docs.
            To support this, we host all of our documentation on Contentful. In
            order to keep the initial opening speed of Design Kit low, a copy of
            the documentation is cached the first time it's opened, which is
            then periodically refreshed every few days.
          </p>
          <h2>Drag and drop design system components</h2>
          <p>
            One of our core principles when building Design Kit was that using
            it should always add to the experience of design. In the initial
            versions of Design Kit there was a clear disconnect between
            documentation and process. Designers would read a components
            documentation in one window, and then switch back to Sketch . Or in
            some cases, just not read documentation at all.
          </p>
          <p>
            Building drag and drop in to the tool, provided a very clear path
            for designers to follow. Open Design Kit, find your component, and
            build your UI. We also explored the idea of being able to select and
            drop multiple components in to a design at once.
          </p>
          <video controls="" autoPlay="" loop="" muted="">
            <source
              src="../../img/design-kit/dragging-symbols-prototype.mp4"
              type="video/mp4"
            />
          </video>
          <h2>Technical details</h2>
          <ul>
            <li>Built in Next.js, React, Tailwind</li>
            <li>Deployed on GCP</li>
          </ul>
          <hr />
          <ul>
            <li>
              Previous: <a href="/projects/uiuxops">UIUX OPS</a>
            </li>
          </ul>
        </>
      </main>
    </div>
  );
}
