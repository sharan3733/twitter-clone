import prisma from "./prisma"

export const getTweets = async (prisma) => {
    const tweets = await prisma.tweet.findMany({
       where: {},
         orderBy: [
        {
            id: 'desc',
        },
       ],
       include: {
        author: true,
       },
    })
    
    return tweets
}

export const getUserTweets = async (name, prisma) => {
    const tweets = await prisma.tweet.findMany({
       where: {
        author: {
            name: name,
        },
       } ,
       orderBy: [
        {
            id: 'desc',
        },
       ],
       include: {
        author: true,
       },
    })
    
    return tweets
}
