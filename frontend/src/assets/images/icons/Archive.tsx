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
  width = '18',
//   width = '100%',
  className = '',
  viewBox = '0 0 18 16',
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
        <path d="M15.5455 5.51587V14.9447H2.45459V5.51587" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="1" y="1.8894" width="16" height="3.62648" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.54541 8.41709H10.4545" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </g>
  </svg>
);

export default SVG;