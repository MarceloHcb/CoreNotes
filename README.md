<h1 align="center"> <img src="https://core-notes-3z2u.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=48&q=75&dpl=dpl_EfUYH5GSJNLppKKD9eMtXbJ7BoUP"/> Core Notes </h1> 

>  Aplicativo da Web que permite aos usuários criar e gerenciar uma lista de tarefas

***
Deploy link: https://core-notes-3z2u.vercel.app/

# Getting started

## Usando Docker
Com o terminal aberto na pasta do projeto, execute o seguinte comando para poder instalar as dependências:
```
sudo docker-compose up -d
```
### Após isso acesse http://localhost:3000/

## OR

## Usando local com container Mysql
Com o terminal aberto na pasta do projeto, execute o seguinte comando para poder instalar as dependências:
```
npm run compose
```
```
npm run devall
```
### Após isso acesse http://localhost:3000/

## Use o comando abaixo para resetar o banco de dados
```
npm run drop
```

## Back End:
```tree
.
├── back-end/
│   ├── src/
│   │   ├── controllers
│   │   ├── routes
│   │   ├── service
│   │   ├── app.js
│   │   └── server.js
│   ├── .dockerignore
│   ├── Dockerfile
│   ├── package-lock.json
│   └── package.json
└── README.md
```
<h2> Este projeto utiliza o Node.js como plataforma de desenvolvimento backend, o Sequelize como ORM (Object-Relational Mapping) para interagir com o banco de dados e o Eslint como ferramenta para manter uma formatação consistente e padronizada em nosso código. </h2>

<div>  
<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"/>
<img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white"/>
<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white"/>
<img src="https://img.shields.io/badge/chai.js-323330?style=for-the-badge&logo=chai&logoColor=red"/>
</div>

## Database
<img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/>

## Containers
<h2>Opção de containers</h2>
<img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"/>

## Front end
<h2>Para o Front-end foi utilizado o Framework Nextjs, Tailwind para manipulação do Css, e Eslint para indentação</h2>


<div>  
<img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"/>
<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white"/>
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
<img src="https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white" />
</div>

<h2> The Project </h2>
<img width=700 src="exe2.gif"/>
<h2> Responsive</h2>
<img width=500 src="responsive.gif"/>






