import axios from "axios";

const create = function () {
  return axios.create({
    baseURL: "https://dummyjson.com",
  });
};

const client = create();

export { client as default, create };
