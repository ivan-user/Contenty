import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import postRoutes from './routes/posts.js'


const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://ivan-user:tr4n5form3r5@contenty.xbhz4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);