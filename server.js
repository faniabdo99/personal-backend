// Define the application
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const articleRouter = require('./routes/articles')
const contactRouter = require('./routes/contact')
app.use(cors())
// Other usages
app.use(bodyParser.urlencoded({
    extended: true
}));
// Routing
app.get('/' , (req, res) => {
    articles = [
        {title: 'This is the title', date: new Date()},
        {title: 'This is the title 2', date: new Date()},
        {title: 'This is the title 3', date: new Date()},
    ]
    res.render('index' , { articles })
})
app.use('/articles', articleRouter)
app.use('/contact', contactRouter)


// Run the app
app.listen(5000)
