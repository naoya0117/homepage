import { Form, TextArea } from '@/components/Elements';
import { Submit } from '@/components/Elements/Form/Submit';
import { TextInput } from '@/components/Elements/Form/TextInput';
import { ContentLayout } from '@/components/Layout';

export const Contact = () => {
    return (
        <ContentLayout title="Contact" description="大阪の大学に通う学生のポートフォリオです。">
            <div className="flex flex-col items-center">
            <h1 className='text-3xl'>Contact</h1>
            <div className="max-w-[400px] py-8">
                <p>ご訪問ありがとうございます。以下のフォームからなんでもお問い合わせください。</p>
            </div>
            <Form className=" w-[80%] max-w-[600px] ">
                <label htmlFor='name'>お名前</label>
                <TextInput id="お名前" placeholder="鈴木 太郎" className="my-4" />
                <label htmlFor='email'>メールアドレス</label>
                <TextInput id="メールアドレス" placeholder="example@naoya0117.com" className="my-4"/>
                <label htmlFor='message'>お問い合わせ内容</label>
                <TextArea className='my-4' id='お問い合わせ内容' placeholder='お問い合わせ内容を入力してください。' />
                <Submit value="送信"></Submit>
            </Form>
            </div>
        </ContentLayout >
    );
}