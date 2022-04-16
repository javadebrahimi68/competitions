
import { Alert, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import PrimarySearchAppBar from './component/MyAppBar';

import { ProductList } from './component/ProductList';
import { TopContent } from './component/TopContent';
//import { rawData } from './rawData';

const App = () => {

  const [notFound, setNotFound] = useState(true);
  const [rawData, setrawData] = useState([]);
  const [isloading, setIsloadin] = useState(false);
  const [data, setData] = useState([]);
  const getFromApi = async () => {
    try {
      setIsloadin(true)
      let response = await fetch('http://xoosha.com/ws/1/test.php?offset=20');
      let responseJson = await response.json();
      console.log(responseJson);
      setrawData([...responseJson]);
      setData([...responseJson]);
      setIsloadin(false);
      return responseJson;

    } catch (error) {
      console.error(error);
      setIsloadin(false);
    }
  }
  useEffect(() => {

    getFromApi();

  }, [])


  //setrawData(getFromApi());
  console.log(data);
  const search = (key) => {
    if (key != '') {
      const d = data.filter(c => c.description.includes(key));
      // alert(d.length);

      if (d.length == 0) {
        setNotFound(false);
      }
      else {
        setNotFound(true);
      }
      setData(d);
      // console.log(d);
    }
    else {
      setData(rawData);
    }
  }
  return (
    <>  <PrimarySearchAppBar search={search} />
      <div align='center'>


        <TopContent />
        {!isloading ? (
          notFound ?
         
             
              <ProductList data={data} />
     
            : <Alert severity="info"> Product Not Found!</Alert>
        )
          : <CircularProgress />
        }
      </div>
    </>
  );
}

export default App;
