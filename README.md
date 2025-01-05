# React + TypeScript + Vite + XState

This template provides a minimal setup to get React working in Vite with HMR, some ESLint rules, and state management using XState.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Using XState with React

This project includes an example of using XState for state management in a React application. XState is a library for creating, interpreting, and executing finite state machines and statecharts, which can be used to manage complex state logic in your application.

### Example Workflow Component

The `Workflow` component demonstrates how to use XState with React. It includes a state machine that manages different states such as `draft`, `inreview`, `published`, and `rejected`.

```tsx
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
```

