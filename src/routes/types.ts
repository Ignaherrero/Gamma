import { PATHS } from "./paths";

interface Route {
    path?: PATHS;
    component?: React.LazyExoticComponent<() => JSX.Element>;
    name?: string;
    exact?: boolean;
    // TODO: To implement private routes in the future
    isPrivate?: boolean;
    redirectTo?: () => void;
}

export default Route;
