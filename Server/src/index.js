import express from 'express'
import cors from 'cors'
import mongoose, { mongo } from 'mongoose'
import { userRouter } from '../routes/users.js'
import { recipesRouter } from '../routes/recipes.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use("/auth", userRouter)
app.use("/recipes", recipesRouter)

mongoose.connect('mongodb+srv://sivajirayapu:bZ6chCpGiZ7ZoGbB@recipe.bu8oiiu.mongodb.net/recipe?retryWrites=true&w=majority&appName=recipe')
.then(success => {
    console.log('MongoDb Connected')
    app.listen(3001, () => console.log('Server Running at localhost:3001'))
 } )
.catch(err => console.log(err))







//bZ6chCpGiZ7ZoGbB
//mongodb+srv://sivajirayapu:<password>@recipe.bu8oiiu.mongodb.net/?retryWrites=true&w=majority&appName=recipe

