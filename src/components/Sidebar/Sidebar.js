function Sidebar(){
    return(
        <div class="sidebar absolute w-1/6 h-full bg-gray-900 ">
            
            <div class="flex-col p-3 bg-gray-900">
                <center>
                <a href="/">
                <div class="text-2xl bg-gray-900 justify-center pt-3 pb-5 text-white">
                   <h2>Marketry</h2>
                </div>
                </a>

                <div class="bg-gray-900 pt-2 pb-8 justify-items-center text-white">
                    <div><p>Username</p></div>
                    <div>mail</div>
                </div>
                </center>
                <div class="flex-col bg-gray-900 text-white">
                    <a href="/admin">
                    <div class="flex pl-5 items-center pt-2 pb-2 hover:bg-blue-600 rounded">
                        <div><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" /></svg>
                        </div>
                        <div class="pl-3"><span>Home</span></div>
                    </div>
                    </a>
                    <a href="/admin">
                    <div class="flex pl-5 items-center pt-2 pb-2 hover:bg-blue-600 rounded">
                        <div><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" /></svg>
                        </div>
                        <div class="pl-3"><span>Product</span></div>
                    </div>
                    </a>
                    <a href="/admin">
                    <div class="flex pl-5 items-center pt-2 pb-2 hover:bg-blue-600 rounded">
                        <div><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" /></svg>
                        </div>
                        <div class="pl-3"><span>Promotion</span></div>
                    </div>
                    </a>
                    <a href="/admin">
                    <div class="flex pl-5 items-center pt-2 pb-2 hover:bg-blue-600 rounded">
                        <div><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>
                        </div>
                        <div class="pl-3"><span>Order</span></div>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;