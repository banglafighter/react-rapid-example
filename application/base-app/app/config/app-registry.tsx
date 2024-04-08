import AppConfig from "./app-config";
import URLMapping from "./url-mapping";
import AppContextProps from "./app-context-props";
import {RapidAppConfig, RapidAppContextProps, RapidAppRegistry, RapidURLMapping} from "react-rapid-app";


export default class AppRegistry extends RapidAppRegistry {


    register(urlMapping: RapidURLMapping, appConfig: RapidAppConfig): void {
    }

    initContextProps(): RapidAppContextProps | undefined {
        return new AppContextProps();
    }

    initAppConfig(): RapidAppConfig {
        return new AppConfig();
    }

    initURLMapping(): RapidURLMapping {
        return new URLMapping()
    }

}