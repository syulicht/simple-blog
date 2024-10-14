import React, { FormEvent, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type Props = {
    submit : (title : string, content : string) => void;
}

const PostForm = (props: Props) => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const handleSubmit = (e : FormEvent) => {
        e.preventDefault();
        props.submit(title, content);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type='text' onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Content</label>
                <ReactQuill value={content} onChange={setContent} placeholder='記事の内容' />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default PostForm