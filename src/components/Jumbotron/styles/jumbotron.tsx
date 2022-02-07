import { ReactNode } from 'react';
import styled from 'styled-components/macro';

interface InnerProps {
  direction: string;
}

export interface PaneProps {
  width: string;
  padding?: string;
}

export interface DivProps {
  zIndex?: number;
  width?: string;
  height?: string;
  display?: string;
  top?: string;
  left?: string;
  position?: string;
  maxHeight?: string;
  maxWidth?: string;
  transform?: string;
}

export const Outer = styled.div`
  padding: 70px 45px;
  color: #fff;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div<InnerProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.div``;

export const Pane = styled.div<PaneProps>`
  width: ${({ width }) => width};
  padding: ${({ padding }) => !!padding && padding};

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Div = styled.div<DivProps>`
  z-index: ${({ zIndex }) => (!!zIndex ? zIndex : 0)};
  width: ${({ width }) => (!!width ? width : '100%')};
  height: ${({ height }) => (!!height ? height : '100%')};
  display: ${({ display }) => (!!display ? display : 'block')};
  top: ${({ top }) => (!!top ? top : '0px')};
  left: ${({ left }) => (!!left ? left : '0px')};
  position: ${({ position }) => (!!position ? position : 'initial')};
  max-height: ${({ maxHeight }) => (!!maxHeight ? maxHeight : '100%')};
  max-width: ${({ maxWidth }) => (!!maxWidth ? maxWidth : '100%')};
  transform: ${({ transform }) => !!transform && transform}; ;
`;

export const Video = styled.video`
  width: 100%;
  height: auto;
`;
