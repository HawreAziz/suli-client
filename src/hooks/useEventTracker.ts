import ReactGA from 'react-ga';



export const useAnalyticsEventTracker = (category: string = "Addvertisments") => {
    const eventTracker = (action: string = "test action", label: string = "test label") => {
        ReactGA.event({ category, action, label });
    }
    return eventTracker;
}