"use client"
import Header from '@/global-components/Header';
import { Article } from '@/types/article';
import { User } from '@/types/user';
import { supabase } from '@/util/supabase';
import { useRouter } from 'next/navigation';
import DOMPurify from 'dompurify';
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [user, setUser] = useState<User | null>(null);
    const [latestData, setLatestData] = useState<Article | null>(null);
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

    const getLatestArticle = async()=> {
        const data = await supabase.from('article').select("*").order('created_at', { ascending: false }).limit(1);
        setLatestData(data.data![0]);
    } 
    useEffect(() => {
        getUser();
        getLatestArticle();
        console.log(user);
    }, []);
  return (
    <div>
        <Header />
        {
            latestData ?
            <div className='prose max-w-3xl mx-auto my-8 p-4 bg-white shadow-lg rounded-lg'>
                <h1 className='text-3xl font-bold text-gray-800 mb-4'>{latestData.title}</h1>
                <div className='text-gray-700' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(latestData.content) }} />
            </div>
            : <></>
        }
    </div>
  )
}

export default Page