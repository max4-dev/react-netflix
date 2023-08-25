import { Inputs } from "@/types/auth";

const EmailInput = ({email, setEmail, register, errors}: Inputs) => {
  return ( 
    <label className="LoginLabel">
      <input {...register('email', { required: 'Email!' })} className={`LoginInput ${Boolean(email) && "LoginInputFocus"}`} value={email} onChange={(value) => setEmail(value.target.value)} type="email" />
      <span>Email</span>
      {errors.email && (
        <p>{errors.email?.message}</p>
      )}
    </label>
   );
};
 
export default EmailInput;