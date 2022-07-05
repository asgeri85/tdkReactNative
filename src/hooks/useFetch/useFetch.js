import axios from 'axios';
import {useCallback, useState} from 'react';

const useFetch = URL => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [dataList, setDataList] = useState([]);

  const getAllData = useCallback(async () => {
    try {
      const {data: response} = await axios.get(`${URL}/icerik`);
      setData(response);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }, [URL]);

  const getWordData = async word => {
    try {
      const {data: response} = await axios.get(`${URL}/gts`, {
        params: {
          ara: word,
        },
      });
      Array.isArray(response) ? setDataList(response) : setDataList([]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return {data, loading, error, getAllData, getWordData, dataList};
};

export default useFetch;
