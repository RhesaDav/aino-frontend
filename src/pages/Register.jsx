import React, { useState } from 'react'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { httpService } from '../services/httpServices'
export default function Register() {
    let navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const handleRegisterForm = (e) => {
        e.preventDefault()
        const data = {
            username: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value
        }
        httpService.register(data).then((res) => {
            if (res.data.status === true) {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user', JSON.stringify(res.data.data))
                navigate('/')
            }
        }).catch((err) => {
            setErrorMsg(err.response.data.message)
        })
    }
  return (
    <div className='flex justify-center pt-20'>
        <form onSubmit={handleRegisterForm} className='bg-green-300 p-5 rounded-2xl flex flex-col gap-2 shadow-2xl'>
            <h1 className='text-center font-semibold text-2xl'>Register</h1>
            {errorMsg? <p className='bg-red-400 text-center p-2 rounded-2xl uppercase font-bold'>{errorMsg} !!</p> : ''}
            <div className='bg-green-400 py-3 px-5 flex flex-col gap-3 rounded-xl'>
                <h1>Username</h1>
                <input type="text" className='p-1 rounded-md' />
            </div>
            <div className='bg-green-400 py-3 px-5 flex flex-col gap-3 rounded-xl'>
                <h1>Email</h1>
                <input type="email" className='p-1 rounded-md' />
            </div>
            <div className='bg-green-400 py-3 px-5 flex flex-col gap-3 rounded-xl'>
                <h1>Password</h1>
                <div className='flex gap-1'>
                <input type={showPassword === false ? "password" : "text"} className='p-1 rounded-md' />
                <button type='button' onClick={() => setShowPassword(!showPassword)} className='bg-gray-200 p-1 rounded-md'>
                    {showPassword === false ? <AiFillEye/> : <AiFillEyeInvisible/> }
                </button>
                </div>
            </div>
            <p>Have account? <Link to='/login' className='hover:text-blue-500 hover:underline'>login here</Link> </p>
            <div className='bg-green-400 hover:bg-green-500 py-3 px-5 flex flex-col gap-3 rounded-xl'>
                <button type='submit'>Register</button>
            </div>
        </form>
    </div>
  )
}
