import axios from "axios";
import { BASE_API_URL } from "../common/constants";

const API_URL = BASE_API_URL + "/api/bloodGroup";

class BloodGroupService {
  getAllBloodGroup() {
    return axios.get(API_URL);
  }
}

export default new BloodGroupService();
