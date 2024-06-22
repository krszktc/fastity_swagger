'use strict'

import { test } from 'node:test'
import { equal } from 'node:assert'
import { getTotalFlightPath } from '../services/flight-service.js'


test('calculation scenario 1', async () => {
  const calculation = getTotalFlightPath([
    ['IID', 'FFA'],
    ['RSP', 'FFS'],
    ['UIA', 'RSP'],
    ['QQR', 'JJU'],
    ['XCB', 'IID'],
    ['RCA', 'XCB'],
    ['TUU', 'WQE'],
    ['JJU', 'ZZZ'],
    ['IUR', 'KRT'],
    ['WQE', 'QQR'],
    ['FFA', 'UIA'],
    ['KRT', 'TUU'],
    ['AAA', 'RCA'],
    ['FFS', 'IUR'],
  ])
  equal(calculation[0], 'AAA');
  equal(calculation[1], 'ZZZ');
});

test('calculation scenario 2', async () => {
  const calculation = getTotalFlightPath([
    ['IND', 'EWR'],
    ['SFO', 'ATL'],
    ['GSO', 'IND'],
    ['ATL', 'GSO'],
  ])
  equal(calculation[0], 'SFO');
  equal(calculation[1], 'EWR');
});

test('calculation scenario 3', async () => {
  const calculation = getTotalFlightPath([
    ['ATL', 'EWR'],
    ['SFO', 'ATL'],
  ])
  equal(calculation[0], 'SFO');
  equal(calculation[1], 'EWR');
});

test('calculation scenario 4', async () => {
  const calculation = getTotalFlightPath([
    ['SFO', 'EWR']
  ])
  equal(calculation[0], 'SFO');
  equal(calculation[1], 'EWR');
});
