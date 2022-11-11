function formatDate(timestamp) {
    var date = new Date(timestamp);
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var day = date.getDate();
    return year + '-' + month + '-' + day;
}

export default formatDate;
