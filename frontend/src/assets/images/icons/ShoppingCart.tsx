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
  width = '16',
//   width = '100%',
  className = '',
  viewBox = '0 0 16 16',
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
        <path fillRule="evenodd" clipRule="evenodd" d="M7 15C7.55228 15 8 14.5523 8 14C8 13.4477 7.55228 13 7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15Z" stroke="#999999" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M13 15C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13C12.4477 13 12 13.4477 12 14C12 14.5523 12.4477 15 13 15Z" stroke="#999999" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 1H3.54545L5.25091 9.92645C5.37101 10.5599 5.90724 11.0121 6.52364 10.9998H12.7091C13.3255 11.0121 13.8617 10.5599 13.9818 9.92645L15 4.33325H4.18182" stroke="#999999" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </g>
  </svg>
);

export default SVG;