import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from "react";
import Head from "next/head";

const NewMeetup = () => {
  const router = useRouter();
  const meetupHandler = async (eneteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(eneteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  };

  return (
    <Fragment>
      <Head>
        <title>Add New Meetup</title>
        <meta name="description" content="Add ur meetups here" />
      </Head>
      <NewMeetupForm onAddMeetup={meetupHandler} />
    </Fragment>
  );
};

export default NewMeetup;
