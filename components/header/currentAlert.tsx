/** @jsxImportSource theme-ui */
import FadeIn from '../../utils/fadeIn';
import Alert from '../alert/alert';
import ClientOnly from '../clientOnly/clientOnly';

const CurrentAlert = () => {
  return (
    <ClientOnly>
      <FadeIn>
        <Alert
          href="alert-href"
          startAt={new Date('2021-03-06')}
          endAt={new Date('2022-02-01')}
          important
        >
          alert-content
        </Alert>
      </FadeIn>
    </ClientOnly>
  );
};

export default CurrentAlert;
