const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, maxLength: 255 },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 600 },
        videoId: { type: String, maxLength: 600 },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

//add plugins
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Course', Course);
