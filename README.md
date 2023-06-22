# Nestjs Clean Architecture - Marvel Heroes

This API integrates with Marvel's API and allows users to search for heroes by name and mark them as favorites.

## Features

- Search for heroes by name or part of the name.
- Mark or unmark a hero as a favorite.
- List all heroes marked as favorites.

## Technologies Used

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- In-memory database

## Architecture

The project uses Clean Architecture, which separates responsibilities into layers, making the code more organized, easy to test, and maintain.

The directory structure is organized as follows:

```sh
src/
|-- app/
|   |-- main.ts
|-- modules/
|   |-- hero/
|   |   |-- adapter/
|   |   |   |-- input/
|   |   |   |   |-- heroes.controller.ts
|   |   |   |-- output/
|   |   |   |   |-- db
|   |   |   |   |   |-- in-memory-db.service.ts
|   |   |-- core/
|   |   |   |-- use-case/
|   |   |   |   |-- get-favorites.use-case.ts
|   |   |   |   |-- get-hero.use-case.ts
|   |   |   |   |-- toggle-favorite.use-case.ts
|   |   |   |-- domain/
|   |   |   |   |-- dto/
|   |   |   |   |   |-- create-hero-dto.ts
|   |   |   |   |   |-- search-heroes.dto.ts
|   |   |   |   |-- hero.entity.ts
|   |   |   |   |-- hero.repository.ts
|   |   |   |   |-- hero.service.ts
|   |   |   |   |-- hero.factory.ts
|   |   |-- hero.module.ts


|   |-- marvel-api/
|   |   |-- core
|   |   |   |-- domain/
|   |   |   |   |-- factories/
|   |   |   |   |   |  |-- hero/
|   |   |   |   |   |  |   |-- api-hero.factory.ts
|   |   |   |   |-- interfaces/
|   |   |   |   |   |  |-- hero/
|   |   |   |   |   |  |   |-- hero-api.interface.ts
|   |   |   |   |-- providers/
|   |   |   |   |   |  |-- interfaces/
|   |   |   |   |   |  |   |-- auth-params-provider.interface.ts
|   |   |   |   |   |  |-- auth-provider.ts
|   |   |   |   |-- marvel-api.service.ts
|   |   |-- marvel-api.module.ts

```

## How to Run the Project

1. Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

2. Clone the repository::

   ```sh
   git clone https://github.com/pedro-lucinda/nestjs-clean-arch
   cd nestjs-clean-arch
   ```

3. Install the dependencies:
   ```sh
   yarn i
   ```
4. Configure the environment variables. Create a .env file in the root of the project and add the following variables:

   ```sh
   PORT=3333
   MARVEL_API_URL=http://gateway.marvel.com
   MARVEL_API_PUBLIC_KEY=
   MARVEL_API_PRIVATE_KEY=

   ```

5. Run the project:

   ```sh
   yarn start:dev
   ```

6. The server will be running at http://localhost:3333. You can use an HTTP client, such as Postman, to make requests to the API.

## API Endpoints

- Search for a hero: GET /heroes?name=hero_name
- Mark/unmark hero as favorite: GET /heroes/favorite?id=hero_id
- List favorite heroes: GET /heroes/favorites
