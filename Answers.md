# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is an engine that creates a virtual DOM to interact with the real DOM for us. This handles large-scale web applications more efficiently. It detects when state/data changes in the app, and the virtual DOM tells the real DOM to updates the specific nodes that have changed. This conserves browser resources by being more surgical about where updates occur. From a development standpoint, the modularity of components creates more DRY code, which means fewer lines of code to write and maintain.

1. What does it mean to think in react?

Thinking in react uses these steps:
- Break the UI into a component hierarcy (draw boxes)
- Build a static version, get that data on the page
- Identify the minimal representation of UI state
- Identify where state should live
- Add inverse data flow


1. Describe state.

State is data that may change, that you want to be able to track as a user interacts with your app and possible render changes to the DOM based on this data changing.

1. Describe props.

Props (properties) is information held in state that gets passed from one component to another component.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that affects something outside the scope of the function being called. React uses an effect hook to determine when it needs to run a side effect. Effect hooks can be synced to specific data so that they only fire when necessary.