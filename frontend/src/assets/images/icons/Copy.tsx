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
        <rect x="6.59998" y="6.85181" width="10.4" height="10.4539" rx="2" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.4 11.6768H2.6C1.71634 11.6768 1 10.9567 1 10.0685V2.83119C1 1.94296 1.71634 1.2229 2.6 1.2229H9.8C10.6837 1.2229 11.4 1.94296 11.4 2.83119V3.63534" stroke="#606060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </g>
  </svg>
);

export default SVG;