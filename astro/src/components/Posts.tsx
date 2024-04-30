import { useState } from "preact/hooks"
import { Pagination } from "./Pagination"
import { dataPosts } from "../data/posts.js"
import { SearchBar } from '../components/SearchBar'



interface PostProps {
	title: string;
	description: string;
	date: string;
  }

export const Posts = () => {
	const postsToShow = 3

	const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState({start: 0, end: postsToShow})
    
	//for search alone change here the post to return
	const posts = 
	(search != '') ? dataPosts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
	: dataPosts

    return(
		<>
			<SearchBar search={search} setSearch={setSearch} />
			<div>
				{	
					posts.length != 0
					? (	
						posts.slice(currentPage.start, currentPage.end).map(({title, description, date}) => (
							<Post title={title} description={description} date={date} />
						))
					) 
					: (
						<div class='text-center mt-10 text-xl font-bold'>
							No se encontraron Posts
						</div>
						
					)



				}
			<Pagination lengthPosts={posts.length} setCurrentPage={setCurrentPage} postsToShow={postsToShow}/>
			</div>
		</>
    )
}

const Post = ({title, description, date}: PostProps) => {
	const classes = `flex max-w-3xl max-sm:flex-col mx-auto gap-5 border border-zinc-700 p-8 py-10 hover:bg-zinc-900 transition-colors rounded-md my-10`
	return(	
		<a href="/post">
						<div class={classes}>
							<img src="js-logo.png" alt="JS" class="w-20 h-20"/>
							<div>
								<div class="mb-5">
									<h1 class="text-2xl uppercase font-bold">{title}</h1>
									<p class="text-zinc-500">{description}</p>
								</div>
								<p class="text-sm text-zinc-500">{date}</p>
							</div>
						</div>
		</a>
	)
}