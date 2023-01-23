import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaIcons() {
    return (
        <div className="flex gap-4 lg:gap-6 justify-center lg:justify-start">
            <a href="https://github.com/damianf2022">
                <FontAwesomeIcon icon={ faGithub } 
                className="text-2xl lg:text-3xl hover:text-stone-700 duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/damian-f/">
                <FontAwesomeIcon icon={ faLinkedin } 
                className="text-2xl lg:text-3xl hover:text-blue-400 duration-300" />
            </a>
            <a href="https://twitter.com/damian_ferrera">
                <FontAwesomeIcon icon={ faTwitter } 
                className="text-2xl lg:text-3xl hover:text-sky-400 duration-300" />
            </a>
        </div>
    )
}