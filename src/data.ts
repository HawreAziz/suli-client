import { StaticLifecycle } from "react";

type ShopType = 'fastfood'
    | 'shopping'
    | 'malls'
    | 'outdoor'
    | 'restaurant'
    | 'park'
    | 'cinema'
    | 'event';


interface WorkInterval {
    start: string;
    end: string;
}

export interface OpeningHours {
    // [state: string]: WorkInterval;
    Sun: {
        start: string;
        end: string
    };
    Mon: {
        start: string;
        end: string
    };
    Tue: {
        start: string;
        end: string
    };
    Wed: {
        start: string;
        end: string
    };
    Thu: {
        start: string;
        end: string
    };
    Fri: {
        start: string;
        end: string
    };
    Sat: {
        start: string;
        end: string
    };
}

export interface Feature {
    tag: ShopType;
    title: string;
    address: string;
    image: string;
    description: string;
    icon: string;
    location: {
        lat: number;
        long: number;
    };
    images: string[];
    opening_hours: OpeningHours
}



export const features: Feature[] = [
    {
        title: 'Latona Cafe & Bistro',
        image: `${process.env.PUBLIC_URL}/res1.jpg`,
        tag: "restaurant",
        description: "Our aim with opening Latona Cafe and Bistro is to convert the concept of cafe style in Kurdistan. Also, it is to provide an amazing and exciting time to our visitors and customers. Additionally, it is the first cafe Bistro in Sulaimani. You are all welcome to give a visit to your fantastic cafe Bistro and to enjoy our delicious and tasty food from all different kinds..",
        icon: `${process.env.PUBLIC_URL}/feature-logo.jpg`,
        address: 'Sarchnar Road Slemani Kurdistan',
        location: {
            lat: 35.579738,
            long: 45.382356
        },
        images: [
            `${process.env.PUBLIC_URL}/res2.jpg`,
            `${process.env.PUBLIC_URL}/res3.jpg`,
            `${process.env.PUBLIC_URL}/res4.jpg`,
            `${process.env.PUBLIC_URL}/res5.jpg`,
            `${process.env.PUBLIC_URL}/res6.jpg`,
            `${process.env.PUBLIC_URL}/res7.jpg`,
            `${process.env.PUBLIC_URL}/res8.jpg`,
        ],
        opening_hours: {
            Sat: {
                start: "10:00 AM",
                end: "12:30   AM"
            },
            Mon: {
                start: "10:00 AM",
                end: "12:30 AM"
            },
            Tue: {
                start: "10:00 AM",
                end: "12:30 AM"
            },
            Wed: {
                start: "10:00 AM",
                end: "12:30 AM"
            },
            Thu: {
                start: "10:00 AM",
                end: "12:30 PM"
            },
            Fri: {
                start: "10:00 AM",
                end: "12:30 AM"
            },
            Sun: {
                start: "10:00 AM",
                end: "12:30 AM"
            },
        }
    },
    {
        title: 'Ivy Dining & Co',
        image: `${process.env.PUBLIC_URL}/ivy1.jpeg`,
        tag: "restaurant",
        description: "Craft food. Ambient environment. Your ideal dining destination.",
        icon: `${process.env.PUBLIC_URL}/ivyLogo.png`,
        address: 'Sarchnar Road Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [
            `${process.env.PUBLIC_URL}/ivy1.jpeg`,
            `${process.env.PUBLIC_URL}/ivy2.jpeg`,
            `${process.env.PUBLIC_URL}/ivy3.jpeg`,
            `${process.env.PUBLIC_URL}/ivy4.jpeg`,
            `${process.env.PUBLIC_URL}/ivy5.jpeg`,
        ],
        opening_hours: {
            Sat: {
                start: "3:00 PM",
                end: "12:30 AM"
            },
            Mon: {
                start: "3:00 PM",
                end: "12:30 AM"
            },
            Tue: {
                start: "3:00 PM",
                end: "12:30 AM"
            },
            Wed: {
                start: "3:00 PM",
                end: "12:30 AM"
            },
            Thu: {
                start: "3:00 PM",
                end: "12:30 AM"
            },
            Fri: {
                start: "3:00 PM",
                end: "12:30 AM"
            },
            Sun: {
                start: "3:00 PM",
                end: "12:30 AM"
            },
        }
    },
    {
        title: 'Vibe Lounge',
        image: `${process.env.PUBLIC_URL}/vibe2.jpeg`,
        tag: "restaurant",
        description: "Vibe Lounge is where the taste matches the looks.",
        icon: `${process.env.PUBLIC_URL}/vibeLogo.jpeg`,
        address: 'Baxtyary Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [
            `${process.env.PUBLIC_URL}/vibe1.jpeg`,
            `${process.env.PUBLIC_URL}/vibe2.jpeg`,
            `${process.env.PUBLIC_URL}/vibe3.jpeg`,
            `${process.env.PUBLIC_URL}/vibe4.jpeg`,
        ],
        opening_hours: {
            Sat: {
                start: "8:00 AM",
                end: "12:00 AM"
            },
            Mon: {
                start: "8:00 AM",
                end: "12:00 AM"
            },
            Tue: {
                start: "8:00 AM",
                end: "12:00 AM"
            },
            Wed: {
                start: "8:00 AM",
                end: "12:00 AM"
            },
            Thu: {
                start: "8:00 AM",
                end: "12:00 AM"
            },
            Fri: {
                start: "8:00 AM",
                end: "12:00 AM"
            },
            Sun: {
                start: "8:00 AM",
                end: "12:00 AM"
            },
        }
    },
    {
        title: 'Fancy Restaurant and Cafe',
        image: `${process.env.PUBLIC_URL}/fancy4.jpeg`,
        tag: "restaurant",
        description: "The perfect place to have a perfect meal.",
        icon: `${process.env.PUBLIC_URL}/Fancylogo.jpeg`,
        address: 'Ashti Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [
            `${process.env.PUBLIC_URL}/fancy1.jpeg`,
            `${process.env.PUBLIC_URL}/fancy2.jpeg`,
            `${process.env.PUBLIC_URL}/fancy3.jpeg`,
            `${process.env.PUBLIC_URL}/fancy4.jpeg`,],
        opening_hours: {
            Sat: {
                start: "8:00 AM",
                end: "11:00 PM"
            },
            Mon: {
                start: "8:00 AM",
                end: "11:00 PM"
            },
            Tue: {
                start: "8:00 AM",
                end: "11:00 PM"
            },
            Wed: {
                start: "8:00 AM",
                end: "11:00 PM"
            },
            Thu: {
                start: "8:00 AM",
                end: "11:00 PM"
            },
            Fri: {
                start: "8:00 AM",
                end: "11:00 PM"
            },
            Sun: {
                start: "8:00 AM",
                end: "11:00 PM"
            },
        }

    },
    {
        title: 'Cafe11',
        image: `${process.env.PUBLIC_URL}/cafe11.jpeg`,
        tag: "restaurant",
        description: "A Kurdish-Italian marvelous experiment. in Sulaymaniah Kurdistan of Iraq..",
        icon: `${process.env.PUBLIC_URL}/cafe11Logo.jpeg`,
        address: 'Aqari Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/cafe11.jpeg`,
            `${process.env.PUBLIC_URL}/cafe12.jpeg`,
            `${process.env.PUBLIC_URL}/cafe13.jpeg`,
        ],
        opening_hours: {
            Sat: {
                start: "10:00 AM",
                end: "12:30 AM"
            },
            Mon: {
                start: "10:00 AM",
                end: "12:30 AM"
            },
            Tue: {
                start: "10:00 AM",
                end: "12:30 AM"
            },
            Wed: {
                start: "10:00 AM",
                end: "12:30 AM"
            },
            Thu: {
                start: "10:00 AM",
                end: "12:30 AM"
            },
            Fri: {
                start: "10:00 AM",
                end: "12:30 AM"
            },
            Sun: {
                start: "10:00 AM",
                end: "12:30 AM"
            },
        }
    },
    {
        title: 'Roundabout',
        image: `${process.env.PUBLIC_URL}/round1.jpeg`,
        tag: "restaurant",
        description: "لە ڕاوند ئەباوت ئێمە بە باشترین شێوە خواردن و خواردنەوەکان و کەشێکی ئارام وكلاسيك بۆ ئێوەی خۆشەوێست دابین دەکەین.",
        icon: `${process.env.PUBLIC_URL}/roundlogo.jpeg`,
        address: 'Aqari Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/round1.jpeg`,
            `${process.env.PUBLIC_URL}/round2.jpeg`,
            `${process.env.PUBLIC_URL}/round3.jpeg`,
        ],
        opening_hours: {
            Sat: {
                start: "5:30 PM",
                end: "12:00 AM"
            },
            Mon: {
                start: "5:30 PM",
                end: "12:00 AM"
            },
            Tue: {
                start: "5:30 PM",
                end: "12:00 AM"
            },
            Wed: {
                start: "5:30 PM",
                end: "12:00 AM"
            },
            Thu: {
                start: "5:30 PM",
                end: "12:00 AM"
            },
            Fri: {
                start: "5:30 PM",
                end: "12:00 AM"
            },
            Sun: {
                start: "5:30 PM",
                end: "12:00 AM"
            },
        }
    },
    {
        title: "Gold'n brown",
        image: `${process.env.PUBLIC_URL}/gold3.jpeg`,
        tag: "fastfood",
        description: "There are many ways to fry Chicken , but ours is the best.",
        icon: `${process.env.PUBLIC_URL}/goldLogo.jpeg`,
        address: 'Malik Mahmood st. Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/gold1.jpeg`,
            `${process.env.PUBLIC_URL}/gold2.jpeg`,
            `${process.env.PUBLIC_URL}/gold3.jpeg`,
            `${process.env.PUBLIC_URL}/gold4.jpeg`,
        ],
        opening_hours: {
            Sat: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
            Mon: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
            Tue: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
            Wed: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
            Thu: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
            Fri: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
            Sun: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
        }
    },
    {
        title: "Dal's Burger",
        image: `${process.env.PUBLIC_URL}/dals3.jpeg`,
        tag: "fastfood",
        description: "Have you Ever tried Dal’s Burger? Its Very Delicious..! Ask those who have tried.",
        icon: `${process.env.PUBLIC_URL}/DalsLogo.jpeg`,
        address: 'Malik Mahmood st. Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/dals1.jpeg`,
            `${process.env.PUBLIC_URL}/dals2.jpeg`,
            `${process.env.PUBLIC_URL}/dals3.jpeg`,
            `${process.env.PUBLIC_URL}/dals4.jpeg`,
        ],
        opening_hours: {
            Sat: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
            Mon: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
            Tue: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
            Wed: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
            Thu: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
            Fri: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
            Sun: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
        }
    },

    {
        title: "Burger King",
        image: `${process.env.PUBLIC_URL}/king1.jpeg`,
        tag: "fastfood",
        description: "Home of The Whopper since 1954.",
        icon: `${process.env.PUBLIC_URL}/kingLogo.jpeg`,
        address: 'Malik Mahmood st. Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/king1.jpeg`,
            `${process.env.PUBLIC_URL}/king2.jpeg`,
            `${process.env.PUBLIC_URL}/king3.jpeg`,
            `${process.env.PUBLIC_URL}/king4.jpeg`,
            `${process.env.PUBLIC_URL}/king5.jpeg`,
            `${process.env.PUBLIC_URL}/king6.png`,
        ],
        opening_hours: {
            Sat: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
            Mon: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
            Tue: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
            Wed: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
            Thu: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
            Fri: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
            Sun: {
                start: "11:00 AM",
                end: "1:00 AM"
            },
        }
    },

    {
        title: "Bee's Burger",
        image: `${process.env.PUBLIC_URL}/bee2.jpeg`,
        tag: "fastfood",
        description: "For tasty and different foods. Best hamburgers in town! ",
        icon: `${process.env.PUBLIC_URL}/beeLogo.jpeg`,
        address: 'Malik Mahmood st. Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/bee1.jpeg`,
            `${process.env.PUBLIC_URL}/bee2.jpeg`,
            `${process.env.PUBLIC_URL}/bee3.jpeg`,
            `${process.env.PUBLIC_URL}/bee4.jpeg`,
            `${process.env.PUBLIC_URL}/bee5.jpeg`,
        ],
        opening_hours: {
            Sat: {
                start: "11:00 AM",
                end: "10:00 PM"
            },
            Mon: {
                start: "11:00 AM",
                end: "10:00 PM"
            },
            Tue: {
                start: "11:00 AM",
                end: "10:00 PM"
            },
            Wed: {
                start: "11:00 AM",
                end: "10:00 PM"
            },
            Thu: {
                start: "11:00 AM",
                end: "10:00 PM"
            },
            Fri: {
                start: "11:00 AM",
                end: "10:00 PM"
            },
            Sun: {
                start: "11:00 AM",
                end: "10:00 PM"
            },
        }
    },

    {
        title: "The Station",
        image: `${process.env.PUBLIC_URL}/station3.jpeg`,
        tag: "fastfood",
        description: "Look, taste, and feel refreshing!",
        icon: `${process.env.PUBLIC_URL}/stationlogo.jpeg`,
        address: 'Malik Mahmood st. Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/station1.jpeg`,
            `${process.env.PUBLIC_URL}/station2.jpeg`,
            `${process.env.PUBLIC_URL}/station3.jpeg`,
            `${process.env.PUBLIC_URL}/station4.jpeg`,
        ],
        opening_hours: {
            Sat: {
                start: "11:00 AM",
                end: "10:00 PM"
            },
            Mon: {
                start: "11:00 AM",
                end: "10:00 PM"
            },
            Tue: {
                start: "11:00 AM",
                end: "10:00 PM"
            },
            Wed: {
                start: "11:00 AM",
                end: "10:00 PM"
            },
            Thu: {
                start: "11:00 AM",
                end: "10:00 PM"
            },
            Fri: {
                start: "11:00 AM",
                end: "10:00 PM"
            },
            Sun: {
                start: "11:00 AM",
                end: "10:00 PM"
            },
        }
    },

    {
        title: "LC Waikiki",
        image: `${process.env.PUBLIC_URL}/lc5.jpeg`,
        tag: "shopping",
        description: "Waikiki aims to provide affordable fashion to every family around the world. First established in France in 1988, LC Waikiki has been a Turkish brand since 1997. The company's goal is to be one of the top 3 fashion retail brands in Europe in 2023. With the motto 'Everyone deserves to be well dressed', LC Waikiki aims to provide affordable fashion to every family around the world.  In 2009, LC Waikiki opened its first international store in Romania. Today, the brand operates more than 1,200 stores in 54 countries on 4 continents with nearly 54,000 employees worldwide. Every week LC Waikiki opens a new store somewhere in the world!.",
        icon: `${process.env.PUBLIC_URL}/lcLogo.png`,
        address: 'Kolak Mall, Mawlawi St. Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/lc1.png`,
            `${process.env.PUBLIC_URL}/lc2.png`,
            `${process.env.PUBLIC_URL}/lc3.png`,
            `${process.env.PUBLIC_URL}/lc4.png`,
            `${process.env.PUBLIC_URL}/lc5.jpeg`,
        ],
        opening_hours: {
            Sat: {
                start: "9:00 AM",
                end: "9:00 PM"
            },
            Mon: {
                start: "9:00 AM",
                end: "9:00 PM"
            },
            Tue: {
                start: "9:00 AM",
                end: "9:00 PM"
            },
            Wed: {
                start: "9:00 AM",
                end: "9:00 PM"
            },
            Thu: {
                start: "9:00 AM",
                end: "9:00 PM"
            },
            Fri: {
                start: "9:00 AM",
                end: "9:00 PM"
            },
            Sun: {
                start: "9:00 AM",
                end: "9:00 PM"
            },
        }
    },

    {
        title: "Hunar phone",
        image: `${process.env.PUBLIC_URL}/hunar1.jpeg`,
        tag: "shopping",
        description: "Get the best phones for the best prices at Hunar phone.",
        icon: `${process.env.PUBLIC_URL}/hunarlogo.jpeg`,
        address: 'Mawlawi st. Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/hunar1.jpeg`,
            `${process.env.PUBLIC_URL}/hunar2.jpeg`,
            `${process.env.PUBLIC_URL}/hunar3.jpeg`,
            `${process.env.PUBLIC_URL}/hunar4.jpeg`,
        ],
        opening_hours: {
            Sat: {
                start: "9:00 AM",
                end: "7:00 PM"
            },
            Mon: {
                start: "9:00 AM",
                end: "7:00 PM"
            },
            Tue: {
                start: "9:00 AM",
                end: "7:00 PM"
            },
            Wed: {
                start: "9:00 AM",
                end: "7:00 PM"
            },
            Thu: {
                start: "9:00 AM",
                end: "7:00 PM"
            },
            Fri: {
                start: "9:00 AM",
                end: "7:00 PM"
            },
            Sun: {
                start: "9:00 AM",
                end: "7:00 PM"
            },
        }
    },

    {
        title: "Green Shark",
        image: `${process.env.PUBLIC_URL}/green4.jpeg`,
        tag: "shopping",
        description: "Have you Ever tried Dal’s Burger? Its Very Delicious..! Ask those who have tried.",
        icon: `${process.env.PUBLIC_URL}/greenlogo.jpeg`,
        address: 'Mawlawi. Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/green1.jpeg`,
            `${process.env.PUBLIC_URL}/green2.jpeg`,
            `${process.env.PUBLIC_URL}/green3.jpeg`,
            `${process.env.PUBLIC_URL}/green4.jpeg`,
        ],
        opening_hours: {
            Sat: {
                start: "9:00 AM",
                end: "6:00 PM"
            },
            Mon: {
                start: "9:00 AM",
                end: "6:00 PM"
            },
            Tue: {
                start: "9:00 AM",
                end: "6:00 PM"
            },
            Wed: {
                start: "9:00 AM",
                end: "6:00 PM"
            },
            Thu: {
                start: "9:00 AM",
                end: "6:00 PM"
            },
            Fri: {
                start: "9:00 AM",
                end: "6:00 PM"
            },
            Sun: {
                start: "9:00 AM",
                end: "6:00 PM"
            },
        }
    },

    {
        title: "X-Sport",
        image: `${process.env.PUBLIC_URL}/xsport1.jpeg`,
        tag: "shopping",
        description: "X-Sports guarantees the best sports wear! our store contains clothes,sneaker and other sports equip",
        icon: `${process.env.PUBLIC_URL}/xsportLogo.png`,
        address: 'Aqari, Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/xsport1.jpeg`,
            `${process.env.PUBLIC_URL}/xsport2.jpeg`,
            `${process.env.PUBLIC_URL}/xsport3.jpeg`,
        ],
        opening_hours: {
            Sat: {
                start: "11:00 AM",
                end: "1:00 PM"
            },
            Mon: {
                start: "10:00 AM",
                end: "11:00 PM"
            },
            Tue: {
                start: "10:00 AM",
                end: "11:00 PM"
            },
            Wed: {
                start: "10:00 AM",
                end: "11:00 PM"
            },
            Thu: {
                start: "10:00 AM",
                end: "11:00 PM"
            },
            Fri: {
                start: "10:00 AM",
                end: "11:00 PM"
            },
            Sun: {
                start: "10:00 AM",
                end: "11:00 PM"
            },
        }
    },

    {
        title: "Family Mall",
        image: `${process.env.PUBLIC_URL}/family1.jpeg`,
        tag: "malls",
        description: "Darin Group is in partnership with Halabja Group in Family Mall Sulaymaniyah project. Halabja Group has operations in general trading, international transportation, telecommunication and construction industries. Total construction area is 215,500 m2, 100,00 m2 of which will be developed as a recreational park area in partnership with the municipality. Family Mall Sulaymaniyah will cover 104,000 m2 of gross built up area, 60,000 m2 of which will be leasable and will include retail shops, a large hypermarket operated by Carrefour, food court, cafes and VIP restaurants with the park view, ice skating, bowling, fitness center and indoor game areas and offices. A rectangular shaped shopping gallery is connected to a central atrium with a glass dome roof. The atrium creates a visual connection between the shopping levels and brings natural light into the internal shopping corridors.",
        icon: `${process.env.PUBLIC_URL}/familylogo.png`,
        address: 'Malik Mahmood st. Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/family1.jpeg`,
            `${process.env.PUBLIC_URL}/family2.jpeg`,
            `${process.env.PUBLIC_URL}/family3.jpeg`,
            `${process.env.PUBLIC_URL}/family4.jpeg`,
        ],
        opening_hours: {
            Sat: {
                start: "10:00 AM",
                end: "12:00 AM"
            },
            Mon: {
                start: "10:00 AM",
                end: "12:00 AM"
            },
            Tue: {
                start: "10:00 AM",
                end: "12:00 AM"
            },
            Wed: {
                start: "10:00 AM",
                end: "12:00 AM"
            },
            Thu: {
                start: "10:00 AM",
                end: "12:00 AM"
            },
            Fri: {
                start: "10:00 AM",
                end: "12:00 AM"
            },
            Sun: {
                start: "10:00 AM",
                end: "12:00 AM"
            },
        }
    },

    {
        title: "Majidi Mall",
        image: `${process.env.PUBLIC_URL}/majidiLogo.jpeg`,
        tag: "malls",
        description: "Majidi Mall Shopping and Entertaining Centre, one of the largest shopping and entertainment Centre’s in Iraq. Opened doors to visitors on 23 November 2009. Visitors have the opportunity to shop in ana acclimatized, hygienic and safe environment combining daylight and the spaciousness of outside streets thanks to its architectural design,which pushes new boundaries in the understanding of the shopping Centre. Majidi Mall, as Iraq’s most entertaining shopping Centre of Iraq,Offer its visitors an optimal shopping experience with 67 shops over 3 floors with car parking for 2000 Cars.””The centre is home to 6D Cinema, delicious food and limitless entertainment in Game Land,all in one place under the roof of the Majidi Mall shopping centre,which presents a new way of living.",
        icon: `${process.env.PUBLIC_URL}/majidlogo.jpeg`,
        address: 'Malik Mahmood st. Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/majidi1.jpeg`,
            `${process.env.PUBLIC_URL}/majidi2.jpeg`,
            `${process.env.PUBLIC_URL}/majidi3.jpeg`,

        ],
        opening_hours: {
            Sat: {
                start: "10:00 AM",
                end: "11:00 PM"
            },
            Mon: {
                start: "10:00 AM",
                end: "11:00 PM"
            },
            Tue: {
                start: "10:00 AM",
                end: "11:00 PM"
            },
            Wed: {
                start: "10:00 AM",
                end: "11:00 PM"
            },
            Thu: {
                start: "10:00 AM",
                end: "11:00 PM"
            },
            Fri: {
                start: "10:00 AM",
                end: "11:00 PM"
            },
            Sun: {
                start: "10:00 AM",
                end: "11:00 PM"
            },
        }
    },

    {
        title: "Rand Gallery",
        image: `${process.env.PUBLIC_URL}/rand3.jpeg`,
        tag: "malls",
        description: "Rand Gallery is the first mall in Sulaymaniyah which is build on 2800 Sqm and is located at Salim Street opposite of Khasraw Khal Brigde. Rand Gallery contains 3 floor parking, Supermarket, 2 floors shops and the second floor are restaurants & play area",
        icon: `${process.env.PUBLIC_URL}/randLogo.jpeg`,
        address: 'Khasraw Khal Bridge, Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/rand1.jpeg`,
            `${process.env.PUBLIC_URL}/rand2.jpeg`,
            `${process.env.PUBLIC_URL}/rand3.jpeg`,
            `${process.env.PUBLIC_URL}/rand4.jpeg`,

        ],
        opening_hours: {
            Sat: {
                start: "10:30 AM",
                end: "10:00 PM"
            },
            Mon: {
                start: "10:30 AM",
                end: "10:00 PM"
            },
            Tue: {
                start: "10:30 AM",
                end: "10:00 PM"
            },
            Wed: {
                start: "10:30 AM",
                end: "10:00 PM"
            },
            Thu: {
                start: "10:30 AM",
                end: "10:00 PM"
            },
            Fri: {
                start: "10:30 AM",
                end: "10:00 PM"
            },
            Sun: {
                start: "10:30 AM",
                end: "10:00 PM"
            },
        }
    },

    {
        title: "Bareo Adventure",
        image: `${process.env.PUBLIC_URL}/bareo1.jpeg`,
        tag: "outdoor",
        description: "Whether you’re someone who admires the towering beauty of mountains from afar or up close, there’s no denying how fascinating they are.",
        icon: `${process.env.PUBLIC_URL}/bareologo.jpeg`,
        address: 'Malik Mahmood st. Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/bareo1.jpeg`,
            `${process.env.PUBLIC_URL}/bareo2.jpeg`,
            `${process.env.PUBLIC_URL}/bareo3.jpeg`,
            `${process.env.PUBLIC_URL}/bareo4.jpeg`,
        ],
        opening_hours: {
            Sat: {
                start: "11:00 AM",
                end: "5:00 PM"
            },
            Mon: {
                start: "11:00 AM",
                end: "5:00 PM"
            },
            Tue: {
                start: "11:00 AM",
                end: "5:00 PM"
            },
            Wed: {
                start: "11:00 AM",
                end: "5:00 PM"
            },
            Thu: {
                start: "11:00 AM",
                end: "5:00 PM"
            },
            Fri: {
                start: "11:00 AM",
                end: "5:00 PM"
            },
            Sun: {
                start: "11:00 AM",
                end: "5:00 PM"
            },
        }
    },

    {
        title: "Ba Broin",
        image: `${process.env.PUBLIC_URL}/babroin2.jpeg`,
        tag: "outdoor",
        description: "پێکەوە بۆ گەشتێک با بڕۆین",
        icon: `${process.env.PUBLIC_URL}/babroinlogo.jpeg`,
        address: 'Ashti Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/babroin1.jpeg`,
            `${process.env.PUBLIC_URL}/babroin2.jpeg`,
            `${process.env.PUBLIC_URL}/babroin3.jpeg`,
            `${process.env.PUBLIC_URL}/babroin4.jpeg`,

        ],
        opening_hours: {
            Sat: {
                start: "11:00 AM",
                end: "5:00 PM"
            },
            Mon: {
                start: "11:00 AM",
                end: "5:00 PM"
            },
            Tue: {
                start: "11:00 AM",
                end: "5:00 PM"
            },
            Wed: {
                start: "11:00 AM",
                end: "5:00 PM"
            },
            Thu: {
                start: "11:00 AM",
                end: "5:00 PM"
            },
            Fri: {
                start: "11:00 AM",
                end: "5:00 PM"
            },
            Sun: {
                start: "11:00 AM",
                end: "5:00 PM"
            },
        }
    },

    {
        title: "Kurdistan Outdoor",
        image: `${process.env.PUBLIC_URL}/outdoor3.jpeg`,
        tag: "outdoor",
        description: "Outdoor Activities and Adventures...",
        icon: `${process.env.PUBLIC_URL}/outdoorlogo.jpeg`,
        address: 'Baxtyary st. Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/outdoor1.jpeg`,
            `${process.env.PUBLIC_URL}/outdoor2.jpeg`,
            `${process.env.PUBLIC_URL}/outdoor3.jpeg`,
            `${process.env.PUBLIC_URL}/outdoor4.jpeg`,
        ],
        opening_hours: {
            Sat: {
                start: "12:00 PM",
                end: "3:00 PM"
            },
            Mon: {
                start: "12:00 PM",
                end: "3:00 PM"
            },
            Tue: {
                start: "12:00 PM",
                end: "3:00 PM"
            },
            Wed: {
                start: "12:00 PM",
                end: "3:00 PM"
            },
            Thu: {
                start: "12:00 PM",
                end: "3:00 PM"
            },
            Fri: {
                start: "12:00 PM",
                end: "3:00 PM"
            },
            Sun: {
                start: "12:00 PM",
                end: "3:00 PM"
            },
        }
    },

    {
        title: "Chavy Land",
        image: `${process.env.PUBLIC_URL}/chavy2.jpeg`,
        tag: "park",
        description: "The Biggest amusement park in the middle east.",
        icon: `${process.env.PUBLIC_URL}/chavylogo.jpeg`,
        address: 'Malik Mahmood st. Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/chavy1.jpeg`,
            `${process.env.PUBLIC_URL}/chavy2.jpeg`,
            `${process.env.PUBLIC_URL}/chavy3.jpeg`,
            `${process.env.PUBLIC_URL}/chavy4.jpeg`,
        ],
        opening_hours: {
            Sat: {
                start: "3:00 PM",
                end: "12:00 AM"
            },
            Mon: {
                start: "3:00 PM",
                end: "12:00 AM"
            },
            Tue: {
                start: "3:00 PM",
                end: "12:00 AM"
            },
            Wed: {
                start: "3:00 PM",
                end: "12:00 AM"
            },
            Thu: {
                start: "3:00 PM",
                end: "12:00 AM"
            },
            Fri: {
                start: "3:00 PM",
                end: "12:00 AM"
            },
            Sun: {
                start: "3:00 PM",
                end: "12:00 AM"
            },
        }
    },

    {
        title: "Hawary Shar",
        image: `${process.env.PUBLIC_URL}/shar3.jpeg`,
        tag: "park",
        description: "A beautiful large green park over an area of more than 1000 acre. Close to Slemani city. Family friendly area. Good to have a walk around.",
        icon: `${process.env.PUBLIC_URL}/shar1.jpeg`,
        address: 'Malik Mahmood st. Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/shar1.jpeg`,
            `${process.env.PUBLIC_URL}/shar2.jpeg`,
            `${process.env.PUBLIC_URL}/shar3.jpeg`,
        ],
        opening_hours: {
            Sat: {
                start: "Always Open",
                end: ""
            },
            Mon: {
                start: "Always Open",
                end: ""
            },
            Tue: {
                start: "Always Open",
                end: ""
            },
            Wed: {
                start: "Always Open",
                end: ""
            },
            Thu: {
                start: "Always Open",
                end: ""
            },
            Fri: {
                start: "Always Open",
                end: ""
            },
            Sun: {
                start: "Always Open",
                end: ""
            },
        }
    },
    {
        title: "Parki Azadi",
        image: `${process.env.PUBLIC_URL}/azadi2.jpeg`,
        tag: "park",
        description: " The site of what is now the Azadi Park used to be a military base during the Ba’ath regime, but after the uprising in 1991, it was converted into a tourism attraction. The park contains several beautiful gardens, a restaurant, a small lake as well as sports areas and playgrounds for children. It is a popular spot for relaxation and enjoyment for local residents.",
        icon: `${process.env.PUBLIC_URL}/azadi1.jpeg`,
        address: 'Malik Mahmood st. Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/azadi1.jpeg`,
            `${process.env.PUBLIC_URL}/azadi2.jpeg`,
            `${process.env.PUBLIC_URL}/azadi3.jpeg`,
            `${process.env.PUBLIC_URL}/azadi4.jpeg`,

        ],
        opening_hours: {
            Sat: {
                start: "Always Open",
                end: ""
            },
            Mon: {
                start: "Always Open",
                end: ""
            },
            Tue: {
                start: "Always Open",
                end: ""
            },
            Wed: {
                start: "Always Open",
                end: ""
            },
            Thu: {
                start: "Always Open",
                end: ""
            },
            Fri: {
                start: "Always Open",
                end: ""
            },
            Sun: {
                start: "Always Open",
                end: ""
            },
        }
    },

    {
        title: "City Cinema",
        image: `${process.env.PUBLIC_URL}/cinema1.jpeg`,
        tag: "cinema",
        description: "The First Cinema Complex in the region",
        icon: `${process.env.PUBLIC_URL}/cinemalogo.jpeg`,
        address: 'Sarchnar, Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [

            `${process.env.PUBLIC_URL}/cinema1.jpeg`,
            `${process.env.PUBLIC_URL}/cinema2.jpeg`,
            `${process.env.PUBLIC_URL}/cinema3.jpeg`,
            `${process.env.PUBLIC_URL}/cinema4.jpeg`,
        ],
        opening_hours: {
            Sat: {
                start: "12:00 PM",
                end: "12:00 AM"
            },
            Mon: {
                start: "12:00 PM",
                end: "12:00 AM"
            },
            Tue: {
                start: "12:00 PM",
                end: "12:00 AM"
            },
            Wed: {
                start: "12:00 PM",
                end: "12:00 AM"
            },
            Thu: {
                start: "12:00 PM",
                end: "12:00 AM"
            },
            Fri: {
                start: "12:00 PM",
                end: "12:00 AM"
            },
            Sun: {
                start: "12:00 PM",
                end: "12:00 AM"
            },
        }
    },
]


export const ratedFeatures: Feature[] = [
    features[1],
    features[5],
    features[8]
]



export const addvertisments: { name: string; url: string; link: string }[] = [
    {
        name: "Website add",
        url: `${process.env.PUBLIC_URL}/addvertisment.png`,
        link: "https://www.google.se/"
    },
    {
        name: "yallashot-1",
        url: `${process.env.PUBLIC_URL}/yallashot1.jpg`,
        link: "https://www.yahoo.com"
    },
    {
        name: "yallashot-2",
        url: `${process.env.PUBLIC_URL}/yallashot2.jpg`,
        link: "https://www.facebook.com"
    }
]