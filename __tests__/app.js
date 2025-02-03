const express = require('express');
const cors = require('cors');

const flightList = [
  {
    uuid: 'af6fa55c-da65-47dd-af23-578fdba40bed',
    departure: 'ICN',
    destination: 'CJU',
    departure_times: '2024-12-02T12:00:00',
    arrival_times: '2024-12-03T12:00:00',
  },
  {
    uuid: 'af6fa55c-da65-47dd-af23-578fdba40byd',
    departure: 'ICN',
    destination: 'PUS',
    departure_times: '2024-12-03T12:00:00',
    arrival_times: '2024-12-03T12:00:00',
  },
  {
    uuid: 'af6fa55c-da65-47dd-af23-578fdba48bed',
    departure: 'ICN',
    destination: 'CJU',
    departure_times: '2024-12-03T12:00:00',
    arrival_times: '2024-12-04T12:00:00',
  },
  {
    uuid: 'af6fa55c-da65-47dd-af23-578fdbr40bed',
    departure: 'ICN',
    destination: 'CJU',
    departure_times: '2024-12-03T12:00:00',
    arrival_times: '2024-12-04T12:00:00',
  },
  {
    uuid: 'af6fa55c-da65-47dd-af23-578fd7a40bed',
    departure: 'ICN',
    destination: 'BKK',
    departure_times: '2024-12-02T12:00:00',
    arrival_times: '2024-12-03T12:00:00',
  },
  {
    uuid: 'af6fa55c-da65-47dd-af23-578fdba40bod',
    departure: 'ICN',
    destination: 'CJU',
    departure_times: '2024-12-02T12:00:00',
    arrival_times: '2024-12-03T12:00:00',
  },
  {
    uuid: 'af6fa55c-da65-47dd-af23-578fdba44bed',
    departure: 'ICN',
    destination: 'CJU',
    departure_times: '2024-12-03T12:00:00',
    arrival_times: '2024-12-03T12:00:00',
  },
  {
    uuid: 'af6fa55c-da65-47dd-af23-578fdba42bed',
    departure: 'CJU',
    destination: 'ICN',
    departure_times: '2024-12-03T12:00:00',
    arrival_times: '2024-12-04T12:00:00',
  },
  {
    uuid: 'af6fa55c-da65-47dd-af23-578fdba41bed',
    departure: 'CJU',
    destination: 'ICN',
    departure_times: '2024-12-03T12:00:00',
    arrival_times: '2024-12-03T12:00:00',
  },
  {
    uuid: 'af6fa55c-da65-47dd-af23-578fdba99bed',
    departure: 'CJU',
    destination: 'ICN',
    departure_times: '2024-12-03T12:00:00',
    arrival_times: '2024-12-04T12:00:00',
  },
  {
    uuid: 'af6fa55c-da65-47dd-af23-578fdba50bed',
    departure: 'CJU',
    destination: 'ICN',
    departure_times: '2024-12-02T12:00:00',
    arrival_times: '2024-12-03T12:00:00',
  },
];

const app = express();
app.use(cors());

app.get('/flight', async (req, res) => {
  res.status(200).json(flightList);
});

const server = app.listen(4999);

console.log('http://localhost:4999/flight 에서 항공편을 얻을 수 있습니다');

module.exports = {
  app,
  server,
};
