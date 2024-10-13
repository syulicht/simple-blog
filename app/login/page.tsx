"use client"
import AccountForm from '@/global-components/AccountForm'
import { supabase } from '@/util/supabase';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Page = () => {
  const [msg, setMsg] = useState<string>('');
  const router = useRouter();
  const handleSubmit = async(name : string, password : string) => {
    const email = name + "@example.com";
    const {data, error} = await supabase.auth.signInWithPassword({email, password});
    if(error) {
      console.log(error);
      setMsg(error.message);
    } else {
      console.log(data);
      router.push("main");
    }
  }
  return (
    <div>
      <AccountForm title='Login' submit={handleSubmit} aTitle='Sign Up' aLink='/signup' />
      <h4>{msg}</h4>
    </div>
  )
}

export default Page