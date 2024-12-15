import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const iconComponent = Icon({ id: icon, size: 16 });

  return (
    <Wrapper>
      <VisuallyHidden>
        {label}
      </VisuallyHidden>
      <SearchIconWrapper htmlFor={label}>
        {iconComponent}
      </SearchIconWrapper>
      <IconInputElem
        id={label}
        icon={iconComponent}
        placeholder={placeholder}
        width={width}
      />
    </Wrapper>
  )
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  border-bottom: 1px solid ${COLORS.black};

  &:hover {
    color: ${COLORS.black};
  }
`

const SearchIconWrapper = styled.label`
  display: inline-block;
  position: absolute;
  left: 2px;
  top: 7px;
`

const IconInputElem = styled.input`
  width: ${p => p.width}px;
  display: flex;
  border: 0;
  padding: 8px 12px 8px 26px;
  
  &::placeholder {
    font-weight: 400;
  }
  
  &:hover::placeholder {
    color: ${COLORS.black};
    font-weight: 700;
  }
`

export default IconInput;
