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
    [state: string]: WorkInterval;
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

export const restaurants: Feature[] = [
    {
        title: 'Latona Cafe & Bistro',
        image: `${process.env.PUBLIC_URL}/res1.jpg`,
        tag: "fastfood",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        icon: `${process.env.PUBLIC_URL}/feature-logo.jpg`,
        address: 'Sarchnar Road Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [
            `${process.env.PUBLIC_URL}/res9.jpg`,
            `${process.env.PUBLIC_URL}/res10.jpg`,
            `${process.env.PUBLIC_URL}/res11.jpg`,
            `${process.env.PUBLIC_URL}/res12.jpg`,
            `${process.env.PUBLIC_URL}/res13.jpg`,
        ],
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
        title: 'Latona Cafe & Bistro',
        image: `${process.env.PUBLIC_URL}/res2.jpg`,
        tag: "restaurant",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        icon: `${process.env.PUBLIC_URL}/feature-logo.jpg`,
        address: 'Sarchnar Road Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [],
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
        title: 'Latona Cafe & Bistro',
        image: `${process.env.PUBLIC_URL}/res3.jpg`,
        tag: "cinema",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        icon: `${process.env.PUBLIC_URL}/feature-logo.jpg`,
        address: 'Sarchnar Road Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [],
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
        title: 'Latona Cafe & Bistro',
        image: `${process.env.PUBLIC_URL}/res4.jpg`,
        tag: "cinema",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        icon: `${process.env.PUBLIC_URL}/feature-logo.jpg`,
        address: 'Sarchnar Road Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [],
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
        title: 'Latona Cafe & Bistro',
        image: `${process.env.PUBLIC_URL}/res5.jpg`,
        tag: "cinema",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        icon: `${process.env.PUBLIC_URL}/feature-logo.jpg`,
        address: 'Sarchnar Road Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [],
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
        title: 'B3B Suli & Majdi mall',
        image: `${process.env.PUBLIC_URL}/res6.jpg`,
        tag: "cinema",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        icon: `${process.env.PUBLIC_URL}/feature-logo.jpg`,
        address: 'Sarchnar Road Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [],
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
        title: 'B2B Suli & Majdi mall',
        image: `${process.env.PUBLIC_URL}/res7.jpg`,
        tag: "cinema",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        icon: `${process.env.PUBLIC_URL}/feature-logo.jpg`,
        address: 'Sarchnar Road Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [],
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
        title: 'B2B Suli & Majdi mall',
        image: `${process.env.PUBLIC_URL}/res8.jpg`,
        tag: "cinema",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        icon: `${process.env.PUBLIC_URL}/feature-logo.jpg`,
        address: 'Sarchnar Road Slemani Kurdistan',
        location: {
            lat: 35.557045,
            long: 45.435944
        },
        images: [],
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
]