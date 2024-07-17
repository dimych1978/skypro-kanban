import * as S from './CalendarDayPicker.styled';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const CalendarDayPicker = ({ selectDate }) => {
  const selectedDate = new Date(selectDate);

  return (
    <S.Calendar>
      <S.CalendarTtl>Даты </S.CalendarTtl>
      <S.CalendarBlock
        styles={{
          day: { fontSize: '10px' },
          caption_label: {
            fontSize: '14px',
            lineHeight: '25px',
            fontWeight: '600',
            textTransform: 'capitalize',
          },
          head_cell: {
            fontWeight: '500',
            lineHeight: 'normal',
            letterSpacing: '-0.2px',
            textTransform: 'lowercase',
            fontSize: '10px',
          },
        }}
        locale={ru}
        mode="single"
        selected={selectedDate}
        disableNavigation
        defaultMonth={new Date(selectDate)}
        footer={
          <>
            <S.CalendarPeriod>
              <p aria-live="assertive" aria-atomic="true">
                Срок исполнения
                <S.CalendarDateControl
                  style={{ display: 'inline' }}
                  type="text"
                  value={format(new Date(selectDate), 'dd.MM.yy')}
                  readOnly
                />
              </p>
            </S.CalendarPeriod>
          </>
        }
      ></S.CalendarBlock>
    </S.Calendar>
  );
};

export default CalendarDayPicker;
