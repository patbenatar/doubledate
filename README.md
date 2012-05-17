# DoubleDate

DoubleDate makes working with jQuery UI DatePicker and Rails a breeze. It allows you to format the date when displaying it to the user in the format of your choosing while submitting it in the format of your server's choosing.

## Dependencies

* Backbone.js (and therefore Underscore.js)
* jQuery UI Datepicker (and therefore jQuery)

## Installation

1. Download your flavor (JS or Coffee) and include it in your app

## Usage

```coffeescript
    new DoubleDate(
      el: $("input.your_date_input")
    )
```

## Options (defaults shown)

```coffeescript
    new DoubleDate(
      dateFormat: "mm/dd/yy"
      altFormat: "yy-mm-dd"
    )
```
