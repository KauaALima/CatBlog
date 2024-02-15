export function Card({img,title,text}){
    return(
        <div className='flex flex-row gap-4'>
            <img className="w-[151px] h-[84px]" src={img} alt="" />

            <div className='flex flex-col gap-2'>
            <span className='text-[18px] font-bold text-TitleBlack w-[200px]'>{title}</span>
            <p className='text-TextBlack text-sm'>{text}</p>
            </div>
        </div>
    )
}