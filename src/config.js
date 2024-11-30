var config = {
    style: 'mapbox://styles/mapbox/streets-v12',
    accessToken: 'pk.eyJ1IjoidmppYTIiLCJhIjoiY20xczFxajN4MDFtcTJxcHJsb241ZWlwZCJ9.nhDvihvNLuZjT-Cri3hKWQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Seattle Enviromental Initiatives',
    subtitle: 'The Holes in the Green initiative',
    byline: 'By Victor Jia',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'center',
            hidden: false,
            title: 'Going even greener!',
            image: '../assets/sea.jpg',
            description: 'Seattle is known for its abundance of green spaces, lush parks, and sustainable urban planning, making it one of the greenest cities in the U.S. However, despite these efforts, the city faces ongoing challenges in managing water runoff, especially during heavy rainfall, which can lead to flooding and pollution. Additionally, illegal dumping remains a significant issue, with waste often finding its way into local waterways, impacting water quality and wildlife. Addressing these issues requires both better infrastructure and stronger community engagement in environmental stewardship.',
            location: {
                center: [-122.33696, 47.62563],
                zoom: 10,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // add the following:
                {
                    layer: 'dump-layer',
                    opacity: 0,
                     },
                {
                    layer: 'discharge-layer',
                    opacity: 0,
                    }
                     
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'slid-gend',
            alignment: 'left',
            hidden: false,
            title: 'Legend',
            image: '',
            description: '',
            legend: true,
            location: {              
                center: [-122.34105, 47.60132],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
            },
            onChapterEnter: [
                // add the following:
                {
                    layer: 'dump-layer',
                    opacity: 0,
                     },
                {
                    layer: 'discharge-layer',
                    opacity: 1,
                    }
                     
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Direct Discharge and Stormwater Infrastructure',
            image: '../assets/stormwater.png',
            description: 'Green stormwater infrastructure (GSI) is designed to manage and treat runoff at its source by using natural systems like plants, soils, and permeable surfaces to absorb and filter water. This approach helps reduce pollution by preventing untreated runoff from directly entering ecosystems, thus protecting biodiversity. GSI also enhances urban resilience by slowing down water flow, reducing flooding, and improving water quality in local waterways.',
            location: {
                center: [-122.34105, 47.60132],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'discharge-layer',
                    opacity: 1,
                }
                 
        ],
            onChapterExit: [
        ]
        },
        {
            id: 'second-identifier-2',
            alignment: 'left',
            hidden: false,
            title: 'Possible Solutions',
            image: '../assets/1076695.jpg',
            description: 'A possible solution is to expand the use of green stormwater infrastructure, such as rain gardens, bioswales, and permeable pavements, which can absorb and filter runoff before it reaches waterways. Additionally, retrofitting existing urban spaces with these systems can help manage excess water during heavy rainfall, reducing pollution and preventing flooding. Investing in these sustainable solutions not only improves water quality but also enhances the resilience of urban environments to climate change.',
            location: {
                center: [-122.25930, 47.67877],
                zoom: 13.53,
                pitch: 30,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
        ],
            onChapterExit: [
                {
                    layer: 'discharge-layer',
                    opacity: 0,
                }
        ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Illegal dumping incidents',
            image: '../assets/illegal-dumping.jpeg',
            description: 'These are locations in Seattle where illegal dumping incidents have occured. (click dot to see street) Illegal dumping is the unauthorized disposal of waste in unpermitted areas, such as vacant lots, roadsides, or natural habitats. It harms the environment, poses health risks, and often leads to significant cleanup costs for communities.',
            location: {
                center: [-122.34105, 47.60132],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
                {
                    layer: 'dump-layer',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'third-identifier-2',
            alignment: 'right',
            hidden: false,
            title: 'Possible solutions',
            image: '../assets/neighborhoodwatch.png',
            description: 'Possible solutions to illegal dumping include increasing public awareness through education campaigns and providing accessible waste disposal options, like free drop-off events or expanded collection services. Stricter enforcement of penalties and the use of surveillance systems in hotspot areas can also deter offenders. Encouraging community reporting and participation helps address the issue collaboratively.',
            location: {
                center: [-122.34105, 47.60132],
                zoom: 12,
                pitch: 30,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
                {
                    layer: 'dump-layer',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'final-id',
            alignment: 'center',
            hidden: false,
            title: 'What can we expect from these solutions?',
            image: '../assets/happty.jpg',
            description: 'Seattle has made significant strides in becoming one of the greenest cities in the U.S., the challenges of water runoff and illegal dumping require continued attention and innovation. By implementing the proposed solutions, such as improving stormwater infrastructure and increasing community awareness, we can ensure a cleaner, more sustainable future for the city. Together, these efforts will help protect Seattle’s natural beauty and enhance the quality of life for its residents.',
            location: {
                center: [-122.33696, 47.62563],
                zoom: 10,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // add the following:
                {
                    layer: 'dump-layer',
                    opacity: 0,
                     },
                {
                    layer: 'discharge-layer',
                    opacity: 0,
                    }
                     
            ],
            onChapterExit: [
            ]
        }
    ]
};
