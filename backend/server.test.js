import { expect } from "chai";
import WePick from "./server.js";

  describe("Server", function() {
    let testServer = new WePick
    it("renders correctly", function(){
      expect(testServer).to.be.an('object');
    });
  });