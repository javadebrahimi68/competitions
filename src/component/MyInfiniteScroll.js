import { Button, CircularProgress, ImageList } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { element } from 'prop-types';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import useWindowDimensions from './dimentions';
import { ProductItem } from './ProductItem';

export const MyInfiniteScroll = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [images, setImages] = React.useState([]);
    const { cols } = useWindowDimensions();
    const [loaded, setIsLoaded] = React.useState(false);
    const UnsplashImage = ({ url, key }) => (
        <div className="image-item" key={key} >
            <img src={url} />
        </div>
    );
    const getData = async (page) => {
        const res = await axios.get(

        );
        await setData(res.data);
        await console.log(data);
    }
    const fetchImages = () => {


        setPage(parseInt(page) + 1);
        //console.log(page);
        axios

            .get(`http://xoosha.com/ws/1/test.php?offset=${page}`)

            .then(res => {

                setData([...data, ...res.data]);

                setIsLoaded(true);

            });

    };
    useEffect(() => {

        fetchImages();


    }, [])

    return (
        <div>
            <InfiniteScroll
                dataLength={data}
                next={() => fetchImages()}
                hasMore={true}
                loader={
                    <p><CircularProgress color="success" /></p>
                    // <img
                    //     src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
                    //     alt="loading"
                    // />
                }
            >
                <div className="image-grid" style={{ marginTop: "30px" }}>
                    <Box
                        ml={10} mr={10}
                        sx={{
                            // width: 500, height: 450, 
                            // overflowY: 'scroll' 

                        }}>



                        <ImageList variant="masonry"
                            cols={cols - 1}
                            gap={8}
                        >
                            {loaded ?
                                data.map((element, index) => (
                                    <ProductItem item={element} key={index} />
                                )) : ""}
                        </ImageList>
                    </Box>
                </div>
            </InfiniteScroll>
        



        </div>
    )
}
