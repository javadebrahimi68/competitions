
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
import { Masonry } from './component/Masonry/Masonry';
import axios from 'axios';
import useWindowDimensions from './component/dimentions';


const App = () => {

 
  const [searchKey,setSearchKey]=useState('');
  const [data, setData] = useState([])
  
  const [page, setPage] = useState(1);
 

  const { cols } = useWindowDimensions();
  const [loaded, setIsLoaded] = React.useState(false);
  var arr = Array.from({ length: cols }, () => ([]))
  const fetchData = () => {
     
      console.log(page);
      axios
          .get(`http://xoosha.com/ws/1/test.php?offset=${page}`)
          .then(res => {
              createArray([...res.data]);
              setIsLoaded(true);
          });
          setPage(parseInt(page) + 1);
  };

  const createArray = (fechdata) => {
      var i = 1;

      fechdata.forEach(element => {
          arr[i % cols] = [...arr[i % cols], element];
          i++;


      });
      setData(arr);
       console.log('data: ',arr);
  };
  const search = (key) => {
  //search keys Input
  
  }
  


  return (
    <>  <PrimarySearchAppBar search={search}  />
     
       
      <div align='center'>



        <TopContent />
       <Masonry fetchData={fetchData} data={data} loaded={loaded}/>
        {/* <ScrollComponent  /> */}
        {/* <MyInfiniteScroll searchKey={searchKey}/> */}

      </div>
    </>
  );
}

export default App;
