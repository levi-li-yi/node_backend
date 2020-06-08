const {getList, newBlog, updateBlog, deleteBlog}  = require('../controller/blog');
const {SuccessModel,ErrorModel} = require('../model/resModel');

const handleBlogHandRouter = (req, res) => {
    const method = req.method;

    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        const listData = getList(author, keyword);

        return new SuccessModel(listData)
    }

    if (method === 'GET' && req.path === '/api/blog/detail') {
        return {
            msg: 'detail'
        }
    }

    if (method === 'POST' && req.path === '/api/blog/new') {
        const data = newBlog(req.body)
        return new SuccessModel(data)
    }

    if (method === 'POST' && req.path === '/api/blog/update') {
        const result = updateBlog(req.query.id, req.body)
        return result ? new SuccessModel() : new ErrorModel()
    }

    if (method === 'POST' && req.path === '/api/blog/delete') {
        const result = deleteBlog(req.query.id)
        return result ? new SuccessModel() : new ErrorModel()
    }
}

module.exports = handleBlogHandRouter;