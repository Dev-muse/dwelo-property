'use client'

import React from "react";
import {
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
  TwitterIcon,
  FacebookIcon,
  EmailIcon,
  WhatsappIcon,
} from "react-share";

const ShareButtons = ({ Property }) => {
   const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${Property._id}`;
  return (
    <div>
      <h3 className="text-xl text-white font-bold text-center pt-2">
        Share this property
      </h3>
      <div className="flex gap-3 justify-center pb-5 mt-1">
        <FacebookShareButton
          url={shareUrl}
          quote={`${Property.name}`}
          hashtag={`#${Property.type}ForRent`}
        >
          <FacebookIcon size={40} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={`${Property.name}`}
          hashtags={[`${Property.type.replace(/\s/g, "")}ForRent`]}
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>
        <WhatsappShareButton
          url={shareUrl}
          title={`${Property.name}`}
          separator="::"
        >
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>
        <EmailShareButton
          url={shareUrl}
          subject={`${Property.name}`}
          body={`Check out this property listing: ${shareUrl}`}
        >
          <EmailIcon size={40} round />
        </EmailShareButton>
      </div>
    </div>
  );
};

export default ShareButtons;
