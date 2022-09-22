import {SiSpringCreators} from 'react-icons/si'
import {BsArrowsAngleExpand} from 'react-icons/bs'
import {GoTools} from 'react-icons/go'
import {FaHandHoldingWater} from 'react-icons/fa'

import Bedimg from '../assets/3.png'

export default function Bed() {
  return (
<section class="text-gray-600 bg-blue-500 body-font" id='Bed'>

<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Cabeceira para cama box casal + cama de casal</h1>
      <p class="mb-8 leading-relaxed text-gray-200">O que é cabeceira para cama box? Cabeceira pra cama box É que ela ajuda a barrar o frio ou calor que vem da parede. E o legal é que tem vários modelos lindos dela pra camas de solteiro, casal, queen, king e viúva!</p>
      <div class="flex w-full">
          <span class="title-font font-medium text-2xl text-gray-100">R$1.880 a vista no pix <br/> ou em 12x no cartão</span>
          <button class="flex ml-auto text-blue-400 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">AGENDAR COMPRA</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={Bedimg}/>
    </div>
  </div>
  
  

  <div class="container px-5 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <SiSpringCreators className="text-white w-12 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium text-3xl text-gray-100">Conforto</h2>
          <p class="leading-relaxed text-gray-200">Molas ensacadas</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <BsArrowsAngleExpand className="text-white w-12 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium text-3xl text-white">Espaçosa</h2>
          <p class="leading-relaxed text-gray-200">1,28m x 1,88m</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <GoTools className="text-white w-12 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium text-3xl text-white">Fácil de Instalar</h2>
          <p class="leading-relaxed text-gray-200">9 etapas</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <FaHandHoldingWater className="text-white w-12 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium text-3xl text-white">Resistente a Água</h2>
          <p class="leading-relaxed text-gray-200">Fácil de limpar</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
