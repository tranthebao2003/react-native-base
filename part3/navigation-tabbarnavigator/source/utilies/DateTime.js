import moment from "moment"

export default covertDateTimeToString = (datetime) => {
    // gọi module moment và tham số là date string cần xử lí
    // sau đó định dạng kiểu date muốn chuyển thành111
    return moment(datetime).format('DD/MM/YYYY')
}