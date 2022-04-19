
import * as React from 'react';

import Typography from '@mui/material/Typography';

import { useEffect, useState } from 'react';
import './App.css';
import PrimarySearchAppBar from './component/MyAppBar';

import { MySkelton } from './component/MySkelton';
import { TopContent } from './component/TopContent';
import { rawData1 } from './rawData';
import ScrollComponent from './component/ScrollComponent';

import { MyInfiniteScroll } from './component/MyInfiniteScroll';
import { Masonry } from './component/Masonry/Masonry';
import axios from 'axios';
import useWindowDimensions from './component/dimentions';



const App = () => {


  const [searchKey, setSearchKey] = useState('');

  const [rawData, setRawData] = useState([]);
  const [page, setPage] = useState(1);
  const [onSearch, setOnSearch] = useState(false);

  const { cols } = useWindowDimensions();
  const [data, setData] = useState(Array.from({ length: cols }, () => ([])));
  const [loaded, setIsLoaded] = React.useState(false);



  const fetchData = async () => {

    //console.log(page);
    if (!onSearch) {
      //console.log('fetch data axios');

      await axios.get(`http://xoosha.com/ws/1/test.php?offset=${page}`)
        .then(res => {
          setIsLoaded(true);
          createArray([...res.data]);
          setRawData([...res.data]);

        });

      setPage(parseInt(page) + 1);
    }
  };

  const createArray = async (fechdata) => {
    var i = 1;
    var temp = [...data];
    if (!onSearch) {

      fechdata.forEach(element => {
        temp[i % cols] = [...temp[i % cols], element];
        i++;


      });
      setData(temp);
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


  useEffect(() => {
    //console.log('ss');
    fetchData();
  }, []);

  return (
    <>  <PrimarySearchAppBar search={search} />
      <div align='center'>
        <TopContent />
        <Masonry fetchData={fetchData} data={data} loaded={loaded} onSearch={onSearch} mySkelton={<MySkelton cols={cols} />} />
        {/* <ScrollComponent  /> */}
        {/* <MyInfiniteScroll searchKey={searchKey}/> */}

      </div>
    </>
  );
}

export default App;
