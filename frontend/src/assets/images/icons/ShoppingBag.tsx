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
  fill = 'none',
  width = '18',
//   width = '100%',
  className = '',
  viewBox = '0 0 18 20',
}) => (
  <svg
    fill={fill}
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g id="Camada_2" data-name="Camada 2">
      <g id="Layer_2" data-name="Layer 2">
        <path opacity="0.737212" fillRule="evenodd" clipRule="evenodd" d="M3.66667 1L1 4.6V17.2C1 18.1941 1.79594 19 2.77778 19H15.2222C16.2041 19 17 18.1941 17 17.2V4.6L14.3333 1H3.66667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path opacity="0.737212" d="M1 5.5H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path opacity="0.737212" d="M13 9C13 10.6569 11.433 12 9.5 12C7.567 12 6 10.6569 6 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </g>
  </svg>
);

export default SVG;