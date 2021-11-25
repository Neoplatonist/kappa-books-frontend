import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import 'tailwindcss/tailwind.css';

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Kappa Books</title>

        <meta
          name="description"
          content="A library of interactive books for ESL"
        />

        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Montserrat:wght@500&family=Mulish:wght@200;300;400&display=swap"
          rel="stylesheet" />
      </Head>

      <header className="l-header">
        <div className="l-header__wrapper">
          <Nav />

          <p className="c-header-body">
            Experience English with an open mind, <br />
            learn English with creativity.
          </p>

          <picture className="c-header-glyphs__01">
            <source srcSet="/images/ellipse-3.webp" type="image/webp" />
            <img src="/images/ellipse-3.svg" alt="Interactive Stories Picture" />
          </picture>

          <picture className="c-header-glyphs__02">
            <source srcSet="/images/ellipse-5.webp" type="image/webp" />
            <img src="/images/ellipse-5.svg" alt="Interactive Stories Picture" />
          </picture>

          <picture className="c-header-glyphs__03">
            <source srcSet="/images/ellipse-2.webp" type="image/webp" />
            <img src="/images/ellipse-2.svg" alt="Interactive Stories Picture" />
          </picture>

          <picture className="c-header-glyphs__04">
            <source srcSet="/images/group-2.webp" type="image/webp" />
            <img src="/images/group-2.svg" alt="Interactive Stories Picture" />
          </picture>
        </div>
      </header>

      <main className="l-main-content">
        <article className="l-about">
          <h1 className="l-about__title">About</h1>

          <ul className="l-about-list">
            <li className="l-about-list__item">
              <figure className="c-about-figure">
                <picture className="c-about-figure__img">
                  <source srcSet="/images/image-1.webp" type="image/webp" />
                  <source srcSet="/images/image-1.png" type="image/png" />
                  <img src="/images/image-1.png" alt="Interactive Stories Picture" />
                </picture>

                <figurecaption className="c-about-figure__caption">
                  Enjoy English with interactive stories about communication and creativity!
                </figurecaption>
              </figure>
            </li>

            <li className="l-about-list__item">
              <figure className="c-about-figure">
                <picture className="c-about-figure__img">
                  <source srcSet="/images/image-2.webp" type="image/webp" />
                  <source srcSet="/images/image-2.png" type="image/png" />
                  <img src="/images/image-2.png" alt="Interactive Stories Picture" />
                </picture>

                <figurecaption className="c-about-figure__caption">
                  Learn English with fun games!
                </figurecaption>
              </figure>
            </li>

            <li className="l-about-list__item">
              <figure className="c-about-figure">
                <picture className="c-about-figure__img">
                  <source srcSet="/images/image-3.webp" type="image/webp" />
                  <source srcSet="/images/image-3.png" type="image/png" />
                  <img src="/images/image-3.png" alt="Interactive Stories Picture" />
                </picture>

                <figurecaption className="c-about-figure__caption">
                  Track your reading progress!
                </figurecaption>
              </figure>
            </li>
          </ul>
        </article>

        <article className="l-subscribe">
          <h2 className="l-subscribe__title">COMING SOON</h2>

          <p className="l-subscribe__body">Sign up to hear more about Cuppa Books!</p>

          <form className="c-subscribe-form">
            <input id="email"
              className="c-subscribe-form__input"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email"
              required />

            <input id="submit"
              className="c-subscribe-form__submit"
              type="submit"
              name="submit"
              value="Sign Up" />
          </form>
        </article>
      </main>

      <footer></footer>

      {/* <main className={styles.main}>
        <h className={styles.title}>Welcome to Interactive Books for ESL</h}>

        < className={styles.description}>This is the landing page.</}>

        <Link href="/login" passHref>
          <Button variant="primary">Login</Button>
        </Link>
      </main> */}
    </Fragment>
  );
};

export default HomePage;
