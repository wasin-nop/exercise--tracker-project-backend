const express = require("express");
const router = express.Router();

const records = require("../../data");

let currentRecordId = 3;

router.get("/", (req, res, next) => {
  console.log(records);
  res.send(records);
});

router.get("/:id", (req, res, next) => {
  const recordId = Number.parseInt(req.params.id, 10);
  const record = records.find((record) => record.id === recordId);
  res.send(record);
});

router.post("/", (req, res, next) => {
  const params = req.params;
  const query = req.query;
  const body = req.body;
  console.log(body);
  // validate

  currentRecordId += 1;
  const newRecord = {
    id: currentRecordId,
    ...req.body,
  };
  console.log(newRecord);
  records.push(newRecord);
  console.log(records);
  res.send(newRecord);
});

router.put("/:id", (req, res, next) => {
  const recordId = Number.parseInt(req.params.id, 10);
  console.log("recordId: ", recordId);
  const recordIndex = records.findIndex((record) => record.id === recordId);
  console.log("recordIndex", recordIndex);
  const updateRecord = {
    id: recordId,
    ...req.body,
  };
  console.log("updateRecord", updateRecord);
  records[recordIndex] = updateRecord;
  res.send(updateRecord);
});

router.delete("/:id", (req, res, next) => {
  const recordId = Number.parseInt(req.params.id, 10);
  const recordIndex = records.findIndex((record) => record.id === recordId);
  records.splice(recordIndex, 1);
  res.sendStatus(204);
});

module.exports = router;
