import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Github from "../../assets/images/socials/github-pink.svg";
import Email from "../../assets/images/socials/instagram-pink.svg"; 
const NavigationSocials = () => {
  return (
    <section className="social-media">
      <a
        href="https://www.linkedin.com/in/ketan-chopade/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="linkedin" />
      </a>
      <a
        href="https://github.com/KetanChopade/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="github" />
      </a>
      <a
        href="mailto:ketanchopade23@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Email} alt="Email" />
      </a>
    </section>
  );
};

export default NavigationSocials;
