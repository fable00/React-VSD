import { Axios } from "axios";

const githubApi = axios.create({
  baseUrl: "https://api.github.com"
})

export { githubApi }
