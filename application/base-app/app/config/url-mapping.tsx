import {RapidLayoutInfoData, RapidURLMapping} from "react-rapid-app";


export default class URLMapping extends RapidURLMapping {

    public getLayoutsAndPages(): Array<RapidLayoutInfoData> {
        let pageWithLayout: Array<RapidLayoutInfoData> = [];
        // this.publicLayout.layout = PublicLayout
        // this.privateLayout.layout = PrivateLayout
        // this.authLayout.layout = AuthLayout

        pageWithLayout.push(this.publicLayout);
        pageWithLayout.push(this.privateLayout);
        pageWithLayout.push(this.authLayout);
        return pageWithLayout
    }

}