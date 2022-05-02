const logModel = require("../models/Log");
const asyncWrapper = require("../middleware/async");

const getAllLogs = asyncWrapper(async(req,res)=>{
  const allLogs = await logModel.find({})
  res.status(201).json(allLogs)
})
const getLog = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const {content:userLog} = await logModel.findById(id).exec();
  console.log(userLog);
  res.status(201).send("Successfuly response")
})

const createLog = asyncWrapper(async (req, res) => {
  const log = req.body;
  const {_id} = await logModel.create(log);
  res.status(201).json({
    id:_id
  })
});
module.exports = {
  getLog,
  createLog,
  getAllLogs
};
