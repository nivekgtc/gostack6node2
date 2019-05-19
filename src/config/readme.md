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
