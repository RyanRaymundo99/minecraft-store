import {RiRecycleFill, RiFullscreenLine} from 'react-icons/ri'
import {GiDiamondHard} from 'react-icons/gi'
import {BsTextareaResize} from 'react-icons/bs'

import Sofaimg from '../assets/1.png'

export default function Sofa() {
  return (
<section class="text-gray-600 bg-blue-500 body-font">

<div class="container mx-auto flex flex-col px-5 pt-10 justify-center items-center" id='Panel'>
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={Sofaimg}/>
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Painel para TV até 60 Polegadas Madesa Alfa</h1>
      <p class="mb-8 leading-relaxed text-gray-200">O Painel para TV Alfa da Madesa possui design com linhas retas que trazem mais modernidade e beleza ao seu ambiente. É uma grande escolha para a sala de estar ou para o quarto</p>
      <div class="flex w-full">
          <span class="title-font font-medium text-2xl text-gray-100">R$720 a vista no pix <br/> ou em 12x no cartão</span>
          <button class="flex ml-auto text-blue-400 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">AGENDAR COMPRA</button>
      </div>
    </div>
  </div>
  

  <div class="container px-5 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <RiRecycleFill className="text-white w-12 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium text-3xl text-gray-100">Ecológico</h2>
          <p class="leading-relaxed text-gray-200">Ajude a natureza</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <GiDiamondHard className="text-white w-12 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium text-3xl text-white">inquebrável</h2>
          <p class="leading-relaxed text-gray-200">Alta durabilidade</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <BsTextareaResize className="text-white w-12 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium text-3xl text-white">Brilhoso</h2>
          <p class="leading-relaxed text-gray-200">Acabamento com resina</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <RiFullscreenLine className="text-white w-12 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium text-3xl text-white">Dispoinibilidade</h2>
          <p class="leading-relaxed text-gray-200">135 cm  x 180 cm</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
