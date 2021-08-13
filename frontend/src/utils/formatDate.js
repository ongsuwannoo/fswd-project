export const formatDate = (d) => {
    let date = new Date(d)
    let dd = date.getDate()
    let mm = date.getMonth() + 1
    let yyyy = date.getFullYear()
    let hh = date.getHours()
    let mi = date.getMinutes()
    if (dd < 10) { dd = '0' + dd }
    if (mm < 10) { mm = '0' + mm }
    if (hh < 10) { hh = '0' + hh }
    if (mi < 10) { mi = '0' + mi }
    return d = dd + '/' + mm + '/' + yyyy + ' ' + hh + ':' + mi
}
