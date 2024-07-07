import { Caption, DayPicker } from 'react-day-picker';
import styled from 'styled-components';
import 'react-day-picker/dist/style.css';

export const Calendar = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;

export const CalendarTtl = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: #000;
`;

export const CalendarBlock = styled(DayPicker)`
  display: block;
  color: #94a6be;
  --rdp-cell-size: 20px;
  --rdp-caption-font-size: 6px;
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

export const CalendarPeriod = styled.div`
  padding: 0 7px;
  p {
    color: #94a6be;
    font-size: 10px;
    line-height: 1;
    margin-top: 12px;
  }
`;

export const CalendarDateControl = styled.input`
  color: #000000;
`;
