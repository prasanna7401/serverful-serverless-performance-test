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
        data: {"result": {"minY": 332.0, "minX": 0.0, "maxY": 51267.0, "series": [{"data": [[0.0, 332.0], [0.1, 332.0], [0.2, 333.0], [0.3, 333.0], [0.4, 688.0], [0.5, 688.0], [0.6, 688.0], [0.7, 698.0], [0.8, 716.0], [0.9, 716.0], [1.0, 724.0], [1.1, 724.0], [1.2, 737.0], [1.3, 737.0], [1.4, 749.0], [1.5, 749.0], [1.6, 762.0], [1.7, 762.0], [1.8, 784.0], [1.9, 784.0], [2.0, 785.0], [2.1, 785.0], [2.2, 819.0], [2.3, 819.0], [2.4, 819.0], [2.5, 819.0], [2.6, 819.0], [2.7, 819.0], [2.8, 820.0], [2.9, 820.0], [3.0, 821.0], [3.1, 821.0], [3.2, 824.0], [3.3, 824.0], [3.4, 824.0], [3.5, 830.0], [3.6, 830.0], [3.7, 833.0], [3.8, 833.0], [3.9, 838.0], [4.0, 838.0], [4.1, 857.0], [4.2, 857.0], [4.3, 858.0], [4.4, 858.0], [4.5, 870.0], [4.6, 870.0], [4.7, 876.0], [4.8, 876.0], [4.9, 880.0], [5.0, 880.0], [5.1, 913.0], [5.2, 913.0], [5.3, 917.0], [5.4, 917.0], [5.5, 922.0], [5.6, 922.0], [5.7, 923.0], [5.8, 923.0], [5.9, 978.0], [6.0, 978.0], [6.1, 996.0], [6.2, 996.0], [6.3, 1024.0], [6.4, 1024.0], [6.5, 1026.0], [6.6, 1026.0], [6.7, 1052.0], [6.8, 1052.0], [6.9, 1067.0], [7.0, 1067.0], [7.1, 1076.0], [7.2, 1076.0], [7.3, 1078.0], [7.4, 1078.0], [7.5, 1126.0], [7.6, 1126.0], [7.7, 1175.0], [7.8, 1175.0], [7.9, 1228.0], [8.0, 1228.0], [8.1, 1228.0], [8.2, 1228.0], [8.3, 1249.0], [8.4, 1249.0], [8.5, 1305.0], [8.6, 1305.0], [8.7, 1335.0], [8.8, 1335.0], [8.9, 1345.0], [9.0, 1345.0], [9.1, 1356.0], [9.2, 1356.0], [9.3, 1357.0], [9.4, 1367.0], [9.5, 1367.0], [9.6, 1416.0], [9.7, 1416.0], [9.8, 1448.0], [9.9, 1448.0], [10.0, 1472.0], [10.1, 1472.0], [10.2, 1485.0], [10.3, 1485.0], [10.4, 1485.0], [10.5, 1485.0], [10.6, 1502.0], [10.7, 1502.0], [10.8, 1530.0], [10.9, 1530.0], [11.0, 1535.0], [11.1, 1535.0], [11.2, 1535.0], [11.3, 1535.0], [11.4, 1536.0], [11.5, 1536.0], [11.6, 1539.0], [11.7, 1539.0], [11.8, 1540.0], [11.9, 1540.0], [12.0, 1555.0], [12.1, 1555.0], [12.2, 1591.0], [12.3, 1591.0], [12.4, 1627.0], [12.5, 1627.0], [12.6, 1638.0], [12.7, 1638.0], [12.8, 1764.0], [12.9, 1764.0], [13.0, 1767.0], [13.1, 1767.0], [13.2, 1778.0], [13.3, 1778.0], [13.4, 1817.0], [13.5, 1817.0], [13.6, 1903.0], [13.7, 1903.0], [13.8, 1946.0], [13.9, 1946.0], [14.0, 1973.0], [14.1, 1973.0], [14.2, 1979.0], [14.3, 1979.0], [14.4, 2001.0], [14.5, 2001.0], [14.6, 2002.0], [14.7, 2002.0], [14.8, 2040.0], [14.9, 2040.0], [15.0, 2101.0], [15.1, 2101.0], [15.2, 2146.0], [15.3, 2146.0], [15.4, 2265.0], [15.5, 2265.0], [15.6, 2271.0], [15.7, 2271.0], [15.8, 2291.0], [15.9, 2291.0], [16.0, 2294.0], [16.1, 2294.0], [16.2, 2440.0], [16.3, 2440.0], [16.4, 2458.0], [16.5, 2458.0], [16.6, 2503.0], [16.7, 2503.0], [16.8, 2539.0], [16.9, 2539.0], [17.0, 2697.0], [17.1, 2697.0], [17.2, 2754.0], [17.3, 2754.0], [17.4, 2784.0], [17.5, 2784.0], [17.6, 2812.0], [17.7, 2812.0], [17.8, 2917.0], [17.9, 2917.0], [18.0, 2972.0], [18.1, 2972.0], [18.2, 3038.0], [18.3, 3038.0], [18.4, 3072.0], [18.5, 3072.0], [18.6, 3156.0], [18.7, 3156.0], [18.8, 3172.0], [18.9, 3172.0], [19.0, 3188.0], [19.1, 3188.0], [19.2, 3201.0], [19.3, 3201.0], [19.4, 3292.0], [19.5, 3292.0], [19.6, 3594.0], [19.7, 3594.0], [19.8, 3598.0], [19.9, 3598.0], [20.0, 3775.0], [20.1, 3775.0], [20.2, 3994.0], [20.3, 3994.0], [20.4, 4024.0], [20.5, 4024.0], [20.6, 4359.0], [20.7, 4359.0], [20.8, 4403.0], [20.9, 4403.0], [21.0, 7340.0], [21.1, 7340.0], [21.2, 9495.0], [21.3, 9495.0], [21.4, 9906.0], [21.5, 9906.0], [21.6, 10701.0], [21.7, 10701.0], [21.8, 10957.0], [21.9, 10957.0], [22.0, 13374.0], [22.1, 13374.0], [22.2, 13821.0], [22.3, 13821.0], [22.4, 14046.0], [22.5, 14046.0], [22.6, 14604.0], [22.7, 14604.0], [22.8, 15141.0], [22.9, 15141.0], [23.0, 15667.0], [23.1, 15667.0], [23.2, 18056.0], [23.3, 18056.0], [23.4, 18624.0], [23.5, 18624.0], [23.6, 19354.0], [23.7, 19354.0], [23.8, 19851.0], [23.9, 19851.0], [24.0, 19967.0], [24.1, 19967.0], [24.2, 20458.0], [24.3, 20458.0], [24.4, 20472.0], [24.5, 20472.0], [24.6, 21036.0], [24.7, 21036.0], [24.8, 22025.0], [24.9, 22025.0], [25.0, 22965.0], [25.1, 22965.0], [25.2, 22975.0], [25.3, 22975.0], [25.4, 23173.0], [25.5, 23173.0], [25.6, 23251.0], [25.7, 23251.0], [25.8, 24060.0], [25.9, 24060.0], [26.0, 24268.0], [26.1, 24268.0], [26.2, 24693.0], [26.3, 24693.0], [26.4, 24901.0], [26.5, 24901.0], [26.6, 24950.0], [26.7, 24950.0], [26.8, 25138.0], [26.9, 25138.0], [27.0, 25759.0], [27.1, 25759.0], [27.2, 26006.0], [27.3, 26006.0], [27.4, 26862.0], [27.5, 26862.0], [27.6, 27114.0], [27.7, 27114.0], [27.8, 27158.0], [27.9, 27158.0], [28.0, 27237.0], [28.1, 27237.0], [28.2, 27420.0], [28.3, 27420.0], [28.4, 28014.0], [28.5, 28014.0], [28.6, 28129.0], [28.7, 28129.0], [28.8, 28428.0], [28.9, 28428.0], [29.0, 28880.0], [29.1, 28880.0], [29.2, 28980.0], [29.3, 28980.0], [29.4, 29067.0], [29.5, 29067.0], [29.6, 29644.0], [29.7, 29644.0], [29.8, 30253.0], [29.9, 30253.0], [30.0, 30436.0], [30.1, 30436.0], [30.2, 30445.0], [30.3, 30445.0], [30.4, 30530.0], [30.5, 30530.0], [30.6, 30617.0], [30.7, 30617.0], [30.8, 30777.0], [30.9, 30777.0], [31.0, 31010.0], [31.1, 31010.0], [31.2, 31027.0], [31.3, 31027.0], [31.4, 31063.0], [31.5, 31063.0], [31.6, 31242.0], [31.7, 31242.0], [31.8, 31440.0], [31.9, 31440.0], [32.0, 31526.0], [32.1, 31526.0], [32.2, 31599.0], [32.3, 31599.0], [32.4, 31696.0], [32.5, 31696.0], [32.6, 31723.0], [32.7, 31723.0], [32.8, 32256.0], [32.9, 32256.0], [33.0, 32354.0], [33.1, 32354.0], [33.2, 32359.0], [33.3, 32359.0], [33.4, 32564.0], [33.5, 32564.0], [33.6, 32580.0], [33.7, 32580.0], [33.8, 32671.0], [33.9, 32671.0], [34.0, 32798.0], [34.1, 32798.0], [34.2, 33082.0], [34.3, 33082.0], [34.4, 33434.0], [34.5, 33434.0], [34.6, 33463.0], [34.7, 33463.0], [34.8, 33464.0], [34.9, 33464.0], [35.0, 33465.0], [35.1, 33465.0], [35.2, 33468.0], [35.3, 33468.0], [35.4, 33644.0], [35.5, 33644.0], [35.6, 33791.0], [35.7, 33791.0], [35.8, 33809.0], [35.9, 33809.0], [36.0, 33824.0], [36.1, 33824.0], [36.2, 33895.0], [36.3, 33895.0], [36.4, 33998.0], [36.5, 33998.0], [36.6, 34203.0], [36.7, 34203.0], [36.8, 34447.0], [36.9, 34447.0], [37.0, 34454.0], [37.1, 34454.0], [37.2, 34563.0], [37.3, 34563.0], [37.4, 34691.0], [37.5, 34691.0], [37.6, 34691.0], [37.7, 34691.0], [37.8, 34691.0], [37.9, 34691.0], [38.0, 34692.0], [38.1, 34692.0], [38.2, 34800.0], [38.3, 34800.0], [38.4, 34800.0], [38.5, 35021.0], [38.6, 35021.0], [38.7, 35213.0], [38.8, 35213.0], [38.9, 35295.0], [39.0, 35295.0], [39.1, 35305.0], [39.2, 35305.0], [39.3, 35355.0], [39.4, 35355.0], [39.5, 35494.0], [39.6, 35494.0], [39.7, 35526.0], [39.8, 35526.0], [39.9, 35637.0], [40.0, 35637.0], [40.1, 35677.0], [40.2, 35677.0], [40.3, 35807.0], [40.4, 35807.0], [40.5, 35917.0], [40.6, 35917.0], [40.7, 35938.0], [40.8, 35938.0], [40.9, 36075.0], [41.0, 36075.0], [41.1, 36105.0], [41.2, 36105.0], [41.3, 36124.0], [41.4, 36124.0], [41.5, 36125.0], [41.6, 36125.0], [41.7, 36137.0], [41.8, 36137.0], [41.9, 36144.0], [42.0, 36144.0], [42.1, 36251.0], [42.2, 36251.0], [42.3, 36287.0], [42.4, 36287.0], [42.5, 36347.0], [42.6, 36347.0], [42.7, 36426.0], [42.8, 36426.0], [42.9, 36428.0], [43.0, 36428.0], [43.1, 36491.0], [43.2, 36491.0], [43.3, 36516.0], [43.4, 36516.0], [43.5, 36534.0], [43.6, 36534.0], [43.7, 36557.0], [43.8, 36557.0], [43.9, 36709.0], [44.0, 36709.0], [44.1, 36712.0], [44.2, 36712.0], [44.3, 36774.0], [44.4, 36774.0], [44.5, 36841.0], [44.6, 36841.0], [44.7, 36842.0], [44.8, 36842.0], [44.9, 36863.0], [45.0, 36863.0], [45.1, 36898.0], [45.2, 36898.0], [45.3, 36939.0], [45.4, 36939.0], [45.5, 36966.0], [45.6, 36966.0], [45.7, 37100.0], [45.8, 37100.0], [45.9, 37113.0], [46.0, 37113.0], [46.1, 37134.0], [46.2, 37134.0], [46.3, 37252.0], [46.4, 37252.0], [46.5, 37297.0], [46.6, 37297.0], [46.7, 37682.0], [46.8, 37682.0], [46.9, 37730.0], [47.0, 37730.0], [47.1, 37739.0], [47.2, 37739.0], [47.3, 37786.0], [47.4, 37786.0], [47.5, 37892.0], [47.6, 37892.0], [47.7, 37903.0], [47.8, 37903.0], [47.9, 37968.0], [48.0, 37968.0], [48.1, 37968.0], [48.2, 37968.0], [48.3, 37974.0], [48.4, 37974.0], [48.5, 38093.0], [48.6, 38093.0], [48.7, 38161.0], [48.8, 38161.0], [48.9, 38163.0], [49.0, 38163.0], [49.1, 38178.0], [49.2, 38178.0], [49.3, 38189.0], [49.4, 38189.0], [49.5, 38216.0], [49.6, 38216.0], [49.7, 38241.0], [49.8, 38241.0], [49.9, 38296.0], [50.0, 38296.0], [50.1, 38297.0], [50.2, 38297.0], [50.3, 38328.0], [50.4, 38328.0], [50.5, 38397.0], [50.6, 38397.0], [50.7, 38401.0], [50.8, 38401.0], [50.9, 38483.0], [51.0, 38483.0], [51.1, 38515.0], [51.2, 38515.0], [51.3, 38584.0], [51.4, 38584.0], [51.5, 38606.0], [51.6, 38606.0], [51.7, 38611.0], [51.8, 38611.0], [51.9, 38710.0], [52.0, 38710.0], [52.1, 38777.0], [52.2, 38777.0], [52.3, 38778.0], [52.4, 38778.0], [52.5, 38786.0], [52.6, 38786.0], [52.7, 38790.0], [52.8, 38790.0], [52.9, 38792.0], [53.0, 38792.0], [53.1, 38819.0], [53.2, 38819.0], [53.3, 38824.0], [53.4, 38824.0], [53.5, 38834.0], [53.6, 38834.0], [53.7, 38992.0], [53.8, 38992.0], [53.9, 38992.0], [54.0, 38992.0], [54.1, 39064.0], [54.2, 39064.0], [54.3, 39288.0], [54.4, 39288.0], [54.5, 39302.0], [54.6, 39302.0], [54.7, 39397.0], [54.8, 39397.0], [54.9, 39401.0], [55.0, 39401.0], [55.1, 39456.0], [55.2, 39456.0], [55.3, 39481.0], [55.4, 39481.0], [55.5, 39495.0], [55.6, 39495.0], [55.7, 39527.0], [55.8, 39527.0], [55.9, 39550.0], [56.0, 39550.0], [56.1, 39559.0], [56.2, 39559.0], [56.3, 39559.0], [56.4, 39559.0], [56.5, 39575.0], [56.6, 39575.0], [56.7, 39583.0], [56.8, 39583.0], [56.9, 39590.0], [57.0, 39590.0], [57.1, 39629.0], [57.2, 39629.0], [57.3, 39647.0], [57.4, 39647.0], [57.5, 39675.0], [57.6, 39675.0], [57.7, 39692.0], [57.8, 39692.0], [57.9, 39833.0], [58.0, 39833.0], [58.1, 39837.0], [58.2, 39837.0], [58.3, 39844.0], [58.4, 39844.0], [58.5, 39871.0], [58.6, 39871.0], [58.7, 39991.0], [58.8, 39991.0], [58.9, 39999.0], [59.0, 39999.0], [59.1, 40039.0], [59.2, 40039.0], [59.3, 40085.0], [59.4, 40085.0], [59.5, 40102.0], [59.6, 40102.0], [59.7, 40112.0], [59.8, 40112.0], [59.9, 40115.0], [60.0, 40115.0], [60.1, 40134.0], [60.2, 40134.0], [60.3, 40141.0], [60.4, 40141.0], [60.5, 40154.0], [60.6, 40154.0], [60.7, 40154.0], [60.8, 40154.0], [60.9, 40173.0], [61.0, 40173.0], [61.1, 40192.0], [61.2, 40192.0], [61.3, 40193.0], [61.4, 40193.0], [61.5, 40194.0], [61.6, 40194.0], [61.7, 40213.0], [61.8, 40213.0], [61.9, 40261.0], [62.0, 40261.0], [62.1, 40276.0], [62.2, 40276.0], [62.3, 40310.0], [62.4, 40310.0], [62.5, 40346.0], [62.6, 40346.0], [62.7, 40372.0], [62.8, 40372.0], [62.9, 40393.0], [63.0, 40393.0], [63.1, 40425.0], [63.2, 40425.0], [63.3, 40463.0], [63.4, 40463.0], [63.5, 40485.0], [63.6, 40485.0], [63.7, 40493.0], [63.8, 40493.0], [63.9, 40519.0], [64.0, 40519.0], [64.1, 40540.0], [64.2, 40540.0], [64.3, 40554.0], [64.4, 40554.0], [64.5, 40609.0], [64.6, 40609.0], [64.7, 40653.0], [64.8, 40653.0], [64.9, 40686.0], [65.0, 40686.0], [65.1, 40708.0], [65.2, 40708.0], [65.3, 40750.0], [65.4, 40750.0], [65.5, 40789.0], [65.6, 40789.0], [65.7, 40888.0], [65.8, 40888.0], [65.9, 40915.0], [66.0, 40915.0], [66.1, 40980.0], [66.2, 40980.0], [66.3, 41026.0], [66.4, 41026.0], [66.5, 41030.0], [66.6, 41030.0], [66.7, 41083.0], [66.8, 41083.0], [66.9, 41164.0], [67.0, 41164.0], [67.1, 41194.0], [67.2, 41194.0], [67.3, 41267.0], [67.4, 41267.0], [67.5, 41285.0], [67.6, 41285.0], [67.7, 41348.0], [67.8, 41348.0], [67.9, 41369.0], [68.0, 41369.0], [68.1, 41370.0], [68.2, 41370.0], [68.3, 41450.0], [68.4, 41450.0], [68.5, 41451.0], [68.6, 41451.0], [68.7, 41490.0], [68.8, 41490.0], [68.9, 41493.0], [69.0, 41493.0], [69.1, 41509.0], [69.2, 41509.0], [69.3, 41519.0], [69.4, 41519.0], [69.5, 41579.0], [69.6, 41579.0], [69.7, 41676.0], [69.8, 41676.0], [69.9, 41737.0], [70.0, 41737.0], [70.1, 41779.0], [70.2, 41779.0], [70.3, 41812.0], [70.4, 41812.0], [70.5, 41814.0], [70.6, 41814.0], [70.7, 41826.0], [70.8, 41826.0], [70.9, 41851.0], [71.0, 41851.0], [71.1, 41856.0], [71.2, 41856.0], [71.3, 41883.0], [71.4, 41883.0], [71.5, 41900.0], [71.6, 41900.0], [71.7, 41924.0], [71.8, 41924.0], [71.9, 41926.0], [72.0, 41926.0], [72.1, 41940.0], [72.2, 41940.0], [72.3, 41998.0], [72.4, 41998.0], [72.5, 42005.0], [72.6, 42005.0], [72.7, 42070.0], [72.8, 42070.0], [72.9, 42183.0], [73.0, 42183.0], [73.1, 42189.0], [73.2, 42189.0], [73.3, 42192.0], [73.4, 42192.0], [73.5, 42212.0], [73.6, 42212.0], [73.7, 42287.0], [73.8, 42287.0], [73.9, 42336.0], [74.0, 42336.0], [74.1, 42381.0], [74.2, 42381.0], [74.3, 42394.0], [74.4, 42394.0], [74.5, 42401.0], [74.6, 42401.0], [74.7, 42406.0], [74.8, 42406.0], [74.9, 42408.0], [75.0, 42408.0], [75.1, 42417.0], [75.2, 42417.0], [75.3, 42436.0], [75.4, 42436.0], [75.5, 42474.0], [75.6, 42474.0], [75.7, 42499.0], [75.8, 42499.0], [75.9, 42531.0], [76.0, 42531.0], [76.1, 42533.0], [76.2, 42533.0], [76.3, 42553.0], [76.4, 42553.0], [76.5, 42589.0], [76.6, 42589.0], [76.7, 42599.0], [76.8, 42599.0], [76.9, 42616.0], [77.0, 42616.0], [77.1, 42642.0], [77.2, 42642.0], [77.3, 42701.0], [77.4, 42701.0], [77.5, 42701.0], [77.6, 42701.0], [77.7, 42717.0], [77.8, 42717.0], [77.9, 42770.0], [78.0, 42770.0], [78.1, 42804.0], [78.2, 42804.0], [78.3, 42930.0], [78.4, 42930.0], [78.5, 42986.0], [78.6, 42986.0], [78.7, 42990.0], [78.8, 42990.0], [78.9, 43056.0], [79.0, 43056.0], [79.1, 43067.0], [79.2, 43067.0], [79.3, 43070.0], [79.4, 43070.0], [79.5, 43103.0], [79.6, 43103.0], [79.7, 43185.0], [79.8, 43185.0], [79.9, 43251.0], [80.0, 43251.0], [80.1, 43277.0], [80.2, 43277.0], [80.3, 43288.0], [80.4, 43288.0], [80.5, 43315.0], [80.6, 43315.0], [80.7, 43336.0], [80.8, 43336.0], [80.9, 43479.0], [81.0, 43479.0], [81.1, 43485.0], [81.2, 43485.0], [81.3, 43553.0], [81.4, 43553.0], [81.5, 43615.0], [81.6, 43615.0], [81.7, 43622.0], [81.8, 43622.0], [81.9, 43623.0], [82.0, 43623.0], [82.1, 43655.0], [82.2, 43655.0], [82.3, 43673.0], [82.4, 43673.0], [82.5, 43704.0], [82.6, 43704.0], [82.7, 43726.0], [82.8, 43726.0], [82.9, 43739.0], [83.0, 43739.0], [83.1, 43827.0], [83.2, 43827.0], [83.3, 43918.0], [83.4, 43918.0], [83.5, 43961.0], [83.6, 43961.0], [83.7, 43980.0], [83.8, 43980.0], [83.9, 44021.0], [84.0, 44021.0], [84.1, 44046.0], [84.2, 44046.0], [84.3, 44060.0], [84.4, 44060.0], [84.5, 44109.0], [84.6, 44109.0], [84.7, 44174.0], [84.8, 44174.0], [84.9, 44187.0], [85.0, 44187.0], [85.1, 44251.0], [85.2, 44251.0], [85.3, 44296.0], [85.4, 44296.0], [85.5, 44326.0], [85.6, 44326.0], [85.7, 44334.0], [85.8, 44334.0], [85.9, 44340.0], [86.0, 44340.0], [86.1, 44341.0], [86.2, 44341.0], [86.3, 44392.0], [86.4, 44392.0], [86.5, 44414.0], [86.6, 44414.0], [86.7, 44438.0], [86.8, 44438.0], [86.9, 44442.0], [87.0, 44442.0], [87.1, 44507.0], [87.2, 44507.0], [87.3, 44507.0], [87.4, 44507.0], [87.5, 44544.0], [87.6, 44544.0], [87.7, 44571.0], [87.8, 44571.0], [87.9, 44590.0], [88.0, 44590.0], [88.1, 44594.0], [88.2, 44594.0], [88.3, 44595.0], [88.4, 44595.0], [88.5, 44597.0], [88.6, 44597.0], [88.7, 44647.0], [88.8, 44647.0], [88.9, 44681.0], [89.0, 44681.0], [89.1, 44726.0], [89.2, 44726.0], [89.3, 44747.0], [89.4, 44747.0], [89.5, 44748.0], [89.6, 44748.0], [89.7, 44809.0], [89.8, 44809.0], [89.9, 44854.0], [90.0, 44854.0], [90.1, 44868.0], [90.2, 44868.0], [90.3, 44868.0], [90.4, 44868.0], [90.5, 44924.0], [90.6, 44924.0], [90.7, 44943.0], [90.8, 44943.0], [90.9, 44947.0], [91.0, 44947.0], [91.1, 45009.0], [91.2, 45009.0], [91.3, 45056.0], [91.4, 45056.0], [91.5, 45057.0], [91.6, 45057.0], [91.7, 45093.0], [91.8, 45093.0], [91.9, 45147.0], [92.0, 45147.0], [92.1, 45193.0], [92.2, 45193.0], [92.3, 45306.0], [92.4, 45306.0], [92.5, 45397.0], [92.6, 45397.0], [92.7, 45443.0], [92.8, 45443.0], [92.9, 45513.0], [93.0, 45513.0], [93.1, 45515.0], [93.2, 45515.0], [93.3, 45527.0], [93.4, 45527.0], [93.5, 45578.0], [93.6, 45578.0], [93.7, 45601.0], [93.8, 45601.0], [93.9, 45671.0], [94.0, 45671.0], [94.1, 45685.0], [94.2, 45685.0], [94.3, 45745.0], [94.4, 45745.0], [94.5, 45762.0], [94.6, 45762.0], [94.7, 45851.0], [94.8, 45851.0], [94.9, 45856.0], [95.0, 45856.0], [95.1, 45925.0], [95.2, 45925.0], [95.3, 45946.0], [95.4, 45946.0], [95.5, 46026.0], [95.6, 46026.0], [95.7, 46281.0], [95.8, 46281.0], [95.9, 46304.0], [96.0, 46304.0], [96.1, 46337.0], [96.2, 46337.0], [96.3, 46366.0], [96.4, 46366.0], [96.5, 46373.0], [96.6, 46373.0], [96.7, 46422.0], [96.8, 46422.0], [96.9, 46527.0], [97.0, 46527.0], [97.1, 46610.0], [97.2, 46610.0], [97.3, 46696.0], [97.4, 46696.0], [97.5, 46712.0], [97.6, 46712.0], [97.7, 46876.0], [97.8, 46876.0], [97.9, 46976.0], [98.0, 46976.0], [98.1, 47187.0], [98.2, 47187.0], [98.3, 47207.0], [98.4, 47207.0], [98.5, 47403.0], [98.6, 47403.0], [98.7, 47502.0], [98.8, 47502.0], [98.9, 47912.0], [99.0, 47912.0], [99.1, 48104.0], [99.2, 48104.0], [99.3, 48156.0], [99.4, 48156.0], [99.5, 50246.0], [99.6, 50246.0], [99.7, 51098.0], [99.8, 51098.0], [99.9, 51267.0], [100.0, 51267.0]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 14.0, "series": [{"data": [[33700.0, 1.0], [34500.0, 1.0], [36100.0, 5.0], [36500.0, 3.0], [35300.0, 2.0], [38900.0, 2.0], [37700.0, 3.0], [38100.0, 4.0], [38500.0, 2.0], [36900.0, 2.0], [40100.0, 11.0], [40900.0, 2.0], [39300.0, 2.0], [40500.0, 3.0], [42500.0, 5.0], [42100.0, 3.0], [41300.0, 3.0], [42900.0, 3.0], [41700.0, 2.0], [43700.0, 3.0], [43300.0, 2.0], [44100.0, 3.0], [44900.0, 3.0], [44500.0, 8.0], [46500.0, 1.0], [45700.0, 2.0], [46900.0, 1.0], [45300.0, 2.0], [48100.0, 2.0], [300.0, 2.0], [600.0, 2.0], [700.0, 7.0], [800.0, 14.0], [900.0, 6.0], [1000.0, 6.0], [1100.0, 2.0], [1200.0, 3.0], [1300.0, 6.0], [1400.0, 5.0], [1500.0, 9.0], [1600.0, 2.0], [1700.0, 3.0], [1800.0, 1.0], [1900.0, 4.0], [2000.0, 3.0], [2100.0, 2.0], [2200.0, 4.0], [2400.0, 2.0], [2500.0, 2.0], [2600.0, 1.0], [2800.0, 1.0], [2700.0, 2.0], [2900.0, 2.0], [3000.0, 2.0], [3100.0, 3.0], [3200.0, 2.0], [3500.0, 2.0], [3700.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [4300.0, 1.0], [4400.0, 1.0], [7300.0, 1.0], [9400.0, 1.0], [9900.0, 1.0], [10700.0, 1.0], [10900.0, 1.0], [13300.0, 1.0], [13800.0, 1.0], [14000.0, 1.0], [14600.0, 1.0], [15100.0, 1.0], [15600.0, 1.0], [18000.0, 1.0], [18600.0, 1.0], [20400.0, 2.0], [19800.0, 1.0], [21000.0, 1.0], [22000.0, 1.0], [23200.0, 1.0], [24000.0, 1.0], [24200.0, 1.0], [24600.0, 1.0], [26000.0, 1.0], [26800.0, 1.0], [27400.0, 1.0], [27200.0, 1.0], [28000.0, 1.0], [28400.0, 1.0], [29000.0, 1.0], [29600.0, 1.0], [28800.0, 1.0], [30400.0, 2.0], [30200.0, 1.0], [30600.0, 1.0], [31000.0, 3.0], [31600.0, 1.0], [31200.0, 1.0], [31400.0, 1.0], [32600.0, 1.0], [32200.0, 1.0], [33600.0, 1.0], [34400.0, 2.0], [34800.0, 1.0], [35200.0, 2.0], [36800.0, 4.0], [36400.0, 3.0], [36000.0, 1.0], [35600.0, 2.0], [37200.0, 2.0], [38000.0, 1.0], [38800.0, 3.0], [37600.0, 1.0], [38400.0, 2.0], [40000.0, 2.0], [40400.0, 4.0], [39600.0, 4.0], [39200.0, 1.0], [40800.0, 1.0], [42400.0, 7.0], [42000.0, 2.0], [42800.0, 1.0], [41200.0, 2.0], [41600.0, 1.0], [44800.0, 4.0], [43600.0, 5.0], [43200.0, 3.0], [44000.0, 3.0], [44400.0, 3.0], [45600.0, 3.0], [46000.0, 1.0], [46800.0, 1.0], [46400.0, 1.0], [47200.0, 1.0], [51200.0, 1.0], [33900.0, 1.0], [35500.0, 1.0], [36700.0, 3.0], [35900.0, 2.0], [36300.0, 1.0], [37900.0, 4.0], [37100.0, 3.0], [38700.0, 6.0], [38300.0, 2.0], [40700.0, 3.0], [39500.0, 7.0], [40300.0, 4.0], [39900.0, 2.0], [41100.0, 2.0], [42300.0, 3.0], [42700.0, 4.0], [41500.0, 3.0], [41900.0, 5.0], [44700.0, 3.0], [43900.0, 3.0], [44300.0, 5.0], [43500.0, 1.0], [43100.0, 2.0], [45500.0, 4.0], [46300.0, 4.0], [46700.0, 1.0], [45900.0, 2.0], [45100.0, 2.0], [47100.0, 1.0], [47900.0, 1.0], [47500.0, 1.0], [19300.0, 1.0], [19900.0, 1.0], [22900.0, 2.0], [23100.0, 1.0], [25100.0, 1.0], [24900.0, 2.0], [25700.0, 1.0], [27100.0, 2.0], [28100.0, 1.0], [28900.0, 1.0], [30700.0, 1.0], [30500.0, 1.0], [31500.0, 2.0], [31700.0, 1.0], [32700.0, 1.0], [32500.0, 2.0], [32300.0, 2.0], [33400.0, 5.0], [34600.0, 4.0], [33800.0, 3.0], [33000.0, 1.0], [34200.0, 1.0], [36200.0, 2.0], [35400.0, 1.0], [35800.0, 1.0], [35000.0, 1.0], [38200.0, 4.0], [38600.0, 2.0], [37800.0, 1.0], [39400.0, 4.0], [40200.0, 3.0], [39800.0, 4.0], [39000.0, 1.0], [40600.0, 3.0], [41400.0, 4.0], [43000.0, 3.0], [42200.0, 2.0], [42600.0, 2.0], [41000.0, 3.0], [41800.0, 6.0], [44600.0, 2.0], [43400.0, 2.0], [43800.0, 1.0], [45000.0, 4.0], [44200.0, 2.0], [45400.0, 1.0], [46600.0, 2.0], [45800.0, 2.0], [46200.0, 1.0], [47400.0, 1.0], [51000.0, 1.0], [50200.0, 1.0]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 51200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 445.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 51.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 445.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 4.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.739130434782608, "minX": 1.71244242E12, "maxY": 50.0, "series": [{"data": [[1.71244272E12, 37.14814814814815], [1.71244242E12, 50.0], [1.7124426E12, 50.0], [1.71244278E12, 10.739130434782608], [1.71244248E12, 50.0], [1.71244266E12, 49.58196721311475], [1.71244254E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244278E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 819.0, "minX": 1.0, "maxY": 38067.24742268044, "series": [{"data": [[33.0, 17178.75], [32.0, 30363.666666666668], [2.0, 9495.0], [35.0, 30099.833333333336], [34.0, 1941.0], [37.0, 16040.6], [36.0, 24759.666666666668], [39.0, 23026.125], [38.0, 24058.272727272728], [41.0, 16935.0], [40.0, 7108.0], [43.0, 33575.333333333336], [42.0, 22247.5], [45.0, 31141.64285714286], [44.0, 23236.0], [47.0, 20330.399999999998], [46.0, 819.0], [49.0, 21922.91666666666], [48.0, 11343.625], [3.0, 10701.0], [50.0, 38067.24742268044], [5.0, 12389.0], [7.0, 12786.5], [8.0, 1367.0], [9.0, 1335.0], [10.0, 15141.0], [11.0, 15158.666666666666], [12.0, 19967.0], [13.0, 21036.0], [14.0, 18888.5], [15.0, 18624.0], [16.0, 19851.0], [1.0, 7340.0], [17.0, 24693.0], [18.0, 20472.0], [19.0, 18553.428571428572], [20.0, 1078.0], [21.0, 19354.0], [22.0, 17406.666666666664], [23.0, 2148.0], [24.0, 19370.85714285714], [25.0, 18158.8], [26.0, 22225.25], [27.0, 820.0], [28.0, 35917.0], [29.0, 28862.0], [30.0, 1126.0], [31.0, 917.0]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}, {"data": [[44.621999999999964, 30627.940000000028]], "isOverall": false, "label": "HTTP Request (light image)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 15.433333333333334, "minX": 1.71244242E12, "maxY": 27669.55, "series": [{"data": [[1.71244272E12, 537.75], [1.71244242E12, 15.433333333333334], [1.7124426E12, 262.9], [1.71244278E12, 91.61666666666666], [1.71244248E12, 306.46666666666664], [1.71244266E12, 489.7], [1.71244254E12, 302.73333333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71244272E12, 27669.55], [1.71244242E12, 410.3], [1.7124426E12, 13527.9], [1.71244278E12, 4714.45], [1.71244248E12, 15576.4], [1.71244266E12, 25005.85], [1.71244254E12, 15575.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244278E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 332.5, "minX": 1.71244242E12, "maxY": 41885.78947368422, "series": [{"data": [[1.71244272E12, 20424.829629629636], [1.71244242E12, 332.5], [1.7124426E12, 41742.89393939395], [1.71244278E12, 13278.521739130438], [1.71244248E12, 37737.81578947369], [1.71244266E12, 28230.508196721312], [1.71244254E12, 41885.78947368422]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244278E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 330.5, "minX": 1.71244242E12, "maxY": 41885.73684210527, "series": [{"data": [[1.71244272E12, 20424.822222222232], [1.71244242E12, 330.5], [1.7124426E12, 41742.81818181819], [1.71244278E12, 13278.478260869566], [1.71244248E12, 37737.763157894726], [1.71244266E12, 28230.467213114753], [1.71244254E12, 41885.73684210527]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244278E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 22.727272727272723, "minX": 1.71244242E12, "maxY": 124.5, "series": [{"data": [[1.71244272E12, 24.244444444444444], [1.71244242E12, 124.5], [1.7124426E12, 22.727272727272723], [1.71244278E12, 39.69565217391305], [1.71244248E12, 82.6578947368421], [1.71244266E12, 38.91803278688523], [1.71244254E12, 55.94736842105264]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244278E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 688.0, "minX": 1.71244248E12, "maxY": 51267.0, "series": [{"data": [[1.71244272E12, 44544.0], [1.7124426E12, 51267.0], [1.71244278E12, 24693.0], [1.71244248E12, 47912.0], [1.71244266E12, 48104.0], [1.71244254E12, 47502.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71244272E12, 688.0], [1.7124426E12, 28129.0], [1.71244278E12, 784.0], [1.71244248E12, 20458.0], [1.71244266E12, 716.0], [1.71244254E12, 33644.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71244272E12, 40627.0], [1.7124426E12, 46313.9], [1.71244278E12, 22318.200000000004], [1.71244248E12, 44796.0], [1.71244266E12, 45274.2], [1.71244254E12, 45561.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71244272E12, 43886.27999999998], [1.7124426E12, 51267.0], [1.71244278E12, 24693.0], [1.71244248E12, 47912.0], [1.71244266E12, 47906.66], [1.71244254E12, 47502.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71244272E12, 26006.0], [1.7124426E12, 42235.5], [1.71244278E12, 14046.0], [1.71244248E12, 39401.0], [1.71244266E12, 39527.0], [1.71244254E12, 41925.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71244272E12, 41537.399999999994], [1.7124426E12, 49514.5], [1.71244278E12, 24388.999999999996], [1.71244248E12, 45683.600000000006], [1.71244266E12, 46372.299999999996], [1.71244254E12, 46698.4]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244278E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 332.5, "minX": 1.0, "maxY": 42404.5, "series": [{"data": [[1.0, 38829.0], [2.0, 37968.0], [4.0, 38189.0], [8.0, 42404.5], [5.0, 35469.0], [3.0, 36125.0], [6.0, 40128.0], [7.0, 41753.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 332.5], [4.0, 1539.0], [3.0, 3156.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 330.5, "minX": 1.0, "maxY": 42404.5, "series": [{"data": [[1.0, 38829.0], [2.0, 37968.0], [4.0, 38189.0], [8.0, 42404.5], [5.0, 35469.0], [3.0, 36125.0], [6.0, 40128.0], [7.0, 41753.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 330.5], [4.0, 1539.0], [3.0, 3156.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.71244242E12, "maxY": 2.0166666666666666, "series": [{"data": [[1.71244272E12, 1.75], [1.71244242E12, 0.8666666666666667], [1.7124426E12, 1.1], [1.71244278E12, 0.06666666666666667], [1.71244248E12, 1.2666666666666666], [1.71244266E12, 2.0166666666666666], [1.71244254E12, 1.2666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244278E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71244242E12, "maxY": 2.25, "series": [{"data": [[1.71244272E12, 2.25], [1.7124426E12, 1.1], [1.71244278E12, 0.38333333333333336], [1.71244248E12, 1.25], [1.71244266E12, 2.0166666666666666], [1.71244254E12, 1.2666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71244242E12, 0.03333333333333333], [1.71244248E12, 0.016666666666666666], [1.71244266E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244278E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71244242E12, "maxY": 2.25, "series": [{"data": [[1.71244242E12, 0.03333333333333333], [1.71244248E12, 0.016666666666666666], [1.71244266E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request (light image)-failure", "isController": false}, {"data": [[1.71244272E12, 2.25], [1.7124426E12, 1.1], [1.71244278E12, 0.38333333333333336], [1.71244248E12, 1.25], [1.71244266E12, 2.0166666666666666], [1.71244254E12, 1.2666666666666666]], "isOverall": false, "label": "HTTP Request (light image)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244278E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71244242E12, "maxY": 2.25, "series": [{"data": [[1.71244272E12, 2.25], [1.7124426E12, 1.1], [1.71244278E12, 0.38333333333333336], [1.71244248E12, 1.25], [1.71244266E12, 2.0166666666666666], [1.71244254E12, 1.2666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71244242E12, 0.03333333333333333], [1.71244248E12, 0.016666666666666666], [1.71244266E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244278E12, "title": "Total Transactions Per Second"}},
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

