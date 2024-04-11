/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 10453.0, "minX": 0.0, "maxY": 14568.0, "series": [{"data": [[0.0, 10453.0], [0.1, 10453.0], [0.2, 10453.0], [0.3, 10453.0], [0.4, 10453.0], [0.5, 10453.0], [0.6, 10453.0], [0.7, 10453.0], [0.8, 10454.0], [0.9, 10454.0], [1.0, 10457.0], [1.1, 10457.0], [1.2, 10458.0], [1.3, 10458.0], [1.4, 10458.0], [1.5, 10458.0], [1.6, 10459.0], [1.7, 10459.0], [1.8, 10459.0], [1.9, 10459.0], [2.0, 10460.0], [2.1, 10460.0], [2.2, 10462.0], [2.3, 10462.0], [2.4, 10462.0], [2.5, 10463.0], [2.6, 10463.0], [2.7, 10463.0], [2.8, 10463.0], [2.9, 10463.0], [3.0, 10463.0], [3.1, 10463.0], [3.2, 10463.0], [3.3, 10463.0], [3.4, 10463.0], [3.5, 10463.0], [3.6, 10463.0], [3.7, 10463.0], [3.8, 10463.0], [3.9, 10464.0], [4.0, 10464.0], [4.1, 10464.0], [4.2, 10464.0], [4.3, 10464.0], [4.4, 10464.0], [4.5, 10464.0], [4.6, 10464.0], [4.7, 10465.0], [4.8, 10465.0], [4.9, 10467.0], [5.0, 10467.0], [5.1, 10467.0], [5.2, 10467.0], [5.3, 10467.0], [5.4, 10467.0], [5.5, 10467.0], [5.6, 10467.0], [5.7, 10468.0], [5.8, 10468.0], [5.9, 10468.0], [6.0, 10468.0], [6.1, 10468.0], [6.2, 10468.0], [6.3, 10468.0], [6.4, 10468.0], [6.5, 10468.0], [6.6, 10468.0], [6.7, 10469.0], [6.8, 10469.0], [6.9, 10469.0], [7.0, 10469.0], [7.1, 10469.0], [7.2, 10469.0], [7.3, 10469.0], [7.4, 10469.0], [7.5, 10469.0], [7.6, 10469.0], [7.7, 10469.0], [7.8, 10469.0], [7.9, 10470.0], [8.0, 10470.0], [8.1, 10470.0], [8.2, 10470.0], [8.3, 10470.0], [8.4, 10470.0], [8.5, 10470.0], [8.6, 10470.0], [8.7, 10470.0], [8.8, 10470.0], [8.9, 10470.0], [9.0, 10470.0], [9.1, 10470.0], [9.2, 10470.0], [9.3, 10471.0], [9.4, 10471.0], [9.5, 10471.0], [9.6, 10471.0], [9.7, 10471.0], [9.8, 10471.0], [9.9, 10471.0], [10.0, 10471.0], [10.1, 10471.0], [10.2, 10471.0], [10.3, 10472.0], [10.4, 10472.0], [10.5, 10472.0], [10.6, 10472.0], [10.7, 10472.0], [10.8, 10472.0], [10.9, 10472.0], [11.0, 10472.0], [11.1, 10472.0], [11.2, 10472.0], [11.3, 10472.0], [11.4, 10472.0], [11.5, 10472.0], [11.6, 10472.0], [11.7, 10472.0], [11.8, 10472.0], [11.9, 10472.0], [12.0, 10472.0], [12.1, 10472.0], [12.2, 10472.0], [12.3, 10472.0], [12.4, 10472.0], [12.5, 10473.0], [12.6, 10473.0], [12.7, 10473.0], [12.8, 10473.0], [12.9, 10473.0], [13.0, 10473.0], [13.1, 10473.0], [13.2, 10473.0], [13.3, 10473.0], [13.4, 10473.0], [13.5, 10473.0], [13.6, 10473.0], [13.7, 10473.0], [13.8, 10473.0], [13.9, 10473.0], [14.0, 10473.0], [14.1, 10473.0], [14.2, 10473.0], [14.3, 10473.0], [14.4, 10473.0], [14.5, 10473.0], [14.6, 10473.0], [14.7, 10473.0], [14.8, 10473.0], [14.9, 10473.0], [15.0, 10473.0], [15.1, 10474.0], [15.2, 10474.0], [15.3, 10474.0], [15.4, 10474.0], [15.5, 10474.0], [15.6, 10474.0], [15.7, 10474.0], [15.8, 10474.0], [15.9, 10474.0], [16.0, 10474.0], [16.1, 10474.0], [16.2, 10474.0], [16.3, 10474.0], [16.4, 10474.0], [16.5, 10474.0], [16.6, 10474.0], [16.7, 10474.0], [16.8, 10475.0], [16.9, 10475.0], [17.0, 10475.0], [17.1, 10475.0], [17.2, 10475.0], [17.3, 10475.0], [17.4, 10475.0], [17.5, 10475.0], [17.6, 10476.0], [17.7, 10476.0], [17.8, 10476.0], [17.9, 10476.0], [18.0, 10476.0], [18.1, 10476.0], [18.2, 10476.0], [18.3, 10476.0], [18.4, 10476.0], [18.5, 10476.0], [18.6, 10476.0], [18.7, 10476.0], [18.8, 10476.0], [18.9, 10476.0], [19.0, 10476.0], [19.1, 10476.0], [19.2, 10476.0], [19.3, 10477.0], [19.4, 10477.0], [19.5, 10477.0], [19.6, 10477.0], [19.7, 10477.0], [19.8, 10477.0], [19.9, 10477.0], [20.0, 10477.0], [20.1, 10477.0], [20.2, 10477.0], [20.3, 10477.0], [20.4, 10477.0], [20.5, 10477.0], [20.6, 10477.0], [20.7, 10477.0], [20.8, 10477.0], [20.9, 10477.0], [21.0, 10477.0], [21.1, 10477.0], [21.2, 10477.0], [21.3, 10477.0], [21.4, 10477.0], [21.5, 10477.0], [21.6, 10478.0], [21.7, 10478.0], [21.8, 10478.0], [21.9, 10478.0], [22.0, 10478.0], [22.1, 10478.0], [22.2, 10478.0], [22.3, 10478.0], [22.4, 10478.0], [22.5, 10479.0], [22.6, 10479.0], [22.7, 10479.0], [22.8, 10479.0], [22.9, 10479.0], [23.0, 10479.0], [23.1, 10481.0], [23.2, 10481.0], [23.3, 10482.0], [23.4, 10482.0], [23.5, 10482.0], [23.6, 10482.0], [23.7, 10482.0], [23.8, 10482.0], [23.9, 10482.0], [24.0, 10482.0], [24.1, 10483.0], [24.2, 10483.0], [24.3, 10483.0], [24.4, 10483.0], [24.5, 10483.0], [24.6, 10483.0], [24.7, 10567.0], [24.8, 10567.0], [24.9, 10567.0], [25.0, 10567.0], [25.1, 10567.0], [25.2, 10567.0], [25.3, 10568.0], [25.4, 10568.0], [25.5, 10571.0], [25.6, 10571.0], [25.7, 10577.0], [25.8, 10577.0], [25.9, 10578.0], [26.0, 10578.0], [26.1, 10578.0], [26.2, 10578.0], [26.3, 10578.0], [26.4, 10578.0], [26.5, 10578.0], [26.6, 10578.0], [26.7, 10578.0], [26.8, 10578.0], [26.9, 10578.0], [27.0, 10578.0], [27.1, 10578.0], [27.2, 10578.0], [27.3, 10579.0], [27.4, 10579.0], [27.5, 10579.0], [27.6, 10579.0], [27.7, 10579.0], [27.8, 10579.0], [27.9, 10580.0], [28.0, 10580.0], [28.1, 10580.0], [28.2, 10580.0], [28.3, 10581.0], [28.4, 10581.0], [28.5, 10582.0], [28.6, 10582.0], [28.7, 10582.0], [28.8, 10582.0], [28.9, 10582.0], [29.0, 10582.0], [29.1, 10582.0], [29.2, 10582.0], [29.3, 10582.0], [29.4, 10582.0], [29.5, 10582.0], [29.6, 10582.0], [29.7, 10582.0], [29.8, 10583.0], [29.9, 10583.0], [30.0, 10583.0], [30.1, 10583.0], [30.2, 10583.0], [30.3, 10583.0], [30.4, 10583.0], [30.5, 10583.0], [30.6, 10584.0], [30.7, 10584.0], [30.8, 10584.0], [30.9, 10584.0], [31.0, 10584.0], [31.1, 10584.0], [31.2, 10584.0], [31.3, 10584.0], [31.4, 10584.0], [31.5, 10585.0], [31.6, 10585.0], [31.7, 10585.0], [31.8, 10585.0], [31.9, 10585.0], [32.0, 10585.0], [32.1, 10585.0], [32.2, 10585.0], [32.3, 10585.0], [32.4, 10585.0], [32.5, 10586.0], [32.6, 10586.0], [32.7, 10586.0], [32.8, 10586.0], [32.9, 10586.0], [33.0, 10586.0], [33.1, 10586.0], [33.2, 10586.0], [33.3, 10586.0], [33.4, 10586.0], [33.5, 10586.0], [33.6, 10586.0], [33.7, 10586.0], [33.8, 10586.0], [33.9, 10586.0], [34.0, 10586.0], [34.1, 10587.0], [34.2, 10587.0], [34.3, 10587.0], [34.4, 10587.0], [34.5, 10587.0], [34.6, 10587.0], [34.7, 10588.0], [34.8, 10588.0], [34.9, 10588.0], [35.0, 10588.0], [35.1, 10588.0], [35.2, 10588.0], [35.3, 10588.0], [35.4, 10588.0], [35.5, 10588.0], [35.6, 10588.0], [35.7, 10588.0], [35.8, 10588.0], [35.9, 10589.0], [36.0, 10589.0], [36.1, 10590.0], [36.2, 10590.0], [36.3, 10591.0], [36.4, 10591.0], [36.5, 10591.0], [36.6, 10591.0], [36.7, 10591.0], [36.8, 10591.0], [36.9, 10592.0], [37.0, 10592.0], [37.1, 10592.0], [37.2, 10592.0], [37.3, 10592.0], [37.4, 10592.0], [37.5, 10592.0], [37.6, 10592.0], [37.7, 10592.0], [37.8, 10592.0], [37.9, 10592.0], [38.0, 10592.0], [38.1, 10592.0], [38.2, 10592.0], [38.3, 10592.0], [38.4, 10592.0], [38.5, 10646.0], [38.6, 10646.0], [38.7, 10646.0], [38.8, 10646.0], [38.9, 10656.0], [39.0, 10656.0], [39.1, 10657.0], [39.2, 10657.0], [39.3, 10657.0], [39.4, 10657.0], [39.5, 10657.0], [39.6, 10657.0], [39.7, 10657.0], [39.8, 10657.0], [39.9, 10657.0], [40.0, 10657.0], [40.1, 10658.0], [40.2, 10658.0], [40.3, 10660.0], [40.4, 10660.0], [40.5, 10661.0], [40.6, 10661.0], [40.7, 10661.0], [40.8, 10661.0], [40.9, 10662.0], [41.0, 10662.0], [41.1, 10663.0], [41.2, 10663.0], [41.3, 10664.0], [41.4, 10664.0], [41.5, 10664.0], [41.6, 10664.0], [41.7, 10664.0], [41.8, 10664.0], [41.9, 10665.0], [42.0, 10665.0], [42.1, 10665.0], [42.2, 10665.0], [42.3, 10665.0], [42.4, 10665.0], [42.5, 10666.0], [42.6, 10666.0], [42.7, 10666.0], [42.8, 10666.0], [42.9, 10666.0], [43.0, 10666.0], [43.1, 10667.0], [43.2, 10667.0], [43.3, 10667.0], [43.4, 10667.0], [43.5, 10671.0], [43.6, 10671.0], [43.7, 10675.0], [43.8, 10675.0], [43.9, 10675.0], [44.0, 10675.0], [44.1, 10675.0], [44.2, 10675.0], [44.3, 10677.0], [44.4, 10677.0], [44.5, 10679.0], [44.6, 10679.0], [44.7, 10680.0], [44.8, 10680.0], [44.9, 10684.0], [45.0, 10684.0], [45.1, 10786.0], [45.2, 10786.0], [45.3, 10788.0], [45.4, 10788.0], [45.5, 10790.0], [45.6, 10790.0], [45.7, 10794.0], [45.8, 10794.0], [45.9, 10794.0], [46.0, 10794.0], [46.1, 11670.0], [46.2, 11670.0], [46.3, 11680.0], [46.4, 11680.0], [46.5, 11680.0], [46.6, 11680.0], [46.7, 11680.0], [46.8, 11680.0], [46.9, 11680.0], [47.0, 11680.0], [47.1, 11681.0], [47.2, 11681.0], [47.3, 11681.0], [47.4, 11681.0], [47.5, 11684.0], [47.6, 11684.0], [47.7, 11685.0], [47.8, 11685.0], [47.9, 11687.0], [48.0, 11687.0], [48.1, 11688.0], [48.2, 11688.0], [48.3, 11689.0], [48.4, 11689.0], [48.5, 11689.0], [48.6, 11689.0], [48.7, 11689.0], [48.8, 11689.0], [48.9, 11690.0], [49.0, 11690.0], [49.1, 11690.0], [49.2, 11690.0], [49.3, 11691.0], [49.4, 11691.0], [49.5, 11691.0], [49.6, 11691.0], [49.7, 11701.0], [49.8, 11701.0], [49.9, 11701.0], [50.0, 11701.0], [50.1, 11708.0], [50.2, 11708.0], [50.3, 11710.0], [50.4, 11710.0], [50.5, 11715.0], [50.6, 11715.0], [50.7, 11877.0], [50.8, 11877.0], [50.9, 11877.0], [51.0, 11877.0], [51.1, 11877.0], [51.2, 11877.0], [51.3, 11877.0], [51.4, 11877.0], [51.5, 11881.0], [51.6, 11881.0], [51.7, 11887.0], [51.8, 11887.0], [51.9, 11887.0], [52.0, 11887.0], [52.1, 11887.0], [52.2, 11887.0], [52.3, 11887.0], [52.4, 11887.0], [52.5, 11887.0], [52.6, 11887.0], [52.7, 11887.0], [52.8, 11887.0], [52.9, 11888.0], [53.0, 11888.0], [53.1, 11888.0], [53.2, 11888.0], [53.3, 11888.0], [53.4, 11888.0], [53.5, 11890.0], [53.6, 11890.0], [53.7, 11891.0], [53.8, 11891.0], [53.9, 11891.0], [54.0, 11891.0], [54.1, 11891.0], [54.2, 11891.0], [54.3, 11891.0], [54.4, 11891.0], [54.5, 11891.0], [54.6, 11891.0], [54.7, 11891.0], [54.8, 11891.0], [54.9, 11891.0], [55.0, 11891.0], [55.1, 11892.0], [55.2, 11892.0], [55.3, 11892.0], [55.4, 11892.0], [55.5, 11892.0], [55.6, 11892.0], [55.7, 11893.0], [55.8, 11893.0], [55.9, 11893.0], [56.0, 11893.0], [56.1, 11893.0], [56.2, 11893.0], [56.3, 11894.0], [56.4, 11894.0], [56.5, 11894.0], [56.6, 11894.0], [56.7, 11894.0], [56.8, 11894.0], [56.9, 11894.0], [57.0, 11894.0], [57.1, 11894.0], [57.2, 11894.0], [57.3, 11894.0], [57.4, 11894.0], [57.5, 11894.0], [57.6, 11894.0], [57.7, 11894.0], [57.8, 11894.0], [57.9, 11894.0], [58.0, 11894.0], [58.1, 11895.0], [58.2, 11895.0], [58.3, 11895.0], [58.4, 11895.0], [58.5, 11895.0], [58.6, 11895.0], [58.7, 11895.0], [58.8, 11895.0], [58.9, 11895.0], [59.0, 11895.0], [59.1, 11895.0], [59.2, 11895.0], [59.3, 11895.0], [59.4, 11895.0], [59.5, 11896.0], [59.6, 11896.0], [59.7, 11896.0], [59.8, 11896.0], [59.9, 11896.0], [60.0, 11896.0], [60.1, 11896.0], [60.2, 11896.0], [60.3, 11896.0], [60.4, 11896.0], [60.5, 11896.0], [60.6, 11896.0], [60.7, 11897.0], [60.8, 11897.0], [60.9, 11897.0], [61.0, 11897.0], [61.1, 11897.0], [61.2, 11897.0], [61.3, 11897.0], [61.4, 11897.0], [61.5, 11897.0], [61.6, 11897.0], [61.7, 11898.0], [61.8, 11898.0], [61.9, 11898.0], [62.0, 11898.0], [62.1, 11898.0], [62.2, 11898.0], [62.3, 11898.0], [62.4, 11898.0], [62.5, 11900.0], [62.6, 11900.0], [62.7, 11900.0], [62.8, 11900.0], [62.9, 11900.0], [63.0, 11900.0], [63.1, 11901.0], [63.2, 11901.0], [63.3, 11901.0], [63.4, 11901.0], [63.5, 11901.0], [63.6, 11901.0], [63.7, 11901.0], [63.8, 11901.0], [63.9, 11901.0], [64.0, 11901.0], [64.1, 11901.0], [64.2, 11901.0], [64.3, 12001.0], [64.4, 12001.0], [64.5, 12001.0], [64.6, 12001.0], [64.7, 12005.0], [64.8, 12005.0], [64.9, 12011.0], [65.0, 12011.0], [65.1, 12011.0], [65.2, 12011.0], [65.3, 12011.0], [65.4, 12011.0], [65.5, 12011.0], [65.6, 12011.0], [65.7, 12011.0], [65.8, 12011.0], [65.9, 12012.0], [66.0, 12012.0], [66.1, 12012.0], [66.2, 12012.0], [66.3, 12015.0], [66.4, 12015.0], [66.5, 12016.0], [66.6, 12016.0], [66.7, 12017.0], [66.8, 12017.0], [66.9, 12017.0], [67.0, 12017.0], [67.1, 12017.0], [67.2, 12017.0], [67.3, 12018.0], [67.4, 12018.0], [67.5, 12018.0], [67.6, 12018.0], [67.7, 12020.0], [67.8, 12020.0], [67.9, 12025.0], [68.0, 12025.0], [68.1, 12094.0], [68.2, 12094.0], [68.3, 12096.0], [68.4, 12096.0], [68.5, 12096.0], [68.6, 12096.0], [68.7, 12096.0], [68.8, 12096.0], [68.9, 12100.0], [69.0, 12100.0], [69.1, 12100.0], [69.2, 12100.0], [69.3, 12100.0], [69.4, 12100.0], [69.5, 12104.0], [69.6, 12104.0], [69.7, 12104.0], [69.8, 12104.0], [69.9, 12106.0], [70.0, 12106.0], [70.1, 12106.0], [70.2, 12106.0], [70.3, 12106.0], [70.4, 12106.0], [70.5, 12106.0], [70.6, 12106.0], [70.7, 12106.0], [70.8, 12106.0], [70.9, 12106.0], [71.0, 12106.0], [71.1, 12107.0], [71.2, 12107.0], [71.3, 12107.0], [71.4, 12107.0], [71.5, 12107.0], [71.6, 12107.0], [71.7, 12110.0], [71.8, 12110.0], [71.9, 12110.0], [72.0, 12110.0], [72.1, 12111.0], [72.2, 12111.0], [72.3, 12111.0], [72.4, 12111.0], [72.5, 12111.0], [72.6, 12111.0], [72.7, 12111.0], [72.8, 12111.0], [72.9, 12111.0], [73.0, 12111.0], [73.1, 12111.0], [73.2, 12111.0], [73.3, 12112.0], [73.4, 12112.0], [73.5, 12112.0], [73.6, 12112.0], [73.7, 12113.0], [73.8, 12113.0], [73.9, 12114.0], [74.0, 12114.0], [74.1, 12115.0], [74.2, 12115.0], [74.3, 12115.0], [74.4, 12115.0], [74.5, 12115.0], [74.6, 12115.0], [74.7, 12116.0], [74.8, 12116.0], [74.9, 12116.0], [75.0, 12116.0], [75.1, 12117.0], [75.2, 12117.0], [75.3, 12118.0], [75.4, 12118.0], [75.5, 12119.0], [75.6, 12119.0], [75.7, 12120.0], [75.8, 12120.0], [75.9, 12120.0], [76.0, 12120.0], [76.1, 12120.0], [76.2, 12120.0], [76.3, 12120.0], [76.4, 12120.0], [76.5, 12121.0], [76.6, 12121.0], [76.7, 12295.0], [76.8, 12295.0], [76.9, 12296.0], [77.0, 12296.0], [77.1, 12296.0], [77.2, 12296.0], [77.3, 12296.0], [77.4, 12296.0], [77.5, 12297.0], [77.6, 12297.0], [77.7, 12297.0], [77.8, 12297.0], [77.9, 12297.0], [78.0, 12297.0], [78.1, 12297.0], [78.2, 12297.0], [78.3, 12305.0], [78.4, 12305.0], [78.5, 12306.0], [78.6, 12306.0], [78.7, 12306.0], [78.8, 12306.0], [78.9, 12306.0], [79.0, 12306.0], [79.1, 12306.0], [79.2, 12306.0], [79.3, 12306.0], [79.4, 12306.0], [79.5, 12307.0], [79.6, 12307.0], [79.7, 12307.0], [79.8, 12307.0], [79.9, 12307.0], [80.0, 12307.0], [80.1, 12307.0], [80.2, 12307.0], [80.3, 12307.0], [80.4, 12307.0], [80.5, 12310.0], [80.6, 12310.0], [80.7, 12310.0], [80.8, 12310.0], [80.9, 12310.0], [81.0, 12310.0], [81.1, 12310.0], [81.2, 12310.0], [81.3, 12310.0], [81.4, 12310.0], [81.5, 12310.0], [81.6, 12310.0], [81.7, 12311.0], [81.8, 12311.0], [81.9, 12311.0], [82.0, 12311.0], [82.1, 12311.0], [82.2, 12311.0], [82.3, 12311.0], [82.4, 12311.0], [82.5, 12311.0], [82.6, 12311.0], [82.7, 12311.0], [82.8, 12311.0], [82.9, 12311.0], [83.0, 12311.0], [83.1, 12311.0], [83.2, 12311.0], [83.3, 12312.0], [83.4, 12312.0], [83.5, 12312.0], [83.6, 12312.0], [83.7, 12312.0], [83.8, 12312.0], [83.9, 12312.0], [84.0, 12312.0], [84.1, 12312.0], [84.2, 12312.0], [84.3, 12312.0], [84.4, 12312.0], [84.5, 12312.0], [84.6, 12312.0], [84.7, 12312.0], [84.8, 12312.0], [84.9, 12312.0], [85.0, 12312.0], [85.1, 12312.0], [85.2, 12312.0], [85.3, 12312.0], [85.4, 12312.0], [85.5, 12313.0], [85.6, 12313.0], [85.7, 12313.0], [85.8, 12313.0], [85.9, 12313.0], [86.0, 12313.0], [86.1, 12313.0], [86.2, 12313.0], [86.3, 12313.0], [86.4, 12313.0], [86.5, 12313.0], [86.6, 12313.0], [86.7, 12313.0], [86.8, 12313.0], [86.9, 12313.0], [87.0, 12313.0], [87.1, 12313.0], [87.2, 12313.0], [87.3, 12313.0], [87.4, 12313.0], [87.5, 12314.0], [87.6, 12314.0], [87.7, 12314.0], [87.8, 12314.0], [87.9, 12314.0], [88.0, 12314.0], [88.1, 12314.0], [88.2, 12314.0], [88.3, 12314.0], [88.4, 12314.0], [88.5, 12315.0], [88.6, 12315.0], [88.7, 12315.0], [88.8, 12315.0], [88.9, 12315.0], [89.0, 12315.0], [89.1, 12315.0], [89.2, 12315.0], [89.3, 12315.0], [89.4, 12315.0], [89.5, 12316.0], [89.6, 12316.0], [89.7, 12316.0], [89.8, 12316.0], [89.9, 12316.0], [90.0, 12316.0], [90.1, 12318.0], [90.2, 12318.0], [90.3, 12318.0], [90.4, 12318.0], [90.5, 12318.0], [90.6, 12318.0], [90.7, 12319.0], [90.8, 12319.0], [90.9, 12319.0], [91.0, 12319.0], [91.1, 12320.0], [91.2, 12320.0], [91.3, 12320.0], [91.4, 12320.0], [91.5, 12321.0], [91.6, 12321.0], [91.7, 12321.0], [91.8, 12321.0], [91.9, 12321.0], [92.0, 12321.0], [92.1, 12321.0], [92.2, 12321.0], [92.3, 14543.0], [92.4, 14543.0], [92.5, 14543.0], [92.6, 14543.0], [92.7, 14543.0], [92.8, 14543.0], [92.9, 14543.0], [93.0, 14543.0], [93.1, 14543.0], [93.2, 14543.0], [93.3, 14543.0], [93.4, 14543.0], [93.5, 14543.0], [93.6, 14543.0], [93.7, 14544.0], [93.8, 14544.0], [93.9, 14547.0], [94.0, 14547.0], [94.1, 14553.0], [94.2, 14553.0], [94.3, 14554.0], [94.4, 14554.0], [94.5, 14554.0], [94.6, 14554.0], [94.7, 14554.0], [94.8, 14554.0], [94.9, 14557.0], [95.0, 14557.0], [95.1, 14557.0], [95.2, 14557.0], [95.3, 14558.0], [95.4, 14558.0], [95.5, 14558.0], [95.6, 14558.0], [95.7, 14558.0], [95.8, 14558.0], [95.9, 14558.0], [96.0, 14558.0], [96.1, 14559.0], [96.2, 14559.0], [96.3, 14559.0], [96.4, 14559.0], [96.5, 14559.0], [96.6, 14559.0], [96.7, 14559.0], [96.8, 14559.0], [96.9, 14560.0], [97.0, 14560.0], [97.1, 14560.0], [97.2, 14560.0], [97.3, 14560.0], [97.4, 14560.0], [97.5, 14561.0], [97.6, 14561.0], [97.7, 14561.0], [97.8, 14561.0], [97.9, 14563.0], [98.0, 14563.0], [98.1, 14563.0], [98.2, 14563.0], [98.3, 14564.0], [98.4, 14564.0], [98.5, 14566.0], [98.6, 14566.0], [98.7, 14566.0], [98.8, 14566.0], [98.9, 14567.0], [99.0, 14567.0], [99.1, 14567.0], [99.2, 14567.0], [99.3, 14567.0], [99.4, 14567.0], [99.5, 14567.0], [99.6, 14567.0], [99.7, 14568.0], [99.8, 14568.0], [99.9, 14568.0], [100.0, 14568.0]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 5.0, "minX": 10400.0, "maxY": 123.0, "series": [{"data": [[10400.0, 123.0], [10500.0, 69.0], [10600.0, 33.0], [10700.0, 5.0], [11600.0, 18.0], [11700.0, 5.0], [11800.0, 59.0], [11900.0, 9.0], [12000.0, 23.0], [12100.0, 39.0], [12200.0, 8.0], [12300.0, 70.0], [14500.0, 39.0]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 14500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 500.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 500.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 500.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 279.6899999999997, "minX": 1.71244482E12, "maxY": 279.6899999999997, "series": [{"data": [[1.71244482E12, 279.6899999999997]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244482E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 10466.5, "minX": 35.0, "maxY": 14568.0, "series": [{"data": [[35.0, 14568.0], [36.0, 14560.666666666668], [39.0, 14556.266666666666], [38.0, 14548.5], [95.0, 12317.0], [94.0, 12316.0], [99.0, 12314.916666666666], [98.0, 12311.5], [97.0, 12312.333333333334], [103.0, 12313.666666666666], [101.0, 12305.42857142857], [100.0, 12304.5], [107.0, 12312.25], [105.0, 12296.0], [104.0, 12312.0], [110.0, 12310.5], [108.0, 12320.0], [111.0, 12311.0], [115.0, 12313.0], [114.0, 12314.333333333334], [113.0, 12311.5], [117.0, 12309.703703703704], [151.0, 12119.0], [150.0, 12111.000000000002], [149.0, 12121.0], [147.0, 12112.0], [155.0, 12109.6], [154.0, 12110.333333333334], [152.0, 12113.0], [153.0, 12107.0], [160.0, 12100.4], [179.0, 12013.105263157895], [239.0, 11891.5], [247.0, 11893.923076923076], [246.0, 11888.333333333334], [245.0, 11893.086956521738], [244.0, 11893.818181818184], [243.0, 11892.199999999999], [242.0, 11892.25], [240.0, 11897.0], [254.0, 11702.428571428572], [270.0, 11683.937499999998], [283.0, 10675.625], [275.0, 10790.4], [308.0, 10661.120000000003], [367.0, 10583.75], [366.0, 10585.625], [365.0, 10583.75], [363.0, 10580.0], [377.0, 10582.000000000002], [375.0, 10585.0], [374.0, 10588.0], [373.0, 10585.333333333334], [372.0, 10583.0], [371.0, 10584.75], [370.0, 10579.333333333334], [369.0, 10586.333333333334], [479.0, 10476.75], [477.0, 10474.312500000002], [474.0, 10475.666666666666], [472.0, 10466.5], [471.0, 10475.0], [470.0, 10474.0], [475.0, 10472.0], [476.0, 10470.0], [481.0, 10471.733333333334], [480.0, 10474.5], [500.0, 10469.16666666667]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}, {"data": [[279.68800000000005, 11557.282000000001]], "isOverall": false, "label": "HTTP Request (light image)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 500.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2433.3333333333335, "minX": 1.71244482E12, "maxY": 102479.3, "series": [{"data": [[1.71244482E12, 2433.3333333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71244482E12, 102479.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244482E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 11557.282000000001, "minX": 1.71244482E12, "maxY": 11557.282000000001, "series": [{"data": [[1.71244482E12, 11557.282000000001]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244482E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 11557.17200000001, "minX": 1.71244482E12, "maxY": 11557.17200000001, "series": [{"data": [[1.71244482E12, 11557.17200000001]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244482E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 275.7780000000001, "minX": 1.71244482E12, "maxY": 275.7780000000001, "series": [{"data": [[1.71244482E12, 275.7780000000001]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244482E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "Max", "isController": false}, {"data": [], "isOverall": false, "label": "Min", "isController": false}, {"data": [], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "Median", "isController": false}, {"data": [], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 10480.0, "minX": 23.0, "maxY": 14559.0, "series": [{"data": [[39.0, 14559.0], [23.0, 11689.0], [208.0, 12107.0], [230.0, 10480.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 230.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 10480.0, "minX": 23.0, "maxY": 14559.0, "series": [{"data": [[39.0, 14559.0], [23.0, 11689.0], [208.0, 12107.0], [230.0, 10480.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 230.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.71244482E12, "maxY": 8.333333333333334, "series": [{"data": [[1.71244482E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244482E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.71244482E12, "maxY": 8.333333333333334, "series": [{"data": [[1.71244482E12, 8.333333333333334]], "isOverall": false, "label": "504", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244482E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.71244482E12, "maxY": 8.333333333333334, "series": [{"data": [[1.71244482E12, 8.333333333333334]], "isOverall": false, "label": "HTTP Request (light image)-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244482E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 8.333333333333334, "minX": 1.71244482E12, "maxY": 8.333333333333334, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71244482E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244482E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

