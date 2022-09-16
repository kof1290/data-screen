import axios from 'axios';
import { Notification } from 'element-ui';

class Service {
    constructor() {
        this.initService()
    }
    initService() {
        this.service = axios.create({
            withCredentials: true,
            timeout: 30000
        });

        this.service.interceptors.response.use((response) => {
            if (response.status === 200) {
                return response;
            }
        }, (error) => {
            Notification.error({message: error})
            return error;
        })
    }
    send(config) {
        return this.service(config)
            .then((res) => {
                return res.data;
            })
    }
}


export default new Service();