/** @jsx jsx */
import { jsx } from 'theme-ui';

import Books from './icons/books';
import Card from './card';
import Calendar from './icons/calendar';
import Canvas from './icons/canvas';
import Cutlery from './icons/cutlery';
import GraduationCap from './icons/graduationCap';
import Igloo from './icons/igloo';
import LaptopMedical from './icons/laptopMedical';
import Map from './icons/map';
import Office from './icons/office';
import PaperPlane from './icons/paperPlane';
import Print from './icons/print';
import Virus from './icons/virus';

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
      }}
    >
      <Card heading="Canvas" icon={Canvas} />
      <Card heading="Studentweb" icon={GraduationCap} />
      <Card heading="E-post" icon={PaperPlane} />
      <Card heading="Office 365" icon={Office} />
      <Card heading="Timeplan" icon={Calendar} />
      <Card heading="Book rom" icon={Igloo} />
      <Card heading="Utskrift" icon={Print} />
      <Card heading="Campuskart" icon={Map} />
      <Card heading="Bibliotek" icon={Books} />
      <Card heading="Kantine" icon={Cutlery} />
      <Card heading="IT-hjelp" icon={LaptopMedical} />
      <Card heading="Korona" icon={Virus} />
    </div>
  );
};

export default Cards;
