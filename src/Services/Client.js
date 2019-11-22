import axios from 'axios';

const appUrl = 'http://www.recipepuppy.com/api/';

export function Get(params) {

    let url = appUrl ;

    if (params) {
        url += params;
    }

    let options = {
        method: 'GET',
        url: url,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };
    
    return axios(options);
}

export default Get;