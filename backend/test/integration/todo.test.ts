import sinon from 'sinon';
import chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import  app  from '../../src/app';
import TodoModel from '../../src/database/models/Todo.model' 

chai.use(chaiHttp);
const { expect } = chai;
const mock = [
  {
    id: 19,
    title: "test",
    body: "ertert",
    favorite: 0,
    color: "#f6a083"
  },
  {
    id: 20,
    title: "test1",
    body: "erterssst",
    favorite: 1,
    color: "#f6a083"
  },
]

describe('Todo test', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('"GET" /notes deve retornar status 200 ao listar anotações', async () => {
    sinon.stub(TodoModel, 'findAll').resolves( mock as any);
    const { status } = await chai.request(app).get('/notes');
    expect(status).to.be.equal(200);    
  });  
  it('"POST" /notes deve retornar status 200 ao criar uma anotação', async () => {
    sinon.stub(TodoModel, 'create').resolves([mock[0]] as any);
    const { status } = await chai.request(app).post('/notes')
    .send({ 
      title:"title1",
      body:"teste",
      color: "red",
      favorite: 1
    });
    expect(status).to.be.equal(201);       
  });
  it('"PUT" /notes deve retornar status 200 ao atualizar uma anotação', async () => {
    sinon.stub(TodoModel, 'create').resolves([mock[0]] as any);
    const { status } = await chai.request(app).put('/notes/1')
    .send({ 
      title:"title2",
      body:"teste",
      color: "red",
      favorite: 1
    });
    expect(status).to.be.equal(200);    
  });
  it('"DELETE" /notes deve retornar status 204 ao deletar uma anotação', async () => {    
    sinon.stub(TodoModel, 'destroy').resolves(1);
    const { status } = await chai.request(app)
    .delete('/notes/19')
    
    expect(status).to.be.equal(204);
  }
  );
  it('"DELETE" /notes deve retornar status 400 ao deletar uma anotação que não existe', async () => {    
    sinon.stub(TodoModel, 'destroy').resolves(0);
    const { status } = await chai.request(app)
    .delete('/notes/1999')
    
    expect(status).to.be.equal(400);
  }
  );
});