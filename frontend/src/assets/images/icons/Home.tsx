import React, { CSSProperties } from 'react';

type Props = {
  style?: CSSProperties;
  fill?: string;
  width?: string | number;
  className?: string;
  viewBox?: string;
};

const SVG: React.FC<Props> = ({
  style = {},
  width = '16',
//   width = '100%',
  className = '',
  viewBox = '0 0 16 18',
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
  >
    <g id="Camada_2" data-name="Camada 2">
      <g id="Layer_2" data-name="Layer 2">
      <path fillRule="evenodd" clipRule="evenodd" d="M1 6.44444L8 1L15 6.44444V15C15 15.8591 14.3036 16.5556 13.4444 16.5556H2.55556C1.69645 16.5556 1 15.8591 1 15V6.44444Z" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.66663 16.5556V8.77783H10.3333V16.5556" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </g>
  </svg>
);

export default SVG;