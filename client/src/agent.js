import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://denialvideolibrary.herokuapp.com';
const responseBody = res => res.body;


const requests = {  
  get: url=>
  superagent.get(`${API_ROOT}${url}`).then(responseBody),  
};

const Video = {
  getList: searchText =>
  requests.get(`/filter?searchWord=${searchText}`),
  getSavedList: searchIds =>
  requests.get(`/getListById?id=${searchIds}`),
};

export default {
  Video
};
