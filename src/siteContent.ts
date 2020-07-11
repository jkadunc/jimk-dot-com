//TODO: add typedef for site content object
type siteContentType = {
  
}

  const siteContent = {
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
                period: 'Sept 2006 - May 2007',
                degree: []
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
              name: 'PB Pier',
              description: 'PB Pier',
              thumbUrl: '/img/gallery/thumbs/001_1346.jpg',
              fullSizeUrl: '/img/gallery/fullsize/001_1346.jpg'
            },
            {
              name: 'Balboa Park',
              description: 'Balboa Park',
              thumbUrl: '/img/gallery/thumbs/001_0726-HDR.jpg',
              fullSizeUrl: '/img/gallery/fullsize/001_0726-HDR.jpg'
            },
            {
              name: 'Rock, Joshua Tree',
              description: 'Rock, Joshua Tree',
              thumbUrl: '/img/gallery/thumbs/001_2840.jpg',
              fullSizeUrl: '/img/gallery/fullsize/001_2840.jpg'
            },
          ]

        }
  };


  export default siteContent;