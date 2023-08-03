import React,{useState} from "react";
import "./Header.css";
import Hero from "./assets/dweep io 1.png"
function Header() {

 let[email,setemail]=useState("");
 let[info,setinfo]=useState(false)
 

 let handleChange=((e)=>{
  e.preventDefault();
  console.log(e.target.value);
  setemail(e.target.value);
 })

 let isvalid=((e)=>{
  //eslint-disable-next-line
  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  let test=regex.test(email);
  if(test){
    setinfo(true);
  }
  else{
    alert('Please provide a valid email')
    setinfo(false);
  }
 })
  return (
    <>
     <p className="fixedline">Free - No Spam - No Data Sharing</p>
      <div id="box1">
        <div id="first_box" className="box_first">
          <p id="first_line">
            An inspiring design delivered to your inbox every morning
          </p>
          <p id="para">
            Our team scouts the internet for the best designs, illustrations and
            art and delivers a truly inspiring one every day to your inbox
          </p>

          {info? <p id="thankyou">Thank You!</p>:<><p id="paragraph">Show me how it looks</p>
          <input type="email" id="searchbar" name="email" value={email} placeholder="Your e-mail address" onChange={handleChange}/>
          <button id="button" onClick={isvalid}>Register Now</button> </>}
        </div>



        <div id="image" className="box_first">
          <img id="img1" src={Hero} alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
