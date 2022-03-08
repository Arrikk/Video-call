import moment from 'moment' 

export const formatDate = (time) => {
    return moment(time).format('h:mm A')
}