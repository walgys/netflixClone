import { makeStyles } from '@material-ui/core';
import { ReactNode } from 'react';
import { Container, Inner } from './styles/jumbotron';

interface IJumboComposition {
  Container: React.FC<ReactNode>;
}

const Jumbotron: React.FC<{ direction: string }> & IJumboComposition = ({
  children,
  direction = 'row',
  ...restProps
}) => {
  return <Inner direction={direction}>{children}</Inner>;
};

Jumbotron.Container = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Jumbotron;
