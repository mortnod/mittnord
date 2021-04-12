/** @jsx jsx */
import { jsx } from 'theme-ui';

import { withTranslation } from '../../i18n';
import Books from '../icons/books';
import Calendar from '../icons/calendar';
import Canvas from '../icons/canvas';
import Cutlery from '../icons/cutlery';
import GraduationCap from '../icons/graduationCap';
import Igloo from '../icons/igloo';
import LaptopMedical from '../icons/laptopMedical';
import Map from '../icons/map';
import Office from '../icons/office';
import PaperPlane from '../icons/paperPlane';
import Print from '../icons/print';
import Virus from '../icons/virus';

import Card from './card';

const Cards = ({ t }) => {
  return (
    <div
      sx={{
        display: 'grid',
        gridTemplateColumns: [
          'repeat(2, minmax(0, 1fr))',
          'repeat(3, minmax(0, 1fr))',
          'repeat(3, minmax(0, 1fr))',
          'repeat(4, minmax(0, 1fr))',
          'repeat(6, minmax(0, 1fr))',
        ],
        gap: [2, null, 3],
        mt: [2, 3, 4, null, 0],
      }}
    >
      <Card
        heading={t('Canvas')}
        icon={Canvas}
        href="https://nord.instructure.com/"
        analyticsAction="Canvas"
      />
      <Card
        heading={t('Studentweb')}
        icon={GraduationCap}
        href="https://fsweb.no/studentweb/login.jsf?inst=FSNORD"
        analyticsAction="Studentweb"
      />
      <Card
        heading={t('Email')}
        icon={PaperPlane}
        href="https://outlook.office365.com/mail/inbox"
        analyticsAction="Email"
      />
      <Card
        heading={t('Office 365')}
        icon={Office}
        href="https://o365.nord.no/"
        analyticsAction="Office 365"
      />
      <Card
        heading={t('Timetable')}
        icon={Calendar}
        href="https://cloud.timeedit.net/nord/web/open/ri1Q1.html"
        analyticsAction="Timetable"
      />
      <Card
        heading={t('Book room')}
        icon={Igloo}
        href="https://cloud.timeedit.net/nord/web/timeedit/sso/feide?back=https%3A%2F%2Fcloud.timeedit.net%2Fnord%2Fweb%2Fstudent%2Fri1Q8.html"
        analyticsAction="Book room"
      />
      <Card
        heading={t('Print')}
        icon={Print}
        href={{
          nb: 'https://www.nord.no/no/Student/ithjelp/utskrift',
          en:
            'https://www.nord.no/en/about/service-units/helpdesk/printing/Pages/default.aspx',
        }}
        analyticsAction="Print"
      />
      <Card
        heading={t('Campus map')}
        icon={Map}
        href="https://use.mazemap.com/#config=nord&v=1&zlevel=1&center=13.414466,65.522958&zoom=5.9&campuses=nord&campusid=255"
        analyticsAction="Campus map"
      />
      <Card
        heading={t('Library')}
        icon={Books}
        href={{
          nb: 'https://www.nord.no/no/bibliotek',
          en: 'https://www.nord.no/en/library',
        }}
        analyticsAction="Library"
      />
      <Card
        heading={t('Cafeteria')}
        icon={Cutlery}
        href={{
          nb: 'https://www.studentinord.no/kantine',
          en: 'https://www.studentinord.no/food-and-beverage',
        }}
        analyticsAction="Cafeteria"
      />
      <Card
        heading={t('IT help')}
        icon={LaptopMedical}
        href={{
          nb: 'https://www.nord.no/no/student/ithjelp',
          en:
            'https://www.nord.no/en/about/service-units/helpdesk/Pages/default.aspx',
        }}
        analyticsAction="IT help"
      />
      <Card
        heading={t('Corona')}
        icon={Virus}
        href={{
          nb: 'https://www.nord.no/koronavirus',
          en:
            'https://www.nord.no/en/news-events/coronavirus/Pages/default.aspx',
        }}
        analyticsAction="Corona"
      />
    </div>
  );
};

export default withTranslation('common')(Cards);
