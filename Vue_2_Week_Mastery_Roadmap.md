# Vue 3 Two-Week Mastery Sprint

## Goal
This sprint is designed to take you from beginner to project-ready with Vue 3 in 14 days at a pace of 3-4 focused hours per day. The target is not total mastery of the entire ecosystem in two weeks. The target is to become confident enough to build a real Vue frontend with routing, state, forms, API calls, reusable components, and basic testing.

By the end of Day 14, you should be able to:
- Build a multi-page Vue 3 app from scratch with `Vite`.
- Use `Composition API` and `script setup` naturally.
- Explain `ref`, `reactive`, `computed`, `watch`, `props`, `emits`, and lifecycle hooks.
- Use `Vue Router` for page structure and basic route protection.
- Use `Pinia` for shared state.
- Build a small business-style frontend similar to the Karibu direction.

## Core Stack
- `Vue 3`
- `Vite`
- `Vue Router`
- `Pinia`
- `Axios-style service layer`
- `Tailwind-style component thinking`
- `Basic component/store/page tests`

## Daily Time Split
- `45-60 min`: concept study
- `90-120 min`: coding from scratch
- `30 min`: debugging and refactor
- `20-30 min`: write recap notes from memory

## Learning Rules
- Build every day. Reading alone does not count as progress.
- Rebuild small features without copying after you first finish them.
- Keep one project throughout the sprint instead of making 14 unrelated demos.
- Speak your understanding out loud. If you can explain it, you are learning it.
- End each day with a short note: what made sense, what was hard, what needs repetition.

## Weekly Outcomes
### Week 1 Outcome
You can build a small Vue app with:
- reusable components
- form handling
- API fetching
- routing
- basic page structure

### Week 2 Outcome
You can evolve that app into a more realistic frontend with:
- Pinia stores
- service layer separation
- composables
- reusable UI patterns
- basic tests

## Day-by-Day Roadmap
### Day 1: Vue Setup And Mental Model
Focus:
- Understand what Vue does and how a Vue app boots.
- Learn Single File Components: `template`, `script setup`, `style`.
- Learn the main directives: `v-if`, `v-for`, `v-bind`, `v-model`.

Build:
- Counter
- Greeting card
- Conditional UI block

Deliverable:
- One page with 3 tiny examples you can explain line by line.

Self-check:
- Can you explain what `createApp` does?
- Can you describe the difference between HTML and Vue template syntax?

### Day 2: Reactivity Deeply
Focus:
- `ref`
- `reactive`
- `computed`
- `watch`
- event handling

Build:
- Task list with add, remove, filter, and completed count

Deliverable:
- A task page where filtering and counts update reactively.

Self-check:
- When would you use `computed` instead of manually recalculating?
- When would you use `ref` instead of `reactive`?

### Day 3: Components Properly
Focus:
- `props`
- `emits`
- parent-child communication
- slots
- reusable component design

Build:
- Break the task app into at least 3 components

Deliverable:
- `TaskInput`
- `TaskList`
- `TaskStats`

Self-check:
- Can you explain why props should not be mutated directly?
- Can you describe one-way data flow in Vue?

### Day 4: Forms And Validation
Focus:
- `v-model`
- input bindings
- form submit handling
- checkbox/select/radio handling
- basic sync validation

Build:
- Product entry form with validation messages

Deliverable:
- A form that validates empty fields, number ranges, and category selection.

Self-check:
- Can you explain how form state flows from input to submission?
- Can you show why validation should be derived from state rather than scattered?

### Day 5: Lifecycle And Async Data
Focus:
- `onMounted`
- async data loading
- loading state
- error state
- empty state

Build:
- Page that fetches products or users from a public or mock API

Deliverable:
- One page with proper loading, error, and success display.

Self-check:
- Can you explain why async fetching usually starts in lifecycle logic or a composable?
- Can you describe the difference between data loading state and rendered state?

### Day 6: Vue Router
Focus:
- router setup
- route pages
- params
- query strings
- navigation
- route guard concept

Build:
- Convert the app into pages:
- Dashboard
- Products
- Sales
- Settings

Deliverable:
- A navigable mini app with multiple pages.

Self-check:
- Can you explain when data belongs in route params versus store state?
- Can you describe a basic protected route flow?

### Day 7: Week 1 Consolidation
Focus:
- No new topics
- Rebuild and organize what you already learned

Build:
- First version of `Mini Karibu Frontend`

Pages:
- Login UI
- Dashboard
- Products list
- Add Product form
- Sales placeholder

Deliverable:
- First mini app version with routing and reusable components.

Self-check:
- Can you rebuild a page without tutorial help?
- Can you explain each component's responsibility?

### Day 8: Pinia State Management
Focus:
- store setup
- state
- getters
- actions
- local state vs shared state

Build:
- `auth` store
- `products` store
- `sales` or `cart` store

Deliverable:
- App state moved out of pages where it should be shared.

Self-check:
- Can you explain why not all state should go into Pinia?
- Can you trace a store action from click to UI update?

### Day 9: API Architecture
Focus:
- service layer
- separating UI from fetching logic
- error handling
- loading conventions

Build:
- service files for products and sales
- start with mocks if needed

Deliverable:
- Components call stores or composables, not raw API logic scattered everywhere.

Self-check:
- Can you explain the difference between a service and a store?
- Can you explain where API transformation logic should live?

### Day 10: Composables
Focus:
- reusable logic with `useXxx`
- component logic extraction
- when to choose composable vs store

Build:
- `useFetch`
- `useForm`
- or `usePagination`

Deliverable:
- At least one composable in real use inside the app.

Self-check:
- Can you explain why this logic should not stay inside one page component?
- Can you explain the difference between shared data and shared behavior?

### Day 11: Advanced Component Patterns
Focus:
- dynamic components
- slots better
- layout reuse
- simple modal and table patterns

Build:
- reusable data table
- modal form
- notification pattern

Deliverable:
- Reusable UI patterns that can be dropped into multiple pages.

Self-check:
- Can you explain the API of your components clearly?
- Can another developer reuse them without editing internals?

### Day 12: Debugging And Quality
Focus:
- Vue DevTools workflow
- watcher misuse
- prop misuse
- rendering mistakes
- duplication cleanup

Build:
- Refactor rough parts
- remove duplicate logic
- improve naming and structure

Deliverable:
- Cleaner app with fewer oversized components.

Self-check:
- Can you find a bug through inspection instead of random edits?
- Can you justify your current file and component structure?

### Day 13: Testing Basics
Focus:
- what to test
- component interaction
- store behavior
- page behavior

Build:
- tests for one form
- one store
- one routed page

Deliverable:
- At least 3 useful tests

Self-check:
- Are your tests checking behavior instead of internals?
- Could another person understand the feature from the test names?

### Day 14: Capstone
Focus:
- finish and polish
- explain the app from memory

Build:
- Login page UI
- Protected routes concept
- Dashboard cards
- Product CRUD-style interface
- Sales entry form
- Pinia stores
- Service layer
- Basic tests

Deliverable:
- One working `Mini Karibu Frontend` you can demo and explain end to end.

Self-check:
- Can you build one feature in under 60 minutes?
- Can you explain local state vs route state vs global state vs fetched state?

## Deliverables By Checkpoint
- By Day 3: 3 reusable components
- By Day 5: 1 page with real async handling
- By Day 7: first routed mini app
- By Day 10: app uses Pinia plus at least 1 composable
- By Day 13: at least 3 useful tests
- By Day 14: one complete demo-ready mini app

## What To Postpone Until After These 2 Weeks
- `Nuxt`
- SSR and SSG
- deep TypeScript-heavy Vue architecture
- plugin authoring
- advanced animations
- deep Vue internals beyond debugging needs

## Success Criteria
At the end of this sprint, success means:
- You can build a Vue page without hand-holding.
- You can split UI into clean reusable components.
- You can wire forms, routes, stores, and API calls together.
- You can read Vue documentation and apply it on your own.
- You are ready to start building the Karibu frontend seriously.

## After Day 14
Use the results of the sprint to adjust the pace:
- Increase pace if you are finishing tasks comfortably and can rebuild features from memory.
- Keep pace if you can build but still need repetition.
- Decrease pace if you are understanding concepts but not yet retaining them under pressure.
