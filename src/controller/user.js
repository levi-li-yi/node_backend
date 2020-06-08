const loginCheck = (username, password) => {
    if (username === 'zs' && password === '123') {
        return {
            msg: '登录'
        }
    }
}

module.exports = {
    loginCheck
}