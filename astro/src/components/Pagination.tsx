import { useState } from "preact/hooks";
import { ChevronLeft } from "./Icons/ChevronLeft"
import { ChevronRight } from "./Icons/ChevronRight"


interface PaginationProps {
    setCurrentPage: (pageNumber: {start: number, end: number}) => void;
    lengthPosts: number;
    postsToShow: number
}

const classes = `text-sm py-2 px-4 border-2 border-accent rounded-md flex 
justify-center items-center cursor-pointer`


export const Pagination = ({setCurrentPage, lengthPosts, postsToShow}: PaginationProps) => { 
    const limitTab = 3
    const totalTab = Array(Math.ceil(lengthPosts / postsToShow)).fill(null).map((_, index) => index)
    const showMovePagination = totalTab.length > limitTab

    const [tabsToShow, setTabsToShow ] = useState({start: 0, end: limitTab})
    const [tabActive, setTabActive ] = useState(0)
    
    
    const updatePage = (tabIndex: number) => {     
        const showElementFrom = tabIndex*postsToShow
       
        //if showElementUntil is greater than length, show elements only up to lengthPosts
        const showElementUntil = (tabIndex+1)*postsToShow > lengthPosts ? lengthPosts : (tabIndex+1)*postsToShow
        

        setCurrentPage({start:showElementFrom, end:showElementUntil})
        setTabActive(tabIndex)
    }

    const handleClickButtonNav = (isRight: boolean) => {
        if(isRight) {
            if(tabsToShow.end +1 > totalTab.length) return
            setTabsToShow({start: tabsToShow.start+1, end: tabsToShow.end+1})
        } else {
            if(tabsToShow.start - 1 < 0) return
            setTabsToShow({start: tabsToShow.start-1, end: tabsToShow.end-1})
        }

    }
    return( 
        <div className="flex justify-center items-center gap-5 font-bold mt-16">
            {
                showMovePagination
                ? <ChevronLeft handleClickButtonNav={() => handleClickButtonNav(false)}/>
                : null 
            }
            {
                totalTab.slice(tabsToShow.start, tabsToShow.end).map((index) => {
                    return(
                        <div 
                            className={
                                    `
                                    ${classes} 
                                    ${ index == tabActive 
                                    ? 'bg-white text-black' 
                                    : 'transparent'}
                                    `
                                } 
                            key={index} 
                            onClick={() => updatePage(index)}
                        >
                            {index+1}
                        </div>
                    )
                })
            }
            {
                showMovePagination
                ? <ChevronRight handleClickButtonNav={() => handleClickButtonNav(true)}/>
                : null 
            }
        </div>
    )
}
