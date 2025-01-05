
import { myMachine } from '../machine/m.tsx';
import { useMachine } from '@xstate/react';
import styles from './Workflow.module.css';

function Workflow() {

    const [state, send] = useMachine(myMachine);

    return (

        <div className = {styles.center}>

            <h1>Workflow</h1>
            
            <h3>State: {state.value.toString()}</h3>
            <br></br>
            {state.value == 'draft' && <button onClick={() => { send({ type: 'SUBMITFORREVIEW' })}}> SUBMIT FOR REVIEW</button>}
            &nbsp;
            {state.value == 'published' && <button onClick={() => { send({ type: 'UNPUBLISH' })}}> UNPUBLISH</button>}
            &nbsp;
            {state.value == 'inreview' && <button onClick={() => { send({ type: 'PUBLISH' })}}> PUBLISH</button>}
            &nbsp;
            {state.value == 'inreview' && <button onClick={() => { send({ type: 'REJECT' })}}> REJECT</button>}
            &nbsp;
            {state.value == 'rejected' && <button onClick={() => { send({ type: 'RESUBMIT' })}}> RE-SUBMIT</button>}

        </div>


    );

}

export default Workflow;