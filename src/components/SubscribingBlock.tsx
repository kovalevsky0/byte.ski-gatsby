import React, { FC } from "react";

import { PostBanner, Icon, icons } from "@kowalevski/gatsby-midnight-theme";
import { Link } from "gatsby";

interface SubscribingBlockProps {
  convertkitEndpoint: string;
}

export const SubscribingBlock: FC<SubscribingBlockProps> = ({
  convertkitEndpoint,
}) => {
  return (
    <PostBanner
      convertkitEndpoint={convertkitEndpoint}
      title="Weekly Dose Of Software Engineering Stuff"
      content={
        <>
          <p>
            Be the first to know when I write new post. I also share useful
            resources from my blog and the Internet with memebers of newsletter{" "}
            <Link to="/newsletter">
              <strong>Weekly Dose Of Software Engineering Stuff</strong>
            </Link>
            .
          </p>
          {/* <p>
            I write about{" "}
            <strong>
              software development, TypeScript, testing, architecture and other
              stuff.
            </strong>
          </p> */}
          <p>
            The content related to{" "}
            <strong>
              <i>TypeScript</i>
            </strong>
            ,{" "}
            <strong>
              <i>Node</i>
            </strong>
            , programming languages in general, testing for devs, writing and
            note-taking, useful resources about computer science,{" "}
            <strong>
              <i>algorithms and data structures</i>
            </strong>
            , interview preparation, software architecture, books,{" "}
            <strong>
              <i>DevOps</i>
            </strong>
            , and many many other interesting things.
          </p>
          <p>
            Only interesting articles and useful materials.{" "}
            <strong>
              <i>No spam</i>
            </strong>
            .
          </p>
        </>
      }
      btnTitle="Subscribe"
      successView={
        <div>
          <Icon src={icons.emojiSparkles} widthSize="20px" />
          <span>Please go confirm your subscription!</span>
        </div>
      }
      errorView={
        <div>
          <Icon src={icons.emojiPoliceCarLight} widthSize="20px" />
          <span>Oops, Something went wrong! Try again.</span>
        </div>
      }
      iconSrc={icons.emojiLoveLetter}
    />
  );
};
