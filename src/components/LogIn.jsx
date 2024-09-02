/* eslint-disable react/prop-types */
export const LogIn = ({openSignUp}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">LogIn Form</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="" className="block text-gray-700">Email</label>
          <input className="w-full px-3 py-2 border" type="email" placeholder="email..." />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="block text-gray-700">Pasword</label>
          <input type="Pasword" className="w-full px-3 py-2 border" placeholder="enter password..." />
        </div>
        <div className="mb-4 flex items-center justify-between">
         <label className="inline-flex items-center">
            <input type="checkbox" className="from-checkbox" />
            <span className="ml-2 text-gray-700">Remember Me</span>
         </label>
         <a href="" className="text-red-800">Forget Pasword</a>
        </div>
        <div className="mb-4">
         <button type="submit" className="w-full bg-red-600 text-white py-2">Login</button>
        </div>
      </form>
      <div className="text-center">
         <span className="text-gray-700">Do not have an account?</span>
         <button className="text-red-800" onClick={openSignUp}>sign Up</button>
      </div>
    </div>
  );
};
export default LogIn;
