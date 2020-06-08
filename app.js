const querystring = require('querystring');
const handleBlogHandRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');

const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({})
            return
        }
        if (req.headers['content-type'] !== 'application/json'){
            resolve({})
            return
        }
        let postData = '';
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(JSON.parse(postData))
        })
    })
    return promise
}

const serverHandle = (req, res) => {
    res.setHeader('Content-type', 'application/json');

    const url = req.url
    const path = url.split('?')[0];

    req.path = path;
    req.query = querystring.parse(url.split('?')[1]);

    getPostData(req).then((postData) => {
        req.body = postData;
        const blogData = handleBlogHandRouter(req, res);
        if (blogData) {
            res.end(
                JSON.stringify(blogData)
            )
            return
        }
        const userData = handleUserRouter(req, res);
        if (userData) {
            res.end(
                JSON.stringify(userData)
            )
            return
        }

        res.writeHead(404, {'Content-type': 'text/plain'})
        res.write('404 No Found');
        res.end()
    })
}

module.exports = serverHandle;