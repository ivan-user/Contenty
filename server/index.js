import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import postRoutes from './routes/posts.js'

const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(cors());

app.use('/posts', postRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);