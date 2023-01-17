import prisma from ".";

export async function likeTweet({ tweetId }) {
  try {
    const tweet = await prisma.tweet.update({
      where: { id: tweetId },
      data: {
        likes: {
          increment: 1,
        },
      },
    });
    return { tweet };
  } catch (error) {
    return { error };
  }
}

export async function unlikeTweet({ tweetId }) {
  try {
    const tweet = await prisma.tweet.update({
      where: { id: tweetId },
      data: {
        likes: {
          decrement: 1,
        },
      },
    });
    return { tweet };
  } catch (error) {
    return { error };
  }
}

export async function createTweet(tweet) {
  try {
    const newTweet = await prisma.tweet.create({ data: tweet });
    return { newTweet };
  } catch (error) {
    return { error };
  }
}
