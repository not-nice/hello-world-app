console.log("Hello, World!");
const AWS = require('aws-sdk');

// Configure AWS SDK with your credentials and region
AWS.config.update({
  accessKeyId: '094423642169',
  region: 'us-east-1',
});

// Create an RDS client
const rds = new AWS.RDS();

// Use the RDS client to interact with your database
// Example: Retrieve data from the RDS instance
rds.describeDBInstances({}, (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});

console.log("Hello, World!");
