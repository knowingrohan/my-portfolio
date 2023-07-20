import Head from "next/head";
import styles from "./header.module.scss";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function () {
  const theme = useTheme();

  const handleThemeToggle = () => {
    if (theme.theme === "light") {
      theme.setTheme("dark");
    } else {
      theme.setTheme("light");
    }
  };

  return (
    <>
      <Head>
        <>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>
            Rohan Mahajan - Frontend Magician | Full Stack Troublemaker |
            Digital Alchemist
          </title>
          <meta
            name="description"
            content="Rohan Mahajan is a web developer and a frontend advocate based in Bangalore building things at Walmart. Let's create some digital mayhem together !"
          />

          {/* Twitter Cards */}
          <meta name="author" content="Rohan Mahajan" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@knowinnrohan" />
          <meta name="twitter:creator" content="@knowinnrohan" />
          <meta name="twitter:image" content="static/twitter-card.png" />
          <meta
            name="twitter:title"
            content="Rohan Mahajan  - Engineer & Web Developer"
          />
          <link
            rel="alternate"
            href="404.html"
            type="application/atom+xml"
            title="Rohan Mahajan "
          />
          <link
            rel="alternate"
            href="404.html"
            type="application/json"
            title="Rohan Mahajan "
          />
          <link rel="icon" type="image/png" href="static/favicon.png" />
        </>
      </Head>
      <header className={`${styles.header} header`}>
        <Link href="/" className={styles.logo + " " + styles.navlink}>
          Rohan Mahajan
        </Link>
        <nav>
          <Link href="/profile" className={styles.navlink}>
            {" "}
            Profile
          </Link>
          <Link href="/blogs" className={styles.navlink}>
            Blogs
          </Link>
          <Link href="/projects" className={styles.navlink}>
            Projects
          </Link>
        </nav>
        <button onClick={handleThemeToggle} id="theme-toggle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-moon"
          >
            <g id="theme-toggle-dark">
              <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
            </g>
            <g id="theme-toggle-light">
              <circle cx={12} cy={12} r={5} />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </g>
          </svg>

          <span className={styles["u-visually-hidden"]}>Toggle theme</span>
        </button>
      </header>
    </>
  );
}
