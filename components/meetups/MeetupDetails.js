import { useRouter } from "next/router";
import Classes from "./MeetupDetails.module.css";

const MeetupDetails = (props) => {
  const router = useRouter();

  const goingBackHandler = () => {
    router.push("/");
  };
  return (
    <section className={Classes.details}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>

      <button className={Classes.back} onClick={goingBackHandler}>
        Back
      </button>
    </section>
  );
};

export default MeetupDetails;
