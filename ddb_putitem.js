const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });

const ddb = new AWS.DynamoDB();

//put the item in the dynamo db

var params = {
  TableName: "CUSTOMER_LIST",
  Item: {
    CUSTOMER_ID: { N: "004" },
    CUSTOMER_NAME: { S: "driviz" }
  }
};

ddb.putItem(params, (err, data) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("data", data);
  }
});
