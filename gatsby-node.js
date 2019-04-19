const isObject = require('is-object');
const invariant = require('invariant');

/**
 * Update the context of every Gastby page with new values.
 * @param {Object} gatsby - Gatsby-provided values.
 * @param {Object} options - Plugin options.
 * @param {Object.<String, *>} options.context - Context values to add.
 */
exports.onCreatePage = ({actions, page}, {context = {}}) => {
  invariant(
    isObject(context),
    'gatsby-plugin-global-context requires option `context` to be an object',
  );

  actions.deletePage(page);
  actions.createPage({
    ...page,
    context: {
      ...page.context,
      ...context
    }
  });
};
