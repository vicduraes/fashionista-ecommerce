import { enableFetchMocks } from "jest-fetch-mock";

import getAPI from "../../service/api";

import * as mockCatalog from "../products.json";

enableFetchMocks();

describe("get API", () => {
  it("Should json() data that was received when getAPI is called", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockCatalog));
    const data = await getAPI();
    expect(data).toEqual(mockCatalog);
  });
});
