let API_DOMAIN = '/api/'

// 如果是build后的生产环境
if(process.env.NODE_ENV === 'production') {
    API_DOMAIN = 'http://xxxxxx'
}

// API请求正常，数据正常
export const API_CODE = {
    // API请求正常
    OK: '200',
    // API请求正常，数据异常
    ERR_DATA: '403',
    // API请求正常，空数据
    ERR_NO_DATA: '301',
    // API请求正常，登录异常
    ERR_LOGOUT: '401'
}
// API请求异常
export const API_FAILED = '网络连接异常，请稍后再试';
export const API_LOGOUT = '您的账号已在其他设备登录，请重新登录';


export const API_LIST = {
    // 获取数据
    GET_DATA: API_DOMAIN + 'getData'
}