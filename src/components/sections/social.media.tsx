import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa6";

interface SocialMediaProps {
    github: string;
    gmail: string;
    facebook: string;
    phone: string;
}

const SocialMedia = (props: SocialMediaProps) => {
    const { github, gmail, facebook , phone} = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={github} target='_blank' className="highlight" title="Github Hưng NV">
                <FaGithub size={30} />
            </a>
            <a href={gmail} target='_blank' className="highlight" title="Gmail Hưng NV">
                <SiGmail size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook Hưng NV">
                <FaFacebook size={30} />
            </a>
            <a href={phone} target='_blank' className="highlight" title="037 252 3165">
                <FaPhoneVolume  size={30} />
            </a>
        </div>
    )
}

export default SocialMedia;