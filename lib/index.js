require('ember');
var Spinner = require('spinner');

module.exports = Em.Mixin.create({
  showSpinner: function(){
    this.hideSpinner();
    this.spinner = new Spinner;
    var theme = this.get('theme');
    if (theme == 'light'){
      this.spinner.light();
    }
    var div = Em.$('<div id="component-ember-spinner"/>');
    div.append(this.spinner.el);
    div.appendTo('body');
  },
  hideSpinner: function(){
    if (this.spinner) this.spinner.stop();
    Em.$('#component-ember-spinner').remove();
  },
});