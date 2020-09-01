/** @jsx jsx */
import { jsx } from 'theme-ui';
import { northernLightsAnimation } from '../constants/northernLightsAnimation';

export default function NorthernLightsBar() {
  return (
    <div sx={{ ...northernLightsAnimation, width: '100%', height: '1' }} />
  );
}
