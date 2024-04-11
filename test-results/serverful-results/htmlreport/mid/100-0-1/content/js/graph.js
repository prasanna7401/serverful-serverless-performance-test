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
        data: {"result": {"minY": 683.0, "minX": 0.0, "maxY": 33827.0, "series": [{"data": [[0.0, 683.0], [0.1, 683.0], [0.2, 683.0], [0.3, 683.0], [0.4, 683.0], [0.5, 683.0], [0.6, 683.0], [0.7, 683.0], [0.8, 683.0], [0.9, 683.0], [1.0, 684.0], [1.1, 684.0], [1.2, 684.0], [1.3, 684.0], [1.4, 684.0], [1.5, 684.0], [1.6, 684.0], [1.7, 684.0], [1.8, 684.0], [1.9, 684.0], [2.0, 684.0], [2.1, 684.0], [2.2, 684.0], [2.3, 684.0], [2.4, 684.0], [2.5, 684.0], [2.6, 684.0], [2.7, 684.0], [2.8, 684.0], [2.9, 684.0], [3.0, 709.0], [3.1, 709.0], [3.2, 709.0], [3.3, 709.0], [3.4, 709.0], [3.5, 709.0], [3.6, 709.0], [3.7, 709.0], [3.8, 709.0], [3.9, 709.0], [4.0, 1042.0], [4.1, 1042.0], [4.2, 1042.0], [4.3, 1042.0], [4.4, 1042.0], [4.5, 1042.0], [4.6, 1042.0], [4.7, 1042.0], [4.8, 1042.0], [4.9, 1042.0], [5.0, 1045.0], [5.1, 1045.0], [5.2, 1045.0], [5.3, 1045.0], [5.4, 1045.0], [5.5, 1045.0], [5.6, 1045.0], [5.7, 1045.0], [5.8, 1045.0], [5.9, 1045.0], [6.0, 1048.0], [6.1, 1048.0], [6.2, 1048.0], [6.3, 1048.0], [6.4, 1048.0], [6.5, 1048.0], [6.6, 1048.0], [6.7, 1048.0], [6.8, 1048.0], [6.9, 1048.0], [7.0, 1049.0], [7.1, 1049.0], [7.2, 1049.0], [7.3, 1049.0], [7.4, 1049.0], [7.5, 1049.0], [7.6, 1049.0], [7.7, 1049.0], [7.8, 1049.0], [7.9, 1049.0], [8.0, 1050.0], [8.1, 1050.0], [8.2, 1050.0], [8.3, 1050.0], [8.4, 1050.0], [8.5, 1050.0], [8.6, 1050.0], [8.7, 1050.0], [8.8, 1050.0], [8.9, 1050.0], [9.0, 1242.0], [9.1, 1242.0], [9.2, 1242.0], [9.3, 1242.0], [9.4, 1242.0], [9.5, 1242.0], [9.6, 1242.0], [9.7, 1242.0], [9.8, 1242.0], [9.9, 1242.0], [10.0, 1243.0], [10.1, 1243.0], [10.2, 1243.0], [10.3, 1243.0], [10.4, 1243.0], [10.5, 1243.0], [10.6, 1243.0], [10.7, 1243.0], [10.8, 1243.0], [10.9, 1243.0], [11.0, 1244.0], [11.1, 1244.0], [11.2, 1244.0], [11.3, 1244.0], [11.4, 1244.0], [11.5, 1244.0], [11.6, 1244.0], [11.7, 1244.0], [11.8, 1244.0], [11.9, 1244.0], [12.0, 1255.0], [12.1, 1255.0], [12.2, 1255.0], [12.3, 1255.0], [12.4, 1255.0], [12.5, 1255.0], [12.6, 1255.0], [12.7, 1255.0], [12.8, 1255.0], [12.9, 1255.0], [13.0, 1265.0], [13.1, 1265.0], [13.2, 1265.0], [13.3, 1265.0], [13.4, 1265.0], [13.5, 1265.0], [13.6, 1265.0], [13.7, 1265.0], [13.8, 1265.0], [13.9, 1265.0], [14.0, 1289.0], [14.1, 1289.0], [14.2, 1289.0], [14.3, 1289.0], [14.4, 1289.0], [14.5, 1289.0], [14.6, 1289.0], [14.7, 1289.0], [14.8, 1289.0], [14.9, 1289.0], [15.0, 1473.0], [15.1, 1473.0], [15.2, 1473.0], [15.3, 1473.0], [15.4, 1473.0], [15.5, 1473.0], [15.6, 1473.0], [15.7, 1473.0], [15.8, 1473.0], [15.9, 1473.0], [16.0, 1736.0], [16.1, 1736.0], [16.2, 1736.0], [16.3, 1736.0], [16.4, 1736.0], [16.5, 1736.0], [16.6, 1736.0], [16.7, 1736.0], [16.8, 1736.0], [16.9, 1736.0], [17.0, 2251.0], [17.1, 2251.0], [17.2, 2251.0], [17.3, 2251.0], [17.4, 2251.0], [17.5, 2251.0], [17.6, 2251.0], [17.7, 2251.0], [17.8, 2251.0], [17.9, 2251.0], [18.0, 2251.0], [18.1, 2251.0], [18.2, 2251.0], [18.3, 2251.0], [18.4, 2251.0], [18.5, 2251.0], [18.6, 2251.0], [18.7, 2251.0], [18.8, 2251.0], [18.9, 2251.0], [19.0, 2429.0], [19.1, 2429.0], [19.2, 2429.0], [19.3, 2429.0], [19.4, 2429.0], [19.5, 2429.0], [19.6, 2429.0], [19.7, 2429.0], [19.8, 2429.0], [19.9, 2429.0], [20.0, 3090.0], [20.1, 3090.0], [20.2, 3090.0], [20.3, 3090.0], [20.4, 3090.0], [20.5, 3090.0], [20.6, 3090.0], [20.7, 3090.0], [20.8, 3090.0], [20.9, 3090.0], [21.0, 3090.0], [21.1, 3090.0], [21.2, 3090.0], [21.3, 3090.0], [21.4, 3090.0], [21.5, 3090.0], [21.6, 3090.0], [21.7, 3090.0], [21.8, 3090.0], [21.9, 3090.0], [22.0, 3090.0], [22.1, 3090.0], [22.2, 3090.0], [22.3, 3090.0], [22.4, 3090.0], [22.5, 3090.0], [22.6, 3090.0], [22.7, 3090.0], [22.8, 3090.0], [22.9, 3090.0], [23.0, 3092.0], [23.1, 3092.0], [23.2, 3092.0], [23.3, 3092.0], [23.4, 3092.0], [23.5, 3092.0], [23.6, 3092.0], [23.7, 3092.0], [23.8, 3092.0], [23.9, 3092.0], [24.0, 3093.0], [24.1, 3093.0], [24.2, 3093.0], [24.3, 3093.0], [24.4, 3093.0], [24.5, 3093.0], [24.6, 3093.0], [24.7, 3093.0], [24.8, 3093.0], [24.9, 3093.0], [25.0, 3093.0], [25.1, 3093.0], [25.2, 3093.0], [25.3, 3093.0], [25.4, 3093.0], [25.5, 3093.0], [25.6, 3093.0], [25.7, 3093.0], [25.8, 3093.0], [25.9, 3093.0], [26.0, 3094.0], [26.1, 3094.0], [26.2, 3094.0], [26.3, 3094.0], [26.4, 3094.0], [26.5, 3094.0], [26.6, 3094.0], [26.7, 3094.0], [26.8, 3094.0], [26.9, 3094.0], [27.0, 3095.0], [27.1, 3095.0], [27.2, 3095.0], [27.3, 3095.0], [27.4, 3095.0], [27.5, 3095.0], [27.6, 3095.0], [27.7, 3095.0], [27.8, 3095.0], [27.9, 3095.0], [28.0, 3096.0], [28.1, 3096.0], [28.2, 3096.0], [28.3, 3096.0], [28.4, 3096.0], [28.5, 3096.0], [28.6, 3096.0], [28.7, 3096.0], [28.8, 3096.0], [28.9, 3096.0], [29.0, 3097.0], [29.1, 3097.0], [29.2, 3097.0], [29.3, 3097.0], [29.4, 3097.0], [29.5, 3097.0], [29.6, 3097.0], [29.7, 3097.0], [29.8, 3097.0], [29.9, 3097.0], [30.0, 3097.0], [30.1, 3097.0], [30.2, 3097.0], [30.3, 3097.0], [30.4, 3097.0], [30.5, 3097.0], [30.6, 3097.0], [30.7, 3097.0], [30.8, 3097.0], [30.9, 3097.0], [31.0, 3097.0], [31.1, 3097.0], [31.2, 3097.0], [31.3, 3097.0], [31.4, 3097.0], [31.5, 3097.0], [31.6, 3097.0], [31.7, 3097.0], [31.8, 3097.0], [31.9, 3097.0], [32.0, 19652.0], [32.1, 19652.0], [32.2, 19652.0], [32.3, 19652.0], [32.4, 19652.0], [32.5, 19652.0], [32.6, 19652.0], [32.7, 19652.0], [32.8, 19652.0], [32.9, 19652.0], [33.0, 22624.0], [33.1, 22624.0], [33.2, 22624.0], [33.3, 22624.0], [33.4, 22624.0], [33.5, 22624.0], [33.6, 22624.0], [33.7, 22624.0], [33.8, 22624.0], [33.9, 22624.0], [34.0, 24144.0], [34.1, 24144.0], [34.2, 24144.0], [34.3, 24144.0], [34.4, 24144.0], [34.5, 24144.0], [34.6, 24144.0], [34.7, 24144.0], [34.8, 24144.0], [34.9, 24144.0], [35.0, 26269.0], [35.1, 26269.0], [35.2, 26269.0], [35.3, 26269.0], [35.4, 26269.0], [35.5, 26269.0], [35.6, 26269.0], [35.7, 26269.0], [35.8, 26269.0], [35.9, 26269.0], [36.0, 26904.0], [36.1, 26904.0], [36.2, 26904.0], [36.3, 26904.0], [36.4, 26904.0], [36.5, 26904.0], [36.6, 26904.0], [36.7, 26904.0], [36.8, 26904.0], [36.9, 26904.0], [37.0, 27047.0], [37.1, 27047.0], [37.2, 27047.0], [37.3, 27047.0], [37.4, 27047.0], [37.5, 27047.0], [37.6, 27047.0], [37.7, 27047.0], [37.8, 27047.0], [37.9, 27047.0], [38.0, 27702.0], [38.1, 27702.0], [38.2, 27702.0], [38.3, 27702.0], [38.4, 27702.0], [38.5, 27702.0], [38.6, 27702.0], [38.7, 27702.0], [38.8, 27702.0], [38.9, 27702.0], [39.0, 28056.0], [39.1, 28056.0], [39.2, 28056.0], [39.3, 28056.0], [39.4, 28056.0], [39.5, 28056.0], [39.6, 28056.0], [39.7, 28056.0], [39.8, 28056.0], [39.9, 28056.0], [40.0, 28161.0], [40.1, 28161.0], [40.2, 28161.0], [40.3, 28161.0], [40.4, 28161.0], [40.5, 28161.0], [40.6, 28161.0], [40.7, 28161.0], [40.8, 28161.0], [40.9, 28161.0], [41.0, 28521.0], [41.1, 28521.0], [41.2, 28521.0], [41.3, 28521.0], [41.4, 28521.0], [41.5, 28521.0], [41.6, 28521.0], [41.7, 28521.0], [41.8, 28521.0], [41.9, 28521.0], [42.0, 28657.0], [42.1, 28657.0], [42.2, 28657.0], [42.3, 28657.0], [42.4, 28657.0], [42.5, 28657.0], [42.6, 28657.0], [42.7, 28657.0], [42.8, 28657.0], [42.9, 28657.0], [43.0, 28745.0], [43.1, 28745.0], [43.2, 28745.0], [43.3, 28745.0], [43.4, 28745.0], [43.5, 28745.0], [43.6, 28745.0], [43.7, 28745.0], [43.8, 28745.0], [43.9, 28745.0], [44.0, 28888.0], [44.1, 28888.0], [44.2, 28888.0], [44.3, 28888.0], [44.4, 28888.0], [44.5, 28888.0], [44.6, 28888.0], [44.7, 28888.0], [44.8, 28888.0], [44.9, 28888.0], [45.0, 29244.0], [45.1, 29244.0], [45.2, 29244.0], [45.3, 29244.0], [45.4, 29244.0], [45.5, 29244.0], [45.6, 29244.0], [45.7, 29244.0], [45.8, 29244.0], [45.9, 29244.0], [46.0, 29301.0], [46.1, 29301.0], [46.2, 29301.0], [46.3, 29301.0], [46.4, 29301.0], [46.5, 29301.0], [46.6, 29301.0], [46.7, 29301.0], [46.8, 29301.0], [46.9, 29301.0], [47.0, 29318.0], [47.1, 29318.0], [47.2, 29318.0], [47.3, 29318.0], [47.4, 29318.0], [47.5, 29318.0], [47.6, 29318.0], [47.7, 29318.0], [47.8, 29318.0], [47.9, 29318.0], [48.0, 29424.0], [48.1, 29424.0], [48.2, 29424.0], [48.3, 29424.0], [48.4, 29424.0], [48.5, 29424.0], [48.6, 29424.0], [48.7, 29424.0], [48.8, 29424.0], [48.9, 29424.0], [49.0, 29960.0], [49.1, 29960.0], [49.2, 29960.0], [49.3, 29960.0], [49.4, 29960.0], [49.5, 29960.0], [49.6, 29960.0], [49.7, 29960.0], [49.8, 29960.0], [49.9, 29960.0], [50.0, 29960.0], [50.1, 29960.0], [50.2, 29960.0], [50.3, 29960.0], [50.4, 29960.0], [50.5, 29960.0], [50.6, 29960.0], [50.7, 29960.0], [50.8, 29960.0], [50.9, 29960.0], [51.0, 30068.0], [51.1, 30068.0], [51.2, 30068.0], [51.3, 30068.0], [51.4, 30068.0], [51.5, 30068.0], [51.6, 30068.0], [51.7, 30068.0], [51.8, 30068.0], [51.9, 30068.0], [52.0, 30371.0], [52.1, 30371.0], [52.2, 30371.0], [52.3, 30371.0], [52.4, 30371.0], [52.5, 30371.0], [52.6, 30371.0], [52.7, 30371.0], [52.8, 30371.0], [52.9, 30371.0], [53.0, 30635.0], [53.1, 30635.0], [53.2, 30635.0], [53.3, 30635.0], [53.4, 30635.0], [53.5, 30635.0], [53.6, 30635.0], [53.7, 30635.0], [53.8, 30635.0], [53.9, 30635.0], [54.0, 30745.0], [54.1, 30745.0], [54.2, 30745.0], [54.3, 30745.0], [54.4, 30745.0], [54.5, 30745.0], [54.6, 30745.0], [54.7, 30745.0], [54.8, 30745.0], [54.9, 30745.0], [55.0, 30833.0], [55.1, 30833.0], [55.2, 30833.0], [55.3, 30833.0], [55.4, 30833.0], [55.5, 30833.0], [55.6, 30833.0], [55.7, 30833.0], [55.8, 30833.0], [55.9, 30833.0], [56.0, 30962.0], [56.1, 30962.0], [56.2, 30962.0], [56.3, 30962.0], [56.4, 30962.0], [56.5, 30962.0], [56.6, 30962.0], [56.7, 30962.0], [56.8, 30962.0], [56.9, 30962.0], [57.0, 30969.0], [57.1, 30969.0], [57.2, 30969.0], [57.3, 30969.0], [57.4, 30969.0], [57.5, 30969.0], [57.6, 30969.0], [57.7, 30969.0], [57.8, 30969.0], [57.9, 30969.0], [58.0, 31292.0], [58.1, 31292.0], [58.2, 31292.0], [58.3, 31292.0], [58.4, 31292.0], [58.5, 31292.0], [58.6, 31292.0], [58.7, 31292.0], [58.8, 31292.0], [58.9, 31292.0], [59.0, 31295.0], [59.1, 31295.0], [59.2, 31295.0], [59.3, 31295.0], [59.4, 31295.0], [59.5, 31295.0], [59.6, 31295.0], [59.7, 31295.0], [59.8, 31295.0], [59.9, 31295.0], [60.0, 31422.0], [60.1, 31422.0], [60.2, 31422.0], [60.3, 31422.0], [60.4, 31422.0], [60.5, 31422.0], [60.6, 31422.0], [60.7, 31422.0], [60.8, 31422.0], [60.9, 31422.0], [61.0, 31538.0], [61.1, 31538.0], [61.2, 31538.0], [61.3, 31538.0], [61.4, 31538.0], [61.5, 31538.0], [61.6, 31538.0], [61.7, 31538.0], [61.8, 31538.0], [61.9, 31538.0], [62.0, 31647.0], [62.1, 31647.0], [62.2, 31647.0], [62.3, 31647.0], [62.4, 31647.0], [62.5, 31647.0], [62.6, 31647.0], [62.7, 31647.0], [62.8, 31647.0], [62.9, 31647.0], [63.0, 31664.0], [63.1, 31664.0], [63.2, 31664.0], [63.3, 31664.0], [63.4, 31664.0], [63.5, 31664.0], [63.6, 31664.0], [63.7, 31664.0], [63.8, 31664.0], [63.9, 31664.0], [64.0, 31684.0], [64.1, 31684.0], [64.2, 31684.0], [64.3, 31684.0], [64.4, 31684.0], [64.5, 31684.0], [64.6, 31684.0], [64.7, 31684.0], [64.8, 31684.0], [64.9, 31684.0], [65.0, 31717.0], [65.1, 31717.0], [65.2, 31717.0], [65.3, 31717.0], [65.4, 31717.0], [65.5, 31717.0], [65.6, 31717.0], [65.7, 31717.0], [65.8, 31717.0], [65.9, 31717.0], [66.0, 31858.0], [66.1, 31858.0], [66.2, 31858.0], [66.3, 31858.0], [66.4, 31858.0], [66.5, 31858.0], [66.6, 31858.0], [66.7, 31858.0], [66.8, 31858.0], [66.9, 31858.0], [67.0, 31936.0], [67.1, 31936.0], [67.2, 31936.0], [67.3, 31936.0], [67.4, 31936.0], [67.5, 31936.0], [67.6, 31936.0], [67.7, 31936.0], [67.8, 31936.0], [67.9, 31936.0], [68.0, 32127.0], [68.1, 32127.0], [68.2, 32127.0], [68.3, 32127.0], [68.4, 32127.0], [68.5, 32127.0], [68.6, 32127.0], [68.7, 32127.0], [68.8, 32127.0], [68.9, 32127.0], [69.0, 32274.0], [69.1, 32274.0], [69.2, 32274.0], [69.3, 32274.0], [69.4, 32274.0], [69.5, 32274.0], [69.6, 32274.0], [69.7, 32274.0], [69.8, 32274.0], [69.9, 32274.0], [70.0, 32332.0], [70.1, 32332.0], [70.2, 32332.0], [70.3, 32332.0], [70.4, 32332.0], [70.5, 32332.0], [70.6, 32332.0], [70.7, 32332.0], [70.8, 32332.0], [70.9, 32332.0], [71.0, 32535.0], [71.1, 32535.0], [71.2, 32535.0], [71.3, 32535.0], [71.4, 32535.0], [71.5, 32535.0], [71.6, 32535.0], [71.7, 32535.0], [71.8, 32535.0], [71.9, 32535.0], [72.0, 32583.0], [72.1, 32583.0], [72.2, 32583.0], [72.3, 32583.0], [72.4, 32583.0], [72.5, 32583.0], [72.6, 32583.0], [72.7, 32583.0], [72.8, 32583.0], [72.9, 32583.0], [73.0, 32629.0], [73.1, 32629.0], [73.2, 32629.0], [73.3, 32629.0], [73.4, 32629.0], [73.5, 32629.0], [73.6, 32629.0], [73.7, 32629.0], [73.8, 32629.0], [73.9, 32629.0], [74.0, 32737.0], [74.1, 32737.0], [74.2, 32737.0], [74.3, 32737.0], [74.4, 32737.0], [74.5, 32737.0], [74.6, 32737.0], [74.7, 32737.0], [74.8, 32737.0], [74.9, 32737.0], [75.0, 32910.0], [75.1, 32910.0], [75.2, 32910.0], [75.3, 32910.0], [75.4, 32910.0], [75.5, 32910.0], [75.6, 32910.0], [75.7, 32910.0], [75.8, 32910.0], [75.9, 32910.0], [76.0, 32927.0], [76.1, 32927.0], [76.2, 32927.0], [76.3, 32927.0], [76.4, 32927.0], [76.5, 32927.0], [76.6, 32927.0], [76.7, 32927.0], [76.8, 32927.0], [76.9, 32927.0], [77.0, 32957.0], [77.1, 32957.0], [77.2, 32957.0], [77.3, 32957.0], [77.4, 32957.0], [77.5, 32957.0], [77.6, 32957.0], [77.7, 32957.0], [77.8, 32957.0], [77.9, 32957.0], [78.0, 33084.0], [78.1, 33084.0], [78.2, 33084.0], [78.3, 33084.0], [78.4, 33084.0], [78.5, 33084.0], [78.6, 33084.0], [78.7, 33084.0], [78.8, 33084.0], [78.9, 33084.0], [79.0, 33147.0], [79.1, 33147.0], [79.2, 33147.0], [79.3, 33147.0], [79.4, 33147.0], [79.5, 33147.0], [79.6, 33147.0], [79.7, 33147.0], [79.8, 33147.0], [79.9, 33147.0], [80.0, 33182.0], [80.1, 33182.0], [80.2, 33182.0], [80.3, 33182.0], [80.4, 33182.0], [80.5, 33182.0], [80.6, 33182.0], [80.7, 33182.0], [80.8, 33182.0], [80.9, 33182.0], [81.0, 33187.0], [81.1, 33187.0], [81.2, 33187.0], [81.3, 33187.0], [81.4, 33187.0], [81.5, 33187.0], [81.6, 33187.0], [81.7, 33187.0], [81.8, 33187.0], [81.9, 33187.0], [82.0, 33256.0], [82.1, 33256.0], [82.2, 33256.0], [82.3, 33256.0], [82.4, 33256.0], [82.5, 33256.0], [82.6, 33256.0], [82.7, 33256.0], [82.8, 33256.0], [82.9, 33256.0], [83.0, 33313.0], [83.1, 33313.0], [83.2, 33313.0], [83.3, 33313.0], [83.4, 33313.0], [83.5, 33313.0], [83.6, 33313.0], [83.7, 33313.0], [83.8, 33313.0], [83.9, 33313.0], [84.0, 33314.0], [84.1, 33314.0], [84.2, 33314.0], [84.3, 33314.0], [84.4, 33314.0], [84.5, 33314.0], [84.6, 33314.0], [84.7, 33314.0], [84.8, 33314.0], [84.9, 33314.0], [85.0, 33470.0], [85.1, 33470.0], [85.2, 33470.0], [85.3, 33470.0], [85.4, 33470.0], [85.5, 33470.0], [85.6, 33470.0], [85.7, 33470.0], [85.8, 33470.0], [85.9, 33470.0], [86.0, 33501.0], [86.1, 33501.0], [86.2, 33501.0], [86.3, 33501.0], [86.4, 33501.0], [86.5, 33501.0], [86.6, 33501.0], [86.7, 33501.0], [86.8, 33501.0], [86.9, 33501.0], [87.0, 33598.0], [87.1, 33598.0], [87.2, 33598.0], [87.3, 33598.0], [87.4, 33598.0], [87.5, 33598.0], [87.6, 33598.0], [87.7, 33598.0], [87.8, 33598.0], [87.9, 33598.0], [88.0, 33617.0], [88.1, 33617.0], [88.2, 33617.0], [88.3, 33617.0], [88.4, 33617.0], [88.5, 33617.0], [88.6, 33617.0], [88.7, 33617.0], [88.8, 33617.0], [88.9, 33617.0], [89.0, 33652.0], [89.1, 33652.0], [89.2, 33652.0], [89.3, 33652.0], [89.4, 33652.0], [89.5, 33652.0], [89.6, 33652.0], [89.7, 33652.0], [89.8, 33652.0], [89.9, 33652.0], [90.0, 33682.0], [90.1, 33682.0], [90.2, 33682.0], [90.3, 33682.0], [90.4, 33682.0], [90.5, 33682.0], [90.6, 33682.0], [90.7, 33682.0], [90.8, 33682.0], [90.9, 33682.0], [91.0, 33715.0], [91.1, 33715.0], [91.2, 33715.0], [91.3, 33715.0], [91.4, 33715.0], [91.5, 33715.0], [91.6, 33715.0], [91.7, 33715.0], [91.8, 33715.0], [91.9, 33715.0], [92.0, 33733.0], [92.1, 33733.0], [92.2, 33733.0], [92.3, 33733.0], [92.4, 33733.0], [92.5, 33733.0], [92.6, 33733.0], [92.7, 33733.0], [92.8, 33733.0], [92.9, 33733.0], [93.0, 33734.0], [93.1, 33734.0], [93.2, 33734.0], [93.3, 33734.0], [93.4, 33734.0], [93.5, 33734.0], [93.6, 33734.0], [93.7, 33734.0], [93.8, 33734.0], [93.9, 33734.0], [94.0, 33752.0], [94.1, 33752.0], [94.2, 33752.0], [94.3, 33752.0], [94.4, 33752.0], [94.5, 33752.0], [94.6, 33752.0], [94.7, 33752.0], [94.8, 33752.0], [94.9, 33752.0], [95.0, 33767.0], [95.1, 33767.0], [95.2, 33767.0], [95.3, 33767.0], [95.4, 33767.0], [95.5, 33767.0], [95.6, 33767.0], [95.7, 33767.0], [95.8, 33767.0], [95.9, 33767.0], [96.0, 33781.0], [96.1, 33781.0], [96.2, 33781.0], [96.3, 33781.0], [96.4, 33781.0], [96.5, 33781.0], [96.6, 33781.0], [96.7, 33781.0], [96.8, 33781.0], [96.9, 33781.0], [97.0, 33795.0], [97.1, 33795.0], [97.2, 33795.0], [97.3, 33795.0], [97.4, 33795.0], [97.5, 33795.0], [97.6, 33795.0], [97.7, 33795.0], [97.8, 33795.0], [97.9, 33795.0], [98.0, 33804.0], [98.1, 33804.0], [98.2, 33804.0], [98.3, 33804.0], [98.4, 33804.0], [98.5, 33804.0], [98.6, 33804.0], [98.7, 33804.0], [98.8, 33804.0], [98.9, 33804.0], [99.0, 33827.0], [99.1, 33827.0], [99.2, 33827.0], [99.3, 33827.0], [99.4, 33827.0], [99.5, 33827.0], [99.6, 33827.0], [99.7, 33827.0], [99.8, 33827.0], [99.9, 33827.0]], "isOverall": false, "label": "HTTP Request (Mid image)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 12.0, "series": [{"data": [[600.0, 3.0], [700.0, 1.0], [1000.0, 5.0], [1200.0, 6.0], [1400.0, 1.0], [1700.0, 1.0], [2200.0, 2.0], [2400.0, 1.0], [3000.0, 12.0], [19600.0, 1.0], [22600.0, 1.0], [24100.0, 1.0], [26200.0, 1.0], [26900.0, 1.0], [27000.0, 1.0], [27700.0, 1.0], [28000.0, 1.0], [28100.0, 1.0], [28500.0, 1.0], [28600.0, 1.0], [28700.0, 1.0], [28800.0, 1.0], [29200.0, 1.0], [29300.0, 2.0], [29400.0, 1.0], [29900.0, 2.0], [30000.0, 1.0], [30300.0, 1.0], [30600.0, 1.0], [30700.0, 1.0], [30800.0, 1.0], [30900.0, 2.0], [31200.0, 2.0], [31400.0, 1.0], [31500.0, 1.0], [31600.0, 3.0], [31700.0, 1.0], [31800.0, 1.0], [31900.0, 1.0], [32100.0, 1.0], [32200.0, 1.0], [32300.0, 1.0], [32500.0, 2.0], [32600.0, 1.0], [32700.0, 1.0], [33600.0, 3.0], [32900.0, 3.0], [33000.0, 1.0], [33100.0, 3.0], [33200.0, 1.0], [33800.0, 2.0], [33300.0, 2.0], [33400.0, 1.0], [33500.0, 2.0], [33700.0, 7.0]], "isOverall": false, "label": "HTTP Request (Mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 33800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 32.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 68.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 68.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 32.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 34.54411764705883, "minX": 1.7123763E12, "maxY": 84.8125, "series": [{"data": [[1.71237636E12, 34.54411764705883], [1.7123763E12, 84.8125]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71237636E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 683.6666666666666, "minX": 1.0, "maxY": 33827.0, "series": [{"data": [[2.0, 33804.0], [3.0, 33795.0], [4.0, 33781.0], [5.0, 33767.0], [6.0, 33752.0], [8.0, 33733.5], [9.0, 33715.0], [10.0, 33682.0], [11.0, 33652.0], [12.0, 33617.0], [13.0, 33598.0], [14.0, 33501.0], [15.0, 33470.0], [16.0, 33314.0], [17.0, 33313.0], [18.0, 33256.0], [20.0, 33184.5], [21.0, 33147.0], [22.0, 33084.0], [23.0, 32957.0], [24.0, 32927.0], [25.0, 32910.0], [26.0, 32737.0], [27.0, 32629.0], [28.0, 32583.0], [29.0, 32535.0], [30.0, 32332.0], [31.0, 32274.0], [33.0, 31936.0], [32.0, 32127.0], [35.0, 31717.0], [34.0, 31858.0], [37.0, 31664.0], [36.0, 31684.0], [39.0, 31538.0], [38.0, 31647.0], [41.0, 31295.0], [40.0, 31422.0], [43.0, 30969.0], [42.0, 31292.0], [45.0, 30833.0], [44.0, 30962.0], [47.0, 30635.0], [46.0, 30745.0], [49.0, 30068.0], [48.0, 30371.0], [51.0, 29960.0], [53.0, 29318.0], [52.0, 29424.0], [55.0, 29244.0], [54.0, 29301.0], [57.0, 28745.0], [56.0, 28888.0], [59.0, 28521.0], [58.0, 28657.0], [61.0, 28056.0], [60.0, 28161.0], [63.0, 27047.0], [62.0, 27702.0], [67.0, 22624.0], [66.0, 24144.0], [65.0, 26269.0], [64.0, 26904.0], [71.0, 3097.0], [69.0, 3097.0], [68.0, 19652.0], [75.0, 3090.0], [73.0, 3090.0], [72.0, 3096.5], [78.0, 3094.0], [77.0, 3093.0], [76.0, 3095.0], [83.0, 2251.0], [82.0, 2251.0], [81.0, 2429.0], [80.0, 3092.5], [87.0, 1265.0], [86.0, 1289.0], [85.0, 1473.0], [84.0, 1736.0], [91.0, 1242.0], [90.0, 1243.5], [88.0, 1255.0], [94.0, 1049.5], [92.0, 1045.0], [97.0, 709.0], [96.0, 1045.0], [100.0, 683.6666666666666], [1.0, 33827.0]], "isOverall": false, "label": "HTTP Request (Mid image)", "isController": false}, {"data": [[50.62999999999994, 21799.310000000005]], "isOverall": false, "label": "HTTP Request (Mid image)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 244.26666666666668, "minX": 1.7123763E12, "maxY": 86442.05, "series": [{"data": [[1.71237636E12, 254.56666666666666], [1.7123763E12, 244.26666666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71237636E12, 86442.05], [1.7123763E12, 40678.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71237636E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1962.375, "minX": 1.7123763E12, "maxY": 31134.33823529412, "series": [{"data": [[1.71237636E12, 31134.33823529412], [1.7123763E12, 1962.375]], "isOverall": false, "label": "HTTP Request (Mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71237636E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1961.9687499999995, "minX": 1.7123763E12, "maxY": 31134.14705882353, "series": [{"data": [[1.71237636E12, 31134.14705882353], [1.7123763E12, 1961.9687499999995]], "isOverall": false, "label": "HTTP Request (Mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71237636E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 211.5, "minX": 1.7123763E12, "maxY": 211.55882352941182, "series": [{"data": [[1.71237636E12, 211.55882352941182], [1.7123763E12, 211.5]], "isOverall": false, "label": "HTTP Request (Mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71237636E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 19652.0, "minX": 1.71237636E12, "maxY": 33827.0, "series": [{"data": [[1.71237636E12, 33827.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71237636E12, 19652.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71237636E12, 33735.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71237636E12, 33827.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71237636E12, 31787.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71237636E12, 33788.7]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71237636E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1049.0, "minX": 1.0, "maxY": 33733.0, "series": [{"data": [[1.0, 23384.0], [2.0, 26975.5], [4.0, 29960.0], [8.0, 30897.5], [11.0, 31717.0], [3.0, 28056.0], [7.0, 28888.0], [14.0, 33020.5], [15.0, 33733.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 1993.5], [13.0, 3093.0], [15.0, 1049.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1049.0, "minX": 1.0, "maxY": 33733.0, "series": [{"data": [[1.0, 23384.0], [2.0, 26975.5], [4.0, 29960.0], [8.0, 30897.0], [11.0, 31717.0], [3.0, 28056.0], [7.0, 28888.0], [14.0, 33020.5], [15.0, 33733.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 1993.5], [13.0, 3093.0], [15.0, 1049.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7123763E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7123763E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123763E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.7123763E12, "maxY": 1.1333333333333333, "series": [{"data": [[1.71237636E12, 1.1333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7123763E12, 0.5333333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71237636E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.7123763E12, "maxY": 1.1333333333333333, "series": [{"data": [[1.71237636E12, 1.1333333333333333]], "isOverall": false, "label": "HTTP Request (Mid image)-success", "isController": false}, {"data": [[1.7123763E12, 0.5333333333333333]], "isOverall": false, "label": "HTTP Request (Mid image)-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71237636E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.7123763E12, "maxY": 1.1333333333333333, "series": [{"data": [[1.71237636E12, 1.1333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7123763E12, 0.5333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71237636E12, "title": "Total Transactions Per Second"}},
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

