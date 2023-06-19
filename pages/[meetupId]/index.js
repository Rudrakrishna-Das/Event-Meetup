import { ObjectId } from "mongodb";

import MeetupDetails from "../../components/meetups/MeetupDetails";
import { mongodbRequest } from "../../refactored-code/mongodb-code";
import { Fragment } from "react";
import Head from "next/head";

const DetailsPage = (props) => {
  const detailsOfMeetup = props.meetups;

  return (
    <Fragment>
      <Head>
        <title>{detailsOfMeetup.title}</title>
        <meta name="description" content={detailsOfMeetup.description} />
      </Head>
      <MeetupDetails
        title={detailsOfMeetup.title}
        image={detailsOfMeetup.image}
        address={detailsOfMeetup.address}
        description={detailsOfMeetup.description}
      />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const { meetupCollections, client } = await mongodbRequest();
  const meetupData = await meetupCollections.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: "blocking",
    paths: meetupData.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(), //  key name coming from dynamic folder name
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId; //getting from getStaticPaths function

  const { meetupCollections, client } = await mongodbRequest();
  const detailsOfMeetup = await meetupCollections.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();

  const meetup = {
    title: detailsOfMeetup.title,
    image: detailsOfMeetup.image,
    address: detailsOfMeetup.address,
    description: detailsOfMeetup.description,
  };

  return {
    props: {
      meetups: meetup,
    },
  };
};

export default DetailsPage;
