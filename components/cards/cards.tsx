/** @jsxImportSource theme-ui */
import { useI18nContext } from '../../src/i18n/i18n-react';
import Books from '../icons/books';
import Calendar from '../icons/calendar';
import Canvas from '../icons/canvas';
import Cutlery from '../icons/cutlery';
import GraduationCap from '../icons/graduationCap';
import Igloo from '../icons/igloo';
import Language from '../icons/language';
import LaptopMedical from '../icons/laptopMedical';
import Map from '../icons/map';
import Office from '../icons/office';
import PaperPlane from '../icons/paperPlane';
import Print from '../icons/print';

import Card from './card';

const Cards = () => {
  const { LL } = useI18nContext();

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
        heading={LL.CANVAS()}
        icon={<Canvas />}
        href="https://nord.instructure.com/"
        analyticsAction="Canvas"
      />
      <Card
        heading={LL.STUDENTWEB()}
        icon={<GraduationCap />}
        href="https://fsweb.no/studentweb/login.jsf?inst=FSNORD"
        analyticsAction="Studentweb"
      />
      <Card
        heading={LL.EMAIL()}
        icon={<PaperPlane />}
        href="https://outlook.office365.com/mail/inbox"
        analyticsAction="Email"
      />
      <Card
        heading={LL.MICROSOFT_365()}
        icon={<Office />}
        href="https://o365.nord.no/"
        analyticsAction="Office 365"
      />
      <Card
        heading={LL.TIMETABLE()}
        icon={<Calendar />}
        href="https://cloud.timeedit.net/nord/web/open/ri1Q1.html"
        analyticsAction="Timetable"
      />
      <Card
        heading={LL.BOOK_ROOM()}
        icon={<Igloo />}
        href="https://cloud.timeedit.net/nord/web/timeedit/sso/feide?back=https%3A%2F%2Fcloud.timeedit.net%2Fnord%2Fweb%2Fstudent%2Fri1Q8.html"
        analyticsAction="Book room"
      />
      <Card
        heading={LL.PRINT()}
        icon={<Print />}
        href={{
          nb: 'https://www.nord.no/no/Student/ithjelp/utskrift',
          en: 'https://www.nord.no/en/about/service-units/helpdesk/printing/Pages/default.aspx',
        }}
        analyticsAction="Print"
      />
      <Card
        heading={LL.MAP()}
        icon={<Map />}
        href="https://use.mazemap.com/#config=nord&v=1&zlevel=1&center=13.414466,65.522958&zoom=5.9&campuses=nord&campusid=255"
        analyticsAction="Campus map"
      />
      <Card
        heading={LL.LIBRARY()}
        icon={<Books />}
        href={{
          nb: 'https://www.nord.no/no/bibliotek',
          en: 'https://www.nord.no/en/library',
        }}
        analyticsAction="Library"
      />
      <Card
        heading={LL.CAFETERIA()}
        icon={<Cutlery />}
        href={{
          nb: 'https://www.studentinord.no/kantine',
          en: 'https://www.studentinord.no/food-and-beverage',
        }}
        analyticsAction="Cafeteria"
      />
      <Card
        heading={LL.IT_HELP()}
        icon={<LaptopMedical />}
        href={{
          nb: 'https://www.nord.no/no/student/ithjelp',
          en: 'https://www.nord.no/en/about/service-units/helpdesk/Pages/default.aspx',
        }}
        analyticsAction="IT help"
      />
      <Card
        heading={LL.ORDNETT()}
        icon={<Language />}
        href={{
          nb: 'https://www.ordnett.no/gyldendal/login/gyldendal',
          en: 'https://www.ordnett.no/gyldendal/login/gyldendal',
        }}
        analyticsAction="Ordnett"
      />
    </div>
  );
};

export default Cards;
