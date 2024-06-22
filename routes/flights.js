'use strict'

import * as flightService from "../services/flight-service.js";

const calculateSchema = {
  schema: {
    description: 'Calculate flight total path source and destination',
    tags: ['flights'],
    body: {
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
      },
      examples: [
        { "flights": [['SFO', 'EWR']] },
        { "flights": [['ATL', 'EWR'], ['SFO', 'ATL']] },
        { "flights": [['IND', 'EWR'], ['SFO', 'ATL'], ['GSO', 'IND'], ['ATL', 'GSO']] },
      ],
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          totalFlightPath: {
            type: 'array',
            items: { type: 'string' }
          }
        }
      }
    }
  }
}

export default async function (fastify, _) {
  fastify.post('/calculate', calculateSchema, async function (request, _) {
    const { flights } = request.body;
    return { totalFlightPath: flightService.getTotalFlightPath(flights) }
  })
}
