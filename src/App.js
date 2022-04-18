
import * as React from 'react';

import Typography from '@mui/material/Typography';
import { Alert, CircularProgress, Popover } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import PrimarySearchAppBar from './component/MyAppBar';

import { ProductList } from './component/ProductList';
import { TopContent } from './component/TopContent';
import { rawData1 } from './rawData';
import ScrollComponent from './component/ScrollComponent';
import useFetch from './component/hooks/useFetch';
import { MyInfiniteScroll } from './component/MyInfiniteScroll';


const App = () => {

  const [notFound, setNotFound] = useState(true);
  const [rawData, setrawData] = useState([...rawData1]);
  const [isloading, setIsloadin] = useState(false);
  const [searchKey,setSearchKey]=useState('');
  //const [data, setData] = useState([...rawData1]);
  //const [showSearch, setShowSearch] = useState(false);
  
//const [searchCount,setsearchCount]=useState();
  const search = (key) => {
  //search keys Input
  }
  


  return (
    <>  <PrimarySearchAppBar search={setSearchKey}  />
     
       
      <div align='center'>



        <TopContent />
       {/* <Masonry/> */}
        {/* <ScrollComponent  /> */}
        <MyInfiniteScroll searchKey={searchKey}/>

      </div>
    </>
  );
}

export default App;
