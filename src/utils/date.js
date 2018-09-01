import moment from 'moment'

export function today() {
    const currentDate = new Date()
    return moment(currentDate).format('YYYYMMDD')
}

export function yesterday(date) {
    const prevDate = moment(date, 'YYYYMMDD').subtract(1, 'day')
    return prevDate.format('YYYYMMDD')
}

export function formatDate(date) {
    return moment(date).format('MMM Do dddd')
}