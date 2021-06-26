import React, { FC } from "react";
import { PageProps } from "gatsby";

import {
  GoBackTo,
  Icon,
  SEO,
  useConvertkitEmailSubscription,
  useTheme,
  icons,
} from "@kowalevski/gatsby-midnight-theme";

import "../styles/ts-anthology-page.css";

import logo from "../../static/images/ts-anthology-logo.png";

interface PageContextValue {
  convertkitEndpoint: string;
}

const GrokkingTypeScript: FC<PageProps<{}, PageContextValue>> = ({
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
      <SEO theme={theme} title="Grokking TypeScript eBook" isBodyDarker />
      <GoBackTo
        type="link"
        to="/"
        theme={theme}
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",
        }}
      >
        Home Page
      </GoBackTo>
      <div className="ts-anthology-page">
        <img
          className="ts-anthology-page__logo"
          src={logo}
          alt="Grokking TypeScript Logo"
        />
        <h1 className="ts-anthology-page__title">Grokking TypeScript</h1>
        <div className="ts-anthology-page__main-content">
          <p>
            It is a series of posts about TypeScript and technologies in it's
            ecosystem. All these posts are parts of ebook{" "}
            <i>Grokking TypeScript</i>. The posts and the book are fully
            available for <strong>free</strong>. The series and the book are
            still in Work In Progress status but they are already available for
            everyone.
          </p>
          <p>The book is available in PDF format.</p>
          <p style={{ textDecoration: "underline" }}>
            Join my Mailing List to get the latest version of book for free.
          </p>
        </div>
        <div className="ts-anthology-page__form-wrapper">
          <form className="ts-anthology-page__form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email_address"
              placeholder="Email address"
              className="ts-anthology-page__input"
              onChange={handleChangeEmail}
              value={email}
            />
            <button className="ts-anthology-page__button">
              Download eBook
            </button>
          </form>
        </div>
        {!isInitialStatus && (
          <div
            style={{ margin: "0 auto", fontSize: "20px", textAlign: "center" }}
          >
            {isSuccessStatus && (
              <div>
                <Icon
                  src={icons.emojiSparkles}
                  widthSize="20px"
                  indentRight="10px"
                />
                <span>
                  Please go confirm your subscription in your email inbox!{" "}
                  <br /> After that you will receive a letter with links to
                  download the book.
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
        <div className="ts-anthology-page__benefits">
          <h4>What Will You Receive After Signing Up?</h4>
          <ul>
            <li>✅ The latest version of the book</li>
            <li>
              ✅ You will receive updated versions of the book in the future
            </li>
            <li>
              ✅ Weekly letters about my new posts and news on other
              books/courses I create
            </li>
            <li>
              ✅ You will be one of those who will receive the final version of
              the book
            </li>
          </ul>
        </div>
        <div className="ts-anthology-page__copyright">
          @ 2021 <a href="https://kowalevski.com">Max Kowalevski</a>
        </div>
      </div>
    </>
  );
};

export default GrokkingTypeScript;
