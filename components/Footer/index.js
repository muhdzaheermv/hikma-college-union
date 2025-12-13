import styles from "../../styles/Footer.module.css";
import GetInTouch from "./GetInTouch";
import Socials from "./Socials";
import Links from "./Links";
import Instagram from "@/public/images/socials/Vector.svg";
import Nss from "@/public/images/socials/nss.png";
import Linkedin from "@/public/images/socials/Vector(3).svg";

const Footer = () => {
  const socials = [
    { logo: Instagram, link: "https://www.instagram.com/hikma_college_union?igsh=MTEwNG5yZ3E5dDNybw==" },
    { logo: Nss, link: "https://www.instagram.com/nssaspire_official?igsh=MWVpYW11YzdnOTB2dw==" },
    // { logo: Linkedin, link: "#" },
    // { logo: Facebook, link: "https://www.facebook.com/Ragam.nitc/" },
  ];

  const email = "";

  const links = [
    [
      { name: "Home", link: "/" },
      { name: "Arts", link: "/prodezza" },
      { name: "Sports", link: "/sports" },
      { name: "Members", link: "/team" },
      // { name: "Sponsors", link: "/sponsors" },
    ],
    [
      { name: "Events", link: "/events" },
      { name: "NSS", link: "/ink" },
      { name: "Programs", link: "/programs" },
    ],
    [
      // { name: "nss instagram", link: "/events?category=Ragnarok" },
      // { name: "Proshow", link: "/proshow" },
      // // { name: "I-ink", link: "/ink" },
      // { name: "Prodezza", link: "/prodezza" },
    ],
  ];
  var i=0,j=0;
  return (
    <footer className={styles.footer}>
      <div className={styles.mainSection}>
        <GetInTouch email={email} />
        <div className={styles.SocialsContainer}>
          {socials.map((x) => (
            <Socials  key={i++} content={x} />
          ))}
        </div>
        <div className={styles.LinksContainer}>
          {links.map((x) => (
            <Links key={j++} links={x} />
          ))}
        </div>
      </div>
      <div className={styles.BottomSection}>
        <div>©2025 - Hikma Aspire</div>
        <div>Terms & Conditions, Privacy</div>
      </div>
    </footer>
  );
};

export default Footer;
