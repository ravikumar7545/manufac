import winedata from './Wine-Data.json'
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import  './App.css';

const App  = ()=>{
  let minMagnesiumByCategory:any= {1:100,2:100,3:100};
  let filterAsh = winedata.map(ele=> ele.Ash)
  let filteredFlavanoids = winedata.map(ele=> ele.Flavanoids)


  winedata.forEach(ele=>{
    let magnesiumValue = ele.Magnesium;
    let alcoholCategory = ele.Alcohol;

    if(magnesiumValue<minMagnesiumByCategory[alcoholCategory]){
        minMagnesiumByCategory[alcoholCategory] = magnesiumValue;
    }
  })


 
  return <div>
  
    <LineChart value = {{filteredFlavanoids,filterAsh}}/>
    <BarChart value={minMagnesiumByCategory}/>
    
  </div>
}

export default App;