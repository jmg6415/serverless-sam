'use strict';
var moment = require('moment');

exports.handler = (event, context, callback) => {

    var originURL = process.env.ORIGIN_URL || '*';

   // var totalSAMs = 23;
    
    
    var speed = 65;

    callback(null, {
        "statusCode": 200,
        "body": totalSAMs,
        "headers":
        {
            "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Methods": "GET,OPTIONS",
            "Access-Control-Allow-Origin": originURL
        }
    });
}
/*
function emitLambdaAge() {
    var now = moment();
    var lambdaAnnouncement = moment('2014-11-04');

    var daysOld = now.diff(lambdaAnnouncement, 'days');

    console.log('Lambda is ' + daysOld + ' days old!');
}*/
