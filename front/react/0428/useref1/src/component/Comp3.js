import {useRef} from "react";
import flower from "../Assets/video1.mp4"

function Comp3(){

    const videoRef = useRef();
    const playVideo = () => {
        videoRef.current.play();
        console.log(videoRef.current)
    }

    const pauseVideo = () => {
        videoRef.current.pause();
        videoRef.current.remove();
    }

    return(
        <div>
            <div>
                <button onClick={playVideo}>Play</button>
                <button onClick={pauseVideo}>Pause</button>
            </div>
            <div>
            <video ref={videoRef} width="400" height="272" controls>
                <source type="video/mp4" src={flower}></source>
            </video>
            </div>
        </div>
    )
}
export default Comp3;