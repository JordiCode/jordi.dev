interface searchBarProps {
    search: string,
    setSearch: (value: string) => void
}

import { useState } from 'preact/hooks'
import { Search } from './Icons/Search'

export const SearchBar = ({search, setSearch}: searchBarProps) => {
    const [isFocused, setIsFocused] = useState(false)
    
    const widthStyle = isFocused ? '80%' : '50%'

    const handleChange = (event: any) => {
        setSearch(event.target.value)
    }
    
    return (
    <>
    <div className='flex justify-between mx-auto items-center gap-5 transition-all duration-200 bg-zinc-900 rounded-full py-4 px-6' style={{width: widthStyle}}>
        <input 
            id={'search'} 
            class='w-[100%]' 
            placeholder={isFocused ? '' : 'Como crear un...' }
            autoComplete={'off'}
            //onFocus={() => setIsFocused(true)}
            //onBlur={() => setIsFocused(false)}
            value={search}
            onChange={handleChange}
        /> 
        <label htmlFor="search" className={'cursor-pointer'}>
            <Search/>
        </label>
    </div>
    </>
    )
}