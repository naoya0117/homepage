import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaGithub, FaArrowDown } from 'react-icons/fa'; // Import the GitHub and ArrowDown icons
import { Link } from 'react-scroll';
import { ContentLayout } from '@/components/Layout/ContentLayout';
import { CustomCard } from '../components/Card';


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
        <ContentLayout title="Home" description="大阪の大学に通う学生のポートフォリオです。">
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
                    <div className="bg-blue-100 py-20">
                        <div id="skill" className="flex flex-col items-center justify-center mt-40">
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
                                </Link>
                            </animated.div>
                        </div>
                        <div id="history" className="flex flex-col items-center justify-center mt-40">
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
                            <h2 className="text-center text-4xl mb-4 mt-20">Project</h2>
                            <div className="mx-[10%]">
                                <h3 className="text-center text-2xl mb-4 mt-4 mx-auto">個人開発</h3>
                                <div className="flex flex-row flex-wrap mx-auto">
                                    <CustomCard title="vim-tetris" summary="vimのモードや操作を搭載したテトリスです。viを楽しく学べるように作りました。pthreadで並列処理を行っています" techTags={['C', 'Bash', 'docker', 'ncurses', 'pthread']} repoUrl='https://github.com/naoya0117/vim-tetris.git' />
                                    <CustomCard title="ポートフォリオ(旧)" summary="Webの勉強をするために、初めて作ったポートフォリオサイトです。Github pageでデプロイをしていました。" techTags={['Typescript', 'CSS', 'Next.js', 'Docker']} repoUrl='https://github.com/naoya0117/nextjs_portfolio.git' />
                                    <CustomCard title="ポートフォリオ" summary="このページです。ReactとLaravelをapi連携させており、ブログの投稿機能など動的なwebサイトにする予定です。" techTags={['Typescript', 'PHP', 'React.js', 'Laravel', 'mysql', 'Docker', 'nginx']} repoUrl='https://github.com/naoya0117/homepage.git' deployUrl='https://naoya0117.com' />
                                </div>
                                <h3 className="text-center text-2xl mb-4 mt-4">チーム開発</h3>
                                <div className="flex flex-row flex-wrap">
                                    <CustomCard title="走れ!すすむくん!" summary="大学の学祭に向けて作った、ブラウザで動くプラットフォームゲームです。Phaserを使ったゲーム処理を主に担当しました。" techTags={['React.js', 'Phaser.js', 'Docker', 'Typescript']} repoUrl='https://github.com/obanyan2023/susumukun.git' deployUrl='https://susumukun.vercel.app' />
                                    <CustomCard title="Minecraft Bot Contest" summary="C言語でキャラを動かすBotコンテストの機能を追加開発しました。中身はPythonで書いてあります。" techTags={['Python', 'C', 'numpy', 'Pillow']} repoUrl='https://github.com/masaki555/Minecraft_Contest.git' />
                                    <CustomCard title="カレンダー" summary="所属グループ内で、予定を共有できるカレンダーアプリを開発しました。非同期で予定が最新の予定が自動で画面に反映されるようにしています。" techTags={['Spring boot', 'H2DB', 'Java', 'html', 'css']} repoUrl='https://github.com/e1b21007/schedule.git' />
                                </div>
                                <h3 className="text-center text-2xl mb-4 mt-4">ただの趣味</h3>
                                <div className="flex flex-row flex-wrap">
                                    <CustomCard title="i3+Plasma デスクトップ" summary="ArchLinuxを普段使いしており、KDEのPlasmaデスクトップとタイル型wmであるi3を組み合わせて自分好みの環境を使用しています。" techTags={['Linux']} repoUrl='https://github.com/naoya0117/plasma-i3-kwin_sessions.git' />
                                    <CustomCard title="Qemuスクリプト" summary="Windowsや他ディストリビューションの仮想環境を簡単に作れるように起動スクリプトをGitHubに保管しています。" techTags={['Linux']} repoUrl='https://github.com/naoya0117/qemu-scripts.git' />
                                    <CustomCard title="vim設定自動化" summary="仮想環境を作るたびに、vimの設定ファイルを書くのを面倒に感じたので、Bashで自動化しました。普段より、Bashを使ってPCの処理の自動化を心がけています。" techTags={['Bash', 'vim']} repoUrl='https://github.com/naoya0117/vim_runtime.git' />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        </ContentLayout>
    );
}
