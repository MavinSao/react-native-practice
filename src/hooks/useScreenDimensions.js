import {useState,useEffect} from 'react'
import { Dimensions } from "react-native";

export const useScreenDimensions = () => {
    const [screenData, setScreenData] = useState(Dimensions.get('screen'))
    //trigger when react render
    useEffect(() => {
        const onChangeDevice = (result) => {
            console.log(`result ${result.screen}`);
            setScreenData(result.screen)
        };
        Dimensions.addEventListener('change', onChangeDevice)

        return ()=> Dimensions.removeEventListener('change', onChangeDevice)

    })
    return screenData
};

