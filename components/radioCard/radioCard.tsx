/** @jsxImportSource theme-ui */

import gradientAnimation from '../../utils/gradientAnimation';
import isDarkTheme from '../../utils/isDarkTheme';

import Checkmark from './checkmark';

type Props = {
  name: string;
  id: string;
  disabled?: boolean;
  labelText: string;
  checked?: boolean;
  onChange: () => void;
  children?: React.ReactNode;
};

const RadioCard = ({
  name,
  id,
  disabled,
  labelText,
  checked,
  onChange,
  children,
}: Props) => {
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

      <label
        htmlFor={id}
        sx={{
          bg: 'transparent',
          display: 'block',
          p: '1px',
          cursor: 'pointer',

          '.focus-visible + &': {
            p: '4px',
            bg: 'outline',
          },

          // @ts-expect-error It totally works, but something is wrong with the typing
          'input:checked + &': {
            ...gradientAnimation(),
          },
        }}
      >
        {children}
        <div
          sx={{
            p: 3,
            bg: isDarkTheme() ? 'background' : 'modalBg',
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

              // @ts-expect-error It totally works, but something is wrong with the typing
              'input:checked + label &': {
                ...gradientAnimation({
                  variant: 'background',
                  size: 'large',
                }),
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
