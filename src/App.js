
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
import { create } from '@mui/material/styles/createTransitions';


const App = () => {


  const [searchKey, setSearchKey] = useState('');
  const [data, setData] = useState([])
  const [rawData, setRawData] = useState([]);
  const [page, setPage] = useState(1);
  const [onSearch, setOnSearch] = useState(false);

  const { cols } = useWindowDimensions();
  const [loaded, setIsLoaded] = React.useState(false);
  var arr = Array.from({ length: cols }, () => ([]))
  const fetchData = () => {

    console.log(page);
    if (!onSearch) {
      console.log('fetch data axios');
      axios
        .get(`http://xoosha.com/ws/1/test.php?offset=${page}`)
        .then(res => {
          createArray([...res.data]);
          setRawData([...res.data]);
          setIsLoaded(true);
        });
      setPage(parseInt(page) + 1);
    }
  };

  const createArray = (fechdata, reset = false) => {
    var i = 1;

    if (!onSearch) {
      fechdata.forEach(element => {
        arr[i % cols] = [...arr[i % cols], element];
        i++;


      });
      setData(arr);
    }
    else {
      var newArr = Array.from({ length: cols }, () => ([]))
      fechdata.forEach(element => {
        newArr[i % cols] = [...newArr[i % cols], element];
        i++;
      });
      setData(newArr);
    }
  };


  const search = (key) => {
    if (key.length > 0) {
      setOnSearch(true);
      //setIsLoaded(false);
    }
    else {

      setOnSearch(false);
      //setIsLoaded(true);
      //search keys Input
    }
    //console.log('dataSearch: ', data);
    const items = rawData.filter(o => o.name.includes(key));
    createArray([...items], true);
    console.log('items: ', items);
  }



  return (
    <>  <PrimarySearchAppBar search={search} />


      <div align='center'>



        <TopContent />
        <Masonry fetchData={fetchData} data={data} loaded={loaded} onSearch={onSearch}/>
        {/* <ScrollComponent  /> */}
        {/* <MyInfiniteScroll searchKey={searchKey}/> */}

      </div>
    </>
  );
}

export default App;
