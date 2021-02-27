import Head from 'next/head'
import ArticleList from '../component/ArticleList'


export default function Home( {articles}) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>NextJs WebDevs News App</title>
        <meta name="keyword" content=" web, programming, development"/>
      </Head>

      <ArticleList articles={articles}/>
    </div>
  )
}
export const getStaticProps = async () =>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()
 return{
   props:{
     articles,
   }
 }
}