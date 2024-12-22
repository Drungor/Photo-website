
//  import model:
//         id: 1,
//         title: '',
//         CarrouselImage: '/carrousel-pictures/....jpg',
//         year: '',
//         mode: '',
//         gallery: [
//           {
//             id: ,
//             title: '',
//             src:'',
//             mode: '',
//           },

 
 const imageData = [
    {
        id: 1,
        title: 'Autumn leaves',
        CarrouselImage: '/carrousel-pictures/autumnInJapan.jpg',
        year: 'Dec 2024',
        mode: 'portrait',
        gallery: [
          {
            id: 6,
            title: 'a tree with yellow leaves in a cemetery',
            src: 'https://images.unsplash.com/photo-1733653025782-1b0edb13ebc9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            mode: 'portrait',
          },
          {
            id: 1,
            title: 'trees in autumn',
            src:'https://images.unsplash.com/photo-1733653025847-935848389879?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            mode: 'portrait',
          },
          {
            id: 2,
            title: 'colors of leaves',
            src: 'https://images.unsplash.com/photo-1733653025423-d9ab923f02fd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            mode: 'portrait',
          },
          {
            id: 3,
            title: 'View on the beach threw the canopee',
            src: 'https://images.unsplash.com/photo-1727359224290-713b6168f86d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            mode: 'portrait',
          },
          {
            id: 4,
            title: 'View on the beach threw the canopee 2',
            src: 'https://images.unsplash.com/photo-1727359223204-83474a4df033?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            mode: 'portrait',
          },
          {
            id: 5,
            title: 'View on Kyoto',
            src: 'https://images.unsplash.com/photo-1733653025176-fe0d3f8661bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            mode: 'portrait',
          },
        ],
      },
      {
        id: 2,
        title: 'Kansai',
        CarrouselImage: '/carrousel-pictures/kansai.jpg',
        year: 'Nov 2024',
        mode: 'portrait',
        gallery: [
                  {
                    id: 1,
                    title: 'kiyomizu',
                    src:'https://images.unsplash.com/photo-1733653025173-0858f92416a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    mode: 'portrait',
                  },
                  {
                    id: 2,
                    title: 'Nara temple',
                    src:'https://images.unsplash.com/photo-1733476748021-2a0a36aa98bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    mode: 'portrait',
                  },
                  {
                    id: 3,
                    title: 'Nara temple 2',
                    src:'https://images.unsplash.com/photo-1733476754496-3012a0a2b6ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    mode: 'portrait',
                  },
                  {
                    id: 4,
                    title: 'a stone path leading to a s small house',
                    src:'https://images.unsplash.com/photo-1733476748034-2d62eb1b4a4e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    mode: 'portrait',
                  },
                  {
                    id: 5,
                    title: 'Todai Ji temple in Nara',
                    src:'https://images.unsplash.com/photo-1733476744440-c4ad9c059c29?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    mode: 'portrait',
                  },
                  {
                    id: 6,
                    title: 'hosue surrounded by trees',
                    src:'https://images.unsplash.com/photo-1733476745940-c1b35557a3bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    mode: 'portrait',
                  },
                  {
                    id: 7,
                    title: 'temple of love nara',
                    src:'https://images.unsplash.com/photo-1733476747540-f439330353d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    mode: 'portrait',
                  },
                  {
                    id: 8,
                    title: 'Nara entrance door full of tourist and a dear walking by',
                    src:'https://images.unsplash.com/photo-1733476744262-ecdf86093945?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    mode: 'portrait',
                  },
        ],
      },
      {
      id: 3,
      title: 'Small town',
      CarrouselImage: '/carrousel-pictures/smalltown.jpg',
      year: 'oct 2024',
      mode: 'portrait',
      gallery: [{
        id: 1,
        title: 'windows of a house in the countryside with a tree growing inside',
        src:'https://images.unsplash.com/photo-1733653024701-064c6b50fabe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id: 2,
        title: 'front of a store in the countryside',
        src:'https://images.unsplash.com/photo-1733653024407-0f03fd689dbc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id: 3,
        title: 'front of a store in the countryside 2',
        src:'https://images.unsplash.com/photo-1733653024688-8e4cb260014f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id: 4 ,
        title: 'work cloths drying outside a house',
        src:'https://images.unsplash.com/photo-1733653024402-0da586d33c40?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id: 5,
        title: '',
        src:'https://images.unsplash.com/photo-1733653023250-33739d0d8dc4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id: 6,
        title: 'traditionnal japanese house',
        src:'https://images.unsplash.com/photo-1733653023417-92ffcab24969?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id: 7,
        title: 'empty street with a couple of tourist',
        src:'https://images.unsplash.com/photo-1733653025859-c1d8d1e46626?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id: 8,
        title: 'a small hous ebetween two tall buldings',
        src:'https://images.unsplash.com/photo-1733653024743-ef6415bea3de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      }],
    },
    {
      id: 4,
      title: 'Countryside',
      CarrouselImage: '/carrousel-pictures/countryside.jpg',
      year: 'oct 2024',
      mode: 'portrait',
      gallery: [{
        id:1,
        title: 'emptuy playground in the countryside',
        src:'https://images.unsplash.com/photo-1729914943820-a0e0aa4f9c19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nzh8fHxlbnwwfHx8fHw%3D',
        mode: 'portrait',
      },{
        id:2,
        title: 'old gaz pourp',
        src:'https://images.unsplash.com/photo-1729914944174-4fe217c8af07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODN8fHxlbnwwfHx8fHw%3D',
        mode: 'portrait',

      },{
        id:3,
        title: 'entrance of the city in the countryside',
        src:'https://images.unsplash.com/photo-1729914942434-aabe1a62910c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OTN8fHxlbnwwfHx8fHw%3D',
        mode: 'portrait',
      },{
        id:4,
        title: 'a small house in the countryside',
        src:'https://images.unsplash.com/photo-1729914942985-dceb6a15dc8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id:5,
        title: 'public toilet on a station in the countryside',
        src:'https://images.unsplash.com/photo-1729914943036-a59070f388c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OTF8fHxlbnwwfHx8fHw%3D',
        mode: 'portrait',
      },{
        id:6,
        title: 'rize field in the countryside',
        src:'https://images.unsplash.com/photo-1727359224830-dfa185da1133?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTA5fHx8ZW58MHx8fHx8',
        mode: 'portrait',
      },{
        id:7,
        title: 'road fromn my scooter view',
        src:'https://images.unsplash.com/photo-1729914944350-4b789fe3c983?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id:8,
        title: 'road in the countryside',
        src: 'https://images.unsplash.com/photo-1729914944333-dd5dc9bd67ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      }],
    },
    {
      id: 5,
      title: 'Fukuoka inner',
      CarrouselImage: '/carrousel-pictures/fukuoka.jpg',
      year: '2024',
      mode: 'portrait',
      gallery: [{
        id:1,
        title: 'cityscape of fukuoka',
        src:'https://images.unsplash.com/photo-1706705327866-b7cc21933b1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id:2,
        title: 'cityscape of fukuoka',
        src:'https://images.unsplash.com/photo-1701391691289-898e14ebc420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTgxfHx8ZW58MHx8fHx8',
        mode: 'portrait',
      },{
        id:3,
        title: 'cityscape of fukuoka',
        src:'https://images.unsplash.com/photo-1729914942985-4563ced8a40f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id:4,
        title: 'cityscape of fukuoka',
        src:'https://images.unsplash.com/photo-1727359224349-c4607aef332f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id:5,
        title: 'cityscape of fukuoka',
        src:'https://images.unsplash.com/photo-1729914944505-3b4bbcfef64f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      }],
    },
    {
      id: 6,
      title: 'Itoshima',
      CarrouselImage: '/carrousel-pictures/itoshima.jpg',
      year: '2024',
      mode: 'portrait',
      gallery: [{
        id:1,
        title: 'itoshim,a seaside',
        src:'https://images.unsplash.com/photo-1727359223408-aea70a90fec4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id:2,
        title: 'itoshima s beach',
        src:'https://images.unsplash.com/photo-1707738077982-2ddc74023f01?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id:3,
        title: 'itoshima beahc withb a man alone',
        src:'https://images.unsplash.com/photo-1707738078088-ad5991b7084a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id:4,
        title: 'sunset on the beach with a tori opn a small island',
        src:'https://images.unsplash.com/photo-1727359225006-db45efd8a896?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id:5,
        title: 'sunset in itoshima',
        src:'https://images.unsplash.com/photo-1729914942332-c79e8d843027?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id:6,
        title: 'sunset and vbuiew on the sea',
        src:'https://images.unsplash.com/photo-1727352159265-37686f77394f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id:7,
        title: 'sunset and vbuiew on the sea 2',
        src:'https://images.unsplash.com/photo-1729914942571-c66099e2e8ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      }],
    },
    {
      id: 7,
      title: 'Nagasaki',
      CarrouselImage: '/carrousel-pictures/nagasaki.jpg',
      year: 'mar 2024',
      mode: 'portrait',
      gallery: [{
        id:1,
        title: 'train station in nagasaki ken',
        src:'https://images.unsplash.com/photo-1708250981326-689d76411688?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'landscape',
      },{
        id:2,
        title: 'onsne in front of the sea',
        src:'https://images.unsplash.com/photo-1708250981209-4fcdbeca6db3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id:3,
        title: 'view on the sea',
        src:'https://images.unsplash.com/photo-1708250981270-955c6a7b8130?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'landscape',
      },{
        id:4,
        title: 'gaz station in nagasaki with a market',
        src:'https://images.unsplash.com/photo-1708250987550-d65b1841aa96?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id:5,
        title: 'ricer field in nagasaki',
        src:'https://images.unsplash.com/photo-1726922854502-b5d148ee8cdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTMxfHx8ZW58MHx8fHx8',
        mode: 'portrait',
      },{
        id:6,
        title: 'night time picture duriong lantern festival in nagasaki',
        src:'https://images.unsplash.com/photo-1708250989962-b5c2e24b70cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id:7,
        title: 'water lavabo in nagasaki',
        src:'https://images.unsplash.com/photo-1726922855163-80096d304e82?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id:8,
        title: 'stadium in nagasaki ken',
        src:'https://images.unsplash.com/photo-1726922855058-c1daaec33e05?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id:9,
        title: 'runner in the sunshine',
        src:'https://images.unsplash.com/photo-1726922855083-4315b61b64bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id:10,
        title: 'river in nagasaki',
        src:'https://images.unsplash.com/photo-1726922853407-3762766ebf88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      }],
    },
    {
      id: 8,
      title: 'Sakura',
      CarrouselImage: '/carrousel-pictures/sakura.jpg',
      year: 'apr 2024',
      mode: 'portrait',
      gallery: [{
        id:1,
        title: 'cycliong in the sunset threw the sakura',
        src:'https://images.unsplash.com/photo-1712065469189-fd83ebcfdbee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id:2,
        title: 'road with sakura trees',
        src:'https://images.unsplash.com/photo-1712065469160-12464dec544f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      },{
        id:3,
        title: 'car in the sakura',
        src:'https://images.unsplash.com/photo-1712065469084-967cf043552b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        mode: 'portrait',
      }],
    },
     
]

export default imageData;