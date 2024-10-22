import Balancer from 'react-wrap-balancer'

import { SocialLink } from '~/components/links/SocialLink'
import { Container } from '~/components/ui/Container'

import { BlogPosts } from '../BlogPosts'

const description =
  'Telegram的机器人是自动化的程序，可以在聊天中执行各种任务。它们可以帮助用户获取信息、管理群组、提供服务或进行互动。用户通过发送命令或消息与机器人互动，机器人则根据预设的功能和逻辑快速响应。无论是查天气、获取新闻、玩游戏，还是进行自动化工作，Telegram的机器人为用户提供了便利和乐趣，极大提升了使用体验。'

// TODO: add pagination or infinite scroll
export default function BlogPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          强大的机器人可以是一个助理
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
        <p className="flex items-center">
          <SocialLink href="/feed.xml" platform="rss" />
        </p>
      </header>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-2 lg:gap-8">
        <BlogPosts limit={20} categorySlug={['robot']} />
      </div>
    </Container>
  )
}

export const revalidate = 60
