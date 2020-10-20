/** @jsx jsx */
import { jsx } from 'theme-ui';

const RadioCardGroup = ({ legend, children }) => {
  return (
    <fieldset sx={{ border: 'none', mb: '8' }}>
      <legend sx={{ fontSize: 'md', fontWeight: '500', mb: '4' }}>
        {legend}
      </legend>
      <div sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        {children}
      </div>
    </fieldset>
  );
};

export default RadioCardGroup;
