import './App.css';
import Button from './button.js'

function App() {
  

  return (
    
    <div className="App">
      <img src='https://media.istockphoto.com/id/609829370/photo/milk-carton-packs-isolated-on-white-milk-boxes.jpg?s=2048x2048&w=is&k=20&c=gf7wczlGlCWH2VgdSSyQNWayalzcQhQ7EawPMYy0veY=' className='pic' alt='Bread Pack'/>
      <p className='timer'>&#128344; 8 MIN</p>
      <h4>Healthy fresh toned milk</h4>
      <p className='quantity'>500ml</p>
      <div className='footer'>
        <p className='amount'>₹30</p>
        <Button  />
       
      </div>

     
    </div>
    
  );

  

}

export default App;
