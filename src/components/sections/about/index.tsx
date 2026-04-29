import { Col, Row } from "react-bootstrap";
import AnimationLottie from "@share/animation-lottie";
import codingJSON from '@assets/lottie/coding.json';
import { DEVELOPMENT_LOTTIE } from "@assets/lottie/string/development";
import { CONTACT_LOTTIE } from "@assets/lottie/string/contact";

import GlowCard from "@share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "../divider";
import { APP_DATA } from "@helpers/data.ts";
import SocialMedia from "../social.media";
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Row>
                <Col md={6} xs={12}>
                    {i18n.resolvedLanguage === "en" ?
                        <>
                            <h3 className="text-center mb-md-5 mb-2">Know Who <span className="brand-red">I'M</span> </h3>
                            <div>
                                <div>
                                    <p> Hi everyone, I'm Hưng NV, a Frontend Developer based in Hanoi, Vietnam.</p>

                                    <p>I have over 5 years of experience building pixel-perfect, responsive web interfaces, with a strong focus on HTML, CSS, and JavaScript. Currently, I’m expanding my expertise in ReactJS and TypeScript to develop modern, scalable web applications.</p>

                                    <p>I graduated with a degree in Software Engineering from Hanoi University of Mining and Geology. (HUMG)</p>
                                </div>
                            </div>
                            <div>
                                <p>Beyond coding, I enjoy:
                                </p>
                                <ul>
                                    <li>Playing games 🎮</li>
                                    <li>Exploring new technologies & writing tech notes</li>
                                    <li>Travelling</li>
                                </ul>
                            </div>
                        </>
                        :

                        <>
                            <h3 className="text-center mb-md-5 mb-2">Giới thiệu về tôi</h3>
                            <div>
                                <div>
                                    <p>Chào mọi người, tôi là Hưng NV, một lập trình viên Frontend hiện đang sống tại Hà Nội, Việt Nam.</p>

                                    <p>Tôi có hơn 5 năm kinh nghiệm xây dựng giao diện web responsive, hoàn hảo đến từng pixel, với trọng tâm chính là HTML, CSS và JavaScript. Hiện tại, tôi đang mở rộng kiến ​​thức chuyên môn về ReactJS và TypeScript để phát triển các ứng dụng web hiện đại, có khả năng mở rộng.</p>

                                    <p>Tôi tốt nghiệp ngành Kỹ thuật Phần mềm tại Đại học Mỏ và Địa chất Hà Nội (HUMG).</p>
                                </div>
                            </div>
                            <div>
                                <p>Ngoài lập trình, tôi thích:
                                </p>
                                <ul>
                                    <li>Chơi game 🎮</li>
                                    <li>Khám phá các công nghệ mới và viết bài về công nghệ</li>
                                    <li>Du lịch</li>
                                </ul>
                            </div>
                        </>
                    }
                </Col >
                <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                    <AnimationLottie
                        width="80%"
                        animationPath={codingJSON} />
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12}
                    className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
                >
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
                    />
                </Col>
                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <div className="d-flex flex-column align-items-center gap-3">
                        <div>
                            <h4 className="text-center brand-red">
                                {i18n.resolvedLanguage === "en" ? <>Education</> : <>Trình độ học vấn</>}
                            </h4>
                        </div>
                        <div >
                            <GlowCard identifier={`experience-5`}>
                                <div className="p-3 relative">
                                    <div className="experience-container">
                                        <div className="duration-text">
                                            <p>2013-2018</p>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <FaGraduationCap size={36} />
                                            </div>
                                            <div className="info">
                                                <p className="title">{i18n.resolvedLanguage === "en" ? <>Software Engineer</> : <>Kỹ sư phần mềm</>}</p>
                                                <p className="company">{i18n.resolvedLanguage === "en" ? <>Hanoi University of Mining and Geology. (HUMG)</> : <>Đại học Mỏ và Địa chất Hà Nội (HUMG)</>}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                </Col>
            </Row>

            <Divider />
            <Row>
                <Col md={6} xs={12} className=" mt-md-5 mt-3">
                    <h3 className="mb-md-5 mb-2">FIND ME ON </h3>
                    <SocialMedia
                        github={APP_DATA.GITHUB_URL}
                        facebook={APP_DATA.FACEBOOK_URL}
                        phone={APP_DATA.PHONE_NUMBER}
                        gmail={APP_DATA.GMAIL_URL}
                    />
                </Col >
                <Col md={6} xs={12} className="d-flex flex-column align-items-center justify-content-center">
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    />
                    <h4 className="text-center">Contact me</h4>
                </Col>
            </Row>
            <div className="mb-5"></div>
        </>
    )
}

export default About;