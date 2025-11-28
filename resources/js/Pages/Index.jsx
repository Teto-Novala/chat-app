import Settings from "@/Components/Settings";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import List from '@/Components/List/Index';
import Search from "@/Components/Search";
import { useEffect, useState } from "react";

export default function Welcome({ auth,data,searchTerm }) {
    console.log(auth,data,searchTerm);

    const [search,setSearch]=useState(searchTerm || '');
    const [debounceSearch,setDebounceSearch]=useState(search);

    useEffect(()=>{
        const timer= setTimeout(()=>{
            setDebounceSearch(search);
        },500)

        return ()=>  clearTimeout(timer);
    },[search])

    useEffect(()=>{
        console.log(debounceSearch);
        
        router.reload({
            data:{
                debounceSearch,
            },
            only:['data'],
            preserveUrl:true,
            preserveState:true,
            preserveScroll:true,

        })
    },[debounceSearch])
    
    return (
        <AuthenticatedLayout>
            <Head title="Teto CHAT" />

            <div className="flex">
                <div className="w-2/6 bg-gray-900 border-r border-gray-800">
                    <div className="pt-4 flex flex-col h-screen">
                        <div className="px-4">
                            <div className="flex justify-between mb-2">
                                <h1 className="text-white text-xl font-bold">
                                    Teto CHAT
                                </h1>
                                <div>
                                    <Settings />
                                </div>
                            </div>
                            <Search search={search} setSearch={setSearch}/>
                        </div>
                        <div className="flex-1 px-4 overflow-y-auto">
                            <List title={"Rooms"} data={data.rooms} />
                            <List title={"Contacts"} data={data.contacts} />
                        </div>
                    </div>
                </div>
                <div className="relative w-4/6"># CHAT #</div>
            </div>
        </AuthenticatedLayout>
    );
}
