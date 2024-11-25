// CommonJs
const fastify = require('fastify')({
    logger: true
  })
  
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
  
  /**
   * Run the server!
   */
  const start = async () => {
    try {
      await fastify.listen({ port: 5000 })
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start();