import { useSpring, animated } from 'react-spring';
import { FaGithub } from 'react-icons/fa'; // Import the GitHub icon

const Home = () => {
    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 2000 }, // Increase animation duration to 3000ms
    });

    return (
        <>
        <div className="flex flex-col items-center justify-center h-screen">
            <animated.div style={{...fade, marginTop: '-50px'}} className="flex flex-col items-center justify-center">
                <p className="text-center text-4xl mb-4">Welcome to my portfolio!</p>
                <p>こんにちは、私は情報系の学部に通う大阪の学生です。</p>
                <p>webアプリの開発に興味があります。</p>
                <a href="https://github.com/naoya0117" target="_blank" rel="noopener noreferrer" className="mt-5 transform transition-transform duration-500 hover:scale-110">
                    <FaGithub size={50} /> {/* GitHub icon */}
                </a>
            </animated.div>
        </div>
        <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
        </div>
        </>
    );
}

export default Home;
