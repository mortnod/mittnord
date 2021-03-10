/** @jsx jsx */
import { jsx } from 'theme-ui';

const RadioCardGroup = ({ legend, icon, children }) => {
  return (
    <fieldset sx={{ border: 'none', mb: 10 }}>
      <legend>
        <span
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 'md',
            fontWeight: '600',
            pb: '4',
          }}
        >
          {!!icon && (
            <div
              sx={{
                color: 'muted',
                fontSize: '18px',
                mr: 3,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {icon}
            </div>
          )}
          {legend}
        </span>
      </legend>
      <div sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        {children}
      </div>
    </fieldset>
  );
};

export default RadioCardGroup;
