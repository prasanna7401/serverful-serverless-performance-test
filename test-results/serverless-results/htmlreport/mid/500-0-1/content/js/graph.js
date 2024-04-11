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
        data: {"result": {"minY": 2464.0, "minX": 0.0, "maxY": 28037.0, "series": [{"data": [[0.0, 2464.0], [0.1, 2464.0], [0.2, 2470.0], [0.3, 2470.0], [0.4, 2474.0], [0.5, 2474.0], [0.6, 2474.0], [0.7, 2483.0], [0.8, 2487.0], [0.9, 2487.0], [1.0, 2487.0], [1.1, 2487.0], [1.2, 2487.0], [1.3, 2869.0], [1.4, 2869.0], [1.5, 2884.0], [1.6, 2889.0], [1.7, 2889.0], [1.8, 2994.0], [1.9, 2994.0], [2.0, 2999.0], [2.1, 2999.0], [2.2, 2999.0], [2.3, 2999.0], [2.4, 2999.0], [2.5, 2999.0], [2.6, 3001.0], [2.7, 3001.0], [2.8, 3001.0], [2.9, 3002.0], [3.0, 3002.0], [3.1, 3004.0], [3.2, 3004.0], [3.3, 3009.0], [3.4, 3009.0], [3.5, 3010.0], [3.6, 3010.0], [3.7, 3011.0], [3.8, 3011.0], [3.9, 3277.0], [4.0, 3277.0], [4.1, 3280.0], [4.2, 3280.0], [4.3, 3282.0], [4.4, 3282.0], [4.5, 3282.0], [4.6, 3282.0], [4.7, 3285.0], [4.8, 3285.0], [4.9, 3288.0], [5.0, 3288.0], [5.1, 3289.0], [5.2, 3289.0], [5.3, 3289.0], [5.4, 3289.0], [5.5, 3295.0], [5.6, 3295.0], [5.7, 3612.0], [5.8, 3612.0], [5.9, 3612.0], [6.0, 3612.0], [6.1, 3628.0], [6.2, 3628.0], [6.3, 3635.0], [6.4, 3635.0], [6.5, 3636.0], [6.6, 3636.0], [6.7, 3639.0], [6.8, 3639.0], [6.9, 3647.0], [7.0, 3647.0], [7.1, 3650.0], [7.2, 3650.0], [7.3, 3652.0], [7.4, 3652.0], [7.5, 3660.0], [7.6, 3660.0], [7.7, 3675.0], [7.8, 3675.0], [7.9, 3687.0], [8.0, 3687.0], [8.1, 3693.0], [8.2, 3693.0], [8.3, 3699.0], [8.4, 3699.0], [8.5, 3704.0], [8.6, 3704.0], [8.7, 3704.0], [8.8, 3704.0], [8.9, 3709.0], [9.0, 3709.0], [9.1, 3710.0], [9.2, 3710.0], [9.3, 3711.0], [9.4, 3712.0], [9.5, 3712.0], [9.6, 3717.0], [9.7, 3717.0], [9.8, 3718.0], [9.9, 3718.0], [10.0, 3718.0], [10.1, 3718.0], [10.2, 3723.0], [10.3, 3723.0], [10.4, 3824.0], [10.5, 3824.0], [10.6, 3824.0], [10.7, 3824.0], [10.8, 4540.0], [10.9, 4540.0], [11.0, 4553.0], [11.1, 4553.0], [11.2, 4556.0], [11.3, 4556.0], [11.4, 4562.0], [11.5, 4562.0], [11.6, 4739.0], [11.7, 4739.0], [11.8, 4745.0], [11.9, 4745.0], [12.0, 4746.0], [12.1, 4746.0], [12.2, 4755.0], [12.3, 4755.0], [12.4, 5035.0], [12.5, 5035.0], [12.6, 6021.0], [12.7, 6021.0], [12.8, 6044.0], [12.9, 6044.0], [13.0, 6050.0], [13.1, 6050.0], [13.2, 6714.0], [13.3, 6714.0], [13.4, 6715.0], [13.5, 6715.0], [13.6, 6723.0], [13.7, 6723.0], [13.8, 6729.0], [13.9, 6729.0], [14.0, 6733.0], [14.1, 6733.0], [14.2, 6736.0], [14.3, 6736.0], [14.4, 6737.0], [14.5, 6737.0], [14.6, 6981.0], [14.7, 6981.0], [14.8, 6981.0], [14.9, 6981.0], [15.0, 6986.0], [15.1, 6986.0], [15.2, 6993.0], [15.3, 6993.0], [15.4, 7002.0], [15.5, 7002.0], [15.6, 7032.0], [15.7, 7032.0], [15.8, 7033.0], [15.9, 7033.0], [16.0, 7033.0], [16.1, 7033.0], [16.2, 7033.0], [16.3, 7033.0], [16.4, 7033.0], [16.5, 7033.0], [16.6, 7033.0], [16.7, 7033.0], [16.8, 7037.0], [16.9, 7037.0], [17.0, 7038.0], [17.1, 7038.0], [17.2, 7040.0], [17.3, 7040.0], [17.4, 7040.0], [17.5, 7040.0], [17.6, 7042.0], [17.7, 7042.0], [17.8, 7045.0], [17.9, 7045.0], [18.0, 7047.0], [18.1, 7047.0], [18.2, 7050.0], [18.3, 7050.0], [18.4, 7056.0], [18.5, 7056.0], [18.6, 7142.0], [18.7, 7142.0], [18.8, 7671.0], [18.9, 7671.0], [19.0, 7677.0], [19.1, 7677.0], [19.2, 7699.0], [19.3, 7699.0], [19.4, 7702.0], [19.5, 7702.0], [19.6, 7708.0], [19.7, 7708.0], [19.8, 7747.0], [19.9, 7747.0], [20.0, 8615.0], [20.1, 8615.0], [20.2, 8632.0], [20.3, 8632.0], [20.4, 8887.0], [20.5, 8887.0], [20.6, 10014.0], [20.7, 10014.0], [20.8, 10015.0], [20.9, 10015.0], [21.0, 10015.0], [21.1, 10015.0], [21.2, 10015.0], [21.3, 10015.0], [21.4, 10023.0], [21.5, 10023.0], [21.6, 10025.0], [21.7, 10025.0], [21.8, 10031.0], [21.9, 10031.0], [22.0, 10031.0], [22.1, 10031.0], [22.2, 10032.0], [22.3, 10032.0], [22.4, 10033.0], [22.5, 10033.0], [22.6, 10271.0], [22.7, 10271.0], [22.8, 10271.0], [22.9, 10271.0], [23.0, 10271.0], [23.1, 10271.0], [23.2, 10272.0], [23.3, 10272.0], [23.4, 10272.0], [23.5, 10272.0], [23.6, 10272.0], [23.7, 10272.0], [23.8, 10272.0], [23.9, 10272.0], [24.0, 10272.0], [24.1, 10272.0], [24.2, 10274.0], [24.3, 10274.0], [24.4, 10274.0], [24.5, 10274.0], [24.6, 10275.0], [24.7, 10275.0], [24.8, 10275.0], [24.9, 10275.0], [25.0, 10277.0], [25.1, 10277.0], [25.2, 10277.0], [25.3, 10277.0], [25.4, 10279.0], [25.5, 10279.0], [25.6, 10279.0], [25.7, 10279.0], [25.8, 10279.0], [25.9, 10279.0], [26.0, 10280.0], [26.1, 10280.0], [26.2, 10282.0], [26.3, 10282.0], [26.4, 10283.0], [26.5, 10283.0], [26.6, 10285.0], [26.7, 10285.0], [26.8, 10285.0], [26.9, 10285.0], [27.0, 10287.0], [27.1, 10287.0], [27.2, 10288.0], [27.3, 10288.0], [27.4, 10288.0], [27.5, 10288.0], [27.6, 10288.0], [27.7, 10288.0], [27.8, 10288.0], [27.9, 10288.0], [28.0, 10289.0], [28.1, 10289.0], [28.2, 10289.0], [28.3, 10289.0], [28.4, 10294.0], [28.5, 10294.0], [28.6, 10294.0], [28.7, 10294.0], [28.8, 10303.0], [28.9, 10303.0], [29.0, 10303.0], [29.1, 10303.0], [29.2, 10303.0], [29.3, 10303.0], [29.4, 10310.0], [29.5, 10310.0], [29.6, 10358.0], [29.7, 10358.0], [29.8, 10359.0], [29.9, 10359.0], [30.0, 10359.0], [30.1, 10359.0], [30.2, 10362.0], [30.3, 10362.0], [30.4, 10366.0], [30.5, 10366.0], [30.6, 10369.0], [30.7, 10369.0], [30.8, 10373.0], [30.9, 10373.0], [31.0, 10375.0], [31.1, 10375.0], [31.2, 10376.0], [31.3, 10376.0], [31.4, 10376.0], [31.5, 10376.0], [31.6, 10378.0], [31.7, 10378.0], [31.8, 10383.0], [31.9, 10383.0], [32.0, 10389.0], [32.1, 10389.0], [32.2, 10390.0], [32.3, 10390.0], [32.4, 10392.0], [32.5, 10392.0], [32.6, 10396.0], [32.7, 10396.0], [32.8, 10427.0], [32.9, 10427.0], [33.0, 10432.0], [33.1, 10432.0], [33.2, 10441.0], [33.3, 10441.0], [33.4, 10459.0], [33.5, 10459.0], [33.6, 10466.0], [33.7, 10466.0], [33.8, 10471.0], [33.9, 10471.0], [34.0, 10475.0], [34.1, 10475.0], [34.2, 10476.0], [34.3, 10476.0], [34.4, 10479.0], [34.5, 10479.0], [34.6, 10480.0], [34.7, 10480.0], [34.8, 10494.0], [34.9, 10494.0], [35.0, 10495.0], [35.1, 10495.0], [35.2, 11376.0], [35.3, 11376.0], [35.4, 11377.0], [35.5, 11377.0], [35.6, 11377.0], [35.7, 11377.0], [35.8, 11379.0], [35.9, 11379.0], [36.0, 11383.0], [36.1, 11383.0], [36.2, 11384.0], [36.3, 11384.0], [36.4, 11384.0], [36.5, 11385.0], [36.6, 11385.0], [36.7, 11385.0], [36.8, 11385.0], [36.9, 11387.0], [37.0, 11387.0], [37.1, 11388.0], [37.2, 11388.0], [37.3, 11400.0], [37.4, 11400.0], [37.5, 11406.0], [37.6, 11406.0], [37.7, 11463.0], [37.8, 11463.0], [37.9, 11463.0], [38.0, 11463.0], [38.1, 11463.0], [38.2, 11463.0], [38.3, 11463.0], [38.4, 11463.0], [38.5, 11469.0], [38.6, 11469.0], [38.7, 11469.0], [38.8, 11469.0], [38.9, 11469.0], [39.0, 11469.0], [39.1, 11470.0], [39.2, 11470.0], [39.3, 11470.0], [39.4, 11470.0], [39.5, 11470.0], [39.6, 11470.0], [39.7, 11472.0], [39.8, 11472.0], [39.9, 11472.0], [40.0, 11472.0], [40.1, 11472.0], [40.2, 11472.0], [40.3, 11474.0], [40.4, 11474.0], [40.5, 11474.0], [40.6, 11474.0], [40.7, 11475.0], [40.8, 11475.0], [40.9, 11476.0], [41.0, 11476.0], [41.1, 11476.0], [41.2, 11476.0], [41.3, 11477.0], [41.4, 11477.0], [41.5, 11478.0], [41.6, 11478.0], [41.7, 11478.0], [41.8, 11478.0], [41.9, 11478.0], [42.0, 11478.0], [42.1, 11478.0], [42.2, 11478.0], [42.3, 11479.0], [42.4, 11479.0], [42.5, 11480.0], [42.6, 11480.0], [42.7, 11480.0], [42.8, 11480.0], [42.9, 11481.0], [43.0, 11481.0], [43.1, 11481.0], [43.2, 11481.0], [43.3, 11481.0], [43.4, 11481.0], [43.5, 11481.0], [43.6, 11481.0], [43.7, 11482.0], [43.8, 11482.0], [43.9, 11483.0], [44.0, 11483.0], [44.1, 11484.0], [44.2, 11484.0], [44.3, 11486.0], [44.4, 11486.0], [44.5, 11486.0], [44.6, 11486.0], [44.7, 11486.0], [44.8, 11486.0], [44.9, 11487.0], [45.0, 11487.0], [45.1, 11487.0], [45.2, 11487.0], [45.3, 11487.0], [45.4, 11487.0], [45.5, 11487.0], [45.6, 11487.0], [45.7, 11487.0], [45.8, 11487.0], [45.9, 11492.0], [46.0, 11492.0], [46.1, 11492.0], [46.2, 11492.0], [46.3, 11492.0], [46.4, 11492.0], [46.5, 11493.0], [46.6, 11493.0], [46.7, 11493.0], [46.8, 11493.0], [46.9, 11493.0], [47.0, 11493.0], [47.1, 11493.0], [47.2, 11493.0], [47.3, 11494.0], [47.4, 11494.0], [47.5, 11494.0], [47.6, 11494.0], [47.7, 11495.0], [47.8, 11495.0], [47.9, 11498.0], [48.0, 11498.0], [48.1, 11499.0], [48.2, 11499.0], [48.3, 11506.0], [48.4, 11506.0], [48.5, 11507.0], [48.6, 11507.0], [48.7, 11508.0], [48.8, 11508.0], [48.9, 11515.0], [49.0, 11515.0], [49.1, 11516.0], [49.2, 11516.0], [49.3, 11516.0], [49.4, 11516.0], [49.5, 11516.0], [49.6, 11516.0], [49.7, 11517.0], [49.8, 11517.0], [49.9, 11517.0], [50.0, 11517.0], [50.1, 11522.0], [50.2, 11522.0], [50.3, 11590.0], [50.4, 11590.0], [50.5, 11609.0], [50.6, 11609.0], [50.7, 12086.0], [50.8, 12086.0], [50.9, 12092.0], [51.0, 12092.0], [51.1, 12095.0], [51.2, 12095.0], [51.3, 12095.0], [51.4, 12095.0], [51.5, 12096.0], [51.6, 12096.0], [51.7, 12097.0], [51.8, 12097.0], [51.9, 12097.0], [52.0, 12097.0], [52.1, 12098.0], [52.2, 12098.0], [52.3, 12098.0], [52.4, 12098.0], [52.5, 12100.0], [52.6, 12100.0], [52.7, 12109.0], [52.8, 12109.0], [52.9, 12113.0], [53.0, 12113.0], [53.1, 12113.0], [53.2, 12113.0], [53.3, 12113.0], [53.4, 12113.0], [53.5, 12113.0], [53.6, 12113.0], [53.7, 12113.0], [53.8, 12113.0], [53.9, 12114.0], [54.0, 12114.0], [54.1, 12114.0], [54.2, 12114.0], [54.3, 12114.0], [54.4, 12114.0], [54.5, 12117.0], [54.6, 12117.0], [54.7, 12117.0], [54.8, 12117.0], [54.9, 12117.0], [55.0, 12117.0], [55.1, 12117.0], [55.2, 12117.0], [55.3, 12119.0], [55.4, 12119.0], [55.5, 12123.0], [55.6, 12123.0], [55.7, 12124.0], [55.8, 12124.0], [55.9, 12124.0], [56.0, 12124.0], [56.1, 12130.0], [56.2, 12130.0], [56.3, 12130.0], [56.4, 12130.0], [56.5, 12130.0], [56.6, 12130.0], [56.7, 12130.0], [56.8, 12130.0], [56.9, 12131.0], [57.0, 12131.0], [57.1, 12133.0], [57.2, 12133.0], [57.3, 12136.0], [57.4, 12136.0], [57.5, 12136.0], [57.6, 12136.0], [57.7, 12137.0], [57.8, 12137.0], [57.9, 12159.0], [58.0, 12159.0], [58.1, 12159.0], [58.2, 12159.0], [58.3, 12160.0], [58.4, 12160.0], [58.5, 12161.0], [58.6, 12161.0], [58.7, 12166.0], [58.8, 12166.0], [58.9, 12168.0], [59.0, 12168.0], [59.1, 12169.0], [59.2, 12169.0], [59.3, 12171.0], [59.4, 12171.0], [59.5, 12172.0], [59.6, 12172.0], [59.7, 12172.0], [59.8, 12172.0], [59.9, 12172.0], [60.0, 12172.0], [60.1, 12173.0], [60.2, 12173.0], [60.3, 12175.0], [60.4, 12175.0], [60.5, 12178.0], [60.6, 12178.0], [60.7, 12179.0], [60.8, 12179.0], [60.9, 12179.0], [61.0, 12179.0], [61.1, 12179.0], [61.2, 12179.0], [61.3, 12179.0], [61.4, 12179.0], [61.5, 12185.0], [61.6, 12185.0], [61.7, 12185.0], [61.8, 12185.0], [61.9, 12192.0], [62.0, 12192.0], [62.1, 12912.0], [62.2, 12912.0], [62.3, 14436.0], [62.4, 14436.0], [62.5, 17067.0], [62.6, 17067.0], [62.7, 17228.0], [62.8, 17228.0], [62.9, 18661.0], [63.0, 18661.0], [63.1, 19943.0], [63.2, 19943.0], [63.3, 19945.0], [63.4, 19945.0], [63.5, 19972.0], [63.6, 19972.0], [63.7, 19987.0], [63.8, 19987.0], [63.9, 20061.0], [64.0, 20061.0], [64.1, 20071.0], [64.2, 20071.0], [64.3, 20072.0], [64.4, 20072.0], [64.5, 20074.0], [64.6, 20074.0], [64.7, 20075.0], [64.8, 20075.0], [64.9, 20172.0], [65.0, 20172.0], [65.1, 20239.0], [65.2, 20239.0], [65.3, 20251.0], [65.4, 20251.0], [65.5, 20253.0], [65.6, 20253.0], [65.7, 20254.0], [65.8, 20254.0], [65.9, 20258.0], [66.0, 20258.0], [66.1, 20268.0], [66.2, 20268.0], [66.3, 20269.0], [66.4, 20269.0], [66.5, 20270.0], [66.6, 20270.0], [66.7, 20272.0], [66.8, 20272.0], [66.9, 20273.0], [67.0, 20273.0], [67.1, 20332.0], [67.2, 20332.0], [67.3, 20335.0], [67.4, 20335.0], [67.5, 20336.0], [67.6, 20336.0], [67.7, 20338.0], [67.8, 20338.0], [67.9, 20339.0], [68.0, 20339.0], [68.1, 20339.0], [68.2, 20339.0], [68.3, 20341.0], [68.4, 20341.0], [68.5, 20343.0], [68.6, 20343.0], [68.7, 20343.0], [68.8, 20343.0], [68.9, 20343.0], [69.0, 20343.0], [69.1, 20347.0], [69.2, 20347.0], [69.3, 20349.0], [69.4, 20349.0], [69.5, 20353.0], [69.6, 20353.0], [69.7, 20355.0], [69.8, 20355.0], [69.9, 20356.0], [70.0, 20356.0], [70.1, 20359.0], [70.2, 20359.0], [70.3, 20359.0], [70.4, 20359.0], [70.5, 20362.0], [70.6, 20362.0], [70.7, 20372.0], [70.8, 20372.0], [70.9, 20372.0], [71.0, 20372.0], [71.1, 20374.0], [71.2, 20374.0], [71.3, 20375.0], [71.4, 20375.0], [71.5, 20375.0], [71.6, 20375.0], [71.7, 20378.0], [71.8, 20378.0], [71.9, 20383.0], [72.0, 20383.0], [72.1, 20385.0], [72.2, 20385.0], [72.3, 20387.0], [72.4, 20387.0], [72.5, 20394.0], [72.6, 20394.0], [72.7, 20478.0], [72.8, 20478.0], [72.9, 20481.0], [73.0, 20481.0], [73.1, 20481.0], [73.2, 20481.0], [73.3, 20498.0], [73.4, 20498.0], [73.5, 20502.0], [73.6, 20502.0], [73.7, 20502.0], [73.8, 20502.0], [73.9, 20503.0], [74.0, 20503.0], [74.1, 20517.0], [74.2, 20517.0], [74.3, 20551.0], [74.4, 20551.0], [74.5, 20551.0], [74.6, 20551.0], [74.7, 20551.0], [74.8, 20551.0], [74.9, 20569.0], [75.0, 20569.0], [75.1, 20570.0], [75.2, 20570.0], [75.3, 20574.0], [75.4, 20574.0], [75.5, 20583.0], [75.6, 20583.0], [75.7, 20584.0], [75.8, 20584.0], [75.9, 20584.0], [76.0, 20584.0], [76.1, 20589.0], [76.2, 20589.0], [76.3, 20590.0], [76.4, 20590.0], [76.5, 20593.0], [76.6, 20593.0], [76.7, 20595.0], [76.8, 20595.0], [76.9, 20596.0], [77.0, 20596.0], [77.1, 20599.0], [77.2, 20599.0], [77.3, 20601.0], [77.4, 20601.0], [77.5, 20647.0], [77.6, 20647.0], [77.7, 20648.0], [77.8, 20648.0], [77.9, 20650.0], [78.0, 20650.0], [78.1, 20653.0], [78.2, 20653.0], [78.3, 20653.0], [78.4, 20653.0], [78.5, 20654.0], [78.6, 20654.0], [78.7, 20658.0], [78.8, 20658.0], [78.9, 20665.0], [79.0, 20665.0], [79.1, 20684.0], [79.2, 20684.0], [79.3, 20706.0], [79.4, 20706.0], [79.5, 20707.0], [79.6, 20707.0], [79.7, 20707.0], [79.8, 20707.0], [79.9, 20707.0], [80.0, 20707.0], [80.1, 20707.0], [80.2, 20707.0], [80.3, 20710.0], [80.4, 20710.0], [80.5, 20714.0], [80.6, 20714.0], [80.7, 20723.0], [80.8, 20723.0], [80.9, 20724.0], [81.0, 20724.0], [81.1, 20730.0], [81.2, 20730.0], [81.3, 20735.0], [81.4, 20735.0], [81.5, 20736.0], [81.6, 20736.0], [81.7, 20741.0], [81.8, 20741.0], [81.9, 20743.0], [82.0, 20743.0], [82.1, 20745.0], [82.2, 20745.0], [82.3, 20746.0], [82.4, 20746.0], [82.5, 20749.0], [82.6, 20749.0], [82.7, 20752.0], [82.8, 20752.0], [82.9, 20753.0], [83.0, 20753.0], [83.1, 20753.0], [83.2, 20753.0], [83.3, 20753.0], [83.4, 20753.0], [83.5, 20753.0], [83.6, 20753.0], [83.7, 20754.0], [83.8, 20754.0], [83.9, 20759.0], [84.0, 20759.0], [84.1, 20762.0], [84.2, 20762.0], [84.3, 20762.0], [84.4, 20762.0], [84.5, 20780.0], [84.6, 20780.0], [84.7, 20787.0], [84.8, 20787.0], [84.9, 20792.0], [85.0, 20792.0], [85.1, 20794.0], [85.2, 20794.0], [85.3, 20797.0], [85.4, 20797.0], [85.5, 20798.0], [85.6, 20798.0], [85.7, 20800.0], [85.8, 20800.0], [85.9, 20807.0], [86.0, 20807.0], [86.1, 20808.0], [86.2, 20808.0], [86.3, 20810.0], [86.4, 20810.0], [86.5, 20811.0], [86.6, 20811.0], [86.7, 20812.0], [86.8, 20812.0], [86.9, 20859.0], [87.0, 20859.0], [87.1, 20859.0], [87.2, 20859.0], [87.3, 20860.0], [87.4, 20860.0], [87.5, 20860.0], [87.6, 20860.0], [87.7, 20863.0], [87.8, 20863.0], [87.9, 20864.0], [88.0, 20864.0], [88.1, 20868.0], [88.2, 20868.0], [88.3, 20870.0], [88.4, 20870.0], [88.5, 20871.0], [88.6, 20871.0], [88.7, 20877.0], [88.8, 20877.0], [88.9, 20885.0], [89.0, 20885.0], [89.1, 20895.0], [89.2, 20895.0], [89.3, 20895.0], [89.4, 20895.0], [89.5, 20898.0], [89.6, 20898.0], [89.7, 20899.0], [89.8, 20899.0], [89.9, 20900.0], [90.0, 20900.0], [90.1, 20901.0], [90.2, 20901.0], [90.3, 20902.0], [90.4, 20902.0], [90.5, 20908.0], [90.6, 20908.0], [90.7, 20918.0], [90.8, 20918.0], [90.9, 20961.0], [91.0, 20961.0], [91.1, 20967.0], [91.2, 20967.0], [91.3, 20967.0], [91.4, 20967.0], [91.5, 20970.0], [91.6, 20970.0], [91.7, 20971.0], [91.8, 20971.0], [91.9, 20972.0], [92.0, 20972.0], [92.1, 20973.0], [92.2, 20973.0], [92.3, 20978.0], [92.4, 20978.0], [92.5, 20978.0], [92.6, 20978.0], [92.7, 20978.0], [92.8, 20978.0], [92.9, 20984.0], [93.0, 20984.0], [93.1, 20987.0], [93.2, 20987.0], [93.3, 20988.0], [93.4, 20988.0], [93.5, 20990.0], [93.6, 20990.0], [93.7, 20990.0], [93.8, 20990.0], [93.9, 20999.0], [94.0, 20999.0], [94.1, 20999.0], [94.2, 20999.0], [94.3, 21000.0], [94.4, 21000.0], [94.5, 21007.0], [94.6, 21007.0], [94.7, 21010.0], [94.8, 21010.0], [94.9, 21016.0], [95.0, 21016.0], [95.1, 21023.0], [95.2, 21023.0], [95.3, 21073.0], [95.4, 21073.0], [95.5, 21073.0], [95.6, 21073.0], [95.7, 21073.0], [95.8, 21073.0], [95.9, 21074.0], [96.0, 21074.0], [96.1, 21074.0], [96.2, 21074.0], [96.3, 21076.0], [96.4, 21076.0], [96.5, 21078.0], [96.6, 21078.0], [96.7, 21082.0], [96.8, 21082.0], [96.9, 21083.0], [97.0, 21083.0], [97.1, 21083.0], [97.2, 21083.0], [97.3, 21088.0], [97.4, 21088.0], [97.5, 21091.0], [97.6, 21091.0], [97.7, 21093.0], [97.8, 21093.0], [97.9, 21099.0], [98.0, 21099.0], [98.1, 21099.0], [98.2, 21099.0], [98.3, 21099.0], [98.4, 21099.0], [98.5, 21100.0], [98.6, 21100.0], [98.7, 21104.0], [98.8, 21104.0], [98.9, 21106.0], [99.0, 21106.0], [99.1, 21117.0], [99.2, 21117.0], [99.3, 21118.0], [99.4, 21118.0], [99.5, 28030.0], [99.6, 28030.0], [99.7, 28037.0], [99.8, 28037.0], [99.9, 28037.0], [100.0, 28037.0]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2400.0, "maxY": 55.0, "series": [{"data": [[2400.0, 6.0], [2800.0, 3.0], [2900.0, 4.0], [3000.0, 6.0], [3200.0, 9.0], [3600.0, 14.0], [3700.0, 10.0], [3800.0, 2.0], [4500.0, 4.0], [4700.0, 4.0], [5000.0, 1.0], [6000.0, 3.0], [6700.0, 7.0], [6900.0, 4.0], [7000.0, 16.0], [7100.0, 1.0], [7600.0, 3.0], [7700.0, 3.0], [8600.0, 2.0], [8800.0, 1.0], [10000.0, 10.0], [10200.0, 31.0], [10300.0, 20.0], [10400.0, 12.0], [11300.0, 10.0], [11400.0, 55.0], [11500.0, 11.0], [11600.0, 1.0], [12000.0, 9.0], [12100.0, 48.0], [12900.0, 1.0], [14400.0, 1.0], [17000.0, 1.0], [17200.0, 1.0], [18600.0, 1.0], [19900.0, 4.0], [20000.0, 5.0], [20100.0, 1.0], [20200.0, 10.0], [20300.0, 28.0], [20400.0, 4.0], [20500.0, 19.0], [20600.0, 10.0], [20700.0, 32.0], [20800.0, 21.0], [20900.0, 22.0], [21000.0, 21.0], [21100.0, 5.0], [28000.0, 3.0]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 28000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 54.86538461538462, "minX": 1.71244788E12, "maxY": 306.56818181818204, "series": [{"data": [[1.71244788E12, 306.56818181818204], [1.71244794E12, 54.86538461538462]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244794E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2477.5, "minX": 1.0, "maxY": 28037.0, "series": [{"data": [[2.0, 28037.0], [3.0, 28037.0], [6.0, 21113.0], [7.0, 21099.0], [13.0, 21099.0], [15.0, 21090.333333333336], [16.0, 21096.0], [24.0, 21076.5], [31.0, 21007.714285714286], [37.0, 20990.0], [38.0, 20980.666666666668], [42.0, 20972.75], [47.0, 20908.0], [46.0, 20972.25], [51.0, 20904.333333333332], [50.0, 20902.0], [52.0, 20901.0], [55.0, 20894.0], [56.0, 20895.0], [59.0, 20866.0], [66.0, 20864.714285714286], [71.0, 20810.0], [70.0, 20795.0], [68.0, 20811.5], [75.0, 20808.0], [74.0, 20807.0], [73.0, 20800.0], [72.0, 20797.0], [79.0, 20759.0], [78.0, 20780.0], [77.0, 20790.5], [84.0, 20754.2], [94.0, 20746.600000000002], [105.0, 20684.0], [104.0, 20713.500000000004], [113.0, 20654.0], [112.0, 20653.428571428572], [117.0, 20590.0], [116.0, 20596.666666666668], [123.0, 20584.0], [122.0, 20591.75], [120.0, 20583.0], [134.0, 20504.4], [129.0, 20561.0], [142.0, 20372.0], [141.0, 20374.0], [140.0, 20375.0], [139.0, 20383.0], [138.0, 20394.0], [137.0, 20478.0], [136.0, 20481.0], [151.0, 20350.5], [149.0, 20349.0], [148.0, 20347.0], [147.0, 20372.0], [146.0, 20385.0], [145.0, 20375.0], [144.0, 20382.5], [159.0, 20335.0], [158.0, 20347.4], [153.0, 20356.0], [166.0, 20272.0], [165.0, 20340.666666666668], [162.0, 20342.0], [175.0, 20239.0], [174.0, 20262.0], [183.0, 19972.0], [182.0, 19987.0], [181.0, 20066.5], [179.0, 20075.0], [178.0, 20071.0], [177.0, 20074.0], [176.0, 20172.0], [190.0, 12912.0], [189.0, 14436.0], [188.0, 17067.0], [187.0, 17228.0], [186.0, 18661.0], [185.0, 19943.0], [184.0, 19945.0], [199.0, 12178.555555555555], [211.0, 12168.833333333334], [235.0, 12122.666666666668], [247.0, 12086.0], [246.0, 12101.6], [241.0, 12097.166666666668], [249.0, 11599.5], [261.0, 11508.0], [260.0, 11498.5], [259.0, 11514.666666666666], [277.0, 11487.1875], [294.0, 11478.35294117647], [316.0, 11390.5], [312.0, 11475.64705882353], [311.0, 11472.0], [333.0, 10459.0], [332.0, 10472.0], [328.0, 10487.0], [324.0, 11383.124999999998], [345.0, 10383.555555555555], [336.0, 10433.333333333334], [363.0, 10289.5], [353.0, 10310.0], [352.0, 10364.142857142857], [398.0, 8887.0], [397.0, 10023.400000000001], [387.0, 10279.0], [414.0, 7043.285714285714], [407.0, 7142.0], [406.0, 7674.0], [404.0, 7699.0], [403.0, 7702.0], [402.0, 7708.0], [401.0, 7747.0], [400.0, 8623.5], [428.0, 6736.0], [427.0, 6989.5], [425.0, 6988.0], [422.0, 7036.125], [446.0, 4548.0], [444.0, 4562.0], [443.0, 4553.0], [442.0, 4742.5], [440.0, 4750.0], [438.0, 5035.0], [437.0, 6021.0], [436.0, 6047.0], [434.0, 6722.333333333333], [433.0, 6728.0], [463.0, 3652.0], [462.0, 3660.0], [461.0, 3687.0], [460.0, 3693.0], [459.0, 3709.5], [453.0, 3713.0], [452.0, 3717.0], [449.0, 3712.0], [448.0, 3824.0], [474.0, 3283.5], [472.0, 3621.75], [468.0, 3641.6666666666665], [465.0, 3647.0], [464.0, 3675.0], [494.0, 2886.5], [492.0, 2869.0], [491.0, 3002.6666666666665], [482.0, 3004.0], [481.0, 3285.7142857142853], [500.0, 2477.5], [1.0, 28030.0]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}, {"data": [[254.21400000000023, 13521.83399999999]], "isOverall": false, "label": "HTTP Request (mid image)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 500.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 731.8333333333334, "minX": 1.71244788E12, "maxY": 491979.95, "series": [{"data": [[1.71244788E12, 2613.05], [1.71244794E12, 731.8333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71244788E12, 491979.95], [1.71244794E12, 128395.03333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244794E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 11529.906565656562, "minX": 1.71244788E12, "maxY": 21106.48076923076, "series": [{"data": [[1.71244788E12, 11529.906565656562], [1.71244794E12, 21106.48076923076]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244794E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 11249.12626262627, "minX": 1.71244788E12, "maxY": 20297.78846153845, "series": [{"data": [[1.71244788E12, 11249.12626262627], [1.71244794E12, 20297.78846153845]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244794E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2281.482323232323, "minX": 1.71244788E12, "maxY": 7700.817307692308, "series": [{"data": [[1.71244788E12, 2281.482323232323], [1.71244794E12, 7700.817307692308]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244794E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 2478.5, "minX": 1.0, "maxY": 20895.0, "series": [{"data": [[32.0, 7033.0], [2.0, 17147.5], [35.0, 3285.0], [3.0, 17040.0], [57.0, 12130.0], [4.0, 8181.0], [1.0, 13674.0], [17.0, 3718.0], [73.0, 10288.0], [77.0, 11481.0], [5.0, 4746.0], [81.0, 20374.0], [6.0, 2478.5], [101.0, 20895.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 101.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 20895.0, "series": [{"data": [[32.0, 7033.0], [2.0, 0.0], [35.0, 3285.0], [3.0, 3010.5], [57.0, 12130.0], [4.0, 4307.5], [1.0, 0.0], [17.0, 3718.0], [73.0, 10288.0], [77.0, 11481.0], [5.0, 4746.0], [81.0, 20374.0], [6.0, 2476.5], [101.0, 20895.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 101.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.71244788E12, "maxY": 8.333333333333334, "series": [{"data": [[1.71244788E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244788E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.71244788E12, "maxY": 6.45, "series": [{"data": [[1.71244788E12, 6.45], [1.71244794E12, 1.6833333333333333]], "isOverall": false, "label": "503", "isController": false}, {"data": [[1.71244788E12, 0.15], [1.71244794E12, 0.05]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244794E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7333333333333334, "minX": 1.71244788E12, "maxY": 6.6, "series": [{"data": [[1.71244788E12, 6.6], [1.71244794E12, 1.7333333333333334]], "isOverall": false, "label": "HTTP Request (mid image)-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244794E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7333333333333334, "minX": 1.71244788E12, "maxY": 6.6, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71244788E12, 6.6], [1.71244794E12, 1.7333333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244794E12, "title": "Total Transactions Per Second"}},
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

