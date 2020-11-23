import { app } from './app';
import './database/connection';
import 'dotenv/config';

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));