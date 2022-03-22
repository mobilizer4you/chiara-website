import { startApolloServer } from "./server";
import "dotenv/config";

startApolloServer()
  .then()
  .catch((error) => console.error(error));
