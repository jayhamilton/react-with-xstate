import styles from './Card.module.css';

export interface CardProperties{
    version: string;
}

function Card (props: CardProperties){

    return(

        <div className = {styles.card}>
            <h1>X-State Demo</h1>
            <a href="https://xstate.js.org">X-State</a>
        </div>
    );
}
export default Card