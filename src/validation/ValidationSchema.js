import * as Yup from "yup";

export const ValidationSchema = Yup.object({
    name: Yup.string().min(5).max(20).required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(8).max(15).required("Password is required"),
    role: Yup.string().required("Role is required"), // Add validation for the role field
});
