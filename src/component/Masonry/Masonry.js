import React from 'react'
import './man.css'
import { rawData1 } from '../../rawData';
export const Masonry = () => {
    const cols = 3;
    var arr = Array.apply('item', Array(cols));
    const item = () => {
        var i = 0;
        rawData1.map(element => {
            const item=  (<div style={{ backgroundColor: 'red', width: '235px', height: '100px' }}></div>)
           arr[i / cols]=[...arr[i / cols],item];
               


        })
        console.log(arr);
    }
    return (
        <>{console.log(arr)}

            <div style={{ display: 'inline-flex' }}>
               {item()}
            </div>
        </>
    );
}
