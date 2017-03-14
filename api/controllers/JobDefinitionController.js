/**
 * JobDefinitionController
 *
 * @description :: Server-side logic for managing Jobdefinitions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function(req, res) {
        var start = new Date().getTime();
        var output = {};
        var dataToInsert = req.body;
        //create the JobDefinition 
        JobDefinition.create(dataToInsert)
            .then(function(createdTarget) {
                sails.logger.info("JobDefinition is created");
                sails.logger.debug('created JobDefinition ', createdTarget);
                res.status(sails.HTTPSTATUS.CREATED);
                res.json(createdTarget);
            }).catch(function(error) {
                sails.logger.error(error);
                res.json(error);
            });
    },


    update: function(req, res) {
        var start = new Date().getTime();
        var output = {};
        var dataToUpdate = req.body;
        var jobdefinitionId = req.params.jobdefinitionId;

        JobDefinition.findOne({ where: { id: jobdefinitionId } })
            .then(function(dataById) {

                // checking if JobDefinition is present in the database
                if (dataById === undefined) {
                    sails.logger.info("JobDefinition is not found in the database");
                    throw { message: "JOBDEFINITION_NOT_FOUND" };
                }

                return JobDefinition.update({ id: jobdefinitionId }, dataToUpdate);
            }).then(function(updatedTarget) {
                sails.logger.info("JobDefinition with Id" + jobdefinitionId + " is updated");
                sails.logger.debug('updated JobDefinition ', updatedTarget[0]);
                res.status(sails.HTTPSTATUS.OK);
                res.json(updatedTarget[0]);
            }).catch(function(error) {
                sails.logger.error(error);
                res.json(error);
            });
    },

};
