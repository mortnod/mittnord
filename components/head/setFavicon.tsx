import { useTheme } from '../../constants/theme';
import useHasMounted from '../../utils/useHasMounted';

const setFavicon = () => {
  const { colorMode } = useTheme(); // eslint-disable-line react-hooks/rules-of-hooks
  const hasMounted = useHasMounted(); // eslint-disable-line react-hooks/rules-of-hooks

  if (!hasMounted) return;

  const favicon = document.getElementById('favicon') as HTMLLinkElement;

  if (!favicon) return;

  switch (colorMode) {
    case undefined:
    case 'artic':
      favicon.href = '/favicon.ico';
      break;
    case 'aurora':
      favicon.href = '/images/favicon-aurora.ico';
      break;
    case 'dawn':
      favicon.href = '/images/favicon-dawn.ico';
      break;
    case 'dusk':
      favicon.href = '/images/favicon-dusk.ico';
      break;
    default:
      favicon.href = '/favicon.ico';
      break;
  }
};

export default setFavicon;
