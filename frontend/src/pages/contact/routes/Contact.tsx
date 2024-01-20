import { TextArea } from '@/components/Elements/Form';
import { Form } from '@/components/Elements/Form';
import { ContentLayout } from '@/components/Layout';

export const Contact = () => {
    return (
        <ContentLayout title="Contact" description="大阪の大学に通う学生のポートフォリオです。">
            <h1>お問い合わせ</h1>
            <p>ご訪問ありがとうございます</p>
            <p>以下のフォームから何でもお問い合わせください</p>
            <Form>
                <input type="text" placeholder="名前" />
                <TextArea/>
                <button type="submit">送信</button>
            </Form>
        </ContentLayout >
    );
}