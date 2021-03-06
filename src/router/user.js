const {loginCheck} = require('../controller/user');
const {SuccessModel,ErrorModel} = require('../model/resModel');

const handleUserRouter = (req, res) => {
    const method = req.method;

    if (method === 'POST' && req.path === '/api/user/login') {
        const {username, password} = req.body
        const result = loginCheck(username, password)
        return result ? new SuccessModel() : new ErrorModel('失败')
    }
}

module.exports = handleUserRouter;