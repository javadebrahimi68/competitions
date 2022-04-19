import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

import { rawData1 } from '../../rawData';
import useWindowDimensions from '../dimentions';
import { ProductItem } from '../ProductItem';

export const Masonry = ({ fetchData, data, loaded, onSearch }) => {

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <InfiniteScroll
                dataLength={data}
                next={() => fetchData()}
                hasMore={true}
                loader={
                    <>
                        <p style={
                            onSearch? {display:'none'}:
                            {display:''}
                            } ><CircularProgress color="success" /></p>
                    </>
                }
            >
                {/* <div className="image-grid" style={{ marginTop: "30px" ,display:'flex'}}> */}
                <Box className='image-grid'
                    // ml={10} mr={10}
                    sx={{
                        display: 'inline-flex',
                        justifyContent: 'space-around',
                        width: '100%'
                        //  , height: 450, 
                        // overflowY: 'scroll' 

                    }}>
                    {data.map((item) =>

                        <div style={{ width: '235px' }}>
                            {item.map((element, index) =>
                                <>
                                    {
                                        loaded ?

                                            <ProductItem item={element} key={index} />

                                            : ''
                                    }

                                </>
                            )}
                        </div>



                    )}
                </Box>
            </InfiniteScroll>
            {/* </div> */}

        </>
    );
}
