import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaGithub, FaArrowDown } from 'react-icons/fa'; // Import the GitHub and ArrowDown icons
import { Link } from 'react-scroll';
import { Sidemenu } from '../components/Sidemenu';
import { ContentLayout } from '@/components/Layout/ContentLayout';


export const Home = () => {
    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 2000 }, // Increase animation duration to 3000ms
    });

    const [isFocused, setIsFocused] = useState(false);

    const arrowAnimation = useSpring({
        from: { transform: 'translate3d(0, 0px, 0)' },
        to: { transform: isFocused ? 'translate3d(0, 10px, 0)' : 'translate3d(0, 0px, 0)' },
        config: { duration: 200 },
        loop: { reverse: false },
    });

    return (
        <ContentLayout title="Home">
        <div className="flex flex-row justify-between">
            <div className="flex flex-col w-full">
                <div id="about" className="flex flex-col items-center justify-center h-[80vh]">
                    <animated.div style={{ ...fade, marginTop: '-50px' }} className="flex flex-col items-center justify-center">
                        <p className="text-center text-4xl mb-4">Welcome to my portfolio!</p>
                        <p>こんにちは、私は情報系の学部に通う大阪の学生です。</p>
                        <p>webアプリの開発に興味があります。</p>
                        <a href="https://github.com/naoya0117" target="_blank" rel="noopener noreferrer" className="mt-5 transform transition-transform duration-500 hover:scale-110">
                            <FaGithub size={50} /> {/* GitHub icon */}
                        </a>
                        <Link to="skill"
                            smooth={true}
                            duration={500}
                            className="mt-5 cursor-pointer text-gray-300 transition-colors"
                            onMouseEnter={() => setIsFocused(true)}
                            onMouseLeave={() => setIsFocused(false)}>
                            <animated.div style={arrowAnimation}>
                                <FaArrowDown size={50} /> {/* ArrowDown icon */}
                            </animated.div>
                        </Link>
                    </animated.div>
                </div>
                <div id="skill" className="flex flex-col items-center justify-center bg-blue-100 mt-5 h-[80vh]">
                    <animated.div style={{ ...fade, marginTop: '-50px' }} className="flex flex-col items-center justify-center">
                        <h2 className="text-center text-4xl mb-4">Skill</h2>
                        <p>最近はweb系の技術に触れています。</p>
                        <p>いろんな分野に手を出していきたいと思っています。</p>
                        <div className="mt-10 text-center items-center flex flex-col justify-center">
                            <p>開発環境</p>
                            <img src="https://skillicons.dev/icons?i=git,linux,docker,vim,vscode,idea" alt="myskill" />
                            <p>言語</p>
                            <img src="https://skillicons.dev/icons?i=c,java,bash,py,ts,html,css,postgres" alt="myskill" />
                            <p>フレームワーク・ライブラリ</p>
                            <img src="https://skillicons.dev/icons?i=react,nextjs,spring" alt="myskill"></img>
                        </div>
                        <Link to="history"
                            smooth={true}
                            duration={500}
                            className="mt-5 cursor-pointer text-blue-300 transition-colors"
                            onMouseEnter={() => setIsFocused(true)}
                            onMouseLeave={() => setIsFocused(false)}>
                            <animated.div style={arrowAnimation}>
                                <FaArrowDown size={50} /> {/* ArrowDown icon */}
                            </animated.div>
                        </Link>
                    </animated.div>
                </div>
                <div id="history" className="flex flex-col items-center justify-center bg-blue-100 mt-5 h-[80vh]">
                </div>
            </div>
            <Sidemenu />
        </div>
        </ContentLayout>
    );
}
