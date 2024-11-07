---
aliases:
  - ../../panels/visualizations/pie-chart-pane/
  - ../../visualizations/pie-chart-panel/
keywords:
  - grafana
  - pie chart
labels:
  products:
    - cloud
    - enterprise
    - oss
description: Configure options for Grafana's pie chart visualization
title: Pie chart
weight: 100
refs:
  calculation-types:
    - pattern: /docs/grafana/
      destination: /docs/grafana/<GRAFANA_VERSION>/panels-visualizations/query-transform-data/calculation-types/
    - pattern: /docs/grafana-cloud/
      destination: /docs/grafana-cloud/visualizations/panels-visualizations/query-transform-data/calculation-types/
---

# Pie chart

A pie chart is a graph that displays data as segments of a circle proportional to the whole, making it look like a sliced pie. Each slice corresponds to a value or measurement.

{{< figure src="/static/img/docs/pie-chart-panel/pie-chart-example.png" max-width="1200px" lightbox="true" alt="Pie charts" >}}

The pie chart visualization is ideal when you have data that adds up to a total and you want to show the proportion of each value compared to other slices, as well as to the whole of the pie.

You can use a pie chart if you need to compare:

- Browser share distribution in the market
- Incident causes per category
- Network traffic sources
- User demographics

## Configure a pie chart visualization

The following video guides you through the creation steps and common customizations of pie chart visualizations and is great for beginners:

{{< youtube id="A_lDhM9w4_g" >}}

{{< docs/play title="Grafana Bar Charts and Pie Charts" url="https://play.grafana.org/d/ktMs4D6Mk/" >}}

## Supported data formats

The pie chart is different from other visualizations in that it will only display one pie, regardless of the number of datasets, fields, or records queried in it.

To create a pie chart visualization, you need a dataset containing a set of numeric values either in rows, columns, or both.

### Example - One row

The easiest way to provide data for a pie chart visualization is in a dataset with a single record (or row) containing the fields (or columns) that you want in the pie, as in the following example. The default settings of the pie chart visualization automatically display each column as a slice of the pie.

| Value1 | Value2 | Value3 | Optional |
| ------ | ------ | ------ | -------- |
| 5      | 3      | 2      | Sums10   |

![Pie chart visualization with multiple values in a single row](/media/docs/grafana/panels-visualizations/screenshot-grafana-12.1-pie-example1.png)

### Example - Multiple rows

If you need to use numeric data that's in multiple rows, the default **Show** parameter of the visualization [Value options](#value-options) is set to **Calculate** and use data from the last row.

| Value | Label  |
| ----- | ------ |
| 5     | Value1 |
| 3     | Value2 |
| 2     | Value3 |

![Pie chart visualization with multiple row values showing the last one](/media/docs/grafana/panels-visualizations/screenshot-grafana-12.1-pie-example2.png)

By default, the visualization is configured to [calculate](#value-options) a single value per column or series and to display only the last row of data.

To allow values in multiple rows to be displayed, change the **Show** setting in the [Value options](#value-options) from **Calculate** to **All values**.

![Pie chart visualization with multiple row values showing all values](/media/docs/grafana/panels-visualizations/screenshot-grafana-12.1-pie-example3.png)

### Example - Multiple rows and columns

If your dataset contains multiple rows and columns with numeric data, by default only the last row's values are summed.

| Value1 | Value2 | Value3 | Optional |
| ------ | ------ | ------ | -------- |
| 5      | 3      | 2      | Sums10   |
| 10     | 6      | 4      | Sums20   |
| 20     | 8      | 2      | Sums30   |

![Pie chart visualization with multiple rows and columns showing the last one](/media/docs/grafana/panels-visualizations/screenshot-grafana-12.1-pie-example4.png)

If you want to display all the cells, change the **Show** setting in the [Value options](#value-options) from **Calculate** to **All values**. This also labels the elements by concatenating all the text fields (if you have any) with the column name.

![Pie chart visualization with multiple rows and columns showing the all values](/media/docs/grafana/panels-visualizations/screenshot-grafana-12.1-pie-example5.png)

If you want to display only the values from a given field (or column), once the **Show** setting in the [Value options](#value-options) is set to **All values**, set the **Fields** option to the column you wish to sum in the display. The value labels are also concatenated as indicated before.

![Pie chart visualization with multiple rows and columns showing values from one column](/media/docs/grafana/panels-visualizations/screenshot-grafana-12.1-pie-example6.png)

## Panel options

{{< docs/shared lookup="visualizations/panel-options.md" source="grafana" version="<GRAFANA_VERSION>" >}}

## Value options

Use the following options to refine the value in your visualization.

### Show

Choose how much information to show.

- **Calculate -** Reduces each value to a single value per series.
- **All values -** Displays every value from a single series.

### Calculation

Select a calculation to reduce each series when Calculate has been selected. For information about available calculations, refer to [Calculation types](ref:calculation-types).

### Limit

When displaying every value from a single series, this limits the number of values displayed.

### Fields

Select which field or fields to display in the visualization. Each field name is available on the list, or you can select one of the following options:

- **Numeric fields -** All fields with numerical values.
- **All fields -** All fields that are not removed by transformations.
- **Time -** All fields with time values.

## Pie chart options

Use these options to refine how your visualization looks.

### Pie chart type

Select the pie chart display style.

### Pie

![Pie type chart](/static/img/docs/pie-chart-panel/pie-type-chart-7-5.png)

### Donut

![Donut type chart](/static/img/docs/pie-chart-panel/donut-type-chart-7-5.png)

### Labels

Select labels to display on the pie chart. You can select more than one.

- **Name -** The series or field name.
- **Percent -** The percentage of the whole.
- **Value -** The raw numerical value.

Labels are displayed in white over the body of the chart. You might need to select darker chart colors to make them more visible. Long names or numbers might be clipped.

The following example shows a pie chart with **Name** and **Percent** labels displayed.

![Pie chart labels](/static/img/docs/pie-chart-panel/pie-chart-labels-7-5.png)

## Tooltip options

{{< docs/shared lookup="visualizations/tooltip-options-1.md" source="grafana" version="<GRAFANA_VERSION>" >}}

## Legend options

Use these settings to define how the legend appears in your visualization. For more information about the legend, refer to [Configure a legend]({{< relref "../../configure-legend" >}}).

### Visibility

Toggle the switch to turn the legend on or off.

### Mode

Use these settings to define how the legend appears in your visualization.

- **List -** Displays the legend as a list. This is a default display mode of the legend.
- **Table -** Displays the legend as a table.

### Placement

Choose where to display the legend.

- **Bottom -** Below the graph.
- **Right -** To the right of the graph.

#### Width

Control how wide the legend is when placed on the right side of the visualization. This option is only displayed if you set the legend placement to **Right**.

### Values

Select values to display in the legend. You can select more than one.

- **Percent:** The percentage of the whole.
- **Value:** The raw numerical value.

## Standard options

{{< docs/shared lookup="visualizations/standard-options.md" source="grafana" version="<GRAFANA_VERSION>" >}}

## Data links

{{< docs/shared lookup="visualizations/datalink-options.md" source="grafana" version="<GRAFANA_VERSION>" >}}

## Value mappings

{{< docs/shared lookup="visualizations/value-mappings-options.md" source="grafana" version="<GRAFANA_VERSION>" >}}

## Field overrides

{{< docs/shared lookup="visualizations/overrides-options.md" source="grafana" version="<GRAFANA_VERSION>" >}}