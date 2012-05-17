(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  this.DoubleDate = (function() {
    __extends(DoubleDate, Backbone.View);
    function DoubleDate() {
      DoubleDate.__super__.constructor.apply(this, arguments);
    }
    DoubleDate.prototype.$hiddenInput = null;
    DoubleDate.prototype.settings = {
      dateFormat: "mm/dd/yy",
      altFormat: "yy-mm-dd"
    };
    DoubleDate.prototype.initialize = function(options) {
      _.bindAll(this, "_onInputChange");
      this.options = $.extend({}, this.settings, options);
      this.$hiddenInput = this.$el.clone();
      this.$hiddenInput.attr("type", "hidden");
      if (this.$el.val() !== '') {
        this.$hiddenInput.val(this._formatDate(new Date(this.$el.val())));
      }
      this.$el.removeAttr("name").removeAttr("id");
      this.$el.after(this.$hiddenInput);
      this.$el.datepicker({
        dateFormat: this.options.dateFormat,
        altField: this.$hiddenInput,
        altFormat: this.options.altFormat
      });
      return this.$el.bind("keyup", this._onInputChange);
    };
    DoubleDate.prototype._formatDate = function(date) {
      return $.datepicker.formatDate(this.options.altFormat, date);
    };
    DoubleDate.prototype._onInputChange = function() {
      if (this.$el.val() === "") {
        return this.$hiddenInput.val("");
      }
    };
    return DoubleDate;
  })();
}).call(this);
