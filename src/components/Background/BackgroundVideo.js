import './BackroundVideo.css'

export function BackgroundVideo(props) {
    return ( 
        <video className="background-video" 
            width="100%" 
            height="100%"
            autoPlay 
            loop 
            muted
        >

            <source src={ props.value } type="video/mp4" />
        </video> );
}