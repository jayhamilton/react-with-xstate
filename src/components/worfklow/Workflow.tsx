
import { myMachine } from '../machine/m.tsx';
import { useMachine } from '@xstate/react';
import styles from './Workflow.module.css';
import stateDiagram from '../../assets/state-diagram.png'; // Import the image


function Workflow() {

    const [state, send] = useMachine(myMachine);
    const renderButton = (condition: boolean, actionType: string, label: string) => {
        return condition && <button onClick={() => send({ type: actionType })}>{label}</button>;
    };

    return (
        <div className={styles.center}>
            <h1>Workflow Example</h1>
            <h3>State: {state.value.toString()}</h3>
            <br />
            {renderButton(state.value === 'draft', 'SUBMITFORREVIEW', 'SUBMIT FOR REVIEW')}
            {renderButton(state.value === 'published', 'UNPUBLISH', 'UNPUBLISH')}
            {renderButton(state.value === 'inreview', 'PUBLISH', 'PUBLISH')}&nbsp;
            {renderButton(state.value === 'inreview', 'REJECT', 'REJECT')}
            {renderButton(state.value === 'rejected', 'RESUBMIT', 'RE-SUBMIT')}
            <br/>
            <img src={stateDiagram} alt="Workflow" />
        </div>
    );

}

export default Workflow;