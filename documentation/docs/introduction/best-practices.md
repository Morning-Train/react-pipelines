---
title: Best practices
---


### Avoid rerenders in components implementing a Pipeline. 
A component implementing a Pipeline should only rarely rerender, or the pipes will be reset.
This would only rarely create issues - but it should be avoided as it might cause unpredictable side effect. 


### Always pass along the payload
When implementing a pipe - it is important to always pass along the payload
to make it available to any ensuing pipes. 

### Use consistent naming
A clear and consistent naming for pipes and pipeline components should be followed.
This will help make reading the JSX easier.

We recommend the following naming conventions:

- All pipes should be suffixed with `OnPipe` and should be written in camel case. For instance: `CallbackOnPipe`.
  It will make it clear to the reader that what the component does, is to run its logic during pipeline execution.
  
- Pipelines should be suffixed with `Pipeline`. This is especially the case when making custom reusable pipelines.
  It is not uncommon to extract certain pipelines or logic flows into their own components 
  for easier reuse across projects or simply to keep the business logic away from *view* components.
  Examples: 
  
     - `LoginPipeline` <-- Perform this logic on login (Fetch additional ENV data, redirect)
     - `DeleteOnClickPipeline` <-- Perform this action to perform delete action when a provided child is clicked. 
       It would likely use [TriggerPipelineOnClick](../triggers/trigger-pipeline-on-click) and then perform these actions: Wait for double confirmation in modal, 
       execute Ajax delete request, notify the user about success/error 
       and finally redirect the user or refresh the view to make the page reflect the new deleted state of the item
    - View the page about [Examples](./examples) for similar use-cases.
    