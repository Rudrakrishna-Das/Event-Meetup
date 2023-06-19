import Link from "next/link";
import classes from "./MainNavigation.module.css";
import { useRouter } from "next/router";

function MainNavigation() {
  const router = useRouter();
  const goToHome = () => {
    router.push("/");
  };
  return (
    <header className={classes.header}>
      <div>
        <button className={classes.logo} onClick={goToHome}>
          Meetups
        </button>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
