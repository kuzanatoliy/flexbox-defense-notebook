# flexbox-defense-notebook

List of [Flexbox defense levels](http://www.flexboxdefense.com)

**Note:** solution could be found [here](SOLUTIONS.md)

### Installation

**Dependencies:**

```bash
$ npm install
```

**Git hooks:**

```bash
$ npx husky install
```

### Scripts

| Script         | Description                               |
| -------------- | ----------------------------------------- |
| cy:open        | Run cypress app                           |
| cy:run         | Run e2e test                              |
| lint           | Run eslint quality gates                  |
| prettier:check | Run prettier quality gates                |
| prettier:write | Run prettier quality gates and fix errors |
| commitlint     | Run validation for commin format          |

### Commits naming

Each commit should support following format

`<type>: <issue number> <description>`
