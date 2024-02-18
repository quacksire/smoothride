import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/sidebar";
import Image from "next/image";

export default function Home() {
    return (
        <>
          
            <div className="flex flex-col">
              <section className="bg-white dark:bg-gray-900">
                  <div className="grid max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:pb-16 lg:grid-cols-12 items-start">
                      <div className="mr-auto place-self-center lg:col-span-7">
                          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Us</h2>
                          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">SmoothRide is a community-powered issue tracker for all different kinds of transit. Stay up to date on the most important transit info, sourced from passengers and users just like you.</p>
                          <a href="/" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                              Try it out
                              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                              </svg>
                          </a>
                      </div>
                      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <Image className="rounded-lg" src="https://imagedelivery.net/jdWMhVH-CbfKe5Pbmw-19Q/20fa80be-e47f-4eb9-4d3b-21e47be83a00/public" alt="" width={1366} height={768} />
                      </div>
                  </div>
              </section>

              <section className="bg-white dark:bg-gray-900">
                  <div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pb-16 lg:px-4">
                      <div className="font-light text-gray-500 sm:text-base dark:text-gray-400">
                          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Mission Statement</h2>
                          <p className="mb-4">Getting real-time, up-to-date info on transit is often difficult. Official sources usually only post major updates such as schedule changes and and delays, which leaves users lacking important information regarding cleanliness, crowdedness, noise level, etc. These official updates are also often significantly delayed, providing users with outdated info.</p>
                          <p className="mb-4">SmoothRide provides a solution by using crowd-sourced community engagement to deliver real-time updates on the most important transit issues. SmoothRide will display the posts most relevant to you first, and you can contribute by upvoting the posts you think are most beneficial!</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-0">
                          <Image className="-mt-4 w-full rounded-lg" src="https://imagedelivery.net/jdWMhVH-CbfKe5Pbmw-19Q/bb2228eb-172b-47d1-041a-d3e1ef921400/public" alt="office content 1" width={1366} height={768} />
                          <Image className="mt-4 w-full lg:mt-10) rounded-lg" src="https://imagedelivery.net/jdWMhVH-CbfKe5Pbmw-19Q/39a3468c-9e21-4577-a9e4-8d7728b93b00/public" alt="office content 2" width={1366} height={768} />
                      </div>
                  </div>
              </section>
            </div>
        </>
    );
}
