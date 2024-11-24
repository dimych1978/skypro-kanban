import { DayPicker } from 'react-day-picker';
import styled from 'styled-components';
import 'react-day-picker/dist/style.css';

export const Calendar = styled.div`
  /* width: 182px; */
  margin-bottom: 20px;
`;

export const CalendarTtl = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: ${({ theme }) => theme.text};
`;

export const CalendarBlock = styled(DayPicker)`
  margin: 0;
  display: block;
  color: #94a6be;
  --rdp-accent-color: #94a6be;
  --rdp-background-color: ${({ theme }) => theme.bg};
  --rdp-cell-size: 22px;
  --rdp-caption-font-size: 6px;
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
  margin: 8px 0;
  padding: 4px 2px;
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgCard};
  display: inline;
  border: none;
  outline: none;
  width: 50px;
  &::placeholder {
    color: #94a6be;
  }
`;
