const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionID: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
            minLength: 1,
        },
        username: {
            type: String,
            required: true,
        },
        createAt: {
            type: Date,
            default: Date.now,
            get: formatDate,
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

function formatDate(createAt) {
    return createAt.toLocaleDateString("en-US", {
        day: '2-digit',
        year: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
    });
}

module.exports = reactionSchema;