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
  viewBox = '0 0 18 18',
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
        <rect x="1" y="1" width="6" height="6" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="11" y="1" width="6" height="6" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="11" y="11" width="6" height="6" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="1" y="11" width="6" height="6" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </g>
  </svg>
);

export default SVG;