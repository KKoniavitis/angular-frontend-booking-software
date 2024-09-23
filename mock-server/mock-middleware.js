const uuid = require("uuid");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");

dayjs.extend(utc);

module.exports = (req, res, next) => {
  console.log("MIDDLEWARE");

  res.setHeader("Access-Control-Allow-Origin", "*");
  //res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, X-Auth-Token, Accept");

  // Handle preflight requests (OPTIONS) for POST requests
  if (req.method === "OPTIONS" && req.headers["access-control-request-method"]) {
    res.sendStatus(200);
  } else {
    if (req.url === "/enterprises" && req.method === "POST") {
      console.log("Add enterprise id and enrich data");

      req.body = {
        ...req.body,
        id: uuid.v4(),
        lastUpdated: dayjs().utc().valueOf(),
        relationships: {
          serviceProfile: {
            id: req.body.serviceProfileId,
            apcode: req.body.serviceProfileId,
            name: req.body.serviceProfileId,
            notes: req.body.notes
          }
        },
        sites: []
      };

      console.log("Enriched enterprise: ", req.body);
    }

    next();
  }
};
