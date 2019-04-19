# gatsby-plugin-global-context

> Gatsby plugin to apply context to every page

[![Travis](https://img.shields.io/travis/gakimball/gatsby-plugin-global-context.svg?maxAge=2592000)](https://travis-ci.org/gakimball/gatsby-plugin-global-context) [![npm](https://img.shields.io/npm/v/gatsby-plugin-global-context.svg?maxAge=2592000)](https://www.npmjs.com/package/gatsby-plugin-global-context)

This plugin adds context values to every page in your Gatsby project. Use this if you want to add a "global variable" that any page can use in its GraphQL query.

## Installation

```bash
npm install gatsby-plugin-global-context
```

## Usage

Add the plugin to `gatsby-config.js`:

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-global-context',
      options: {
        context: {
          kittens: true
        }
      }
    }
  ]
};
```

Now, any page will have access to the values defined in `context` above. This includes pages in your `pages/` folder, and pages created with Gatsby's `createPage()`.

```jsx
import React from 'react';
import { graphql } from 'gatsby';

export default () => <h1>Hi, I am a page</h1>;

export const query = graphql`
  query PageQuery($kittens: Boolean!) {
    # ...
  }
`;
```

### Options

The only option is `context`, which should be an object of context values to add to every page.

## Local Development

```bash
git clone https://github.com/gakimball/gatsby-plugin-global-context
cd gatsby-plugin-global-context
npm install
npm test
```

## License

MIT &copy; [Geoff Kimball](http://geoffkimball.com)
