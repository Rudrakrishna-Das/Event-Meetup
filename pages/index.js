import { mongodbRequest } from "../refactored-code/mongodb-code"; // as this is used in server side that will not include in clientside

import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Meetup Events</title>
        <meta
          name="description"
          content="You Can add ur Meetups, and raise ur connection"
        />
      </Head>
      <MeetupList meetups={props.meetup} />
    </Fragment>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const { meetupCollections, client } = await mongodbRequest();

  const meetups = await meetupCollections.find().toArray(); // find method will find all documents and toArray will return a array of documents
  client.close();
  return {
    props: {
      meetup: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 0.1,
  };
};
