


/*export default function SignUp() {
 return <h1 className='sign-up'>LIKE & SUBSCRIBE</h1>;
}*/
import { render } from '@testing-library/react';
import React,{Component} from 'react'
import {GoogleLogin} from 'react-google-login'
import '../../App.css';
export class App extends Component{

responseGoogle=(response)=>{
  console.log(response);
  console.log(response.profileObj);
}

render(){
  return (
    <div>
      <GoogleLogin
      clientId="471204267746-hvb1ddv0np1gmiit7bb1cincfefgfqi4.apps.googleusercontent.com"
      buttonText="LOGIN WITH GOOGLE" 
      onSuccess={this.responseGoogle}
      onFailure={this.responseGoogle}
      cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}
}

export default App