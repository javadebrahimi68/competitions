import React, { useState, useRef, useEffect, useCallback } from "react";
import useFetch from "./hooks/useFetch";
import { ProductItem } from "./ProductItem";
import { Box, ImageList, CircularProgress, Alert, Typography } from '@mui/material';
import useWindowDimensions from "./dimentions";
import { Masonry } from './Masonry/Masonry';
import axios from "axios";
export const ScrollComponent = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const getData = async () => {
        await setLoading(true);
        const res = await axios.get(
            `http://xoosha.com/ws/1/test.php?offset=${page}`
        );
      
        await setLoading(false);
        // setLoading(loading);
        // setError(error);
        setData(res.data);
    }

    const { cols } = useWindowDimensions();
    const loader = useRef(null);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);

            console.log('page: ', page);
            getData();
        }
    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);
    const container = {
        display: 'grid',
        gridGap: '2rem',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(12, 150px)',
        margin: '0 auto',
        maxWidth: '90%',
        padding: '3rem 0'
    };
    return (
        <div className="App">
            {/* <h1>Infinite Scroll</h1>
      <h2>with IntersectionObserver</h2>
      <input type="text" value={query} onChange={handleChange} /> */}
            <div>
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
                        {data.map((element, i) => (
                            <>


                                <ProductItem key={i} ind={i} item={element} />

                            </>
                        ))}

                    </ImageList>
                </Box>
            </div>
            {loading ? <><CircularProgress color="success" /> </> : ''}
            {error && <Alert severity="error">This is an error alert — check it out!</Alert>}
            <div ref={loader} />
        </div>
    );
}

export default ScrollComponent;
