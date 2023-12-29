import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaGithub, FaArrowDown } from 'react-icons/fa'; // Import the GitHub and ArrowDown icons
import { Link } from 'react-scroll';
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
                            <img src="https://skillicons.dev/icons?i=c,java,bash,py,ts,html,css,php,postgres" alt="myskill" />
                            <p>フレームワーク・ライブラリ</p>
                            <img src="https://skillicons.dev/icons?i=react,nextjs,spring,laravel" alt="myskill"></img>
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
                    <h2 className="text-center text-4xl mb-4">History</h2>
                    <div className="mb-10">
                        <p>趣味でLinuxを触ったのをきっかけに技術に興味を持ちました。</p>
                        <p>現在は、プログラミングからソフトウェア設計まで幅広く学習しています</p>
                    </div>

                    <table className="table-auto bg-white shadow-md rounded-lg">
                        <thead className="border-b-2 border-gray-300">
                            <tr>
                                <th className="px-4 py-2">年</th>
                                <th className="px-4 py-2">月</th>
                                <th className="px-4 py-2">内容</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">2003年</td>
                                <td className="border px-4 py-2">1月</td>
                                <td className="border px-4 py-2">生まれる</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">2021年</td>
                                <td className="border px-4 py-2">3月</td>
                                <td className="border px-4 py-2">静岡の普通科の高校を卒業</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">2021年</td>
                                <td className="border px-4 py-2">4月</td>
                                <td className="border px-4 py-2">大阪の情報系の学部に入学する</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">2023年</td>
                                <td className="border px-4 py-2">5月</td>
                                <td className="border px-4 py-2">ゼミ配属でチーム開発を経験、webを知る</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">2023年</td>
                                <td className="border px-4 py-2">8月</td>
                                <td className="border px-4 py-2">マイクラコンテスト(学生プロジェクト)に開発スタッフとして参加</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">2023年</td>
                                <td className="border px-4 py-2">12月~</td>
                                <td className="border px-4 py-2">長期インターンで実務のweb開発を始める</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2 className="text-center text-4xl mb-4">Project</h2>
                </div>
            </div>
        </div>
        </ContentLayout>
    );
}
