
type ShopType = 'fastfood'
    | 'shopping'
    | 'malls'
    | 'outdoor'
    | 'restaurant'
    | 'park'
    | 'cinema'
    | 'event';

interface Feature {
    tag: ShopType;
    title: string;
    image: string;
    description: string;
    icon: string;
    location: {
        lat: number;
        long: number;
    }
}

export const restaurants: Feature[] = [
    {
        title: 'Latona Cafe & Bistro',
        image: `${process.env.PUBLIC_URL}/res1.jpg`,
        tag: "fastfood",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        icon: `${process.env.PUBLIC_URL}/feature-logo.jpg`,
        location: {
            lat: 35.557045,
            long: 45.435944
        }
    },
    {
        title: 'Latona Cafe & Bistro',
        image: `${process.env.PUBLIC_URL}/res2.jpg`,
        tag: "restaurant",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        icon: `${process.env.PUBLIC_URL}/feature-logo.jpg`,
        location: {
            lat: 35.557045,
            long: 45.435944
        }

    },
    {
        title: 'Latona Cafe & Bistro',
        image: `${process.env.PUBLIC_URL}/res3.jpg`,
        tag: "cinema",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        icon: `${process.env.PUBLIC_URL}/feature-logo.jpg`,
        location: {
            lat: 35.557045,
            long: 45.435944
        }

    },
    {
        title: 'Latona Cafe & Bistro',
        image: `${process.env.PUBLIC_URL}/res4.jpg`,
        tag: "cinema",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        icon: `${process.env.PUBLIC_URL}/feature-logo.jpg`,
        location: {
            lat: 35.557045,
            long: 45.435944
        }

    },
    {
        title: 'Latona Cafe & Bistro',
        image: `${process.env.PUBLIC_URL}/res5.jpg`,
        tag: "cinema",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        icon: `${process.env.PUBLIC_URL}/feature-logo.jpg`,
        location: {
            lat: 35.557045,
            long: 45.435944
        }

    },
    {
        title: 'B3B Suli & Majdi mall',
        image: `${process.env.PUBLIC_URL}/res6.jpg`,
        tag: "cinema",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        icon: `${process.env.PUBLIC_URL}/feature-logo.jpg`,
        location: {
            lat: 35.557045,
            long: 45.435944
        }

    },
    {
        title: 'B2B Suli & Majdi mall',
        image: `${process.env.PUBLIC_URL}/res7.jpg`,
        tag: "cinema",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        icon: `${process.env.PUBLIC_URL}/feature-logo.jpg`,
        location: {
            lat: 35.557045,
            long: 45.435944
        }

    },
    {
        title: 'B2B Suli & Majdi mall',
        image: `${process.env.PUBLIC_URL}/res8.jpg`,
        tag: "cinema",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        icon: `${process.env.PUBLIC_URL}/feature-logo.jpg`,
        location: {
            lat: 35.557045,
            long: 45.435944
        }

    },
]