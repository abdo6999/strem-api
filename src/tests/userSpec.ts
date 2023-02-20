import { User } from "../models/users";
import supertest from "supertest";
import app from "../server";
const request = supertest(app);
let user = new User();
describe("Test user values", () => {
  it("get (users) endpoint retarn value", async () => {
    const response = await user.get()
    expect(Object.keys(response[0])).toEqual([
      "id",
      "firstname",
      "lastname",
      "password",
      "email",
      "gender",
      "username"
    ]);
  });
  it("get (users/:id) endpoint retarn value", async () => {
    const response = await user.show(5)
    let match = 0;
    let values = [
      5,
      "Mavis",
      "Schultz",
      ,
      "kmeus4@upenn.edu",
      "male",
      "kmeus4"
    ];
    let res = Object.values(response);
    for (let i = 0; i < res.length; i++) {
      if (values[i] === res[i]) {
        match += 1;
      }
    }
    expect(match).toBe(6);
  });
  it("post (user) endpoint retarn value", async () => {
    const response = await user.create({
      firstname: "Mavis",
      lastname: "Schultz",
      gender: "male",
      email: "kmeus4@upenn.edu",
      username: "kmedsasseus4",
      password: "fghfdhdfgh"
    });
    expect(Object.keys(response)).toEqual(["accessToken", "refreshToken"]);
  });
  it("check update-user endpoint retarn value", async () => {
    const response = await user.update({
        lastname: "Schulssstz",
        email: "kddddd4@upenn.edu"
      },8)
    expect(response).toEqual({
      lastname: "Schulssstz",
      email: "kddddd4@upenn.edu"
    });
  });
});

//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------

describe("Test user responses", () => {
  it("get (users) with Unauthorized endpoint to be 401", async () => {
    const response = await request.get("/users");
    expect(response.status).toBe(401);
  });
  it("get (users) with authorized endpoint to be 200", async () => {
    const response = await request
      .get("/users")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlyYWlnZGQ0YXR0MyIsImlhdCI6MTY3Njg4MTY3NywiZXhwIjoxNjc3MDU0NDc3fQ.b4DfXeibAZkn7Ewo-8VKf1fqaEGnYRLPI_T7XvmqaVU"
      );
    expect(response.status).toBe(200);
  });
  it("get (user/:id) with Unauthorized and  invalid query endpoint to be 401", async () => {
    const response = await request.get("/users/555");
    expect(response.status).toBe(401);
  });
  it("get (user/:id) with authorized valid query endpoint to be 200", async () => {
    const response = await request
      .get("/users/7")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlyYWlnZGQ0YXR0MyIsImlhdCI6MTY3Njg4MTY3NywiZXhwIjoxNjc3MDU0NDc3fQ.b4DfXeibAZkn7Ewo-8VKf1fqaEGnYRLPI_T7XvmqaVU"
      );
    expect(response.status).toBe(200);
  });
  it("post (user) with  valid body endpoint to be 200", async () => {
    const response = await request.post("/user").send({
      firstName: "Alison",
      lastName: "Reichert",
      gender: "female",
      email: "jtreleven5@nhs.uk",
      username: "jtregggffffleven5",
      password: "fghghfdh"
    });
    expect(response.status).toBe(200);
  });

  it("post (user) with authorized and unvalid body  endpoint to be 400", async () => {
    const response = await request.post("/user").send({
      lastName: "Reichert",
      gender: "female",
      username: "jtrdddeffffleven5",
      password: "fghghfdh"
    });
    expect(response.status).toBe(400);
  });
  it("patch (user) with Unauthorized  and  valid body endpoint to be 401", async () => {
    const response = await request.patch("/user/4").send({
      firstName: "Alison",
      lastName: "Reichert",
      gender: "female"
    });
    expect(response.status).toBe(401);
  });
  it("patch (user) with authorized and  valid body endpoint to be 200", async () => {
    const response = await request
      .patch("/user/4")
      .send({
        firstName: "Alison",
        lastName: "Reichert",
        gender: "female"
      })
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlyYWlnZGQ0YXR0MyIsImlhdCI6MTY3Njg4MTY3NywiZXhwIjoxNjc3MDU0NDc3fQ.b4DfXeibAZkn7Ewo-8VKf1fqaEGnYRLPI_T7XvmqaVU"
      );
    expect(response.status).toBe(200);
  });
  it("delete (user/:id) with authorized and  valid body endpoint to be 200", async () => {
    const response = await request
      .delete("/user/4")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlyYWlnZGQ0YXR0MyIsImlhdCI6MTY3Njg4MTY3NywiZXhwIjoxNjc3MDU0NDc3fQ.b4DfXeibAZkn7Ewo-8VKf1fqaEGnYRLPI_T7XvmqaVU"
      );
    expect(response.status).toBe(200);
  });
});
