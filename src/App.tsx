import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Jumbotron from './components/Jumbotron';
import jumboData from './fixtures/jumbo.json';

function App() {
  const user = null;

  return (
    <div>
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane width={'52%'} padding={'0 3rem 0 0'}>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane width="48%">
              {item.video ? (
                <Jumbotron.VideoImgComp
                  vidSrc={item.video}
                  imgSrc={item.image}
                  elementType={item.type}
                />
              ) : (
                <Jumbotron.Image src={item.image} alt={item.alt} />
              )}
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
}

export default App;
