const postRoutes = require("./postRouter")

module.exports = (app) => {
    app.use('/api/post',postRoutes)
}