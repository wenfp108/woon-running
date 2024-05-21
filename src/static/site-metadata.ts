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
  siteUrl: 'https://www.strava.com/athletes/135469581',
  logo:  'https://i.ibb.co/GMqKV7L/20240429191059.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'STRAVA资料',
      url: 'https://www.strava.com/athletes/135469581',
    },
  ],
};

export default data;
