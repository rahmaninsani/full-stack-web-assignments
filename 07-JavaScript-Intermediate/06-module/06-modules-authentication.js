export default function validateLoginData(email, password) {
  const emailValidator = new RegExp("\\w+@\\w+\\.\\w+");
  const passwordValidator = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d@$!%*?&]{8,}$");

  if (!emailValidator.test(email)) {
    return "Tolong masukkan email yang valid";
  }

  if (!passwordValidator.test(password)) {
    return "Tolong masukkan password sesuai ketentuan";
  }

  return "Welcome to The Jungle";
}
