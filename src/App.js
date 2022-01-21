import React,{useState} from 'react';

const App = () => {
  const [location,getLocation] = useState('');
  const [res,setRes] = useState('');

  const changeHandler = e => {
    getLocation(e.target.value);
  }
  const submitHandler = e => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response =>response.json()
    ).then(
      data => {
        const kelvin = data.main.temp;
        const celcius = kelvin - 273.15;
        setRes("Temperature at "+location+" \n" +Math.round(celcius)+"C");
      }
    ).catch(error => console.log(error))
    getLocation('');
  }
  return(
    <div>
      <center>
        <h1> Weather Application</h1>
        <form onSubmit={submitHandler}>
          <input type="text" name="location" value={location} onChange={changeHandler} /> <br/><br/>
          <input type="submit" value="Get Temperature" />
        </form>
        <h1> {res} </h1>
      </center>
    </div>
  )
}

export default App;
