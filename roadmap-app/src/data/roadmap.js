export const bundledRoadmapContent = {
  sprintSummary: {
    title: 'Vue 3 Two-Week Mastery Sprint',
    goal:
      'Go from beginner to project-ready in 14 days by building one small Vue app step by step with Vue 3, Vite, Router, Pinia, services, and tests.',
    outcome: [
      'Build a multi-page Vue app from scratch',
      'Understand Composition API and script setup',
      'Handle routes, forms, stores, API calls, and reusable components',
      'Finish with a demo-ready mini project'
    ]
  },
  roadmapDays: [
    {
      day: 1,
      title: 'Vue Setup And Mental Model',
      objective:
        'Understand what Vue is, how a Vue app starts, and how templates turn state into UI.',
      focus: ['Vue app boot flow', 'Single File Components', 'v-if, v-for, v-bind, v-model'],
      output: 'Counter, greeting card, and directive practice page',
      needToKnow: [
        'Vue mounts one root app and then renders components from reactive state.',
        'Templates are still HTML-like, but Vue directives make them dynamic.',
        'script setup keeps component logic smaller and easier to read.'
      ],
      studyTopics: [
        'Vue quick start and project structure',
        'Vite dev server and why it feels fast',
        'template, script setup, and style inside a Single File Component'
      ],
      researchPrompts: [
        'What problem does Vue solve compared to plain DOM scripting?',
        'When do you use v-bind or v-model instead of plain HTML attributes?'
      ],
      buildTasks: [
        'Create a counter with increment and reset',
        'Create a small greeting card with dynamic name input',
        'Toggle one info block and render one list with v-for'
      ],
      successChecks: [
        'You can explain how createApp leads to visible UI.',
        'You can identify where data, template markup, and behavior live.'
      ],
      comfortNote:
        'Do not try to memorize everything today. The win is making Vue feel understandable instead of magical.'
    },
    {
      day: 2,
      title: 'Reactivity Deeply',
      objective:
        'Learn how Vue reacts to state changes and when to use ref, reactive, computed, and watch.',
      focus: ['ref', 'reactive', 'computed', 'watch', 'event handling'],
      output: 'Task list with filtering and completed count',
      needToKnow: [
        'ref is usually best for primitive values and single objects you replace directly.',
        'computed is for derived state, not for side effects.',
        'watch is useful when a state change should trigger another action.'
      ],
      studyTopics: [
        'How ref unwraps in templates',
        'How computed caches derived values',
        'When watch is helpful and when it is overused'
      ],
      researchPrompts: [
        'Why is computed usually cleaner than manually recalculating values?',
        'What kinds of bugs happen when too much logic goes into watch?'
      ],
      buildTasks: [
        'Build a task list with add and remove actions',
        'Add filters for all, active, and completed items',
        'Show live counts for total and completed tasks'
      ],
      successChecks: [
        'You can explain ref vs reactive in your own words.',
        'You can point to one computed value and justify why it is derived state.'
      ],
      comfortNote:
        'Reactivity feels strange at first. That is normal. Spend more time observing state changes than rushing ahead.'
    },
    {
      day: 3,
      title: 'Components Properly',
      objective:
        'Break one feature into reusable pieces and learn how data moves between parent and child components.',
      focus: ['props', 'emits', 'slots', 'one-way data flow'],
      output: 'TaskInput, TaskList, and TaskStats components',
      needToKnow: [
        'Props move data down into child components.',
        'Emits send events back up when a child needs the parent to react.',
        'Slots let you reuse a layout while changing the content inside it.'
      ],
      studyTopics: [
        'Designing small component responsibilities',
        'props and emits with script setup',
        'Simple slot usage for reusable wrappers'
      ],
      researchPrompts: [
        'Why is mutating props directly considered a bad pattern?',
        'What makes a component API easy for another developer to reuse?'
      ],
      buildTasks: [
        'Split the task app into at least 3 components',
        'Pass task data through props instead of sharing everything globally',
        'Emit actions like add, toggle, or delete back to the parent'
      ],
      successChecks: [
        'You can describe each component in one sentence.',
        'You understand why the parent still owns the main task state.'
      ],
      comfortNote:
        'Today is where Vue starts to feel like real app development. Clean separation matters more than perfection.'
    },
    {
      day: 4,
      title: 'Forms And Validation',
      objective:
        'Build forms confidently and learn how to validate input before sending or storing it.',
      focus: ['v-model', 'form submit', 'input types', 'sync validation'],
      output: 'Product entry form with validation',
      needToKnow: [
        'v-model keeps the input and the component state in sync.',
        'Validation rules should come from clear state checks, not scattered conditions.',
        'A form should guide the user instead of only rejecting them.'
      ],
      studyTopics: [
        'Text, number, select, and checkbox inputs in Vue',
        'Form submit prevention and controlled state',
        'Showing helpful validation feedback'
      ],
      researchPrompts: [
        'What makes validation messages feel useful instead of annoying?',
        'When should you validate on input versus on submit?'
      ],
      buildTasks: [
        'Create a product form with name, price, stock, and category',
        'Block submission when required fields are missing',
        'Show validation messages near the affected fields'
      ],
      successChecks: [
        'You can trace what happens from typing to submit.',
        'You can explain where the form state lives and how it is validated.'
      ],
      comfortNote:
        'Forms often feel repetitive. That is okay. Repetition here builds confidence very quickly.'
    },
    {
      day: 5,
      title: 'Lifecycle And Async Data',
      objective:
        'Learn how a Vue page loads data and how to handle loading, error, empty, and success states calmly.',
      focus: ['onMounted', 'loading states', 'error states', 'empty states'],
      output: 'Data-driven page with loading and error handling',
      needToKnow: [
        'Async work needs visible UI states so the page never feels broken.',
        'onMounted is a common place to start a fetch in a page component.',
        'Fetching logic becomes easier to maintain when the states are explicit.'
      ],
      studyTopics: [
        'Lifecycle basics with onMounted',
        'Promise flow and async/await in Vue components',
        'UI states for data fetching'
      ],
      researchPrompts: [
        'What should a user see while waiting for data?',
        'Why is an empty state different from an error state?'
      ],
      buildTasks: [
        'Fetch a list of products or users from a mock or public source',
        'Show loading feedback while the request runs',
        'Display clear empty and error states when needed'
      ],
      successChecks: [
        'You can explain each visible state the page can be in.',
        'You know why async work should not be hidden inside the template.'
      ],
      comfortNote:
        'Async data is where many beginners start guessing. Slow down and name each UI state clearly.'
    },
    {
      day: 6,
      title: 'Vue Router',
      objective:
        'Turn your app into a multi-page experience and understand how route-based structure changes the codebase.',
      focus: ['route setup', 'page navigation', 'params', 'route guards concept'],
      output: 'Dashboard, Products, Sales, and Settings pages',
      needToKnow: [
        'Routes define which component should appear for a given URL or path.',
        'Pages should represent user goals, not random component buckets.',
        'Protected-route thinking matters even before real authentication exists.'
      ],
      studyTopics: [
        'Basic router setup in a Vue app',
        'Navigation links and router-view',
        'Route params, query strings, and simple guard logic'
      ],
      researchPrompts: [
        'When should data live in the route versus in a store?',
        'What does a protected route actually protect in an app?'
      ],
      buildTasks: [
        'Create dashboard, products, sales, and settings pages',
        'Add a navigation system between pages',
        'Sketch a simple protected-route concept for private pages'
      ],
      successChecks: [
        'You can explain how a route maps to a page.',
        'You can justify why a page belongs in routing and not just inside one long screen.'
      ],
      comfortNote:
        'Once routing works, the app starts to feel real. Today is a major confidence day.'
    },
    {
      day: 7,
      title: 'Week 1 Consolidation',
      objective:
        'Consolidate the first week into one mini app and confirm that the basics are starting to stick.',
      focus: ['Rebuild', 'clean up', 'repeat key ideas'],
      output: 'First Mini Karibu Frontend version',
      needToKnow: [
        'Review is not a step backward. It is where concepts start becoming yours.',
        'The goal today is fewer new ideas and more cleaner repetition.',
        'You should be able to describe the app structure without opening every file.'
      ],
      studyTopics: [
        'Revisit reactivity, components, forms, async, and router together',
        'Look for code duplication or awkward naming',
        'Practice explaining the app architecture out loud'
      ],
      researchPrompts: [
        'Which parts still feel shaky when you rebuild from memory?',
        'What would you simplify if another beginner had to read your app?'
      ],
      buildTasks: [
        'Build the first week version of the Mini Karibu app',
        'Include login UI, dashboard, products list, add product, and sales placeholder',
        'Refactor names and file structure where needed'
      ],
      successChecks: [
        'You can rebuild at least one page without a tutorial.',
        'You can explain how forms, routes, and state connect so far.'
      ],
      comfortNote:
        'If some parts still feel foggy, that is normal. The end of week one is for clarity, not speed.'
    },
    {
      day: 8,
      title: 'Pinia State Management',
      objective:
        'Learn what should become shared state and move app-wide data into Pinia without overusing it.',
      focus: ['state', 'getters', 'actions', 'local vs shared state'],
      output: 'auth, products, and sales or cart stores',
      needToKnow: [
        'Not every value belongs in a store. Many things should stay local to a component or page.',
        'Getters are for derived store state, and actions are for state-changing behavior.',
        'A store should make shared state easier to reason about, not harder.'
      ],
      studyTopics: [
        'Pinia store structure',
        'When to create multiple stores',
        'How store actions interact with components'
      ],
      researchPrompts: [
        'How do you know a piece of state is truly shared?',
        'What goes wrong when global state becomes the default for everything?'
      ],
      buildTasks: [
        'Create auth, products, and sales or cart stores',
        'Move shared state out of page components',
        'Use one getter and one action in a meaningful way'
      ],
      successChecks: [
        'You can explain why each value is local, route, or global state.',
        'You can trace a store action from click to updated UI.'
      ],
      comfortNote:
        'State management looks scary until you separate shared data from local UI behavior. Keep that distinction visible.'
    },
    {
      day: 9,
      title: 'API Architecture',
      objective:
        'Separate data access from UI code so your app can grow without becoming messy.',
      focus: ['service layer', 'error handling', 'loading conventions'],
      output: 'products and sales service files',
      needToKnow: [
        'Components should not be full of raw API details.',
        'Services help you reuse data logic and swap mocks for real APIs later.',
        'Store logic and service logic are related but not the same thing.'
      ],
      studyTopics: [
        'Service layer structure',
        'Mock data versus real endpoints',
        'Consistent loading and error handling patterns'
      ],
      researchPrompts: [
        'What should live in a service file versus a store?',
        'Where should response shaping or data transformation happen?'
      ],
      buildTasks: [
        'Create service files for products and sales',
        'Move fetch logic away from direct page code',
        'Keep loading and error state predictable'
      ],
      successChecks: [
        'You can explain the difference between store state and service calls.',
        'You can swap a mock service for a real one without rewriting the whole page.'
      ],
      comfortNote:
        'Today is about structure, not visual output. Cleaner architecture now saves pain later.'
    },
    {
      day: 10,
      title: 'Composables',
      objective:
        'Extract repeated logic into reusable composables and learn how shared behavior differs from shared state.',
      focus: ['useXxx patterns', 'shared behavior', 'logic extraction'],
      output: 'At least one real composable',
      needToKnow: [
        'Composables share behavior and stateful logic across components.',
        'A composable is often a better home for repeated UI logic than a giant component.',
        'Shared behavior is not the same as global application state.'
      ],
      studyTopics: [
        'How a composable returns state and actions',
        'Examples like useFetch, useForm, or usePagination',
        'Choosing between composable, store, and component logic'
      ],
      researchPrompts: [
        'What repeated logic appears in more than one page right now?',
        'Would this behavior still make sense if reused somewhere else?'
      ],
      buildTasks: [
        'Create one composable that removes duplicated logic',
        'Use it in a real page or component',
        'Keep its API small and easy to explain'
      ],
      successChecks: [
        'You can say why the logic belongs in a composable and not in Pinia.',
        'Another developer could read the composable and understand its purpose quickly.'
      ],
      comfortNote:
        'Composables are where the codebase starts feeling professional. Aim for clarity, not cleverness.'
    },
    {
      day: 11,
      title: 'Advanced Component Patterns',
      objective:
        'Build reusable UI pieces that make the app feel consistent and easier to extend.',
      focus: ['reusable table', 'modal pattern', 'notification pattern'],
      output: 'Reusable UI patterns across screens',
      needToKnow: [
        'Reusable components should solve one recurring problem clearly.',
        'A reusable table or modal is useful only if its API stays understandable.',
        'Consistency reduces the mental load on both the builder and the user.'
      ],
      studyTopics: [
        'Simple modal and table APIs',
        'Slot-based customization for reusable layout pieces',
        'Notification patterns for feedback'
      ],
      researchPrompts: [
        'What makes a component reusable without becoming overly generic?',
        'Where should you stop abstracting and keep things page-specific?'
      ],
      buildTasks: [
        'Create a reusable table or list display',
        'Create a modal pattern for forms or confirmations',
        'Add a simple notification or feedback pattern'
      ],
      successChecks: [
        'You can reuse one new component in at least two places.',
        'You can explain the props or slots that power the component.'
      ],
      comfortNote:
        'This is the day where your app starts looking more intentional. Reuse should reduce friction, not add complexity.'
    },
    {
      day: 12,
      title: 'Debugging And Quality',
      objective:
        'Improve code quality and learn how to debug Vue behavior methodically instead of guessing.',
      focus: ['Vue DevTools', 'duplication cleanup', 'rendering mistakes'],
      output: 'Cleaner app and better file structure',
      needToKnow: [
        'Good debugging starts with tracing state, props, and events calmly.',
        'Big components and duplicated logic are future bugs waiting to happen.',
        'A cleaner structure makes the next feature easier, not just the current one.'
      ],
      studyTopics: [
        'Vue DevTools workflow',
        'Common prop, watch, and render mistakes',
        'Refactoring for naming and component boundaries'
      ],
      researchPrompts: [
        'Which bugs or awkward areas keep showing up in the same places?',
        'Which component is doing too many jobs at once?'
      ],
      buildTasks: [
        'Open DevTools and inspect real state changes',
        'Remove duplicated logic and rename confusing parts',
        'Split any oversized component that is hard to explain'
      ],
      successChecks: [
        'You can find one issue through inspection, not random trial and error.',
        'The app feels easier to read after your refactor pass.'
      ],
      comfortNote:
        'Refactoring is not optional cleanup. It is part of learning how to think like a builder.'
    },
    {
      day: 13,
      title: 'Testing Basics',
      objective:
        'Learn what to test in a Vue app and write a few tests that prove useful behavior.',
      focus: ['component tests', 'store tests', 'route behavior tests'],
      output: 'At least 3 useful tests',
      needToKnow: [
        'Tests are strongest when they verify behavior the user or developer depends on.',
        'You do not need to test every line to gain value.',
        'A small number of good tests beats a large number of vague tests.'
      ],
      studyTopics: [
        'Testing component interaction',
        'Testing store behavior and derived state',
        'Testing page or route behavior'
      ],
      researchPrompts: [
        'What would break confidence if it stopped working tomorrow?',
        'Which features are important enough to prove with tests first?'
      ],
      buildTasks: [
        'Write one useful form interaction test',
        'Write one store test',
        'Write one routed page or route behavior test'
      ],
      successChecks: [
        'You can explain what each test protects.',
        'Your tests describe behavior instead of implementation details.'
      ],
      comfortNote:
        'Testing is not about proving you never make mistakes. It is about making change feel safer.'
    },
    {
      day: 14,
      title: 'Capstone',
      objective:
        'Pull everything together into a demo-ready mini app and explain your choices with confidence.',
      focus: ['polish', 'demo flow', 'explain architecture from memory'],
      output: 'Demo-ready Mini Karibu Frontend',
      needToKnow: [
        'Today is about integration, clarity, and presentation.',
        'A finished small app teaches more than ten half-finished experiments.',
        'You should be able to explain why each part exists and how data moves through the app.'
      ],
      studyTopics: [
        'Final architecture review',
        'Polish pass for UI, naming, and flow',
        'Practice explaining the app from login to state update'
      ],
      researchPrompts: [
        'If another learner opened this app, what would they understand quickly?',
        'Where do you still need repetition after this sprint ends?'
      ],
      buildTasks: [
        'Finish the login, dashboard, product flow, and sales flow',
        'Review stores, services, composables, and routes together',
        'Prepare to demo the app and explain it without reading from the code'
      ],
      successChecks: [
        'You can build one small feature alone in under an hour.',
        'You can explain local state, route state, global state, and fetched state clearly.'
      ],
      comfortNote:
        'You do not need to feel perfect to be ready. The real win is that the codebase no longer feels mysterious.'
    }
  ],
  dailyChecklist: [
    'Study the day topic for 45-60 minutes',
    'Build the day feature from scratch',
    'Debug one issue without guessing',
    'Refactor one small part',
    'Write recap notes from memory',
    'Explain what you built out loud'
  ],
  checkpointGoals: [
    'Day 3: 3 reusable components',
    'Day 5: 1 page with real async data handling',
    'Day 7: first routed mini app',
    'Day 10: Pinia plus at least 1 composable',
    'Day 13: at least 3 useful tests',
    'Day 14: one complete demo-ready mini app'
  ],
  projectBrief: {
    purpose:
      'Grow one small business-style app throughout the sprint instead of building disconnected demos.',
    screens: ['Login', 'Dashboard', 'Products', 'Add Product', 'Sales', 'Settings'],
    stack: ['Vue 3', 'Vite', 'Vue Router', 'Pinia', 'Service layer', 'Basic tests'],
    buildOrder: [
      'Start with a plain Vue app and static pages',
      'Add components',
      'Add forms and validation',
      'Add async fetch flow',
      'Add routing',
      'Add Pinia',
      'Add services',
      'Add composables',
      'Add reusable UI pieces',
      'Add tests and polish'
    ]
  },
  trackerPrompts: [
    'Rate your confidence from 1-5 each day',
    'Write what felt easy',
    'Write what still feels confusing',
    'Note one thing to rebuild tomorrow without notes'
  ]
}

export const sprintSummary = bundledRoadmapContent.sprintSummary
export const roadmapDays = bundledRoadmapContent.roadmapDays
export const dailyChecklist = bundledRoadmapContent.dailyChecklist
export const checkpointGoals = bundledRoadmapContent.checkpointGoals
export const projectBrief = bundledRoadmapContent.projectBrief
export const trackerPrompts = bundledRoadmapContent.trackerPrompts
