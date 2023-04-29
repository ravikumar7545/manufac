import winedata from './Wine-Data.json'
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import  './App.css';

const App  = ()=>{
  let filterAsh = winedata.map(ele=> ele.Ash)
  let filteredFlavanoids = winedata.map(ele=> ele.Flavanoids)
  let filteredMagnesium = winedata.map(ele=> ele.Magnesium)
  let filteredAlcohol = winedata.map(ele=> ele.Alcohol)


  console.log(filterAsh,filteredFlavanoids)

 
  return <div>
  
    <LineChart value = {{filteredFlavanoids,filterAsh}}/>
    <BarChart value={{filteredMagnesium,filteredAlcohol}}/>
    
  </div>
}

export default App;