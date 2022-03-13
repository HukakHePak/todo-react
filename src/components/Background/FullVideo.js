export function BackgroundVideo(props) {
    return ( 
        <video className={ props.className +" background-video" } width="100%" height="100%" autoPlay loop muted>
            <source src={ props.src } type="video/mp4" />
        </video> );
}