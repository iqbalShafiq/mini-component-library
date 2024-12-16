import React from 'react';
import styled from 'styled-components';
import {COLORS} from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    'paddingLeft': 24,
    'fontSize': (14 / 16),
    'borderBottom': 1
  },
  large: {
    'paddingLeft': 36,
    'fontSize': (18 / 16),
    'borderBottom': 2
  }
}

const IconInput = (
  {
    label,
    icon,
    width = 250,
    size,
    placeholder,
  }
) => {
  const style = STYLES[size];
  const iconSize = size === 'small' ? 16 : 24;

  return (
    <Wrapper style={{
      '--border-bottom': style.borderBottom + 'px'
    }}>
      <VisuallyHidden>
        {label}
      </VisuallyHidden>
      <SearchIconWrapper htmlFor={label} style={{
        '--width': iconSize + 'px',
        '--height': iconSize + 'px'
      }}>
        <Icon id={icon} size={iconSize}/>
      </SearchIconWrapper>
      <IconInputElem
        id={label}
        placeholder={placeholder}
        width={width}
        style={{
          '--width': width + 'px',
          '--padding-left': style.paddingLeft + 'px',
          '--fontSize': style.fontSize + 'rem'
        }}
      />
    </Wrapper>
  )
};

const Wrapper = styled.div`
    position: relative;
    width: fit-content;
    border-bottom: var(--border-bottom) solid ${COLORS.black};

    &:hover {
        color: ${COLORS.black};
    }
`

const SearchIconWrapper = styled.label`
    display: inline-block;
    position: absolute;
    height: var(--height);
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
`

const IconInputElem = styled.input`
    width: var(--width);
    border: 0;
    padding: 8px 12px 8px var(--padding-left);
    font-size: var(--fontSize);

    &::placeholder {
        font-weight: 400;
    }

    &:hover::placeholder {
        color: ${COLORS.black};
        font-weight: 700;
    }
`

export default IconInput;
