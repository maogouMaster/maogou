export const seo = {
  title: '猫狗之家 | Telegram 新手指南、使用教程、频道推荐',
  description:
    '猫狗之家专注于玩转Telegram，有新手指南、使用教程和不定期的频道推荐',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://www.amag365.top'
      : 'http://localhost:3000'
  ),
} as const
