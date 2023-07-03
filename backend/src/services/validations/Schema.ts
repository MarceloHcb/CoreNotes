import Joi from 'joi';

const TodoShemaFields = Joi.object({
  title: Joi.string().min(1).required(),
  favorite: Joi.number().valid(0, 1).strict().required(),
  body: Joi.string().min(1).required(),
  color: Joi.string().min(1).required(),  
});

export default TodoShemaFields; 
