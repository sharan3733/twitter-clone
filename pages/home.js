import { useSession } from 'next-auth/react'
import NewTweet from './components/NewTweet'
import { useRouter } from 'next/router'
import Tweets from './components/Tweets'

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  const router = useRouter()

if (loading) {
    return null
}
if(!session) {
    router.push('/')
}
return (
<>
    <NewTweet/>
    <Tweets tweets={[{content: 'test'}, {content: 'another'}]} />
</>
) 
  
}