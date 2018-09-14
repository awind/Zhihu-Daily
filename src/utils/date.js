export const formatDate = date => {
    const showDay = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    const dates = new Date(date)
    const month = dates.getMonth() + 1
    const day = dates.getDate()
    const weekDay = dates.getDay()
    const week = showDay[weekDay]
    return formatNumber(month) + "月" + formatNumber(day) + "日 " + week
}

export const simpleDateFormat = date => {
    const dates = new Date(date)
    const month = dates.getMonth() + 1
    const day = dates.getDate()
    return dates.getFullYear() + "" + formatNumber(month) + "" + formatNumber(day)
}
  
const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}
  
export function dateBefore(dates, before) {
    let date = new Date(dates)
    date.setDate(date.getDate() - before)
    return date.getFullYear() + "-" + formatNumber(date.getMonth() + 1) + "-" + formatNumber(date.getDate())
  }
  
//获取当前时间
export function getCurrentDate() {
    var date = new Date()
    var todate = date.getFullYear() + "-" + formatNumber(date.getMonth() + 1) + "-" + formatNumber(date.getDate())
    return todate
}