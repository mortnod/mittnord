/** @jsx jsx */
import { jsx } from 'theme-ui';

import Checkmark from './checkmark';
import { gradientAnimation } from '../../utils/gradientAnimation';

const RadioCard = ({ name, id, disabled, labelText, checked, onChange }) => {
  return (
    <div>
      <input
        type="radio"
        name={name}
        id={id}
        disabled={disabled}
        sx={{
          opacity: 0,
          position: 'absolute',
        }}
        checked={checked}
        onChange={onChange}
      />

      <label /* eslint-disable-line jsx-a11y/label-has-associated-control */
        htmlFor={id}
        disabled={disabled}
        sx={{
          bg: 'transparent',
          display: 'block',
          p: '1px',
          cursor: 'pointer',

          '.focus-visible + &': {
            p: '4px',
            bg: 'outline',
          },
          'input:checked + &': {
            ...gradientAnimation(),
          },
        }}
      >
        <div
          sx={{
            p: 3,
            bg: 'radioCard',
            color: 'heading',
            fontWeight: '500',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '4',

            '.focus-visible + label &': {
              p: '9px', // 12px padding normally - 3px extra padding added to parent div
            },
          }}
        >
          <div sx={{ fontSize: 'sm' }}>{labelText}</div>
          <div
            sx={{
              height: '5',
              width: '5',
              borderRadius: 'full',
              border: '1px solid',
              borderColor: 'border2',
              boxShadow: 'inner',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'xs',

              'input:checked + label &': {
                ...gradientAnimation('background', 'large'),
                boxShadow: 'unset',
                border: 'none',
              },
            }}
          >
            <Checkmark checked={checked} />
          </div>
        </div>
      </label>
    </div>
  );
};

export default RadioCard;
