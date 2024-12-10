"use client"
import ExploreCategories from '@/components/ExploreCategort';
import { fetchGenres } from '@/lib/api/genres';
import { useQuery } from '@tanstack/react-query';
import "swiper/css";


const Page: React.FC = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["genres"],
        queryFn: fetchGenres,
      });
    return (
        <div className="container mx-auto">
            <div
                className="h-[700px] w-full bg-cover bg-center rounded-lg flex flex-col justify-end items-center"
                style={{ backgroundImage: "url('/Container.png')" }}
            >
                <div className="text-white flex flex-col items-center text-center mb-6">
                    <h1 className='text-4xl	 font-bold max-lg:text-2xl max-md:text-xl'>Avengers : Endgame</h1>
                    <p className='text-gray-9 w-[70%] mt-3 max-md:w-[80%]'>With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.</p>
                </div>
                <div className="text-white flex justify-around text-center mb-6">
                    <div className='flex  '>
                        <button className='bg-red-btn  mx-1 py-4 px-6 flex  rounded-lg items-center'> <svg className='mx-1' width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.75 2.59479C0.75 0.930971 2.53383 -0.123757 3.9917 0.678068L17.4557 8.08328C18.9668 8.91436 18.9668 11.0856 17.4557 11.9167L3.9917 19.3219C2.53383 20.1238 0.75 19.069 0.75 17.4052V2.59479Z" fill="white" />
                        </svg>
                            Play Now</button>
                        <i className="p-5 bg-black-velvet mx-1  rounded-lg cursor-pointer">
                            <svg width="25" height="24" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 1V15M15.5 8L1.5 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </i>
                        <i className="p-5 bg-black-velvet mx-1  rounded-lg cursor-pointer">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.238 10.9584C7.17874 10.9584 8.02756 10.4382 8.60811 9.69799C9.51014 8.54785 10.647 7.59067 11.9465 6.89862C12.789 6.44994 13.52 5.78337 13.8745 4.89712C14.1226 4.27699 14.25 3.61522 14.25 2.94732V2.20837C14.25 1.72512 14.6418 1.33337 15.125 1.33337C16.5747 1.33337 17.75 2.50863 17.75 3.95837C17.75 5.30194 17.4472 6.57478 16.9061 7.71236C16.5962 8.36376 17.0309 9.20837 17.7522 9.20837M17.7522 9.20837H21.399C22.5968 9.20837 23.6689 10.018 23.7957 11.209C23.8481 11.7016 23.875 12.2019 23.875 12.7084C23.875 16.0306 22.7178 19.0825 20.7845 21.4831C20.3323 22.0446 19.6332 22.3334 18.9123 22.3334H14.227C13.6627 22.3334 13.1021 22.2424 12.5668 22.064L8.93324 20.8528C8.39791 20.6743 7.83732 20.5834 7.27304 20.5834H5.38824M17.7522 9.20837H15.125M5.38824 20.5834C5.48485 20.822 5.58999 21.0564 5.70327 21.2859C5.93326 21.7521 5.61223 22.3334 5.09245 22.3334H4.03337C2.99654 22.3334 2.0349 21.729 1.73232 20.7373C1.33743 19.4431 1.125 18.0693 1.125 16.6459C1.125 14.8347 1.46894 13.1038 2.09507 11.515C2.45097 10.6119 3.36189 10.0834 4.33258 10.0834H5.5608C6.11138 10.0834 6.43019 10.7319 6.14435 11.2025C5.1802 12.7898 4.625 14.653 4.625 16.6459C4.625 18.0383 4.89604 19.3674 5.38824 20.5834Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </i>
                        <i className="p-5 bg-black-velvet mx-1  rounded-lg cursor-pointer">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.7997 4.57535C24.9002 8.67586 24.9002 15.3241 20.7997 19.4246M17.7064 7.66904C20.0984 10.061 20.0984 13.9391 17.7064 16.3311M6.375 7.62504L11.8813 2.11875C12.4325 1.56753 13.375 1.95793 13.375 2.73747V21.2626C13.375 22.0421 12.4325 22.4325 11.8813 21.8813L6.375 16.375H3.76056C2.73466 16.375 1.77356 15.7842 1.5011 14.7951C1.25595 13.9052 1.125 12.9679 1.125 12C1.125 11.0322 1.25595 10.0949 1.5011 9.20498C1.77356 8.21592 2.73466 7.62504 3.76056 7.62504H6.375Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </i>


                    </div>
                </div>

                <div className="flex justify-between items-center w-full px-8 mb-4">
                    <i className="p-5 bg-black-velvet rounded-lg cursor-pointer">
                        <svg
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.75 9L1.25 9M1.25 9L9.125 16.875M1.25 9L9.125 1.125"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </i>

                    <i className="p-5 bg-black-velvet rounded-lg cursor-pointer">
                        <svg
                            width="24"
                            height="20"
                            viewBox="0 0 24 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.75 1.25L22.5 10M22.5 10L13.75 18.75M22.5 10H1.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </i>
                </div>
            </div>
            <div className='mt-52 max-md:mt-10 border border-hr px-4 py-4 rounded-lg '>
       

            <ExploreCategories wich='Explore' data={data} isLoading={isLoading} desc='' title='Our Genres' />
            <ExploreCategories wich='Top' data={data} isLoading={isLoading} desc='' title='Popular Top 10 In Genres' />
            <ExploreCategories wich='Terend' data={data} isLoading={isLoading} desc='' title='Trending Now' />
            <ExploreCategories wich='New'  data={data} isLoading={isLoading} desc='' title='New Releases' />
            <ExploreCategories wich='Must' data={data} isLoading={isLoading} desc='' title='Must - Watch Movies' />


  
        </div>
        </div>


    );
};

export default Page;