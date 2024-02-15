import Logo from '../../../assets/Logo.png'
import Avatar from '../../../assets/Avatar.jpg'

export function Header(){
    return(
        <header className="bg-BgHeader w-full flex items-center justify-center py-3 px-7 gap-7 md:px-28">

        <img src={Logo} alt="Logo"/>

        <div className='flex items-center w-full bg-BgInput text-white font-semibold rounded' >
        <input type="text" className='w-full h-10 bg-transparent border-none outline-none py-3 px-4 placeholder:text-white' placeholder='Pesquise por artigos'/>
        </div>

        <img src={Avatar} alt="Imagem do usuario" className='w-11 h-11 rounded-full' />

        </header>        
    )
}