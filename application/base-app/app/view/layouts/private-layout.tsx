import {RapidLayoutRenderer, RapidReactComponent, React} from 'react-rapid-app';


interface Props {
    route?: any;
    appConfig?: any;
    component?: any;
    additionalData?: any;
}

export default class PrivateLayout extends RapidReactComponent<Props, any> {

    render() {
        const {component, route, appConfig, additionalData} = this.props;
        return (
            <>
                <RapidLayoutRenderer
                    route={route}
                    appConfig={appConfig}
                    component={component}
                    additionalData={additionalData}/>
            </>
        );
    }
}