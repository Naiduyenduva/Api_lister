import './App.css'
import API_DATA from './assets/api.js';

function App() {

  return (
    <>
      <div>
        <h1>API LISTER</h1>
        <div className='search'>
        <input type='text'/>
        <button>Search</button>
        </div>
        {API_DATA.map((item)=> (
          <div className='border'>
            <div className='division'>
            <img src={item.api_image} alt="image" className='image' />
            </div>
            <div className='text'>
            <h1> Api Name : {item.api_name}</h1>
            <h3>Description : {item.api_description}</h3>
            <h2>
            <a href={item.api_link} target="_blank">API_LINK</a>
            </h2>
            </div>
          </div>
          ))
        }
      </div>
    </>
  )
}

export default App;

