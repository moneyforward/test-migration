import r2wc from '@r2wc/react-to-web-component';
import InfoPage from '../../pages/info';

export const InfoPageComponent = r2wc(InfoPage, {
  shadow: 'open',
});
