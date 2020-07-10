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
              name: '',
              description: '',
              thumbId: '',
              fullResId: ''
            }
          ]

        }
  };


  export default siteContent;