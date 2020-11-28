import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'Connection error:'));

connection.once('open', () => console.log('Connected to MongoDB!'));

export { connection };