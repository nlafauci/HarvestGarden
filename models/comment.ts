import mongoose, { Document, Schema } from 'mongoose';

interface Comment extends Document {
    author: string;
    content: string;
}

const commentSchema: Schema<Comment> = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    content: { type: String, default: '' },
});

export default mongoose.model<Comment>('Comment', commentSchema);