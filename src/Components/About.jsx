import styled from "styled-components";
import img1 from "../assets/img/me.png";
import { education, languages } from "../data/experience";

export function About() {
  return (
    <Container>
      <section className="about section" id="about" aria-labelledby="about-title">
        <div className="shape__small" aria-hidden="true"></div>
        <div className="shape__big" aria-hidden="true"></div>

        <div className="about__container container grid">
          <div className="about__data">
            <h2 className="section__title" id="about-title">
              About me
            </h2>

            <p className="about__description">
              I own backend delivery: Node.js and TypeScript APIs, AWS
              infrastructure, and CI/CD. I lead software work in a team of two,
              and I am the sole backend engineer on PathBus.
            </p>
            <p className="about__description">
              On PathBus I integrate OpenPay and NetPay with retries and
              idempotency so provider failures and duplicate charges stay safe
              in production. Flutter, Bluetooth Low Energy, and IoT are a
              secondary specialization.
            </p>

            <div className="about__meta">
              <div>
                <h3>Selected results</h3>
                <p>
                  10+ cities · 1,000+ daily transactions per route · ~75%
                  deploy reduction · BLE error from 15% to near-zero · 200+
                  connected units
                </p>
              </div>
              <div>
                <h3>Education</h3>
                <p>
                  {education.degree} — {education.institution} |{" "}
                  {education.period}
                </p>
              </div>
              <div>
                <h3>Languages</h3>
                <p>
                  {languages
                    .map((language) => `${language.name}: ${language.level}`)
                    .join(" · ")}
                </p>
              </div>
            </div>
          </div>

          <img
            src={img1}
            alt="Portrait of Brayan Olivares"
            className="about__img"
            width={250}
            height={450}
            loading="lazy"
          />
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  .about {
    position: relative;

    &__container {
      row-gap: 3.5rem;

      & .section__title {
        margin-bottom: 1rem;
      }
    }

    &__data {
      text-align: center;
    }

    &__description {
      text-align: left;
      margin-bottom: 1rem;
      color: var(--text-color);
    }

    &__meta {
      display: grid;
      gap: 1.25rem;
      margin-top: 1.5rem;
      text-align: left;

      h3 {
        color: var(--first-color);
        font-size: var(--h3-font-size);
        margin-bottom: 0.35rem;
      }

      p {
        color: var(--text-color);
        font-size: var(--small-font-size);
      }
    }

    &__img {
      width: min(250px, 70vw);
      height: auto;
      aspect-ratio: 5 / 9;
      object-fit: cover;
      justify-self: center;
      border-radius: 1.25rem;
      animation: flotar 1.9s ease-in-out infinite alternate;
    }

    & .shape__small {
      top: 2rem;
      right: -3rem;
    }

    & .shape__big {
      bottom: 0;
      left: -8rem;
    }
  }

  @keyframes flotar {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-12px);
    }
  }

  @media screen and (min-width: 1024px) {
    .about {
      &__img {
        order: -1;
      }

      &__container {
        padding-top: 2rem;
        grid-template-columns: max-content 0.9fr;
        column-gap: 4rem;
        align-items: center;
      }

      &__data {
        text-align: initial;
      }

      &__container .section__title {
        text-align: initial;
        margin-bottom: 1.5rem;
      }
    }
  }
`;
