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
  viewBox = '0 0 18 21',
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
        <path fillRule="evenodd" clipRule="evenodd" d="M8.52944 1.01758L13.8565 6.43099C16.0109 8.6189 16.656 11.9103 15.4909 14.7701C14.3258 17.6299 11.58 19.4946 8.53415 19.4946C5.48834 19.4946 2.74253 17.6299 1.57741 14.7701C0.412287 11.9103 1.05738 8.6189 3.2118 6.43099L8.52944 1.01758Z" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </g>
  </svg>
);

export default SVG;