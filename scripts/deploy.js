const ghpages = require('gh-pages');

const opts = {
  branch: 'master',
  repo: 'https://github.com/lionel-rowe/lionel-rowe.github.io'
};

const callback = () => {
  console.log(`Published to \`${opts.branch}\` branch at \`${opts.repo}\`.`);
}

ghpages.publish('build', opts, callback);
