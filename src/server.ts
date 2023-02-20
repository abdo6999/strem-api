import express,{Response,Request} from "express";
import * as bodyParser from "body-parser";
import * as env from "dotenv";
import movie from "./route/movie";
import user from "./route/user";
import watch_list from "./route/watch_list";
const app: express.Application = express();
const address = "4000";
app.use(bodyParser.json());

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World!");
});
movie(app)
user(app)
watch_list(app)
app.listen(address, function () {
  console.log(`starting app on: ${address}`);
});
export default app