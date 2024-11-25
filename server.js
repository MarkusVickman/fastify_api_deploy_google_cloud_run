// CommonJs
const fastify = require('fastify')({
    logger: true
  })

  const port = 3000;
  fastify.use(require('cors')())

  fastify.get('/', async (request, reply) => {
    return { hello: 'world... Fastify API' }
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