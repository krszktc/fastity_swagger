'use strict'

import AutoLoad from '@fastify/autoload'
import { resolve, join } from 'path';

const options = {}

export default async function (fastify, opts) {
  const dirName = resolve();

  fastify.register(AutoLoad, {
    dir: join(dirName, 'plugins'),
    options: Object.assign({}, opts)
  })

  fastify.register(AutoLoad, {
    dir: join(dirName, 'routes'),
    options: Object.assign({}, opts)
  })
}

const _options = options
export { _options as options }
