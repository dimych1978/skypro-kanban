export const cardList = [
  {
    id: 1,
    theme: 'Web Design',
    title: 'Название задачи',
    date: '30.04.2024',
    status: 'Без статуса',
  },
  {
    id: 2,
    theme: 'Copywriting',
    title: 'Название задачи',
    date: '12.04.2024',
    status: 'Без статуса',
  },
  {
    id: 3,
    theme: 'Web Design',
    title: 'Название задачи',
    date: '30.06.2024',
    status: 'Без статуса',
  },
  {
    id: 4,
    theme: 'Web Design',
    title: 'Название задачи',
    date: '30.05.2024',
    status: 'Нужно сделать',
  },
  {
    id: 5,
    theme: 'Web Design',
    title: 'Название задачи',
    date: '23.03.2024',
    status: 'Тестирование',
  },
  {
    id: 6,
    theme: 'Research',
    title: 'Название задачи',
    date: '01.07.2024',
    status: 'В работе',
  },
  {
    id: 7,
    theme: 'Copywriting',
    title: 'Название задачи',
    date: '01.07.2024',
    status: 'Готово',
  },
  {
    id: 8,
    theme: 'Research',
    title: 'Название задачи',
    date: '01.10.2024',
    status: 'Готово',
  },
  {
    id: 9,
    theme: 'Copywriting',
    title: 'Название задачи',
    date: '11.11.2024',
    status: 'Готово',
  },
  {
    id: 10,
    theme: 'Research',
    title: 'Название задачи',
    date: '12.12.2024',
    status: 'В работе',
  },
];

export const statusList = [
  'Без статуса',
  'Нужно сделать',
  'В работе',
  'Тестирование',
  'Готово',
];

export const categoriesList = ['Web Design', 'Research', 'Copywriting'];

export const light = { bg: '#EAEEF6', text: '#000' };

export const dark = { bg: '#151419', text: '#fff' };

export const user = JSON.parse(localStorage.getItem('user')) || null;
