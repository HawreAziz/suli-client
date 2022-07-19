import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { features, ratedFeatures, addvertisments } from '../../data';
import { Feature } from '../../data';


interface FeatureState {
    features: Feature[];
    ratedFeatures: Feature[];
    tag: string;
    addvertisedImage: string;
}


const initialState: FeatureState = {
    features: [],
    tag: "",
    ratedFeatures: [],
    addvertisedImage: '',
}


const featureSlice = createSlice({
    name: "Features",
    initialState,
    reducers: {
        getFeatures(state: FeatureState) {
            state.features = features;
        },

        getFeaturesByName(state: FeatureState, { payload }: PayloadAction<{ name: string }>) {
            const searchText = payload.name;
            state.features = features.filter(feature => {
                return feature.tag.toLocaleLowerCase() === searchText.toLowerCase() ||
                    feature.title.toLowerCase().includes(searchText.toLowerCase()) ||
                    feature.address.toLowerCase().includes(searchText.toLowerCase());
            });
        },

        getFeatureByTag(state: FeatureState, { payload }: PayloadAction<string>) {
            state.features = features.filter(feature => {
                return feature.tag.toLocaleLowerCase() === payload.toLowerCase();
            });
            state.tag = payload;
        },

        getRatedFeatures(state: FeatureState) {
            state.ratedFeatures = ratedFeatures;
        },

        getAdvertisment(state: FeatureState) {
            const randomIndex = Math.floor(Math.random() * addvertisments.length);
            state.addvertisedImage = addvertisments[randomIndex];
        }
    },
    extraReducers: {}

});



export const {
    getFeatures,
    getFeaturesByName,
    getFeatureByTag,
    getRatedFeatures,
    getAdvertisment } = featureSlice.actions;

export default featureSlice.reducer;