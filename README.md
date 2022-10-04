# Coreblocks Frontend Template/Boilerplate

This template is designed to ease the bootstrapping process of a new frontend project.

It includes the following:

- Basic Next.js setup with TypeScript support
- Eslint, Prettier, Stylelint and Conventional Commits configurations. 
  Note that we use AirBnb style guides for our TypeScript code.
- Basic file structure. *See Practices section for details.*
- This readme file. Use this as a reference on how we approach
  making frontend experiences at Coreblocks.

# Development process
## Initial setup

**Step 1.** Clone this repo.

```shell
git clone git@github.com:coreblocks/frontend-template.git
```

**Step 2.** Install NVM.

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

**Step 3.** Install Node via NVM

```shell
source scripts/useNodeVersion.sh
```

**Step 4.** Install dependencies

```shell
npm ci
```

*Caution:* **Always** prefer `npm ci` over `npm i` when not installing
any new packages. This helps preserve dependency version freeze, since running
`npm i` can update indirect dependencies.

**Step 5**. Run the app.

```shell
npm run dev
```

## Contributing code & practices

### Git workflow

All contributions should be done in feature branches. No code should ever be
pushed directly to `master`.
A feature branch represents all the work associated with a single Jira ticket.
As such, naming should follow the specific ticket you're doing work on.
EX.: CYBERCREW-123.

Feature branches must not ever be directly merged to `master`. All feature
branches must go through the pull request & code review process before merging.

### Commits

Commit messages should be exclusively in English. Messages should be prefixed
with these common semantics, followed by a colon:

- `feat` &mdash; changes represent a feature, something new.
- `fix` &mdash; changes represent a bug fix or an infrastructure fix
- `chore` &mdash; changes consist of tidying up, mostly (ex.: dependency bump,
  resource file sync, etc.)
- `refactor` &mdash; changes represent refactoring of existing code

Examples:

```
feat: user profile page implementation
feat: new Drawer component

fix: serialization for transport layer
fix: proper handling of empty string values

chore: bump react version
chore: move global styles to a separate directory

refactor: new plugin init flow
```

Focus on describing the changes as concisely as possible.

Commit frequency doesn't matter. However, you should note that
pushing one big commit at the end of a feature development would generally
make your code much harder to review.

### Comments

Comments should be exclusively in English. You shouldn't overdo comments,
however. Good code doesn't need explanation for every single statement.
You should probably leave comments only for really non-trivial parts of your
code, or when you're doing some dirty hacks with good reasoning.

JSDoc is greatly encouraged, however, its usage is not imperative. Common utilities and components should probably have it, though.

### File structure

Your should follow these rules when organizing your code:

- All file names should be in `camelCase` for utilities/aux and in
  `PascalCase` for components/classes. Directory names should be
  in `PascalCase` for components and in `kebab-case` for everything else.

- Everything code-related should end up in `src/`. Keep in mind the
  following subfolder rules.

- All components should be placed in `components/` folder. Every
  component should have its own directory there. The actual `.tsx`
  file should be also named the same as a directory it resides in.
  Exception: auxilliary components that complement the main 
  component, e.g. additional views or something like that &mdash;
  this stuff can be just placed in the same directory as the main
  component.

  The corresponding CSS module should follow the same naming
  convention.

  Other than that, the component folder structure is more or less
  flexible.

  Example:

  ```
  components/
  --| AppHeader/
  ----| AppHeader.tsx
  ----| AppHeader.module.css

  --| ModalWrapper/
  ----| ModalWrapper.tsx
  ----| ModalWrapper.module.css
  ----| useEventHandlers.ts

  --| ComplexCompositeComponent/
  ----| generic-views/
  ------| definitions.ts

  ----| SomeAuxComponentUsedOnlyHere
  ------| SomeAuxComponentUsedOnlyHere.tsx

  ----| ComplexCompositeComponent.tsx
  ----| ComplexCompositeComponent.module.css
  ----| useSomeHook.ts
  ----| LocalMobxStore.ts
  ----| types.ts
  ```

- Common utilities **(non-component ones)** should be placed in
  `utils/` directory. Utility hooks should be placed in
  `utils/hooks/`. Examples of common utilities: date formatting
  utilities, `sleep` async helper, something that performs a
  non-standard sorting of data, etc.

  You can also make your own subdirectories in `utils/` as you see
  fit.

- Global styles/common style utilities should be placed in `styles/`.
- Global type definitions (`.d.ts`) should be placed in `typings/`.
- CI scripts and everything CI-related should be placed in `ci/`.
- Miscellaneous scripts (e.g. node version installer or an API sync) should
  be placed in `scripts/`.

- Unit tests should be placed near the piece of code they're
  testing. Please note that you should follow the naming of a file these tests
  are based on.

  Ex.:

  ```
  someConverterFunction.ts
  someConverterFunction.spec.ts
  ```

- Integration tests should be placed in `tests/integration/`.

  Ex.:

  ```
  tests/
  --| integration/
  ----| userLogin.spec.ts
  ----| walletConnect.spec.ts
  ```

- Mocks and fixtures/stubs should be placed in `tests/mocks/` and
  `tests/fixtures` respectively.

- Static assets (those that end up in the bundle or those requiring
  a specific loader) should be placed in `assets/`.

  - Likewise, I18N data should be placed in `assets/i18n/`.

- Everything related to transport as well as global state/stores/data objects
  should be placed in `domain/`.

### Tests

Tests are not imperative. However, it makes a lot of sense to have them for
common utilities and data conversion functions.

### Styles

Follow these rules when writing your stylesheets:

- We use plain CSS for all stylesheets.
- We use CSS modules for all non-global styles.
- All custom identifiers in CSS modules should always follow `camelCase` naming.
- Avoid BEM and/or other strict naming conventions. Be concise and descriptive
  with your class names.

  ```css
  /* bad */

  .text-input__control {}
  .text-input__control_size-s {}

  .TextInput-Control {}

  .some-class-name-in-kebab-case {}

  /* good */

  .control {}
  .control.sizeS {}

  .panelWrapper {}
  .additionalControls {}
  ```
- CSS Custom Properties (aka CSS variables) are encouraged. Use `kebab-case`
  as a naming convention. Avoid all camelization.

  ```css
  /* bad */

  --borderRadius: 4px;
  --blurEffect: blur(20px);

  /* extra bad */
  --abstract-borderRadius: 4px;

  /* good */
  --border-radius: 4px;
  --color-surface: white;
  --surface-elevated-effect-box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  ```

### React

- Use of class components is strongly discouraged.
- Conversely, use of functional components is strongly encouraged.
- Don't use default exports (exception: Next route components). Always use
  named exports. 
- Provide prop types for components as a separate type alias.
- Annotate function components with `React.FC<PropType>`.

  Ex.:

  ```typescript
  type ButtonProps = {
    type: 'primary' | 'outline';
    size: 's' | 'm' | 'l';
    onClick: () => void;
    mix?: string;
  }

  export const Button: React.FC<ButtonProps>;
  ```

  This also works with Mobx `observable` HoC.

  ```typescript
  type UserViewProps = {
    name: string;
  }

  export const UserView: React.FC<UserViewProps> = observable(() => null);
  ```

- Use of `useCallback` is discouraged. Consider using `useStableCallback`
  instead.
- If your component has complex state, use either a single `useState`
  call with an object state type or Mobx.
- **Never** use list indexes as a `key`. Exception: static list data which is
  known at compile-time and is never changed.
- Consider memoizing when passing an object state to the context.

## TypeScript

- **Never** use `any`. Consider using `unknown` or a type cast instead.
- Use of interfaces is discouraged. Use type aliases instead.
- When making a string-indexed type (e.g. a map of ids to some data), consider
  specifying value type as `T | undefined`.

  ```typescript
  /* bad */

  type StateMap = Record<string, StateType>;

  const states: StateMap = {};

  // will compile fine, even though no check for key existence is done
  states[someKey].someStateField;

  /* better */

  type StateMap = Record<string, StateType | undefined>;

  const states: StateMap = {};

  // now we need optional chaining to access the field
  states[someKey]?.someStateField;

  /* best */
  
  const states = new Map<string, StateType>();

  // Map access can returns a nullable of StateType
  states.get(someKey)?.someStateField
  ```
- Always use `// @ts-expect-error` directive instead of `// @ts-ignore`.
- Only use `// @ts-expect-error` for really non-trivial cases.
- Don't prefix types with `I`.

  ```typescript
  /* not good */

  type IDisposable = {
    dispose: () => void;
  }

  /* good */

  type Disposable = {
    dispose: () => void;
  }
  ```

## Mobx

- Use ES6+ classes.
- Use flows. Keep in mind, however, that by default `yield` in a generator would
  return something typed as `any`. Also, don't forget to use `flowResult`.

  ```typescript
  *flow() {
    // This is not so good: `data` would have type `any`.
    const data = yield transport.request();

    // Consider doing this:
    const data: ActualBackendDto = yield transport.request();
  }
  ```
- You should separate the concerns and follow SRP.
- As such, separate pure data objects with minimal business logic footprint
  and actual stores.
- Always dispose of reactions.
- Prefer computed when possible.

## Icons

Most SVG icons should be converted to a React component, either manually or
via a webpack loader. An exception to this would be something like flag icons,
which usually should be displayed on demand.

TODO: release process, manual testing.
