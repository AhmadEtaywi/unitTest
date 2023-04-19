const axiosFetch = require("./async");
const axios = require("axios");

describe("fetch& error ", () => {
  it("fetchData should return data from API", async () => {
    const mockResponse = { data: { id: 1, title: "Test Post" } };
    axios.get = jest.fn().mockResolvedValue(mockResponse);

    const data = await axiosFetch.fetchData();
    expect(data).toEqual({ id: 1, title: "Test Post" });

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
  });

  it("fetchData should handle error from API", async () => {
    const mockError = new Error("Failed to fetch data!");
    axios.get = jest.fn().mockRejectedValue(mockError);

    await expect(axiosFetch.fetchData()).rejects.toEqual(mockError);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
  });
});
