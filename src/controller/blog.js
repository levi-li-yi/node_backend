const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: 'title',
            content: 'content',
            createTime: 'time',
            author: 'XX'
        },
        {
            id: 2,
            title: 'title1',
            content: 'content1',
            createTime: 'time1',
            author: 'YY'
        }
    ]
}

const newBlog = (blogData = {}) => {
    // blogData对象
    return {
        id: 3
    }
}

const updateBlog = (id, blogData = {}) => {
    return true
}

const deleteBlog = (id) => {
    return true
}

module.exports = {
    getList,
    newBlog,
    updateBlog,
    deleteBlog
}