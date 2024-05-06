import { useState } from "preact/hooks"
import { Pagination } from "./Pagination"
import { SearchBar } from './SearchBar'
import { dataPosts } from "../../data/posts";

interface PostProps {
	title: string;
	description: string;
	date: string;
  }

export const Posts = () => {
	const postsToShow = 3
    const [currentPage, setCurrentPage] = useState({start: 0, end: postsToShow})
	const [posts, setPosts] = useState(dataPosts)

    return(
		<>
			<SearchBar dataPosts={dataPosts} setPosts={setPosts} setCurrentPage={setCurrentPage} />
			<div className="max-w-3xl mx-auto">
				{	
					posts.length != 0
					? (	
						<>
						{
							posts.slice(currentPage.start, currentPage.end).map(({title, description, date}) => (
								<Post title={title} description={description} date={date} />
								))
						}
						<Pagination lengthPosts={posts.length} setCurrentPage={setCurrentPage} postsToShow={postsToShow}/>						</>
					) 
					: (
						<div class='text-center mt-10 text-xl font-bold'>
							No se encontraron Posts
						</div>
						
					)
				}
			</div>
		</>
    )
}

const Post = ({title, description, date}: PostProps) => {
	const classes = `flex max-sm:flex-col mx-auto gap-5 border border-zinc-700 p-8 py-10 hover:bg-zinc-900 transition-colors rounded-md my-10`
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