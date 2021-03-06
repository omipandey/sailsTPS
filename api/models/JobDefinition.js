/**
 * JobDefinition.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        id: {
            type: 'objectid'
        },
        name: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string'
        },

        createdAt: {
            type: 'datetime'
        },
        updatedAt: {
            type: 'datetime'
        }

    }

};
