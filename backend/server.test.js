import { expect } from "chai";
import app from "./server.js";
// import request from "supertest";

describe("Server", function() {
  it("renders correctly", function(){
    expect(app).to.be.a('function');
  });
});

describe("Server running test", function() {
  it("runs the server", async() => {
    expect(app.port === 5000 || app.port === process.env.PORT || app.port === 5001).to.equal(true)
  })
})
  