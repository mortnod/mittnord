/** @jsx jsx */
import { jsx } from 'theme-ui';

import { withTranslation } from '../../i18n';
import Alert from '../alert/alert';
import ClientOnly from '../clientOnly/clientOnly';

const CurrentAlert = ({ t }) => {
  return (
    <ClientOnly>
      <Alert
        href={t('alert-href')}
        startAt={new Date('2021-03-06')}
        endAt={new Date('2022-02-01')}
        important
      >
        {t('alert-content')}
      </Alert>
    </ClientOnly>
  );
};

export default withTranslation('common')(CurrentAlert);
