
import './App.css';
import PrimarySearchAppBar from './component/MyAppBar';
import { ProductList } from './component/ProductList';
import { TopContent } from './component/TopContent';
import {rawData} from './rawData'

function App() {

  return (
    <>  <PrimarySearchAppBar />
    <div align='center'>
   
    
      <TopContent />
      <ProductList data={rawData}/>
    </div>
    </>
  );
}

export default App;
