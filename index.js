const Meet = require('./Meet');
const Group = require('./Group');
const Swimmer = require('./Swimmer');

const eightUnder = new Group('8 & Under', 0, 8.9999999);
const nineTen = new Group('9-10', 9, 10);
const elevenTwelve = new Group('11-12', 11, 12);
const thirteenOver = new Group('13 & Over', 13, Number.MAX_VALUE);

const event1 = "25 Yard Freestyle";
const event2 = "25 Yard Breaststroke";
const events = [event1, event2];

const maxton = new Swimmer('Maxton Pomykalski', 8, 'Male', [event1, event2]);
const maguire = new Swimmer('Maguire Pomykalski', 11, 'Female', [event2]);
const entries = [maxton, maguire];

const meet = new Meet(
  'Senior State',
  Date.now(),
  '1600 Dodge Ave, Evanston, Illinois',
  'Wildkit Swimming Organization',
  events,
  ['Girls', 'Boys'],
  [eightUnder, nineTen, elevenTwelve, thirteenOver],
  entries
);

const list = meet.eventList();
const psychSheet = meet.createPsychSheet(list);
console.log(psychSheet);