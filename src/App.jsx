import {ThumbsUp, ThumbsDown} from 'lucide-react'

import { Header } from "./components/Header"
import { Title } from './components/Title'
import { Card } from './components/Card'
import CatImg from '../assets/Cat.png'
import More1 from '../assets/More_1.png'
import More2 from '../assets/More_2.png'
import More3 from '../assets/More_3.png'
import More4 from '../assets/More_4.png'
import More5 from '../assets/More_5.png'


export function App() {
  return (
    <div className="w-full h-full">

      <Header />

      <main className="flex flex-1 flex-col w-full h-full bg-BgWhite md:py-10 md:px-[100px] xl:flex-row">

        <div>

          <img className='w-full' src={CatImg} alt="Imagem do gato"/>

          <div className='py-8 px-6 md:px-0 lg:w-[800px]'>

              <div className='flex flex-col gap-2 md:flex-row md:justify-between'>
                  <Title title='Seriam os gatos astronautas?'/>

                  <div className='flex items-center gap-3'>
                    <button className='flex items-center justify-center bg-BgHeader text-BgWhite p-3 rounded-full duration-300 ease-in-out hover:bg-transparent hover:ring ring-BgHeader hover:text-BgHeader'><ThumbsUp /></button>
                    <button className='flex items-center justify-center bg-BgHeader text-BgWhite p-3 rounded-full duration-300 ease-in-out hover:bg-transparent hover:ring ring-BgHeader hover:text-BgHeader'><ThumbsDown /></button>
                  </div>

              </div>

              <div>

                <p className='w-full text-base text-TextBlack font-normal mt-8 leading-6 text-left'>
                    Os gatos são animais fascinantes e cercados de mistérios. De temperamento independente e misterioso, esses felinos são conhecidos por sua agilidade, elegância e um comportamento muitas vezes imprevisível. Contudo, recentemente, uma teoria tem ganhado espaço na internet e entre teóricos de conspiração: seriam os gatos astronautas? A teoria sugere que os gatos não são animais terrestres, mas sim seres extraterrestres enviados para realizar uma missão específica em nosso planeta. Há relatos históricos que apontam para o fato de que os gatos eram considerados seres sagrados em diferentes culturas e até mesmo associados a figuras divinas. Isso poderia indicar que os gatos têm uma origem muito mais mística do que se pensava anteriormente. Além disso, há teóricos que acreditam que os felinos possuem habilidades telepáticas e são capazes de se comunicar com outras espécies alienígenas. Essa crença baseia-se em relatos de pessoas que afirmam terem visto gatos reagindo a estímulos que não são perceptíveis aos seres humanos, ou até mesmo se comportando de maneira incomum durante eventos astronômicos, como uma aurora boreal. Esses e outros indícios foram interpretados como sinais de que os gatos seriam seres interplanetários.
                </p>

              </div>

          </div>
        </div>


        <div className='py-8 px-6 md:py-0'>
          
          <Title title='Artigos relacionados'/>

          <div className='flex flex-col gap-8 mt-8'>

              <Card img={More1} title='Sábado preguiçoso' text='Descubra atividades interessantes para fazer com seu pet durante os finais de semana.'/>
              <Card img={More2} title='Balaio de gatos' text='Como evitar confusões entre seus gatíneos e acostumá-los desde filhotes.'/>
              <Card img={More3} title='Cartela de cores' text='Seu gato é inverno intenso? Verão profundo? Descubra as cores que mais combinam com seu bichano.'/>
              <Card img={More4} title='Os gatos sentem frio?' text='Preparem-se para a frente fria que vem para o país da melhor maneira possível.'/>
              <Card img={More5} title='Conheça o Moacir' text='Moacir é o gatinho da semana do nosso blog. Venha conhecer sua história de superação.' />

          </div>  

        </div>

      </main>

      <footer className='font-semibold bg-BgFooter text-BgWhite p-4 text-center'>
         © 2023 - Rocketseat Explorer
      </footer>
    </div>
  )
}