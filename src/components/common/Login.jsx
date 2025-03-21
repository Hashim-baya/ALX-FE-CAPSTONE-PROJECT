import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { NavLink, useNavigate } from 'react-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { auth } from './Firebase'
import SignInWithGoogle from './SignInWithGoogle'


const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Required")
})
function Login() {

  const navigate = useNavigate();
 const handleLogin = async (values, { setSubmitting }) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      navigate('/home');
      toast.success('Login successful!', {
        position: "top-center",
      });
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center",
      });
    } finally {
      setSubmitting(false);
    }
 }
  return (
    <div className='bg-[url("https://images.unsplash.com/photo-1731432245325-d820144afe4a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] h-screen min-h-screen bg-cover bg-center absolute inset-0 '>
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      <Form>
        <div className='flex flex-col gap-4 p-4 justify-center w-[80%] md:w-[60%] lg:w-[40%] m-auto my-[30%] lg:my-[10%] rounded-md bg-[#FFFFFF] '>
          <h1 className='lg:text-2xl text-xl font-bold text-center text-blue-700'>LOGIN</h1>

          <div>
            <label htmlFor="email" className='font-semibold text-[0.9rem] lg:text-[1.2rem] '>Email</label><br />
            <Field type="email" id="email" name="email" placeholder="example@email.com" className="w-[100%] p-2 rounded-md outline-none font-light mt-2 bg-slate-100" />
            <ErrorMessage name="email" component="div" className='text-red-600 font-bold text-[1rem] mt-2' />
          </div>

          <div>
            <label htmlFor="password" className='font-semibold text-[0.9rem] lg:text-[1.2rem] '>Password</label><br />
            <Field type="password" id="password" name="password"  className="w-[100%] p-2 rounded-md outline-none font-light mt-2 bg-slate-100" />
            <ErrorMessage name="password" component="div" className='text-red-600 font-bold text-[1rem] mt-2' />
          </div>

          <button type="submit" className='w-[100%] p-2 rounded-md outline-none font-bold tracking-widest text-[0.9rem] lg:text-[1.2rem] mt-2 bg-blue-600 text-[#F5F5F5] hover:bg-blue-500'>Login</button>

          <div className='flex justify-center'>
            <NavLink to="/signup" className="text-blue-500 ">Don't have an account? Sign Up</NavLink>
          </div>

          <SignInWithGoogle />
        </div>
      </Form>
    </Formik>
    </div>
  )
}

export default Login