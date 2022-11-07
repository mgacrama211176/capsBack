import { createError } from "../error.js";

import Report from "../models/Report.js";

//localhost:4000/api/reports/All
export const viewReports = async (request, response, next) => {
  try {
    const reportedData = await Report.find({});
    response.status(200).json(reportedData);
  } catch (err) {
    response.status(500).json(err);
  }
};

//localhost:4000/api/reports/addReport
export const addReport = async (request, response, next) => {
  const currentUser = request.body.userReporting;
  const channelName = request.body.channelReported;
  const issues = request.body.issues;
  const desc = request.body.desc;
  console.log(currentUser);
  console.log(channelName);
  console.log(issues);
  console.log(desc);

  try {
    const newReport = new Report({
      userReporting: currentUser,
      channelReported: channelName,
      issues: issues,
      desc: desc,
    });
    const savedReport = await newReport.save();
    console.log(savedReport);
    response.status(200).json(savedReport);
  } catch (err) {
    console.log(err);
  }
};
