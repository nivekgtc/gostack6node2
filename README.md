# Bootcamp Rocketseat - NodeJs - Módulo 02

```js
function sayHello() {
  console.log("Hello World");
}
```

Comentários sobre o projeto -

### **Adição do Sequelize**

#### Run in terminal ->

##

---

### -> (Interface em linha de comandos para facilitar a criação de Models como dependência de desenvolvimento)

```
 yarn add sequelize //Adiciona sequelize

 yarn add sequelize-cli -D
```

### Irá ser criado vários arquivos no projeto de configuração do sequelize

```
 npx sequelize init
```

### **CRIAÇÃO DE PASTAS**

Modificação de pastas ->
Criaçãp de pastas ->+

1.  Crie a pasta **src/database**
2.  Mova a pasta config para **src**
3.  Altere o arquivo config config.json para database.js
4.  Mova a pasta migrations e seeders para **src/database**
5.  Mova a pasta models para **src/app**

## Configurando modificação das pastas do sequelize - Arquivo de configurações do sequelize

- Crie o arquivo
  **.sequelizerc** -> na RAÍZ do projeto

```js
const path = require("path");

module.exports = {
  config: path.resolve("src", "config", "database.js"),
  "models-path": path.resolve("src", "app", "models"),
  "seeders-path": path.resolve("src", "database", "seeders"),
  "migrations-path": path.resolve("src", "database", "migrations")
};
```

## Criando migration de testes

```
npx sequelize:create --name=create-users
```

## Adicionando dependências do db

```
yarn add pg       // Para postgres
yarn add mysql2   // Para mysql
```

## Configurando arquivo de conf do banco de dados

-> /src/config/database.js

```js
module.exports = {
  dialect: "postgres",
  host: "127.0.0.1",
  username: "postgres",
  password: "posgres",
  database: "gonodemodulo2",
  operatorAliases: false, //Para extender     funções
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
```

**dialect** -> É o banco de usado na aplicação  
**host** -> Ip do servidor  
**timestamps** -> Adiciona tabelas _created_datetime_ e _update_datetime_ em cada schema do banco de dados  
**underscored**:true -> Define as tabelas do banco de dados com nomeação camel_case

# MIGRATIONS

Serve para fazer a migração ou fazer um versionamento das tabelas do banco de dados



## Configurando algo

-> src/app/models/index.js
delete

```js
const env = process.env.NODE_ENV || "development";
```

## Criando views

