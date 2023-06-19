// url for this api file is /api/new-meetup
import { mongodbRequest } from "../../refactored-code/mongodb-code";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const { meetupCollections, client } = await mongodbRequest();

    const result = await meetupCollections.insertOne(data); // inserting the data

    client.close(); // closing the server
    res.status(201).json({ message: "Meetup inserted" }); //sending message to frontend
  }
};

export default handler;
