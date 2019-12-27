# Contributing to Octo

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

The following is a set of guidelines for contributing to Octo. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Table of Contents
- [Contributing to Octo](#contributing-to-octo)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [How Can I Contribute?](#how-can-i-contribute)
  - [Styleguides](#styleguides)
    - [Git Commit Messages](#git-commit-messages)
      - [Format](#format)
      - [Type](#type)
      - [Scope](#scope)

## Code of Conduct
This project and everyone participating in it is governed by the [Octo Code of Conduct](CODE_OF_CONDUCT). By participating, you are expected to uphold this code.

## How Can I Contribute?

## Styleguides
### Git Commit Messages
We have very precise rules over how our git commit messages can be formatted. This leads to more readable messages that are easy to follow when looking through the project history. But also, we use the git commit messages to generate the Angular change log.
  - Use the present tense ("add feature" not "added feature")
  - don't capitalize the first letter
  - Use the imperative mood ("move cursor to..." not "moves cursor to...")
  - no dot (.) at the end of Subject
  - The footer should contain any information about Breaking Changes and is also the place to reference GitHub issues that this commit Closes.

#### Format
Each commit message consists of a header, a body and a footer. The header has a special format that includes a type, a scope and a subject:
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
The header is mandatory and the scope of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.

The footer should contain a closing reference to an issue if any.

Samples: [(even more samples)](https://github.com/angular/angular/commits/master)

```
docs(changelog): update changelog to beta.5
fix(release): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```
#### Type
  - Must be one of the following:
    - **build:** Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
    - **ci:** Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
    - **docs:** Documentation only changes
    - **feat:** A new feature
    - **fix:** A bug fix
    - **perf:** A code change that improves performance
    - **refactor:** A code change that neither fixes a bug nor adds a feature
    - **style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    - **test:** Adding missing tests or correcting existing tests
    - **revert:** If the commit reverts a previous commit, it should begin with `revert:` , followed by the header of the reverted commit. In the body it should say: `this reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.
  - When only changing documentation, include [ci skip] in the commit title
#### Scope
The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages).
The following is the list of special scopes:
  - **changelog:** used for updating the release notes in CHANGELOG.md