import { useState } from 'react';
import { default as defaultStyles } from 'react-day-picker/dist/style.module.css';
import { CalendarBlock } from './CalendarDayPicker.styled';

const CalendarDayPicker = () => {
  const [selected, setSelected] = useState();

  return (
    <CalendarBlock
      mode="single"
      selected={selected}
      onSelect={setSelected}
      classNames={defaultStyles}
    ></CalendarBlock>
  );
};

export default CalendarDayPicker;
