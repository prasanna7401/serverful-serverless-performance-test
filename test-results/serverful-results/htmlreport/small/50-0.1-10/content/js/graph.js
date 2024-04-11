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
        data: {"result": {"minY": 420.0, "minX": 0.0, "maxY": 15275.0, "series": [{"data": [[0.0, 420.0], [0.1, 420.0], [0.2, 452.0], [0.3, 452.0], [0.4, 462.0], [0.5, 462.0], [0.6, 462.0], [0.7, 462.0], [0.8, 462.0], [0.9, 462.0], [1.0, 462.0], [1.1, 462.0], [1.2, 462.0], [1.3, 462.0], [1.4, 462.0], [1.5, 462.0], [1.6, 462.0], [1.7, 462.0], [1.8, 462.0], [1.9, 462.0], [2.0, 475.0], [2.1, 475.0], [2.2, 489.0], [2.3, 489.0], [2.4, 489.0], [2.5, 489.0], [2.6, 503.0], [2.7, 503.0], [2.8, 503.0], [2.9, 674.0], [3.0, 674.0], [3.1, 682.0], [3.2, 682.0], [3.3, 730.0], [3.4, 730.0], [3.5, 730.0], [3.6, 730.0], [3.7, 730.0], [3.8, 730.0], [3.9, 730.0], [4.0, 730.0], [4.1, 748.0], [4.2, 748.0], [4.3, 748.0], [4.4, 748.0], [4.5, 748.0], [4.6, 748.0], [4.7, 748.0], [4.8, 748.0], [4.9, 754.0], [5.0, 754.0], [5.1, 797.0], [5.2, 797.0], [5.3, 811.0], [5.4, 811.0], [5.5, 855.0], [5.6, 855.0], [5.7, 886.0], [5.8, 886.0], [5.9, 1071.0], [6.0, 1071.0], [6.1, 1204.0], [6.2, 1204.0], [6.3, 1276.0], [6.4, 1276.0], [6.5, 4991.0], [6.6, 4991.0], [6.7, 5235.0], [6.8, 5235.0], [6.9, 5857.0], [7.0, 5857.0], [7.1, 6352.0], [7.2, 6352.0], [7.3, 6508.0], [7.4, 6508.0], [7.5, 7023.0], [7.6, 7023.0], [7.7, 7239.0], [7.8, 7239.0], [7.9, 7391.0], [8.0, 7391.0], [8.1, 7516.0], [8.2, 7516.0], [8.3, 7942.0], [8.4, 7942.0], [8.5, 8026.0], [8.6, 8026.0], [8.7, 8128.0], [8.8, 8244.0], [8.9, 8244.0], [9.0, 8270.0], [9.1, 8270.0], [9.2, 8326.0], [9.3, 8326.0], [9.4, 8585.0], [9.5, 8585.0], [9.6, 8635.0], [9.7, 8635.0], [9.8, 8705.0], [9.9, 8705.0], [10.0, 8751.0], [10.1, 8751.0], [10.2, 8785.0], [10.3, 8785.0], [10.4, 8809.0], [10.5, 8809.0], [10.6, 8855.0], [10.7, 8855.0], [10.8, 8988.0], [10.9, 8988.0], [11.0, 9000.0], [11.1, 9000.0], [11.2, 9112.0], [11.3, 9112.0], [11.4, 9175.0], [11.5, 9175.0], [11.6, 9182.0], [11.7, 9182.0], [11.8, 9248.0], [11.9, 9248.0], [12.0, 9309.0], [12.1, 9309.0], [12.2, 9446.0], [12.3, 9446.0], [12.4, 9459.0], [12.5, 9459.0], [12.6, 9544.0], [12.7, 9544.0], [12.8, 9627.0], [12.9, 9627.0], [13.0, 9688.0], [13.1, 9688.0], [13.2, 9795.0], [13.3, 9795.0], [13.4, 9804.0], [13.5, 9804.0], [13.6, 9920.0], [13.7, 9920.0], [13.8, 10091.0], [13.9, 10091.0], [14.0, 10180.0], [14.1, 10180.0], [14.2, 10226.0], [14.3, 10226.0], [14.4, 10246.0], [14.5, 10246.0], [14.6, 10247.0], [14.7, 10247.0], [14.8, 10557.0], [14.9, 10557.0], [15.0, 10594.0], [15.1, 10594.0], [15.2, 10646.0], [15.3, 10646.0], [15.4, 10955.0], [15.5, 10955.0], [15.6, 10974.0], [15.7, 10974.0], [15.8, 10982.0], [15.9, 10982.0], [16.0, 11034.0], [16.1, 11034.0], [16.2, 11058.0], [16.3, 11058.0], [16.4, 11132.0], [16.5, 11132.0], [16.6, 11241.0], [16.7, 11241.0], [16.8, 11245.0], [16.9, 11245.0], [17.0, 11249.0], [17.1, 11249.0], [17.2, 11338.0], [17.3, 11338.0], [17.4, 11344.0], [17.5, 11344.0], [17.6, 11376.0], [17.7, 11376.0], [17.8, 11378.0], [17.9, 11378.0], [18.0, 11399.0], [18.1, 11399.0], [18.2, 11412.0], [18.3, 11412.0], [18.4, 11441.0], [18.5, 11441.0], [18.6, 11456.0], [18.7, 11456.0], [18.8, 11457.0], [18.9, 11457.0], [19.0, 11459.0], [19.1, 11459.0], [19.2, 11464.0], [19.3, 11464.0], [19.4, 11477.0], [19.5, 11477.0], [19.6, 11486.0], [19.7, 11486.0], [19.8, 11494.0], [19.9, 11494.0], [20.0, 11518.0], [20.1, 11518.0], [20.2, 11532.0], [20.3, 11532.0], [20.4, 11533.0], [20.5, 11533.0], [20.6, 11535.0], [20.7, 11535.0], [20.8, 11542.0], [20.9, 11542.0], [21.0, 11571.0], [21.1, 11571.0], [21.2, 11595.0], [21.3, 11595.0], [21.4, 11601.0], [21.5, 11601.0], [21.6, 11618.0], [21.7, 11618.0], [21.8, 11627.0], [21.9, 11627.0], [22.0, 11659.0], [22.1, 11659.0], [22.2, 11678.0], [22.3, 11678.0], [22.4, 11688.0], [22.5, 11688.0], [22.6, 11708.0], [22.7, 11708.0], [22.8, 11709.0], [22.9, 11709.0], [23.0, 11723.0], [23.1, 11723.0], [23.2, 11729.0], [23.3, 11729.0], [23.4, 11734.0], [23.5, 11734.0], [23.6, 11737.0], [23.7, 11737.0], [23.8, 11766.0], [23.9, 11766.0], [24.0, 11775.0], [24.1, 11775.0], [24.2, 11779.0], [24.3, 11779.0], [24.4, 11806.0], [24.5, 11806.0], [24.6, 11807.0], [24.7, 11807.0], [24.8, 11826.0], [24.9, 11826.0], [25.0, 11826.0], [25.1, 11826.0], [25.2, 11829.0], [25.3, 11829.0], [25.4, 11829.0], [25.5, 11829.0], [25.6, 11832.0], [25.7, 11832.0], [25.8, 11833.0], [25.9, 11833.0], [26.0, 11855.0], [26.1, 11855.0], [26.2, 11858.0], [26.3, 11858.0], [26.4, 11886.0], [26.5, 11886.0], [26.6, 11907.0], [26.7, 11907.0], [26.8, 11916.0], [26.9, 11916.0], [27.0, 11919.0], [27.1, 11919.0], [27.2, 11925.0], [27.3, 11925.0], [27.4, 11948.0], [27.5, 11948.0], [27.6, 11951.0], [27.7, 11951.0], [27.8, 11961.0], [27.9, 11961.0], [28.0, 11978.0], [28.1, 11978.0], [28.2, 11984.0], [28.3, 11984.0], [28.4, 11999.0], [28.5, 11999.0], [28.6, 12006.0], [28.7, 12006.0], [28.8, 12016.0], [28.9, 12016.0], [29.0, 12035.0], [29.1, 12035.0], [29.2, 12037.0], [29.3, 12037.0], [29.4, 12045.0], [29.5, 12045.0], [29.6, 12051.0], [29.7, 12051.0], [29.8, 12070.0], [29.9, 12070.0], [30.0, 12074.0], [30.1, 12074.0], [30.2, 12102.0], [30.3, 12102.0], [30.4, 12109.0], [30.5, 12109.0], [30.6, 12118.0], [30.7, 12118.0], [30.8, 12124.0], [30.9, 12124.0], [31.0, 12126.0], [31.1, 12126.0], [31.2, 12128.0], [31.3, 12128.0], [31.4, 12135.0], [31.5, 12135.0], [31.6, 12142.0], [31.7, 12142.0], [31.8, 12143.0], [31.9, 12143.0], [32.0, 12148.0], [32.1, 12148.0], [32.2, 12183.0], [32.3, 12183.0], [32.4, 12198.0], [32.5, 12198.0], [32.6, 12198.0], [32.7, 12198.0], [32.8, 12203.0], [32.9, 12203.0], [33.0, 12209.0], [33.1, 12209.0], [33.2, 12217.0], [33.3, 12217.0], [33.4, 12220.0], [33.5, 12220.0], [33.6, 12221.0], [33.7, 12221.0], [33.8, 12226.0], [33.9, 12226.0], [34.0, 12265.0], [34.1, 12265.0], [34.2, 12268.0], [34.3, 12268.0], [34.4, 12270.0], [34.5, 12270.0], [34.6, 12271.0], [34.7, 12271.0], [34.8, 12272.0], [34.9, 12272.0], [35.0, 12273.0], [35.1, 12273.0], [35.2, 12275.0], [35.3, 12275.0], [35.4, 12281.0], [35.5, 12281.0], [35.6, 12283.0], [35.7, 12283.0], [35.8, 12295.0], [35.9, 12295.0], [36.0, 12301.0], [36.1, 12301.0], [36.2, 12301.0], [36.3, 12301.0], [36.4, 12302.0], [36.5, 12302.0], [36.6, 12308.0], [36.7, 12308.0], [36.8, 12313.0], [36.9, 12313.0], [37.0, 12314.0], [37.1, 12314.0], [37.2, 12321.0], [37.3, 12321.0], [37.4, 12326.0], [37.5, 12326.0], [37.6, 12327.0], [37.7, 12327.0], [37.8, 12329.0], [37.9, 12329.0], [38.0, 12329.0], [38.1, 12329.0], [38.2, 12331.0], [38.3, 12331.0], [38.4, 12331.0], [38.5, 12331.0], [38.6, 12334.0], [38.7, 12334.0], [38.8, 12338.0], [38.9, 12338.0], [39.0, 12342.0], [39.1, 12342.0], [39.2, 12345.0], [39.3, 12345.0], [39.4, 12353.0], [39.5, 12353.0], [39.6, 12361.0], [39.7, 12361.0], [39.8, 12383.0], [39.9, 12383.0], [40.0, 12388.0], [40.1, 12388.0], [40.2, 12389.0], [40.3, 12389.0], [40.4, 12389.0], [40.5, 12391.0], [40.6, 12391.0], [40.7, 12393.0], [40.8, 12393.0], [40.9, 12396.0], [41.0, 12396.0], [41.1, 12401.0], [41.2, 12401.0], [41.3, 12402.0], [41.4, 12402.0], [41.5, 12405.0], [41.6, 12405.0], [41.7, 12411.0], [41.8, 12411.0], [41.9, 12414.0], [42.0, 12414.0], [42.1, 12416.0], [42.2, 12416.0], [42.3, 12425.0], [42.4, 12425.0], [42.5, 12426.0], [42.6, 12426.0], [42.7, 12434.0], [42.8, 12434.0], [42.9, 12439.0], [43.0, 12439.0], [43.1, 12455.0], [43.2, 12455.0], [43.3, 12462.0], [43.4, 12462.0], [43.5, 12475.0], [43.6, 12475.0], [43.7, 12479.0], [43.8, 12479.0], [43.9, 12484.0], [44.0, 12484.0], [44.1, 12487.0], [44.2, 12487.0], [44.3, 12488.0], [44.4, 12488.0], [44.5, 12489.0], [44.6, 12489.0], [44.7, 12496.0], [44.8, 12496.0], [44.9, 12499.0], [45.0, 12499.0], [45.1, 12502.0], [45.2, 12502.0], [45.3, 12502.0], [45.4, 12502.0], [45.5, 12506.0], [45.6, 12506.0], [45.7, 12517.0], [45.8, 12517.0], [45.9, 12520.0], [46.0, 12520.0], [46.1, 12523.0], [46.2, 12523.0], [46.3, 12528.0], [46.4, 12528.0], [46.5, 12529.0], [46.6, 12529.0], [46.7, 12530.0], [46.8, 12530.0], [46.9, 12530.0], [47.0, 12530.0], [47.1, 12536.0], [47.2, 12536.0], [47.3, 12537.0], [47.4, 12537.0], [47.5, 12537.0], [47.6, 12537.0], [47.7, 12537.0], [47.8, 12537.0], [47.9, 12538.0], [48.0, 12538.0], [48.1, 12545.0], [48.2, 12545.0], [48.3, 12545.0], [48.4, 12545.0], [48.5, 12549.0], [48.6, 12549.0], [48.7, 12554.0], [48.8, 12554.0], [48.9, 12557.0], [49.0, 12557.0], [49.1, 12557.0], [49.2, 12557.0], [49.3, 12559.0], [49.4, 12559.0], [49.5, 12561.0], [49.6, 12561.0], [49.7, 12561.0], [49.8, 12561.0], [49.9, 12561.0], [50.0, 12561.0], [50.1, 12567.0], [50.2, 12567.0], [50.3, 12575.0], [50.4, 12575.0], [50.5, 12588.0], [50.6, 12588.0], [50.7, 12593.0], [50.8, 12593.0], [50.9, 12595.0], [51.0, 12595.0], [51.1, 12595.0], [51.2, 12595.0], [51.3, 12598.0], [51.4, 12598.0], [51.5, 12612.0], [51.6, 12612.0], [51.7, 12617.0], [51.8, 12617.0], [51.9, 12617.0], [52.0, 12617.0], [52.1, 12619.0], [52.2, 12619.0], [52.3, 12622.0], [52.4, 12622.0], [52.5, 12622.0], [52.6, 12622.0], [52.7, 12624.0], [52.8, 12624.0], [52.9, 12624.0], [53.0, 12624.0], [53.1, 12626.0], [53.2, 12626.0], [53.3, 12629.0], [53.4, 12629.0], [53.5, 12630.0], [53.6, 12630.0], [53.7, 12633.0], [53.8, 12633.0], [53.9, 12636.0], [54.0, 12636.0], [54.1, 12638.0], [54.2, 12638.0], [54.3, 12641.0], [54.4, 12641.0], [54.5, 12644.0], [54.6, 12644.0], [54.7, 12653.0], [54.8, 12653.0], [54.9, 12661.0], [55.0, 12661.0], [55.1, 12662.0], [55.2, 12662.0], [55.3, 12666.0], [55.4, 12666.0], [55.5, 12668.0], [55.6, 12668.0], [55.7, 12670.0], [55.8, 12670.0], [55.9, 12674.0], [56.0, 12674.0], [56.1, 12677.0], [56.2, 12677.0], [56.3, 12699.0], [56.4, 12699.0], [56.5, 12708.0], [56.6, 12708.0], [56.7, 12715.0], [56.8, 12715.0], [56.9, 12716.0], [57.0, 12716.0], [57.1, 12717.0], [57.2, 12717.0], [57.3, 12724.0], [57.4, 12724.0], [57.5, 12727.0], [57.6, 12727.0], [57.7, 12728.0], [57.8, 12728.0], [57.9, 12733.0], [58.0, 12733.0], [58.1, 12734.0], [58.2, 12734.0], [58.3, 12734.0], [58.4, 12734.0], [58.5, 12735.0], [58.6, 12735.0], [58.7, 12738.0], [58.8, 12738.0], [58.9, 12738.0], [59.0, 12738.0], [59.1, 12746.0], [59.2, 12746.0], [59.3, 12749.0], [59.4, 12749.0], [59.5, 12753.0], [59.6, 12753.0], [59.7, 12757.0], [59.8, 12757.0], [59.9, 12762.0], [60.0, 12762.0], [60.1, 12764.0], [60.2, 12764.0], [60.3, 12778.0], [60.4, 12778.0], [60.5, 12780.0], [60.6, 12780.0], [60.7, 12787.0], [60.8, 12787.0], [60.9, 12788.0], [61.0, 12788.0], [61.1, 12791.0], [61.2, 12791.0], [61.3, 12792.0], [61.4, 12792.0], [61.5, 12798.0], [61.6, 12798.0], [61.7, 12809.0], [61.8, 12809.0], [61.9, 12815.0], [62.0, 12815.0], [62.1, 12815.0], [62.2, 12815.0], [62.3, 12817.0], [62.4, 12817.0], [62.5, 12819.0], [62.6, 12819.0], [62.7, 12823.0], [62.8, 12823.0], [62.9, 12830.0], [63.0, 12830.0], [63.1, 12833.0], [63.2, 12833.0], [63.3, 12833.0], [63.4, 12833.0], [63.5, 12842.0], [63.6, 12842.0], [63.7, 12854.0], [63.8, 12854.0], [63.9, 12860.0], [64.0, 12860.0], [64.1, 12865.0], [64.2, 12865.0], [64.3, 12872.0], [64.4, 12872.0], [64.5, 12888.0], [64.6, 12888.0], [64.7, 12895.0], [64.8, 12895.0], [64.9, 12897.0], [65.0, 12897.0], [65.1, 12898.0], [65.2, 12898.0], [65.3, 12898.0], [65.4, 12898.0], [65.5, 12899.0], [65.6, 12899.0], [65.7, 12903.0], [65.8, 12903.0], [65.9, 12903.0], [66.0, 12903.0], [66.1, 12905.0], [66.2, 12905.0], [66.3, 12913.0], [66.4, 12913.0], [66.5, 12930.0], [66.6, 12930.0], [66.7, 12932.0], [66.8, 12932.0], [66.9, 12935.0], [67.0, 12935.0], [67.1, 12938.0], [67.2, 12938.0], [67.3, 12942.0], [67.4, 12942.0], [67.5, 12953.0], [67.6, 12953.0], [67.7, 12966.0], [67.8, 12966.0], [67.9, 12967.0], [68.0, 12967.0], [68.1, 12972.0], [68.2, 12972.0], [68.3, 12973.0], [68.4, 12973.0], [68.5, 12974.0], [68.6, 12974.0], [68.7, 12974.0], [68.8, 12974.0], [68.9, 12978.0], [69.0, 12978.0], [69.1, 12979.0], [69.2, 12979.0], [69.3, 12983.0], [69.4, 12983.0], [69.5, 12984.0], [69.6, 12984.0], [69.7, 12985.0], [69.8, 12985.0], [69.9, 12992.0], [70.0, 12992.0], [70.1, 13014.0], [70.2, 13014.0], [70.3, 13022.0], [70.4, 13022.0], [70.5, 13029.0], [70.6, 13029.0], [70.7, 13030.0], [70.8, 13030.0], [70.9, 13033.0], [71.0, 13033.0], [71.1, 13033.0], [71.2, 13033.0], [71.3, 13036.0], [71.4, 13036.0], [71.5, 13046.0], [71.6, 13046.0], [71.7, 13057.0], [71.8, 13057.0], [71.9, 13059.0], [72.0, 13059.0], [72.1, 13061.0], [72.2, 13061.0], [72.3, 13070.0], [72.4, 13070.0], [72.5, 13072.0], [72.6, 13072.0], [72.7, 13073.0], [72.8, 13073.0], [72.9, 13093.0], [73.0, 13093.0], [73.1, 13093.0], [73.2, 13093.0], [73.3, 13104.0], [73.4, 13104.0], [73.5, 13126.0], [73.6, 13126.0], [73.7, 13130.0], [73.8, 13130.0], [73.9, 13139.0], [74.0, 13139.0], [74.1, 13139.0], [74.2, 13139.0], [74.3, 13155.0], [74.4, 13155.0], [74.5, 13162.0], [74.6, 13162.0], [74.7, 13185.0], [74.8, 13185.0], [74.9, 13191.0], [75.0, 13191.0], [75.1, 13202.0], [75.2, 13202.0], [75.3, 13206.0], [75.4, 13206.0], [75.5, 13209.0], [75.6, 13209.0], [75.7, 13209.0], [75.8, 13209.0], [75.9, 13226.0], [76.0, 13226.0], [76.1, 13238.0], [76.2, 13238.0], [76.3, 13244.0], [76.4, 13244.0], [76.5, 13244.0], [76.6, 13244.0], [76.7, 13244.0], [76.8, 13244.0], [76.9, 13245.0], [77.0, 13245.0], [77.1, 13247.0], [77.2, 13247.0], [77.3, 13252.0], [77.4, 13252.0], [77.5, 13275.0], [77.6, 13275.0], [77.7, 13276.0], [77.8, 13276.0], [77.9, 13277.0], [78.0, 13277.0], [78.1, 13297.0], [78.2, 13297.0], [78.3, 13307.0], [78.4, 13307.0], [78.5, 13314.0], [78.6, 13314.0], [78.7, 13314.0], [78.8, 13314.0], [78.9, 13316.0], [79.0, 13316.0], [79.1, 13317.0], [79.2, 13317.0], [79.3, 13319.0], [79.4, 13319.0], [79.5, 13320.0], [79.6, 13320.0], [79.7, 13325.0], [79.8, 13325.0], [79.9, 13330.0], [80.0, 13330.0], [80.1, 13331.0], [80.2, 13331.0], [80.3, 13349.0], [80.4, 13349.0], [80.5, 13349.0], [80.6, 13349.0], [80.7, 13356.0], [80.8, 13356.0], [80.9, 13360.0], [81.0, 13360.0], [81.1, 13362.0], [81.2, 13362.0], [81.3, 13364.0], [81.4, 13364.0], [81.5, 13375.0], [81.6, 13375.0], [81.7, 13375.0], [81.8, 13375.0], [81.9, 13377.0], [82.0, 13377.0], [82.1, 13396.0], [82.2, 13396.0], [82.3, 13410.0], [82.4, 13410.0], [82.5, 13430.0], [82.6, 13430.0], [82.7, 13441.0], [82.8, 13441.0], [82.9, 13463.0], [83.0, 13463.0], [83.1, 13471.0], [83.2, 13471.0], [83.3, 13487.0], [83.4, 13487.0], [83.5, 13502.0], [83.6, 13502.0], [83.7, 13507.0], [83.8, 13507.0], [83.9, 13513.0], [84.0, 13513.0], [84.1, 13521.0], [84.2, 13521.0], [84.3, 13554.0], [84.4, 13554.0], [84.5, 13562.0], [84.6, 13562.0], [84.7, 13564.0], [84.8, 13564.0], [84.9, 13579.0], [85.0, 13579.0], [85.1, 13580.0], [85.2, 13580.0], [85.3, 13588.0], [85.4, 13588.0], [85.5, 13592.0], [85.6, 13592.0], [85.7, 13593.0], [85.8, 13593.0], [85.9, 13604.0], [86.0, 13604.0], [86.1, 13632.0], [86.2, 13632.0], [86.3, 13632.0], [86.4, 13632.0], [86.5, 13650.0], [86.6, 13650.0], [86.7, 13652.0], [86.8, 13652.0], [86.9, 13653.0], [87.0, 13653.0], [87.1, 13669.0], [87.2, 13669.0], [87.3, 13703.0], [87.4, 13703.0], [87.5, 13714.0], [87.6, 13714.0], [87.7, 13718.0], [87.8, 13718.0], [87.9, 13723.0], [88.0, 13723.0], [88.1, 13737.0], [88.2, 13737.0], [88.3, 13760.0], [88.4, 13760.0], [88.5, 13775.0], [88.6, 13775.0], [88.7, 13819.0], [88.8, 13819.0], [88.9, 13824.0], [89.0, 13824.0], [89.1, 13870.0], [89.2, 13870.0], [89.3, 13892.0], [89.4, 13892.0], [89.5, 13907.0], [89.6, 13907.0], [89.7, 13930.0], [89.8, 13930.0], [89.9, 13931.0], [90.0, 13931.0], [90.1, 13958.0], [90.2, 13958.0], [90.3, 13959.0], [90.4, 13959.0], [90.5, 13962.0], [90.6, 13962.0], [90.7, 13967.0], [90.8, 13967.0], [90.9, 13985.0], [91.0, 13985.0], [91.1, 14006.0], [91.2, 14006.0], [91.3, 14008.0], [91.4, 14008.0], [91.5, 14019.0], [91.6, 14019.0], [91.7, 14019.0], [91.8, 14019.0], [91.9, 14029.0], [92.0, 14029.0], [92.1, 14068.0], [92.2, 14068.0], [92.3, 14077.0], [92.4, 14077.0], [92.5, 14096.0], [92.6, 14096.0], [92.7, 14099.0], [92.8, 14099.0], [92.9, 14114.0], [93.0, 14114.0], [93.1, 14128.0], [93.2, 14128.0], [93.3, 14128.0], [93.4, 14128.0], [93.5, 14167.0], [93.6, 14167.0], [93.7, 14184.0], [93.8, 14184.0], [93.9, 14210.0], [94.0, 14210.0], [94.1, 14231.0], [94.2, 14231.0], [94.3, 14264.0], [94.4, 14264.0], [94.5, 14266.0], [94.6, 14266.0], [94.7, 14292.0], [94.8, 14292.0], [94.9, 14304.0], [95.0, 14304.0], [95.1, 14313.0], [95.2, 14313.0], [95.3, 14317.0], [95.4, 14317.0], [95.5, 14330.0], [95.6, 14330.0], [95.7, 14338.0], [95.8, 14338.0], [95.9, 14347.0], [96.0, 14347.0], [96.1, 14397.0], [96.2, 14397.0], [96.3, 14491.0], [96.4, 14491.0], [96.5, 14494.0], [96.6, 14494.0], [96.7, 14631.0], [96.8, 14631.0], [96.9, 14638.0], [97.0, 14638.0], [97.1, 14656.0], [97.2, 14656.0], [97.3, 14718.0], [97.4, 14718.0], [97.5, 14728.0], [97.6, 14728.0], [97.7, 14754.0], [97.8, 14754.0], [97.9, 14867.0], [98.0, 14867.0], [98.1, 14892.0], [98.2, 14892.0], [98.3, 14914.0], [98.4, 14914.0], [98.5, 14965.0], [98.6, 14965.0], [98.7, 15030.0], [98.8, 15030.0], [98.9, 15061.0], [99.0, 15061.0], [99.1, 15069.0], [99.2, 15069.0], [99.3, 15182.0], [99.4, 15182.0], [99.5, 15188.0], [99.6, 15188.0], [99.7, 15237.0], [99.8, 15237.0], [99.9, 15275.0], [100.0, 15275.0]], "isOverall": false, "label": "HTTP Request (Light image)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 32.0, "series": [{"data": [[600.0, 2.0], [700.0, 10.0], [800.0, 3.0], [1000.0, 1.0], [1200.0, 2.0], [4900.0, 1.0], [5200.0, 1.0], [5800.0, 1.0], [6300.0, 1.0], [6500.0, 1.0], [7000.0, 1.0], [7300.0, 1.0], [7200.0, 1.0], [7500.0, 1.0], [7900.0, 1.0], [8000.0, 1.0], [8100.0, 1.0], [8200.0, 2.0], [8300.0, 1.0], [8600.0, 1.0], [8700.0, 3.0], [8500.0, 1.0], [8800.0, 2.0], [9000.0, 1.0], [8900.0, 1.0], [9100.0, 3.0], [9200.0, 1.0], [9300.0, 1.0], [9400.0, 2.0], [9500.0, 1.0], [9600.0, 2.0], [9700.0, 1.0], [9800.0, 1.0], [10200.0, 3.0], [10100.0, 1.0], [10000.0, 1.0], [9900.0, 1.0], [10500.0, 2.0], [10600.0, 1.0], [11200.0, 3.0], [11000.0, 2.0], [10900.0, 3.0], [11100.0, 1.0], [11300.0, 5.0], [11500.0, 7.0], [11700.0, 9.0], [11400.0, 9.0], [11600.0, 6.0], [11800.0, 11.0], [12100.0, 13.0], [12200.0, 16.0], [11900.0, 10.0], [12000.0, 8.0], [12300.0, 25.0], [12500.0, 32.0], [12400.0, 20.0], [12700.0, 26.0], [12600.0, 25.0], [13200.0, 16.0], [12900.0, 22.0], [12800.0, 20.0], [13300.0, 20.0], [13100.0, 9.0], [13000.0, 16.0], [13400.0, 6.0], [13700.0, 7.0], [13500.0, 12.0], [13800.0, 4.0], [13600.0, 7.0], [14000.0, 9.0], [13900.0, 8.0], [14200.0, 5.0], [14100.0, 5.0], [14300.0, 7.0], [14600.0, 3.0], [14400.0, 2.0], [14800.0, 2.0], [14700.0, 3.0], [15000.0, 3.0], [14900.0, 2.0], [15200.0, 2.0], [15100.0, 2.0], [400.0, 13.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request (Light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 15200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 32.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 468.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 468.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 32.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 40.071428571428584, "minX": 1.71235596E12, "maxY": 50.0, "series": [{"data": [[1.71235596E12, 50.0], [1.71235608E12, 40.071428571428584], [1.71235602E12, 50.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71235608E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 452.0, "minX": 1.0, "maxY": 13563.714285714284, "series": [{"data": [[33.0, 452.0], [32.0, 11457.0], [2.0, 5235.0], [35.0, 11690.666666666666], [34.0, 11453.5], [37.0, 11830.5], [36.0, 11595.0], [39.0, 11618.0], [38.0, 11583.5], [41.0, 11399.0], [40.0, 11258.5], [43.0, 12039.666666666666], [42.0, 11359.0], [45.0, 12074.0], [44.0, 11544.375], [47.0, 12614.255813953487], [46.0, 12301.0], [49.0, 13563.714285714284], [48.0, 13397.333333333334], [3.0, 5857.0], [50.0, 11769.202099737542], [4.0, 6352.0], [5.0, 7023.0], [6.0, 7942.0], [7.0, 7239.0], [8.0, 8128.0], [9.0, 8270.0], [10.0, 9248.0], [11.0, 9175.0], [12.0, 8026.0], [13.0, 8585.0], [14.0, 9112.0], [15.0, 8855.0], [1.0, 4991.0], [17.0, 9551.0], [18.0, 8988.0], [19.0, 9688.0], [20.0, 10091.0], [21.0, 9795.0], [22.0, 9627.0], [24.0, 10402.0], [25.0, 11344.0], [26.0, 10646.0], [27.0, 10180.0], [28.0, 11132.0], [29.0, 11034.0], [31.0, 11109.5]], "isOverall": false, "label": "HTTP Request (Light image)", "isController": false}, {"data": [[46.94199999999998, 11675.820000000003]], "isOverall": false, "label": "HTTP Request (Light image)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 518.7666666666667, "minX": 1.71235596E12, "maxY": 48147.48333333333, "series": [{"data": [[1.71235596E12, 518.7666666666667], [1.71235608E12, 604.3333333333334], [1.71235602E12, 946.3666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71235596E12, 22742.15], [1.71235608E12, 31552.333333333332], [1.71235602E12, 48147.48333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71235608E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 9562.333333333334, "minX": 1.71235596E12, "maxY": 12602.034042553196, "series": [{"data": [[1.71235596E12, 9562.333333333334], [1.71235608E12, 11785.798701298705], [1.71235602E12, 12602.034042553196]], "isOverall": false, "label": "HTTP Request (Light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71235608E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 9561.954954954956, "minX": 1.71235596E12, "maxY": 12601.868085106387, "series": [{"data": [[1.71235596E12, 9561.954954954956], [1.71235608E12, 11785.662337662341], [1.71235602E12, 12601.868085106387]], "isOverall": false, "label": "HTTP Request (Light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71235608E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 85.07142857142856, "minX": 1.71235596E12, "maxY": 123.89189189189187, "series": [{"data": [[1.71235596E12, 123.89189189189187], [1.71235608E12, 85.07142857142856], [1.71235602E12, 85.74042553191495]], "isOverall": false, "label": "HTTP Request (Light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71235608E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4991.0, "minX": 1.71235596E12, "maxY": 15275.0, "series": [{"data": [[1.71235596E12, 15061.0], [1.71235608E12, 15182.0], [1.71235602E12, 15275.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71235596E12, 6508.0], [1.71235608E12, 4991.0], [1.71235602E12, 11412.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71235596E12, 14007.3], [1.71235608E12, 13599.6], [1.71235602E12, 14069.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71235596E12, 15061.0], [1.71235608E12, 15064.820000000002], [1.71235602E12, 15223.28]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71235596E12, 12243.5], [1.71235608E12, 12268.0], [1.71235602E12, 12895.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71235596E12, 14250.25], [1.71235608E12, 14323.499999999998], [1.71235602E12, 14429.8]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71235608E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 452.0, "minX": 1.0, "maxY": 13093.0, "series": [{"data": [[1.0, 12209.0], [2.0, 12759.5], [4.0, 12627.0], [8.0, 12953.0], [9.0, 12557.0], [5.0, 12581.5], [12.0, 8904.5], [3.0, 12401.0], [6.0, 12652.5], [7.0, 13093.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1000.5], [4.0, 870.5], [8.0, 452.0], [9.0, 462.0], [10.0, 748.0], [5.0, 489.0], [12.0, 714.0], [6.0, 889.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 452.0, "minX": 1.0, "maxY": 13092.0, "series": [{"data": [[1.0, 12209.0], [2.0, 12759.5], [4.0, 12626.0], [8.0, 12953.0], [9.0, 12557.0], [5.0, 12581.5], [12.0, 8904.0], [3.0, 12400.5], [6.0, 12652.0], [7.0, 13092.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1000.5], [4.0, 870.5], [8.0, 452.0], [9.0, 459.0], [10.0, 747.0], [5.0, 489.0], [12.0, 714.0], [6.0, 889.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.7333333333333334, "minX": 1.71235596E12, "maxY": 3.9166666666666665, "series": [{"data": [[1.71235596E12, 2.683333333333333], [1.71235608E12, 1.7333333333333334], [1.71235602E12, 3.9166666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71235608E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71235596E12, "maxY": 3.783333333333333, "series": [{"data": [[1.71235596E12, 1.4666666666666666], [1.71235608E12, 2.55], [1.71235602E12, 3.783333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71235596E12, 0.38333333333333336], [1.71235608E12, 0.016666666666666666], [1.71235602E12, 0.13333333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71235608E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71235596E12, "maxY": 3.783333333333333, "series": [{"data": [[1.71235596E12, 0.38333333333333336], [1.71235608E12, 0.016666666666666666], [1.71235602E12, 0.13333333333333333]], "isOverall": false, "label": "HTTP Request (Light image)-failure", "isController": false}, {"data": [[1.71235596E12, 1.4666666666666666], [1.71235608E12, 2.55], [1.71235602E12, 3.783333333333333]], "isOverall": false, "label": "HTTP Request (Light image)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71235608E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.71235596E12, "maxY": 3.783333333333333, "series": [{"data": [[1.71235596E12, 1.4666666666666666], [1.71235608E12, 2.55], [1.71235602E12, 3.783333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71235596E12, 0.38333333333333336], [1.71235608E12, 0.016666666666666666], [1.71235602E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71235608E12, "title": "Total Transactions Per Second"}},
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

