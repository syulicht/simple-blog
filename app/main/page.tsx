"use client"
import { supabase } from '@/util/supabase';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();
    const getUser = async() => {
        const {data} = await supabase.auth.getSession();
        if(data.session){
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        } else {
            router.push("/login");
        }
    }

    useEffect(() => {
        getUser();
    }, []);
  return (
    <div>
        <h3>ようこそ　{user?.email?.split("@")[0]}さん</h3>
    </div>
  )
}

export default Page