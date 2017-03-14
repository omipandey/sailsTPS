var winston = require('winston');
var moment = require('moment-timezone');
var baseConfigurationFile = require('../../config').log;
var logConfiguration = baseConfigurationFile;

/***************************************************************
 *These are the function exposed by logging service api 
 *
 ****************************************************************/
module.exports = {
    logger: logger
};



/*File transport options configuration starts */
//This is the base configuration for file transport 
var fileTransportsOptions = {
    level: logConfiguration.level,
    filename: logConfiguration.file,
    tailable: logConfiguration.tailable,
    json: logConfiguration.json,
    timestamp: function() {
        return moment().tz(logConfiguration.timeZone).format(logConfiguration.timeStampFormat);
    },


};
//some configurations will be added depending upon the options given in the config file
//if tailable is true then only we need to include maxsixe and maxFiles in the options
if (logConfiguration.tailable === true) {
    fileTransportsOptions.maxsize = logConfiguration.maxsize;
    fileTransportsOptions.maxFiles = logConfiguration.maxFiles;
}
/*File transport options configuration ends */

//This is the base configuration for console transport 
var consoleTransportsOptions = {
    level: logConfiguration.level,
    json: logConfiguration.json,
    timestamp: function() {
        return moment().tz(logConfiguration.timeZone).format(logConfiguration.timeStampFormat);
    },


};
/* Now cheking which transport method is set


/*logger options */
var loggerOptions = {
    transports: [
        new(winston.transports.File)(fileTransportsOptions)
    ]
};
/*Creating a new logger for whole system */
var baseLogger = new(winston.Logger)(loggerOptions);


function logger() {
    return baseLogger;
}
