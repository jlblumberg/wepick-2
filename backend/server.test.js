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
    expect(app.port).to.equal(3000);
  })
})
  