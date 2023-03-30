import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
  {
    // username is the channelName
    customerType: {
      type: String,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    Address: {
      type: String,
    },

    carModel: {
      type: String,
    },

    carMake: {
      type: String,
    },
    carYear: {
      type: String,
    },

    carEngineNumber: {
      type: Number,
    },

    carChassisNumber: {
      type: Number,
    },
    carPlateNumber: {
      type: String,
    },

    contactNumber: {
      type: Number,
    },
  },
  { timestamps: true }
);

const ClientModel = mongoose.model("Clients", ClientSchema);

export default ClientModel;
