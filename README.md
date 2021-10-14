# Desafio SearchApp


## Iniciando o projeto

```
   [API DE ACCOUNT]

   - cd account-api;
   - npm install;
   
   [API DE ADDRESS]

   - cd address-api;
   - npm install;
   - node index.js;

   
   [INICIANDO CONTAINER]
   
   - Estar na raiz, local onde esta o arquivo docker-compose.yml;
   - docker estar rodando;
   - Precisa ser nessa exata sequência:
   - docker-compose up --build mongo;
   - docker-compose up --build account-api;
   - caso de algum erro em um dos container execute novamente o comando.

   [SCRIPT]
   
   - Criei um script de inserção de usuarios, não é obrigatório usar.
   - Na pasta raiz abra um novo terminal e digite o comando:
   - docker-compose run account-api npm run mongo

   -Serão criados os seguintes usuários:
    "email":"user@gmail.com", "password":"123456"
    "email":"user2@gmail.com", "password":"123456"
    "email":"user3@gmail.com", "password":"123456"
    "email":"user4@gmail.com", "password":"123456"


    [FRONT-END]
    
    - cd front-end
    - ng serve
    - Será aberto na url http://localhost:4200

```

# ENDPOINTS

## [Retornar endereços(get)]

```
      http://localhost:3001/api/getAddressByName/

    - Precisa passar como query 
      - payload: string contendo pelo menos três letras;
      - page : numero da página;
      - limit : máximo de itens por página;
    - Exemplo:
      - http://localhost:3001/api/getAddressByName/?payload="rue"&page=1&limit=100
 ```

## [Login(post)]

```
    
    http://localhost:3001/api/login

    - Precisa passar no body os parametros:
    - email: "string";
    - password: "string";

    exemplo de body:
    {
        "email":"usernew@gmail.com",
        "password":"123456"
    }
  
```

##  [Signup(post)]

```

    http://localhost:3001/api/signup

    - Precisa passar no body os parametros:
    - email: "string";
    - password: "string";
    - keyword: "string;

    exemplo de body:
    {
        "email":"usernew@gmail.com",
        "password":"123456",
        "keyword":"cookie"
    }
    
    
```

## Check-list Requerimentos do Desafio:

```
    - Criar uma aplicação web em AngularJS : Criado;
```
```
    - Uma API em nodeJS: Criado uma APi para cada serviço, api de Addres e de Account;
      - A Api de Account possui um Banco no Mongo e ambos rodam em um container Docker;
```
```
    - É necessário login para acessar a página (email + password): Criado;
```
```
    - Para realizar a busca tem que ter pelo menos 3 caracteres no campo texto: Validação criada;
```
```
    - Não é necessário um design muito sofisticado, mas a tela tem que ser responsive : Está responsivo;
```
```
    - Você tem liberdade para entregar algo mais completo em termos de validações e UX.
        - Na questão de UX mantive simples por conta do tempo
        - Criado validação de campos em branco;
        - Validação de campos nos formulários de login;
        - Validação se o usuário já existente no banco, senha incorreta, usuário inexistente;
```
```
    
    Extras :
     - Sistema de paginação a nível de servidor (na api);
       - No front bem simples, apenas botões próximo e Anterior;
     - Informativo de paginação (ex: mostrando 0 a 10 de 100);
     - Botão deslogar; 
     - Api de Account + banco  mongo rodando em docker;
     - Validações;
 ```




