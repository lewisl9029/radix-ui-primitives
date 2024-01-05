import * as React from 'react';
import { css } from 'testing/stitches.config';

const contentClass = css({
  display: 'inline-block',
  boxSizing: 'border-box',
  minWidth: 130,
  backgroundColor: '$white',
  border: '1px solid $gray100',
  borderRadius: 6,
  padding: 5,
  boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.1)',
  fontFamily: 'apple-system, BlinkMacSystemFont, helvetica, arial, sans-serif',
  fontSize: 13,
  '&:focus-within': {
    borderColor: '$black',
  },
});

const itemStyles: any = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  lineHeight: '1',
  cursor: 'default',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  height: 25,
  padding: '0 10px',
  color: '$black',
  borderRadius: 3,
};

const labelClass = css({
  ...itemStyles,
  color: '$gray100',
});

const itemClass = css({
  ...itemStyles,
  outline: 'none',

  '&[data-highlighted]': {
    backgroundColor: '$black',
    color: 'white',
  },

  '&[data-disabled]': {
    color: '$gray100',
  },
});

const subTriggerClass = css(itemClass, {
  '&:not([data-highlighted])[data-state="open"]': {
    backgroundColor: '$gray100',
    color: '$black',
  },
});

const separatorClass = css({
  height: 1,
  margin: '5px 10px',
  backgroundColor: '$gray100',
});

export const TickIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="12"
    height="12"
    fill="none"
    stroke="currentcolor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="3"
  >
    <path d="M2 20 L12 28 30 4" />
  </svg>
);

export const classes = {
  contentClass,
  labelClass,
  itemClass,
  separatorClass,
  subTriggerClass,
};
