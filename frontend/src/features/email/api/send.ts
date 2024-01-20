import { axios } from '@/lib/axios';

type email = {
    name: string;
    email?: string;
    content: string;
}

export const send = (content : email ) => {
    return axios.post('/email/send', content);
}