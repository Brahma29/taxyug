import React from "react";

// Icons
import { Accounting } from "./Accounting.icon";
import { RightArrow } from "./RightArrow.icon";
import { Taxation } from "./Taxation.icon";
import { Audit } from "./Audit.icon";
import { Secreterial } from "./Secreterial.icon";
import { Listing } from "./Listing.icon";
import { OtherMatters } from "./OtherMatters.icon";
import { HandShake } from "./HandShake.icon";
import { Mobile } from "./Mobile.icon";
import { Phone } from "./Phone.icon";
import { Mail } from "./Mail.icon";
import { Twitter } from "./Twitter.icon";
import { LinkedIn } from "./Linkedin.icon";
import { Facebook } from "./Facebook.icon";
import { Menu } from "./Menu.icon";
import { Cross } from "./Cross.icon";

const Icons = ({ children }) => {
  return <div className="w-10 h-10">{children}</div>;
};

Icons.Accounting = Accounting;
Icons.RightArrow = RightArrow;
Icons.Taxation = Taxation;
Icons.Audit = Audit;
Icons.Secreterial = Secreterial;
Icons.Listing = Listing;
Icons.OtherMatters = OtherMatters;
Icons.HandShake = HandShake;
Icons.Mobile = Mobile;
Icons.Phone = Phone;
Icons.Mail = Mail;
Icons.Twitter = Twitter;
Icons.LinkedIn = LinkedIn;
Icons.Facebook = Facebook;
Icons.Menu = Menu;
Icons.Cross = Cross;

export default Icons;
