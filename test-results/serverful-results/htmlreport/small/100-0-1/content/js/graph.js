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
        data: {"result": {"minY": 349.0, "minX": 0.0, "maxY": 22312.0, "series": [{"data": [[0.0, 349.0], [0.1, 349.0], [0.2, 349.0], [0.3, 349.0], [0.4, 349.0], [0.5, 349.0], [0.6, 349.0], [0.7, 349.0], [0.8, 349.0], [0.9, 349.0], [1.0, 352.0], [1.1, 352.0], [1.2, 352.0], [1.3, 352.0], [1.4, 352.0], [1.5, 352.0], [1.6, 352.0], [1.7, 352.0], [1.8, 352.0], [1.9, 352.0], [2.0, 352.0], [2.1, 352.0], [2.2, 352.0], [2.3, 352.0], [2.4, 352.0], [2.5, 352.0], [2.6, 352.0], [2.7, 352.0], [2.8, 352.0], [2.9, 352.0], [3.0, 414.0], [3.1, 414.0], [3.2, 414.0], [3.3, 414.0], [3.4, 414.0], [3.5, 414.0], [3.6, 414.0], [3.7, 414.0], [3.8, 414.0], [3.9, 414.0], [4.0, 417.0], [4.1, 417.0], [4.2, 417.0], [4.3, 417.0], [4.4, 417.0], [4.5, 417.0], [4.6, 417.0], [4.7, 417.0], [4.8, 417.0], [4.9, 417.0], [5.0, 417.0], [5.1, 417.0], [5.2, 417.0], [5.3, 417.0], [5.4, 417.0], [5.5, 417.0], [5.6, 417.0], [5.7, 417.0], [5.8, 417.0], [5.9, 417.0], [6.0, 417.0], [6.1, 417.0], [6.2, 417.0], [6.3, 417.0], [6.4, 417.0], [6.5, 417.0], [6.6, 417.0], [6.7, 417.0], [6.8, 417.0], [6.9, 417.0], [7.0, 417.0], [7.1, 417.0], [7.2, 417.0], [7.3, 417.0], [7.4, 417.0], [7.5, 417.0], [7.6, 417.0], [7.7, 417.0], [7.8, 417.0], [7.9, 417.0], [8.0, 417.0], [8.1, 417.0], [8.2, 417.0], [8.3, 417.0], [8.4, 417.0], [8.5, 417.0], [8.6, 417.0], [8.7, 417.0], [8.8, 417.0], [8.9, 417.0], [9.0, 553.0], [9.1, 553.0], [9.2, 553.0], [9.3, 553.0], [9.4, 553.0], [9.5, 553.0], [9.6, 553.0], [9.7, 553.0], [9.8, 553.0], [9.9, 553.0], [10.0, 622.0], [10.1, 622.0], [10.2, 622.0], [10.3, 622.0], [10.4, 622.0], [10.5, 622.0], [10.6, 622.0], [10.7, 622.0], [10.8, 622.0], [10.9, 622.0], [11.0, 827.0], [11.1, 827.0], [11.2, 827.0], [11.3, 827.0], [11.4, 827.0], [11.5, 827.0], [11.6, 827.0], [11.7, 827.0], [11.8, 827.0], [11.9, 827.0], [12.0, 844.0], [12.1, 844.0], [12.2, 844.0], [12.3, 844.0], [12.4, 844.0], [12.5, 844.0], [12.6, 844.0], [12.7, 844.0], [12.8, 844.0], [12.9, 844.0], [13.0, 3148.0], [13.1, 3148.0], [13.2, 3148.0], [13.3, 3148.0], [13.4, 3148.0], [13.5, 3148.0], [13.6, 3148.0], [13.7, 3148.0], [13.8, 3148.0], [13.9, 3148.0], [14.0, 3148.0], [14.1, 3148.0], [14.2, 3148.0], [14.3, 3148.0], [14.4, 3148.0], [14.5, 3148.0], [14.6, 3148.0], [14.7, 3148.0], [14.8, 3148.0], [14.9, 3148.0], [15.0, 3858.0], [15.1, 3858.0], [15.2, 3858.0], [15.3, 3858.0], [15.4, 3858.0], [15.5, 3858.0], [15.6, 3858.0], [15.7, 3858.0], [15.8, 3858.0], [15.9, 3858.0], [16.0, 3861.0], [16.1, 3861.0], [16.2, 3861.0], [16.3, 3861.0], [16.4, 3861.0], [16.5, 3861.0], [16.6, 3861.0], [16.7, 3861.0], [16.8, 3861.0], [16.9, 3861.0], [17.0, 6050.0], [17.1, 6050.0], [17.2, 6050.0], [17.3, 6050.0], [17.4, 6050.0], [17.5, 6050.0], [17.6, 6050.0], [17.7, 6050.0], [17.8, 6050.0], [17.9, 6050.0], [18.0, 7699.0], [18.1, 7699.0], [18.2, 7699.0], [18.3, 7699.0], [18.4, 7699.0], [18.5, 7699.0], [18.6, 7699.0], [18.7, 7699.0], [18.8, 7699.0], [18.9, 7699.0], [19.0, 9195.0], [19.1, 9195.0], [19.2, 9195.0], [19.3, 9195.0], [19.4, 9195.0], [19.5, 9195.0], [19.6, 9195.0], [19.7, 9195.0], [19.8, 9195.0], [19.9, 9195.0], [20.0, 9195.0], [20.1, 9195.0], [20.2, 9195.0], [20.3, 9195.0], [20.4, 9195.0], [20.5, 9195.0], [20.6, 9195.0], [20.7, 9195.0], [20.8, 9195.0], [20.9, 9195.0], [21.0, 9195.0], [21.1, 9195.0], [21.2, 9195.0], [21.3, 9195.0], [21.4, 9195.0], [21.5, 9195.0], [21.6, 9195.0], [21.7, 9195.0], [21.8, 9195.0], [21.9, 9195.0], [22.0, 9195.0], [22.1, 9195.0], [22.2, 9195.0], [22.3, 9195.0], [22.4, 9195.0], [22.5, 9195.0], [22.6, 9195.0], [22.7, 9195.0], [22.8, 9195.0], [22.9, 9195.0], [23.0, 9559.0], [23.1, 9559.0], [23.2, 9559.0], [23.3, 9559.0], [23.4, 9559.0], [23.5, 9559.0], [23.6, 9559.0], [23.7, 9559.0], [23.8, 9559.0], [23.9, 9559.0], [24.0, 9559.0], [24.1, 9559.0], [24.2, 9559.0], [24.3, 9559.0], [24.4, 9559.0], [24.5, 9559.0], [24.6, 9559.0], [24.7, 9559.0], [24.8, 9559.0], [24.9, 9559.0], [25.0, 9903.0], [25.1, 9903.0], [25.2, 9903.0], [25.3, 9903.0], [25.4, 9903.0], [25.5, 9903.0], [25.6, 9903.0], [25.7, 9903.0], [25.8, 9903.0], [25.9, 9903.0], [26.0, 10389.0], [26.1, 10389.0], [26.2, 10389.0], [26.3, 10389.0], [26.4, 10389.0], [26.5, 10389.0], [26.6, 10389.0], [26.7, 10389.0], [26.8, 10389.0], [26.9, 10389.0], [27.0, 10515.0], [27.1, 10515.0], [27.2, 10515.0], [27.3, 10515.0], [27.4, 10515.0], [27.5, 10515.0], [27.6, 10515.0], [27.7, 10515.0], [27.8, 10515.0], [27.9, 10515.0], [28.0, 10608.0], [28.1, 10608.0], [28.2, 10608.0], [28.3, 10608.0], [28.4, 10608.0], [28.5, 10608.0], [28.6, 10608.0], [28.7, 10608.0], [28.8, 10608.0], [28.9, 10608.0], [29.0, 11365.0], [29.1, 11365.0], [29.2, 11365.0], [29.3, 11365.0], [29.4, 11365.0], [29.5, 11365.0], [29.6, 11365.0], [29.7, 11365.0], [29.8, 11365.0], [29.9, 11365.0], [30.0, 11384.0], [30.1, 11384.0], [30.2, 11384.0], [30.3, 11384.0], [30.4, 11384.0], [30.5, 11384.0], [30.6, 11384.0], [30.7, 11384.0], [30.8, 11384.0], [30.9, 11384.0], [31.0, 11499.0], [31.1, 11499.0], [31.2, 11499.0], [31.3, 11499.0], [31.4, 11499.0], [31.5, 11499.0], [31.6, 11499.0], [31.7, 11499.0], [31.8, 11499.0], [31.9, 11499.0], [32.0, 11830.0], [32.1, 11830.0], [32.2, 11830.0], [32.3, 11830.0], [32.4, 11830.0], [32.5, 11830.0], [32.6, 11830.0], [32.7, 11830.0], [32.8, 11830.0], [32.9, 11830.0], [33.0, 12077.0], [33.1, 12077.0], [33.2, 12077.0], [33.3, 12077.0], [33.4, 12077.0], [33.5, 12077.0], [33.6, 12077.0], [33.7, 12077.0], [33.8, 12077.0], [33.9, 12077.0], [34.0, 12389.0], [34.1, 12389.0], [34.2, 12389.0], [34.3, 12389.0], [34.4, 12389.0], [34.5, 12389.0], [34.6, 12389.0], [34.7, 12389.0], [34.8, 12389.0], [34.9, 12389.0], [35.0, 12775.0], [35.1, 12775.0], [35.2, 12775.0], [35.3, 12775.0], [35.4, 12775.0], [35.5, 12775.0], [35.6, 12775.0], [35.7, 12775.0], [35.8, 12775.0], [35.9, 12775.0], [36.0, 12979.0], [36.1, 12979.0], [36.2, 12979.0], [36.3, 12979.0], [36.4, 12979.0], [36.5, 12979.0], [36.6, 12979.0], [36.7, 12979.0], [36.8, 12979.0], [36.9, 12979.0], [37.0, 13129.0], [37.1, 13129.0], [37.2, 13129.0], [37.3, 13129.0], [37.4, 13129.0], [37.5, 13129.0], [37.6, 13129.0], [37.7, 13129.0], [37.8, 13129.0], [37.9, 13129.0], [38.0, 13398.0], [38.1, 13398.0], [38.2, 13398.0], [38.3, 13398.0], [38.4, 13398.0], [38.5, 13398.0], [38.6, 13398.0], [38.7, 13398.0], [38.8, 13398.0], [38.9, 13398.0], [39.0, 13470.0], [39.1, 13470.0], [39.2, 13470.0], [39.3, 13470.0], [39.4, 13470.0], [39.5, 13470.0], [39.6, 13470.0], [39.7, 13470.0], [39.8, 13470.0], [39.9, 13470.0], [40.0, 13550.0], [40.1, 13550.0], [40.2, 13550.0], [40.3, 13550.0], [40.4, 13550.0], [40.5, 13550.0], [40.6, 13550.0], [40.7, 13550.0], [40.8, 13550.0], [40.9, 13550.0], [41.0, 13783.0], [41.1, 13783.0], [41.2, 13783.0], [41.3, 13783.0], [41.4, 13783.0], [41.5, 13783.0], [41.6, 13783.0], [41.7, 13783.0], [41.8, 13783.0], [41.9, 13783.0], [42.0, 13954.0], [42.1, 13954.0], [42.2, 13954.0], [42.3, 13954.0], [42.4, 13954.0], [42.5, 13954.0], [42.6, 13954.0], [42.7, 13954.0], [42.8, 13954.0], [42.9, 13954.0], [43.0, 14157.0], [43.1, 14157.0], [43.2, 14157.0], [43.3, 14157.0], [43.4, 14157.0], [43.5, 14157.0], [43.6, 14157.0], [43.7, 14157.0], [43.8, 14157.0], [43.9, 14157.0], [44.0, 14551.0], [44.1, 14551.0], [44.2, 14551.0], [44.3, 14551.0], [44.4, 14551.0], [44.5, 14551.0], [44.6, 14551.0], [44.7, 14551.0], [44.8, 14551.0], [44.9, 14551.0], [45.0, 14701.0], [45.1, 14701.0], [45.2, 14701.0], [45.3, 14701.0], [45.4, 14701.0], [45.5, 14701.0], [45.6, 14701.0], [45.7, 14701.0], [45.8, 14701.0], [45.9, 14701.0], [46.0, 14917.0], [46.1, 14917.0], [46.2, 14917.0], [46.3, 14917.0], [46.4, 14917.0], [46.5, 14917.0], [46.6, 14917.0], [46.7, 14917.0], [46.8, 14917.0], [46.9, 14917.0], [47.0, 15014.0], [47.1, 15014.0], [47.2, 15014.0], [47.3, 15014.0], [47.4, 15014.0], [47.5, 15014.0], [47.6, 15014.0], [47.7, 15014.0], [47.8, 15014.0], [47.9, 15014.0], [48.0, 15439.0], [48.1, 15439.0], [48.2, 15439.0], [48.3, 15439.0], [48.4, 15439.0], [48.5, 15439.0], [48.6, 15439.0], [48.7, 15439.0], [48.8, 15439.0], [48.9, 15439.0], [49.0, 15532.0], [49.1, 15532.0], [49.2, 15532.0], [49.3, 15532.0], [49.4, 15532.0], [49.5, 15532.0], [49.6, 15532.0], [49.7, 15532.0], [49.8, 15532.0], [49.9, 15532.0], [50.0, 15577.0], [50.1, 15577.0], [50.2, 15577.0], [50.3, 15577.0], [50.4, 15577.0], [50.5, 15577.0], [50.6, 15577.0], [50.7, 15577.0], [50.8, 15577.0], [50.9, 15577.0], [51.0, 15768.0], [51.1, 15768.0], [51.2, 15768.0], [51.3, 15768.0], [51.4, 15768.0], [51.5, 15768.0], [51.6, 15768.0], [51.7, 15768.0], [51.8, 15768.0], [51.9, 15768.0], [52.0, 15921.0], [52.1, 15921.0], [52.2, 15921.0], [52.3, 15921.0], [52.4, 15921.0], [52.5, 15921.0], [52.6, 15921.0], [52.7, 15921.0], [52.8, 15921.0], [52.9, 15921.0], [53.0, 16302.0], [53.1, 16302.0], [53.2, 16302.0], [53.3, 16302.0], [53.4, 16302.0], [53.5, 16302.0], [53.6, 16302.0], [53.7, 16302.0], [53.8, 16302.0], [53.9, 16302.0], [54.0, 16777.0], [54.1, 16777.0], [54.2, 16777.0], [54.3, 16777.0], [54.4, 16777.0], [54.5, 16777.0], [54.6, 16777.0], [54.7, 16777.0], [54.8, 16777.0], [54.9, 16777.0], [55.0, 16830.0], [55.1, 16830.0], [55.2, 16830.0], [55.3, 16830.0], [55.4, 16830.0], [55.5, 16830.0], [55.6, 16830.0], [55.7, 16830.0], [55.8, 16830.0], [55.9, 16830.0], [56.0, 16830.0], [56.1, 16830.0], [56.2, 16830.0], [56.3, 16830.0], [56.4, 16830.0], [56.5, 16830.0], [56.6, 16830.0], [56.7, 16830.0], [56.8, 16830.0], [56.9, 16830.0], [57.0, 16884.0], [57.1, 16884.0], [57.2, 16884.0], [57.3, 16884.0], [57.4, 16884.0], [57.5, 16884.0], [57.6, 16884.0], [57.7, 16884.0], [57.8, 16884.0], [57.9, 16884.0], [58.0, 17268.0], [58.1, 17268.0], [58.2, 17268.0], [58.3, 17268.0], [58.4, 17268.0], [58.5, 17268.0], [58.6, 17268.0], [58.7, 17268.0], [58.8, 17268.0], [58.9, 17268.0], [59.0, 17445.0], [59.1, 17445.0], [59.2, 17445.0], [59.3, 17445.0], [59.4, 17445.0], [59.5, 17445.0], [59.6, 17445.0], [59.7, 17445.0], [59.8, 17445.0], [59.9, 17445.0], [60.0, 17556.0], [60.1, 17556.0], [60.2, 17556.0], [60.3, 17556.0], [60.4, 17556.0], [60.5, 17556.0], [60.6, 17556.0], [60.7, 17556.0], [60.8, 17556.0], [60.9, 17556.0], [61.0, 17656.0], [61.1, 17656.0], [61.2, 17656.0], [61.3, 17656.0], [61.4, 17656.0], [61.5, 17656.0], [61.6, 17656.0], [61.7, 17656.0], [61.8, 17656.0], [61.9, 17656.0], [62.0, 18043.0], [62.1, 18043.0], [62.2, 18043.0], [62.3, 18043.0], [62.4, 18043.0], [62.5, 18043.0], [62.6, 18043.0], [62.7, 18043.0], [62.8, 18043.0], [62.9, 18043.0], [63.0, 18083.0], [63.1, 18083.0], [63.2, 18083.0], [63.3, 18083.0], [63.4, 18083.0], [63.5, 18083.0], [63.6, 18083.0], [63.7, 18083.0], [63.8, 18083.0], [63.9, 18083.0], [64.0, 18341.0], [64.1, 18341.0], [64.2, 18341.0], [64.3, 18341.0], [64.4, 18341.0], [64.5, 18341.0], [64.6, 18341.0], [64.7, 18341.0], [64.8, 18341.0], [64.9, 18341.0], [65.0, 18518.0], [65.1, 18518.0], [65.2, 18518.0], [65.3, 18518.0], [65.4, 18518.0], [65.5, 18518.0], [65.6, 18518.0], [65.7, 18518.0], [65.8, 18518.0], [65.9, 18518.0], [66.0, 18656.0], [66.1, 18656.0], [66.2, 18656.0], [66.3, 18656.0], [66.4, 18656.0], [66.5, 18656.0], [66.6, 18656.0], [66.7, 18656.0], [66.8, 18656.0], [66.9, 18656.0], [67.0, 18843.0], [67.1, 18843.0], [67.2, 18843.0], [67.3, 18843.0], [67.4, 18843.0], [67.5, 18843.0], [67.6, 18843.0], [67.7, 18843.0], [67.8, 18843.0], [67.9, 18843.0], [68.0, 18890.0], [68.1, 18890.0], [68.2, 18890.0], [68.3, 18890.0], [68.4, 18890.0], [68.5, 18890.0], [68.6, 18890.0], [68.7, 18890.0], [68.8, 18890.0], [68.9, 18890.0], [69.0, 19020.0], [69.1, 19020.0], [69.2, 19020.0], [69.3, 19020.0], [69.4, 19020.0], [69.5, 19020.0], [69.6, 19020.0], [69.7, 19020.0], [69.8, 19020.0], [69.9, 19020.0], [70.0, 19320.0], [70.1, 19320.0], [70.2, 19320.0], [70.3, 19320.0], [70.4, 19320.0], [70.5, 19320.0], [70.6, 19320.0], [70.7, 19320.0], [70.8, 19320.0], [70.9, 19320.0], [71.0, 19351.0], [71.1, 19351.0], [71.2, 19351.0], [71.3, 19351.0], [71.4, 19351.0], [71.5, 19351.0], [71.6, 19351.0], [71.7, 19351.0], [71.8, 19351.0], [71.9, 19351.0], [72.0, 19665.0], [72.1, 19665.0], [72.2, 19665.0], [72.3, 19665.0], [72.4, 19665.0], [72.5, 19665.0], [72.6, 19665.0], [72.7, 19665.0], [72.8, 19665.0], [72.9, 19665.0], [73.0, 19831.0], [73.1, 19831.0], [73.2, 19831.0], [73.3, 19831.0], [73.4, 19831.0], [73.5, 19831.0], [73.6, 19831.0], [73.7, 19831.0], [73.8, 19831.0], [73.9, 19831.0], [74.0, 19944.0], [74.1, 19944.0], [74.2, 19944.0], [74.3, 19944.0], [74.4, 19944.0], [74.5, 19944.0], [74.6, 19944.0], [74.7, 19944.0], [74.8, 19944.0], [74.9, 19944.0], [75.0, 20188.0], [75.1, 20188.0], [75.2, 20188.0], [75.3, 20188.0], [75.4, 20188.0], [75.5, 20188.0], [75.6, 20188.0], [75.7, 20188.0], [75.8, 20188.0], [75.9, 20188.0], [76.0, 20407.0], [76.1, 20407.0], [76.2, 20407.0], [76.3, 20407.0], [76.4, 20407.0], [76.5, 20407.0], [76.6, 20407.0], [76.7, 20407.0], [76.8, 20407.0], [76.9, 20407.0], [77.0, 20428.0], [77.1, 20428.0], [77.2, 20428.0], [77.3, 20428.0], [77.4, 20428.0], [77.5, 20428.0], [77.6, 20428.0], [77.7, 20428.0], [77.8, 20428.0], [77.9, 20428.0], [78.0, 20510.0], [78.1, 20510.0], [78.2, 20510.0], [78.3, 20510.0], [78.4, 20510.0], [78.5, 20510.0], [78.6, 20510.0], [78.7, 20510.0], [78.8, 20510.0], [78.9, 20510.0], [79.0, 20553.0], [79.1, 20553.0], [79.2, 20553.0], [79.3, 20553.0], [79.4, 20553.0], [79.5, 20553.0], [79.6, 20553.0], [79.7, 20553.0], [79.8, 20553.0], [79.9, 20553.0], [80.0, 20813.0], [80.1, 20813.0], [80.2, 20813.0], [80.3, 20813.0], [80.4, 20813.0], [80.5, 20813.0], [80.6, 20813.0], [80.7, 20813.0], [80.8, 20813.0], [80.9, 20813.0], [81.0, 20951.0], [81.1, 20951.0], [81.2, 20951.0], [81.3, 20951.0], [81.4, 20951.0], [81.5, 20951.0], [81.6, 20951.0], [81.7, 20951.0], [81.8, 20951.0], [81.9, 20951.0], [82.0, 20963.0], [82.1, 20963.0], [82.2, 20963.0], [82.3, 20963.0], [82.4, 20963.0], [82.5, 20963.0], [82.6, 20963.0], [82.7, 20963.0], [82.8, 20963.0], [82.9, 20963.0], [83.0, 21055.0], [83.1, 21055.0], [83.2, 21055.0], [83.3, 21055.0], [83.4, 21055.0], [83.5, 21055.0], [83.6, 21055.0], [83.7, 21055.0], [83.8, 21055.0], [83.9, 21055.0], [84.0, 21176.0], [84.1, 21176.0], [84.2, 21176.0], [84.3, 21176.0], [84.4, 21176.0], [84.5, 21176.0], [84.6, 21176.0], [84.7, 21176.0], [84.8, 21176.0], [84.9, 21176.0], [85.0, 21255.0], [85.1, 21255.0], [85.2, 21255.0], [85.3, 21255.0], [85.4, 21255.0], [85.5, 21255.0], [85.6, 21255.0], [85.7, 21255.0], [85.8, 21255.0], [85.9, 21255.0], [86.0, 21287.0], [86.1, 21287.0], [86.2, 21287.0], [86.3, 21287.0], [86.4, 21287.0], [86.5, 21287.0], [86.6, 21287.0], [86.7, 21287.0], [86.8, 21287.0], [86.9, 21287.0], [87.0, 21510.0], [87.1, 21510.0], [87.2, 21510.0], [87.3, 21510.0], [87.4, 21510.0], [87.5, 21510.0], [87.6, 21510.0], [87.7, 21510.0], [87.8, 21510.0], [87.9, 21510.0], [88.0, 21525.0], [88.1, 21525.0], [88.2, 21525.0], [88.3, 21525.0], [88.4, 21525.0], [88.5, 21525.0], [88.6, 21525.0], [88.7, 21525.0], [88.8, 21525.0], [88.9, 21525.0], [89.0, 21677.0], [89.1, 21677.0], [89.2, 21677.0], [89.3, 21677.0], [89.4, 21677.0], [89.5, 21677.0], [89.6, 21677.0], [89.7, 21677.0], [89.8, 21677.0], [89.9, 21677.0], [90.0, 21791.0], [90.1, 21791.0], [90.2, 21791.0], [90.3, 21791.0], [90.4, 21791.0], [90.5, 21791.0], [90.6, 21791.0], [90.7, 21791.0], [90.8, 21791.0], [90.9, 21791.0], [91.0, 21896.0], [91.1, 21896.0], [91.2, 21896.0], [91.3, 21896.0], [91.4, 21896.0], [91.5, 21896.0], [91.6, 21896.0], [91.7, 21896.0], [91.8, 21896.0], [91.9, 21896.0], [92.0, 22019.0], [92.1, 22019.0], [92.2, 22019.0], [92.3, 22019.0], [92.4, 22019.0], [92.5, 22019.0], [92.6, 22019.0], [92.7, 22019.0], [92.8, 22019.0], [92.9, 22019.0], [93.0, 22034.0], [93.1, 22034.0], [93.2, 22034.0], [93.3, 22034.0], [93.4, 22034.0], [93.5, 22034.0], [93.6, 22034.0], [93.7, 22034.0], [93.8, 22034.0], [93.9, 22034.0], [94.0, 22115.0], [94.1, 22115.0], [94.2, 22115.0], [94.3, 22115.0], [94.4, 22115.0], [94.5, 22115.0], [94.6, 22115.0], [94.7, 22115.0], [94.8, 22115.0], [94.9, 22115.0], [95.0, 22132.0], [95.1, 22132.0], [95.2, 22132.0], [95.3, 22132.0], [95.4, 22132.0], [95.5, 22132.0], [95.6, 22132.0], [95.7, 22132.0], [95.8, 22132.0], [95.9, 22132.0], [96.0, 22202.0], [96.1, 22202.0], [96.2, 22202.0], [96.3, 22202.0], [96.4, 22202.0], [96.5, 22202.0], [96.6, 22202.0], [96.7, 22202.0], [96.8, 22202.0], [96.9, 22202.0], [97.0, 22218.0], [97.1, 22218.0], [97.2, 22218.0], [97.3, 22218.0], [97.4, 22218.0], [97.5, 22218.0], [97.6, 22218.0], [97.7, 22218.0], [97.8, 22218.0], [97.9, 22218.0], [98.0, 22218.0], [98.1, 22218.0], [98.2, 22218.0], [98.3, 22218.0], [98.4, 22218.0], [98.5, 22218.0], [98.6, 22218.0], [98.7, 22218.0], [98.8, 22218.0], [98.9, 22218.0], [99.0, 22312.0], [99.1, 22312.0], [99.2, 22312.0], [99.3, 22312.0], [99.4, 22312.0], [99.5, 22312.0], [99.6, 22312.0], [99.7, 22312.0], [99.8, 22312.0], [99.9, 22312.0]], "isOverall": false, "label": "HTTP Request (Light image)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 6.0, "series": [{"data": [[600.0, 1.0], [800.0, 2.0], [3100.0, 2.0], [3800.0, 2.0], [6000.0, 1.0], [7600.0, 1.0], [9100.0, 4.0], [9500.0, 2.0], [9900.0, 1.0], [10300.0, 1.0], [10500.0, 1.0], [10600.0, 1.0], [11300.0, 2.0], [11400.0, 1.0], [11800.0, 1.0], [12000.0, 1.0], [12300.0, 1.0], [12700.0, 1.0], [12900.0, 1.0], [13100.0, 1.0], [13300.0, 1.0], [13400.0, 1.0], [13500.0, 1.0], [13700.0, 1.0], [13900.0, 1.0], [14100.0, 1.0], [14500.0, 1.0], [14700.0, 1.0], [14900.0, 1.0], [15000.0, 1.0], [15400.0, 1.0], [15500.0, 2.0], [15700.0, 1.0], [15900.0, 1.0], [16300.0, 1.0], [16700.0, 1.0], [16800.0, 3.0], [17200.0, 1.0], [17400.0, 1.0], [17500.0, 1.0], [17600.0, 1.0], [18000.0, 2.0], [18300.0, 1.0], [18500.0, 1.0], [18600.0, 1.0], [18800.0, 2.0], [19000.0, 1.0], [19300.0, 2.0], [19600.0, 1.0], [19800.0, 1.0], [19900.0, 1.0], [20100.0, 1.0], [20400.0, 2.0], [20500.0, 2.0], [20800.0, 1.0], [20900.0, 2.0], [21000.0, 1.0], [21100.0, 1.0], [21200.0, 2.0], [21500.0, 2.0], [21600.0, 1.0], [21700.0, 1.0], [21800.0, 1.0], [22000.0, 2.0], [22100.0, 2.0], [22200.0, 3.0], [22300.0, 1.0], [300.0, 3.0], [400.0, 6.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request (Light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 22300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 19.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 81.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 81.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 19.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 50.789999999999964, "minX": 1.7123577E12, "maxY": 50.789999999999964, "series": [{"data": [[1.7123577E12, 50.789999999999964]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123577E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 351.0, "minX": 1.0, "maxY": 22312.0, "series": [{"data": [[3.0, 22218.0], [4.0, 22202.0], [5.0, 22132.0], [6.0, 22115.0], [7.0, 22034.0], [8.0, 22019.0], [9.0, 21896.0], [10.0, 21791.0], [11.0, 21677.0], [12.0, 21525.0], [13.0, 21510.0], [14.0, 21287.0], [15.0, 21255.0], [16.0, 21176.0], [17.0, 21055.0], [18.0, 20963.0], [19.0, 20951.0], [20.0, 20813.0], [21.0, 20553.0], [22.0, 20510.0], [23.0, 20428.0], [24.0, 20407.0], [25.0, 20188.0], [26.0, 19944.0], [27.0, 19831.0], [28.0, 19665.0], [29.0, 19351.0], [30.0, 19320.0], [31.0, 19020.0], [33.0, 18843.0], [32.0, 18890.0], [35.0, 18518.0], [34.0, 18656.0], [37.0, 18083.0], [36.0, 18341.0], [39.0, 17656.0], [38.0, 18043.0], [41.0, 17445.0], [40.0, 17556.0], [43.0, 16884.0], [42.0, 17268.0], [45.0, 16830.0], [47.0, 16302.0], [46.0, 16777.0], [49.0, 15768.0], [48.0, 15921.0], [51.0, 15532.0], [50.0, 15577.0], [53.0, 15014.0], [52.0, 15439.0], [55.0, 14701.0], [54.0, 14917.0], [57.0, 14157.0], [56.0, 14551.0], [59.0, 13783.0], [58.0, 13954.0], [61.0, 13470.0], [60.0, 13550.0], [63.0, 13129.0], [62.0, 13398.0], [67.0, 12077.0], [66.0, 12389.0], [65.0, 12775.0], [64.0, 12979.0], [71.0, 11365.0], [70.0, 11384.0], [69.0, 11499.0], [68.0, 11830.0], [75.0, 9903.0], [74.0, 10389.0], [73.0, 10515.0], [72.0, 10608.0], [77.0, 9559.0], [83.0, 6050.0], [82.0, 7699.0], [81.0, 9195.0], [87.0, 3148.0], [85.0, 3859.5], [91.0, 553.0], [90.0, 622.0], [89.0, 827.0], [88.0, 844.0], [97.0, 416.5], [100.0, 351.0], [1.0, 22312.0]], "isOverall": false, "label": "HTTP Request (Light image)", "isController": false}, {"data": [[50.789999999999964, 13959.220000000003]], "isOverall": false, "label": "HTTP Request (Light image)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 460.93333333333334, "minX": 1.7123577E12, "maxY": 20487.383333333335, "series": [{"data": [[1.7123577E12, 460.93333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7123577E12, 20487.383333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123577E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 13959.220000000003, "minX": 1.7123577E12, "maxY": 13959.220000000003, "series": [{"data": [[1.7123577E12, 13959.220000000003]], "isOverall": false, "label": "HTTP Request (Light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123577E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 13958.970000000005, "minX": 1.7123577E12, "maxY": 13958.970000000005, "series": [{"data": [[1.7123577E12, 13958.970000000005]], "isOverall": false, "label": "HTTP Request (Light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123577E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 171.25, "minX": 1.7123577E12, "maxY": 171.25, "series": [{"data": [[1.7123577E12, 171.25]], "isOverall": false, "label": "HTTP Request (Light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123577E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7699.0, "minX": 1.7123577E12, "maxY": 22312.0, "series": [{"data": [[1.7123577E12, 22312.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7123577E12, 7699.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7123577E12, 21994.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7123577E12, 22312.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7123577E12, 17445.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7123577E12, 22195.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123577E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 417.0, "minX": 1.0, "maxY": 22034.0, "series": [{"data": [[1.0, 7699.0], [4.0, 12582.0], [8.0, 19604.0], [5.0, 16111.5], [10.0, 21517.5], [3.0, 10515.0], [6.0, 13510.0], [7.0, 22034.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 3503.0], [1.0, 6050.0], [13.0, 417.0], [7.0, 9195.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 417.0, "minX": 1.0, "maxY": 22034.0, "series": [{"data": [[1.0, 7699.0], [4.0, 12581.5], [8.0, 19603.5], [5.0, 16111.5], [10.0, 21517.0], [3.0, 10515.0], [6.0, 13510.0], [7.0, 22034.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 3503.0], [1.0, 6050.0], [13.0, 417.0], [7.0, 9195.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7123577E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7123577E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123577E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.7123577E12, "maxY": 1.35, "series": [{"data": [[1.7123577E12, 1.35]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7123577E12, 0.31666666666666665]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123577E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.7123577E12, "maxY": 1.35, "series": [{"data": [[1.7123577E12, 0.31666666666666665]], "isOverall": false, "label": "HTTP Request (Light image)-failure", "isController": false}, {"data": [[1.7123577E12, 1.35]], "isOverall": false, "label": "HTTP Request (Light image)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123577E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.7123577E12, "maxY": 1.35, "series": [{"data": [[1.7123577E12, 1.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7123577E12, 0.31666666666666665]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123577E12, "title": "Total Transactions Per Second"}},
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

