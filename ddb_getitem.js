// const AWS = require("aws-sdk");
// AWS.config.update({ region: "us-east-2" });

// var ddb = new AWS.DynamoDB();

// var params = {
//   TableName: "CUSTOMER_LIST",
//   Key: {
//     CUSTOMER_ID: { N: "001" }
//   }
// };

// ddb.getItem(params, (err, data) => {
//   if (err) {
//     console.log("err in the request is ", err);
//   } else {
//     console.log("data", data);
//   }
// });

// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");

// Set the region
AWS.config.update({ region: "us-east-2" });

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB();

var params = {
  TableName: "CUSTOMER_LIST",
  Key: {
    CUSTOMER_ID: { N: "001" },
    CUSTOMER_NAME: { S: "sandy" }
  }
};

// Call DynamoDB to read the item from the table
ddb.getItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Item);
  }
});
