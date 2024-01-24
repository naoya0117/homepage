import { useState } from 'react';
import { Form, TextArea, TextInput, Submit } from '@/components/Form';
import { ContentLayout } from '@/components/Layout';
import { sendEmail } from '../api';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await sendEmail({ name, email, content });
            console.log(response);
            setDialogMessage('メールが正常に送信されました。');
            setName('');
            setEmail('');
            setContent('');
        } catch (error) {
            console.error(error);
            setDialogMessage('メールの送信に失敗しました。');
        }
        setDialogOpen(true);
    };

    return (
        <ContentLayout title="Contact" description="大阪の大学に通う学生のポートフォリオです。">
            <div className="flex flex-col items-center">
            <h1 className='text-3xl'>Contact</h1>
            <div className="max-w-[400px] py-8">
                <p>ご訪問ありがとうございます。以下のフォームからなんでもお問い合わせください。</p>
            </div>
            <Form className="w-[80%] max-w-[600px]" onSubmit={handleSubmit}>
               <label htmlFor='name'>お名前</label>
                <TextInput id="お名前" placeholder="鈴木 太郎" className="my-4" value={name} onChange={e => setName(e.target.value)} />
                <label htmlFor='email'>メールアドレス</label>
                <TextInput id="メールアドレス" placeholder="example@naoya0117.com" className="my-4" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <label htmlFor='message'>お問い合わせ内容</label>
                <TextArea className='my-4' id='お問い合わせ内容' placeholder='お問い合わせ内容を入力してください。' value={content} onChange={e => setContent(e.target.value)} />
                <Submit value="送信"></Submit>
            </Form>
            <Dialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
            >
                <DialogTitle>{"送信結果"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {dialogMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialogOpen(false)}>
                        閉じる
                    </Button>
                </DialogActions>
            </Dialog>
            </div>
        </ContentLayout >
    );
}