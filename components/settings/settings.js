import Modal from 'react-modal';
import { useThemeUI } from 'theme-ui';

Modal.setAppElement('#__next');

function Settings({ isOpen, onClose }) {
  const { theme } = useThemeUI();

  const styles = {
    /* stylelint-disable-next-line selector-type-no-unknown */
    overlay: {
      backgroundColor: 'rgb(0 0 0 / 25%)',
    },
    content: {
      color: theme.colors.heading,
      top: 0,
      bottom: 0,
      right: 0,
      left: 'unset',
      borderRadius: 'unset',
      /* stylelint-disable-next-line value-keyword-case */
      backgroundColor: theme.colors.modalBg,
      border: 'none',
      boxShadow: theme.shadows[6],
      width: theme.sizes[80],
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={styles}>
      Demo content
    </Modal>
  );
}

export default Settings;
