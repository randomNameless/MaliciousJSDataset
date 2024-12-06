/*! For license information please see common-221e929c.e9d8bf9be7a95bcbeca9.js.LICENSE.txt */
"use strict";(self.webpackChunk_vzmi_finance_cosaic=self.webpackChunk_vzmi_finance_cosaic||[]).push([[886],{4834:(t,e,s)=>{var o=s(4603);var a,r;a="undefined"!=typeof window?window:s.g,(r=void 0!==o.mE?o.mE:a.CIQ).ThemeHelper=r.ThemeHelper||function(t){this.params=t;var e=t.stx,s="#FFFFFF";e.chart.container&&(s=getComputedStyle(e.chart.container).backgroundColor,r.isTransparent(s)&&(s=e.containerColor)),this.settings.chart.Background.color=r.hexToRgba(s),this.settings.chart["Grid Lines"].color=r.hexToRgba(e.canvasStyle("stx_grid").color),this.settings.chart["Grid Dividers"].color=r.hexToRgba(e.canvasStyle("stx_grid_dark").color),this.settings.chart["Axis Text"].color=r.hexToRgba(e.canvasStyle("stx_xaxis").color),this.settings.chartTypes["Candle/Bar"].up.color=r.hexToRgba(e.canvasStyle("stx_candle_up").color),this.settings.chartTypes["Candle/Bar"].down.color=r.hexToRgba(e.canvasStyle("stx_candle_down").color),this.settings.chartTypes["Candle/Bar"].up.wick=r.hexToRgba(e.canvasStyle("stx_candle_shadow_up").color),this.settings.chartTypes["Candle/Bar"].down.wick=r.hexToRgba(e.canvasStyle("stx_candle_shadow_down").color),this.settings.chartTypes["Candle/Bar"].even.wick=r.hexToRgba(e.canvasStyle("stx_candle_shadow_even").color),this.settings.chartTypes["Candle/Bar"].up.border=r.hexToRgba(e.canvasStyle("stx_candle_up").borderLeftColor),this.settings.chartTypes["Candle/Bar"].down.border=r.hexToRgba(e.canvasStyle("stx_candle_down").borderLeftColor),r.isTransparent(e.canvasStyle("stx_candle_up").borderLeftColor)&&(this.settings.chartTypes["Candle/Bar"].up.border=null),r.isTransparent(e.canvasStyle("stx_candle_down").borderLeftColor)&&(this.settings.chartTypes["Candle/Bar"].down.border=null),this.settings.chartTypes.Line.color=r.hexToRgba(e.canvasStyle("stx_line_chart").color),this.settings.chartTypes.Mountain.color=r.hexToRgba(e.canvasStyle("stx_mountain_chart").backgroundColor),this.settings.chartTypes.Mountain.basecolor=r.hexToRgba(e.canvasStyle("stx_mountain_chart").color),this.settings.chartTypes["Candle/Bar"].even.color||(this.settings.chartTypes["Candle/Bar"].even.color=this.settings.chartTypes["Candle/Bar"].even.wick),this.settings.chartTypes["Candle/Bar"].even.border||(this.settings.chartTypes["Candle/Bar"].even.border=this.settings.chartTypes["Candle/Bar"].even.wick)},r.ThemeHelper.prototype.settings={chart:{Background:{color:null},"Grid Lines":{color:null},"Grid Dividers":{color:null},"Axis Text":{color:null}},chartTypes:{"Candle/Bar":{up:{color:null,wick:null,border:null},down:{color:null,wick:null,border:null},even:{color:null,wick:null,border:null}},Line:{color:null},Mountain:{color:null,basecolor:null}}},r.ThemeHelper.prototype.update=function(t){t||(t=this.params.stx);var e={stx_candle_up:{stx_candle_up:!0,stx_bar_up:!0,stx_hollow_candle_up:!0,stx_line_up:!0,stx_baseline_up:!0},stx_candle_down:{stx_candle_down:!0,stx_bar_down:!0,stx_hollow_candle_down:!0,stx_line_down:!0,stx_baseline_down:!0},stx_candle_even:{stx_candle_even:!0,stx_bar_even:!0,stx_hollow_candle_even:!0},stx_shadow_up:{stx_candle_shadow_up:!0},stx_shadow_down:{stx_candle_shadow_down:!0},stx_shadow_even:{stx_candle_shadow_even:!0},stx_line_chart:{stx_bar_chart:!0,stx_line_chart:!0},stx_grid:{stx_grid:!0},stx_grid_dark:{stx_grid_dark:!0},stx_xaxis:{stx_xaxis_dark:!0,stx_xaxis:!0,stx_yaxis:!0,stx_yaxis_dark:!0,stx_grid_border:!0},stx_mountain_chart:{stx_mountain_chart:!0},stx_market_session:{stx_market_session:!0}};function s(s,o,a){var r=e[s];for(var n in r)t.setStyle(n,o,a)}t.chart.container.style.backgroundColor=this.settings.chart.Background.color,t.defaultColor="",s("stx_grid","color",this.settings.chart["Grid Lines"].color),s("stx_grid_dark","color",this.settings.chart["Grid Dividers"].color),s("stx_xaxis","color",this.settings.chart["Axis Text"].color);var o=this.settings.chartTypes["Candle/Bar"];o.even||(o.even={color:null,wick:r.hexToRgba(t.canvasStyle("stx_candle_shadow_even").color),border:null}),s("stx_candle_up","color",o.up.color),s("stx_candle_down","color",o.down.color),s("stx_candle_even","color",o.even.color),s("stx_shadow_up","color",o.up.wick),s("stx_shadow_down","color",o.down.wick),s("stx_shadow_even","color",o.even.wick),t.setStyle("stx_candle_up","borderLeftColor",o.up.border),t.setStyle("stx_candle_down","borderLeftColor",o.down.border),s("stx_line_chart","color",this.settings.chartTypes.Line.color),t.setStyle("stx_mountain_chart","borderTopColor",r.hexToRgba(this.settings.chartTypes.Mountain.color,1)),t.setStyle("stx_mountain_chart","backgroundColor",r.hexToRgba(this.settings.chartTypes.Mountain.color,.5)),t.setStyle("stx_mountain_chart","color",r.hexToRgba(this.settings.chartTypes.Mountain.basecolor,.01)),t.draw()},r.ChartEngine.prototype.setThemeSettings=function(t){const e=r.getFromNS(this,"uiContext.topNode.multiChartContainer"),{breakpoint:s}=this.chart;if(e?(this.styles=e.styles[s]||{},e.styles[s]=this.styles):this.styles={},this.chart.container.style.backgroundColor="",this.defaultColor="",t){var o=new r.ThemeHelper({stx:this});o.settings=t,o.update()}this.updateListeners("theme"),this.changeOccurred("theme"),this.displayInitialized&&(this.headsUpHR(),this.clearPixelCache(),this.updateListeners("theme"),this.draw())}}}]);