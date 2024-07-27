import { useId, useState } from 'react';
import * as S from './CalendarDayPicker.styled';
import 'react-day-picker/dist/style.css';
import { format, isValid, parse } from 'date-fns';
import { ru } from 'date-fns/locale';

const CalendarDayPicker = ({ selectDate, thisDate }) => {
  const inputId = useId();

  const [month, setMonth] = useState(new Date(thisDate));

  const [selectedDate, setSelectedDate] = useState(
    new Date(thisDate) || undefined,
  );

  const [inputValue, setInputValue] = useState(
    format(thisDate, 'dd.MM.yy') || '',
  );

  const handleDayPickerSelect = (date) => {
    if (!date) {
      setInputValue('');
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
      setMonth(date);
      setInputValue(format(date, 'dd.MM.yy'));
      selectDate(date);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    const parsedDate = parse(e.target.value, 'dd.MM.yy', new Date());
    if (isValid(parsedDate)) {
      setSelectedDate(parsedDate);
      setMonth(parsedDate);
      selectDate(parsedDate);
    } else {
      setSelectedDate(undefined);
    }
  };

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
        month={month}
        onMonthChange={setMonth}
        mode="single"
        selected={selectedDate}
        onSelect={handleDayPickerSelect}
        defaultMonth={new Date(thisDate)}
        footer={
          <>
            <S.CalendarPeriod>
              <p aria-live="assertive" aria-atomic="true">
                Выберите срок исполнения{' '}
                <S.CalendarDateControl
                  id={inputId}
                  type="text"
                  value={inputValue ?? format(new Date(thisDate), 'dd.MM.yy')}
                  placeholder={format(new Date(), 'dd.MM.yy')}
                  onChange={handleInputChange}
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
