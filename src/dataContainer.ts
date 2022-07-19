import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ParkIcon from '@mui/icons-material/Park';
import MovieIcon from '@mui/icons-material/Movie';
import EventIcon from '@mui/icons-material/Event';
import { Feature, OpeningHours } from './data';
import { deflateSync } from 'zlib';


type ShopType = 'fastfood'
    | 'shopping'
    | 'malls'
    | 'outdoor'
    | 'restaurant'
    | 'park'
    | 'cinema'
    | 'event';




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


export const getCurrentWeekDay = (feature: Feature) => {
    const weekKey = new Date().toDateString().split(" ")[0];
    return feature.opening_hours[weekKey as keyof OpeningHours];
}

export const getNextDay = (date: Date): string => {
    date.setDate(date.getDate() + 1);
    return date.toDateString().split(" ")[0];
}