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
  width = '21',
//   width = '100%',
  className = '',
  viewBox = '0 0 16 21',
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
        <path fillRule="evenodd" clipRule="evenodd" d="M9.75 1.63721H2.75C1.7835 1.63721 1 2.42477 1 3.39627V17.4688C1 18.4403 1.7835 19.2279 2.75 19.2279H13.25C14.2165 19.2279 15 18.4403 15 17.4688V6.91441L9.75 1.63721Z" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.75 1.63721V6.91441H15" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.5 11.3121H4.5" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.5 14.8301H4.5" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.25 7.79401H5.375H4.5" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </g>
  </svg>
);

export default SVG;