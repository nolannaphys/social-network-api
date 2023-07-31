const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [Reaction],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

function formatDate(createAt) {
    return createAt.toLocaleDateString("en-US", {
        day: '2-digit',
        year: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
    });
}

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;