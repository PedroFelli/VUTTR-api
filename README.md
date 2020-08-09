# Desafio Back-end VUTTR (Very Useful Tools to Remember)
  Um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

# Technologies
This project was made using the follow technologies:

* [Typescript](https://www.typescriptlang.org/)
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [MongoDB](https://mongodb.com/docs)
* [Jest](https://jestjs.io/)



## Clone the repository

    git clone https://github.com/PedroFelli/VUTTR-api.git


## Install the dependencies
    cd VUTTR-api

    yarn

## Edit .env

  Copy the `.env-example` to `.env`, and put your MONGODB_URL=

## Run the app

    yarn start


## Run the tests

    yarn jest

# Data Structures

## Tool (object)
+ id: 5f288c77ec82b65011cf6ab5 (string)
+ title: Notion (string)
+ description: All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. (string)
+ link: "https://github.com/typicode/hotel" (string)
+ tags: ["organization","organizing"] (Array[string])



## Tools [/tools]

### Retrieve All Tools [GET]
+ Response 200 (application/json)
    + Attributes (array[Tool])

## Tools [/tools?tag={$tag}]

### Retrieve All Tool with specific tag[GET]
+ Parameters
    + tag (string)
+ Response 200 (application/json)
    + Attributes (array[Tool])

## Tools [/tools]

### Create new Tool  [POST]
+ Request (application/json)
    + Body

            {
            "title": "hotel",
            "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
            "link": "https://github.com/typicode/hotel",
              "tags": [
                "node",
                "organizing"
              ],
          },
    + Schema

            {
              "$tools": "http://localhost/$tools/",
              "type": "object",
              "properties": {
                "title": {
                  "type": "string"
                },
                "description": {
                  "type": "string"
                },
                "link": {
                  "type": "string"
                },
                "tags": {
                  "type": "array",
                    "items": {
                    "type": "string"
                  },
                  "minItems": 1
                }
              }
            }
+ Response 201 (application/json)
    + Attributes (Tool)


## Tools [/tools/{$id}]

### Delete Tool[DELETE]
+ Parameters
    + id (string)
+ Response 204 (application/json)

