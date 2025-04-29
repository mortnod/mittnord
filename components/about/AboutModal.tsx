/** @jsxImportSource theme-ui */
import { useState } from 'react';
import Modal from 'react-modal';
import { ThemeUIStyleObject } from 'theme-ui';

import { useTheme } from '../../constants/theme';
import { useI18nContext } from '../../src/i18n/i18n-react';
import isDarkTheme from '../../utils/isDarkTheme';
import SettingsButton from '../footer/settingsButton';
import IconButton from '../iconButton/iconButton';
import Envelope from '../icons/envelope';
import InfoCircle from '../icons/infoCircle';
import QuestionMarkCircle from '../icons/questionMarkCircle';
import Times from '../icons/times';
import User from '../icons/user';

Modal.setAppElement('#__next');

const P = ({
  children,
  sxx,
}: {
  children: React.ReactNode;
  sxx?: ThemeUIStyleObject;
}) => <p sx={{ color: 'icon', lineHeight: '1.375', ...sxx }}>{children}</p>;

const Heading = ({
  children,
  sxx,
}: {
  children: React.ReactNode;
  sxx?: ThemeUIStyleObject;
}) => (
  <h3 sx={{ mb: 1, fontWeight: 'bold', color: 'heading', ...sxx }}>
    {children}
  </h3>
);

const Link = ({
  children,
  sxx,
  id,
  href,
}: {
  children: React.ReactNode;
  sxx?: ThemeUIStyleObject;
  id?: string;
  href?: string;
}) => (
  <a
    id={id}
    href={href}
    sx={{
      color: 'icon',
      fontWeight: 'bold',
      textDecoration: 'none',
      ':hover': { textDecoration: 'underline' },
      ...sxx,
    }}
  >
    {children}
  </a>
);

function About() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { LL } = useI18nContext();

  const isDark = isDarkTheme();

  const styles = {
    overlay: {
      backgroundColor: 'rgb(0 0 0 / 25%)',
    },
    content: {
      color: theme.colors.heading,
      backgroundColor: theme.colors.modalBg,
      border: 'none',
      marginInline: 'auto',
      maxWidth: '34rem',
      borderRadius: theme.radii[3],
      boxShadow: theme.shadows[6],
      height: 'auto',
      maxHeight: '90vh',
      padding: 0,

      // Center modal
      top: '50%',
      bottom: 'unset',
      transform: 'translateY(-50%)',

      left: theme.space[3],
      right: theme.space[3],
    },
  };

  return (
    <>
      <SettingsButton
        icon={<InfoCircle />}
        onClick={() => {
          setIsOpen(true);
        }}
        sx={{ ml: [0, null, null, 2], mb: [6, null, null, 0] }}
      >
        {LL.ABOUT_HEADING()}
      </SettingsButton>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        closeTimeoutMS={200}
        style={styles}
      >
        <div
          sx={{
            borderTopLeftRadius: '3',
            borderTopRightRadius: '3',
            py: 2,
            pl: 6,
            pr: 2,
            mb: 6,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid transparent',
            borderColor: isDark ? 'border2' : 'rgb(0 0 0 / 0.1)',
          }}
        >
          <h2 className="mt-1 text-2xl font-bold sm:mt-0 sm:text-3xl dark:text-slate-200">
            {LL.ABOUT_HEADING()}
          </h2>
          <IconButton
            onClick={() => {
              setIsOpen(false);
            }}
            icon={<Times />}
            styles={{
              p: 1,
              size: '12',
              ':hover': {
                bg: isDark ? 'background' : 'rgba(0,0,0,0.05)',
              },

              ':hover div': {
                color: 'iconHover',
              },
            }}
            iconStyles={{
              fontSize: 'xl',
            }}
          >
            {LL.CLOSE()}
          </IconButton>
        </div>

        <div sx={{ pl: 6, pr: [6, 10] }}>
          <div sx={{ display: 'flex', gap: '4' }}>
            <QuestionMarkCircle
              sxx={{
                display: ['none', 'block'],
                size: '8',
                flexShrink: 0,
                color: isDark ? 'icon' : 'muted',
              }}
            />
            <div>
              <Heading>{LL.ABOUT_THE_SITE_HEADING()}</Heading>
              <P sxx={{ mb: '3' }}>{LL.ABOUT_THE_SITE_P1()}</P>
              <P sxx={{ mb: '5' }}>{LL.ABOUT_THE_SITE_P2()}</P>
            </div>
          </div>

          <div sx={{ display: 'flex', gap: '4' }}>
            <User
              sxx={{
                display: ['none', 'block'],
                size: '8',
                flexShrink: 0,
                color: isDark ? 'icon' : 'muted',
              }}
            />
            <div>
              <Heading>{LL.ABOUT_THE_PEOPLE_HEADING()}</Heading>
              <P sxx={{ mb: '5' }}>
                {LL.ABOUT_THE_PEOPLE_P1()}{' '}
                <Link id="mvn-link" href="https://mvn.no">
                  Morten Vaale Noddeland
                </Link>
                {LL.ABOUT_THE_PEOPLE_P2()}{' '}
                <Link id="instabart-link" href="https://instabart.no">
                  NTNU{' '}
                </Link>
                {LL.AND()}{' '}
                <Link id="duio-link" href="https://duio.no">
                  UiO
                </Link>
                {LL.ABOUT_THE_PEOPLE_P3()}{' '}
                <Link id="konfidens-link" href="https://konfidens.no">
                  {LL.ABOUT_THE_PEOPLE_P4()}
                </Link>
                .
              </P>
            </div>
          </div>

          <div sx={{ display: 'flex', gap: '4' }}>
            <Envelope
              sxx={{
                display: ['none', 'block'],
                size: '8',
                flexShrink: 0,
                color: isDark ? 'icon' : 'muted',
              }}
            />
            <div>
              <Heading>{LL.ABOUT_CONTACT_US_HEADING()}</Heading>
              <P sxx={{ mb: '10' }}>
                {LL.ABOUT_CONTACT_US_P1()}{' '}
                <Link id="email-link" href="mailto:morten@noddeland.no">
                  morten@noddeland.no
                </Link>{' '}
                {LL.ABOUT_CONTACT_US_P2()}{' '}
                <Link
                  id="github-link"
                  href="https://github.com/mortnod/mittnord"
                >
                  {LL.ABOUT_CONTACT_US_P3()}
                </Link>
                .
              </P>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default About;
