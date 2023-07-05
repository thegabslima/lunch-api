# Lunch API

Este repositório contém uma API para gerenciar pedidos em um restaurante/lanchonete. A API permite cadastrar produtos, clientes e realizar pedidos, além de consultar os pedidos em andamento e seus respectivos status. A API é documentada usando o Swagger, que fornece uma interface intuitiva para testar e explorar os endpoints.

## Pré-requisitos

- Node.js
- Docker

## Começando

Siga as instruções abaixo para obter uma cópia do projeto localmente e executá-lo para fins de desenvolvimento e teste.

1. Faça o download do repositório do projeto:
```shell
git clone https://github.com/thegabslima/lunch-api.git
```

2. Instale as dependências necessárias:
```shell
cd lunch-api
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo chamado `.env` na raiz do projeto e adicione as seguintes informações de banco de dados:

```
DB_TYPE="mysql"
DB_PORT=3306
DB_USERNAME="admin"
DB_PASSWORD="12345678"
DB_DATABASE="DB_LUNCH-API"
```

## Executar o projeto

Execute o seguinte comando para iniciar o projeto em um contêiner Docker:
```shell
docker-compose up -d
```

Após o contêiner estar em execução, você poderá acessar a API em seu navegador usando os seguintes endereços:

- Para acessar o Swagger: http://localhost:8080/api
- Para acessar o phpMyAdmin: http://localhost:8081

## Documentação das rotas

### Categorias

A tabela "category" já foi previamente preenchida com as seguintes informações:

| ID | NAME           |
|----|----------------|
| 1  | Lanche         |
| 2  | Acompanhamento |
| 3  | Bebida         |
| 4  | Sobremesa      |

Essas categorias foram inseridas para classificar os produtos de acordo com suas respectivas categorias, permitindo uma organização adequada dos itens do cardápio.

### Produto(s)

#### Cadastrar

Para cadastrar um produto, utilize o endpoint `/item` com o método POST.

Endpoint: `POST /item`

Exemplo de dados para cadastrar um produto:
```json
{
  "name": "Coca-Cola",
  "price": 7,
  "description": "Refrigerante de 2L",
  "category_id": 3
}
```

#### Consultar

Para consultar um produto, existem rotas disponíveis para busca por categorias e por ID do produto.

- Por ID do Produto: `GET /item/{id}`
- Buscar Lanche(s): `GET /item/getItemBySnack`
- Buscar Acompanhamento(s): `GET /item/getItemByFollowUp`
- Buscar Bebida(s): `GET /item/getItemByDrink`
- Buscar sobremesa(s): `GET /item/getItemByDessert`

Substitua `{id}` pelo ID real do produto ao consultar por ID do Produto.

### Cliente(s)

#### Cadastrar

Para cadastrar um cliente, utilize o endpoint `/client` com o método POST. O cliente pode optar por não se identificar.

Endpoint: `POST /client`

Exemplo de dados para cadastrar um cliente com identificação:
```json
{
  "document": "0000000000",
  "name": "FIAP",
  "email": "aluno
  }
```