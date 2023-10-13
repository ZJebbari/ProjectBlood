import axios from "axios";
import { BASE_API_URL } from "../common/constants";

const API_URL = BASE_API_URL + "/api/centers";

class CenterService {
  getAllCenters() {
    return axios.get(API_URL);
  }
}

export default new CenterService();
