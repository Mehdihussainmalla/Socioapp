import AsyncStorage from "@react-native-async-storage/async-storage";
import LocalizedStrings from "react-native-localization";
import en from "./en";
import ur from "./ur";
let strings = new LocalizedStrings({
    en: en,
    ur: ur,
    
})
export const changeLanguage = async (languagekey) => {
    await AsyncStorage.setItem("language", languagekey)
    strings.setLanguage(languagekey)    
}

export default strings;