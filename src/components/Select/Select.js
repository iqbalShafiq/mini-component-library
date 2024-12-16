import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <SelectElem value={value} onChange={onChange}>
        {children}
      </SelectElem>
      <IconWrapper>
        <Icon id="chevron-down" size={24}/>
      </IconWrapper>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
    display: inline-block;
    position: relative;
    color: ${COLORS.gray700};

    &:hover {
        color: ${COLORS.black};
    }
`

const SelectElem = styled.select`
    padding: 8px 40px 8px 8px;
    border: 0;
    color: inherit;
    background-color: ${COLORS.transparentGray15};
    border-radius: 8px;
    appearance: none;
`

const IconWrapper = styled.div`
    height: 24px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
    pointer-events: none;
`

export default Select;
