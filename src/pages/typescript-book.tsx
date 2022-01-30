import React, { FC } from "react";
import { PageProps } from "gatsby";

import {
  GoBackTo,
  Icon,
  SEO,
  useConvertkitEmailSubscription,
  useTheme,
  icons,
} from "@byteski/gatsby-midnight-theme";

import "../styles/typescript-book-page.css";

import logo from "../../static/images/ts-anthology-logo.png";

interface PageContextValue {
  convertkitEndpoint: string;
}

const TypeScriptBookPage: FC<PageProps<{}, PageContextValue>> = ({
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
          marginTop: "10px",
          marginLeft: "10px",
        }}
      >
        Home Page
      </GoBackTo>
      <div className="grokking-ts-page">
        <img
          className="grokking-ts-page__logo"
          src={logo}
          alt="Grokking TypeScript Logo"
        />
        <h1 className="grokking-ts-page__title">Grokking TypeScript</h1>
        <div className="grokking-ts-page__main-content">
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
        <div className="grokking-ts-page__form-wrapper">
          <form className="grokking-ts-page__form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email_address"
              placeholder="Email address"
              className="grokking-ts-page__input"
              onChange={handleChangeEmail}
              value={email}
            />
            <button className="grokking-ts-page__button">Download eBook</button>
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
        <div className="grokking-ts-page__benefits">
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
        <div className="grokking-ts-page__copyright">
          @ 2022 <a href="https://byte.ski">Byteski</a>
        </div>
      </div>
    </>
  );
};

export default TypeScriptBookPage;

