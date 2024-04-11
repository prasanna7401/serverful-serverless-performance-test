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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 60819.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 1.0], [2.7, 1.0], [2.8, 1.0], [2.9, 1.0], [3.0, 1.0], [3.1, 1.0], [3.2, 1.0], [3.3, 1.0], [3.4, 1.0], [3.5, 1.0], [3.6, 1.0], [3.7, 1.0], [3.8, 1.0], [3.9, 1.0], [4.0, 1.0], [4.1, 1.0], [4.2, 1.0], [4.3, 1.0], [4.4, 1.0], [4.5, 1.0], [4.6, 1.0], [4.7, 2.0], [4.8, 2.0], [4.9, 2.0], [5.0, 2.0], [5.1, 2.0], [5.2, 2.0], [5.3, 2.0], [5.4, 2.0], [5.5, 2.0], [5.6, 2.0], [5.7, 2.0], [5.8, 2.0], [5.9, 8.0], [6.0, 9.0], [6.1, 9.0], [6.2, 9.0], [6.3, 13.0], [6.4, 13.0], [6.5, 13.0], [6.6, 13.0], [6.7, 14.0], [6.8, 14.0], [6.9, 14.0], [7.0, 14.0], [7.1, 14.0], [7.2, 14.0], [7.3, 14.0], [7.4, 14.0], [7.5, 15.0], [7.6, 15.0], [7.7, 15.0], [7.8, 15.0], [7.9, 23.0], [8.0, 28.0], [8.1, 28.0], [8.2, 28.0], [8.3, 28.0], [8.4, 80.0], [8.5, 84.0], [8.6, 87.0], [8.7, 87.0], [8.8, 87.0], [8.9, 87.0], [9.0, 87.0], [9.1, 87.0], [9.2, 87.0], [9.3, 89.0], [9.4, 90.0], [9.5, 95.0], [9.6, 95.0], [9.7, 95.0], [9.8, 95.0], [9.9, 95.0], [10.0, 95.0], [10.1, 96.0], [10.2, 96.0], [10.3, 96.0], [10.4, 96.0], [10.5, 96.0], [10.6, 109.0], [10.7, 110.0], [10.8, 110.0], [10.9, 110.0], [11.0, 110.0], [11.1, 114.0], [11.2, 124.0], [11.3, 124.0], [11.4, 124.0], [11.5, 131.0], [11.6, 138.0], [11.7, 138.0], [11.8, 138.0], [11.9, 139.0], [12.0, 152.0], [12.1, 152.0], [12.2, 152.0], [12.3, 161.0], [12.4, 161.0], [12.5, 163.0], [12.6, 165.0], [12.7, 166.0], [12.8, 166.0], [12.9, 167.0], [13.0, 168.0], [13.1, 170.0], [13.2, 170.0], [13.3, 170.0], [13.4, 170.0], [13.5, 170.0], [13.6, 170.0], [13.7, 170.0], [13.8, 170.0], [13.9, 171.0], [14.0, 174.0], [14.1, 177.0], [14.2, 180.0], [14.3, 181.0], [14.4, 182.0], [14.5, 183.0], [14.6, 183.0], [14.7, 183.0], [14.8, 184.0], [14.9, 184.0], [15.0, 188.0], [15.1, 189.0], [15.2, 189.0], [15.3, 189.0], [15.4, 189.0], [15.5, 189.0], [15.6, 200.0], [15.7, 201.0], [15.8, 202.0], [15.9, 202.0], [16.0, 210.0], [16.1, 214.0], [16.2, 214.0], [16.3, 215.0], [16.4, 215.0], [16.5, 216.0], [16.6, 222.0], [16.7, 244.0], [16.8, 250.0], [16.9, 257.0], [17.0, 257.0], [17.1, 257.0], [17.2, 257.0], [17.3, 257.0], [17.4, 258.0], [17.5, 258.0], [17.6, 258.0], [17.7, 258.0], [17.8, 258.0], [17.9, 270.0], [18.0, 271.0], [18.1, 271.0], [18.2, 271.0], [18.3, 271.0], [18.4, 271.0], [18.5, 271.0], [18.6, 286.0], [18.7, 286.0], [18.8, 298.0], [18.9, 347.0], [19.0, 453.0], [19.1, 488.0], [19.2, 546.0], [19.3, 559.0], [19.4, 559.0], [19.5, 559.0], [19.6, 559.0], [19.7, 661.0], [19.8, 746.0], [19.9, 746.0], [20.0, 750.0], [20.1, 750.0], [20.2, 774.0], [20.3, 804.0], [20.4, 845.0], [20.5, 847.0], [20.6, 864.0], [20.7, 918.0], [20.8, 944.0], [20.9, 944.0], [21.0, 944.0], [21.1, 948.0], [21.2, 948.0], [21.3, 948.0], [21.4, 948.0], [21.5, 948.0], [21.6, 948.0], [21.7, 1278.0], [21.8, 1352.0], [21.9, 1575.0], [22.0, 1708.0], [22.1, 1722.0], [22.2, 1869.0], [22.3, 1987.0], [22.4, 2004.0], [22.5, 2330.0], [22.6, 2405.0], [22.7, 3138.0], [22.8, 3205.0], [22.9, 3313.0], [23.0, 3770.0], [23.1, 3779.0], [23.2, 3786.0], [23.3, 4302.0], [23.4, 4318.0], [23.5, 4331.0], [23.6, 5093.0], [23.7, 5303.0], [23.8, 5581.0], [23.9, 5886.0], [24.0, 6018.0], [24.1, 6698.0], [24.2, 8544.0], [24.3, 8547.0], [24.4, 8746.0], [24.5, 9287.0], [24.6, 9382.0], [24.7, 10013.0], [24.8, 10014.0], [24.9, 10092.0], [25.0, 10150.0], [25.1, 10152.0], [25.2, 10153.0], [25.3, 10153.0], [25.4, 10156.0], [25.5, 10156.0], [25.6, 10157.0], [25.7, 10159.0], [25.8, 10160.0], [25.9, 10160.0], [26.0, 10160.0], [26.1, 10161.0], [26.2, 10161.0], [26.3, 10161.0], [26.4, 10162.0], [26.5, 10162.0], [26.6, 10163.0], [26.7, 10163.0], [26.8, 10163.0], [26.9, 10164.0], [27.0, 10165.0], [27.1, 10165.0], [27.2, 10166.0], [27.3, 10166.0], [27.4, 10167.0], [27.5, 10168.0], [27.6, 10170.0], [27.7, 10170.0], [27.8, 10171.0], [27.9, 10171.0], [28.0, 10171.0], [28.1, 10172.0], [28.2, 10172.0], [28.3, 10173.0], [28.4, 10173.0], [28.5, 10174.0], [28.6, 10174.0], [28.7, 10175.0], [28.8, 10178.0], [28.9, 10178.0], [29.0, 10180.0], [29.1, 10180.0], [29.2, 10180.0], [29.3, 10183.0], [29.4, 10188.0], [29.5, 10189.0], [29.6, 10190.0], [29.7, 10200.0], [29.8, 10237.0], [29.9, 10240.0], [30.0, 10240.0], [30.1, 11357.0], [30.2, 11357.0], [30.3, 11692.0], [30.4, 12817.0], [30.5, 13425.0], [30.6, 14413.0], [30.7, 14962.0], [30.8, 15044.0], [30.9, 15070.0], [31.0, 15210.0], [31.1, 15391.0], [31.2, 15795.0], [31.3, 15986.0], [31.4, 16164.0], [31.5, 19684.0], [31.6, 20947.0], [31.7, 21606.0], [31.8, 21641.0], [31.9, 22794.0], [32.0, 23655.0], [32.1, 23735.0], [32.2, 23872.0], [32.3, 24577.0], [32.4, 25261.0], [32.5, 25917.0], [32.6, 26345.0], [32.7, 26410.0], [32.8, 28115.0], [32.9, 29507.0], [33.0, 31368.0], [33.1, 32389.0], [33.2, 34450.0], [33.3, 34920.0], [33.4, 35093.0], [33.5, 35541.0], [33.6, 35571.0], [33.7, 37308.0], [33.8, 38449.0], [33.9, 39420.0], [34.0, 39422.0], [34.1, 39686.0], [34.2, 40141.0], [34.3, 40344.0], [34.4, 40413.0], [34.5, 40463.0], [34.6, 40569.0], [34.7, 40582.0], [34.8, 40639.0], [34.9, 40692.0], [35.0, 40718.0], [35.1, 40762.0], [35.2, 40762.0], [35.3, 40896.0], [35.4, 40992.0], [35.5, 42380.0], [35.6, 42463.0], [35.7, 42844.0], [35.8, 42860.0], [35.9, 43520.0], [36.0, 43813.0], [36.1, 43869.0], [36.2, 44676.0], [36.3, 45408.0], [36.4, 46760.0], [36.5, 46843.0], [36.6, 47146.0], [36.7, 47336.0], [36.8, 47469.0], [36.9, 47954.0], [37.0, 48766.0], [37.1, 49240.0], [37.2, 49552.0], [37.3, 50055.0], [37.4, 50309.0], [37.5, 50310.0], [37.6, 50338.0], [37.7, 50496.0], [37.8, 50517.0], [37.9, 50520.0], [38.0, 50560.0], [38.1, 50562.0], [38.2, 50648.0], [38.3, 50661.0], [38.4, 50711.0], [38.5, 50724.0], [38.6, 50724.0], [38.7, 50724.0], [38.8, 50771.0], [38.9, 50780.0], [39.0, 50860.0], [39.1, 50865.0], [39.2, 50880.0], [39.3, 50906.0], [39.4, 50926.0], [39.5, 50926.0], [39.6, 50926.0], [39.7, 51007.0], [39.8, 51026.0], [39.9, 51026.0], [40.0, 51421.0], [40.1, 52522.0], [40.2, 52744.0], [40.3, 52895.0], [40.4, 53277.0], [40.5, 53297.0], [40.6, 53592.0], [40.7, 53699.0], [40.8, 54045.0], [40.9, 54127.0], [41.0, 54451.0], [41.1, 55111.0], [41.2, 55975.0], [41.3, 56278.0], [41.4, 56438.0], [41.5, 56787.0], [41.6, 57106.0], [41.7, 57195.0], [41.8, 57711.0], [41.9, 58148.0], [42.0, 58314.0], [42.1, 58635.0], [42.2, 58855.0], [42.3, 58905.0], [42.4, 59216.0], [42.5, 59241.0], [42.6, 59241.0], [42.7, 59255.0], [42.8, 59668.0], [42.9, 59915.0], [43.0, 60081.0], [43.1, 60086.0], [43.2, 60087.0], [43.3, 60087.0], [43.4, 60088.0], [43.5, 60089.0], [43.6, 60090.0], [43.7, 60090.0], [43.8, 60090.0], [43.9, 60090.0], [44.0, 60090.0], [44.1, 60090.0], [44.2, 60091.0], [44.3, 60091.0], [44.4, 60091.0], [44.5, 60091.0], [44.6, 60091.0], [44.7, 60092.0], [44.8, 60092.0], [44.9, 60093.0], [45.0, 60095.0], [45.1, 60097.0], [45.2, 60099.0], [45.3, 60100.0], [45.4, 60101.0], [45.5, 60102.0], [45.6, 60104.0], [45.7, 60104.0], [45.8, 60105.0], [45.9, 60105.0], [46.0, 60105.0], [46.1, 60108.0], [46.2, 60108.0], [46.3, 60110.0], [46.4, 60118.0], [46.5, 60118.0], [46.6, 60120.0], [46.7, 60122.0], [46.8, 60122.0], [46.9, 60128.0], [47.0, 60129.0], [47.1, 60131.0], [47.2, 60138.0], [47.3, 60139.0], [47.4, 60147.0], [47.5, 60151.0], [47.6, 60159.0], [47.7, 60164.0], [47.8, 60166.0], [47.9, 60174.0], [48.0, 60178.0], [48.1, 60182.0], [48.2, 60182.0], [48.3, 60188.0], [48.4, 60190.0], [48.5, 60191.0], [48.6, 60192.0], [48.7, 60200.0], [48.8, 60200.0], [48.9, 60211.0], [49.0, 60211.0], [49.1, 60212.0], [49.2, 60212.0], [49.3, 60212.0], [49.4, 60277.0], [49.5, 60277.0], [49.6, 60277.0], [49.7, 60277.0], [49.8, 60277.0], [49.9, 60304.0], [50.0, 60305.0], [50.1, 60306.0], [50.2, 60306.0], [50.3, 60306.0], [50.4, 60307.0], [50.5, 60309.0], [50.6, 60311.0], [50.7, 60312.0], [50.8, 60312.0], [50.9, 60312.0], [51.0, 60312.0], [51.1, 60313.0], [51.2, 60313.0], [51.3, 60314.0], [51.4, 60315.0], [51.5, 60316.0], [51.6, 60316.0], [51.7, 60316.0], [51.8, 60316.0], [51.9, 60317.0], [52.0, 60317.0], [52.1, 60317.0], [52.2, 60318.0], [52.3, 60318.0], [52.4, 60318.0], [52.5, 60318.0], [52.6, 60318.0], [52.7, 60318.0], [52.8, 60318.0], [52.9, 60319.0], [53.0, 60319.0], [53.1, 60319.0], [53.2, 60319.0], [53.3, 60320.0], [53.4, 60320.0], [53.5, 60320.0], [53.6, 60320.0], [53.7, 60320.0], [53.8, 60321.0], [53.9, 60321.0], [54.0, 60321.0], [54.1, 60322.0], [54.2, 60322.0], [54.3, 60322.0], [54.4, 60322.0], [54.5, 60322.0], [54.6, 60323.0], [54.7, 60323.0], [54.8, 60323.0], [54.9, 60323.0], [55.0, 60323.0], [55.1, 60323.0], [55.2, 60323.0], [55.3, 60324.0], [55.4, 60324.0], [55.5, 60324.0], [55.6, 60324.0], [55.7, 60324.0], [55.8, 60324.0], [55.9, 60325.0], [56.0, 60325.0], [56.1, 60326.0], [56.2, 60326.0], [56.3, 60326.0], [56.4, 60326.0], [56.5, 60326.0], [56.6, 60327.0], [56.7, 60327.0], [56.8, 60328.0], [56.9, 60328.0], [57.0, 60328.0], [57.1, 60328.0], [57.2, 60328.0], [57.3, 60328.0], [57.4, 60328.0], [57.5, 60328.0], [57.6, 60328.0], [57.7, 60329.0], [57.8, 60329.0], [57.9, 60329.0], [58.0, 60329.0], [58.1, 60330.0], [58.2, 60330.0], [58.3, 60330.0], [58.4, 60330.0], [58.5, 60331.0], [58.6, 60331.0], [58.7, 60331.0], [58.8, 60331.0], [58.9, 60331.0], [59.0, 60332.0], [59.1, 60332.0], [59.2, 60333.0], [59.3, 60333.0], [59.4, 60333.0], [59.5, 60333.0], [59.6, 60333.0], [59.7, 60333.0], [59.8, 60334.0], [59.9, 60334.0], [60.0, 60334.0], [60.1, 60334.0], [60.2, 60334.0], [60.3, 60334.0], [60.4, 60335.0], [60.5, 60335.0], [60.6, 60335.0], [60.7, 60336.0], [60.8, 60336.0], [60.9, 60337.0], [61.0, 60337.0], [61.1, 60337.0], [61.2, 60337.0], [61.3, 60337.0], [61.4, 60337.0], [61.5, 60337.0], [61.6, 60339.0], [61.7, 60340.0], [61.8, 60341.0], [61.9, 60341.0], [62.0, 60341.0], [62.1, 60341.0], [62.2, 60341.0], [62.3, 60342.0], [62.4, 60343.0], [62.5, 60343.0], [62.6, 60343.0], [62.7, 60344.0], [62.8, 60344.0], [62.9, 60345.0], [63.0, 60346.0], [63.1, 60346.0], [63.2, 60346.0], [63.3, 60346.0], [63.4, 60346.0], [63.5, 60346.0], [63.6, 60346.0], [63.7, 60346.0], [63.8, 60346.0], [63.9, 60346.0], [64.0, 60346.0], [64.1, 60347.0], [64.2, 60347.0], [64.3, 60347.0], [64.4, 60348.0], [64.5, 60348.0], [64.6, 60348.0], [64.7, 60348.0], [64.8, 60348.0], [64.9, 60348.0], [65.0, 60348.0], [65.1, 60348.0], [65.2, 60348.0], [65.3, 60348.0], [65.4, 60349.0], [65.5, 60349.0], [65.6, 60349.0], [65.7, 60349.0], [65.8, 60349.0], [65.9, 60349.0], [66.0, 60349.0], [66.1, 60350.0], [66.2, 60350.0], [66.3, 60350.0], [66.4, 60350.0], [66.5, 60350.0], [66.6, 60351.0], [66.7, 60351.0], [66.8, 60351.0], [66.9, 60352.0], [67.0, 60352.0], [67.1, 60353.0], [67.2, 60353.0], [67.3, 60353.0], [67.4, 60353.0], [67.5, 60353.0], [67.6, 60353.0], [67.7, 60353.0], [67.8, 60353.0], [67.9, 60353.0], [68.0, 60353.0], [68.1, 60354.0], [68.2, 60354.0], [68.3, 60354.0], [68.4, 60354.0], [68.5, 60354.0], [68.6, 60354.0], [68.7, 60354.0], [68.8, 60354.0], [68.9, 60354.0], [69.0, 60355.0], [69.1, 60355.0], [69.2, 60355.0], [69.3, 60355.0], [69.4, 60355.0], [69.5, 60356.0], [69.6, 60356.0], [69.7, 60356.0], [69.8, 60356.0], [69.9, 60357.0], [70.0, 60357.0], [70.1, 60357.0], [70.2, 60358.0], [70.3, 60358.0], [70.4, 60358.0], [70.5, 60358.0], [70.6, 60358.0], [70.7, 60358.0], [70.8, 60358.0], [70.9, 60359.0], [71.0, 60360.0], [71.1, 60360.0], [71.2, 60360.0], [71.3, 60360.0], [71.4, 60360.0], [71.5, 60360.0], [71.6, 60360.0], [71.7, 60360.0], [71.8, 60360.0], [71.9, 60361.0], [72.0, 60361.0], [72.1, 60361.0], [72.2, 60361.0], [72.3, 60361.0], [72.4, 60363.0], [72.5, 60363.0], [72.6, 60363.0], [72.7, 60363.0], [72.8, 60363.0], [72.9, 60363.0], [73.0, 60363.0], [73.1, 60363.0], [73.2, 60363.0], [73.3, 60363.0], [73.4, 60363.0], [73.5, 60363.0], [73.6, 60363.0], [73.7, 60363.0], [73.8, 60365.0], [73.9, 60365.0], [74.0, 60365.0], [74.1, 60365.0], [74.2, 60365.0], [74.3, 60365.0], [74.4, 60365.0], [74.5, 60365.0], [74.6, 60365.0], [74.7, 60366.0], [74.8, 60366.0], [74.9, 60366.0], [75.0, 60368.0], [75.1, 60368.0], [75.2, 60368.0], [75.3, 60368.0], [75.4, 60370.0], [75.5, 60370.0], [75.6, 60370.0], [75.7, 60371.0], [75.8, 60371.0], [75.9, 60371.0], [76.0, 60372.0], [76.1, 60373.0], [76.2, 60373.0], [76.3, 60374.0], [76.4, 60375.0], [76.5, 60375.0], [76.6, 60376.0], [76.7, 60377.0], [76.8, 60378.0], [76.9, 60379.0], [77.0, 60379.0], [77.1, 60380.0], [77.2, 60381.0], [77.3, 60382.0], [77.4, 60382.0], [77.5, 60382.0], [77.6, 60382.0], [77.7, 60382.0], [77.8, 60383.0], [77.9, 60383.0], [78.0, 60384.0], [78.1, 60384.0], [78.2, 60384.0], [78.3, 60384.0], [78.4, 60384.0], [78.5, 60384.0], [78.6, 60385.0], [78.7, 60386.0], [78.8, 60386.0], [78.9, 60386.0], [79.0, 60386.0], [79.1, 60387.0], [79.2, 60388.0], [79.3, 60388.0], [79.4, 60388.0], [79.5, 60389.0], [79.6, 60389.0], [79.7, 60389.0], [79.8, 60389.0], [79.9, 60389.0], [80.0, 60389.0], [80.1, 60390.0], [80.2, 60390.0], [80.3, 60390.0], [80.4, 60390.0], [80.5, 60390.0], [80.6, 60390.0], [80.7, 60391.0], [80.8, 60392.0], [80.9, 60392.0], [81.0, 60392.0], [81.1, 60393.0], [81.2, 60393.0], [81.3, 60393.0], [81.4, 60393.0], [81.5, 60393.0], [81.6, 60393.0], [81.7, 60393.0], [81.8, 60395.0], [81.9, 60397.0], [82.0, 60397.0], [82.1, 60397.0], [82.2, 60397.0], [82.3, 60397.0], [82.4, 60398.0], [82.5, 60399.0], [82.6, 60399.0], [82.7, 60399.0], [82.8, 60399.0], [82.9, 60399.0], [83.0, 60399.0], [83.1, 60399.0], [83.2, 60399.0], [83.3, 60399.0], [83.4, 60400.0], [83.5, 60401.0], [83.6, 60402.0], [83.7, 60402.0], [83.8, 60402.0], [83.9, 60402.0], [84.0, 60403.0], [84.1, 60404.0], [84.2, 60406.0], [84.3, 60406.0], [84.4, 60407.0], [84.5, 60408.0], [84.6, 60409.0], [84.7, 60409.0], [84.8, 60410.0], [84.9, 60410.0], [85.0, 60410.0], [85.1, 60410.0], [85.2, 60410.0], [85.3, 60410.0], [85.4, 60413.0], [85.5, 60414.0], [85.6, 60415.0], [85.7, 60415.0], [85.8, 60415.0], [85.9, 60415.0], [86.0, 60416.0], [86.1, 60416.0], [86.2, 60416.0], [86.3, 60416.0], [86.4, 60416.0], [86.5, 60416.0], [86.6, 60417.0], [86.7, 60417.0], [86.8, 60417.0], [86.9, 60417.0], [87.0, 60417.0], [87.1, 60417.0], [87.2, 60417.0], [87.3, 60417.0], [87.4, 60418.0], [87.5, 60418.0], [87.6, 60418.0], [87.7, 60418.0], [87.8, 60418.0], [87.9, 60419.0], [88.0, 60424.0], [88.1, 60424.0], [88.2, 60424.0], [88.3, 60425.0], [88.4, 60425.0], [88.5, 60425.0], [88.6, 60426.0], [88.7, 60427.0], [88.8, 60427.0], [88.9, 60428.0], [89.0, 60428.0], [89.1, 60433.0], [89.2, 60435.0], [89.3, 60436.0], [89.4, 60442.0], [89.5, 60442.0], [89.6, 60442.0], [89.7, 60442.0], [89.8, 60442.0], [89.9, 60442.0], [90.0, 60442.0], [90.1, 60442.0], [90.2, 60446.0], [90.3, 60447.0], [90.4, 60453.0], [90.5, 60457.0], [90.6, 60458.0], [90.7, 60459.0], [90.8, 60459.0], [90.9, 60466.0], [91.0, 60466.0], [91.1, 60466.0], [91.2, 60473.0], [91.3, 60476.0], [91.4, 60479.0], [91.5, 60479.0], [91.6, 60479.0], [91.7, 60479.0], [91.8, 60479.0], [91.9, 60479.0], [92.0, 60481.0], [92.1, 60483.0], [92.2, 60483.0], [92.3, 60483.0], [92.4, 60483.0], [92.5, 60483.0], [92.6, 60483.0], [92.7, 60483.0], [92.8, 60483.0], [92.9, 60483.0], [93.0, 60495.0], [93.1, 60495.0], [93.2, 60495.0], [93.3, 60495.0], [93.4, 60496.0], [93.5, 60496.0], [93.6, 60499.0], [93.7, 60499.0], [93.8, 60499.0], [93.9, 60499.0], [94.0, 60499.0], [94.1, 60499.0], [94.2, 60499.0], [94.3, 60499.0], [94.4, 60500.0], [94.5, 60500.0], [94.6, 60501.0], [94.7, 60502.0], [94.8, 60503.0], [94.9, 60503.0], [95.0, 60503.0], [95.1, 60503.0], [95.2, 60514.0], [95.3, 60514.0], [95.4, 60514.0], [95.5, 60515.0], [95.6, 60517.0], [95.7, 60518.0], [95.8, 60518.0], [95.9, 60518.0], [96.0, 60518.0], [96.1, 60519.0], [96.2, 60519.0], [96.3, 60522.0], [96.4, 60522.0], [96.5, 60527.0], [96.6, 60527.0], [96.7, 60527.0], [96.8, 60531.0], [96.9, 60531.0], [97.0, 60531.0], [97.1, 60536.0], [97.2, 60539.0], [97.3, 60539.0], [97.4, 60539.0], [97.5, 60539.0], [97.6, 60540.0], [97.7, 60540.0], [97.8, 60543.0], [97.9, 60543.0], [98.0, 60543.0], [98.1, 60543.0], [98.2, 60544.0], [98.3, 60556.0], [98.4, 60556.0], [98.5, 60556.0], [98.6, 60556.0], [98.7, 60560.0], [98.8, 60560.0], [98.9, 60560.0], [99.0, 60560.0], [99.1, 60560.0], [99.2, 60560.0], [99.3, 60566.0], [99.4, 60759.0], [99.5, 60759.0], [99.6, 60804.0], [99.7, 60804.0], [99.8, 60804.0], [99.9, 60804.0], [100.0, 60819.0]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 335.0, "series": [{"data": [[0.0, 106.0], [100.0, 50.0], [35500.0, 2.0], [34900.0, 1.0], [37300.0, 1.0], [40100.0, 1.0], [40300.0, 1.0], [40900.0, 1.0], [40700.0, 3.0], [40500.0, 2.0], [42300.0, 1.0], [43500.0, 1.0], [47100.0, 1.0], [46700.0, 1.0], [48700.0, 1.0], [47900.0, 1.0], [47300.0, 1.0], [50500.0, 4.0], [49500.0, 1.0], [50700.0, 6.0], [50300.0, 3.0], [50900.0, 4.0], [52700.0, 1.0], [52500.0, 1.0], [200.0, 32.0], [55100.0, 1.0], [54100.0, 1.0], [53500.0, 1.0], [57100.0, 2.0], [55900.0, 1.0], [56700.0, 1.0], [57700.0, 1.0], [58300.0, 1.0], [58900.0, 1.0], [58100.0, 1.0], [60300.0, 335.0], [59900.0, 1.0], [60100.0, 34.0], [60500.0, 50.0], [60700.0, 2.0], [300.0, 1.0], [400.0, 2.0], [500.0, 5.0], [600.0, 1.0], [700.0, 5.0], [800.0, 4.0], [900.0, 10.0], [1200.0, 1.0], [1300.0, 1.0], [1500.0, 1.0], [1700.0, 2.0], [1800.0, 1.0], [1900.0, 1.0], [2000.0, 1.0], [2300.0, 1.0], [2400.0, 1.0], [3100.0, 1.0], [3200.0, 1.0], [3300.0, 1.0], [3700.0, 3.0], [4300.0, 3.0], [5000.0, 1.0], [5300.0, 1.0], [5500.0, 1.0], [5800.0, 1.0], [6000.0, 1.0], [6600.0, 1.0], [8700.0, 1.0], [8500.0, 2.0], [9200.0, 1.0], [9300.0, 1.0], [10000.0, 3.0], [10100.0, 47.0], [10200.0, 4.0], [11300.0, 2.0], [11600.0, 1.0], [12800.0, 1.0], [13400.0, 1.0], [14400.0, 1.0], [15300.0, 1.0], [15000.0, 2.0], [14900.0, 1.0], [15200.0, 1.0], [15700.0, 1.0], [15900.0, 1.0], [16100.0, 1.0], [19600.0, 1.0], [20900.0, 1.0], [21600.0, 2.0], [22700.0, 1.0], [23700.0, 1.0], [23800.0, 1.0], [23600.0, 1.0], [24500.0, 1.0], [25200.0, 1.0], [26400.0, 1.0], [25900.0, 1.0], [26300.0, 1.0], [28100.0, 1.0], [29500.0, 1.0], [31300.0, 1.0], [32300.0, 1.0], [34400.0, 1.0], [35000.0, 1.0], [38400.0, 1.0], [40400.0, 2.0], [39400.0, 2.0], [40600.0, 2.0], [40800.0, 1.0], [39600.0, 1.0], [42800.0, 2.0], [42400.0, 1.0], [43800.0, 2.0], [44600.0, 1.0], [46800.0, 1.0], [45400.0, 1.0], [47400.0, 1.0], [50800.0, 3.0], [50400.0, 1.0], [49200.0, 1.0], [50000.0, 1.0], [51000.0, 3.0], [50600.0, 2.0], [52800.0, 1.0], [53200.0, 2.0], [51400.0, 1.0], [53600.0, 1.0], [54000.0, 1.0], [54400.0, 1.0], [56400.0, 1.0], [56200.0, 1.0], [58600.0, 1.0], [59200.0, 4.0], [58800.0, 1.0], [60400.0, 110.0], [59600.0, 1.0], [60000.0, 23.0], [60200.0, 12.0], [60800.0, 5.0]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 60800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 32.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 968.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 32.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 968.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 54.21777777777782, "minX": 1.71244572E12, "maxY": 100.0, "series": [{"data": [[1.71244578E12, 100.0], [1.71244608E12, 95.92201834862385], [1.71244614E12, 54.21777777777782], [1.71244596E12, 100.0], [1.71244602E12, 100.0], [1.71244584E12, 100.0], [1.7124459E12, 100.0], [1.71244572E12, 100.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244614E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "maxY": 54813.893081760965, "series": [{"data": [[2.0, 308.0], [3.0, 183.0], [6.0, 172.33333333333334], [7.0, 347.0], [8.0, 488.0], [9.0, 202.0], [10.0, 177.0], [12.0, 367.5], [14.0, 133.2], [15.0, 96.0], [16.0, 102.5], [17.0, 184.0], [20.0, 170.33333333333334], [21.0, 189.0], [24.0, 145.5], [25.0, 131.0], [26.0, 208.5], [27.0, 244.0], [28.0, 174.0], [31.0, 231.75], [35.0, 114.0], [34.0, 184.75], [36.0, 203.5], [39.0, 216.33333333333334], [38.0, 13.5], [40.0, 258.0], [43.0, 255.83333333333331], [45.0, 92.5], [44.0, 214.0], [46.0, 179.0], [49.0, 170.0], [50.0, 170.0], [53.0, 1.0], [52.0, 59.0], [55.0, 117.25], [54.0, 89.66666666666666], [57.0, 83.0], [56.0, 56.33333333333333], [58.0, 124.0], [61.0, 63.50000000000001], [60.0, 1.0], [67.0, 115.125], [66.0, 83.875], [65.0, 9.0], [64.0, 8.0], [69.0, 36861.794117647056], [75.0, 40621.599999999984], [79.0, 507.83333333333337], [76.0, 5083.5], [83.0, 3624.0], [81.0, 35224.5], [80.0, 42926.42857142857], [86.0, 5090.0], [85.0, 10159.0], [84.0, 5086.5], [91.0, 5090.0], [90.0, 16139.8], [88.0, 5094.25], [95.0, 5082.5], [94.0, 16145.8], [93.0, 5088.0], [92.0, 5081.5], [99.0, 14091.882352941175], [98.0, 24047.000000000004], [97.0, 1.0], [100.0, 54813.893081760965], [1.0, 729.5]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}, {"data": [[88.80999999999993, 40591.967000000004]], "isOverall": false, "label": "HTTP Request (mid image)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 131.18333333333334, "minX": 1.71244572E12, "maxY": 222473.01666666666, "series": [{"data": [[1.71244578E12, 533.5], [1.71244608E12, 2708.6833333333334], [1.71244614E12, 2563.0], [1.71244596E12, 532.9666666666667], [1.71244602E12, 556.1166666666667], [1.71244584E12, 545.6166666666667], [1.7124459E12, 539.6333333333333], [1.71244572E12, 131.18333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71244578E12, 138566.21666666667], [1.71244608E12, 208488.83333333334], [1.71244614E12, 222473.01666666666], [1.71244596E12, 134751.51666666666], [1.71244602E12, 138567.66666666666], [1.71244584E12, 138565.96666666667], [1.7124459E12, 136026.28333333333], [1.71244572E12, 21612.233333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244614E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 862.8823529411766, "minX": 1.71244572E12, "maxY": 57349.15094339623, "series": [{"data": [[1.71244578E12, 54825.10091743118], [1.71244608E12, 30648.747706422026], [1.71244614E12, 15660.999999999995], [1.71244596E12, 57349.15094339623], [1.71244602E12, 56315.98165137615], [1.71244584E12, 55655.85321100917], [1.7124459E12, 57124.01869158879], [1.71244572E12, 862.8823529411766]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244614E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 862.7058823529412, "minX": 1.71244572E12, "maxY": 57349.14150943399, "series": [{"data": [[1.71244578E12, 54825.073394495405], [1.71244608E12, 30647.944954128467], [1.71244614E12, 15644.29333333334], [1.71244596E12, 57349.14150943399], [1.71244602E12, 56315.95412844037], [1.71244584E12, 55655.84403669724], [1.7124459E12, 57124.0093457944], [1.71244572E12, 862.7058823529412]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244614E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 47.31999999999999, "minX": 1.71244572E12, "maxY": 185.58823529411768, "series": [{"data": [[1.71244578E12, 163.63302752293583], [1.71244608E12, 60.481651376146765], [1.71244614E12, 47.31999999999999], [1.71244596E12, 78.80188679245285], [1.71244602E12, 79.9816513761468], [1.71244584E12, 69.5504587155963], [1.7124459E12, 79.26168224299066], [1.71244572E12, 185.58823529411768]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244614E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 38449.0, "minX": 1.71244578E12, "maxY": 60428.0, "series": [{"data": [[1.71244578E12, 60428.0], [1.71244584E12, 56438.0], [1.7124459E12, 58855.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71244578E12, 38449.0], [1.71244584E12, 40413.0], [1.7124459E12, 58855.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71244578E12, 60286.2], [1.71244584E12, 56206.9], [1.7124459E12, 58855.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71244578E12, 60428.0], [1.71244584E12, 56438.0], [1.7124459E12, 58855.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71244578E12, 57195.0], [1.71244584E12, 49396.0], [1.7124459E12, 58855.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71244578E12, 60417.2], [1.71244584E12, 56438.0], [1.7124459E12, 58855.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7124459E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 214.0, "minX": 1.0, "maxY": 60502.0, "series": [{"data": [[1.0, 51421.0], [2.0, 49240.0], [74.0, 60320.0], [3.0, 58314.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 60321.0], [8.0, 1434.0], [35.0, 60502.0], [10.0, 60277.0], [43.0, 60352.0], [44.0, 10151.0], [3.0, 60174.0], [12.0, 846.0], [13.0, 60391.0], [211.0, 214.0], [54.0, 60334.0], [56.0, 60399.0], [62.0, 60361.0], [16.0, 944.0], [1.0, 60329.0], [4.0, 60090.0], [74.0, 60499.0], [18.0, 60393.0], [19.0, 10161.0], [5.0, 60134.0], [6.0, 60210.0], [7.0, 10159.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 211.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 202.0, "minX": 1.0, "maxY": 60502.0, "series": [{"data": [[1.0, 51421.0], [2.0, 49240.0], [74.0, 60320.0], [3.0, 58314.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 60321.0], [8.0, 1434.0], [35.0, 60502.0], [10.0, 60277.0], [43.0, 60352.0], [44.0, 10151.0], [3.0, 60174.0], [12.0, 846.0], [13.0, 60391.0], [211.0, 202.0], [54.0, 60334.0], [56.0, 60399.0], [62.0, 60361.0], [16.0, 944.0], [1.0, 60329.0], [4.0, 60090.0], [74.0, 60499.0], [18.0, 60393.0], [19.0, 10161.0], [5.0, 60134.0], [6.0, 60210.0], [7.0, 10159.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 211.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.7666666666666666, "minX": 1.71244572E12, "maxY": 3.216666666666667, "series": [{"data": [[1.71244578E12, 1.8166666666666667], [1.71244608E12, 3.216666666666667], [1.71244614E12, 2.5], [1.71244596E12, 1.7666666666666666], [1.71244602E12, 1.8166666666666667], [1.71244584E12, 1.8166666666666667], [1.7124459E12, 1.7833333333333334], [1.71244572E12, 1.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244614E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71244572E12, "maxY": 2.8, "series": [{"data": [[1.71244578E12, 0.35], [1.71244584E12, 0.16666666666666666], [1.7124459E12, 0.016666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71244578E12, 0.15], [1.71244608E12, 0.11666666666666667], [1.71244596E12, 0.1], [1.71244602E12, 0.15], [1.71244584E12, 0.15], [1.7124459E12, 0.11666666666666667], [1.71244572E12, 0.2833333333333333]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.71244608E12, 0.2], [1.71244614E12, 2.8]], "isOverall": false, "label": "502", "isController": false}, {"data": [[1.71244608E12, 0.9], [1.71244614E12, 0.8333333333333334]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}, {"data": [[1.71244578E12, 1.3166666666666667], [1.71244608E12, 2.4166666666666665], [1.71244614E12, 0.11666666666666667], [1.71244596E12, 1.6666666666666667], [1.71244602E12, 1.6666666666666667], [1.71244584E12, 1.5], [1.7124459E12, 1.65]], "isOverall": false, "label": "504", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244614E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71244572E12, "maxY": 3.75, "series": [{"data": [[1.71244578E12, 1.4666666666666666], [1.71244608E12, 3.6333333333333333], [1.71244614E12, 3.75], [1.71244596E12, 1.7666666666666666], [1.71244602E12, 1.8166666666666667], [1.71244584E12, 1.65], [1.7124459E12, 1.7666666666666666], [1.71244572E12, 0.2833333333333333]], "isOverall": false, "label": "HTTP Request (mid image)-failure", "isController": false}, {"data": [[1.71244578E12, 0.35], [1.71244584E12, 0.16666666666666666], [1.7124459E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request (mid image)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244614E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71244572E12, "maxY": 3.75, "series": [{"data": [[1.71244578E12, 0.35], [1.71244584E12, 0.16666666666666666], [1.7124459E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71244578E12, 1.4666666666666666], [1.71244608E12, 3.6333333333333333], [1.71244614E12, 3.75], [1.71244596E12, 1.7666666666666666], [1.71244602E12, 1.8166666666666667], [1.71244584E12, 1.65], [1.7124459E12, 1.7666666666666666], [1.71244572E12, 0.2833333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244614E12, "title": "Total Transactions Per Second"}},
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

