import { Caption, DayPicker } from 'react-day-picker';
import styled from 'styled-components';

export const CalendarBlock = styled(DayPicker)`
  display: block;
  color: #94a6be;
`;

export const CalendarNav = styled(Caption)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 14px;
  padding: 0 7px;
  color: red;
`;
