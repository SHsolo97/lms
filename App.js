import logo from './logo.svg';
import './App.css';
import SignUp from "./signup";
import LogIn from "./login";
import Initial from "./initial";
import Home from "./studentHome";

function App() {
  var userIn= true;
  if(!userIn){
  return (<div>
    <Initial />
      <SignUp />
      <LogIn />
    </div>
  );
}else {
  return(<Home />);
}

}

export default App;
