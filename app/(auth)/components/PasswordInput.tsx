import { Inputs } from "@/types/auth";

const PasswordInput = ({password, setPassword, register, errors}: Inputs) => {
  return ( 
    <label className="LoginLabel">
      <input {...register('password', { required: 'Password!', minLength: 3, maxLength: 25 })} className={`LoginInput ${Boolean(password) && "LoginInputFocus"}`} value={password} onChange={(value) => setPassword(value.target.value)} type="password" />
      <span>Password</span>
      {errors.password && (
          <p>{errors.password?.message}</p>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <p>Min length 3 symbols</p>
        )}
        {errors.password && errors.password.type === 'maxLength' && (
          <p>Max length 25 symbols</p>
        )}
    </label>
   );
};
 
export default PasswordInput;