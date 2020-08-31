import { Connection } from 'typeorm/connection/Connection'
import { createConnection } from 'typeorm'

async function createFirstConnection(): Promise<{
  connection: Connection | null
  exception?: Error
}> {
  let i = 10
  let lastException = null
  while (i > 0) {
    try {
      return { connection: await createConnection() }
    } catch (ex) {
      lastException = ex
      i--
      await sleep(5000)
    }
  }
  return {
    connection: null,
    exception: lastException,
  }
}

function sleep(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

export { createFirstConnection }
