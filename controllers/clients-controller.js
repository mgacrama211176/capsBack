import ClientModel from "../models/Clients.js";

//Adding new client to the database
export const Add = async (request, response, next) => {
  const client = request.body;
  try {
    const newClient = await ClientModel(client);
    console.log(newClient);

    await newClient.save();
    response.status(201).send(newClient);
  } catch (err) {
    next(err);
  }
};
