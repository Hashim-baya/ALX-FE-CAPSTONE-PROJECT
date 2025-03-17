import React from 'react'
import Google from '../../components/images/googleLogo.png'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './Firebase';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

function SignInWithGoogle() {

    const navigate = useNavigate();

    const googleLogin =  () => {
        const provider = new GoogleAuthProvider();

             signInWithPopup(auth, provider)
            .then(async(result) => {
                console.log(result);
                if(result.user){
                    toast.success('Login successful!', {
                        position: "top-center",
                    });
                    navigate('/home');
                } else {
                    toast.error('Login failed!', {
                        position: "bottom-center",
                    });
            }});

    }
  return (
    <div>
        <p className='text-center text-gray-300'>-----------------------or-----------------------</p>
        <div onClick={googleLogin} className='hover:cursor-pointer flex items-center justify-start gap-20 w-[100%] p-2 rounded-md outline-none font-bold tracking-widest text-[1.2rem] mt-2 bg-blue-600 text-[#F5F5F5] hover:bg-blue-500'>
            <div>
               <img src={Google} alt="Google Logo" height={30} width={30} />
            </div>
            <div>
                <p>Sign in with Google</p>
            </div>
        </div>
    </div>
  )
}

export default SignInWithGoogle