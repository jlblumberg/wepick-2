import { expect } from "chai";
import WePick from "./app.js";

  describe("app", function() {
    let testApp = new WePick
    it("renders correctly", function(){
      expect(testApp).to.be.an('object');
    });
  });