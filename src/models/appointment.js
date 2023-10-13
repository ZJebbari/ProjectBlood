export default class Appoitment {
  constructor(appointmentDate, email, name, gender, phone, userId,centerId) {
    this.email = email;
    this.name = name;
    this.gender = gender;
    this.phone = phone;
    this.userId = userId;
    this.appointmentDate = appointmentDate;
    this.centerId = centerId;
  }
}
