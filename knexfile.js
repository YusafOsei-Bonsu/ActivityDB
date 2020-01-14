// Update with your config settings.

module.exports = {
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
  
