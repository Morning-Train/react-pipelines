module.exports = {
  someSidebar: {
    Introduction: [
      'introduction/about',
      'introduction/installation',
      'introduction/best-practices',
      'introduction/examples',
    ],
    "Base pipelines": [
      'base_pipelines/pipeline',
      'base_pipelines/async-pipeline',
      'base_pipelines/nested-pipeline',
      'base_pipelines/nested-async-pipeline',
    ],
    Pipes: [
      'pipes/callback-on-pipe',
    ],
    Triggers: [
      'triggers/trigger-pipeline-on-click',
      'triggers/trigger-pipeline-on-callback',
    ],
    Conditionals: [
      'conditionals/when-is-piping',
      'conditionals/when-is-not-piping',
    ],
    Hooks: [
      'hooks/use-will-pipe',
      'hooks/use-is-piping',
      'hooks/use-pipeline',
    ],
    Cookbook: [
      'cookbook/basic-pipeline',
      'cookbook/basic-async-pipeline',
      'cookbook/on-click-pipeline',
      'cookbook/custom-pipes',
      'cookbook/render-when-piping',
    ],
  },
};
