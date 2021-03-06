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
  viewBox = '0 0 18 19',
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
        <rect x="1" y="1.17871" width="16" height="16.0681" rx="2" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 6.53471H17" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.33336 17.2467V6.53467" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </g>
  </svg>
);

export default SVG;