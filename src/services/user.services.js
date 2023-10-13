import axios from "axios";
import { BASE_API_URL } from "../common/constants";
import { authHeader } from "./base.service";

const BASE_URL = BASE_API_URL + "/api/user";

class UserServices {
  update(user) {
    return axios.put(BASE_URL + "/update", user, { headers: authHeader() });
  }
}

export default new UserServices();
