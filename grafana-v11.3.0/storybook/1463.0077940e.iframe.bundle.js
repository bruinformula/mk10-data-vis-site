"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[1463],{"../grafana-e2e-selectors/src/selectors/components.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{X:function(){return Components}});var Components={RadioButton:{container:"data-testid radio-button"},Breadcrumbs:{breadcrumb:function(title){return"data-testid ".concat(title," breadcrumb")}},TimePicker:{openButton:"data-testid TimePicker Open Button",overlayContent:"data-testid TimePicker Overlay Content",fromField:"data-testid Time Range from field",toField:"data-testid Time Range to field",applyTimeRange:"data-testid TimePicker submit button",copyTimeRange:"data-testid TimePicker copy button",pasteTimeRange:"data-testid TimePicker paste button",calendar:{label:"data-testid Time Range calendar",openButton:"data-testid Open time range calendar",closeButton:"data-testid Close time range Calendar"},absoluteTimeRangeTitle:"data-testid-absolute-time-range-narrow"},DataSourcePermissions:{form:function(){return'form[name="addPermission"]'},roleType:"Role to add new permission to",rolePicker:"Built-in role picker",permissionLevel:"Permission Level"},DateTimePicker:{input:"data-testid date-time-input"},DataSource:{TestData:{QueryTab:{scenarioSelectContainer:"Test Data Query scenario select container",scenarioSelect:"Test Data Query scenario select",max:"TestData max",min:"TestData min",noise:"TestData noise",seriesCount:"TestData series count",spread:"TestData spread",startValue:"TestData start value",drop:"TestData drop values"}},DataSourceHttpSettings:{urlInput:"data-testid Datasource HTTP settings url"},Jaeger:{traceIDInput:"Trace ID"},Prometheus:{configPage:{connectionSettings:"Data source connection URL",manageAlerts:"prometheus-alerts-manager",scrapeInterval:"data-testid scrape interval",queryTimeout:"data-testid query timeout",defaultEditor:"data-testid default editor",disableMetricLookup:"disable-metric-lookup",prometheusType:"data-testid prometheus type",prometheusVersion:"data-testid prometheus version",cacheLevel:"data-testid cache level",incrementalQuerying:"prometheus-incremental-querying",queryOverlapWindow:"data-testid query overlap window",disableRecordingRules:"disable-recording-rules",customQueryParameters:"data-testid custom query parameters",httpMethod:"data-testid http method",exemplarsAddButton:"data-testid Add exemplar config button",internalLinkSwitch:"data-testid Internal link switch",codeModeMetricNamesSuggestionLimit:"data-testid code mode metric names suggestion limit"},queryEditor:{explain:"data-testid prometheus explain switch wrapper",editorToggle:"data-testid QueryEditorModeToggle",options:"data-testid prometheus options",legend:"data-testid prometheus legend wrapper",format:"data-testid prometheus format",step:"prometheus-step",type:"data-testid prometheus type",exemplars:"prometheus-exemplars",builder:{metricSelect:"data-testid metric select",hints:"data-testid prometheus hints",metricsExplorer:"data-testid metrics explorer",queryAdvisor:"data-testid query advisor"},code:{queryField:"data-testid prometheus query field",metricsCountInfo:"data-testid metrics count disclaimer",metricsBrowser:{openButton:"data-testid open metrics browser",selectMetric:"data-testid select a metric",seriesLimit:"data-testid series limit",metricList:"data-testid metric list",labelNamesFilter:"data-testid label names filter",labelValuesFilter:"data-testid label values filter",useQuery:"data-testid use query",useAsRateQuery:"data-testid use as rate query",validateSelector:"data-testid validate selector",clear:"data-testid clear"}}},exemplarMarker:"data-testid Exemplar marker",variableQueryEditor:{queryType:"data-testid query type",labelnames:{metricRegex:"data-testid label names metric regex"},labelValues:{labelSelect:"data-testid label values label select"},metricNames:{metricRegex:"data-testid metric names metric regex"},varQueryResult:"data-testid variable query result",seriesQuery:"data-testid prometheus series query",classicQuery:"data-testid prometheus classic query"},annotations:{minStep:"prometheus-annotation-min-step",title:"data-testid prometheus annotation title",tags:"data-testid prometheus annotation tags",text:"data-testid prometheus annotation text",seriesValueAsTimestamp:"data-testid prometheus annotation series value as timestamp"}}},Menu:{MenuComponent:function(title){return"".concat(title," menu")},MenuGroup:function(title){return"".concat(title," menu group")},MenuItem:function(title){return"".concat(title," menu item")},SubMenu:{container:"data-testid SubMenu container",icon:"data-testid SubMenu icon"}},Panels:{Panel:{title:function(title){return"data-testid Panel header ".concat(title)},content:"data-testid panel content",headerItems:function(item){return"data-testid Panel header item ".concat(item)},menuItems:function(item){return"data-testid Panel menu item ".concat(item)},menu:function(title){return"data-testid Panel menu ".concat(title)},containerByTitle:function(title){return"".concat(title," panel")},headerCornerInfo:function(mode){return"Panel header ".concat(mode)},status:function(status){return"data-testid Panel status ".concat(status)},loadingBar:function(){return"Panel loading bar"},HoverWidget:{container:"data-testid hover-header-container",dragIcon:"data-testid drag-icon"},PanelDataErrorMessage:"data-testid Panel data error message"},Visualization:{Graph:{container:"Graph container",VisualizationTab:{legendSection:"Legend section"},Legend:{legendItemAlias:function(name){return"gpl alias ".concat(name)},showLegendSwitch:"gpl show legend"},xAxis:{labels:function(){return"div.flot-x-axis > div.flot-tick-label"}}},BarGauge:{value:"Bar gauge value",valueV2:"data-testid Bar gauge value"},PieChart:{svgSlice:"data testid Pie Chart Slice"},Text:{container:function(){return".markdown-html"}},Table:{header:"table header",footer:"table-footer",body:"data-testid table body"}}},VizLegend:{seriesName:function(name){return"data-testid VizLegend series ".concat(name)}},Drawer:{General:{title:function(title){return"Drawer title ".concat(title)},expand:"Drawer expand",contract:"Drawer contract",close:"data-testid Drawer close",rcContentWrapper:function(){return".rc-drawer-content-wrapper"},subtitle:"data-testid drawer subtitle"},DashboardSaveDrawer:{saveButton:"data-testid Save dashboard drawer button",saveAsButton:"data-testid Save as dashboard drawer button",saveAsTitleInput:"Save dashboard title field"}},PanelEditor:{General:{content:"data-testid Panel editor content"},OptionsPane:{content:"data-testid Panel editor option pane content",select:"Panel editor option pane select",fieldLabel:function(type){return"".concat(type," field property editor")},fieldInput:function(title){return"data-testid Panel editor option pane field input ".concat(title)}},DataPane:{content:"data-testid Panel editor data pane content"},applyButton:"data-testid Apply changes and go back to dashboard",toggleVizPicker:"data-testid toggle-viz-picker",toggleVizOptions:"data-testid toggle-viz-options",toggleTableView:"data-testid toggle-table-view",showZoomField:"Map controls Show zoom control field property editor",showAttributionField:"Map controls Show attribution field property editor",showScaleField:"Map controls Show scale field property editor",showMeasureField:"Map controls Show measure tools field property editor",showDebugField:"Map controls Show debug field property editor",measureButton:"show measure tools"},PanelInspector:{Data:{content:"Panel inspector Data content"},Stats:{content:"Panel inspector Stats content"},Json:{content:"data-testid Panel inspector Json content"},Query:{content:"Panel inspector Query content",refreshButton:"Panel inspector Query refresh button",jsonObjectKeys:function(){return".json-formatter-key"}}},Tab:{title:function(title){return"data-testid Tab ".concat(title)},active:function(){return'[class*="-activeTabStyle"]'}},RefreshPicker:{runButton:"RefreshPicker run button",intervalButton:"RefreshPicker interval button",runButtonV2:"data-testid RefreshPicker run button",intervalButtonV2:"data-testid RefreshPicker interval button"},QueryTab:{content:"Query editor tab content",queryInspectorButton:"Query inspector button",queryHistoryButton:"data-testid query-history-button",addQuery:"data-testid query-tab-add-query",queryGroupTopSection:"data-testid query group top section",addExpression:"data-testid query-tab-add-expression"},QueryHistory:{queryText:"Query text"},QueryEditorRows:{rows:"Query editor row"},QueryEditorRow:{actionButton:function(title){return"data-testid ".concat(title)},title:function(refId){return"Query editor row title ".concat(refId)},container:function(refId){return"Query editor row ".concat(refId)}},AlertTab:{content:"data-testid Alert editor tab content"},AlertRules:{groupToggle:"data-testid group-collapse-toggle",toggle:"data-testid collapse-toggle",expandedContent:"data-testid expanded-content",previewButton:"data-testid alert-rule preview-button",ruleNameField:"data-testid alert-rule name-field",newFolderButton:"data-testid alert-rule new-folder-button",newFolderNameField:"data-testid alert-rule name-folder-name-field",newFolderNameCreateButton:"data-testid alert-rule name-folder-name-create-button",newEvaluationGroupButton:"data-testid alert-rule new-evaluation-group-button",newEvaluationGroupName:"data-testid alert-rule new-evaluation-group-name",newEvaluationGroupInterval:"data-testid alert-rule new-evaluation-group-interval",newEvaluationGroupCreate:"data-testid alert-rule new-evaluation-group-create-button"},Alert:{alert:function(severity){return"Alert ".concat(severity)},alertV2:function(severity){return"data-testid Alert ".concat(severity)}},TransformTab:{content:"data-testid Transform editor tab content",newTransform:function(name){return"data-testid New transform ".concat(name)},transformationEditor:function(name){return"data-testid Transformation editor ".concat(name)},transformationEditorDebugger:function(name){return"data-testid Transformation editor debugger ".concat(name)}},Transforms:{card:function(name){return"data-testid New transform ".concat(name)},disableTransformationButton:"data-testid Disable transformation button",Reduce:{modeLabel:"data-testid Transform mode label",calculationsLabel:"data-testid Transform calculations label"},SpatialOperations:{actionLabel:"root Action field property editor",locationLabel:"root Location Mode field property editor",location:{autoOption:"Auto location option",coords:{option:"Coords location option",latitudeFieldLabel:"root Latitude field field property editor",longitudeFieldLabel:"root Longitude field field property editor"},geohash:{option:"Geohash location option",geohashFieldLabel:"root Geohash field field property editor"},lookup:{option:"Lookup location option",lookupFieldLabel:"root Lookup field field property editor",gazetteerFieldLabel:"root Gazetteer field property editor"}}},searchInput:"data-testid search transformations",noTransformationsMessage:"data-testid no transformations message",addTransformationButton:"data-testid add transformation button",removeAllTransformationsButton:"data-testid remove all transformations button"},NavBar:{Configuration:{button:"Configuration"},Toggle:{button:"data-testid Toggle menu"},Reporting:{button:"Reporting"}},NavMenu:{Menu:"data-testid navigation mega-menu",item:"data-testid Nav menu item"},NavToolbar:{container:"data-testid Nav toolbar",shareDashboard:"data-testid Share dashboard",markAsFavorite:"data-testid Mark as favorite",editDashboard:{editButton:"data-testid Edit dashboard button",saveButton:"data-testid Save dashboard button",exitButton:"data-testid Exit edit mode button",settingsButton:"data-testid Dashboard settings",addRowButton:"data-testid Add row button",addLibraryPanelButton:"data-testid Add a panel from the panel library button",addVisualizationButton:"data-testid Add new visualization menu item",pastePanelButton:"data-testid Paste panel button",discardChangesButton:"data-testid Discard changes button",discardLibraryPanelButton:"data-testid Discard library panel button",unlinkLibraryPanelButton:"data-testid Unlink library panel button",saveLibraryPanelButton:"data-testid Save library panel button",backToDashboardButton:"data-testid Back to dashboard button"}},PageToolbar:{container:function(){return".page-toolbar"},item:function(tooltip){return"".concat(tooltip)},itemButton:function(title){return"data-testid ".concat(title)}},QueryEditorToolbarItem:{button:function(title){return"QueryEditor toolbar item button ".concat(title)}},BackButton:{backArrow:"data-testid Go Back"},OptionsGroup:{group:function(title){return title?"data-testid Options group ".concat(title):"data-testid Options group"},toggle:function(title){return title?"data-testid Options group ".concat(title," toggle"):"data-testid Options group toggle"}},PluginVisualization:{item:function(title){return"Plugin visualization item ".concat(title)},current:function(){return'[class*="-currentVisualizationItem"]'}},Select:{option:"data-testid Select option",toggleAllOptions:"data-testid toggle all options",input:function(){return'input[id*="time-options-input"]'},singleValue:function(){return'div[class*="-singleValue"]'}},FieldConfigEditor:{content:"Field config editor content"},OverridesConfigEditor:{content:"Field overrides editor content"},FolderPicker:{container:"Folder picker select container",containerV2:"data-testid Folder picker select container",input:"data-testid folder-picker-input"},ReadonlyFolderPicker:{container:"data-testid Readonly folder picker select container"},DataSourcePicker:{container:"data-testid Data source picker select container",input:function(){return'input[id="data-source-picker"]'},inputV2:"data-testid Select a data source",dataSourceList:"data-testid Data source list dropdown",advancedModal:{dataSourceList:"data-testid Data source list",builtInDataSourceList:"data-testid Built in data source list"}},TimeZonePicker:{container:"Time zone picker select container",containerV2:"data-testid Time zone picker select container",changeTimeSettingsButton:"data-testid Time zone picker Change time settings button"},WeekStartPicker:{container:"Choose starting day of the week",containerV2:"data-testid Choose starting day of the week",placeholder:"Choose starting day of the week"},TraceViewer:{spanBar:"data-testid SpanBar--wrapper"},QueryField:{container:"data-testid Query field"},QueryBuilder:{queryPatterns:"data-testid Query patterns",labelSelect:"data-testid Select label",inputSelect:"data-testid Select label-input",valueSelect:"data-testid Select value",matchOperatorSelect:"data-testid Select match operator"},ValuePicker:{button:function(name){return"data-testid Value picker button ".concat(name)},select:function(name){return"data-testid Value picker select ".concat(name)}},Search:{section:"Search section",sectionV2:"data-testid Search section",items:"Search items",itemsV2:"data-testid Search items",cards:"data-testid Search cards",collapseFolder:function(sectionId){return"data-testid Collapse folder ".concat(sectionId)},expandFolder:function(sectionId){return"data-testid Expand folder ".concat(sectionId)},dashboardItem:function(item){return"".concat(Components.Search.dashboardItems," ").concat(item)},dashboardCard:function(item){return"data-testid Search card ".concat(item)},folderHeader:function(folderName){return"data-testid Folder header ".concat(folderName)},folderContent:function(folderName){return"data-testid Folder content ".concat(folderName)},dashboardItems:"data-testid Dashboard search item"},DashboardLinks:{container:"data-testid Dashboard link container",dropDown:"data-testid Dashboard link dropdown",link:"data-testid Dashboard link"},LoadingIndicator:{icon:"data-testid Loading indicator"},CallToActionCard:{button:function(name){return"Call to action button ".concat(name)},buttonV2:function(name){return"data-testid Call to action button ".concat(name)}},DataLinksContextMenu:{singleLink:"data-testid Data link"},CodeEditor:{container:"data-testid Code editor container"},ReactMonacoEditor:{editorLazy:"data-testid ReactMonacoEditor editorLazy"},DashboardImportPage:{textarea:"data-testid-import-dashboard-textarea",submit:"data-testid-load-dashboard"},ImportDashboardForm:{name:"data-testid-import-dashboard-title",submit:"data-testid-import-dashboard-submit"},PanelAlertTabContent:{content:"data-testid Unified alert editor tab content"},VisualizationPreview:{card:function(name){return"data-testid suggestion-".concat(name)}},ColorSwatch:{name:"data-testid-colorswatch"},DashboardRow:{title:function(title){return"data-testid dashboard-row-title-".concat(title)}},UserProfile:{profileSaveButton:"data-testid-user-profile-save",preferencesSaveButton:"data-testid-shared-prefs-save",orgsTable:"data-testid-user-orgs-table",sessionsTable:"data-testid-user-sessions-table",extensionPointTabs:"data-testid-extension-point-tabs",extensionPointTab:function(tabId){return"data-testid-extension-point-tab-".concat(tabId)}},FileUpload:{inputField:"data-testid-file-upload-input-field",fileNameSpan:"data-testid-file-upload-file-name"},DebugOverlay:{wrapper:"debug-overlay"},OrgRolePicker:{input:"Role"},AnalyticsToolbarButton:{button:"Dashboard insights"},Variables:{variableOption:"data-testid variable-option",variableLinkWrapper:"data-testid variable-link-wrapper"},Annotations:{annotationsTypeInput:"data-testid annotations-type-input",annotationsChoosePanelInput:"data-testid choose-panels-input",editor:{testButton:"data-testid annotations-test-button",resultContainer:"data-testid annotations-query-result-container"}},Tooltip:{container:"data-testid tooltip"},ReturnToPrevious:{buttonGroup:"data-testid dismissable button group",backButton:"data-testid back",dismissButton:"data-testid dismiss"},SQLQueryEditor:{selectColumn:"data-testid select-column",selectAggregation:"data-testid select-aggregation",selectAlias:"data-testid select-alias",filterConjunction:"data-testid filter-conjunction",filterField:"data-testid filter-field",filterOperator:"data-testid filter-operator",headerTableSelector:"data-testid header-table-selector",headerFilterSwitch:"data-testid header-filter-switch",headerGroupSwitch:"data-testid header-group-switch",headerOrderSwitch:"data-testid header-order-switch",headerPreviewSwitch:"data-testid header-preview-switch"},EntityNotFound:{container:"data-testid entity-not-found"}}},"../grafana-e2e-selectors/src/selectors/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Tp:function(){return selectors}});var components=__webpack_require__("../grafana-e2e-selectors/src/selectors/components.ts"),selectors={pages:{Login:{url:"/login",username:"data-testid Username input field",password:"data-testid Password input field",submit:"data-testid Login button",skip:"data-testid Skip change password button"},Home:{url:"/"},DataSource:{name:"data-testid Data source settings page name input field",delete:"Data source settings page Delete button",readOnly:"data-testid Data source settings page read only message",saveAndTest:"data-testid Data source settings page Save and Test button",alert:"data-testid Data source settings page Alert"},DataSources:{url:"/datasources",dataSources:function(dataSourceName){return"Data source list item ".concat(dataSourceName)}},EditDataSource:{url:function(dataSourceUid){return"/datasources/edit/".concat(dataSourceUid)},settings:"Datasource settings page basic settings"},AddDataSource:{url:"/datasources/new",dataSourcePlugins:function(pluginName){return"Data source plugin item ".concat(pluginName)},dataSourcePluginsV2:function(pluginName){return"Add new data source ".concat(pluginName)}},ConfirmModal:{delete:"data-testid Confirm Modal Danger Button"},AddDashboard:{url:"/dashboard/new",itemButton:function(title){return"data-testid ".concat(title)},addNewPanel:"data-testid Add new panel",addNewRow:"data-testid Add new row",addNewPanelLibrary:"data-testid Add new panel from panel library"},Dashboard:{url:function(uid){return"/d/".concat(uid)},DashNav:{nav:"Dashboard navigation",navV2:"data-testid Dashboard navigation",publicDashboardTag:"data-testid public dashboard tag",shareButton:"data-testid share-button",scrollContainer:"data-testid Dashboard canvas scroll container",newShareButton:{container:"data-testid new share button",shareLink:"data-testid new share link-button",arrowMenu:"data-testid new share button arrow menu",menu:{container:"data-testid new share button menu",shareInternally:"data-testid new share button share internally",shareExternally:"data-testid new share button share externally",shareSnapshot:"data-testid new share button share snapshot"}},NewExportButton:{container:"data-testid new export button",arrowMenu:"data-testid new export button arrow menu",Menu:{container:"data-testid new export button menu",exportAsJson:"data-testid new export button export as json"}},playlistControls:{prev:"data-testid playlist previous dashboard button",stop:"data-testid playlist stop dashboard button",next:"data-testid playlist next dashboard button"}},Controls:"data-testid dashboard controls",SubMenu:{submenu:"Dashboard submenu",submenuItem:"data-testid template variable",submenuItemLabels:function(item){return"data-testid Dashboard template variables submenu Label ".concat(item)},submenuItemValueDropDownValueLinkTexts:function(item){return"data-testid Dashboard template variables Variable Value DropDown value link text ".concat(item)},submenuItemValueDropDownDropDown:"Variable options",submenuItemValueDropDownOptionTexts:function(item){return"data-testid Dashboard template variables Variable Value DropDown option text ".concat(item)},Annotations:{annotationsWrapper:"data-testid annotation-wrapper",annotationLabel:function(label){return"data-testid Dashboard annotations submenu Label ".concat(label)},annotationToggle:function(label){return"data-testid Dashboard annotations submenu Toggle ".concat(label)}}},Settings:{Actions:{close:"data-testid dashboard-settings-close"},General:{deleteDashBoard:"data-testid Dashboard settings page delete dashboard button",sectionItems:function(item){return"Dashboard settings section item ".concat(item)},saveDashBoard:"Dashboard settings aside actions Save button",saveAsDashBoard:"Dashboard settings aside actions Save As button",timezone:"Time zone picker select container",title:"General"},Annotations:{List:{addAnnotationCTA:components.X.CallToActionCard.button("Add annotation query"),addAnnotationCTAV2:components.X.CallToActionCard.buttonV2("Add annotation query"),annotations:"data-testid list-annotations"},Settings:{name:"data-testid Annotations settings name input"},NewAnnotation:{panelFilterSelect:"data-testid annotations-panel-filter",showInLabel:"data-testid show-in-label",previewInDashboard:"data-testid annotations-preview",delete:"data-testid annotations-delete",apply:"data-testid annotations-apply",enable:"data-testid annotation-enable",hide:"data-testid annotation-hide"}},Variables:{List:{addVariableCTA:components.X.CallToActionCard.button("Add variable"),addVariableCTAV2:components.X.CallToActionCard.buttonV2("Add variable"),newButton:"Variable editor New variable button",table:"Variable editor Table",tableRowNameFields:function(variableName){return"Variable editor Table Name field ".concat(variableName)},tableRowDefinitionFields:function(variableName){return"Variable editor Table Definition field ".concat(variableName)},tableRowArrowUpButtons:function(variableName){return"Variable editor Table ArrowUp button ".concat(variableName)},tableRowArrowDownButtons:function(variableName){return"Variable editor Table ArrowDown button ".concat(variableName)},tableRowDuplicateButtons:function(variableName){return"Variable editor Table Duplicate button ".concat(variableName)},tableRowRemoveButtons:function(variableName){return"Variable editor Table Remove button ".concat(variableName)}},Edit:{General:{headerLink:"Variable editor Header link",modeLabelNew:"Variable editor Header mode New",modeLabelEdit:"Variable editor Header mode Edit",generalNameInput:"Variable editor Form Name field",generalNameInputV2:"data-testid Variable editor Form Name field",generalTypeSelect:"Variable editor Form Type select",generalTypeSelectV2:"data-testid Variable editor Form Type select",generalLabelInput:"Variable editor Form Label field",generalLabelInputV2:"data-testid Variable editor Form Label field",generalHideSelect:"Variable editor Form Hide select",generalHideSelectV2:"data-testid Variable editor Form Hide select",selectionOptionsMultiSwitch:"data-testid Variable editor Form Multi switch",selectionOptionsIncludeAllSwitch:"data-testid Variable editor Form IncludeAll switch",selectionOptionsCustomAllInput:"data-testid Variable editor Form IncludeAll field",previewOfValuesOption:"data-testid Variable editor Preview of Values option",submitButton:"data-testid Variable editor Run Query button",applyButton:"data-testid Variable editor Apply button"},QueryVariable:{queryOptionsDataSourceSelect:components.X.DataSourcePicker.inputV2,queryOptionsRefreshSelect:"Variable editor Form Query Refresh select",queryOptionsRefreshSelectV2:"data-testid Variable editor Form Query Refresh select",queryOptionsRegExInput:"Variable editor Form Query RegEx field",queryOptionsRegExInputV2:"data-testid Variable editor Form Query RegEx field",queryOptionsSortSelect:"Variable editor Form Query Sort select",queryOptionsSortSelectV2:"data-testid Variable editor Form Query Sort select",queryOptionsQueryInput:"data-testid Variable editor Form Default Variable Query Editor textarea",valueGroupsTagsEnabledSwitch:"Variable editor Form Query UseTags switch",valueGroupsTagsTagsQueryInput:"Variable editor Form Query TagsQuery field",valueGroupsTagsTagsValuesQueryInput:"Variable editor Form Query TagsValuesQuery field"},ConstantVariable:{constantOptionsQueryInput:"Variable editor Form Constant Query field",constantOptionsQueryInputV2:"data-testid Variable editor Form Constant Query field"},DatasourceVariable:{datasourceSelect:"data-testid datasource variable datasource type"},TextBoxVariable:{textBoxOptionsQueryInput:"Variable editor Form TextBox Query field",textBoxOptionsQueryInputV2:"data-testid Variable editor Form TextBox Query field"},CustomVariable:{customValueInput:"data-testid custom-variable-input"},IntervalVariable:{intervalsValueInput:"data-testid interval variable intervals input",autoEnabledCheckbox:"data-testid interval variable auto value checkbox",stepCountIntervalSelect:"data-testid interval variable step count input",minIntervalInput:"data-testid interval variable mininum interval input"},GroupByVariable:{dataSourceSelect:components.X.DataSourcePicker.inputV2,infoText:"data-testid group by variable info text",modeToggle:"data-testid group by variable mode toggle"},AdHocFiltersVariable:{datasourceSelect:components.X.DataSourcePicker.inputV2,infoText:"data-testid ad-hoc filters variable info text",modeToggle:"data-testid ad-hoc filters variable mode toggle"}}}},Annotations:{marker:"data-testid annotation-marker"},Rows:{Repeated:{ConfigSection:{warningMessage:"data-testid Repeated rows warning message"}}}},Dashboards:{url:"/dashboards",dashboards:function(title){return"Dashboard search item ".concat(title)}},SaveDashboardAsModal:{newName:"Save dashboard title field",save:"Save dashboard button"},SaveDashboardModal:{save:"Dashboard settings Save Dashboard Modal Save button",saveVariables:"Dashboard settings Save Dashboard Modal Save variables checkbox",saveTimerange:"Dashboard settings Save Dashboard Modal Save timerange checkbox",saveRefresh:"Dashboard settings Save Dashboard Modal Save refresh checkbox"},SharePanelModal:{linkToRenderedImage:"Link to rendered image"},ShareDashboardModal:{PublicDashboard:{WillBePublicCheckbox:"data-testid public dashboard will be public checkbox",LimitedDSCheckbox:"data-testid public dashboard limited datasources checkbox",CostIncreaseCheckbox:"data-testid public dashboard cost may increase checkbox",PauseSwitch:"data-testid public dashboard pause switch",EnableAnnotationsSwitch:"data-testid public dashboard on off switch for annotations",CreateButton:"data-testid public dashboard create button",DeleteButton:"data-testid public dashboard delete button",CopyUrlInput:"data-testid public dashboard copy url input",CopyUrlButton:"data-testid public dashboard copy url button",SettingsDropdown:"data-testid public dashboard settings dropdown",TemplateVariablesWarningAlert:"data-testid public dashboard disabled template variables alert",UnsupportedDataSourcesWarningAlert:"data-testid public dashboard unsupported data sources alert",NoUpsertPermissionsWarningAlert:"data-testid public dashboard no upsert permissions alert",EnableTimeRangeSwitch:"data-testid public dashboard on off switch for time range",EmailSharingConfiguration:{Container:"data-testid email sharing config container",ShareType:"data-testid public dashboard share type",EmailSharingInput:"data-testid public dashboard email sharing input",EmailSharingInviteButton:"data-testid public dashboard email sharing invite button",EmailSharingList:"data-testid public dashboard email sharing list",DeleteEmail:"data-testid public dashboard delete email button",ReshareLink:"data-testid public dashboard reshare link button"}},SnapshotScene:{url:function(key){return"/dashboard/snapshot/".concat(key)},PublishSnapshot:"data-testid publish snapshot button",CopyUrlButton:"data-testid snapshot copy url button",CopyUrlInput:"data-testid snapshot copy url input"}},ShareDashboardDrawer:{ShareInternally:{container:"data-testid share internally drawer container",lockTimeRangeSwitch:"data-testid share internally lock time range switch",shortenUrlSwitch:"data-testid share internally shorten url switch",copyUrlButton:"data-testid share internally copy url button"},ShareExternally:{container:"data-testid share externally drawer container",publicAlert:"data-testid public share alert",emailSharingAlert:"data-testid email share alert",shareTypeSelect:"data-testid share externally share type select",Creation:{PublicShare:{createButton:"data-testid public share dashboard create button",cancelButton:"data-testid public share dashboard cancel button"},EmailShare:{createButton:"data-testid email share dashboard create button",cancelButton:"data-testid email share dashboard cancel button"},willBePublicCheckbox:"data-testid share dashboard will be public checkbox"},Configuration:{enableTimeRangeSwitch:"data-testid share externally enable time range switch",enableAnnotationsSwitch:"data-testid share externally enable annotations switch",copyUrlButton:"data-testid share externally copy url button",revokeAccessButton:"data-testid share externally revoke access button",toggleAccessButton:"data-testid share externally pause or resume access button"}},ShareSnapshot:{url:function(key){return"/dashboard/snapshot/".concat(key)},container:"data-testid share snapshot drawer container",publishSnapshot:"data-testid share snapshot publish button",copyUrlButton:"data-testid share snapshot copy url button"}},ExportDashboardDrawer:{ExportAsJson:{container:"data-testid export as json drawer container",codeEditor:"data-testid export as json code editor",exportExternallyToggle:"data-testid export as json externally switch",saveToFileButton:"data-testid export as json save to file button",copyToClipboardButton:"data-testid export as json copy to clipboard button",cancelButton:"data-testid export as json cancel button"}},PublicDashboard:{page:"public-dashboard-page",NotAvailable:{container:"public-dashboard-not-available",title:"public-dashboard-title",pausedDescription:"public-dashboard-paused-description"},footer:"public-dashboard-footer"},PublicDashboardScene:{loadingPage:"public-dashboard-scene-loading-page",page:"public-dashboard-scene-page",controls:"public-dashboard-controls"},RequestViewAccess:{form:"request-view-access-form",recipientInput:"request-view-access-recipient-input",submitButton:"request-view-access-submit-button"},PublicDashboardConfirmAccess:{submitButton:"data-testid confirm-access-submit-button"},Explore:{url:"/explore",General:{container:"data-testid Explore",graph:"Explore Graph",table:"Explore Table",scrollView:"data-testid explorer scroll view"},QueryHistory:{container:"data-testid QueryHistory"}},SoloPanel:{url:function(page){return"/d-solo/".concat(page)}},PluginsList:{page:"Plugins list page",list:"Plugins list",listItem:"Plugins list item",signatureErrorNotice:"data-testid Unsigned plugins notice"},PluginPage:{page:"Plugin page",signatureInfo:"data-testid Plugin signature info",disabledInfo:"data-testid Plugin disabled info"},PlaylistForm:{name:"Playlist name",interval:"Playlist interval",itemDelete:"data-testid playlist-form-delete-item"},BrowseDashboards:{table:{body:"data-testid browse-dashboards-table",row:function(name){return"data-testid browse dashboards row ".concat(name)},checkbox:function(uid){return"data-testid ".concat(uid," checkbox")}},NewFolderForm:{form:"data-testid new folder form",nameInput:"data-testid new-folder-name-input",createButton:"data-testid new-folder-create-button"}},Search:{url:"/?search=openn",FolderView:{url:"/?search=open&layout=folders"}},PublicDashboards:{ListItem:{linkButton:"public-dashboard-link-button",configButton:"public-dashboard-configuration-button",trashcanButton:"public-dashboard-remove-button",pauseSwitch:"data-testid public dashboard pause switch"}},UserListPage:{tabs:{allUsers:"data-testid all-users-tab",orgUsers:"data-testid org-users-tab",anonUserDevices:"data-testid anon-user-devices-tab",publicDashboardsUsers:"data-testid public-dashboards-users-tab",users:"data-testid users-tab"},org:{url:"/org/users"},admin:{url:"/admin/users"},publicDashboards:{container:"data-testid public-dashboards-users-list"},UserListAdminPage:{container:"data-testid user-list-admin-page"},UsersListPage:{container:"data-testid users-list-page"},UserAnonListPage:{container:"data-testid user-anon-list-page"},UsersListPublicDashboardsPage:{container:"data-testid users-list-public-dashboards-page",DashboardsListModal:{listItem:function(uid){return"data-testid dashboards-list-item-".concat(uid)}}}},ProfilePage:{url:"/profile"}},components:components.X}}}]);