const express = require('express')

const app = express()
const router = express.Router()

app.use(express.json())

app.use('/user', router)


router.get('/info', (req, res, next) => {
    res.send('error is thrown')
    next(new Error('hello wolrd'))
})

app.use((err, res, req, next) => {
    console.log(err)
})

app.listen(3000, () => {
    console.log("app is listening")
})

// process.on('uncaughtException', (err) => {
//     console.log("got the error")
// })