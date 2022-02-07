import { Jumbotron } from '../components';
import jumboData from '../fixtures/jumbo.json';

export default function JumbotronCont() {
  return (
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
  );
}
