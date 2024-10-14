import dynamic from 'next/dynamic';
import React, { FormEvent, useState } from 'react'
import 'react-quill/dist/quill.snow.css';

type Props = {
    submit : (title : string, content : string) => void;
}

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const PostForm = (props: Props) => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const handleSubmit = (e : FormEvent) => {
        e.preventDefault();
        props.submit(title, content);
    }
  return (
    <div className='max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg'>
        <form onSubmit={handleSubmit}>
            <div className='mb-6'>
                <label className='block text-gray-700 font-bold mb-2'>Title</label>
                <input className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500' type='text' onChange={e => setTitle(e.target.value)} />
            </div>
            <div className='mb-6'>
                <label className='block text-gray-700 font-bold mb-2'>Content</label>
                <div className='border border-gray-300 rounded-md'>
                    <ReactQuill onChange={e => setContent(e)}/>
                </div>
            </div>
            <button className='w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default PostForm