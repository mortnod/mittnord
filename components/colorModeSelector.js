/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';

import { withTranslation } from '../i18n';
import { colorModes } from '../constants/theme';

const ColorModeSelector = ({ t }) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <select value={colorMode} onChange={(e) => setColorMode(e.target.value)}>
      {colorModes.map((mode) => (
        <option value={mode} key={mode}>
          {t(mode)}
        </option>
      ))}
    </select>
  );
};

export default withTranslation('common')(ColorModeSelector);
