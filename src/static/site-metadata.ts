interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Woon跑步日志',
  siteUrl: 'https://woon-running.vercel.app/',
  logo:  'https://i.ibb.co/fxcj8V7/Big-Meow-cats-catsofinstagram-cat-catstagram-instagram-catlover-catlife-catlovers-instacat-kitten-pe.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Strava',
      url: 'https://www.strava.com/athletes/135469581',
    },
  ],
};

export default data;
