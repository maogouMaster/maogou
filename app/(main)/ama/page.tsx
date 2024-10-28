import Balancer from 'react-wrap-balancer'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

// import AlipayQR from './alipay-qr.jpg'

const title = 'AMA 一对一咨询'
const description =
  '我们提供一对一的咨询服务（Ask Me Anything），20年大厂开发和项目管理经验，同时有个8人开发团队，可以为你解答相关的问题，我也支持纯英语沟通。'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function AskMeAnythingPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Ask Me Anything / 一对一咨询
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <article className="prose dark:prose-invert">
        <h2>服务内容</h2>
        <p>我可以服务以下相关的问题：</p>
        <ul>
          <li>
            <b>机器人开发</b> ：电报机器人开发是我们最近最热门的项目，服务过100+用户，实力过硬。
          </li>
          <li>
            <b>系统定制</b>：APP、小程序、博客、论坛...团队有产品/UI/前端/后端/数据工程师。
          </li>
          <li>
            <b>疑难/bug解决</b>：做过数据迁移，数据库维护，网络电话，机场维护，项目咨询建议。
          </li>
          <li>
            <b>渗透测试</b>：这算是广告了，推荐对接第三方团队的，可攻可守技术过硬。
          </li>
          <li>
            <b>其他</b>：如果你想聊天，探讨下当前发财路子，也欢迎打扰
          </li>
        </ul>
        <p>
          你也可以全程跟我用英语聊，我也非常乐意，因为可能我的英语比中文说的要好。。。
        </p>
        <p>
          <strong>
            BTW：暂不招人，有招聘计划会公布。
          </strong>
        </p>

        <h2>联系方式</h2>
        <p>
          通过{' '}
          <RichLink
            href="https://t.me/maogouluyou"
            target="_blank"
          >
            这个链接
          </RichLink>
          来跟我预约一个合适你的时间。
        </p>
        {/* <h2>定价</h2>
        <p>我的一对一咨询的价格为：</p>
        <ul>
          <li>
            <strong>¥150 - 30分钟</strong>
          </li>
          <li>
            <strong>¥300 - 60分钟</strong>
          </li>
        </ul>

        <p className="flex justify-center md:block md:justify-start">
          <span className="inline-flex flex-col items-center">
            <Image src={AlipayQR} alt="" className="w-44 dark:brightness-90" />
            <span className="mt-1 text-sm font-medium">支付宝二维码</span>
          </span>
        </p>
        <p>
          一旦你完成支付，通过{' '}
          <RichLink
            href="https://cal.com/calicastle/ask-me-anything"
            target="_blank"
          >
            这个链接
          </RichLink>
          来跟我预约一个合适你的时间。
        </p> */}

        {/* <h2>感谢信</h2>
        <p>
          下面两个截图摘选自两名 Twitter
          朋友的私信，能够帮助到更多的人一直是我的使命：
        </p>
        <p className="grid items-center gap-4 lg:grid-cols-2">
          <Image
            src={ThankYouLetterScreenshot1}
            alt=""
            className="max-w-full"
          />
          <Image
            src={ThankYouLetterScreenshot2}
            alt=""
            className="max-w-full"
          />
        </p> */}
      </article>
    </Container>
  )
}
