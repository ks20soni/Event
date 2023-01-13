import React from 'react'

export default function header() {
    return (
        <div>
            <div class="fixed w-full bg-white">
                <div class="mx-auto max-w-7xl px-6">
                    <div class="flex items-center justify-between border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10">
                        <div class="flex justify-start lg:w-0 lg:flex-1">
                        </div>
                        <nav class="hidden space-x-10 md:flex flex justify-end">
                            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Home</a>
                            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">About</a>
                            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Sponsors</a>
                            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Location</a>
                            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Contact Us</a>
                        </nav>
                    </div>
                </div>
                <div class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                    <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div class="px-5 pt-5 pb-6">
                            <div class="flex items-center justify-between">
                                <div>
                                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                                </div>
                                <div class="-mr-2">
                                    <button type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span class="sr-only">Close menu</span>
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-6 py-6 px-5">
                            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Pricing</a>

                                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Docs</a>

                                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Help Center</a>

                                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Guides</a>

                                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Events</a>

                                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Security</a>
                            </div>
                            <div>
                                <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</a>
                                <p class="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?
                                    <a href="#" class="text-indigo-600 hover:text-indigo-500">Sign in</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
