import About1 from '../assets/About1.png';
import About2 from '../assets/About2.png';
import About3 from '../assets/About3.png';
import About4 from '../assets/4.png';
import About5 from '../assets/3.png';
import About6 from '../assets/2.png';

export default function About() {
  return (
<section class="text-gray-600 bg-blue-500 body-font" id='about'>
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">Um pouco sobre a nossa empresa</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-gray-100">Nosso objetivo é vender produtos e serviços que gerem satisfação pessoal e felicidade, principalmente à classe C, com um mix altamente diversificado, focado em eletrodomésticos, produtos eletrônicos, tecnologia, móveis e cozinha, utilidades domésticas, brinquedos e outros.</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={About1}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={About2}/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={About3}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={About4}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={About5}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={About6}/>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
