const BaseUrl = 'xx'
function request(form) {
    var {
        url,
        data ={}
    } = form
    return new Promise((resolve, reject)=> {
        if(url == 'https://123') {
            resolve(data)
        } else {
            reject('错误信息')
        }
    })
}
export default request