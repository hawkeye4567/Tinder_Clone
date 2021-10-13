import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TinderCards from "./TinderCard";
import { SwipeButtons } from "./SwipeButtons";
import Chats from "./Chats";
import Chatscreen from "./Chatscreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backbutton="/chat" />
            <Chatscreen />
          </Route>
          <Route path="/" exact>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route path="/chat">
            <Header backbutton="/" />
            <Chats />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
