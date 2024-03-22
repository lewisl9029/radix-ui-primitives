import * as React from 'react';
import { css } from 'testing/stitches.config';
import { Label } from '@radix-ui/react-label';
import { RECOMMENDED_CSS__LABEL__ROOT } from 'testing/label';

export default { title: 'Components/Label' };

export const Styled = () => <Label className={rootClass()}>Label</Label>;

export const WithControl = () => {
  return (
    <>
      <h1>Wrapping control</h1>
      <Label>
        <Control className={controlClass()} /> Label
      </Label>

      <h1>Referencing control</h1>
      <Control id="control" className={controlClass()} />
      <Label htmlFor="control">Label</Label>
    </>
  );
};

export const WithInputNumber = (props: any) => {
  return (
    <Label>
      <span>Name:</span>
      <input type="number" />
    </Label>
  );
};

const Control = (props: any) => {
  return (
    <button className={controlClass()} {...props} onClick={() => window.alert('clicked')}>
      Control
    </button>
  );
};

const rootClass = css({
  ...RECOMMENDED_CSS__LABEL__ROOT,
  display: 'inline-block',
  border: '1px solid gainsboro',
  padding: 10,
});

const controlClass = css({
  display: 'inline-flex',
  border: '1px solid gainsboro',
  padding: 10,
  verticalAlign: 'middle',
  margin: '0 10px',

  '&:hover': {
    backgroundColor: 'red',
  },
});
