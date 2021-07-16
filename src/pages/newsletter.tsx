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
      <SEO theme={theme} title="Weekly Dose of Devs Stuff" isBodyDarker />
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
        <h1 className="newsletter-page__title">Weekly Dose of Devs Stuff</h1>
        <div className="newsletter-page__subtitle">
          <h3>
            This is a weekly newsletter with resources about TypeScript and
            other stuff for techies which I found interesting.
          </h3>
        </div>
        <div className="newsletter-page__main-content">
          <p>
            I am a software developer based in Prague, working for a one tech
            company in the area of cloud backups.
          </p>
          <p>
            My day job involves TypeScript and because I am a note-taking nerd I
            keep a list of links and resources about it and{" "}
            <strong>other things that I found interesting</strong>. I decided to
            share it with everyone who might be interested.
          </p>
          <p>
            By subscribing to this newsletter you will also be the first to
            receive materials of my <Link to="/blog">blog</Link> and last
            updates of my eBook{" "}
            <Link to="/grokking-typescript">Grokking TypeScript</Link>
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
      </div>
    </>
  );
};

export default NewsletterPage;
