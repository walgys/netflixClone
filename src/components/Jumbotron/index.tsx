import { ChipProps, makeStyles } from '@material-ui/core';
import React, { ReactChild, ReactNode } from 'react';
import {
  Container,
  Inner,
  Outer,
  Pane,
  Title,
  Subtitle,
  Image,
  Video,
  Div,
  DivProps,
  PaneProps,
} from './styles/jumbotron';

interface IJumboComposition {
  Container: React.FC<ReactNode>;
  Pane: React.FC<PaneProps>;
  Title: React.FC<ReactNode>;
  Subtitle: React.FC<ReactNode>;
  Image: React.FC<{ src: string; alt: string }>;
  VideoImgComp: React.FC<{
    vidSrc: string;
    imgSrc: string;
    elementType: string;
  }>;
}

const Jumbotron: React.FC<{ direction: string }> & IJumboComposition = ({
  children,
  direction = 'row',
  ...restProps
}) => {
  return (
    <Outer>
      <Inner direction={direction}>{children}</Inner>
    </Outer>
  );
};

const WatchOnTv = {
  zIndex: 0,
  width: '100%',
  height: '100%',
  maxWidth: '73%',
  maxHeight: '54%',
  position: 'absolute',
  top: '46%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};

const WatchOnDevice = {
  zIndex: 0,
  width: '100%',
  height: '100%',
  maxWidth: '65%',
  maxHeight: '40%',
  position: 'absolute',
  top: '46%',
  left: '50%',
  transform: 'translate(-50%,-90%)',
};

function getType(elementType: string) {
  if (elementType === 'WatchOnTv') return WatchOnTv;
  if (elementType === 'WatchOnDevice') return WatchOnDevice;
  return {};
}

Jumbotron.Container = ({ children }) => {
  return <Container>{children}</Container>;
};

Jumbotron.Pane = ({ children, ...rest }) => {
  return <Pane {...rest}>{children}</Pane>;
};

Jumbotron.Title = ({ children }) => {
  return <Title>{children}</Title>;
};

Jumbotron.Subtitle = ({ children }) => {
  return <Subtitle>{children}</Subtitle>;
};

Jumbotron.Image = ({ src, alt }) => {
  return <Image src={src} alt={alt} />;
};

Jumbotron.VideoImgComp = ({ vidSrc, imgSrc, elementType }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Image
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '100%',
          height: 'auto',
        }}
        src={imgSrc}
      />
      {
        <Div {...getType(elementType)}>
          <Video src={vidSrc} autoPlay playsInline muted loop />
        </Div>
      }
    </div>
  );
};

export default Jumbotron;
