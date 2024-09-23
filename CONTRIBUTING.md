### Contributing to Angular project for the TMI tool of Finartix.

## Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to more readable messages that are easy to follow when looking through the project history and for this reason we use the Conventional Commits specification.

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>
<blank line>
[optional body]
<blank line>
[optional footer(s)]
```

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests; no production code change
- **chore**: Adding/updating tasks etc; no production code change
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc); no production code change
- **docs**: Documentation changes; no production code change

### Scope

The scope should be the name of the module affected (folder name or other meaningful words)

The following are some examples:

- **api**
- **alert**
- **badge**
- **breadcrumb**
- **OTHER_COMPONENT_NAME**

There are currently a few exceptions to the "use module name" rule:

- **packaging**: used for changes that change the npm package layout, e.g. public path changes, package.json changes, d.ts file/format changes, changes to bundles, etc.
- **changelog**: used for updating the release notes in CHANGELOG.md
- **showcase**: used for docs-app (ng.ant.design) related changes within the /showcase directory of the repo
- none/empty string: useful for `style`, `test` and `refactor` changes that are done across all packages (e.g. `style: add missing semicolons`)

### Description

The description contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

### Body

Just as in the **description**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in this [link](https://www.conventionalcommits.org/).

### Examples

#### Commit message with description and breaking change footer

```
feat(config): allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

#### Commit message with scope and ! to draw attention to breaking change

```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6
```

#### Commit message with no scope and body

```
docs: correct spelling of CHANGELOG
```

#### Commit message with multi-paragraph body and multiple footers

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```
