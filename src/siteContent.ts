type siteContentType = {
  about:{
      content: Array<{text: string, image: string}>
  },
  resume:{
    overview: string,
    education: Array<{
        institute: string,
        period: string,
        location: string,
        degree? : Array <{icon?: string, description: string}> 
    }>,
    experience: Array<{
        title: string,
        company: string,
        period: string,
        location: string,
        highlights: Array <{icon?: string, description: string}> 
    }>,
  },
  photography: {
    photos: Array <{description?: string, thumbUrl: string, fullSizeUrl: string}>
  }
}

  const siteContent:siteContentType = {
        about:{
            content: [
                {
                  text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
                  image: 'https://source.unsplash.com/random',
                },
                {
                  text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
                  image: 'https://source.unsplash.com/random',
                },
                {
                  text: `some more content!!!`,
                  image: '',
                }
            ]
        },
        resume:{
            overview: 'overview',
            education: [
              {
                institute: 'University of Wisconsin',
                location: 'Madison, WI',
                period: 'Sept 2007 - Dec 2010',
                degree: [
                  {
                    icon: 'flask',
                    description: 'Bachelor of Science, Chemical Engineering'
                  },
                  {
                    icon: 'chart', 
                    description: 'Bachelor of Science, Economics'
                  }
                ]
              },
              {
                institute: 'University of Minnesota',
                location: 'Minneapolis, MN',
                period: 'Sept 2006 - May 2007'
              },
            ],
            experience: [
              {
                title: 'Manager, Product Management',
                company: 'Intuit',
                location: 'San Diego, CA',
                period: 'April 2017 - Aug 2020',
                highlights: [
                  {
                    icon: 'flask',
                    description: 'DID AWESOME STUFF'
                  },
                  {
                    icon: 'chart', 
                    description: 'DID AWESOME STUFF'
                  }
                ]
              },
              {
                title: 'Manager',
                company: 'Accenture',
                location: 'Chicago, IL',
                period: 'Feb 2011 - March 2017',
                highlights: [
                  {
                    icon: 'flask',
                    description: 'DID AWESOME STUFF'
                  },
                  {
                    icon: 'chart', 
                    description: 'DID AWESOME STUFF'
                  }
                ]
              },
              {
                title: 'job1',
                company: 'university of wisconsin',
                location: 'madison, wi',
                period: 'dec 2010 - jan 2012',
                highlights: [
                  {
                    icon: 'flask',
                    description: 'DID STUFF'
                  },
                  {
                    icon: 'chart', 
                    description: 'DID STUFF'
                  }
                ]
              },
            ]
        },

        photography: {
          photos: [
            {
              description: 'Pier, San Diego',
              thumbUrl: '/img/gallery/thumbs/001_1346.jpg',
              fullSizeUrl: '/img/gallery/fullsize/001_1346.jpg'
            },
            {
              description: 'Building, Balboa Park, San Diego',
              thumbUrl: '/img/gallery/thumbs/001_0726-HDR.jpg',
              fullSizeUrl: '/img/gallery/fullsize/001_0726-HDR.jpg'
            },
            {
              description: 'Rock, Joshua Tree',
              thumbUrl: '/img/gallery/thumbs/001_2840.jpg',
              fullSizeUrl: '/img/gallery/fullsize/001_2840.jpg'
            },
            {
              description: 'Cactus, Joshua Tree',
              thumbUrl: '/img/gallery/thumbs/001_2762.jpg',
              fullSizeUrl: '/img/gallery/fullsize/001_2762.jpg'
            },
            {
              description: 'Bug, San Diego',
              thumbUrl: '/img/gallery/thumbs/001_3506.jpg',
              fullSizeUrl: '/img/gallery/fullsize/001_3506.jpg'
            },
            {
              description: 'Girlfriend & Ocotillo, Anza Borrego',
              thumbUrl: '/img/gallery/thumbs/001_4147.jpg',
              fullSizeUrl: '/img/gallery/fullsize/001_4147.jpg'
            },
            {
              description: 'Lifeguard Post, Malibu',
              thumbUrl: '/img/gallery/thumbs/001_5249.jpg',
              fullSizeUrl: '/img/gallery/fullsize/001_5249.jpg'
            },
            {
              description: 'Road, Death Valley',
              thumbUrl: '/img/gallery/thumbs/69340001.jpg',
              fullSizeUrl: '/img/gallery/fullsize/69340001.jpg'
            },
            {
              description: 'Rocks, Death Valley',
              thumbUrl: '/img/gallery/thumbs/69340003.jpg',
              fullSizeUrl: '/img/gallery/fullsize/69340003.jpg'
            },
            {
              description: 'Dune, Death Valley',
              thumbUrl: '/img/gallery/thumbs/DSC00360.jpg',
              fullSizeUrl: '/img/gallery/fullsize/DSC00360.jpg'
            },
            {
              description: 'Flats, Death Valley',
              thumbUrl: '/img/gallery/thumbs/DSC00382.jpg',
              fullSizeUrl: '/img/gallery/fullsize/DSC00382.jpg'
            },
            {
              description: 'Stars, Death Valley',
              thumbUrl: '/img/gallery/thumbs/001_6550.jpg',
              fullSizeUrl: '/img/gallery/fullsize/001_6550.jpg'
            },
          ]

        }
  };


  export default siteContent;