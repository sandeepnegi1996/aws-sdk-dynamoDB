// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
var attr = require("dynamodb-data-types").AttributeValue;
// Set the region
AWS.config.update({ region: "us-east-2" });

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB();

var params = {
  TableName: "youtubeTable",
  Key: {
    DeviceId: { S: "NodeDevice1" },
    TimeStamp: { S: "1566553626391" }
  }
};

// Call DynamoDB to read the item from the table
ddb.getItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    // console.log("Success", data.Item);

    //  var obj = JSON.parse();
    // console.log(typeof data);
    // console.log(data.Item.DeviceId);
    // console.log(data.Item.data);
    // console.log(data.Item.data);
    // var unwrapped = attr.unwrap(data.Item.data.state);
    // console.log(unwrapped);
    // var unwrapped2 = attr.unwrap(unwrapped);
    // console.log(typeof unwrapped2); //reported
    // var unwrapped3 = attr.unwrap(unwrapped2);
    // console.log(typeof unwrapped3);
    var jsonString = JSON.stringify(data.Item.data["M"].state["M"]);
    jsonObj2 = JSON.parse(jsonString).reported.M;
    // let jsonarray = jsonString.match("");
    // console.log(jsonarray);

    var unwrapped = attr.unwrap(jsonObj2);
    console.log(unwrapped.color);
    console.log(unwrapped.temperature);
    console.log(unwrapped.DeviceId);
  }
});

// "data": {
//     "state": {
//       "reported": {
//         "color": "brown",
//         "DeviceId": "nodedevice1",
//         "temperature": 27
//       }
//     }
//   }

//dynamo-dt-attr-unwrap '{"data": {"state": {"reported": {"color": "brown","DeviceId": "nodedevice1","temperature": 27}}}}'
