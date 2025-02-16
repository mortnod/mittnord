/** @jsxImportSource theme-ui */
import Books from '../icons/books';
import Calendar from '../icons/calendar';
import Canvas from '../icons/canvas';
import Comments from '../icons/comments';
import Cutlery from '../icons/cutlery';
import GraduationCap from '../icons/graduationCap';
import Igloo from '../icons/igloo';
import LaptopMedical from '../icons/laptopMedical';
import Map from '../icons/map';
import Office from '../icons/office';
import PaperPlane from '../icons/paperPlane';
import Print from '../icons/print';

import Card from './card';

const Cards = () => {
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
        heading="Canvas"
        icon={<Canvas />}
        href="https://nord.instructure.com/"
        analyticsAction="Canvas"
      />
      <Card
        heading="Studentweb"
        icon={<GraduationCap />}
        href="https://fsweb.no/studentweb/login.jsf?inst=FSNORD"
        analyticsAction="Studentweb"
      />
      <Card
        heading="Email"
        icon={<PaperPlane />}
        href="https://outlook.office365.com/mail/inbox"
        analyticsAction="Email"
      />
      <Card
        heading="Office 365"
        icon={<Office />}
        href="https://o365.nord.no/"
        analyticsAction="Office 365"
      />
      <Card
        heading="Timetable"
        icon={<Calendar />}
        href="https://cloud.timeedit.net/nord/web/open/ri1Q1.html"
        analyticsAction="Timetable"
      />
      <Card
        heading="Book room"
        icon={<Igloo />}
        href="https://cloud.timeedit.net/nord/web/timeedit/sso/feide?back=https%3A%2F%2Fcloud.timeedit.net%2Fnord%2Fweb%2Fstudent%2Fri1Q8.html"
        analyticsAction="Book room"
      />
      <Card
        heading="Print"
        icon={<Print />}
        href={{
          nb: 'https://www.nord.no/no/Student/ithjelp/utskrift',
          en: 'https://www.nord.no/en/about/service-units/helpdesk/printing/Pages/default.aspx',
        }}
        analyticsAction="Print"
      />
      <Card
        heading="Campus map"
        icon={<Map />}
        href="https://use.mazemap.com/#config=nord&v=1&zlevel=1&center=13.414466,65.522958&zoom=5.9&campuses=nord&campusid=255"
        analyticsAction="Campus map"
      />
      <Card
        heading="Library"
        icon={<Books />}
        href={{
          nb: 'https://www.nord.no/no/bibliotek',
          en: 'https://www.nord.no/en/library',
        }}
        analyticsAction="Library"
      />
      <Card
        heading="Cafeteria"
        icon={<Cutlery />}
        href={{
          nb: 'https://www.studentinord.no/kantine',
          en: 'https://www.studentinord.no/food-and-beverage',
        }}
        analyticsAction="Cafeteria"
      />
      <Card
        heading="IT help"
        icon={<LaptopMedical />}
        href={{
          nb: 'https://www.nord.no/no/student/ithjelp',
          en: 'https://www.nord.no/en/about/service-units/helpdesk/Pages/default.aspx',
        }}
        analyticsAction="IT help"
      />
      <Card
        heading="Nora"
        icon={<Comments />}
        href={{
          nb: 'https://nora-test.nord.no/',
          en: 'https://nora-test.nord.no/',
        }}
        analyticsAction="Nora"
      />
    </div>
  );
};

export default Cards;
