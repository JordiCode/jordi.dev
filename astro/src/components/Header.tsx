
const navLinks = [
    {
        url: '/destacados',
        text: 'Destacados'
    },
    {
        url: '/contacto',
        text: 'Contacto'
    },
    {
        url: '/sobre-mi',
        text: 'Sobre mi'
    }
]

const Header = () => {
    return (
        <header class='flex flex-col items-center gap-0'> 
            <a href="/"> 
                <img src="/logo-white.png" class='rounded-sm w-28' />
            </a>
            
            <nav>
                <ul class='flex justify-center gap-5 mb-10'>
                {
                    navLinks.map(({url, text}) => (
                        <li class="text-zinc-400 hover:text-zinc-200 transition-colors">
                            <a href={url}>{text}</a>
                        </li>
                    ))
                }
                </ul>
            </nav>
    </header>
    )
}

export default Header