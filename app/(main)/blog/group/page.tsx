import Balancer from 'react-wrap-balancer'

import { SocialLink } from '~/components/links/SocialLink'
import { Container } from '~/components/ui/Container'

import { BlogPosts } from '../BlogPosts'

const description =
  '我推荐的群组都经过筛选，可以最大程度避免钓鱼或欺诈行为。然而，我还是要提醒大家，成年人应具备分辨能力，切勿轻易相信“免费的午餐”。在任何情况下，请谨记，“真正的价值总需付出代价”，保持警惕，要给钱的都是骗子。'

// TODO: add pagination or infinite scroll
export default function BlogPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          谨防被骗
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
        <p className="flex items-center">
          <SocialLink href="/feed.xml" platform="rss" />
        </p>
      </header>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-2 lg:gap-8">
        <BlogPosts limit={20} categorySlug={['recommendation']} />
      </div>
    </Container>
  )
}

export const revalidate = 60
