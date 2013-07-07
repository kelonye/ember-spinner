require('ember');

module.exports = Em.Mixin.create({
  showSpinner: function(){
    this.hideSpinner();
    var Spinner = require('spinner');
    var spinner = new Spinner;
    var theme = this.get('theme');
    if (theme == 'light'){
      spinner.light();
    }
    var div = Em.$('<div id="component-ember-spinner"/>');
    div.append(spinner.el);
    div.appendTo('body');
  },
  hideSpinner: function(){
    Em.$('#component-ember-spinner').remove();
  },
});