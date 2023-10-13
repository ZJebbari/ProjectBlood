import axios from "axios";
import { BASE_API_URL } from "../common/constants";
import { authHeader } from "./base.service";

const API_URL = BASE_API_URL + "/api/appointments";

class AppointmentService {
  saveAppointment(appointment) {
    return axios.post(API_URL, appointment, { headers: authHeader() });
  }

  saveAppointmentNoId(appointment) {
    return axios.post(API_URL, appointment);
  }

  // deleteAppointment(appointment) {
  //   return axios.delete(API_URL + "/" + appointment.id, {
  //     headers: authHeader(),
  //   });
  // }

  getAllAppointment() {
    return axios.get(API_URL + "/getAllAppointment");
  }
}

export default new AppointmentService();
