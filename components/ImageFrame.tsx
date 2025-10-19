import { CSSProperties, HTMLAttributes, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Crew.module.css'

interface ImageFrameProps {
    src: string;
    frameSize: string;
    frameStyle: string;
    gridColStart: number;
    gridColEnd: number;
    gridRowStart: number; 
    gridRowEnd: number;
}

export const ImageFrame = (props: ImageFrameProps) => {
    
    var frameImage: string = "";
    switch (props.frameStyle) {
        case "frame1": frameImage = 'url(/crew/frames/frame1.png) 220 stretch';
            break;
        case "frame2": frameImage = 'url(/crew/frames/frame2.png) 190 stretch';
            break;
        case "frame3": frameImage = 'url(/crew/frames/frame3.png) 105 stretch';
            break;
        case "frame4": frameImage = 'url(/crew/frames/frame4.png) 110 stretch';
            break;
        case "frame5": frameImage = 'url(/crew/frames/frame5.png) 350 stretch';
            break;
        case "frame6": frameImage = 'url(/crew/frames/frame6.png) 240 stretch';
            break;
        case "frame7": frameImage = 'url(/crew/frames/frame7.png) 160 stretch';
            break;
    }

    var frameSize: string = props.frameSize + " solid transparent";
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        let mql = window.matchMedia('(max-width: 480px)');
        setMobile(mql.matches);
    }, []);
    
    if (mobile) {
        return <div className={styles.gridItemFrame} 
        style={{border: frameSize,
            borderImage: frameImage,
            width: '100%',
            height: '100%'}}>
            <Image src={props.src} alt="Crew member" fill style={{objectFit: 'cover'}}/>
        </div>
    } else {
        return <div className={styles.gridItemFrame} 
        style={{border: frameSize,
            borderImage: frameImage,
            gridColumnStart: props.gridColStart, 
            gridColumnEnd: props.gridColEnd, 
            gridRowStart: props.gridRowStart, 
            gridRowEnd: props.gridRowEnd,
            width: '100%',
            height: '100%'}}>
            <Image src={props.src} alt="Crew member" fill style={{objectFit: 'cover'}}/>
        </div>
    }

    
};