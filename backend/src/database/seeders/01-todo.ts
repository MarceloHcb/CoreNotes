import { QueryInterface } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('todos', [
      {
        title: 'Bem vindo(a)',
        body: 'Seja bem vindo(a)!!!',
        favorite: 0,
        color:'#9fcbf9'
      },
      {
        title: 'Ao ...',
        body: '...',
        favorite: 0,
        color: '#fdaff0'
      },
      {
        title: 'CoreNotes !!',
        body: '!!!!!!!!!!!!!!',
        favorite: 0,
        color: '#b4fdc7'
      },
    ], {});
  },
  
  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('todos', {});
  }
};
