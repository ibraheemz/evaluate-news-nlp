import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();
import { handleSubmit } from "../src/client/js/formHandler";
import { checkForText } from "../src/client/js/textChecker";
describe("Testing the submit functionality", () => {
  test("Testing the 'handleSubmit' function", () => {
    const event = { preventDefault: jest.fn() };

    handleSubmit(event);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
  });
});
