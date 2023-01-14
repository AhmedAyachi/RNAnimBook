import {interpolate,useAnimatedScrollHandler,useAnimatedStyle,useSharedValue} from "react-native-reanimated";
import css from "./ScrollAnimView.style";


export const useScrollAnim=()=>{
    const scrollLeft=useSharedValue(0);
    const scrollhandler=useAnimatedScrollHandler(event=>{
        scrollLeft.value=event.contentOffset.x;
    });
    return {scrollhandler,scrollLeft};
}
