 module.exports = {
    
     mongodb: {
         adapter: 'sails-mongo',
         host: 'localhost', // Database IP
         port: 27017, // Database port
         // user: 'root', // Database User
         // password: '4c09536bf1445b60', // Database Password
         database: 'sailsTPS', // Schema name
         insecureAuth: true
     },

     database: "mongodb",

     log: {
         level: "debug", //log level to print
         file: "./sailsTPS.log", //file path with name of the log file
         json: false, // log will be printed in json format or simple text format
         tailable: true, //if tailable is true then new files will be created id file size reaches maxsize and total 5 files will be created
         maxsize: 104857600, // file size of the log file -- valid if tailable is true
         maxFiles: 5, // total number of files that will be created -- valid if tailable is true
         timeZone: "Asia/kolkata",
         timeStampFormat: "MM:DD:YYYY HH:mm:ss.SSS"
     }

 };
