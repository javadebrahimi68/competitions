import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(query, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = await axios.get(
        `http://xoosha.com/ws/1/test.php?offset=${page}`
      );
      //   console.log(res.data );
      setMyList(res);
     
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [query, page]);
  const setMyList = async(res) => {
    await setList(
      [
        ...list,
         ...res.data]
    );
    console.log('list',list );
  }

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page]);

  return { loading, error, list };
}

export default useFetch;
