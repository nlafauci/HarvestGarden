import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGO_URI!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Plant and Comment models
import PlantModel, { Plant } from './plant';
import CommentModel, { Comment } from './comment';

export { Plant, Comment };
export default { Plant: PlantModel, Comment: CommentModel };
