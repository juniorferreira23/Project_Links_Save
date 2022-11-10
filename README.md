# Links Save

https://user-images.githubusercontent.com/53994648/200421147-eb1b600b-e58b-440b-ae29-13ee7cf34988.mp4

# Escopo do projeto

O projeto trata-se de um salvador de links, onde através da técnica de operar dados armazenados o CRUD, podemos adicionar, ler, redirecionar, editar e deletar os links no sistema. Há também os tratamentos de erros para impedir passagem errada de dados ao banco.

### Backend
* #### 1. Inicio do projeto subir o servidor 
    Iniciar o projeto criando um aplicação express, selecionar uma porta e iniciar o servidor. Instalando e utilizando o nodemon setamos no package.json para não           precisar ficar reiniciando o servidor.
    
* #### 2. Conectar ao banco de dados
    Neste caso foi utilizado o MongoDB, fazendo uso da documentação do sistema, importamos o moogose requisição para o mongodb no node, foi conectado ao banco de dados     No-SQL. O script da conexão foi guardado na pasta configuration como o nome de coneectionDB.js

* #### 3. Rotas de endpoint
    Criamos a pasta routes e dentro dela terá as rotas relacionadas aquela aplicação.
    
* #### 4. Controlador
    Criamos a pasta controllers onde será utilizados como middleware/callbacks nas rotas. Dentro do controlador será criado as regras e manipulados os dados               armazenador usando a técnica CRUD. Neste caso foi feito o redirecionamento, inclusão, exclusão, edição e leitura de todos os documentos na coleção.
    
* #### 5. Modelo
    Criamos a pasta models com o arquivo Link com a primeira letra maiúscula representando que é um modelo. Dentro chamamos o mongoose e criamos um schema do modelo do     documento que será guardado na coleção. Podemos impor parametros informado se é um obrigatorio, se terá um padrão caso não seja preenchido e qual tipo será aceito.
    
### Frontend
* #### 1. Configuração do EJS 
    Instalamos e Conficuramos o EJS, criamos a pasta de templates e os arquivos de views
    
* #### 2. Formulários
    O EJS funciona através de formulários e na sua documentação não achei nada sobre utilizar o fetch, até tentei usar mais não funcionou, então usando formulários         definimos o action e o method. Obs: É mais prático usar o POST para edição do que o PUT

* #### 3. Tratando os erros
    Através do EJS podemos usar o dinâmismoo para enviar os erros da requisição para o frontend e exibi-los
    
* #### 4. Persistir dados
    Através do EJS podemos persistir os dados quando um formulário estiver preenchido de maneira errada ou enviar os documentos para o frontend ele ler e criar             elementos para lista os documentos
    
* #### 4. Estilizando com BootStrap
    Utilizando BootStrap estilizamos os formulários
    

# Como rodar a aplicação
#### No terminal, clone o projeto:
* git clone 

#### Entre na pasta do projeto:
* cd Pasta_do_Projeto

#### Instale as dependências:
* npm install

#### Execute a aplicação:
* npm start 

# Tecnologias usadas
### Frontend
* HTML
* CSS
* Javascript
* EJS

### Backend
* Node
* Express (para integração do código através do protocolo HTTP)
* Arquitetura MVC
* MongoDB (Banco de Dados NO-SQL)

# Licença
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/juniorferreira23/Project_Save_Links/blob/main/LICENSE)


