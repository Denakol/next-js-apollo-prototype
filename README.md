# Prototype for creation apps quickly

#### Tech stack

- MySql Database
- Apollo Server+ TypeOrm
- NextJs + Apollo Client + React + Formik + Yup validation
- Eslint + Prettier
- graphql-codegen

#### Docker

````
docker-compose up
````



#### Manually

##### Api

- Set up database host, database name, port, user in `api/ormconfig.json`
- Use `yarn dev` for development and `yarn start` for production

##### Web
- Set up api url in `web/.env`
- Use `yarn dev` for development and `yarn build && yarn start` for production

#### Notes

There is graphql-codegen for preventing dummy coding of typings.

For generation on api   `yarn codegen`

For generation on web, set up graphql url in `web/codegen.yml` and run  `yarn codegen` .
