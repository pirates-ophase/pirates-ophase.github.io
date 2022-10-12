import { getFontOverrideCss } from 'next/dist/server/font-utils';
import { CSSProperties, HTMLAttributes } from 'react';
import styles from '../styles/Crew.module.css'

interface PersonFrameProps {
    src: string;
    frameSize: string;
    frameStyle: string;
    gridColStart: number;
    gridColEnd: number;
    gridRowStart: number; 
    gridRowEnd: number;
}

export const PersonFrame = (props: PersonFrameProps) => {
    
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

    var frameSize: string = "";
    switch (props.frameSize) {
        case "small": frameSize = '50px solid transparent';
            break;
        case "medium": frameSize = '100px solid transparent';
            break;
        case "large": frameSize = '150px solid transparent';
    }

    return <div className={styles.gridItemFrame} 
    style={{border: frameSize,
            borderImage: frameImage,
            gridColumnStart: props.gridColStart, 
            gridColumnEnd: props.gridColEnd, 
            gridRowStart: props.gridRowStart, 
            gridRowEnd: props.gridRowEnd,
            width: '100%',
            height: '100%'}}>
        <img src={props.src} style={{width: '100%', height: '100%'}}/>
    </div>
}










































export const PersonCardLargeFrame = (props: {src: string, name: string, frameStyle: string, style?: CSSProperties | undefined}) => {
    return <div className={styles.gridItemLargeFrame} style={props.style}>
        <img src={props.src} style={{width: '100%', height: '100%'}}/>
    </div>
};


export const PersonCardMediumFrame = (props: {src: string, name: string, frameStyle: string, style?: CSSProperties | undefined}) => {
    return <div className={styles.gridItemMediumFrame} style={props.style}>
        <img src={props.src} style={{width: '100%', height: '100%'}}/>
    </div>
};



export const PersonCardSmallFrame = (props: {src: string, name: string, frameStyle: string, style?: CSSProperties | undefined}) => {
    return <div className={styles.gridItemSmallFrame} style={props.style}>
        <img src={props.src} style={{width: '100%', height: '100%'}}/>
    </div>
};