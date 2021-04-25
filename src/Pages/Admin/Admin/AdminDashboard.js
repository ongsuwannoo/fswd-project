import Sidebar from "../../../components/Sidebar/Sidebar"

const AdminDashboard = () => {
    return(
        <div class="bg-blue-50">
            <Sidebar/>
            <div class="pl-52">
            <div className="flex p-5">
                <div class="flex w-full p-4 bg-white rounded shadow-md justify-end items-center">
                    <div class="pr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    </div>
                    <div><p>Username</p></div>
                </div>
            </div>

            <div class="flex justify-between p-5">
                <div class="w-1/5 p-5 bg-white rounded shadow-md">
                    <div class="pb-2 text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>  
                    </div>
                    <div class="text-4xl pb-3"><p>1,250</p></div>
                    <div>Item Sales</div>
                </div>
                <div class="w-1/5 p-5 bg-white rounded shadow-md">
                    <div class="pb-2 text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                    </div>
                    <div class="text-4xl pb-3"><p>1,250</p></div>
                    <div>New Orders</div>
                </div>
                <div class="w-1/5 p-5 bg-white rounded shadow-md">
                    <div class="pb-2 text-yellow-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>              
                    </div>
                    <div class="text-4xl pb-3"><p>1,250</p></div>
                    <div>Total Products</div>   
                </div>
                <div class="w-1/5 p-5 bg-white rounded shadow-md">
                    <div class="pb-2 text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <div class="text-4xl pb-3"><p>1,250</p></div>
                    <div>New Users</div>
                </div>
            </div>

            <div class="flex justify-between p-5">
                <div class="w-1/2 p-5 bg-white rounded shadow-md">
                    <div class="pb-5"><p>Summary</p></div>
                    <div><img src="https://via.placeholder.com/674x353" className="" alt="Summary"></img></div>
                </div>
                <div class="w-1/2 p-5 bg-white rounded shadow-md">
                    <div class="pb-5"><p>Top Selling Products</p></div>
                    <div class="overflow-y-auto">
                        <div><img src="https://via.placeholder.com/100x100" className="" alt="product"></img></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            </div>



        </div>
    )
}
export default AdminDashboard;