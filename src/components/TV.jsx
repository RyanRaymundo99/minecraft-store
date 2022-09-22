import LG from '../assets/4.png';
import {BsBadgeHd, BsWifi} from 'react-icons/bs'
import {GiSpeaker} from 'react-icons/gi'
import {AiOutlineChrome} from 'react-icons/ai'

export default function TV() {
  return (
<section class="text-gray-600 bg-blue-500 body-font" id='TV'>
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={LG}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">TV Smart LG 42" polegadas
      </h1>
      <p class="mb-8 leading-relaxed text-gray-200">Funcionalidade: Sistem Artificial ThinQ AI, Processador Quad Core (Quatro processadores rápidos e precisos eliminam o ruído e criam cores e contrastes mais dinâmicos), Sistema Operacional webOS 4.5 (permite que você assista facilmente a seus filmes favoritos</p>
      <div class="flex w-full">
          <span class="title-font font-medium text-2xl text-gray-100">R$1.400 a vista no pix <br/> ou em 12x no cartão</span>
          <button class="flex ml-auto text-blue-400 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">AGENDAR COMPRA</button>
      </div>
    </div>
  </div>
  

  <div class="container px-5 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <BsBadgeHd className="text-white w-12 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium text-3xl text-gray-100">Tela 16:9</h2>
          <p class="leading-relaxed text-gray-200">Full HD de 1920x1080</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <GiSpeaker className="text-white w-12 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium text-3xl text-white">HDR</h2>
          <p class="leading-relaxed text-gray-200">Potência de Som 20W</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <AiOutlineChrome className="text-white w-12 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium text-3xl text-white">webOS 4.5</h2>
          <p class="leading-relaxed text-gray-200">Sistem Artificial ThinQ AI,</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <BsWifi className="text-white w-12 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium text-3xl text-white">Wifi</h2>
          <p class="leading-relaxed text-gray-200">Wireless Integrado</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
