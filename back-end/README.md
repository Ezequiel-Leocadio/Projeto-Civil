# Projeto-Civil
Projeto resultado de Concurso.

# Executar BACK-END
Back-End desenvolvido em JavaScript com NodeJs.

Start Usando Node:

```bash
# Instalar dependências
npm install ou yarn install

# Executar
npm start ou yarn start
```

Start Usando Docker:

```bash
# Build   image
docker build -t back_end . 

# Run  image  container
docker run -p 3334:3334 -d back_end 
```
Carga de Tabelas
```bash
#Requisição get em cargatabelas
GET http://localhost:3334/cargatabelas
com isso irá criar as tabelas e um usuário admin com senha admin (login:admin, senha:admin)
``` 
