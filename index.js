const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()
const PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json({extended: true}))

app.use('/api/post', require('./routes/post.routes'));


async function start() {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.vf3ef.mongodb.net/blog?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    app.listen(PORT, () => {
      console.log(`running ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
