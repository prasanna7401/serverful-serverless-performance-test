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
        data: {"result": {"minY": 2325.0, "minX": 0.0, "maxY": 60331.0, "series": [{"data": [[0.0, 2325.0], [0.1, 2325.0], [0.2, 2325.0], [0.3, 2325.0], [0.4, 2325.0], [0.5, 2325.0], [0.6, 2325.0], [0.7, 2325.0], [0.8, 2325.0], [0.9, 2325.0], [1.0, 24195.0], [1.1, 24195.0], [1.2, 24195.0], [1.3, 24195.0], [1.4, 24195.0], [1.5, 24195.0], [1.6, 24195.0], [1.7, 24195.0], [1.8, 24195.0], [1.9, 24195.0], [2.0, 24215.0], [2.1, 24215.0], [2.2, 24215.0], [2.3, 24215.0], [2.4, 24215.0], [2.5, 24215.0], [2.6, 24215.0], [2.7, 24215.0], [2.8, 24215.0], [2.9, 24215.0], [3.0, 29818.0], [3.1, 29818.0], [3.2, 29818.0], [3.3, 29818.0], [3.4, 29818.0], [3.5, 29818.0], [3.6, 29818.0], [3.7, 29818.0], [3.8, 29818.0], [3.9, 29818.0], [4.0, 33315.0], [4.1, 33315.0], [4.2, 33315.0], [4.3, 33315.0], [4.4, 33315.0], [4.5, 33315.0], [4.6, 33315.0], [4.7, 33315.0], [4.8, 33315.0], [4.9, 33315.0], [5.0, 34799.0], [5.1, 34799.0], [5.2, 34799.0], [5.3, 34799.0], [5.4, 34799.0], [5.5, 34799.0], [5.6, 34799.0], [5.7, 34799.0], [5.8, 34799.0], [5.9, 34799.0], [6.0, 36372.0], [6.1, 36372.0], [6.2, 36372.0], [6.3, 36372.0], [6.4, 36372.0], [6.5, 36372.0], [6.6, 36372.0], [6.7, 36372.0], [6.8, 36372.0], [6.9, 36372.0], [7.0, 36837.0], [7.1, 36837.0], [7.2, 36837.0], [7.3, 36837.0], [7.4, 36837.0], [7.5, 36837.0], [7.6, 36837.0], [7.7, 36837.0], [7.8, 36837.0], [7.9, 36837.0], [8.0, 37498.0], [8.1, 37498.0], [8.2, 37498.0], [8.3, 37498.0], [8.4, 37498.0], [8.5, 37498.0], [8.6, 37498.0], [8.7, 37498.0], [8.8, 37498.0], [8.9, 37498.0], [9.0, 37619.0], [9.1, 37619.0], [9.2, 37619.0], [9.3, 37619.0], [9.4, 37619.0], [9.5, 37619.0], [9.6, 37619.0], [9.7, 37619.0], [9.8, 37619.0], [9.9, 37619.0], [10.0, 37641.0], [10.1, 37641.0], [10.2, 37641.0], [10.3, 37641.0], [10.4, 37641.0], [10.5, 37641.0], [10.6, 37641.0], [10.7, 37641.0], [10.8, 37641.0], [10.9, 37641.0], [11.0, 38061.0], [11.1, 38061.0], [11.2, 38061.0], [11.3, 38061.0], [11.4, 38061.0], [11.5, 38061.0], [11.6, 38061.0], [11.7, 38061.0], [11.8, 38061.0], [11.9, 38061.0], [12.0, 38419.0], [12.1, 38419.0], [12.2, 38419.0], [12.3, 38419.0], [12.4, 38419.0], [12.5, 38419.0], [12.6, 38419.0], [12.7, 38419.0], [12.8, 38419.0], [12.9, 38419.0], [13.0, 39851.0], [13.1, 39851.0], [13.2, 39851.0], [13.3, 39851.0], [13.4, 39851.0], [13.5, 39851.0], [13.6, 39851.0], [13.7, 39851.0], [13.8, 39851.0], [13.9, 39851.0], [14.0, 41107.0], [14.1, 41107.0], [14.2, 41107.0], [14.3, 41107.0], [14.4, 41107.0], [14.5, 41107.0], [14.6, 41107.0], [14.7, 41107.0], [14.8, 41107.0], [14.9, 41107.0], [15.0, 41227.0], [15.1, 41227.0], [15.2, 41227.0], [15.3, 41227.0], [15.4, 41227.0], [15.5, 41227.0], [15.6, 41227.0], [15.7, 41227.0], [15.8, 41227.0], [15.9, 41227.0], [16.0, 41228.0], [16.1, 41228.0], [16.2, 41228.0], [16.3, 41228.0], [16.4, 41228.0], [16.5, 41228.0], [16.6, 41228.0], [16.7, 41228.0], [16.8, 41228.0], [16.9, 41228.0], [17.0, 41591.0], [17.1, 41591.0], [17.2, 41591.0], [17.3, 41591.0], [17.4, 41591.0], [17.5, 41591.0], [17.6, 41591.0], [17.7, 41591.0], [17.8, 41591.0], [17.9, 41591.0], [18.0, 42842.0], [18.1, 42842.0], [18.2, 42842.0], [18.3, 42842.0], [18.4, 42842.0], [18.5, 42842.0], [18.6, 42842.0], [18.7, 42842.0], [18.8, 42842.0], [18.9, 42842.0], [19.0, 44919.0], [19.1, 44919.0], [19.2, 44919.0], [19.3, 44919.0], [19.4, 44919.0], [19.5, 44919.0], [19.6, 44919.0], [19.7, 44919.0], [19.8, 44919.0], [19.9, 44919.0], [20.0, 45581.0], [20.1, 45581.0], [20.2, 45581.0], [20.3, 45581.0], [20.4, 45581.0], [20.5, 45581.0], [20.6, 45581.0], [20.7, 45581.0], [20.8, 45581.0], [20.9, 45581.0], [21.0, 46817.0], [21.1, 46817.0], [21.2, 46817.0], [21.3, 46817.0], [21.4, 46817.0], [21.5, 46817.0], [21.6, 46817.0], [21.7, 46817.0], [21.8, 46817.0], [21.9, 46817.0], [22.0, 47230.0], [22.1, 47230.0], [22.2, 47230.0], [22.3, 47230.0], [22.4, 47230.0], [22.5, 47230.0], [22.6, 47230.0], [22.7, 47230.0], [22.8, 47230.0], [22.9, 47230.0], [23.0, 49274.0], [23.1, 49274.0], [23.2, 49274.0], [23.3, 49274.0], [23.4, 49274.0], [23.5, 49274.0], [23.6, 49274.0], [23.7, 49274.0], [23.8, 49274.0], [23.9, 49274.0], [24.0, 49684.0], [24.1, 49684.0], [24.2, 49684.0], [24.3, 49684.0], [24.4, 49684.0], [24.5, 49684.0], [24.6, 49684.0], [24.7, 49684.0], [24.8, 49684.0], [24.9, 49684.0], [25.0, 49719.0], [25.1, 49719.0], [25.2, 49719.0], [25.3, 49719.0], [25.4, 49719.0], [25.5, 49719.0], [25.6, 49719.0], [25.7, 49719.0], [25.8, 49719.0], [25.9, 49719.0], [26.0, 50915.0], [26.1, 50915.0], [26.2, 50915.0], [26.3, 50915.0], [26.4, 50915.0], [26.5, 50915.0], [26.6, 50915.0], [26.7, 50915.0], [26.8, 50915.0], [26.9, 50915.0], [27.0, 51030.0], [27.1, 51030.0], [27.2, 51030.0], [27.3, 51030.0], [27.4, 51030.0], [27.5, 51030.0], [27.6, 51030.0], [27.7, 51030.0], [27.8, 51030.0], [27.9, 51030.0], [28.0, 51591.0], [28.1, 51591.0], [28.2, 51591.0], [28.3, 51591.0], [28.4, 51591.0], [28.5, 51591.0], [28.6, 51591.0], [28.7, 51591.0], [28.8, 51591.0], [28.9, 51591.0], [29.0, 53806.0], [29.1, 53806.0], [29.2, 53806.0], [29.3, 53806.0], [29.4, 53806.0], [29.5, 53806.0], [29.6, 53806.0], [29.7, 53806.0], [29.8, 53806.0], [29.9, 53806.0], [30.0, 54300.0], [30.1, 54300.0], [30.2, 54300.0], [30.3, 54300.0], [30.4, 54300.0], [30.5, 54300.0], [30.6, 54300.0], [30.7, 54300.0], [30.8, 54300.0], [30.9, 54300.0], [31.0, 54750.0], [31.1, 54750.0], [31.2, 54750.0], [31.3, 54750.0], [31.4, 54750.0], [31.5, 54750.0], [31.6, 54750.0], [31.7, 54750.0], [31.8, 54750.0], [31.9, 54750.0], [32.0, 54750.0], [32.1, 54750.0], [32.2, 54750.0], [32.3, 54750.0], [32.4, 54750.0], [32.5, 54750.0], [32.6, 54750.0], [32.7, 54750.0], [32.8, 54750.0], [32.9, 54750.0], [33.0, 54924.0], [33.1, 54924.0], [33.2, 54924.0], [33.3, 54924.0], [33.4, 54924.0], [33.5, 54924.0], [33.6, 54924.0], [33.7, 54924.0], [33.8, 54924.0], [33.9, 54924.0], [34.0, 55726.0], [34.1, 55726.0], [34.2, 55726.0], [34.3, 55726.0], [34.4, 55726.0], [34.5, 55726.0], [34.6, 55726.0], [34.7, 55726.0], [34.8, 55726.0], [34.9, 55726.0], [35.0, 55900.0], [35.1, 55900.0], [35.2, 55900.0], [35.3, 55900.0], [35.4, 55900.0], [35.5, 55900.0], [35.6, 55900.0], [35.7, 55900.0], [35.8, 55900.0], [35.9, 55900.0], [36.0, 56852.0], [36.1, 56852.0], [36.2, 56852.0], [36.3, 56852.0], [36.4, 56852.0], [36.5, 56852.0], [36.6, 56852.0], [36.7, 56852.0], [36.8, 56852.0], [36.9, 56852.0], [37.0, 59130.0], [37.1, 59130.0], [37.2, 59130.0], [37.3, 59130.0], [37.4, 59130.0], [37.5, 59130.0], [37.6, 59130.0], [37.7, 59130.0], [37.8, 59130.0], [37.9, 59130.0], [38.0, 59616.0], [38.1, 59616.0], [38.2, 59616.0], [38.3, 59616.0], [38.4, 59616.0], [38.5, 59616.0], [38.6, 59616.0], [38.7, 59616.0], [38.8, 59616.0], [38.9, 59616.0], [39.0, 59927.0], [39.1, 59927.0], [39.2, 59927.0], [39.3, 59927.0], [39.4, 59927.0], [39.5, 59927.0], [39.6, 59927.0], [39.7, 59927.0], [39.8, 59927.0], [39.9, 59927.0], [40.0, 60049.0], [40.1, 60049.0], [40.2, 60049.0], [40.3, 60049.0], [40.4, 60049.0], [40.5, 60049.0], [40.6, 60049.0], [40.7, 60049.0], [40.8, 60049.0], [40.9, 60049.0], [41.0, 60131.0], [41.1, 60131.0], [41.2, 60131.0], [41.3, 60131.0], [41.4, 60131.0], [41.5, 60131.0], [41.6, 60131.0], [41.7, 60131.0], [41.8, 60131.0], [41.9, 60131.0], [42.0, 60277.0], [42.1, 60277.0], [42.2, 60277.0], [42.3, 60277.0], [42.4, 60277.0], [42.5, 60277.0], [42.6, 60277.0], [42.7, 60277.0], [42.8, 60277.0], [42.9, 60277.0], [43.0, 60281.0], [43.1, 60281.0], [43.2, 60281.0], [43.3, 60281.0], [43.4, 60281.0], [43.5, 60281.0], [43.6, 60281.0], [43.7, 60281.0], [43.8, 60281.0], [43.9, 60281.0], [44.0, 60281.0], [44.1, 60281.0], [44.2, 60281.0], [44.3, 60281.0], [44.4, 60281.0], [44.5, 60281.0], [44.6, 60281.0], [44.7, 60281.0], [44.8, 60281.0], [44.9, 60281.0], [45.0, 60281.0], [45.1, 60281.0], [45.2, 60281.0], [45.3, 60281.0], [45.4, 60281.0], [45.5, 60281.0], [45.6, 60281.0], [45.7, 60281.0], [45.8, 60281.0], [45.9, 60281.0], [46.0, 60281.0], [46.1, 60281.0], [46.2, 60281.0], [46.3, 60281.0], [46.4, 60281.0], [46.5, 60281.0], [46.6, 60281.0], [46.7, 60281.0], [46.8, 60281.0], [46.9, 60281.0], [47.0, 60281.0], [47.1, 60281.0], [47.2, 60281.0], [47.3, 60281.0], [47.4, 60281.0], [47.5, 60281.0], [47.6, 60281.0], [47.7, 60281.0], [47.8, 60281.0], [47.9, 60281.0], [48.0, 60313.0], [48.1, 60313.0], [48.2, 60313.0], [48.3, 60313.0], [48.4, 60313.0], [48.5, 60313.0], [48.6, 60313.0], [48.7, 60313.0], [48.8, 60313.0], [48.9, 60313.0], [49.0, 60314.0], [49.1, 60314.0], [49.2, 60314.0], [49.3, 60314.0], [49.4, 60314.0], [49.5, 60314.0], [49.6, 60314.0], [49.7, 60314.0], [49.8, 60314.0], [49.9, 60314.0], [50.0, 60314.0], [50.1, 60314.0], [50.2, 60314.0], [50.3, 60314.0], [50.4, 60314.0], [50.5, 60314.0], [50.6, 60314.0], [50.7, 60314.0], [50.8, 60314.0], [50.9, 60314.0], [51.0, 60314.0], [51.1, 60314.0], [51.2, 60314.0], [51.3, 60314.0], [51.4, 60314.0], [51.5, 60314.0], [51.6, 60314.0], [51.7, 60314.0], [51.8, 60314.0], [51.9, 60314.0], [52.0, 60314.0], [52.1, 60314.0], [52.2, 60314.0], [52.3, 60314.0], [52.4, 60314.0], [52.5, 60314.0], [52.6, 60314.0], [52.7, 60314.0], [52.8, 60314.0], [52.9, 60314.0], [53.0, 60317.0], [53.1, 60317.0], [53.2, 60317.0], [53.3, 60317.0], [53.4, 60317.0], [53.5, 60317.0], [53.6, 60317.0], [53.7, 60317.0], [53.8, 60317.0], [53.9, 60317.0], [54.0, 60317.0], [54.1, 60317.0], [54.2, 60317.0], [54.3, 60317.0], [54.4, 60317.0], [54.5, 60317.0], [54.6, 60317.0], [54.7, 60317.0], [54.8, 60317.0], [54.9, 60317.0], [55.0, 60317.0], [55.1, 60317.0], [55.2, 60317.0], [55.3, 60317.0], [55.4, 60317.0], [55.5, 60317.0], [55.6, 60317.0], [55.7, 60317.0], [55.8, 60317.0], [55.9, 60317.0], [56.0, 60317.0], [56.1, 60317.0], [56.2, 60317.0], [56.3, 60317.0], [56.4, 60317.0], [56.5, 60317.0], [56.6, 60317.0], [56.7, 60317.0], [56.8, 60317.0], [56.9, 60317.0], [57.0, 60317.0], [57.1, 60317.0], [57.2, 60317.0], [57.3, 60317.0], [57.4, 60317.0], [57.5, 60317.0], [57.6, 60317.0], [57.7, 60317.0], [57.8, 60317.0], [57.9, 60317.0], [58.0, 60317.0], [58.1, 60317.0], [58.2, 60317.0], [58.3, 60317.0], [58.4, 60317.0], [58.5, 60317.0], [58.6, 60317.0], [58.7, 60317.0], [58.8, 60317.0], [58.9, 60317.0], [59.0, 60317.0], [59.1, 60317.0], [59.2, 60317.0], [59.3, 60317.0], [59.4, 60317.0], [59.5, 60317.0], [59.6, 60317.0], [59.7, 60317.0], [59.8, 60317.0], [59.9, 60317.0], [60.0, 60317.0], [60.1, 60317.0], [60.2, 60317.0], [60.3, 60317.0], [60.4, 60317.0], [60.5, 60317.0], [60.6, 60317.0], [60.7, 60317.0], [60.8, 60317.0], [60.9, 60317.0], [61.0, 60317.0], [61.1, 60317.0], [61.2, 60317.0], [61.3, 60317.0], [61.4, 60317.0], [61.5, 60317.0], [61.6, 60317.0], [61.7, 60317.0], [61.8, 60317.0], [61.9, 60317.0], [62.0, 60318.0], [62.1, 60318.0], [62.2, 60318.0], [62.3, 60318.0], [62.4, 60318.0], [62.5, 60318.0], [62.6, 60318.0], [62.7, 60318.0], [62.8, 60318.0], [62.9, 60318.0], [63.0, 60318.0], [63.1, 60318.0], [63.2, 60318.0], [63.3, 60318.0], [63.4, 60318.0], [63.5, 60318.0], [63.6, 60318.0], [63.7, 60318.0], [63.8, 60318.0], [63.9, 60318.0], [64.0, 60318.0], [64.1, 60318.0], [64.2, 60318.0], [64.3, 60318.0], [64.4, 60318.0], [64.5, 60318.0], [64.6, 60318.0], [64.7, 60318.0], [64.8, 60318.0], [64.9, 60318.0], [65.0, 60318.0], [65.1, 60318.0], [65.2, 60318.0], [65.3, 60318.0], [65.4, 60318.0], [65.5, 60318.0], [65.6, 60318.0], [65.7, 60318.0], [65.8, 60318.0], [65.9, 60318.0], [66.0, 60318.0], [66.1, 60318.0], [66.2, 60318.0], [66.3, 60318.0], [66.4, 60318.0], [66.5, 60318.0], [66.6, 60318.0], [66.7, 60318.0], [66.8, 60318.0], [66.9, 60318.0], [67.0, 60318.0], [67.1, 60318.0], [67.2, 60318.0], [67.3, 60318.0], [67.4, 60318.0], [67.5, 60318.0], [67.6, 60318.0], [67.7, 60318.0], [67.8, 60318.0], [67.9, 60318.0], [68.0, 60318.0], [68.1, 60318.0], [68.2, 60318.0], [68.3, 60318.0], [68.4, 60318.0], [68.5, 60318.0], [68.6, 60318.0], [68.7, 60318.0], [68.8, 60318.0], [68.9, 60318.0], [69.0, 60318.0], [69.1, 60318.0], [69.2, 60318.0], [69.3, 60318.0], [69.4, 60318.0], [69.5, 60318.0], [69.6, 60318.0], [69.7, 60318.0], [69.8, 60318.0], [69.9, 60318.0], [70.0, 60318.0], [70.1, 60318.0], [70.2, 60318.0], [70.3, 60318.0], [70.4, 60318.0], [70.5, 60318.0], [70.6, 60318.0], [70.7, 60318.0], [70.8, 60318.0], [70.9, 60318.0], [71.0, 60318.0], [71.1, 60318.0], [71.2, 60318.0], [71.3, 60318.0], [71.4, 60318.0], [71.5, 60318.0], [71.6, 60318.0], [71.7, 60318.0], [71.8, 60318.0], [71.9, 60318.0], [72.0, 60318.0], [72.1, 60318.0], [72.2, 60318.0], [72.3, 60318.0], [72.4, 60318.0], [72.5, 60318.0], [72.6, 60318.0], [72.7, 60318.0], [72.8, 60318.0], [72.9, 60318.0], [73.0, 60318.0], [73.1, 60318.0], [73.2, 60318.0], [73.3, 60318.0], [73.4, 60318.0], [73.5, 60318.0], [73.6, 60318.0], [73.7, 60318.0], [73.8, 60318.0], [73.9, 60318.0], [74.0, 60318.0], [74.1, 60318.0], [74.2, 60318.0], [74.3, 60318.0], [74.4, 60318.0], [74.5, 60318.0], [74.6, 60318.0], [74.7, 60318.0], [74.8, 60318.0], [74.9, 60318.0], [75.0, 60318.0], [75.1, 60318.0], [75.2, 60318.0], [75.3, 60318.0], [75.4, 60318.0], [75.5, 60318.0], [75.6, 60318.0], [75.7, 60318.0], [75.8, 60318.0], [75.9, 60318.0], [76.0, 60318.0], [76.1, 60318.0], [76.2, 60318.0], [76.3, 60318.0], [76.4, 60318.0], [76.5, 60318.0], [76.6, 60318.0], [76.7, 60318.0], [76.8, 60318.0], [76.9, 60318.0], [77.0, 60318.0], [77.1, 60318.0], [77.2, 60318.0], [77.3, 60318.0], [77.4, 60318.0], [77.5, 60318.0], [77.6, 60318.0], [77.7, 60318.0], [77.8, 60318.0], [77.9, 60318.0], [78.0, 60318.0], [78.1, 60318.0], [78.2, 60318.0], [78.3, 60318.0], [78.4, 60318.0], [78.5, 60318.0], [78.6, 60318.0], [78.7, 60318.0], [78.8, 60318.0], [78.9, 60318.0], [79.0, 60318.0], [79.1, 60318.0], [79.2, 60318.0], [79.3, 60318.0], [79.4, 60318.0], [79.5, 60318.0], [79.6, 60318.0], [79.7, 60318.0], [79.8, 60318.0], [79.9, 60318.0], [80.0, 60318.0], [80.1, 60318.0], [80.2, 60318.0], [80.3, 60318.0], [80.4, 60318.0], [80.5, 60318.0], [80.6, 60318.0], [80.7, 60318.0], [80.8, 60318.0], [80.9, 60318.0], [81.0, 60318.0], [81.1, 60318.0], [81.2, 60318.0], [81.3, 60318.0], [81.4, 60318.0], [81.5, 60318.0], [81.6, 60318.0], [81.7, 60318.0], [81.8, 60318.0], [81.9, 60318.0], [82.0, 60318.0], [82.1, 60318.0], [82.2, 60318.0], [82.3, 60318.0], [82.4, 60318.0], [82.5, 60318.0], [82.6, 60318.0], [82.7, 60318.0], [82.8, 60318.0], [82.9, 60318.0], [83.0, 60318.0], [83.1, 60318.0], [83.2, 60318.0], [83.3, 60318.0], [83.4, 60318.0], [83.5, 60318.0], [83.6, 60318.0], [83.7, 60318.0], [83.8, 60318.0], [83.9, 60318.0], [84.0, 60318.0], [84.1, 60318.0], [84.2, 60318.0], [84.3, 60318.0], [84.4, 60318.0], [84.5, 60318.0], [84.6, 60318.0], [84.7, 60318.0], [84.8, 60318.0], [84.9, 60318.0], [85.0, 60318.0], [85.1, 60318.0], [85.2, 60318.0], [85.3, 60318.0], [85.4, 60318.0], [85.5, 60318.0], [85.6, 60318.0], [85.7, 60318.0], [85.8, 60318.0], [85.9, 60318.0], [86.0, 60318.0], [86.1, 60318.0], [86.2, 60318.0], [86.3, 60318.0], [86.4, 60318.0], [86.5, 60318.0], [86.6, 60318.0], [86.7, 60318.0], [86.8, 60318.0], [86.9, 60318.0], [87.0, 60318.0], [87.1, 60318.0], [87.2, 60318.0], [87.3, 60318.0], [87.4, 60318.0], [87.5, 60318.0], [87.6, 60318.0], [87.7, 60318.0], [87.8, 60318.0], [87.9, 60318.0], [88.0, 60318.0], [88.1, 60318.0], [88.2, 60318.0], [88.3, 60318.0], [88.4, 60318.0], [88.5, 60318.0], [88.6, 60318.0], [88.7, 60318.0], [88.8, 60318.0], [88.9, 60318.0], [89.0, 60318.0], [89.1, 60318.0], [89.2, 60318.0], [89.3, 60318.0], [89.4, 60318.0], [89.5, 60318.0], [89.6, 60318.0], [89.7, 60318.0], [89.8, 60318.0], [89.9, 60318.0], [90.0, 60318.0], [90.1, 60318.0], [90.2, 60318.0], [90.3, 60318.0], [90.4, 60318.0], [90.5, 60318.0], [90.6, 60318.0], [90.7, 60318.0], [90.8, 60318.0], [90.9, 60318.0], [91.0, 60318.0], [91.1, 60318.0], [91.2, 60318.0], [91.3, 60318.0], [91.4, 60318.0], [91.5, 60318.0], [91.6, 60318.0], [91.7, 60318.0], [91.8, 60318.0], [91.9, 60318.0], [92.0, 60319.0], [92.1, 60319.0], [92.2, 60319.0], [92.3, 60319.0], [92.4, 60319.0], [92.5, 60319.0], [92.6, 60319.0], [92.7, 60319.0], [92.8, 60319.0], [92.9, 60319.0], [93.0, 60319.0], [93.1, 60319.0], [93.2, 60319.0], [93.3, 60319.0], [93.4, 60319.0], [93.5, 60319.0], [93.6, 60319.0], [93.7, 60319.0], [93.8, 60319.0], [93.9, 60319.0], [94.0, 60319.0], [94.1, 60319.0], [94.2, 60319.0], [94.3, 60319.0], [94.4, 60319.0], [94.5, 60319.0], [94.6, 60319.0], [94.7, 60319.0], [94.8, 60319.0], [94.9, 60319.0], [95.0, 60319.0], [95.1, 60319.0], [95.2, 60319.0], [95.3, 60319.0], [95.4, 60319.0], [95.5, 60319.0], [95.6, 60319.0], [95.7, 60319.0], [95.8, 60319.0], [95.9, 60319.0], [96.0, 60319.0], [96.1, 60319.0], [96.2, 60319.0], [96.3, 60319.0], [96.4, 60319.0], [96.5, 60319.0], [96.6, 60319.0], [96.7, 60319.0], [96.8, 60319.0], [96.9, 60319.0], [97.0, 60319.0], [97.1, 60319.0], [97.2, 60319.0], [97.3, 60319.0], [97.4, 60319.0], [97.5, 60319.0], [97.6, 60319.0], [97.7, 60319.0], [97.8, 60319.0], [97.9, 60319.0], [98.0, 60327.0], [98.1, 60327.0], [98.2, 60327.0], [98.3, 60327.0], [98.4, 60327.0], [98.5, 60327.0], [98.6, 60327.0], [98.7, 60327.0], [98.8, 60327.0], [98.9, 60327.0], [99.0, 60331.0], [99.1, 60331.0], [99.2, 60331.0], [99.3, 60331.0], [99.4, 60331.0], [99.5, 60331.0], [99.6, 60331.0], [99.7, 60331.0], [99.8, 60331.0], [99.9, 60331.0]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2300.0, "maxY": 52.0, "series": [{"data": [[24100.0, 1.0], [24200.0, 1.0], [29800.0, 1.0], [33300.0, 1.0], [34700.0, 1.0], [2300.0, 1.0], [36300.0, 1.0], [36800.0, 1.0], [37400.0, 1.0], [37600.0, 2.0], [38000.0, 1.0], [38400.0, 1.0], [39800.0, 1.0], [41100.0, 1.0], [41200.0, 2.0], [41500.0, 1.0], [42800.0, 1.0], [44900.0, 1.0], [45500.0, 1.0], [46800.0, 1.0], [47200.0, 1.0], [49200.0, 1.0], [49600.0, 1.0], [49700.0, 1.0], [50900.0, 1.0], [51000.0, 1.0], [51500.0, 1.0], [53800.0, 1.0], [54300.0, 1.0], [54700.0, 2.0], [54900.0, 1.0], [55700.0, 1.0], [55900.0, 1.0], [56800.0, 1.0], [59100.0, 1.0], [59600.0, 1.0], [59900.0, 1.0], [60000.0, 1.0], [60100.0, 1.0], [60200.0, 6.0], [60300.0, 52.0]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 60300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 40.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 60.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 40.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 60.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 60.19148936170212, "minX": 1.7124447E12, "maxY": 97.5, "series": [{"data": [[1.7124447E12, 97.5], [1.71244476E12, 60.19148936170212]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244476E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2325.0, "minX": 2.0, "maxY": 60329.0, "series": [{"data": [[2.0, 60329.0], [47.0, 60318.0], [49.0, 60318.57142857143], [48.0, 60318.0], [50.0, 60318.2], [52.0, 60317.147058823524], [59.0, 60131.0], [58.0, 60280.33333333333], [61.0, 59927.0], [60.0, 60049.0], [63.0, 59130.0], [62.0, 59616.0], [67.0, 54924.0], [66.0, 55726.0], [65.0, 55900.0], [64.0, 56852.0], [71.0, 53806.0], [70.0, 54300.0], [69.0, 54750.0], [75.0, 49719.0], [74.0, 50915.0], [73.0, 51030.0], [72.0, 51591.0], [79.0, 46817.0], [78.0, 47230.0], [77.0, 49274.0], [76.0, 49684.0], [83.0, 41591.0], [82.0, 42842.0], [81.0, 44919.0], [80.0, 45581.0], [87.0, 39851.0], [86.0, 41107.0], [85.0, 41227.5], [91.0, 37619.0], [90.0, 37641.0], [89.0, 38061.0], [88.0, 38419.0], [95.0, 34799.0], [94.0, 36372.0], [93.0, 36837.0], [92.0, 37498.0], [99.0, 24195.0], [98.0, 24215.0], [97.0, 29818.0], [96.0, 33315.0], [100.0, 2325.0]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}, {"data": [[62.43000000000003, 53837.969999999994]], "isOverall": false, "label": "HTTP Request (light image)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 31.366666666666667, "minX": 1.7124447E12, "maxY": 19266.65, "series": [{"data": [[1.7124447E12, 31.366666666666667], [1.71244476E12, 425.6666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7124447E12, 1229.65], [1.71244476E12, 19266.65]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244476E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 24777.833333333332, "minX": 1.7124447E12, "maxY": 55692.872340425536, "series": [{"data": [[1.7124447E12, 24777.833333333332], [1.71244476E12, 55692.872340425536]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244476E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 24777.166666666664, "minX": 1.7124447E12, "maxY": 55692.85106382979, "series": [{"data": [[1.7124447E12, 24777.166666666664], [1.71244476E12, 55692.85106382979]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244476E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 161.66666666666666, "minX": 1.7124447E12, "maxY": 166.4574468085106, "series": [{"data": [[1.7124447E12, 161.66666666666666], [1.71244476E12, 166.4574468085106]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244476E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 24215.0, "minX": 1.7124447E12, "maxY": 60131.0, "series": [{"data": [[1.7124447E12, 34799.0], [1.71244476E12, 60131.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7124447E12, 24215.0], [1.71244476E12, 36372.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7124447E12, 34799.0], [1.71244476E12, 59709.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7124447E12, 34799.0], [1.71244476E12, 60131.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7124447E12, 31566.5], [1.71244476E12, 49479.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7124447E12, 34799.0], [1.71244476E12, 60061.3]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244476E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2325.0, "minX": 1.0, "maxY": 60318.0, "series": [{"data": [[2.0, 47230.0], [1.0, 42842.0], [4.0, 54750.0], [3.0, 45251.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 2325.0], [2.0, 24195.0], [58.0, 60318.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 58.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2322.0, "minX": 1.0, "maxY": 60318.0, "series": [{"data": [[2.0, 47230.0], [1.0, 42842.0], [4.0, 54750.0], [3.0, 45251.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 2322.0], [2.0, 24195.0], [58.0, 60318.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 58.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7124447E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7124447E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7124447E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7124447E12, "maxY": 0.9666666666666667, "series": [{"data": [[1.7124447E12, 0.06666666666666667], [1.71244476E12, 0.6]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7124447E12, 0.03333333333333333]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.71244476E12, 0.9666666666666667]], "isOverall": false, "label": "504", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244476E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7124447E12, "maxY": 0.9666666666666667, "series": [{"data": [[1.7124447E12, 0.03333333333333333], [1.71244476E12, 0.9666666666666667]], "isOverall": false, "label": "HTTP Request (light image)-failure", "isController": false}, {"data": [[1.7124447E12, 0.06666666666666667], [1.71244476E12, 0.6]], "isOverall": false, "label": "HTTP Request (light image)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244476E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7124447E12, "maxY": 0.9666666666666667, "series": [{"data": [[1.7124447E12, 0.06666666666666667], [1.71244476E12, 0.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7124447E12, 0.03333333333333333], [1.71244476E12, 0.9666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244476E12, "title": "Total Transactions Per Second"}},
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

