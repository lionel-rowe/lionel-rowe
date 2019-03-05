const ghpages = require('gh-pages');

const opts = {
  branch: 'gh-pages',
  repo: 'https://github.com/lionel-rowe/portfolio/'
};

const callback = () => {
  console.log(`Published to \`${opts.branch}\` branch at \`${opts.repo}\`.`);
}

console.log('Publishing...');
ghpages.publish('build', opts, callback);
