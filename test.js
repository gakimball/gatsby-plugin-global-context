const {expect} = require('chai');
const {spy} = require('sinon');
const {onCreatePage} = require('./gatsby-node');

const createActions = () => ({
  deletePage: spy(),
  createPage: spy()
});

const page = {
  path: '/kittens',
  component: '/kittens.js',
  context: {
    kittens: true
  }
};

describe('gatsby-plugin-global-context', () => {
  it('deletes the old page', () => {
    const actions = createActions();
    onCreatePage({actions, page}, {});

    expect(actions.deletePage.calledWithExactly(page)).to.equal(true);
  });

  it('creates a new page and adds context', () => {
    const actions = createActions();
    const options = {
      context: {
        puppies: false
      }
    };
    onCreatePage({actions, page}, options);

    const expectedPage = {
      path: '/kittens',
      component: '/kittens.js',
      context: {
        kittens: true,
        puppies: false
      }
    };

    expect(actions.createPage.calledWithExactly(expectedPage)).to.equal(true);
  });

  it('throws if the `context` option is not an object', () => {
    const actions = createActions();
    const options = {
      context: 'nope'
    };

    expect(() => onCreatePage({actions, page}, options)).to.throw(Error);
  });
});
