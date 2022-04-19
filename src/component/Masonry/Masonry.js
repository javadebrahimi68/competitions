import { CircularProgress, Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ProductItem } from '../ProductItem';

export const Masonry = ({ fetchData, data, loaded, onSearch, mySkelton }) => {


    return (
        <>
            <InfiniteScroll
                dataLength={data}
                next={() => fetchData()}
                hasMore={true}
                loader={
                    <>
                        <p style={
                            onSearch ? { display: 'none' } :
                                { display: '' }
                        } >
                            <CircularProgress color="success" />
                            {/* {mySkelton} */}
                        </p>
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

                    {loaded
                        ? data.map((item) =>

                            <div style={{ width: '235px' }}>
                                {item.map((element, index) =>
                                    <>
                                        <ProductItem item={element} key={index} />

                                    </>
                                )}
                            </div>



                        )
                        : mySkelton
                    }
                </Box>
            </InfiniteScroll>
            {/* </div> */}

        </>
    );
}
