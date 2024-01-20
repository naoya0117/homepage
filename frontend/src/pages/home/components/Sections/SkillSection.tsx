import { SectionLayout } from "../Layout"
import { SkillIcon } from "../Elements/Skillicon"

export const SkillSection = () => {
    const Skills = [
        {
            title: '開発環境',
            items: ['git', 'linux', 'docker', 'vim', 'vscode', 'idea']
        },
        {
            title: '言語',
            items: ['c', 'java', 'bash', 'py', 'ts', 'html', 'css', 'php', 'tailwind', 'postgres', 'mysql']
        },
        {
            title: 'フレームワーク・ライブラリ',
            items: ['react', 'nextjs', 'spring', 'laravel']
        }
    ]

    return (
        <SectionLayout id="skill">
            <div className="flex flex-col items-center justify-center 9y-30 py-40 max-w-[90%] mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-center text-3xl mb-4 pl-2">Skill</h2>
                    <p>最近はweb系の技術に触れています。</p>
                    <p>いろんな分野に手を出していきたいと思っています。</p>
                    <div className="mt-10 text-center items-center flex flex-col justify-center">
                        {Skills.map((skill, index) => (
                            <div key={index} className="mt-10 text-center items-center flex flex-col justify-center">
                                <p>{skill.title}</p>
                                <SkillIcon name={skill.items} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionLayout>
    )
}