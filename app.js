const express = require(express)
const app = express()
const exphbs = require('express-handlebars')
const bcrypt = require('bcryptjs')
const methodOverride = require('method-override')

const PORT = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => res.send('hello world'))

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))