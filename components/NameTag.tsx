import styles from '../styles/Crew.module.css'

interface NameTagProps {
    name: string;
    fieldOfStudy: string;
    semesterNmbr: number|string;
    fontSizeTop: string;
    fontSizeBottom: string;
    gridColStart: number;
    gridColEnd: number;
    gridRowStart: number; 
    gridRowEnd: number;
}

export const NameTag = (props: NameTagProps) => {
    var topText = props.name;
    var bottomText = props.semesterNmbr + ". Semester " + props.fieldOfStudy;
    return <div className={styles.nameTag} style={{
        gridColumnStart: props.gridColStart, 
        gridColumnEnd: props.gridColEnd, 
        gridRowStart: props.gridRowStart, 
        gridRowEnd: props.gridRowEnd,
        }} title={topText + " : " + bottomText}>
            <span>
                <p style={{fontSize: props.fontSizeTop, margin: 0}}>{topText}</p>
                <p style={{fontSize: props.fontSizeBottom, margin: 0}}>{bottomText}</p>
            </span>
    </div>
}