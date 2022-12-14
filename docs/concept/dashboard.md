---
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Dashboard

The dashboard module allows you to create a new custom dashboard including custom data charts or tables. 
Spica uses [Chart.js](https://www.chartjs.org/) to create charts and therefore supports every options for every Chart.js operation.

To list all of your Dashboards, simply open the **Dashboard** section of the side panel.

## Creating a new custom Dashboard

A basic custom dashboard consists of two properties; a name and components. You can show many different components in a dashboard by adding multiple components.

URL property of the component dedicates where the chart data comes from. You can choose to get data directly from Spica by using an HTTP Triggered function, or you can enter a remote URL.

Please note, each component accepts a different kind of JSON structure.

## Properties

Essentialy, dashboard requires two properties; `label` and `datasets`.
- `title`: The title shown at the top of the chart.
- `options`: Options for the chart.
- `label`: The y-axis or names for the chart. Takes an array.
- `datasets`: The x-axis or the components for the chart. Takes an array or multiple arrays.
- `legend`: Determines whether the legend will be displayed.
- `width`: Width of the chart.
- `filters`: Optional filters for filtering the chart. 

### Example Line Data Response

```json
{
  "title": "line title",
  "options": {"legend": {"display": true}, "responsive": true},
  "label": ["A", "B", "C", "D", "E", "F"],
  "datasets": [{"data": [65, 59, 90, 81, 56, 55, 40], "label": "linedata"}],
  "legend": true,
  "width": 70,
  "filters": [
    {"key": "begin", "type": "date", "value": "2000-01-01T00:00:00.000Z"},
    {"key": "end", "type": "date", "value": "2001-01-01T00:00:00.000Z"}
  ]
}
```

### Example Radar Data Response

```json
{
  "title": "radar title",
  "options": {"legend": {"display": true}, "responsive": true},
  "label": ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
  "datasets": [
    {"data": [65, 59, 90, 81, 56, 55, 40], "label": "radardata"},
    {"data": [28, 48, 40, 19, 96, 27, 100], "label": "Series B"}
  ],
  "legend": true,
  "width": 30,
  "filters": [
    {"key": "begin", "type": "date", "value": "2000-01-01T00:00:00.000Z"},
    {"key": "end", "type": "date", "value": "2001-01-01T00:00:00.000Z"}
  ]
}
```

### Example Bar Data Response

```json
{
  "title": "bar title",
  "options": {"legend": {"display": true}, "responsive": true},
  "label": ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
  "datasets": [
    {"data": [65, 59, 80, 81, 56, 55, 40], "label": "bardata"},
    {"data": [28, 48, 40, 19, 86, 27, 90], "label": "Series B"}
  ],
  "legend": true,
  "filters": [
    {"key": "begin", "type": "date", "value": "2000-01-01T00:00:00.000Z"},
    {"key": "end", "type": "date", "value": "2001-01-01T00:00:00.000Z"}
  ]
}
```

### Example Pie Data Response

```json
{
  "title": "pie title",
  "options": {"legend": {"display": true}, "responsive": true},
  "label": [["piedata", "Sales"], ["In", "Store", "Sales"], "Mail Sales"],
  "data": [300, 500, 100],
  "legend": true,
  "filters": [
    {"key": "begin", "type": "date", "value": "2000-01-01T00:00:00.000Z"},
    {"key": "end", "type": "date", "value": "2001-01-01T00:00:00.000Z"}
  ]
}
```

### Example Doughnut Data Response

```json
{
  "title": "doughnut title",
  "options": {"legend": {"display": true}, "responsive": true},
  "label": ["doughnutdata Sales", "In-Store Sales", "Mail-Order Sales"],
  "data": [[350, 450, 100], [50, 150, 120], [250, 130, 70]],
  "legend": true,
  "filters": [
    {"key": "begin", "type": "date", "value": "2000-01-01T00:00:00.000Z"},
    {"key": "end", "type": "date", "value": "2001-01-01T00:00:00.000Z"}
  ]
}
```

### Example Bubble Data Response

```json
{
  "title": "buble title",
  "options": {
    "responsive": true,
    "scales": {
      "xAxes": [{"ticks": {"min": 0, "max": 30}}],
      "yAxes": [{"ticks": {"min": 0, "max": 30}}]
    }
  },
  "datasets": [
    {
      "data": [
        {"x": 10, "y": 10, "r": 10},
        {"x": 15, "y": 5, "r": 15},
        {"x": 26, "y": 12, "r": 23},
        {"x": 7, "y": 8, "r": 8}
      ],
      "label": "bubbledata"
    }
  ],
  "legend": true,
  "filters": [
    {"key": "begin", "type": "date", "value": "2000-01-01T00:00:00.000Z"},
    {"key": "end", "type": "date", "value": "2001-01-01T00:00:00.000Z"}
  ]
}
```

### Example Scatter Data Response

```json
{
  "title": "scatter title",
  "options": {
    "responsive": true
  },
  "datasets": [
    {
      "data": [
        {"x": 1, "y": 1},
        {"x": 2, "y": 3},
        {"x": 3, "y": -2},
        {"x": 4, "y": 4},
        {"x": 5, "y": -3, "r": 20}
      ],
      "label": "scatterdata",
      "pointRadius": 10
    }
  ],
  "legend": true,
  "filters": [
    {"key": "begin", "type": "date", "value": "2000-01-01T00:00:00.000Z"},
    {"key": "end", "type": "date", "value": "2001-01-01T00:00:00.000Z"}
  ]
}
```

### Example Polar Data Response

```json
{
  "title": "polar title",
  "options": {
    "responsive": true
  },
  "data": [300, 500, 100, 40, 120],
  "legend": true,
  "filters": [
    {"key": "begin", "type": "date", "value": "2000-01-01T00:00:00.000Z"},
    {"key": "end", "type": "date", "value": "2001-01-01T00:00:00.000Z"}
  ]
}
```
### Example Card Response

```json
{
  "title": "Card Title",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis libero quis ligula vulputate efficitur.",
  "inputs": [
    {
      "key": "input1",
      "type": "string",
      "value": "",
      "title": "First Input"
    },
    {
      "key": "input2",
      "type": "string",
      "value": "",
      "title": "Second Input"
    }
  ],
  "button": {
    "color": "primary",
    "target": "http://",
    "method": "get",
    "title": "Send Request"
  }
}

```
#### Bucket Properties as Input Type

Inputs array's type field supports all [Bucket Properties](bucket.md#properties) excluding the `relation`, `array`, and `object` types. 

You can add file input to the card like the following:

```json
...
"inputs": [
  ...
  {
    "key": "file",
    "type": "file",
    "value": null,
    "title": "Select a file",
  }
  ...
],
"button": {
    "target": "http://",
    "method": "post",
    "title": "Submit",
    "enctype": "multipart/form-data", //or "application/x-www-form-urlencoded"
},
...
```

Also, you can have multiple selection input type like the following:

```json
...
"inputs": [
  ...
  {
    "key": "dropdown",
    "type": "multiselect",
    "title": "Select your inputs",
    "items": {
      "type": "string",
      "enum": ["input1", "input2", "input3"]
    },
    "maxItems": 2
  }
],
...
```

### Example Table Data Response

```json
{
  "title": "table title",
  "data": [
    {"position": 1, "name": "Hydrogen", "weight": 1.0079, "symbol": "H"},
    {"position": 2, "name": "Helium", "weight": 4.0026, "symbol": "He"},
    {"position": 3, "name": "Lithium", "weight": 6.941, "symbol": "Li"},
    {"position": 4, "name": "Beryllium", "weight": 9.0122, "symbol": "Be"},
    {"position": 5, "name": "Boron", "weight": 10.811, "symbol": "B"},
    {"position": 6, "name": "Carbon", "weight": 12.0107, "symbol": "C"},
    {"position": 7, "name": "Nitrogen", "weight": 14.0067, "symbol": "N"},
    {"position": 8, "name": "Oxygen", "weight": 15.9994, "symbol": "O"},
    {"position": 9, "name": "Fluorine", "weight": 18.9984, "symbol": "F"},
    {"position": 10, "name": "Neon", "weight": 20.1797, "symbol": "Ne"}
  ],
  "displayedColumns": ["position", "name", "weight", "symbol"],
  "filters": [{"key": "name", "type": "string", "value": "['Hydrogen','Nitrogen']"}]
}
```

