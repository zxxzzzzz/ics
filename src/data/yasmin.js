const dayjs = require('dayjs')



const d = dayjs('2022/02/11', 'YYYY/MM/DD')

const events = Array(12).fill(0).map((_, cycleIndex) => {
  return Array(21).fill(0).map((_, dayIndex) => {
    const td = d.add(cycleIndex * 28 + dayIndex, 'day')
    const td2 = d.add(cycleIndex * 28 + dayIndex + 1, 'day')
    return {
      start: [td.year(), td.month() + 1, td.date()],
      end: [td2.year(), td2.month() + 1, td2.date()],
      title: `吃第${dayIndex+1}片药`,
      alarms: [
        { action: 'display', description: '吃药', trigger: [td.year(), td.month() + 1, td.date(), 17, 00] },
        { action: 'display', description: '吃药', trigger: [td.year(), td.month() + 1, td.date(), 17, 30] }
      ]
    }
  })
}).flat()
exports.data = events