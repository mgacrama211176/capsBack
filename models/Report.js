import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema(
  {
    userReporting: {
      type: String,
      required: true,
    },
    channelReported: {
      type: String,
      required: true,
    },
    issues: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  { timestamps: true }
);

const ReportModel = mongoose.model("reports", ReportSchema);

export default ReportModel;
