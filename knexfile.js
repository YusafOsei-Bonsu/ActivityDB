// Update with your config settings.
const env = require('dotenv').config().parsed;

module.exports = {
  test: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: env.yusaf_username,
      password: env.yusaf_pwd,
      database: 'mocha_chai_tv_shows_test',
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },

  // test: {
  //   client: 'pg',
  //   connection: 'postgres://localhost/project',
  //   migrations: {
  //     directory: __dirname + '/db/migrations'
  //   },
  //   seeds: {
  //     directory: __dirname + '/db/seeds/test'
  //   }
  // },


    development: {
      client: 'pg',
      connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Rasengan1',
        database: 'project',
        charset: 'utf8'    
      },
      migrations: {
        directory: __dirname + '/knex/migrations'
      },
      seeds:{
        directory: __dirname + '/knex/seeds'
      }
    },

    // development: {
    //   client: 'pg',
    //   connection: 'postgres://localhost/project',
    //   migrations: {
    //     directory: __dirname + '/knex/migrations'
    //   },
    //   seeds:{
    //     directory: __dirname + '/knex/seeds'
    //   }
    // },
  
    staging: {
      client: 'pg',
      connection: 'postgres://localhost/project',
      migrations: {
        tableName: 'knex_migrations'
      }
    },
  
    production: {
      client: 'pg',
      connection: 'postgres://localhost/project',
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  
  };
  
