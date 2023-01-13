import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {AiTwotoneMail} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';


export default function footer() {
  return (
    
<footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div class="sm:flex sm:items-center sm:justify-between">
        <div class="flex items-center mb-4 sm:mb-0">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EazyERP</span>
        </div>
        <ul class="flex flex-wrap items-center mb-6 text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 px-8"><BsFacebook size={30}/></a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 px-8"><BsInstagram size={30}/></a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 px-8"><AiTwotoneMail size={30}/></a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline px-8"><BsLinkedin size={30}/></a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 3 <a href="https://flowbite.com/" class="hover:underline">EazyERP™</a>. All Rights Reserved.
    </span>
</footer>
  )
}
