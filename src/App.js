
import { Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import PrimarySearchAppBar from './component/MyAppBar';

import { ProductList } from './component/ProductList';
import { TopContent } from './component/TopContent';
import { rawData } from './rawData';

const App = () => {
  const [notFound, setNotFound] = useState(true);
  const [data, setData] = useState([...rawData]);
  const search = (key) => {
    if (key != '') {
      const d = data.filter(c => c.description.includes(key));
      // alert(d.length);
  
      if (d.length==0) {
        setNotFound(false);
      }
      else{
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

        {notFound ? <ProductList data={data} />
          : <Alert severity="info"> Product Not Found!</Alert>
        }
      </div>
    </>
  );
}

export default App;
