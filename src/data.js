import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  
};
  
export const footerData = {
  links: [
    {
      
    },
    {
      
    },
    {
      title: 'Support',
      links: [
        { text: 'Email', href: 'mailto:support@eclucktic.app' },
        { text: 'Support Us', href: 'https://patreon.com/TrophyCatGames' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: 'https://trophycat.games' },
        { text: 'Blog', href: 'https://trophycat.games/blog' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/trophycatgames' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/trophycatgames/' },
    { ariaLabel: 'Patreon', icon: 'tabler:brand-patreon', href: 'https://patreon.com/TrophyCatGames' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://tiktok.com/@trophycatgames' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@trophycatgames' },

    
  ],
  footNote: `
    Made with 💕 by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://trophycat.games/">HSmithDev LLC dba Trophy Cat Games</a> · Copyright © 2023 · All rights reserved.
  `,
};
