import { Inputs } from "@/types/auth";

const NameInput = ({username, setUsername, register, errors}: Inputs) => {
  return ( 
    <label className="LoginLabel">
      <input {...register('username', { required: 'Name!', minLength: 3, maxLength: 15 })} className={`LoginInput ${Boolean(username) && "LoginInputFocus"}`} value={username} onChange={(value) => setUsername(value.target.value)} type="text" />
      <span>Name</span>
      {errors.username && (
          <p>{errors.username?.message}</p>
        )}
        {errors.username && errors.username.type === 'minLength' && (
          <p>Min length 3 symbols</p>
        )}
        {errors.username && errors.username.type === 'maxLength' && (
          <p>Max length 15 symbols</p>
        )}
    </label>
   );
};
 
export default NameInput;