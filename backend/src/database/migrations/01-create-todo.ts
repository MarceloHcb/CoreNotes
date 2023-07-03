import { DataTypes, Model, QueryInterface } from 'sequelize';
import { Todo } from '../../types/Todo';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Todo>>('todos', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,        
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,        
      },
      favorite: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('todos');
  }
};
