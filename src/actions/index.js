import axios from 'axios';
import qs from 'qs';
import moment from 'moment';
import { FETCH_NEWS } from './type';
import { apiKey } from '../config/key';

const BASE_URL = 'https://newsapi.org/v2/everything';
const currentTime = moment();
const targetTime = currentTime.clone().subtract(27, 'days');

export const fetchNews = q => (dispatch) => {
  const query = qs.stringify({
    q,
    from: targetTime.format('YYYY-MM-DD'),
    apiKey,
  });
  axios.get(`${BASE_URL}?${query}`)
    .then((res) => {
      dispatch({
        type: FETCH_NEWS,
        payload: res.data.articles,
      });
    });
};
