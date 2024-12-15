/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';

const END_RADIUS = {
  full: {
    "--endRadius": '4px',
  },
  part: {
    "--endRadius": "4px 0 0 4px"
  }
}

const SIZES = {
  small: {
    '--height': '8px',
    '--padding': '0',
  },
  medium: {
    '--height': '12px',
    '--padding': '0',
  },
  large: {
    '--height': '24px',
    '--padding': '4px',
  }
}

const ProgressBar = ({value, size}) => {
  const progressState = value === 100 ? 'full' : 'part';
  const endRadiusStyle = END_RADIUS[progressState];
  const sizeStyle = SIZES[size];

  return (
    <Wrapper style={sizeStyle}>
      <Progress style={endRadiusStyle} size={size}>{value}</Progress>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  border-radius: 8px;
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
`

const Progress = styled.div`
  width: ${p => p.children}%;
  height: 100%;
  color: transparent;
  border-radius: var(--endRadius);
  background-color: cornflowerblue;
`

export default ProgressBar;
