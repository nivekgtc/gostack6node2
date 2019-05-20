# Neste markdown será intrucionado sobre o funcionamento do model + sequelize

## Explicação sobre o arquivo de MODEL

- Em cada arquivo de model devemos nomear o arquivo com o seu nome destinado  
  ex.:

```js
module.exports = (sequelize, DataTypes) => {
  sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    provider: DataTypes.BOOLEAN
  });
};
```

## Explicação do código acima

- Recebemos como **parâmetro** o **_sequelize_** e o **_DataTypes_** onde ambos vem do arquivo _index.js_ que configuramos na pasta models
- **Param (Sequelize)** => É o objeto do sequelize onde utilizamos esta instância para usar suas funções
- **Param (DataTypes)** => São os tipos de dados existentes no Sequelize
- O método **define()** do sequelize => Recebe como parâmetro o nome do Schema que será criado, e o objeto que será o Schema, excluindo-se dados como _id_
