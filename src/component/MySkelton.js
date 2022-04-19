import { Skeleton } from '@mui/material';
export const MySkelton = ({ cols }) => {
    const it = <div style={{
        width: '235px'
    }}  >
        <div>
       
            <Skeleton   height='400px' sx={{marginLeft:'10px', marginRight:'10px'}}/>
             <Skeleton  height='60px' />
          
        </div>
        {/* <div>
        <Skeleton   height='400px' sx={{marginLeft:'10px', marginRight:'10px'}}/>
        <Skeleton  height='60px' />
        </div> */}
    </div>
    var mio = Array.from({ length: cols }, () => (it))
    return (
        <div style={{
            display: 'inline-flex',
            justifyContent: 'space-around',
            width:'100%',
            //  , height: 450, 
            // overflowY: 'scroll' 

        }}>
            {mio}
        </div>
    )
};