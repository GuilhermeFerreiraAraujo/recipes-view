import * as Client from './Client';

export function GetRecipes(params) {

    let tmpObj = {};
    if (params.ingredients !== '' || params.searchQuery !== '' || params.page !== '') {

        if (params.ingredients) {
            tmpObj.i = params.ingredients;
        }

        if (params.searchQuery) {
            tmpObj.q = params.searchQuery;
        }

        if (params.page) {
            tmpObj.p = params.page;
        }

        var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    }
    return Client.Get(queryString)
}