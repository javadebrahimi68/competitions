
import './App.css';
import PrimarySearchAppBar from './component/MyAppBar';
import { ProductHover } from './component/ProductHover';
import { ProductList } from './component/ProductList';
import { TopContent } from './component/TopContent';
import {rawData} from './rawData'

function App() {

  return (
    <>  <PrimarySearchAppBar />
    <div align='center'>
   
    
      <TopContent />
      <ProductHover/>
      <ProductList data={rawData}/>
     
    </div>
    </>
  );
}

export default App;
