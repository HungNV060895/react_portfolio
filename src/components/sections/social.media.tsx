import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { SiGmail } from "react-icons/si";

interface SocialMediaProps {
    youtube: string;
    tiktok: string;
    gmail: string;
    facebook: string;
}

const SocialMedia = (props: SocialMediaProps) => {
    const { youtube, tiktok, gmail, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={youtube} target='_blank' className="highlight" title="Youtube Hưng NV">
                <SiYoutubeshorts size={30} />
            </a>
            <a href={tiktok} target='_blank' className="highlight" title="Tiktok Hưng NV">
                <FaTiktok size={30} />
            </a>
            <a href={gmail} target='_blank' className="highlight" title="Gmail Hưng NV">
                <SiGmail size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook Hưng NV">
                <FaFacebook size={30} />
            </a>

        </div>
    )
}

export default SocialMedia;