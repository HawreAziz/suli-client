import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ParkIcon from '@mui/icons-material/Park';
import MovieIcon from '@mui/icons-material/Movie';
import EventIcon from '@mui/icons-material/Event';


type ShopType = 'fastfood'
    | 'shopping'
    | 'malls'
    | 'outdoor'
    | 'restaurant'
    | 'park'
    | 'cinema'
    | 'event';

export interface Feature {
    tag: ShopType;
    title: string;
    image: string;
    description: string;
}

export const features: Feature[] = [
    {
        title: 'Latona Cafe & Bistro',
        image: `${process.env.PUBLIC_URL}/res1.jpg`,
        tag: "fastfood",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: 'Latona Cafe & Bistro',
        image: `${process.env.PUBLIC_URL}/res2.jpg`,
        tag: "restaurant",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: 'Latona Cafe & Bistro',
        image: `${process.env.PUBLIC_URL}/res3.jpg`,
        tag: "cinema",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]


export const categories = [
    {
        tag: 'fastfood',
        categoryName: 'Fast Food',
        bgColor: '#c33747',
        icon: FastfoodIcon
    },
    {
        tag: 'shopping',
        categoryName: 'Shopping',
        bgColor: '#3752c3',
        icon: ShoppingBagIcon
    },
    {
        tag: 'malls',
        categoryName: 'Malls',
        bgColor: '#37c352',
        icon: BusinessCenterIcon
    },
    {
        tag: 'outdoor',
        categoryName: 'Outdoor',
        bgColor: '#6237c3',
        icon: CameraOutdoorIcon
    },
    {
        tag: 'restaurant',
        categoryName: 'Restaurant',
        bgColor: '#bec337',
        icon: RestaurantIcon
    },
    {
        tag: 'park',
        categoryName: 'Park',
        bgColor: '#be37c3',
        icon: ParkIcon
    },
    {
        tag: 'cinema',
        categoryName: 'Cinema',
        bgColor: '#37c3c3',
        icon: MovieIcon
    },
    {
        tag: 'event',
        categoryName: 'Event',
        bgColor: '#c35737',
        icon: EventIcon
    },
]



export const trimText = (text: string, len: number = 30): string => {
    return text.length > len ? `${text.substring(0, len)}...` : text;
}