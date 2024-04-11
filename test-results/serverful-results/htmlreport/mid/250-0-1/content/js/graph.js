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
        data: {"result": {"minY": 444.0, "minX": 0.0, "maxY": 52472.0, "series": [{"data": [[0.0, 444.0], [0.1, 444.0], [0.2, 444.0], [0.3, 444.0], [0.4, 446.0], [0.5, 446.0], [0.6, 446.0], [0.7, 446.0], [0.8, 447.0], [0.9, 447.0], [1.0, 447.0], [1.1, 447.0], [1.2, 447.0], [1.3, 448.0], [1.4, 448.0], [1.5, 448.0], [1.6, 459.0], [1.7, 459.0], [1.8, 459.0], [1.9, 459.0], [2.0, 460.0], [2.1, 460.0], [2.2, 460.0], [2.3, 460.0], [2.4, 460.0], [2.5, 460.0], [2.6, 460.0], [2.7, 460.0], [2.8, 461.0], [2.9, 461.0], [3.0, 461.0], [3.1, 461.0], [3.2, 465.0], [3.3, 465.0], [3.4, 465.0], [3.5, 465.0], [3.6, 465.0], [3.7, 465.0], [3.8, 465.0], [3.9, 465.0], [4.0, 466.0], [4.1, 466.0], [4.2, 466.0], [4.3, 466.0], [4.4, 466.0], [4.5, 466.0], [4.6, 466.0], [4.7, 466.0], [4.8, 467.0], [4.9, 467.0], [5.0, 467.0], [5.1, 467.0], [5.2, 467.0], [5.3, 467.0], [5.4, 467.0], [5.5, 467.0], [5.6, 467.0], [5.7, 467.0], [5.8, 467.0], [5.9, 467.0], [6.0, 467.0], [6.1, 467.0], [6.2, 467.0], [6.3, 467.0], [6.4, 470.0], [6.5, 470.0], [6.6, 470.0], [6.7, 470.0], [6.8, 470.0], [6.9, 564.0], [7.0, 564.0], [7.1, 564.0], [7.2, 564.0], [7.3, 565.0], [7.4, 565.0], [7.5, 565.0], [7.6, 565.0], [7.7, 565.0], [7.8, 565.0], [7.9, 565.0], [8.0, 565.0], [8.1, 566.0], [8.2, 566.0], [8.3, 566.0], [8.4, 566.0], [8.5, 712.0], [8.6, 712.0], [8.7, 712.0], [8.8, 712.0], [8.9, 715.0], [9.0, 715.0], [9.1, 715.0], [9.2, 715.0], [9.3, 777.0], [9.4, 777.0], [9.5, 777.0], [9.6, 777.0], [9.7, 779.0], [9.8, 779.0], [9.9, 779.0], [10.0, 779.0], [10.1, 794.0], [10.2, 794.0], [10.3, 794.0], [10.4, 794.0], [10.5, 794.0], [10.6, 794.0], [10.7, 794.0], [10.8, 794.0], [10.9, 794.0], [11.0, 794.0], [11.1, 794.0], [11.2, 794.0], [11.3, 796.0], [11.4, 796.0], [11.5, 796.0], [11.6, 796.0], [11.7, 798.0], [11.8, 798.0], [11.9, 798.0], [12.0, 798.0], [12.1, 799.0], [12.2, 799.0], [12.3, 799.0], [12.4, 799.0], [12.5, 799.0], [12.6, 799.0], [12.7, 799.0], [12.8, 799.0], [12.9, 802.0], [13.0, 802.0], [13.1, 802.0], [13.2, 802.0], [13.3, 802.0], [13.4, 802.0], [13.5, 802.0], [13.6, 802.0], [13.7, 806.0], [13.8, 806.0], [13.9, 806.0], [14.0, 806.0], [14.1, 842.0], [14.2, 842.0], [14.3, 842.0], [14.4, 842.0], [14.5, 863.0], [14.6, 863.0], [14.7, 863.0], [14.8, 863.0], [14.9, 953.0], [15.0, 953.0], [15.1, 953.0], [15.2, 953.0], [15.3, 1086.0], [15.4, 1086.0], [15.5, 1086.0], [15.6, 1086.0], [15.7, 1238.0], [15.8, 1238.0], [15.9, 1238.0], [16.0, 1238.0], [16.1, 1328.0], [16.2, 1328.0], [16.3, 1328.0], [16.4, 1328.0], [16.5, 1379.0], [16.6, 1379.0], [16.7, 1379.0], [16.8, 1379.0], [16.9, 1380.0], [17.0, 1380.0], [17.1, 1380.0], [17.2, 1380.0], [17.3, 1380.0], [17.4, 1380.0], [17.5, 1380.0], [17.6, 1380.0], [17.7, 1380.0], [17.8, 1380.0], [17.9, 1380.0], [18.0, 1380.0], [18.1, 1380.0], [18.2, 1380.0], [18.3, 1380.0], [18.4, 1380.0], [18.5, 1382.0], [18.6, 1382.0], [18.7, 1382.0], [18.8, 1382.0], [18.9, 1382.0], [19.0, 1382.0], [19.1, 1382.0], [19.2, 1382.0], [19.3, 1382.0], [19.4, 1382.0], [19.5, 1382.0], [19.6, 1382.0], [19.7, 1382.0], [19.8, 1382.0], [19.9, 1382.0], [20.0, 1382.0], [20.1, 1383.0], [20.2, 1383.0], [20.3, 1383.0], [20.4, 1383.0], [20.5, 1387.0], [20.6, 1387.0], [20.7, 1387.0], [20.8, 1387.0], [20.9, 1389.0], [21.0, 1389.0], [21.1, 1389.0], [21.2, 1389.0], [21.3, 1389.0], [21.4, 1389.0], [21.5, 1389.0], [21.6, 1389.0], [21.7, 1390.0], [21.8, 1390.0], [21.9, 1390.0], [22.0, 1390.0], [22.1, 1441.0], [22.2, 1441.0], [22.3, 1441.0], [22.4, 1441.0], [22.5, 1459.0], [22.6, 1459.0], [22.7, 1459.0], [22.8, 1459.0], [22.9, 1459.0], [23.0, 1459.0], [23.1, 1459.0], [23.2, 1459.0], [23.3, 1521.0], [23.4, 1521.0], [23.5, 1521.0], [23.6, 1811.0], [23.7, 1811.0], [23.8, 1811.0], [23.9, 1811.0], [24.0, 1825.0], [24.1, 1825.0], [24.2, 1825.0], [24.3, 1825.0], [24.4, 2085.0], [24.5, 2085.0], [24.6, 2085.0], [24.7, 2085.0], [24.8, 2158.0], [24.9, 2158.0], [25.0, 2158.0], [25.1, 2158.0], [25.2, 2273.0], [25.3, 2273.0], [25.4, 2273.0], [25.5, 2273.0], [25.6, 2373.0], [25.7, 2373.0], [25.8, 2373.0], [25.9, 2373.0], [26.0, 2384.0], [26.1, 2384.0], [26.2, 2384.0], [26.3, 2384.0], [26.4, 2390.0], [26.5, 2390.0], [26.6, 2390.0], [26.7, 2390.0], [26.8, 2398.0], [26.9, 2398.0], [27.0, 2398.0], [27.1, 2398.0], [27.2, 2399.0], [27.3, 2399.0], [27.4, 2399.0], [27.5, 2399.0], [27.6, 2415.0], [27.7, 2415.0], [27.8, 2415.0], [27.9, 2415.0], [28.0, 2421.0], [28.1, 2421.0], [28.2, 2421.0], [28.3, 2421.0], [28.4, 2423.0], [28.5, 2423.0], [28.6, 2423.0], [28.7, 2423.0], [28.8, 2431.0], [28.9, 2431.0], [29.0, 2431.0], [29.1, 2431.0], [29.2, 2439.0], [29.3, 2439.0], [29.4, 2439.0], [29.5, 2439.0], [29.6, 2440.0], [29.7, 2440.0], [29.8, 2440.0], [29.9, 2440.0], [30.0, 2452.0], [30.1, 2452.0], [30.2, 2452.0], [30.3, 2452.0], [30.4, 2457.0], [30.5, 2457.0], [30.6, 2457.0], [30.7, 2457.0], [30.8, 2457.0], [30.9, 2457.0], [31.0, 2457.0], [31.1, 2457.0], [31.2, 2457.0], [31.3, 2457.0], [31.4, 2457.0], [31.5, 2457.0], [31.6, 2459.0], [31.7, 2459.0], [31.8, 2459.0], [31.9, 2459.0], [32.0, 2465.0], [32.1, 2465.0], [32.2, 2465.0], [32.3, 2465.0], [32.4, 2465.0], [32.5, 2465.0], [32.6, 2465.0], [32.7, 2465.0], [32.8, 2466.0], [32.9, 2466.0], [33.0, 2466.0], [33.1, 2466.0], [33.2, 2502.0], [33.3, 2502.0], [33.4, 2502.0], [33.5, 2502.0], [33.6, 2503.0], [33.7, 2503.0], [33.8, 2503.0], [33.9, 2503.0], [34.0, 2503.0], [34.1, 2503.0], [34.2, 2503.0], [34.3, 2503.0], [34.4, 2504.0], [34.5, 2504.0], [34.6, 2504.0], [34.7, 2504.0], [34.8, 2507.0], [34.9, 2507.0], [35.0, 2507.0], [35.1, 2507.0], [35.2, 2520.0], [35.3, 2520.0], [35.4, 2520.0], [35.5, 2520.0], [35.6, 2526.0], [35.7, 2526.0], [35.8, 2526.0], [35.9, 2526.0], [36.0, 2553.0], [36.1, 2553.0], [36.2, 2553.0], [36.3, 2553.0], [36.4, 2567.0], [36.5, 2567.0], [36.6, 2567.0], [36.7, 2567.0], [36.8, 2574.0], [36.9, 2574.0], [37.0, 2574.0], [37.1, 2574.0], [37.2, 2583.0], [37.3, 2583.0], [37.4, 2583.0], [37.5, 2583.0], [37.6, 2589.0], [37.7, 2589.0], [37.8, 2589.0], [37.9, 2589.0], [38.0, 2589.0], [38.1, 2589.0], [38.2, 2589.0], [38.3, 2589.0], [38.4, 2595.0], [38.5, 2595.0], [38.6, 2595.0], [38.7, 2595.0], [38.8, 2610.0], [38.9, 2610.0], [39.0, 2610.0], [39.1, 2610.0], [39.2, 2620.0], [39.3, 2620.0], [39.4, 2620.0], [39.5, 2620.0], [39.6, 2621.0], [39.7, 2621.0], [39.8, 2621.0], [39.9, 2621.0], [40.0, 2625.0], [40.1, 2625.0], [40.2, 2625.0], [40.3, 2625.0], [40.4, 2632.0], [40.5, 2632.0], [40.6, 2632.0], [40.7, 2632.0], [40.8, 2639.0], [40.9, 2639.0], [41.0, 2639.0], [41.1, 2639.0], [41.2, 2641.0], [41.3, 2641.0], [41.4, 2641.0], [41.5, 2641.0], [41.6, 2655.0], [41.7, 2655.0], [41.8, 2655.0], [41.9, 2655.0], [42.0, 2655.0], [42.1, 2655.0], [42.2, 2655.0], [42.3, 2655.0], [42.4, 2656.0], [42.5, 2656.0], [42.6, 2656.0], [42.7, 2656.0], [42.8, 2700.0], [42.9, 2700.0], [43.0, 2700.0], [43.1, 2700.0], [43.2, 2702.0], [43.3, 2702.0], [43.4, 2702.0], [43.5, 2702.0], [43.6, 2702.0], [43.7, 2702.0], [43.8, 2702.0], [43.9, 2702.0], [44.0, 2709.0], [44.1, 2709.0], [44.2, 2709.0], [44.3, 2709.0], [44.4, 2722.0], [44.5, 2722.0], [44.6, 2722.0], [44.7, 2722.0], [44.8, 2729.0], [44.9, 2729.0], [45.0, 2729.0], [45.1, 2729.0], [45.2, 2762.0], [45.3, 2762.0], [45.4, 2762.0], [45.5, 2762.0], [45.6, 2764.0], [45.7, 2764.0], [45.8, 2764.0], [45.9, 2764.0], [46.0, 2769.0], [46.1, 2769.0], [46.2, 2769.0], [46.3, 2769.0], [46.4, 2769.0], [46.5, 2769.0], [46.6, 2769.0], [46.7, 2769.0], [46.8, 2773.0], [46.9, 2773.0], [47.0, 2773.0], [47.1, 2773.0], [47.2, 2780.0], [47.3, 2780.0], [47.4, 2780.0], [47.5, 2780.0], [47.6, 2787.0], [47.7, 2787.0], [47.8, 2787.0], [47.9, 2787.0], [48.0, 2787.0], [48.1, 2787.0], [48.2, 2787.0], [48.3, 2787.0], [48.4, 2788.0], [48.5, 2788.0], [48.6, 2788.0], [48.7, 2788.0], [48.8, 2794.0], [48.9, 2794.0], [49.0, 2794.0], [49.1, 2794.0], [49.2, 2795.0], [49.3, 2795.0], [49.4, 2795.0], [49.5, 2795.0], [49.6, 2795.0], [49.7, 2795.0], [49.8, 2795.0], [49.9, 2795.0], [50.0, 2800.0], [50.1, 2800.0], [50.2, 2800.0], [50.3, 2800.0], [50.4, 2801.0], [50.5, 2801.0], [50.6, 2801.0], [50.7, 2801.0], [50.8, 2801.0], [50.9, 2801.0], [51.0, 2801.0], [51.1, 2801.0], [51.2, 2801.0], [51.3, 2801.0], [51.4, 2801.0], [51.5, 2801.0], [51.6, 2802.0], [51.7, 2802.0], [51.8, 2802.0], [51.9, 2802.0], [52.0, 2802.0], [52.1, 2802.0], [52.2, 2802.0], [52.3, 2802.0], [52.4, 2803.0], [52.5, 2803.0], [52.6, 2803.0], [52.7, 2803.0], [52.8, 2808.0], [52.9, 2808.0], [53.0, 2808.0], [53.1, 2808.0], [53.2, 2809.0], [53.3, 2809.0], [53.4, 2809.0], [53.5, 2809.0], [53.6, 2809.0], [53.7, 2809.0], [53.8, 2809.0], [53.9, 2809.0], [54.0, 2809.0], [54.1, 2809.0], [54.2, 2809.0], [54.3, 2809.0], [54.4, 2810.0], [54.5, 2810.0], [54.6, 2810.0], [54.7, 2810.0], [54.8, 2810.0], [54.9, 2810.0], [55.0, 2810.0], [55.1, 2810.0], [55.2, 3677.0], [55.3, 3677.0], [55.4, 3677.0], [55.5, 3677.0], [55.6, 10641.0], [55.7, 10641.0], [55.8, 10641.0], [55.9, 10641.0], [56.0, 11848.0], [56.1, 11848.0], [56.2, 11848.0], [56.3, 11848.0], [56.4, 14913.0], [56.5, 14913.0], [56.6, 14913.0], [56.7, 14913.0], [56.8, 15730.0], [56.9, 15730.0], [57.0, 15730.0], [57.1, 15730.0], [57.2, 17268.0], [57.3, 17268.0], [57.4, 17268.0], [57.5, 17268.0], [57.6, 18195.0], [57.7, 18195.0], [57.8, 18195.0], [57.9, 18195.0], [58.0, 18707.0], [58.1, 18707.0], [58.2, 18707.0], [58.3, 18707.0], [58.4, 20412.0], [58.5, 20412.0], [58.6, 20412.0], [58.7, 20412.0], [58.8, 22397.0], [58.9, 22397.0], [59.0, 22397.0], [59.1, 22397.0], [59.2, 23151.0], [59.3, 23151.0], [59.4, 23151.0], [59.5, 23151.0], [59.6, 24258.0], [59.7, 24258.0], [59.8, 24258.0], [59.9, 24258.0], [60.0, 28576.0], [60.1, 28576.0], [60.2, 28576.0], [60.3, 28576.0], [60.4, 29522.0], [60.5, 29522.0], [60.6, 29522.0], [60.7, 29522.0], [60.8, 29523.0], [60.9, 29523.0], [61.0, 29523.0], [61.1, 29523.0], [61.2, 29524.0], [61.3, 29524.0], [61.4, 29524.0], [61.5, 29524.0], [61.6, 31096.0], [61.7, 31096.0], [61.8, 31096.0], [61.9, 31096.0], [62.0, 31113.0], [62.1, 31113.0], [62.2, 31113.0], [62.3, 31113.0], [62.4, 31248.0], [62.5, 31248.0], [62.6, 31248.0], [62.7, 31248.0], [62.8, 31609.0], [62.9, 31609.0], [63.0, 31609.0], [63.1, 31609.0], [63.2, 31915.0], [63.3, 31915.0], [63.4, 31915.0], [63.5, 31915.0], [63.6, 33189.0], [63.7, 33189.0], [63.8, 33189.0], [63.9, 33189.0], [64.0, 33195.0], [64.1, 33195.0], [64.2, 33195.0], [64.3, 33195.0], [64.4, 33209.0], [64.5, 33209.0], [64.6, 33209.0], [64.7, 33209.0], [64.8, 33453.0], [64.9, 33453.0], [65.0, 33453.0], [65.1, 33453.0], [65.2, 33462.0], [65.3, 33462.0], [65.4, 33462.0], [65.5, 33462.0], [65.6, 33474.0], [65.7, 33474.0], [65.8, 33474.0], [65.9, 33474.0], [66.0, 33479.0], [66.1, 33479.0], [66.2, 33479.0], [66.3, 33479.0], [66.4, 33479.0], [66.5, 33479.0], [66.6, 33479.0], [66.7, 33479.0], [66.8, 34717.0], [66.9, 34717.0], [67.0, 34717.0], [67.1, 34717.0], [67.2, 34723.0], [67.3, 34723.0], [67.4, 34723.0], [67.5, 34723.0], [67.6, 35295.0], [67.7, 35295.0], [67.8, 35295.0], [67.9, 35295.0], [68.0, 35941.0], [68.1, 35941.0], [68.2, 35941.0], [68.3, 35941.0], [68.4, 35946.0], [68.5, 35946.0], [68.6, 35946.0], [68.7, 35946.0], [68.8, 36178.0], [68.9, 36178.0], [69.0, 36178.0], [69.1, 36178.0], [69.2, 36284.0], [69.3, 36284.0], [69.4, 36284.0], [69.5, 36284.0], [69.6, 36284.0], [69.7, 36284.0], [69.8, 36284.0], [69.9, 36284.0], [70.0, 36290.0], [70.1, 36290.0], [70.2, 36290.0], [70.3, 36290.0], [70.4, 36306.0], [70.5, 36306.0], [70.6, 36306.0], [70.7, 36306.0], [70.8, 36348.0], [70.9, 36348.0], [71.0, 36348.0], [71.1, 36348.0], [71.2, 36350.0], [71.3, 36350.0], [71.4, 36350.0], [71.5, 36350.0], [71.6, 36350.0], [71.7, 36350.0], [71.8, 36350.0], [71.9, 36350.0], [72.0, 36357.0], [72.1, 36357.0], [72.2, 36357.0], [72.3, 36357.0], [72.4, 37140.0], [72.5, 37140.0], [72.6, 37140.0], [72.7, 37140.0], [72.8, 37754.0], [72.9, 37754.0], [73.0, 37754.0], [73.1, 37754.0], [73.2, 37761.0], [73.3, 37761.0], [73.4, 37761.0], [73.5, 37761.0], [73.6, 37911.0], [73.7, 37911.0], [73.8, 37911.0], [73.9, 37911.0], [74.0, 37962.0], [74.1, 37962.0], [74.2, 37962.0], [74.3, 37962.0], [74.4, 38023.0], [74.5, 38023.0], [74.6, 38023.0], [74.7, 38023.0], [74.8, 38368.0], [74.9, 38368.0], [75.0, 38368.0], [75.1, 38368.0], [75.2, 38664.0], [75.3, 38664.0], [75.4, 38664.0], [75.5, 38664.0], [75.6, 38904.0], [75.7, 38904.0], [75.8, 38904.0], [75.9, 38904.0], [76.0, 38920.0], [76.1, 38920.0], [76.2, 38920.0], [76.3, 38920.0], [76.4, 38999.0], [76.5, 38999.0], [76.6, 38999.0], [76.7, 38999.0], [76.8, 38999.0], [76.9, 39005.0], [77.0, 39005.0], [77.1, 39005.0], [77.2, 39005.0], [77.3, 39006.0], [77.4, 39006.0], [77.5, 39006.0], [77.6, 39006.0], [77.7, 39401.0], [77.8, 39401.0], [77.9, 39401.0], [78.0, 39401.0], [78.1, 39422.0], [78.2, 39422.0], [78.3, 39422.0], [78.4, 39422.0], [78.5, 39713.0], [78.6, 39713.0], [78.7, 39713.0], [78.8, 39713.0], [78.9, 39740.0], [79.0, 39740.0], [79.1, 39740.0], [79.2, 39740.0], [79.3, 39822.0], [79.4, 39822.0], [79.5, 39822.0], [79.6, 39822.0], [79.7, 39888.0], [79.8, 39888.0], [79.9, 39888.0], [80.0, 39888.0], [80.1, 39925.0], [80.2, 39925.0], [80.3, 39925.0], [80.4, 39925.0], [80.5, 39943.0], [80.6, 39943.0], [80.7, 39943.0], [80.8, 39943.0], [80.9, 40313.0], [81.0, 40313.0], [81.1, 40313.0], [81.2, 40313.0], [81.3, 40364.0], [81.4, 40364.0], [81.5, 40364.0], [81.6, 40364.0], [81.7, 40457.0], [81.8, 40457.0], [81.9, 40457.0], [82.0, 40457.0], [82.1, 40562.0], [82.2, 40562.0], [82.3, 40562.0], [82.4, 40562.0], [82.5, 40927.0], [82.6, 40927.0], [82.7, 40927.0], [82.8, 40927.0], [82.9, 44213.0], [83.0, 44213.0], [83.1, 44213.0], [83.2, 44213.0], [83.3, 44866.0], [83.4, 44866.0], [83.5, 44866.0], [83.6, 44866.0], [83.7, 46293.0], [83.8, 46293.0], [83.9, 46293.0], [84.0, 46293.0], [84.1, 46766.0], [84.2, 46766.0], [84.3, 46766.0], [84.4, 46766.0], [84.5, 47552.0], [84.6, 47552.0], [84.7, 47552.0], [84.8, 47552.0], [84.9, 48201.0], [85.0, 48201.0], [85.1, 48201.0], [85.2, 48201.0], [85.3, 48206.0], [85.4, 48206.0], [85.5, 48206.0], [85.6, 48206.0], [85.7, 48506.0], [85.8, 48506.0], [85.9, 48506.0], [86.0, 48506.0], [86.1, 48514.0], [86.2, 48514.0], [86.3, 48514.0], [86.4, 48514.0], [86.5, 48641.0], [86.6, 48641.0], [86.7, 48641.0], [86.8, 48641.0], [86.9, 48694.0], [87.0, 48694.0], [87.1, 48694.0], [87.2, 48694.0], [87.3, 48904.0], [87.4, 48904.0], [87.5, 48904.0], [87.6, 48904.0], [87.7, 49429.0], [87.8, 49429.0], [87.9, 49429.0], [88.0, 49429.0], [88.1, 49598.0], [88.2, 49598.0], [88.3, 49598.0], [88.4, 49598.0], [88.5, 49673.0], [88.6, 49673.0], [88.7, 49673.0], [88.8, 49673.0], [88.9, 49898.0], [89.0, 49898.0], [89.1, 49898.0], [89.2, 49898.0], [89.3, 50357.0], [89.4, 50357.0], [89.5, 50357.0], [89.6, 50357.0], [89.7, 50436.0], [89.8, 50436.0], [89.9, 50436.0], [90.0, 50436.0], [90.1, 50963.0], [90.2, 50963.0], [90.3, 50963.0], [90.4, 50963.0], [90.5, 50965.0], [90.6, 50965.0], [90.7, 50965.0], [90.8, 50965.0], [90.9, 51131.0], [91.0, 51131.0], [91.1, 51131.0], [91.2, 51131.0], [91.3, 51169.0], [91.4, 51169.0], [91.5, 51169.0], [91.6, 51169.0], [91.7, 51189.0], [91.8, 51189.0], [91.9, 51189.0], [92.0, 51189.0], [92.1, 51230.0], [92.2, 51230.0], [92.3, 51230.0], [92.4, 51230.0], [92.5, 51322.0], [92.6, 51322.0], [92.7, 51322.0], [92.8, 51322.0], [92.9, 51390.0], [93.0, 51390.0], [93.1, 51390.0], [93.2, 51390.0], [93.3, 51684.0], [93.4, 51684.0], [93.5, 51684.0], [93.6, 51684.0], [93.7, 51703.0], [93.8, 51703.0], [93.9, 51703.0], [94.0, 51703.0], [94.1, 51744.0], [94.2, 51744.0], [94.3, 51744.0], [94.4, 51744.0], [94.5, 51760.0], [94.6, 51760.0], [94.7, 51760.0], [94.8, 51760.0], [94.9, 51875.0], [95.0, 51875.0], [95.1, 51875.0], [95.2, 51875.0], [95.3, 51893.0], [95.4, 51893.0], [95.5, 51893.0], [95.6, 51893.0], [95.7, 51947.0], [95.8, 51947.0], [95.9, 51947.0], [96.0, 51947.0], [96.1, 51955.0], [96.2, 51955.0], [96.3, 51955.0], [96.4, 51955.0], [96.5, 51987.0], [96.6, 51987.0], [96.7, 51987.0], [96.8, 51987.0], [96.9, 52135.0], [97.0, 52135.0], [97.1, 52135.0], [97.2, 52135.0], [97.3, 52195.0], [97.4, 52195.0], [97.5, 52195.0], [97.6, 52195.0], [97.7, 52270.0], [97.8, 52270.0], [97.9, 52270.0], [98.0, 52270.0], [98.1, 52279.0], [98.2, 52279.0], [98.3, 52279.0], [98.4, 52279.0], [98.5, 52391.0], [98.6, 52391.0], [98.7, 52391.0], [98.8, 52391.0], [98.9, 52407.0], [99.0, 52407.0], [99.1, 52407.0], [99.2, 52407.0], [99.3, 52430.0], [99.4, 52430.0], [99.5, 52430.0], [99.6, 52430.0], [99.7, 52472.0], [99.8, 52472.0], [99.9, 52472.0], [100.0, 52472.0]], "isOverall": false, "label": "HTTP Request (Mid image)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 18.0, "series": [{"data": [[700.0, 11.0], [800.0, 5.0], [900.0, 1.0], [1000.0, 1.0], [1200.0, 1.0], [1300.0, 15.0], [1400.0, 3.0], [1500.0, 1.0], [1800.0, 2.0], [2000.0, 1.0], [2100.0, 1.0], [2200.0, 1.0], [2300.0, 5.0], [2400.0, 14.0], [2500.0, 14.0], [2600.0, 10.0], [2700.0, 18.0], [2800.0, 13.0], [3600.0, 1.0], [10600.0, 1.0], [11800.0, 1.0], [14900.0, 1.0], [15700.0, 1.0], [17200.0, 1.0], [18100.0, 1.0], [18700.0, 1.0], [20400.0, 1.0], [22300.0, 1.0], [23100.0, 1.0], [24200.0, 1.0], [28500.0, 1.0], [29500.0, 3.0], [31000.0, 1.0], [31100.0, 1.0], [31200.0, 1.0], [31600.0, 1.0], [31900.0, 1.0], [33100.0, 2.0], [33200.0, 1.0], [33400.0, 5.0], [34700.0, 2.0], [35200.0, 1.0], [35900.0, 2.0], [36100.0, 1.0], [36200.0, 3.0], [36300.0, 5.0], [37100.0, 1.0], [37700.0, 2.0], [37900.0, 2.0], [38000.0, 1.0], [38300.0, 1.0], [38600.0, 1.0], [38900.0, 3.0], [39000.0, 2.0], [39400.0, 2.0], [39700.0, 2.0], [39800.0, 2.0], [39900.0, 2.0], [40300.0, 2.0], [40400.0, 1.0], [40500.0, 1.0], [40900.0, 1.0], [44200.0, 1.0], [44800.0, 1.0], [46200.0, 1.0], [46700.0, 1.0], [47500.0, 1.0], [48200.0, 2.0], [48500.0, 2.0], [48600.0, 2.0], [48900.0, 1.0], [49400.0, 1.0], [49500.0, 1.0], [49600.0, 1.0], [49800.0, 1.0], [50300.0, 1.0], [50400.0, 1.0], [50900.0, 2.0], [51100.0, 3.0], [51300.0, 2.0], [51200.0, 1.0], [51600.0, 1.0], [51700.0, 3.0], [51800.0, 2.0], [51900.0, 3.0], [52100.0, 2.0], [52200.0, 2.0], [52300.0, 1.0], [52400.0, 3.0], [400.0, 17.0], [500.0, 4.0]], "isOverall": false, "label": "HTTP Request (Mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 52400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 105.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 145.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 105.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 145.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 126.28400000000002, "minX": 1.71237642E12, "maxY": 126.28400000000002, "series": [{"data": [[1.71237642E12, 126.28400000000002]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71237642E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 459.26666666666665, "minX": 1.0, "maxY": 52472.0, "series": [{"data": [[2.0, 52430.0], [3.0, 52407.0], [4.0, 52391.0], [5.0, 52279.0], [6.0, 52270.0], [7.0, 52195.0], [8.0, 52135.0], [9.0, 51987.0], [11.0, 51951.0], [12.0, 51893.0], [13.0, 51875.0], [14.0, 51760.0], [15.0, 51744.0], [16.0, 51703.0], [17.0, 51684.0], [18.0, 51390.0], [19.0, 51322.0], [20.0, 51230.0], [21.0, 51189.0], [22.0, 51169.0], [23.0, 51131.0], [25.0, 50964.0], [26.0, 50436.0], [27.0, 50357.0], [28.0, 49898.0], [29.0, 49673.0], [30.0, 49598.0], [31.0, 49429.0], [33.0, 48694.0], [32.0, 48904.0], [34.0, 48641.0], [37.0, 48206.0], [36.0, 48510.0], [39.0, 47552.0], [38.0, 48201.0], [41.0, 46293.0], [40.0, 46766.0], [43.0, 44213.0], [42.0, 44866.0], [45.0, 40562.0], [44.0, 40927.0], [47.0, 40364.0], [46.0, 40457.0], [49.0, 39943.0], [48.0, 40313.0], [51.0, 39888.0], [50.0, 39925.0], [53.0, 39740.0], [52.0, 39822.0], [55.0, 39422.0], [54.0, 39713.0], [56.0, 39401.0], [59.0, 39005.5], [58.0, 38999.0], [61.0, 38904.0], [60.0, 38920.0], [63.0, 38368.0], [62.0, 38664.0], [66.0, 37911.0], [65.0, 37962.0], [64.0, 38023.0], [71.0, 36353.5], [69.0, 37140.0], [68.0, 37757.5], [74.0, 36306.0], [73.0, 36349.0], [78.0, 36178.0], [77.0, 36287.0], [76.0, 36284.0], [83.0, 34720.0], [81.0, 35295.0], [80.0, 35943.5], [86.0, 33479.0], [85.0, 33474.0], [91.0, 33192.0], [89.0, 33209.0], [88.0, 33457.5], [95.0, 31113.0], [94.0, 31248.0], [93.0, 31609.0], [92.0, 31915.0], [99.0, 29523.0], [96.0, 31096.0], [103.0, 22397.0], [102.0, 23151.0], [101.0, 24258.0], [100.0, 28576.0], [107.0, 17268.0], [106.0, 18195.0], [105.0, 18707.0], [104.0, 20412.0], [111.0, 10641.0], [110.0, 11848.0], [109.0, 14913.0], [108.0, 15730.0], [114.0, 2810.0], [112.0, 3677.0], [117.0, 2805.0], [123.0, 2809.0], [122.0, 2800.0], [120.0, 2806.3333333333335], [126.0, 2795.0], [125.0, 2801.0], [124.0, 2805.0], [134.0, 2764.0], [133.0, 2773.0], [132.0, 2780.0], [131.0, 2787.5], [129.0, 2792.0], [143.0, 2703.6666666666665], [141.0, 2702.0], [139.0, 2725.5], [137.0, 2765.5], [136.0, 2769.0], [151.0, 2621.0], [150.0, 2628.5], [148.0, 2641.0], [147.0, 2639.0], [146.0, 2656.0], [145.0, 2655.0], [159.0, 2574.0], [158.0, 2567.0], [157.0, 2589.0], [156.0, 2583.0], [154.0, 2595.0], [153.0, 2610.0], [152.0, 2620.0], [167.0, 2503.0], [166.0, 2503.0], [164.0, 2503.0], [163.0, 2507.0], [162.0, 2523.0], [160.0, 2553.0], [175.0, 2452.0], [174.0, 2457.0], [172.0, 2457.0], [171.0, 2465.0], [169.0, 2459.0], [168.0, 2466.0], [183.0, 2398.5], [181.0, 2418.0], [179.0, 2423.0], [178.0, 2435.5], [176.0, 2439.0], [191.0, 1811.0], [190.0, 1825.0], [189.0, 2085.0], [188.0, 2158.0], [187.0, 2273.0], [186.0, 2373.0], [185.0, 2390.0], [184.0, 2384.0], [199.0, 1386.0], [197.0, 1389.5], [195.0, 1441.0], [194.0, 1459.0], [193.0, 1459.0], [192.0, 1521.0], [207.0, 1387.0], [206.0, 1379.5], [204.0, 1381.0], [202.0, 1381.0], [200.0, 1382.0], [215.0, 842.0], [214.0, 863.0], [213.0, 953.0], [212.0, 1086.0], [211.0, 1238.0], [210.0, 1328.0], [209.0, 1381.0], [222.0, 796.0], [218.0, 802.5], [217.0, 799.0], [230.0, 566.0], [229.0, 713.5], [227.0, 778.0], [225.0, 798.0], [236.0, 468.0], [233.0, 564.6666666666666], [250.0, 459.26666666666665], [1.0, 52472.0]], "isOverall": false, "label": "HTTP Request (Mid image)", "isController": false}, {"data": [[126.28400000000002, 18739.08]], "isOverall": false, "label": "HTTP Request (Mid image)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 250.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2962.0833333333335, "minX": 1.71237642E12, "maxY": 278392.4, "series": [{"data": [[1.71237642E12, 2962.0833333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71237642E12, 278392.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71237642E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 18739.08, "minX": 1.71237642E12, "maxY": 18739.08, "series": [{"data": [[1.71237642E12, 18739.08]], "isOverall": false, "label": "HTTP Request (Mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71237642E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 18666.56399999999, "minX": 1.71237642E12, "maxY": 18666.56399999999, "series": [{"data": [[1.71237642E12, 18666.56399999999]], "isOverall": false, "label": "HTTP Request (Mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71237642E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 239.83999999999992, "minX": 1.71237642E12, "maxY": 239.83999999999992, "series": [{"data": [[1.71237642E12, 239.83999999999992]], "isOverall": false, "label": "HTTP Request (Mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71237642E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 18707.0, "minX": 1.71237642E12, "maxY": 52472.0, "series": [{"data": [[1.71237642E12, 52472.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71237642E12, 18707.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71237642E12, 51950.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71237642E12, 52469.48]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71237642E12, 39740.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71237642E12, 52276.3]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71237642E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 794.0, "minX": 1.0, "maxY": 51971.0, "series": [{"data": [[1.0, 32858.0], [2.0, 31762.0], [8.0, 39567.5], [4.0, 49785.5], [16.0, 51971.0], [9.0, 51169.0], [5.0, 33474.0], [11.0, 36290.0], [3.0, 33963.0], [6.0, 43437.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 14913.0], [20.0, 2378.5], [55.0, 794.0], [63.0, 2656.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 51970.5, "series": [{"data": [[1.0, 32857.5], [2.0, 31762.0], [8.0, 39567.5], [4.0, 49785.5], [16.0, 51970.5], [9.0, 51169.0], [5.0, 33474.0], [11.0, 36290.0], [3.0, 33963.0], [6.0, 43436.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 14913.0], [20.0, 2378.5], [55.0, 0.0], [63.0, 2655.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 63.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.166666666666667, "minX": 1.71237642E12, "maxY": 4.166666666666667, "series": [{"data": [[1.71237642E12, 4.166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71237642E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.71237642E12, "maxY": 1.9, "series": [{"data": [[1.71237642E12, 1.75]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71237642E12, 1.9]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.71237642E12, 0.5166666666666667]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71237642E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.75, "minX": 1.71237642E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.71237642E12, 1.75]], "isOverall": false, "label": "HTTP Request (Mid image)-success", "isController": false}, {"data": [[1.71237642E12, 2.4166666666666665]], "isOverall": false, "label": "HTTP Request (Mid image)-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71237642E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.75, "minX": 1.71237642E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.71237642E12, 1.75]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71237642E12, 2.4166666666666665]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71237642E12, "title": "Total Transactions Per Second"}},
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

