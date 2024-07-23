import styled from 'styled-components';

export const Calendar = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;

export const CalendarTtl = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
`;

export const SubTtl = styled(CalendarTtl)`
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: #000;
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 14px;
  padding: 0 7px;
`;

export const CalendarMonth = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 25px;
  color: #94a6be;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a6be;

  width: 18px;
  height: 25px;
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const CalendarDayNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  margin: 7px 0;
  padding: 0 7px;
`;

export const CalendarDayName = styled.div`
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  color: #94a6be;
  letter-spacing: -0.2px;
`;

export const CalendarCells = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 182px;
  height: 126px;
`;

export const CalendarCell = styled.div`
  cursor: pointer;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  width: 22px;
  height: 22px;
  margin: 2px;

  font-size: 10px;
  line-height: 1;
  color: #94a6be;
  letter-spacing: -0.2px;

  border-radius: 50%;
`;

export const OtherMonth = styled(CalendarCell)`
  opacity: 0;
`;

export const CellDay = styled(CalendarCell)`
  &:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }
`;

export const ActiveDay = styled(CellDay)`
  color: ${({ $active }) => $active && ' #fff'};
  background-color: ${({ $active }) => $active && ' #94a6be'};
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
  p {
    color: #94a6be;
    font-size: 10px;
    line-height: 1;
  }
`;

export const PeriodEnd = styled.div``;

export const CalendarDateControl = styled.span`
  color: #000000;
`;
