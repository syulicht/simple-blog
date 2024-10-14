"use client"
import Header from '@/global-components/Header';
import { supabase } from '@/util/supabase';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import PostForm from './components/PostForm';
import { User } from '@/types/user';

const Page = () => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();
    const getUser = async() => {
        const {data} = await supabase.auth.getSession();
        if(data.session){
            const user = await supabase.from('user').select("*").eq("userId",  data.session.user.id);
            setUser(user as unknown as User);
        } else {
            router.push("/login");
        }
    }

    useEffect(() => {
        getUser();
        console.log(user);
    }, []);

    const postArticle = (title : string, content : string) => {
        console.log(title, content);
    }
  return (
    <div>
        <Header />
        <PostForm submit={postArticle} />
    </div>
  )
}

export default Page