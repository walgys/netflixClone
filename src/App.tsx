import { Counter } from './features/counter/Counter';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Login from './pages/Login';
import Home from './pages/Home';
import Paypal from './pages/Paypal';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';

function App() {
  const user = null;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        {
          user ? <Login /> : <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/checkout" element={<Paypal/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/signup" element={<SignUp/>} />
          </Routes>
        }
        </Router>
    </div>
  );
}

const useStyles = makeStyles(theme =>({
  root: {
    backgroundColor: "#111",
    minHeight: "100vh"
  }
}));

export default App;
