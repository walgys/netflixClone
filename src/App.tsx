import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Jumbotron from './components/Jumbotron';
import jumboData from './fixtures/jumbo.json';

function App() {
  const user = null;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <p>{item.title}</p>
            <p>{item.subTitle}</p>
            <p>{item.image}</p>
            <p>{item.alt}</p>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#111',
    minHeight: '100vh',
  },
}));

export default App;
