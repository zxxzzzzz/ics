const ics = require('ics')
const fs = require('fs-extra')

const events = [{
  calName:'2022假期安排',
  start: [2022, 1, 1],
  end: [2022, 1, 4],
  title: '元旦',
  categories:['假期']
},
{
  calName:'2022假期安排',
  start: [2022, 1, 29],
  end: [2022, 1, 31],
  title: '春节调休',
  categories:['上班']
},
{
    calName:'2022假期安排',
  start: [2022, 1, 31],
  end: [2022, 2, 7],
  title: '春节',
  categories:['假期']
},
{
    calName:'2022假期安排',
  start: [2022, 4, 2],
  end: [2022, 4, 3],
  title: '清明调休',
  categories:['上班']
},
{
    calName:'2022假期安排',
  start: [2022, 4, 3],
  end: [2022, 4, 6],
  title: '清明节',
  categories:['假期']
},
{
    calName:'2022假期安排',
  start: [2022, 4, 24],
  end: [2022, 4, 25],
  title: '劳动节调休',
  categories:['上班']
},
{
    calName:'2022假期安排',
  start: [2022, 4, 30],
  end: [2022, 5, 5],
  title: '劳动节',
  categories:['假期']
},
{
    calName:'2022假期安排',
  start: [2022, 5, 7],
  end: [2022, 5, 8],
  title: '劳动节调休',
  categories:['上班']
},
{
    calName:'2022假期安排',
  start: [2022, 6, 3],
  end: [2022, 6, 6],
  title: '端午节',
  categories:['假期']
},
{
    calName:'2022假期安排',
  start: [2022, 9, 10],
  end: [2022, 9, 13],
  title: '中秋节',
  categories:['假期']
},
{
    calName:'2022假期安排',
  start: [2022, 10, 1],
  end: [2022, 10, 8],
  title: '国庆节',
  categories:['假期']
},
{
    calName:'2022假期安排',
  start: [2022, 10, 8],
  end: [2022, 10, 10],
  title: '国庆节调休',
  categories:['上班']
},
]



ics.createEvents(events, (error, value) => {
  if (error) {
    console.log(error)
    return
  }
  fs.writeFileSync('./ho.ics', value, {encoding:'utf-8'})
  console.log(value)
  // BEGIN:VCALENDAR
  // VERSION:2.0
  // CALSCALE:GREGORIAN
  // PRODID:adamgibbons/ics
  // METHOD:PUBLISH
  // X-PUBLISHED-TTL:PT1H
  // BEGIN:VEVENT
  // UID:d9e5e080-d25e-11e8-806a-e73a41d3e47b
  // SUMMARY:Bolder Boulder
  // DTSTAMP:20181017T204900Z
  // DTSTART:20180530T043000Z
  // DESCRIPTION:Annual 10-kilometer run in Boulder\, Colorado
  // X-MICROSOFT-CDO-BUSYSTATUS:BUSY
  // URL:http://www.bolderboulder.com/
  // GEO:40.0095;105.2669
  // LOCATION:Folsom Field, University of Colorado (finish line)
  // STATUS:CONFIRMED
  // CATEGORIES:10k races,Memorial Day Weekend,Boulder CO
  // ORGANIZER;CN=Admin:mailto:Race@BolderBOULDER.com
  // ATTENDEE;RSVP=TRUE;ROLE=REQ-PARTICIPANT;PARTSTAT=ACCEPTED;CN=Adam Gibbons:mailto:adam@example.com
  // ATTENDEE;RSVP=FALSE;ROLE=OPT-PARTICIPANT;DIR=https://linkedin.com/in/brittanyseaton;CN=Brittany
  //   Seaton:mailto:brittany@example2.org
  // DURATION:PT6H30M
  // END:VEVENT
  // END:VCALENDAR
})