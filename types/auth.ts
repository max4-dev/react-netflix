import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface Inputs {
  email: string;
  setEmail: string;
  register: UseFormRegister<any>
  errors: FieldErrors<any>;
}