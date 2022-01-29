import React, { FC } from "react";

import { PostBanner, Icon, icons } from "@byteski/gatsby-midnight-theme";
import { Link } from "gatsby";

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
            This post is part of series and{" "}
            <strong>
              <Link to="/typescript-book">
                <i>book about TypeScript</i>
              </Link>
            </strong>
            . It will guide you from scratch to writing full TypeScript
            applications on Back End and Front End.
          </p>
          <p>
            The series and the book are still in <i>Work In Progress</i> status
            but they are already available for everyone. The book is available
            in <strong>PDF</strong> format.
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
