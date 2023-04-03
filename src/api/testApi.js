import axiosClient from './axiosClient';

const testApi = {
    getTestResponse(id) {
        const url = `/library/test/success?id=${id}`;

        return axiosClient.get(url);
    },
    
};

export default testApi;
