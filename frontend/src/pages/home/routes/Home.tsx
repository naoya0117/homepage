import { ContentLayout } from '@/components/Layout/ContentLayout'; 
import { AboutSection, SkillSection, HistorySection, ProjectSection, ContactSection } from '../components/Sections';

export const Home = () => { 

    return (
        <ContentLayout title="Home" description="大阪の大学に通う学生のポートフォリオです。">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col w-full">
                    <AboutSection/>
                    <div className="bg-gray-200 py-20 m-0">
                        <SkillSection/>
                        <HistorySection/>
                        <ProjectSection/>
                        <ContactSection/>
                    </div>
                </div>
            </div>
        </ContentLayout >
    );
}
