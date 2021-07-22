import { PRIMARY, SECONDARY } from "../../common/styles/constants";

export interface IModal {
    handleAccept?: () => void;
    show?: boolean;
    setShow?: React.Dispatch<React.SetStateAction<boolean>>;
    title?: string;
    message: string | number;
    variant?: typeof PRIMARY | typeof SECONDARY;
}
