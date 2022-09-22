import React from 'react'

export default function menu() {
  return (
<header class="text-gray-600 body-font">
  <div class="container mx-full flex fixed flex-wrap p-5 flex-col md:flex-row items-center backdrop-blur-sm bg-white/30 min-w-full">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl text-white">Noctua SA</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href='#TV' class="mr-5 text-gray-100 cursor-pointer">TVs</a>
      <a href='#Panel' class="mr-5 text-gray-100 cursor-pointer">Moveis</a>
      <a href='#Bed' class="mr-5 text-gray-100 cursor-pointer">Camas</a>
      <a href='#about' class="mr-5 text-gray-100 cursor-pointer">Sobre nós</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-6 focus:outline-none hover:bg-gray-200 rounded text-blue-500 mt-4 ml-10 md:mt-0">Atendimento
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  )
}
