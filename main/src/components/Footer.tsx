import "../styles/Footer.scss";
import githubSrc from "../assets/github.svg";
import linkedInSrc from "../assets/linkedin.svg";
import envelopeSrc from "../assets/envelope.svg";

const Footer: React.FC = () => {
  return (
    <footer>
      <div>© 2025 Juan Caballero. Todos los derechos reservados.</div>
      <div style={{ marginTop: "0.5rem" }}>
        <a
          href="https://github.com/ju4ncb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={githubSrc} alt="icon-github" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/juan-david-caballero-barros-3239802a1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={linkedInSrc} alt="icon-linkedin" />
          LinkedIn
        </a>
        <a href="mailto:ju4ncb@gmail.com">
          <img className="icon" src={envelopeSrc} alt="icon-envelope" />
          ju4ncb@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
