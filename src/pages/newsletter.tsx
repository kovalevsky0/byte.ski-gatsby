import React, { FC } from "react";
import { Link, PageProps } from "gatsby";

import {
  GoBackTo,
  Icon,
  SEO,
  useConvertkitEmailSubscription,
  useTheme,
  icons,
} from "@kowalevski/gatsby-midnight-theme";

import "../styles/newsletter-page.css";

import logo from "../../static/images/newsletter-logo.png";

interface PageContextValue {
  convertkitEndpoint: string;
}

const NewsletterPage: FC<PageProps<{}, PageContextValue>> = ({
  pageContext: { convertkitEndpoint },
}) => {
  const { theme } = useTheme();
  const {
    handleSubmit,
    handleChangeEmail,
    email,
    isInitialStatus,
    isErrorStatus,
    isSuccessStatus,
  } = useConvertkitEmailSubscription({ endpoint: convertkitEndpoint });

  return (
    <>
      <SEO
        theme={theme}
        title="Weekly Dose Of Software Engineering Stuff"
        isBodyDarker
      />
      <GoBackTo
        type="link"
        to="/"
        theme={theme}
        style={{
          marginTop: "10px",
          marginLeft: "10px",
        }}
      >
        Home Page
      </GoBackTo>
      <div className="newsletter-page">
        <img
          className="newsletter-page__logo"
          src={logo}
          alt="Weekly Dose of Dev Stuff Logo"
        />
        <div
          style={{
            margin: "0 auto 30px auto",
            maxWidth: "1100px",
            width: "100%",
          }}
        >
          <h1 className="newsletter-page__title">
            Weekly Dose Of <br /> Software Engineering Stuff
          </h1>
        </div>
        <div className="newsletter-page__subtitle">
          <h3>
            This is a weekly newsletter with resources about stuff for techies
            which I found interesting.
          </h3>
        </div>
        <div className="newsletter-page__main-content">
          <p>
            I am a software developer based in Prague, working for a one tech
            company in the area of cloud backups.
          </p>
          <p>
            My day job involves TypeScript and because I am a note-taking nerd I
            keep lists of links and resources about it and{" "}
            <strong>other things that I found interesting</strong>. I decided to
            share it with everyone who might be interested.
          </p>
        </div>
        <div className="newsletter-page__form-wrapper">
          <form className="newsletter-page__form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email_address"
              placeholder="Email address"
              className="newsletter-page__input"
              onChange={handleChangeEmail}
              value={email}
            />
            <button className="newsletter-page__button">Subscribe!</button>
          </form>
        </div>
        {!isInitialStatus && (
          <div className="newsletter-page__subscription-result">
            {isSuccessStatus && (
              <div>
                <Icon
                  src={icons.emojiSparkles}
                  widthSize="20px"
                  indentRight="10px"
                />
                <span>
                  You will receive an email letter with a link to confirm your
                  subscription
                </span>
              </div>
            )}
            {isErrorStatus && (
              <>
                <div>
                  <Icon
                    src={icons.emojiPoliceCarLight}
                    widthSize="20px"
                    indentRight="10px"
                  />
                  <span>Oops, Something went wrong! Try again.</span>
                </div>
              </>
            )}
          </div>
        )}
        <div className="newsletter-page__main-content">
          <p>
            By subscribing to this newsletter you will also be the first to
            receive materials from my <Link to="/blog">blog</Link> and last
            updates of{" "}
            <Link to="/typescript-book">my eBook about TypeScript</Link>
          </p>
          <p>
            The goal of this newsletter is to share resources from my blog and
            the Internet that are related to topics that I found interesting as
            a software developer.
          </p>
          <p>
            The content related to TypeScript, Node, programming languages in
            general, testing for devs, writing and note-taking, useful resources
            about computer science, algorithms and data structures, interview
            preparation, software architecture, books, DevOps, and many many
            other interesting things.
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsletterPage;
