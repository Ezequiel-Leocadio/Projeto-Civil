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

# Executar FRONT-END
Front-End desenvolvido em JavaScript com ReactJs.

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
docker build -t front_end . 

# Run  image  container
docker run -p 3000:3000 -d front_end
```
Para fazer login use (login:admin, senha:admin)

# Executar APP
Aplicativo desenvolvido em JavaScript com React-Native.

Start Usando Node:

```bash
# Instalar dependências
npm install ou yarn install

# Instalar no Celular ou Emulador
npm android ou yarn android

# Executar
npm start ou yarn start
```

Instalando o APK:

```bash
# Instalar o apk
se encontra na  pasta app/apk/Artistas_Albuns.apk

# Instruções para configurar URL do BACK-END
se encontra na  pasta app/prints
```
Para fazer login use (login:admin, senha:admin)
