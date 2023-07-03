import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { Todo } from '../../types/Todo';

type TodoInputtableTypes = Optional<Todo, 'id'>;
type TodoSequelizeModelCreator = ModelDefined<Todo, TodoInputtableTypes>;
export type TodoSequelizeModel = Model<Todo, TodoInputtableTypes>;

const TodoModel: TodoSequelizeModelCreator = db.define('Todo', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(50),
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
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  tableName: 'todos',
  timestamps: false,
  underscored: true,
});

export default TodoModel;
