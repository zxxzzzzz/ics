const dayjs = require('dayjs')



const d = dayjs('2022/02/11', 'YYYY/MM/DD')

const events = Array(12).fill(0).map((_, cycleIndex) => {
  return Array(21).fill(0).map((_, dayIndex) => {
    const td = d.add(cycleIndex * 28 + dayIndex, 'day')
    const td2 = d.add(cycleIndex * 28 + dayIndex + 1, 'day')
    return {
      start: [td.year(), td.month() + 1, td.date()],
      end: [td2.year(), td2.month() + 1, td2.date()],
      title: '记得吃药',
      alarms: [
        { action: 'display', description: '吃药', trigger: [td.year(), td.month() + 1, td.date(), 12, 30] },
        { action: 'display', description: '吃药', trigger: [td.year(), td.month() + 1, td.date(), 18, 30] },
        { action: 'display', description: '吃药', trigger: [td.year(), td.month() + 1, td.date(), 22, 00] }
      ]
    }
  })
}).flat()
console.log(events);

exports.data = events