const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
var ddb = new AWS.DynamoDB();

ddb.listTables({ Limit: 10 }, (err, data) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("data", data);
  }
});
