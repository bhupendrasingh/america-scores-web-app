import React, { Component } from 'react';
import '../MyAccount.css';
import icon from '../Assets/User-icon.png';
//import Api from '../api';

class MyAccountCompiler extends Component {	
render() {	
  
  function renData(constant, rdata) {
      console.log('calling rendata'); 
     return (<div><p><strong>{constant}</strong>{rdata}</p></div>)
  }; 

  const data = { name: "Alice", email: "alice@email.com", phone: 5036672134, password: "******"};
  
  return(		
    <div className="all">			
      <div className="Header">				
        <div className="Title">				
          <h1>My Account</h1>				
        </div>				
        <div className="PageIcon">				
          <img src={icon} alt="UserIcon" data-reactid=".0.0"/> 				
        </div>			
      </div>			
      <div className="dataMethod">
        { renData( "Name:", data.name) }
        { renData("Email:", data.email) }
        { renData( "Phone:", data.phone) }
        { renData( "Password:", data.password) }
      </div>		
    </div>		
  );	

}
};

 

export default MyAccountCompiler;
