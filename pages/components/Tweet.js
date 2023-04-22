import Image from 'next/image'
import timeago from 'lib/timeago'
import Link from 'next/link'

export default function Tweet({ tweet }) {
  if (!tweet) return
  return (
    <>
      <div className='card border m-3 rounded px-2 py-5'>
        <p>
          {tweet.author.image && (
            <Image
              className='rounded-full'
              src={tweet.author.image}
              alt=''
              width='40'
              height='40'
            />
          )}
        </p>
       

        <p className='float-right'>
        <Link href={`/${tweet.author.name}/status/${tweet.id}`} className='hover:underline'>
          {timeago.format(new Date(tweet.createdAt))}
        </Link>
        </p>
        <small className='hover:text-blue-600'>
          <Link href={`/${tweet.author.name}`}>
              @{tweet.author.name}
          
          </Link>
        </small>
        <p>{tweet.content}</p>
      </div>
    </>

  )
}