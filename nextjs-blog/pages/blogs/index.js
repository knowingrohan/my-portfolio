import Head from "next/head";
import styles from "./blog.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../../components/header/header";

export default function () {
  return (
    <div>
      <Header />
      <main className={`${styles.container} ${styles["home-page"]}`}>
        <section className="section">
          <h1>Writing</h1>
          <p>
            A selection of articles on design, engineering, and personal
            experience.
          </p>
        </section>

        <section className="section">
          <div className="postlist-item">
            <a
              href="posts/chrome-devtools-tips/index.html"
              className="postlist-link"
            >
              <h2>
                Things you might not have known you could do in Chrome DevTools
              </h2>
            </a>
            <time className="postlist-date" datetime="2021-08-24">
              24 Aug 2021
            </time>
          </div>

          <div className="postlist-item">
            <a
              href="posts/theme-driven-design-systems/index.html"
              className="postlist-link"
            >
              <h2>Underneath the component: theme driven design systems</h2>
            </a>
            <time className="postlist-date" datetime="2019-01-04">
              04 Jan 2019
            </time>
          </div>

          <div className="postlist-item">
            <a
              href="posts/learning-in-2019/index.html"
              className="postlist-link"
            >
              <h2>Things I want to learn/improve in 2019</h2>
            </a>
            <time className="postlist-date" datetime="2019-01-03">
              03 Jan 2019
            </time>
          </div>

          <div className="postlist-item">
            <a
              href="posts/5-things-consider-before-building-your-living-styleguide/index.html"
              className="postlist-link"
            >
              <h2>
                5 things to consider before building your living styleguide
              </h2>
            </a>
            <time className="postlist-date" datetime="2016-12-17">
              17 Dec 2016
            </time>
          </div>

          <div className="postlist-item">
            <a
              href="posts/naming-sass-color-variables/index.html"
              className="postlist-link"
            >
              <h2>How to name Sass color variables</h2>
            </a>
            <time className="postlist-date" datetime="2016-09-05">
              05 Sep 2016
            </time>
          </div>

          <div className="postlist-item">
            <a
              href="posts/lessons-learnt-from-working-design-team/index.html"
              className="postlist-link"
            >
              <h2>A few lessons learnt from my first year in a design team</h2>
            </a>
            <time className="postlist-date" datetime="2016-08-03">
              03 Aug 2016
            </time>
          </div>

          <div className="postlist-item">
            <a
              href="posts/pure-svg-progress-circles-javascript-part-2/index.html"
              className="postlist-link"
            >
              <h2>SVG Progress Circles Part 2 - With JavaScript</h2>
            </a>
            <time className="postlist-date" datetime="2016-05-09">
              09 May 2016
            </time>
          </div>

          <div className="postlist-item">
            <a
              href="posts/inlining-svg-with-rails/index.html"
              className="postlist-link"
            >
              <h2>Inlining SVG&#39;s with Rails</h2>
            </a>
            <time className="postlist-date" datetime="2016-04-23">
              23 Apr 2016
            </time>
          </div>

          <div className="postlist-item">
            <a
              href="posts/pure-svg-progress-circles/index.html"
              className="postlist-link"
            >
              <h2>Pure SVG Progress Circles</h2>
            </a>
            <time className="postlist-date" datetime="2016-04-12">
              12 Apr 2016
            </time>
          </div>

          <div className="postlist-item">
            <a
              href="posts/managing-font-weights-with-sass/index.html"
              className="postlist-link"
            >
              <h2>Managing font weights with Sass</h2>
            </a>
            <time className="postlist-date" datetime="2016-04-12">
              12 Apr 2016
            </time>
          </div>

          <div className="postlist-item">
            <a
              href="posts/managing-z-index-with-sass/index.html"
              className="postlist-link"
            >
              <h2>Managing the z-index with Sass</h2>
            </a>
            <time className="postlist-date" datetime="2015-07-29">
              29 Jul 2015
            </time>
          </div>

          <div className="postlist-item">
            <a
              href="posts/installing-ssl-certificate-nginx/index.html"
              className="postlist-link"
            >
              <h2>Installing a Positive SSL certificate on Nginx</h2>
            </a>
            <time className="postlist-date" datetime="2015-06-28">
              28 Jun 2015
            </time>
          </div>

          <div className="postlist-item">
            <a
              href="posts/searching-multiple-tables-laravel/index.html"
              className="postlist-link"
            >
              <h2>Searching multiple tables with one query with Laravel</h2>
            </a>
            <time className="postlist-date" datetime="2015-06-12">
              12 Jun 2015
            </time>
          </div>

          <div className="postlist-item">
            <a
              href="posts/tools-that-use-daily/index.html"
              className="postlist-link"
            >
              <h2>Tools that I use on a daily basis</h2>
            </a>
            <time className="postlist-date" datetime="2015-02-10">
              10 Feb 2015
            </time>
          </div>

          <div className="postlist-item">
            <a
              href="posts/random-hex-colour-generator/index.html"
              className="postlist-link"
            >
              <h2>Random HEX Colour Generator in JavaScript</h2>
            </a>
            <time className="postlist-date" datetime="2014-03-24">
              24 Mar 2014
            </time>
          </div>

          <div className="postlist-item">
            <a
              href="posts/css-stacked-paper-effect/index.html"
              className="postlist-link"
            >
              <h2>CSS Stacked Paper Effect</h2>
            </a>
            <time className="postlist-date" datetime="2014-03-21">
              21 Mar 2014
            </time>
          </div>
        </section>
      </main>
    </div>
  );
}
