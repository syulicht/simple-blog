"use client"
import AccountForm from '@/global-components/AccountForm'
import { supabase } from '@/util/supabase'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


const Page = () => {
    const router = useRouter();
    const [msg, setMsg] = useState<string>("");
    const handleSubmit = async(name : string, password : string) => {
        const isvalid = /^[a-zA-Z0-9]+$/.test(name);
        if(!isvalid) {
            setMsg("ユーザーネームには数字とアルファベットのみ使用可能です");
            return;
        }
        const email = name + "@example.com";
        const {data, error} = await supabase.auth.signUp({email, password})
        if(error) {
            console.log(error);
            setMsg(error.message);
        } else {
            const { error } = await supabase.from('user').insert({email : data.user?.email, username : name, userId : data.user?.id});
            if(error) {
                console.log(error);
            } else {
                router.push("/login");
            }
        }
    }
  return (
    <div>
        <AccountForm title='Sign Up' submit={handleSubmit} aTitle='Login' aLink='/login'/>
        <h4>{msg}</h4>
    </div>
  )
}

export default Page