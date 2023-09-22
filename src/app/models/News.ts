import mongoose from 'mongoose'
import { Schema, model, connect } from 'mongoose';
import slug from 'mongoose-slug-generator';

//Get slug and add to schema
mongoose.plugin(slug);

const News = new Schema({
    name: { type: String, default: 'Newsfeed Default' },
    description: { type: String, default: 'Description Default' },
    createdAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
    //Unique -> Slug + ID => Không trùng lặp slug -> show
    slug: { type: String, slug: 'name', unique: true }
});

export default mongoose.model('News', News)