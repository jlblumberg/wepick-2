import { expect } from "chai";
import app from "./server.js";
import request from "supertest";

  describe("Server", function() {
    //let testServer = new app
    it("renders correctly", function(){
      expect(app).to.be.an('object');
    });
  });

  describe("Server running test", function() {
    //let testServer = new app
    it("runs the server", function(done) {
      const res = request(app).get("/")

      res.expect({val: "Server running"})
      res.expect(200, done)
    })
  })
  