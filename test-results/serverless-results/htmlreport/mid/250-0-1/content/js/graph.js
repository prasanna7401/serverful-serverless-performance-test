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
        data: {"result": {"minY": 5786.0, "minX": 0.0, "maxY": 23774.0, "series": [{"data": [[0.0, 5786.0], [0.1, 5786.0], [0.2, 5786.0], [0.3, 5786.0], [0.4, 5788.0], [0.5, 5788.0], [0.6, 5788.0], [0.7, 5788.0], [0.8, 5789.0], [0.9, 5789.0], [1.0, 5789.0], [1.1, 5789.0], [1.2, 5789.0], [1.3, 5794.0], [1.4, 5794.0], [1.5, 5794.0], [1.6, 5794.0], [1.7, 5794.0], [1.8, 5794.0], [1.9, 5794.0], [2.0, 5794.0], [2.1, 5794.0], [2.2, 5794.0], [2.3, 5794.0], [2.4, 5794.0], [2.5, 5956.0], [2.6, 5956.0], [2.7, 5956.0], [2.8, 5956.0], [2.9, 5960.0], [3.0, 5960.0], [3.1, 5960.0], [3.2, 11373.0], [3.3, 11373.0], [3.4, 11373.0], [3.5, 11373.0], [3.6, 11387.0], [3.7, 11387.0], [3.8, 11387.0], [3.9, 11387.0], [4.0, 11394.0], [4.1, 11394.0], [4.2, 11394.0], [4.3, 11394.0], [4.4, 11395.0], [4.5, 11395.0], [4.6, 11395.0], [4.7, 11395.0], [4.8, 11395.0], [4.9, 11395.0], [5.0, 11395.0], [5.1, 11395.0], [5.2, 11395.0], [5.3, 11395.0], [5.4, 11395.0], [5.5, 11395.0], [5.6, 11395.0], [5.7, 11594.0], [5.8, 11594.0], [5.9, 11594.0], [6.0, 11594.0], [6.1, 11595.0], [6.2, 11595.0], [6.3, 11595.0], [6.4, 11595.0], [6.5, 11600.0], [6.6, 11600.0], [6.7, 11600.0], [6.8, 11600.0], [6.9, 11602.0], [7.0, 11602.0], [7.1, 11602.0], [7.2, 11602.0], [7.3, 11603.0], [7.4, 11603.0], [7.5, 11603.0], [7.6, 11603.0], [7.7, 11635.0], [7.8, 11635.0], [7.9, 11635.0], [8.0, 11635.0], [8.1, 11647.0], [8.2, 11647.0], [8.3, 11647.0], [8.4, 11647.0], [8.5, 11649.0], [8.6, 11649.0], [8.7, 11649.0], [8.8, 11649.0], [8.9, 11691.0], [9.0, 11691.0], [9.1, 11691.0], [9.2, 11691.0], [9.3, 11693.0], [9.4, 11693.0], [9.5, 11693.0], [9.6, 11693.0], [9.7, 11698.0], [9.8, 11698.0], [9.9, 11698.0], [10.0, 11698.0], [10.1, 11794.0], [10.2, 11794.0], [10.3, 11794.0], [10.4, 11794.0], [10.5, 11794.0], [10.6, 11794.0], [10.7, 11794.0], [10.8, 11794.0], [10.9, 11796.0], [11.0, 11796.0], [11.1, 11796.0], [11.2, 11796.0], [11.3, 11801.0], [11.4, 11801.0], [11.5, 11801.0], [11.6, 11801.0], [11.7, 11801.0], [11.8, 11801.0], [11.9, 11801.0], [12.0, 11801.0], [12.1, 11801.0], [12.2, 11801.0], [12.3, 11801.0], [12.4, 11801.0], [12.5, 11801.0], [12.6, 11801.0], [12.7, 11801.0], [12.8, 11801.0], [12.9, 12007.0], [13.0, 12007.0], [13.1, 12007.0], [13.2, 12007.0], [13.3, 12007.0], [13.4, 12007.0], [13.5, 12007.0], [13.6, 12007.0], [13.7, 12015.0], [13.8, 12015.0], [13.9, 12015.0], [14.0, 12015.0], [14.1, 12202.0], [14.2, 12202.0], [14.3, 12202.0], [14.4, 12202.0], [14.5, 12204.0], [14.6, 12204.0], [14.7, 12204.0], [14.8, 12204.0], [14.9, 12210.0], [15.0, 12210.0], [15.1, 12210.0], [15.2, 12210.0], [15.3, 12280.0], [15.4, 12280.0], [15.5, 12280.0], [15.6, 12280.0], [15.7, 12281.0], [15.8, 12281.0], [15.9, 12281.0], [16.0, 12281.0], [16.1, 12284.0], [16.2, 12284.0], [16.3, 12284.0], [16.4, 12284.0], [16.5, 12327.0], [16.6, 12327.0], [16.7, 12327.0], [16.8, 12327.0], [16.9, 12328.0], [17.0, 12328.0], [17.1, 12328.0], [17.2, 12328.0], [17.3, 12344.0], [17.4, 12344.0], [17.5, 12344.0], [17.6, 12584.0], [17.7, 12584.0], [17.8, 12584.0], [17.9, 12584.0], [18.0, 12693.0], [18.1, 12693.0], [18.2, 12693.0], [18.3, 12693.0], [18.4, 12694.0], [18.5, 12694.0], [18.6, 12694.0], [18.7, 12694.0], [18.8, 12712.0], [18.9, 12712.0], [19.0, 12712.0], [19.1, 12712.0], [19.2, 12725.0], [19.3, 12725.0], [19.4, 12725.0], [19.5, 12725.0], [19.6, 12727.0], [19.7, 12727.0], [19.8, 12727.0], [19.9, 12727.0], [20.0, 12727.0], [20.1, 12727.0], [20.2, 12727.0], [20.3, 12727.0], [20.4, 12796.0], [20.5, 12796.0], [20.6, 12796.0], [20.7, 12796.0], [20.8, 12890.0], [20.9, 12890.0], [21.0, 12890.0], [21.1, 12890.0], [21.2, 12892.0], [21.3, 12892.0], [21.4, 12892.0], [21.5, 12892.0], [21.6, 12895.0], [21.7, 12895.0], [21.8, 12895.0], [21.9, 12895.0], [22.0, 12898.0], [22.1, 12898.0], [22.2, 12898.0], [22.3, 12898.0], [22.4, 12907.0], [22.5, 12907.0], [22.6, 12907.0], [22.7, 12907.0], [22.8, 12926.0], [22.9, 12926.0], [23.0, 12926.0], [23.1, 12926.0], [23.2, 12999.0], [23.3, 12999.0], [23.4, 12999.0], [23.5, 12999.0], [23.6, 13012.0], [23.7, 13012.0], [23.8, 13012.0], [23.9, 13012.0], [24.0, 13014.0], [24.1, 13014.0], [24.2, 13014.0], [24.3, 13014.0], [24.4, 13014.0], [24.5, 13014.0], [24.6, 13014.0], [24.7, 13014.0], [24.8, 13014.0], [24.9, 13014.0], [25.0, 13014.0], [25.1, 13014.0], [25.2, 13020.0], [25.3, 13020.0], [25.4, 13020.0], [25.5, 13020.0], [25.6, 13020.0], [25.7, 13020.0], [25.8, 13020.0], [25.9, 13020.0], [26.0, 13097.0], [26.1, 13097.0], [26.2, 13097.0], [26.3, 13097.0], [26.4, 13098.0], [26.5, 13098.0], [26.6, 13098.0], [26.7, 13098.0], [26.8, 13101.0], [26.9, 13101.0], [27.0, 13101.0], [27.1, 13101.0], [27.2, 13101.0], [27.3, 13101.0], [27.4, 13101.0], [27.5, 13101.0], [27.6, 13101.0], [27.7, 13101.0], [27.8, 13101.0], [27.9, 13101.0], [28.0, 13104.0], [28.1, 13104.0], [28.2, 13104.0], [28.3, 13104.0], [28.4, 13108.0], [28.5, 13108.0], [28.6, 13108.0], [28.7, 13108.0], [28.8, 13109.0], [28.9, 13109.0], [29.0, 13109.0], [29.1, 13109.0], [29.2, 13109.0], [29.3, 13109.0], [29.4, 13109.0], [29.5, 13109.0], [29.6, 13109.0], [29.7, 13109.0], [29.8, 13109.0], [29.9, 13109.0], [30.0, 13190.0], [30.1, 13190.0], [30.2, 13190.0], [30.3, 13190.0], [30.4, 13195.0], [30.5, 13195.0], [30.6, 13195.0], [30.7, 13195.0], [30.8, 13196.0], [30.9, 13196.0], [31.0, 13196.0], [31.1, 13196.0], [31.2, 13197.0], [31.3, 13197.0], [31.4, 13197.0], [31.5, 13197.0], [31.6, 13197.0], [31.7, 13197.0], [31.8, 13197.0], [31.9, 13197.0], [32.0, 13210.0], [32.1, 13210.0], [32.2, 13210.0], [32.3, 13210.0], [32.4, 13400.0], [32.5, 13400.0], [32.6, 13400.0], [32.7, 13400.0], [32.8, 13406.0], [32.9, 13406.0], [33.0, 13406.0], [33.1, 13406.0], [33.2, 13407.0], [33.3, 13407.0], [33.4, 13407.0], [33.5, 13407.0], [33.6, 13416.0], [33.7, 13416.0], [33.8, 13416.0], [33.9, 13416.0], [34.0, 13423.0], [34.1, 13423.0], [34.2, 13423.0], [34.3, 13423.0], [34.4, 13424.0], [34.5, 13424.0], [34.6, 13424.0], [34.7, 13424.0], [34.8, 13455.0], [34.9, 13455.0], [35.0, 13455.0], [35.1, 13455.0], [35.2, 13455.0], [35.3, 13455.0], [35.4, 13455.0], [35.5, 13455.0], [35.6, 13459.0], [35.7, 13459.0], [35.8, 13459.0], [35.9, 13459.0], [36.0, 13460.0], [36.1, 13460.0], [36.2, 13460.0], [36.3, 13460.0], [36.4, 13465.0], [36.5, 13465.0], [36.6, 13465.0], [36.7, 13465.0], [36.8, 13465.0], [36.9, 13465.0], [37.0, 13465.0], [37.1, 13465.0], [37.2, 13468.0], [37.3, 13468.0], [37.4, 13468.0], [37.5, 13468.0], [37.6, 13468.0], [37.7, 13468.0], [37.8, 13468.0], [37.9, 13468.0], [38.0, 13472.0], [38.1, 13472.0], [38.2, 13472.0], [38.3, 13472.0], [38.4, 13476.0], [38.5, 13476.0], [38.6, 13476.0], [38.7, 13476.0], [38.8, 13479.0], [38.9, 13479.0], [39.0, 13479.0], [39.1, 13479.0], [39.2, 13480.0], [39.3, 13480.0], [39.4, 13480.0], [39.5, 13480.0], [39.6, 13482.0], [39.7, 13482.0], [39.8, 13482.0], [39.9, 13482.0], [40.0, 13483.0], [40.1, 13483.0], [40.2, 13483.0], [40.3, 13483.0], [40.4, 13486.0], [40.5, 13486.0], [40.6, 13486.0], [40.7, 13486.0], [40.8, 13494.0], [40.9, 13494.0], [41.0, 13494.0], [41.1, 13494.0], [41.2, 13495.0], [41.3, 13495.0], [41.4, 13495.0], [41.5, 13495.0], [41.6, 13507.0], [41.7, 13507.0], [41.8, 13507.0], [41.9, 13507.0], [42.0, 13507.0], [42.1, 13507.0], [42.2, 13507.0], [42.3, 13507.0], [42.4, 13507.0], [42.5, 13507.0], [42.6, 13507.0], [42.7, 13507.0], [42.8, 13508.0], [42.9, 13508.0], [43.0, 13508.0], [43.1, 13508.0], [43.2, 13508.0], [43.3, 13508.0], [43.4, 13508.0], [43.5, 13508.0], [43.6, 13509.0], [43.7, 13509.0], [43.8, 13509.0], [43.9, 13509.0], [44.0, 13509.0], [44.1, 13509.0], [44.2, 13509.0], [44.3, 13509.0], [44.4, 13509.0], [44.5, 13509.0], [44.6, 13509.0], [44.7, 13509.0], [44.8, 13509.0], [44.9, 13509.0], [45.0, 13509.0], [45.1, 13509.0], [45.2, 13514.0], [45.3, 13514.0], [45.4, 13514.0], [45.5, 13514.0], [45.6, 13515.0], [45.7, 13515.0], [45.8, 13515.0], [45.9, 13515.0], [46.0, 13515.0], [46.1, 13515.0], [46.2, 13515.0], [46.3, 13515.0], [46.4, 13515.0], [46.5, 13515.0], [46.6, 13515.0], [46.7, 13515.0], [46.8, 13515.0], [46.9, 13515.0], [47.0, 13515.0], [47.1, 13515.0], [47.2, 13515.0], [47.3, 13515.0], [47.4, 13515.0], [47.5, 13515.0], [47.6, 13515.0], [47.7, 13515.0], [47.8, 13515.0], [47.9, 13515.0], [48.0, 13516.0], [48.1, 13516.0], [48.2, 13516.0], [48.3, 13516.0], [48.4, 13516.0], [48.5, 13516.0], [48.6, 13516.0], [48.7, 13516.0], [48.8, 13516.0], [48.9, 13516.0], [49.0, 13516.0], [49.1, 13516.0], [49.2, 13517.0], [49.3, 13517.0], [49.4, 13517.0], [49.5, 13517.0], [49.6, 13517.0], [49.7, 13517.0], [49.8, 13517.0], [49.9, 13517.0], [50.0, 13517.0], [50.1, 13517.0], [50.2, 13517.0], [50.3, 13517.0], [50.4, 13517.0], [50.5, 13517.0], [50.6, 13517.0], [50.7, 13517.0], [50.8, 13522.0], [50.9, 13522.0], [51.0, 13522.0], [51.1, 13522.0], [51.2, 13523.0], [51.3, 13523.0], [51.4, 13523.0], [51.5, 13523.0], [51.6, 13523.0], [51.7, 13523.0], [51.8, 13523.0], [51.9, 13523.0], [52.0, 13523.0], [52.1, 13523.0], [52.2, 13523.0], [52.3, 13523.0], [52.4, 13650.0], [52.5, 13650.0], [52.6, 13650.0], [52.7, 13650.0], [52.8, 13814.0], [52.9, 13814.0], [53.0, 13814.0], [53.1, 13814.0], [53.2, 13814.0], [53.3, 13814.0], [53.4, 13814.0], [53.5, 13814.0], [53.6, 13817.0], [53.7, 13817.0], [53.8, 13817.0], [53.9, 13817.0], [54.0, 13817.0], [54.1, 13817.0], [54.2, 13817.0], [54.3, 13817.0], [54.4, 13822.0], [54.5, 13822.0], [54.6, 13822.0], [54.7, 13822.0], [54.8, 14023.0], [54.9, 14023.0], [55.0, 14023.0], [55.1, 14023.0], [55.2, 14023.0], [55.3, 14023.0], [55.4, 14023.0], [55.5, 14023.0], [55.6, 14024.0], [55.7, 14024.0], [55.8, 14024.0], [55.9, 14024.0], [56.0, 14025.0], [56.1, 14025.0], [56.2, 14025.0], [56.3, 14025.0], [56.4, 14025.0], [56.5, 14025.0], [56.6, 14025.0], [56.7, 14025.0], [56.8, 14031.0], [56.9, 14031.0], [57.0, 14031.0], [57.1, 14031.0], [57.2, 14031.0], [57.3, 14031.0], [57.4, 14031.0], [57.5, 14031.0], [57.6, 14032.0], [57.7, 14032.0], [57.8, 14032.0], [57.9, 14032.0], [58.0, 14032.0], [58.1, 14032.0], [58.2, 14032.0], [58.3, 14032.0], [58.4, 14034.0], [58.5, 14034.0], [58.6, 14034.0], [58.7, 14034.0], [58.8, 14074.0], [58.9, 14074.0], [59.0, 14074.0], [59.1, 14074.0], [59.2, 14074.0], [59.3, 14074.0], [59.4, 14074.0], [59.5, 14074.0], [59.6, 14075.0], [59.7, 14075.0], [59.8, 14075.0], [59.9, 14075.0], [60.0, 14076.0], [60.1, 14076.0], [60.2, 14076.0], [60.3, 14076.0], [60.4, 14076.0], [60.5, 14076.0], [60.6, 14076.0], [60.7, 14076.0], [60.8, 14081.0], [60.9, 14081.0], [61.0, 14081.0], [61.1, 14081.0], [61.2, 14081.0], [61.3, 14081.0], [61.4, 14081.0], [61.5, 14081.0], [61.6, 14082.0], [61.7, 14082.0], [61.8, 14082.0], [61.9, 14082.0], [62.0, 14100.0], [62.1, 14100.0], [62.2, 14100.0], [62.3, 14100.0], [62.4, 14102.0], [62.5, 14102.0], [62.6, 14102.0], [62.7, 14102.0], [62.8, 14109.0], [62.9, 14109.0], [63.0, 14109.0], [63.1, 14109.0], [63.2, 14110.0], [63.3, 14110.0], [63.4, 14110.0], [63.5, 14110.0], [63.6, 14113.0], [63.7, 14113.0], [63.8, 14113.0], [63.9, 14113.0], [64.0, 14113.0], [64.1, 14113.0], [64.2, 14113.0], [64.3, 14113.0], [64.4, 14116.0], [64.5, 14116.0], [64.6, 14116.0], [64.7, 14116.0], [64.8, 14116.0], [64.9, 14116.0], [65.0, 14116.0], [65.1, 14116.0], [65.2, 14118.0], [65.3, 14118.0], [65.4, 14118.0], [65.5, 14118.0], [65.6, 14118.0], [65.7, 14118.0], [65.8, 14118.0], [65.9, 14118.0], [66.0, 14118.0], [66.1, 14118.0], [66.2, 14118.0], [66.3, 14118.0], [66.4, 14121.0], [66.5, 14121.0], [66.6, 14121.0], [66.7, 14121.0], [66.8, 14121.0], [66.9, 14121.0], [67.0, 14121.0], [67.1, 14121.0], [67.2, 14124.0], [67.3, 14124.0], [67.4, 14124.0], [67.5, 14124.0], [67.6, 14124.0], [67.7, 14124.0], [67.8, 14124.0], [67.9, 14124.0], [68.0, 14126.0], [68.1, 14126.0], [68.2, 14126.0], [68.3, 14126.0], [68.4, 14130.0], [68.5, 14130.0], [68.6, 14130.0], [68.7, 14130.0], [68.8, 14161.0], [68.9, 14161.0], [69.0, 14161.0], [69.1, 14161.0], [69.2, 14172.0], [69.3, 14172.0], [69.4, 14172.0], [69.5, 14172.0], [69.6, 14172.0], [69.7, 14172.0], [69.8, 14172.0], [69.9, 14172.0], [70.0, 14172.0], [70.1, 14172.0], [70.2, 14172.0], [70.3, 14172.0], [70.4, 14173.0], [70.5, 14173.0], [70.6, 14173.0], [70.7, 14173.0], [70.8, 14174.0], [70.9, 14174.0], [71.0, 14174.0], [71.1, 14174.0], [71.2, 14174.0], [71.3, 14174.0], [71.4, 14174.0], [71.5, 14174.0], [71.6, 14180.0], [71.7, 14180.0], [71.8, 14180.0], [71.9, 14180.0], [72.0, 14225.0], [72.1, 14225.0], [72.2, 14225.0], [72.3, 14225.0], [72.4, 14225.0], [72.5, 14225.0], [72.6, 14225.0], [72.7, 14225.0], [72.8, 14225.0], [72.9, 14225.0], [73.0, 14225.0], [73.1, 14225.0], [73.2, 14226.0], [73.3, 14226.0], [73.4, 14226.0], [73.5, 14226.0], [73.6, 14227.0], [73.7, 14227.0], [73.8, 14227.0], [73.9, 14227.0], [74.0, 14229.0], [74.1, 14229.0], [74.2, 14229.0], [74.3, 14229.0], [74.4, 14232.0], [74.5, 14232.0], [74.6, 14232.0], [74.7, 14232.0], [74.8, 14250.0], [74.9, 14250.0], [75.0, 14250.0], [75.1, 14250.0], [75.2, 14253.0], [75.3, 14253.0], [75.4, 14253.0], [75.5, 14253.0], [75.6, 14253.0], [75.7, 14253.0], [75.8, 14253.0], [75.9, 14253.0], [76.0, 14254.0], [76.1, 14254.0], [76.2, 14254.0], [76.3, 14254.0], [76.4, 14255.0], [76.5, 14255.0], [76.6, 14255.0], [76.7, 14255.0], [76.8, 14260.0], [76.9, 14260.0], [77.0, 14260.0], [77.1, 14260.0], [77.2, 14260.0], [77.3, 14260.0], [77.4, 14260.0], [77.5, 14260.0], [77.6, 14413.0], [77.7, 14413.0], [77.8, 14413.0], [77.9, 14413.0], [78.0, 14428.0], [78.1, 14428.0], [78.2, 14428.0], [78.3, 14428.0], [78.4, 14435.0], [78.5, 14435.0], [78.6, 14435.0], [78.7, 14435.0], [78.8, 14436.0], [78.9, 14436.0], [79.0, 14436.0], [79.1, 14436.0], [79.2, 14436.0], [79.3, 14436.0], [79.4, 14436.0], [79.5, 14436.0], [79.6, 14436.0], [79.7, 14436.0], [79.8, 14436.0], [79.9, 14436.0], [80.0, 14439.0], [80.1, 14439.0], [80.2, 14439.0], [80.3, 14439.0], [80.4, 14832.0], [80.5, 14832.0], [80.6, 14832.0], [80.7, 14832.0], [80.8, 14837.0], [80.9, 14837.0], [81.0, 14837.0], [81.1, 14837.0], [81.2, 14837.0], [81.3, 14837.0], [81.4, 14837.0], [81.5, 14837.0], [81.6, 14839.0], [81.7, 14839.0], [81.8, 14839.0], [81.9, 14839.0], [82.0, 14840.0], [82.1, 14840.0], [82.2, 14840.0], [82.3, 14840.0], [82.4, 14844.0], [82.5, 14844.0], [82.6, 14844.0], [82.7, 14844.0], [82.8, 14844.0], [82.9, 14845.0], [83.0, 14845.0], [83.1, 14845.0], [83.2, 14845.0], [83.3, 14846.0], [83.4, 14846.0], [83.5, 14846.0], [83.6, 14846.0], [83.7, 15376.0], [83.8, 15376.0], [83.9, 15376.0], [84.0, 15376.0], [84.1, 15385.0], [84.2, 15385.0], [84.3, 15385.0], [84.4, 15385.0], [84.5, 15385.0], [84.6, 15385.0], [84.7, 15385.0], [84.8, 15385.0], [84.9, 15390.0], [85.0, 15390.0], [85.1, 15390.0], [85.2, 15390.0], [85.3, 15390.0], [85.4, 15390.0], [85.5, 15390.0], [85.6, 15390.0], [85.7, 15409.0], [85.8, 15409.0], [85.9, 15409.0], [86.0, 15409.0], [86.1, 15465.0], [86.2, 15465.0], [86.3, 15465.0], [86.4, 15465.0], [86.5, 15500.0], [86.6, 15500.0], [86.7, 15500.0], [86.8, 15500.0], [86.9, 15500.0], [87.0, 15500.0], [87.1, 15500.0], [87.2, 15500.0], [87.3, 15500.0], [87.4, 15500.0], [87.5, 15500.0], [87.6, 15500.0], [87.7, 15501.0], [87.8, 15501.0], [87.9, 15501.0], [88.0, 15501.0], [88.1, 15506.0], [88.2, 15506.0], [88.3, 15506.0], [88.4, 15506.0], [88.5, 15507.0], [88.6, 15507.0], [88.7, 15507.0], [88.8, 15507.0], [88.9, 15507.0], [89.0, 15507.0], [89.1, 15507.0], [89.2, 15507.0], [89.3, 15508.0], [89.4, 15508.0], [89.5, 15508.0], [89.6, 15508.0], [89.7, 15509.0], [89.8, 15509.0], [89.9, 15509.0], [90.0, 15509.0], [90.1, 15607.0], [90.2, 15607.0], [90.3, 15607.0], [90.4, 15607.0], [90.5, 15638.0], [90.6, 15638.0], [90.7, 15638.0], [90.8, 15638.0], [90.9, 15645.0], [91.0, 15645.0], [91.1, 15645.0], [91.2, 15645.0], [91.3, 15658.0], [91.4, 15658.0], [91.5, 15658.0], [91.6, 15658.0], [91.7, 15659.0], [91.8, 15659.0], [91.9, 15659.0], [92.0, 15659.0], [92.1, 15675.0], [92.2, 15675.0], [92.3, 15675.0], [92.4, 15675.0], [92.5, 15676.0], [92.6, 15676.0], [92.7, 15676.0], [92.8, 15676.0], [92.9, 15676.0], [93.0, 15676.0], [93.1, 15676.0], [93.2, 15676.0], [93.3, 15676.0], [93.4, 15676.0], [93.5, 15676.0], [93.6, 15676.0], [93.7, 15676.0], [93.8, 15676.0], [93.9, 15676.0], [94.0, 15676.0], [94.1, 15676.0], [94.2, 15676.0], [94.3, 15676.0], [94.4, 15676.0], [94.5, 15735.0], [94.6, 15735.0], [94.7, 15735.0], [94.8, 15735.0], [94.9, 15763.0], [95.0, 15763.0], [95.1, 15763.0], [95.2, 15763.0], [95.3, 15768.0], [95.4, 15768.0], [95.5, 15768.0], [95.6, 15768.0], [95.7, 15769.0], [95.8, 15769.0], [95.9, 15769.0], [96.0, 15769.0], [96.1, 15774.0], [96.2, 15774.0], [96.3, 15774.0], [96.4, 15774.0], [96.5, 15775.0], [96.6, 15775.0], [96.7, 15775.0], [96.8, 15775.0], [96.9, 15775.0], [97.0, 15775.0], [97.1, 15775.0], [97.2, 15775.0], [97.3, 15798.0], [97.4, 15798.0], [97.5, 15798.0], [97.6, 15798.0], [97.7, 15805.0], [97.8, 15805.0], [97.9, 15805.0], [98.0, 15805.0], [98.1, 15845.0], [98.2, 15845.0], [98.3, 15845.0], [98.4, 15845.0], [98.5, 15850.0], [98.6, 15850.0], [98.7, 15850.0], [98.8, 15850.0], [98.9, 15860.0], [99.0, 15860.0], [99.1, 15860.0], [99.2, 15860.0], [99.3, 16979.0], [99.4, 16979.0], [99.5, 16979.0], [99.6, 16979.0], [99.7, 23774.0], [99.8, 23774.0], [99.9, 23774.0], [100.0, 23774.0]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 5700.0, "maxY": 27.0, "series": [{"data": [[11300.0, 6.0], [11600.0, 9.0], [11500.0, 2.0], [11700.0, 3.0], [11800.0, 4.0], [12000.0, 3.0], [12200.0, 6.0], [12300.0, 3.0], [12500.0, 1.0], [12600.0, 2.0], [12700.0, 5.0], [12800.0, 4.0], [12900.0, 3.0], [13000.0, 8.0], [13100.0, 13.0], [13200.0, 1.0], [13400.0, 23.0], [13500.0, 27.0], [13600.0, 1.0], [13800.0, 5.0], [14000.0, 18.0], [14100.0, 25.0], [14200.0, 14.0], [14400.0, 7.0], [14800.0, 8.0], [15300.0, 5.0], [15400.0, 2.0], [15500.0, 9.0], [15600.0, 11.0], [15700.0, 8.0], [15800.0, 4.0], [16900.0, 1.0], [23700.0, 1.0], [5700.0, 6.0], [5900.0, 2.0]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 23700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 250.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 250.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 250.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 127.17199999999994, "minX": 1.71244788E12, "maxY": 127.17199999999994, "series": [{"data": [[1.71244788E12, 127.17199999999994]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244788E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 5790.833333333334, "minX": 1.0, "maxY": 23774.0, "series": [{"data": [[2.0, 16979.0], [3.0, 15860.0], [5.0, 15847.5], [7.0, 15801.5], [12.0, 15772.2], [13.0, 15763.0], [14.0, 15735.0], [16.0, 15675.5], [20.0, 15676.0], [21.0, 15659.0], [22.0, 15658.0], [23.0, 15645.0], [24.0, 15638.0], [25.0, 15607.0], [26.0, 15509.0], [35.0, 15465.0], [34.0, 15503.625], [36.0, 15409.0], [39.0, 15390.0], [38.0, 15385.0], [41.0, 15376.0], [40.0, 15390.0], [43.0, 14845.5], [46.0, 14839.333333333334], [49.0, 14837.0], [50.0, 14439.0], [55.0, 14434.2], [56.0, 14413.0], [61.0, 14255.0], [63.0, 14250.0], [62.0, 14260.0], [67.0, 14228.0], [64.0, 14229.0], [70.0, 14225.333333333334], [79.0, 14130.0], [78.0, 14161.0], [77.0, 14173.857142857143], [81.0, 14121.0], [80.0, 14121.0], [87.0, 14122.0], [84.0, 14120.666666666666], [91.0, 14111.666666666666], [88.0, 14116.0], [95.0, 14101.0], [93.0, 14113.0], [97.0, 14075.5], [103.0, 14078.0], [104.0, 14034.0], [111.0, 14028.0], [115.0, 13817.0], [113.0, 14023.0], [112.0, 14032.0], [119.0, 13650.0], [118.0, 13818.0], [116.0, 13814.0], [120.0, 13516.0], [131.0, 13518.636363636364], [148.0, 13494.5], [146.0, 13509.777777777777], [145.0, 13512.0], [144.0, 13513.0], [157.0, 13465.0], [155.0, 13472.0], [154.0, 13479.5], [152.0, 13481.75], [166.0, 13420.0], [164.0, 13423.0], [163.0, 13455.0], [161.0, 13463.75], [175.0, 13190.0], [174.0, 13196.5], [173.0, 13195.0], [172.0, 13197.0], [170.0, 13210.0], [169.0, 13400.0], [168.0, 13406.5], [183.0, 13103.333333333334], [182.0, 13106.4], [191.0, 13016.0], [190.0, 13014.0], [185.0, 13097.5], [199.0, 12796.0], [198.0, 12893.333333333334], [195.0, 12895.0], [194.0, 12907.0], [193.0, 12926.0], [192.0, 12999.0], [207.0, 12344.0], [206.0, 12584.0], [205.0, 12693.5], [203.0, 12712.0], [202.0, 12726.0], [200.0, 12727.0], [215.0, 12207.0], [213.0, 12202.0], [212.0, 12284.0], [211.0, 12280.5], [209.0, 12327.5], [218.0, 12007.0], [217.0, 12011.0], [231.0, 11635.0], [230.0, 11648.0], [228.0, 11694.0], [225.0, 11796.0], [224.0, 11798.666666666668], [236.0, 11598.0], [234.0, 11595.0], [233.0, 11603.0], [232.0, 11600.0], [244.0, 5956.0], [243.0, 5960.0], [242.0, 11373.0], [241.0, 11393.2], [250.0, 5790.833333333334], [1.0, 23774.0]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}, {"data": [[127.17199999999994, 13539.376]], "isOverall": false, "label": "HTTP Request (mid image)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 250.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1256.9, "minX": 1.71244788E12, "maxY": 316540.95, "series": [{"data": [[1.71244788E12, 1256.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71244788E12, 316540.95]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244788E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 13539.376, "minX": 1.71244788E12, "maxY": 13539.376, "series": [{"data": [[1.71244788E12, 13539.376]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244788E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 13444.163999999999, "minX": 1.71244788E12, "maxY": 13444.163999999999, "series": [{"data": [[1.71244788E12, 13444.163999999999]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244788E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 872.8080000000003, "minX": 1.71244788E12, "maxY": 872.8080000000003, "series": [{"data": [[1.71244788E12, 872.8080000000003]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244788E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 5794.0, "minX": 1.0, "maxY": 20376.5, "series": [{"data": [[8.0, 5794.0], [1.0, 20376.5], [17.0, 11600.0], [69.0, 14121.0], [35.0, 15500.0], [85.0, 13459.0], [22.0, 12203.0], [12.0, 15775.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 85.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 5790.0, "minX": 1.0, "maxY": 15775.0, "series": [{"data": [[8.0, 5790.0], [1.0, 8489.5], [17.0, 11600.0], [69.0, 14121.0], [35.0, 15500.0], [85.0, 13459.0], [22.0, 12203.0], [12.0, 15775.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 85.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.166666666666667, "minX": 1.71244788E12, "maxY": 4.166666666666667, "series": [{"data": [[1.71244788E12, 4.166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244788E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71244788E12, "maxY": 4.016666666666667, "series": [{"data": [[1.71244788E12, 0.13333333333333333]], "isOverall": false, "label": "502", "isController": false}, {"data": [[1.71244788E12, 4.016666666666667]], "isOverall": false, "label": "504", "isController": false}, {"data": [[1.71244788E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244788E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.166666666666667, "minX": 1.71244788E12, "maxY": 4.166666666666667, "series": [{"data": [[1.71244788E12, 4.166666666666667]], "isOverall": false, "label": "HTTP Request (mid image)-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244788E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.166666666666667, "minX": 1.71244788E12, "maxY": 4.166666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71244788E12, 4.166666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244788E12, "title": "Total Transactions Per Second"}},
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

