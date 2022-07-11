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

interface Feature {
    tag: ShopType;
    title: string;
    image: string;
}

export const features: Feature[] = [
    {
        title: 'Maldiverna',
        image: `${process.env.PUBLIC_URL}/chineesetour.jpg`,
        tag: "fastfood"
    },
    {
        title: 'Chinees wall & Mountain',
        image: `${process.env.PUBLIC_URL}/maldiverna.jpg`,
        tag: "restaurant"
    },
    {
        title: 'Tajmahal & Indian template',
        image: `${process.env.PUBLIC_URL}/tajmahal.jpg`,
        tag: "cinema"
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