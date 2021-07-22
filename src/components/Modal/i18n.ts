import { LanguageList } from "./../../i18next/config";
import i18next from "i18next";

i18next.addResources(LanguageList.SPANISH, "Modal", {
    Ok: "Aceptar",
    Close: "Cerrar"
});

i18next.addResources(LanguageList.ENGLISH, "Menu", {
    Ok: "Ok",
    Close: "Close"
});
