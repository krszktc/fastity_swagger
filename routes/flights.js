'use strict'

import * as flightService from "../services/flight-service.js";

const schema = {
  type: 'object',
  required: ['flights'],
  properties: {
    flights: {
      type: 'array',
      items: {
        type: 'array',
        items: {
          type: 'string'
        }
      }
    }
  }
}

export default async function (fastify, _) {
  fastify.post('/calculate', { schema }, async function (request, _) {
    const { flights } = request.body;
    return { totalFlightPath: flightService.getTotalFlightPath(flights) }
  })
}
