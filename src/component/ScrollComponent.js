import React, { useState, useRef, useEffect, useCallback } from "react";
import useFetch from "./hooks/useFetch";
import { ProductItem } from "./ProductItem";
import { Box, ImageList, CircularProgress, Alert } from '@mui/material';
import useWindowDimensions from "./dimentions";
function ScrollComponent( ) {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const { loading, error, list } = useFetch(query, page);

    const { cols } = useWindowDimensions();
    const loader = useRef(null);
   
    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
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
                        {list.map((element, i) => (
                            //   <div key={i}>{element}</div>
                            <ProductItem key={i} item={element} />

                        ))}
                    </ImageList>
                </Box>
            </div>
            {loading && <CircularProgress color="success" />}
            {error && <Alert severity="error">This is an error alert — check it out!</Alert>}
            <div ref={loader} />
        </div>
    );
}

export default ScrollComponent;
