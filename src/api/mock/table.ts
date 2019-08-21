import instance from '@/helper/axios';

const axios = instance({ baseURL: 'https://easy-mock.com/mock/5c7b997cd764b271d20acae8' });

const base = '/admin/user';

const list = () => axios.get(base);

export default {
    list,
};
