// CommonJs
const fastify = require('fastify')({
    logger: true
  })

  const port = 3000;

  const cors = require('cors');

  fastify.register(cors, { 
    // make customizations here
  });

  //fastify.use(require('cors')())

  fastify.get('/', async (request, reply) => {
    return { HELLO_WORLD: 'Fastify API on Google Cloud Run! woho' }
  })
  
  /**
   * Run the server!
   */
  const start = async () => {
    try {
      await fastify.listen({ port: port })
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start();