import { CustomButton } from "@/components/Elements"
import { SectionLayout } from "../Layout"
export const ContactSection = () => {
    return (
        <SectionLayout id="contact">
            <h2 className="text-center text-3xl mb-4 my-20">Contact</h2>
            <p>お問い合わせはこちらからお願いします。</p>
            <div className="flex flex-row justify-center my-10">
                <CustomButton to='/contact'>
                    お問い合わせ
                </CustomButton>
            </div>
        </SectionLayout>
    )
}