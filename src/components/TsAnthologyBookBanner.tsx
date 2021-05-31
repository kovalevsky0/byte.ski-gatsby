import React, { FC } from "react";

import { PostBanner, Icon, icons } from "@mxkvl/gatsby-novemist-theme";

interface Props {
  convertkitEndpoint: string;
}

export const TsAnthologyBookBanner: FC<Props> = ({ convertkitEndpoint }) => {
  return (
    <PostBanner
      convertkitEndpoint={convertkitEndpoint}
      title="Sign Up To Download Free eBook About TypeScript"
      content={
        <>
          <p>
            This post is part of series of posts about{" "}
            <strong>TypeScript</strong> called{" "}
            <strong>
              <i>The TypeScript Anthology</i>
            </strong>
            . It will guide you from scratch to writing full TypeScript
            applications on Back End and Front End.
          </p>
          <p>
            The series is available as <strong>PDF eBook</strong> for{" "}
            <strong>free</strong> to everyone.
          </p>
        </>
      }
      btnTitle="Download eBook"
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
    />
  );
};
