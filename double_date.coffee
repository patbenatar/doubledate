class this.DoubleDate extends Backbone.View

  $hiddenInput: null

  settings:
    dateFormat: "mm/dd/yy"
    altFormat: "yy-mm-dd"

  initialize: (options) ->
    _.bindAll @, "_onInputChange"

    # Merge default options
    @options = $.extend({}, @settings, options)

    # Build hidden input
    @$hiddenInput = @$el.clone()
    @$hiddenInput.attr("type", "hidden")
    # Seed hidden input with properly formatted date
    # (jQuery UI will only make it proper if user changes date)
    @$hiddenInput.val @_formatDate(new Date(@$el.val())) if @$el.val() != ''

    # Remove attrs from visible el so server will ignore it
    @$el.removeAttr("name").removeAttr("id")

    # Insert out hiddenInput into DOM
    @$el.after @$hiddenInput

    # Initialize datepicker
    @$el.datepicker
      dateFormat: @options.dateFormat
      altField: @$hiddenInput
      altFormat: @options.altFormat

    # Listen for changes on main input
    @$el.bind "keyup", @_onInputChange

  # Takes a JS Date object and returns a string
  # in yy-mm-dd format
  _formatDate: (date) ->
    $.datepicker.formatDate(@options.altFormat, date)

  # Mirror clears to hiddenInput
  # For some reason jQuery UI doesnt update the altField
  # if user clears main input
  _onInputChange: ->
    if @$el.val() == ""
      @$hiddenInput.val ""