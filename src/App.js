import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  return(
    <div className="img">
      <h1>kalvium Gallary</h1>
      <div className='image'>
        {imageData().map((alt)=>{
          return <img src={alt.img} alt=""/>
        })}
      </div>
    </div>
  )
}

export default App;
