import { checkForText } from "../src/client/js/textChecker";

describe("Testing the text validity", () => {
  test("Testing the checkForText() return false on empty string", () => {
    expect(checkForText("")).toEqual(false);
  });
});
