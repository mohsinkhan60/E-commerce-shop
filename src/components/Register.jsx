/* eslint-disable react/prop-types */


export const Register = ({openLogIn}) => {
  return (
   <div>
   <h2 className="text-2xl font-bold mb-4">sign up</h2>
   <form>
   <div className="mb-4">
       <label htmlFor="" className="block text-gray-700">Name</label>
       <input className="w-full px-3 py-2 border" type="text" placeholder="enter name..." />
     </div>
     <div className="mb-4">
       <label htmlFor="" className="block text-gray-700">Email</label>
       <input className="w-full px-3 py-2 border" type="email" placeholder="email..." />
     </div>
     <div className="mb-4">
       <label htmlFor="" className="block text-gray-700">Pasword</label>
       <input type="Pasword" className="w-full px-3 py-2 border" placeholder="enter password..." />
     </div>
     <div className="mb-4">
      <button type="submit" className="w-full bg-red-600 text-white py-2">Sign up</button>
     </div>
   </form>
   <div className="text-center">
      <span className="text-gray-700">Already have an account?</span>
      <button className="text-red-800" onClick={openLogIn}>Log In</button>
   </div>
 </div>
  )
}
export default Register