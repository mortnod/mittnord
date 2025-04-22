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
        analyticsName="canvas_click"
      />
      <Card
        heading={LL.STUDENTWEB()}
        icon={<GraduationCap />}
        href="https://fsweb.no/studentweb/login.jsf?inst=FSNORD"
        analyticsName="studentweb_click"
      />
      <Card
        heading={LL.EMAIL()}
        icon={<PaperPlane />}
        href="https://outlook.office365.com/mail/inbox"
        analyticsName="email_click"
      />
      <Card
        heading={LL.MICROSOFT_365()}
        icon={<Office />}
        href="https://o365.nord.no/"
        analyticsName="microsoft365_click"
      />
      <Card
        heading={LL.TIMETABLE()}
        icon={<Calendar />}
        href="https://cloud.timeedit.net/nord/web/open/ri1Q1.html"
        analyticsName="timetable_click"
      />
      <Card
        heading={LL.BOOK_ROOM()}
        icon={<Igloo />}
        href="https://cloud.timeedit.net/nord/web/student/ri1Q8.html"
        analyticsName="book_room_click"
      />
      <Card
        heading={LL.PRINT()}
        icon={<Print />}
        href={{
          nb: 'https://www.nord.no/no/Student/ithjelp/utskrift',
          en: 'https://www.nord.no/en/about/service-units/helpdesk/printing/Pages/default.aspx',
        }}
        analyticsName="print_click"
      />
      <Card
        heading={LL.MAP()}
        icon={<Map />}
        href="https://use.mazemap.com/#config=nord&v=1&zlevel=1&center=13.414466,65.522958&zoom=5.9&campuses=nord&campusid=255"
        analyticsName="campus_map_click"
      />
      <Card
        heading={LL.LIBRARY()}
        icon={<Books />}
        href={{
          nb: 'https://www.nord.no/no/bibliotek',
          en: 'https://www.nord.no/en/library',
        }}
        analyticsName="library_click"
      />
      <Card
        heading={LL.CAFETERIA()}
        icon={<Cutlery />}
        href={{
          nb: 'https://www.studentinord.no/kantine',
          en: 'https://www.studentinord.no/food-and-beverage',
        }}
        analyticsName="cafeteria_click"
      />
      <Card
        heading={LL.IT_HELP()}
        icon={<LaptopMedical />}
        href={{
          nb: 'https://www.nord.no/no/student/ithjelp',
          en: 'https://www.nord.no/en/about/service-units/helpdesk/Pages/default.aspx',
        }}
        analyticsName="it_help_click"
      />
      <Card
        heading={LL.ORDNETT()}
        icon={<Language />}
        href="https://www.ordnett.no/gyldendal/login/gyldendal"
        analyticsName="ordnett_click"
      />
    </div>
  );
};

export default Cards;
