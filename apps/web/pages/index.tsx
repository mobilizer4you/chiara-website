import Link from "next/link";
import { Button } from "ui";
import { useGetBooksQueryQuery } from "../generated/graphql";
import { loadClient } from "../utils/utils";

import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";
import { clientLogout } from "../utils/firebase";

const Web = () => {
  const client = loadClient({ endPoint: `http://localhost:4000/graphql` });
  const { data } = useGetBooksQueryQuery(client);
  const { email, displayName } = useAuthUser();

  return (
    <>
      <h1>Web</h1>
      {/* eslint-disable-next-line react/display-name */}
      {data?.books.map((book) => (
        <div>
          <div>{book.title}</div>
          <div>{book.author}</div>
        </div>
      ))}
      <p>Your name is {displayName ? displayName : "unknown"} </p>
      <p>Your email is {email ? email : "unknown"}.</p>
      <button onClick={() => clientLogout()}>Logout</button>
      <Link href="/signin">Sign in</Link>
      <Button />
    </>
  );
};

// Note that this is a higher-order function.
export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Web);
