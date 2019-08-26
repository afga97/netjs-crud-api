<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

It's a small learning project in which it is used **nestJs** with API RESTFULL, **postgreSQL** and **http://typeorm.io** with ***ORM***.
A task entity is built in wich the operations **CRUD** are implemented (CREATE, UPDATE, READ, DELETE). 
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Config database postgres

```bash
  CREATE database taskmanagement 
  or update config database in the file /src/config/typeorm.config.ts
```

## Routes APIS Task

```bash
# All tasks
GET:  '/tasks/'

# Search tasks for two parameters (Optionals)
GET: '/tasks/?search=parameter&status=parametertwo'

# Get task for id
GET: '/tasks/:id/'

#Create task, body = title, description (Required)
POST: '/tasks/'

# Update status task 
# body = status (OPEN, IN_PROGRESS, DONE)
PATCH: '/tasks/:id/status/'

#Delete task
DELETE: '/tasks/:id'
```
