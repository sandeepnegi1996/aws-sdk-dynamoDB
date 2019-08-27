//load the sdk
const AWS = require("aws-sdk");
//configure region

AWS.config.update({ region: "us-east-2" });

var ddb = new AWS.DynamoDB();

var params = {
  AttributeDefinitions: [
    {
      AttributeName: "CUSTOMER_ID",
      AttributeType: "N"
    },
    {
      AttributeName: "CUSTOMER_NAME",
      AttributeType: "S"
    }
  ],
  KeySchema: [
    {
      AttributeName: "CUSTOMER_ID",
      KeyType: "HASH"
    },
    {
      AttributeName: "CUSTOMER_NAME",
      KeyType: "RANGE"
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName: "CUSTOMER_LIST",
  StreamSpecification: {
    StreamEnabled: false
  }
};

ddb.createTable(params, (err, data) => {
  if (err) {
    console.log("there is an error", err);
  } else {
    console.log("table created ", data);
  }
});
