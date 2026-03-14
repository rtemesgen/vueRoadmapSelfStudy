# Mini Karibu Vue Project Brief

## Purpose
This project is the practice app for the full 2-week sprint. Instead of building many unrelated exercises, you will grow one small app every day. That repetition is what will make the learning stick.

## Project Goal
Build a small business-style frontend inspired by Karibu using:
- `Vue 3`
- `Vite`
- `Vue Router`
- `Pinia`
- `service layer`
- `basic tests`

## Main Screens
- `Login`
- `Dashboard`
- `Products`
- `Add Product`
- `Sales`
- `Settings`

## Features To Add Over Time
### Week 1
- Static page structure
- Basic reusable components
- Product form
- Async product or user fetch
- Navigation with Vue Router

### Week 2
- Shared state with Pinia
- Mock auth flow
- Product store and sales store
- API services
- One or more composables
- Reusable table or modal
- Basic tests

## Suggested Data Model
Use simple starter data. Keep the shape small while learning.

### Product
- `id`
- `name`
- `category`
- `price`
- `stock`
- `status`

### Sale
- `id`
- `productId`
- `quantity`
- `amount`
- `date`

### User
- `id`
- `name`
- `role`
- `branch`

## Suggested File Structure
When you begin the Vue app, aim for something close to this:

```text
src/
  components/
  views/
  router/
  stores/
  services/
  composables/
  assets/
```

## Build Order
1. Start with a plain Vue app and static page content.
2. Add component structure.
3. Add forms and validation.
4. Add async fetch flow.
5. Add routing.
6. Add Pinia.
7. Add services.
8. Add composables.
9. Add reusable UI pieces.
10. Add tests and polish.

## Rules For This Project
- Keep components small.
- Do not put all logic in one page.
- Use props and emits before reaching for global state.
- Move shared data into Pinia only when multiple parts need it.
- Keep API logic out of templates.
- Prefer clarity over cleverness.

## Capstone Definition Of Done
Your app is ready for the Day 14 demo when:
- It has working page navigation.
- It includes a login UI and protected-route concept.
- It shows dashboard summary cards.
- It has a product CRUD-style flow or close simulation.
- It has a sales entry form.
- It uses Pinia for shared state.
- It uses a service layer for data access.
- It includes at least 3 meaningful tests.

## What To Practice Explaining
At the end, you should be able to explain:
- how the app boots
- how routes are defined
- why state is local or global
- how data gets fetched
- how a form updates state
- how a store action updates the UI
- what your tests are proving
