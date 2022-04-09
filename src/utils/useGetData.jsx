import { useEffect, useState } from "react";
import axios from "axios";

function useGetData(API) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    function getFetchUrl() {
      return API;
    }
    async function fetchData() {
      const response = await axios.get(getFetchUrl());
      setInfo(response.data.results);
    }
    fetchData();
  }, [API]);
  return info;
}

export default useGetData;
