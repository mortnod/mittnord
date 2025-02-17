/** @jsxImportSource theme-ui */
import Modal from 'react-modal';

import { useTheme } from '../../constants/theme';

import LanguageSelector from './languageSelector/languageSelector';
import SettingsHeader from './settingsHeader/settingsHeader';
import ThemeSelector from './themeSelector/themeSelector';

Modal.setAppElement('#__next');

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function Settings({ isOpen, onClose }: Props) {
  const { theme } = useTheme();

  const styles = {
    overlay: {
      backgroundColor: 'rgb(0 0 0 / 25%)',
    },
    content: {
      color: theme?.colors?.heading,
      top: 0,
      bottom: 0,
      right: 0,
      left: 'unset',
      borderRadius: 'unset',
      backgroundColor: theme.colors.modalBg,
      border: 'none',
      boxShadow: theme.shadows[6],
      width: theme.sizes[80],
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      closeTimeoutMS={200}
      style={styles}
    >
      <SettingsHeader onClose={onClose} />
      <LanguageSelector />
      <ThemeSelector />
    </Modal>
  );
}

export default Settings;
