import { MongoClient } from "mongodb";

export const mongodbRequest = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://RudraDas:KyQHvS8dbDDNHMtH@cluster0.lfk6tup.mongodb.net/meetups?retryWrites=true&w=majority"
  ); //connecting to mongo db server
  const meetupCollections = client.db().collection("meetups"); //selecting the database & collections field

  return { meetupCollections, client };
};
