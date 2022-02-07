const ics = require('ics')
const fs = require('fs-extra')
const ho = require('./data/ho')
const yasmin = require('./data/yasmin')



ics.createEvents(ho.data, (error, value) => {
  if (error) {
    console.log(error)
    return
  }
  fs.writeFileSync('./dist/ho.ics', value, {encoding:'utf-8'})
})

ics.createEvents(yasmin.data, (error, value) => {
  if (error) {
    console.log(error)
    return
  }
  fs.writeFileSync('./dist/yasmin.ics', value, {encoding:'utf-8'})
})