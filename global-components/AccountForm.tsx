import React, { FormEvent, useState } from 'react'

type Props = {
    title : string;
    submit : (name : string, password : string) => void;
    aTitle : string;
    aLink : string;
}

const AccountForm = (props: Props) => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e :FormEvent) => {
        e.preventDefault();
        props.submit(name, password);
    }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
        <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-md'>
            <div className=''>
                <h3 className='text-2xl font-bold text-center text-gray-900 mb-6'>{props.title}</h3>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700' htmlFor='name' >User Name</label>
                        <input placeholder="username" className='mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' name='name' type='text' onChange={e => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700' htmlFor='password'>Password</label>
                        <input name='password' placeholder='●●●●●●●●●' type='password' className='mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <button type='submit' className='w-full bg-indigo-600 text-white font-medium py-2.5 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>Submit</button>
                </form>
                <a href={props.aLink} className='text-blue-600'>{props.aTitle}はこちらから↗</a>
            </div>
        </div>
    </div>
  )
}

export default AccountForm