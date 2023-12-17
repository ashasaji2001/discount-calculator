import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const[amount,setAmount]=useState(0)
  const[discount,setDiscount]=useState(0)
  const[discountAmount,setdiscountamount]=useState(0)
  console.log(amount,discount);
  const calculate =(e)=>{
    const output = amount -(amount*discount)/100;
    console.log(output);
    setdiscountamount(output)
  }
  const reset=(e)=>{
    setAmount(0)
    setDiscount(0)
    setdiscountamount(0)
  }
  return (
    <div className="App">
   <div className="row">
    <div className="col-6">
      <div className='img'>

      
<img src="https://i.pinimg.com/originals/7d/95/56/7d95564c160833d13873f91ef36eb39d.gif" style={{width:"650px",height:"500px"}} alt=""/>
</div>
    </div>
    <div className="col-6 p-3">
      <h1 style={{color:"white",margin:"30px",textAlign:"center"}}>Discount Calculator</h1>
  <div className="form">
    <form >
      <div className='input'>
        <br />
        <br />
      <TextField id="outlined-basic" label="Amount" className='bg-outline-white' color='primary' value={amount||""} onChange={(e)=>setAmount(e.target.value)} variant="outlined" />
      <br />
<TextField id="outlined-basic" label="Discount" value={discount||""} onChange={(e)=>setDiscount(e.target.value)}  variant="outlined" />
<br />


      </div>
      <div className="button">
<br />
<Button variant="contained" onClick={e=>calculate(e)}  >CALCULATE </Button>
<Button variant="contained" className='btn-primary' onClick={e=>reset(e)}>RESET</Button>
</div>
   
    </form>
    <div className='total' style={{width:"450px",marginLeft:"150px",marginTop:"50px"}}>
  <h2> </h2>
  <p>Discount:{discountAmount}</p>
</div>
  
  </div>
    </div>
   </div>
    </div>
  );
}

export default App;
