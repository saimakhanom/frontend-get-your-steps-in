import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";

const Header = () => {
    return(
        <nav>
          <ul className="names">
            <div className="name-item">
              <a
                href="https://github.com/dave-hickman"
                target="_blank"
                rel="noreferrer"
              >
                <VscGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/dave-hickman-dev/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin />
              </a>
              <li>Λ Dave Hickman</li>
            </div>
            <div className="name-item">
              <a
                href="https://github.com/jorgemf2604"
                target="_blank"
                rel="noreferrer"
              >
                <VscGithub />
              </a>
              <a href="https://uk.linkedin.com/">
                <SiLinkedin />
              </a>
              <li>Λ Jorge Martin</li>
            </div>
            <div className="name-item">
              <a
                href="https://github.com/Joelymodevs"
                target="_blank"
                rel="noreferrer"
              >
                <VscGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/joel-morton-557537275/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin />
              </a>
              <li>Λ Joel Morton</li>
            </div>
            <div className="name-item">
              <a
                href="https://github.com/NadiaIb"
                target="_blank"
                rel="noreferrer"
              >
                <VscGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/nadia-ibrahim-1422a4109/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin />
              </a>
              <li>Λ Nadia Ibrahim</li>
            </div>
            <div className="name-item">
              <a
                href="https://github.com/saimakhanom"
                target="_blank"
                rel="noreferrer"
              >
                <VscGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/saimakhanom/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin />
              </a>
              <li>Λ Saima Khanom</li>
            </div>
          </ul>
        </nav>
    )
}

export default Header