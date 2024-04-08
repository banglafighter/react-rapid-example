import {RapidAppConfig, RapidLayoutInfoData, RapidURLMapping, React} from "react-rapid-app";


const IndexView = React.lazy(() => import('./index-view'));

const UI_BASE_URL = "/"

export default class ExampleUrlMapping {


    public static readonly API = {};


    public static readonly ui = {
        index: UI_BASE_URL,
    };

    private static privateUrlMappings(privateLayoutInfo: RapidLayoutInfoData): RapidLayoutInfoData {
        privateLayoutInfo.addPageInstance(this.ui.index, IndexView);
        return privateLayoutInfo;
    }

    private static publicUrlMappings(publicLayoutInfo: RapidLayoutInfoData): RapidLayoutInfoData {
        return publicLayoutInfo;
    }

    public static register(urlMapping: RapidURLMapping, appConfig: RapidAppConfig): void {
        this.privateUrlMappings(urlMapping.privateLayout)
        this.publicUrlMappings(urlMapping.publicLayout)
    }
}