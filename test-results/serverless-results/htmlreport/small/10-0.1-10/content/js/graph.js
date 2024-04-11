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
        data: {"result": {"minY": 216.0, "minX": 0.0, "maxY": 9956.0, "series": [{"data": [[0.0, 216.0], [0.1, 216.0], [0.2, 216.0], [0.3, 216.0], [0.4, 216.0], [0.5, 216.0], [0.6, 216.0], [0.7, 216.0], [0.8, 216.0], [0.9, 216.0], [1.0, 232.0], [1.1, 232.0], [1.2, 232.0], [1.3, 232.0], [1.4, 232.0], [1.5, 232.0], [1.6, 232.0], [1.7, 232.0], [1.8, 232.0], [1.9, 232.0], [2.0, 232.0], [2.1, 232.0], [2.2, 232.0], [2.3, 232.0], [2.4, 232.0], [2.5, 232.0], [2.6, 232.0], [2.7, 232.0], [2.8, 232.0], [2.9, 232.0], [3.0, 247.0], [3.1, 247.0], [3.2, 247.0], [3.3, 247.0], [3.4, 247.0], [3.5, 247.0], [3.6, 247.0], [3.7, 247.0], [3.8, 247.0], [3.9, 247.0], [4.0, 3494.0], [4.1, 3494.0], [4.2, 3494.0], [4.3, 3494.0], [4.4, 3494.0], [4.5, 3494.0], [4.6, 3494.0], [4.7, 3494.0], [4.8, 3494.0], [4.9, 3494.0], [5.0, 3981.0], [5.1, 3981.0], [5.2, 3981.0], [5.3, 3981.0], [5.4, 3981.0], [5.5, 3981.0], [5.6, 3981.0], [5.7, 3981.0], [5.8, 3981.0], [5.9, 3981.0], [6.0, 5258.0], [6.1, 5258.0], [6.2, 5258.0], [6.3, 5258.0], [6.4, 5258.0], [6.5, 5258.0], [6.6, 5258.0], [6.7, 5258.0], [6.8, 5258.0], [6.9, 5258.0], [7.0, 5306.0], [7.1, 5306.0], [7.2, 5306.0], [7.3, 5306.0], [7.4, 5306.0], [7.5, 5306.0], [7.6, 5306.0], [7.7, 5306.0], [7.8, 5306.0], [7.9, 5306.0], [8.0, 5548.0], [8.1, 5548.0], [8.2, 5548.0], [8.3, 5548.0], [8.4, 5548.0], [8.5, 5548.0], [8.6, 5548.0], [8.7, 5548.0], [8.8, 5548.0], [8.9, 5548.0], [9.0, 5621.0], [9.1, 5621.0], [9.2, 5621.0], [9.3, 5621.0], [9.4, 5621.0], [9.5, 5621.0], [9.6, 5621.0], [9.7, 5621.0], [9.8, 5621.0], [9.9, 5621.0], [10.0, 5817.0], [10.1, 5817.0], [10.2, 5817.0], [10.3, 5817.0], [10.4, 5817.0], [10.5, 5817.0], [10.6, 5817.0], [10.7, 5817.0], [10.8, 5817.0], [10.9, 5817.0], [11.0, 5828.0], [11.1, 5828.0], [11.2, 5828.0], [11.3, 5828.0], [11.4, 5828.0], [11.5, 5828.0], [11.6, 5828.0], [11.7, 5828.0], [11.8, 5828.0], [11.9, 5828.0], [12.0, 5880.0], [12.1, 5880.0], [12.2, 5880.0], [12.3, 5880.0], [12.4, 5880.0], [12.5, 5880.0], [12.6, 5880.0], [12.7, 5880.0], [12.8, 5880.0], [12.9, 5880.0], [13.0, 5934.0], [13.1, 5934.0], [13.2, 5934.0], [13.3, 5934.0], [13.4, 5934.0], [13.5, 5934.0], [13.6, 5934.0], [13.7, 5934.0], [13.8, 5934.0], [13.9, 5934.0], [14.0, 5937.0], [14.1, 5937.0], [14.2, 5937.0], [14.3, 5937.0], [14.4, 5937.0], [14.5, 5937.0], [14.6, 5937.0], [14.7, 5937.0], [14.8, 5937.0], [14.9, 5937.0], [15.0, 5939.0], [15.1, 5939.0], [15.2, 5939.0], [15.3, 5939.0], [15.4, 5939.0], [15.5, 5939.0], [15.6, 5939.0], [15.7, 5939.0], [15.8, 5939.0], [15.9, 5939.0], [16.0, 5939.0], [16.1, 5939.0], [16.2, 5939.0], [16.3, 5939.0], [16.4, 5939.0], [16.5, 5939.0], [16.6, 5939.0], [16.7, 5939.0], [16.8, 5939.0], [16.9, 5939.0], [17.0, 6013.0], [17.1, 6013.0], [17.2, 6013.0], [17.3, 6013.0], [17.4, 6013.0], [17.5, 6013.0], [17.6, 6013.0], [17.7, 6013.0], [17.8, 6013.0], [17.9, 6013.0], [18.0, 6060.0], [18.1, 6060.0], [18.2, 6060.0], [18.3, 6060.0], [18.4, 6060.0], [18.5, 6060.0], [18.6, 6060.0], [18.7, 6060.0], [18.8, 6060.0], [18.9, 6060.0], [19.0, 6072.0], [19.1, 6072.0], [19.2, 6072.0], [19.3, 6072.0], [19.4, 6072.0], [19.5, 6072.0], [19.6, 6072.0], [19.7, 6072.0], [19.8, 6072.0], [19.9, 6072.0], [20.0, 6149.0], [20.1, 6149.0], [20.2, 6149.0], [20.3, 6149.0], [20.4, 6149.0], [20.5, 6149.0], [20.6, 6149.0], [20.7, 6149.0], [20.8, 6149.0], [20.9, 6149.0], [21.0, 6285.0], [21.1, 6285.0], [21.2, 6285.0], [21.3, 6285.0], [21.4, 6285.0], [21.5, 6285.0], [21.6, 6285.0], [21.7, 6285.0], [21.8, 6285.0], [21.9, 6285.0], [22.0, 6481.0], [22.1, 6481.0], [22.2, 6481.0], [22.3, 6481.0], [22.4, 6481.0], [22.5, 6481.0], [22.6, 6481.0], [22.7, 6481.0], [22.8, 6481.0], [22.9, 6481.0], [23.0, 6529.0], [23.1, 6529.0], [23.2, 6529.0], [23.3, 6529.0], [23.4, 6529.0], [23.5, 6529.0], [23.6, 6529.0], [23.7, 6529.0], [23.8, 6529.0], [23.9, 6529.0], [24.0, 6553.0], [24.1, 6553.0], [24.2, 6553.0], [24.3, 6553.0], [24.4, 6553.0], [24.5, 6553.0], [24.6, 6553.0], [24.7, 6553.0], [24.8, 6553.0], [24.9, 6553.0], [25.0, 6555.0], [25.1, 6555.0], [25.2, 6555.0], [25.3, 6555.0], [25.4, 6555.0], [25.5, 6555.0], [25.6, 6555.0], [25.7, 6555.0], [25.8, 6555.0], [25.9, 6555.0], [26.0, 6607.0], [26.1, 6607.0], [26.2, 6607.0], [26.3, 6607.0], [26.4, 6607.0], [26.5, 6607.0], [26.6, 6607.0], [26.7, 6607.0], [26.8, 6607.0], [26.9, 6607.0], [27.0, 6638.0], [27.1, 6638.0], [27.2, 6638.0], [27.3, 6638.0], [27.4, 6638.0], [27.5, 6638.0], [27.6, 6638.0], [27.7, 6638.0], [27.8, 6638.0], [27.9, 6638.0], [28.0, 6743.0], [28.1, 6743.0], [28.2, 6743.0], [28.3, 6743.0], [28.4, 6743.0], [28.5, 6743.0], [28.6, 6743.0], [28.7, 6743.0], [28.8, 6743.0], [28.9, 6743.0], [29.0, 6772.0], [29.1, 6772.0], [29.2, 6772.0], [29.3, 6772.0], [29.4, 6772.0], [29.5, 6772.0], [29.6, 6772.0], [29.7, 6772.0], [29.8, 6772.0], [29.9, 6772.0], [30.0, 7064.0], [30.1, 7064.0], [30.2, 7064.0], [30.3, 7064.0], [30.4, 7064.0], [30.5, 7064.0], [30.6, 7064.0], [30.7, 7064.0], [30.8, 7064.0], [30.9, 7064.0], [31.0, 7079.0], [31.1, 7079.0], [31.2, 7079.0], [31.3, 7079.0], [31.4, 7079.0], [31.5, 7079.0], [31.6, 7079.0], [31.7, 7079.0], [31.8, 7079.0], [31.9, 7079.0], [32.0, 7099.0], [32.1, 7099.0], [32.2, 7099.0], [32.3, 7099.0], [32.4, 7099.0], [32.5, 7099.0], [32.6, 7099.0], [32.7, 7099.0], [32.8, 7099.0], [32.9, 7099.0], [33.0, 7116.0], [33.1, 7116.0], [33.2, 7116.0], [33.3, 7116.0], [33.4, 7116.0], [33.5, 7116.0], [33.6, 7116.0], [33.7, 7116.0], [33.8, 7116.0], [33.9, 7116.0], [34.0, 7194.0], [34.1, 7194.0], [34.2, 7194.0], [34.3, 7194.0], [34.4, 7194.0], [34.5, 7194.0], [34.6, 7194.0], [34.7, 7194.0], [34.8, 7194.0], [34.9, 7194.0], [35.0, 7240.0], [35.1, 7240.0], [35.2, 7240.0], [35.3, 7240.0], [35.4, 7240.0], [35.5, 7240.0], [35.6, 7240.0], [35.7, 7240.0], [35.8, 7240.0], [35.9, 7240.0], [36.0, 7319.0], [36.1, 7319.0], [36.2, 7319.0], [36.3, 7319.0], [36.4, 7319.0], [36.5, 7319.0], [36.6, 7319.0], [36.7, 7319.0], [36.8, 7319.0], [36.9, 7319.0], [37.0, 7390.0], [37.1, 7390.0], [37.2, 7390.0], [37.3, 7390.0], [37.4, 7390.0], [37.5, 7390.0], [37.6, 7390.0], [37.7, 7390.0], [37.8, 7390.0], [37.9, 7390.0], [38.0, 7418.0], [38.1, 7418.0], [38.2, 7418.0], [38.3, 7418.0], [38.4, 7418.0], [38.5, 7418.0], [38.6, 7418.0], [38.7, 7418.0], [38.8, 7418.0], [38.9, 7418.0], [39.0, 7453.0], [39.1, 7453.0], [39.2, 7453.0], [39.3, 7453.0], [39.4, 7453.0], [39.5, 7453.0], [39.6, 7453.0], [39.7, 7453.0], [39.8, 7453.0], [39.9, 7453.0], [40.0, 7477.0], [40.1, 7477.0], [40.2, 7477.0], [40.3, 7477.0], [40.4, 7477.0], [40.5, 7477.0], [40.6, 7477.0], [40.7, 7477.0], [40.8, 7477.0], [40.9, 7477.0], [41.0, 7480.0], [41.1, 7480.0], [41.2, 7480.0], [41.3, 7480.0], [41.4, 7480.0], [41.5, 7480.0], [41.6, 7480.0], [41.7, 7480.0], [41.8, 7480.0], [41.9, 7480.0], [42.0, 7493.0], [42.1, 7493.0], [42.2, 7493.0], [42.3, 7493.0], [42.4, 7493.0], [42.5, 7493.0], [42.6, 7493.0], [42.7, 7493.0], [42.8, 7493.0], [42.9, 7493.0], [43.0, 7617.0], [43.1, 7617.0], [43.2, 7617.0], [43.3, 7617.0], [43.4, 7617.0], [43.5, 7617.0], [43.6, 7617.0], [43.7, 7617.0], [43.8, 7617.0], [43.9, 7617.0], [44.0, 7664.0], [44.1, 7664.0], [44.2, 7664.0], [44.3, 7664.0], [44.4, 7664.0], [44.5, 7664.0], [44.6, 7664.0], [44.7, 7664.0], [44.8, 7664.0], [44.9, 7664.0], [45.0, 7679.0], [45.1, 7679.0], [45.2, 7679.0], [45.3, 7679.0], [45.4, 7679.0], [45.5, 7679.0], [45.6, 7679.0], [45.7, 7679.0], [45.8, 7679.0], [45.9, 7679.0], [46.0, 7784.0], [46.1, 7784.0], [46.2, 7784.0], [46.3, 7784.0], [46.4, 7784.0], [46.5, 7784.0], [46.6, 7784.0], [46.7, 7784.0], [46.8, 7784.0], [46.9, 7784.0], [47.0, 7789.0], [47.1, 7789.0], [47.2, 7789.0], [47.3, 7789.0], [47.4, 7789.0], [47.5, 7789.0], [47.6, 7789.0], [47.7, 7789.0], [47.8, 7789.0], [47.9, 7789.0], [48.0, 7789.0], [48.1, 7789.0], [48.2, 7789.0], [48.3, 7789.0], [48.4, 7789.0], [48.5, 7789.0], [48.6, 7789.0], [48.7, 7789.0], [48.8, 7789.0], [48.9, 7789.0], [49.0, 7804.0], [49.1, 7804.0], [49.2, 7804.0], [49.3, 7804.0], [49.4, 7804.0], [49.5, 7804.0], [49.6, 7804.0], [49.7, 7804.0], [49.8, 7804.0], [49.9, 7804.0], [50.0, 7830.0], [50.1, 7830.0], [50.2, 7830.0], [50.3, 7830.0], [50.4, 7830.0], [50.5, 7830.0], [50.6, 7830.0], [50.7, 7830.0], [50.8, 7830.0], [50.9, 7830.0], [51.0, 7840.0], [51.1, 7840.0], [51.2, 7840.0], [51.3, 7840.0], [51.4, 7840.0], [51.5, 7840.0], [51.6, 7840.0], [51.7, 7840.0], [51.8, 7840.0], [51.9, 7840.0], [52.0, 7886.0], [52.1, 7886.0], [52.2, 7886.0], [52.3, 7886.0], [52.4, 7886.0], [52.5, 7886.0], [52.6, 7886.0], [52.7, 7886.0], [52.8, 7886.0], [52.9, 7886.0], [53.0, 7899.0], [53.1, 7899.0], [53.2, 7899.0], [53.3, 7899.0], [53.4, 7899.0], [53.5, 7899.0], [53.6, 7899.0], [53.7, 7899.0], [53.8, 7899.0], [53.9, 7899.0], [54.0, 7913.0], [54.1, 7913.0], [54.2, 7913.0], [54.3, 7913.0], [54.4, 7913.0], [54.5, 7913.0], [54.6, 7913.0], [54.7, 7913.0], [54.8, 7913.0], [54.9, 7913.0], [55.0, 7969.0], [55.1, 7969.0], [55.2, 7969.0], [55.3, 7969.0], [55.4, 7969.0], [55.5, 7969.0], [55.6, 7969.0], [55.7, 7969.0], [55.8, 7969.0], [55.9, 7969.0], [56.0, 7988.0], [56.1, 7988.0], [56.2, 7988.0], [56.3, 7988.0], [56.4, 7988.0], [56.5, 7988.0], [56.6, 7988.0], [56.7, 7988.0], [56.8, 7988.0], [56.9, 7988.0], [57.0, 8024.0], [57.1, 8024.0], [57.2, 8024.0], [57.3, 8024.0], [57.4, 8024.0], [57.5, 8024.0], [57.6, 8024.0], [57.7, 8024.0], [57.8, 8024.0], [57.9, 8024.0], [58.0, 8069.0], [58.1, 8069.0], [58.2, 8069.0], [58.3, 8069.0], [58.4, 8069.0], [58.5, 8069.0], [58.6, 8069.0], [58.7, 8069.0], [58.8, 8069.0], [58.9, 8069.0], [59.0, 8133.0], [59.1, 8133.0], [59.2, 8133.0], [59.3, 8133.0], [59.4, 8133.0], [59.5, 8133.0], [59.6, 8133.0], [59.7, 8133.0], [59.8, 8133.0], [59.9, 8133.0], [60.0, 8178.0], [60.1, 8178.0], [60.2, 8178.0], [60.3, 8178.0], [60.4, 8178.0], [60.5, 8178.0], [60.6, 8178.0], [60.7, 8178.0], [60.8, 8178.0], [60.9, 8178.0], [61.0, 8308.0], [61.1, 8308.0], [61.2, 8308.0], [61.3, 8308.0], [61.4, 8308.0], [61.5, 8308.0], [61.6, 8308.0], [61.7, 8308.0], [61.8, 8308.0], [61.9, 8308.0], [62.0, 8335.0], [62.1, 8335.0], [62.2, 8335.0], [62.3, 8335.0], [62.4, 8335.0], [62.5, 8335.0], [62.6, 8335.0], [62.7, 8335.0], [62.8, 8335.0], [62.9, 8335.0], [63.0, 8351.0], [63.1, 8351.0], [63.2, 8351.0], [63.3, 8351.0], [63.4, 8351.0], [63.5, 8351.0], [63.6, 8351.0], [63.7, 8351.0], [63.8, 8351.0], [63.9, 8351.0], [64.0, 8354.0], [64.1, 8354.0], [64.2, 8354.0], [64.3, 8354.0], [64.4, 8354.0], [64.5, 8354.0], [64.6, 8354.0], [64.7, 8354.0], [64.8, 8354.0], [64.9, 8354.0], [65.0, 8415.0], [65.1, 8415.0], [65.2, 8415.0], [65.3, 8415.0], [65.4, 8415.0], [65.5, 8415.0], [65.6, 8415.0], [65.7, 8415.0], [65.8, 8415.0], [65.9, 8415.0], [66.0, 8499.0], [66.1, 8499.0], [66.2, 8499.0], [66.3, 8499.0], [66.4, 8499.0], [66.5, 8499.0], [66.6, 8499.0], [66.7, 8499.0], [66.8, 8499.0], [66.9, 8499.0], [67.0, 8506.0], [67.1, 8506.0], [67.2, 8506.0], [67.3, 8506.0], [67.4, 8506.0], [67.5, 8506.0], [67.6, 8506.0], [67.7, 8506.0], [67.8, 8506.0], [67.9, 8506.0], [68.0, 8523.0], [68.1, 8523.0], [68.2, 8523.0], [68.3, 8523.0], [68.4, 8523.0], [68.5, 8523.0], [68.6, 8523.0], [68.7, 8523.0], [68.8, 8523.0], [68.9, 8523.0], [69.0, 8545.0], [69.1, 8545.0], [69.2, 8545.0], [69.3, 8545.0], [69.4, 8545.0], [69.5, 8545.0], [69.6, 8545.0], [69.7, 8545.0], [69.8, 8545.0], [69.9, 8545.0], [70.0, 8573.0], [70.1, 8573.0], [70.2, 8573.0], [70.3, 8573.0], [70.4, 8573.0], [70.5, 8573.0], [70.6, 8573.0], [70.7, 8573.0], [70.8, 8573.0], [70.9, 8573.0], [71.0, 8601.0], [71.1, 8601.0], [71.2, 8601.0], [71.3, 8601.0], [71.4, 8601.0], [71.5, 8601.0], [71.6, 8601.0], [71.7, 8601.0], [71.8, 8601.0], [71.9, 8601.0], [72.0, 8612.0], [72.1, 8612.0], [72.2, 8612.0], [72.3, 8612.0], [72.4, 8612.0], [72.5, 8612.0], [72.6, 8612.0], [72.7, 8612.0], [72.8, 8612.0], [72.9, 8612.0], [73.0, 8656.0], [73.1, 8656.0], [73.2, 8656.0], [73.3, 8656.0], [73.4, 8656.0], [73.5, 8656.0], [73.6, 8656.0], [73.7, 8656.0], [73.8, 8656.0], [73.9, 8656.0], [74.0, 8695.0], [74.1, 8695.0], [74.2, 8695.0], [74.3, 8695.0], [74.4, 8695.0], [74.5, 8695.0], [74.6, 8695.0], [74.7, 8695.0], [74.8, 8695.0], [74.9, 8695.0], [75.0, 8738.0], [75.1, 8738.0], [75.2, 8738.0], [75.3, 8738.0], [75.4, 8738.0], [75.5, 8738.0], [75.6, 8738.0], [75.7, 8738.0], [75.8, 8738.0], [75.9, 8738.0], [76.0, 8739.0], [76.1, 8739.0], [76.2, 8739.0], [76.3, 8739.0], [76.4, 8739.0], [76.5, 8739.0], [76.6, 8739.0], [76.7, 8739.0], [76.8, 8739.0], [76.9, 8739.0], [77.0, 8769.0], [77.1, 8769.0], [77.2, 8769.0], [77.3, 8769.0], [77.4, 8769.0], [77.5, 8769.0], [77.6, 8769.0], [77.7, 8769.0], [77.8, 8769.0], [77.9, 8769.0], [78.0, 8781.0], [78.1, 8781.0], [78.2, 8781.0], [78.3, 8781.0], [78.4, 8781.0], [78.5, 8781.0], [78.6, 8781.0], [78.7, 8781.0], [78.8, 8781.0], [78.9, 8781.0], [79.0, 8829.0], [79.1, 8829.0], [79.2, 8829.0], [79.3, 8829.0], [79.4, 8829.0], [79.5, 8829.0], [79.6, 8829.0], [79.7, 8829.0], [79.8, 8829.0], [79.9, 8829.0], [80.0, 8847.0], [80.1, 8847.0], [80.2, 8847.0], [80.3, 8847.0], [80.4, 8847.0], [80.5, 8847.0], [80.6, 8847.0], [80.7, 8847.0], [80.8, 8847.0], [80.9, 8847.0], [81.0, 8858.0], [81.1, 8858.0], [81.2, 8858.0], [81.3, 8858.0], [81.4, 8858.0], [81.5, 8858.0], [81.6, 8858.0], [81.7, 8858.0], [81.8, 8858.0], [81.9, 8858.0], [82.0, 8892.0], [82.1, 8892.0], [82.2, 8892.0], [82.3, 8892.0], [82.4, 8892.0], [82.5, 8892.0], [82.6, 8892.0], [82.7, 8892.0], [82.8, 8892.0], [82.9, 8892.0], [83.0, 8978.0], [83.1, 8978.0], [83.2, 8978.0], [83.3, 8978.0], [83.4, 8978.0], [83.5, 8978.0], [83.6, 8978.0], [83.7, 8978.0], [83.8, 8978.0], [83.9, 8978.0], [84.0, 9003.0], [84.1, 9003.0], [84.2, 9003.0], [84.3, 9003.0], [84.4, 9003.0], [84.5, 9003.0], [84.6, 9003.0], [84.7, 9003.0], [84.8, 9003.0], [84.9, 9003.0], [85.0, 9074.0], [85.1, 9074.0], [85.2, 9074.0], [85.3, 9074.0], [85.4, 9074.0], [85.5, 9074.0], [85.6, 9074.0], [85.7, 9074.0], [85.8, 9074.0], [85.9, 9074.0], [86.0, 9077.0], [86.1, 9077.0], [86.2, 9077.0], [86.3, 9077.0], [86.4, 9077.0], [86.5, 9077.0], [86.6, 9077.0], [86.7, 9077.0], [86.8, 9077.0], [86.9, 9077.0], [87.0, 9108.0], [87.1, 9108.0], [87.2, 9108.0], [87.3, 9108.0], [87.4, 9108.0], [87.5, 9108.0], [87.6, 9108.0], [87.7, 9108.0], [87.8, 9108.0], [87.9, 9108.0], [88.0, 9114.0], [88.1, 9114.0], [88.2, 9114.0], [88.3, 9114.0], [88.4, 9114.0], [88.5, 9114.0], [88.6, 9114.0], [88.7, 9114.0], [88.8, 9114.0], [88.9, 9114.0], [89.0, 9186.0], [89.1, 9186.0], [89.2, 9186.0], [89.3, 9186.0], [89.4, 9186.0], [89.5, 9186.0], [89.6, 9186.0], [89.7, 9186.0], [89.8, 9186.0], [89.9, 9186.0], [90.0, 9200.0], [90.1, 9200.0], [90.2, 9200.0], [90.3, 9200.0], [90.4, 9200.0], [90.5, 9200.0], [90.6, 9200.0], [90.7, 9200.0], [90.8, 9200.0], [90.9, 9200.0], [91.0, 9277.0], [91.1, 9277.0], [91.2, 9277.0], [91.3, 9277.0], [91.4, 9277.0], [91.5, 9277.0], [91.6, 9277.0], [91.7, 9277.0], [91.8, 9277.0], [91.9, 9277.0], [92.0, 9318.0], [92.1, 9318.0], [92.2, 9318.0], [92.3, 9318.0], [92.4, 9318.0], [92.5, 9318.0], [92.6, 9318.0], [92.7, 9318.0], [92.8, 9318.0], [92.9, 9318.0], [93.0, 9319.0], [93.1, 9319.0], [93.2, 9319.0], [93.3, 9319.0], [93.4, 9319.0], [93.5, 9319.0], [93.6, 9319.0], [93.7, 9319.0], [93.8, 9319.0], [93.9, 9319.0], [94.0, 9413.0], [94.1, 9413.0], [94.2, 9413.0], [94.3, 9413.0], [94.4, 9413.0], [94.5, 9413.0], [94.6, 9413.0], [94.7, 9413.0], [94.8, 9413.0], [94.9, 9413.0], [95.0, 9423.0], [95.1, 9423.0], [95.2, 9423.0], [95.3, 9423.0], [95.4, 9423.0], [95.5, 9423.0], [95.6, 9423.0], [95.7, 9423.0], [95.8, 9423.0], [95.9, 9423.0], [96.0, 9429.0], [96.1, 9429.0], [96.2, 9429.0], [96.3, 9429.0], [96.4, 9429.0], [96.5, 9429.0], [96.6, 9429.0], [96.7, 9429.0], [96.8, 9429.0], [96.9, 9429.0], [97.0, 9464.0], [97.1, 9464.0], [97.2, 9464.0], [97.3, 9464.0], [97.4, 9464.0], [97.5, 9464.0], [97.6, 9464.0], [97.7, 9464.0], [97.8, 9464.0], [97.9, 9464.0], [98.0, 9822.0], [98.1, 9822.0], [98.2, 9822.0], [98.3, 9822.0], [98.4, 9822.0], [98.5, 9822.0], [98.6, 9822.0], [98.7, 9822.0], [98.8, 9822.0], [98.9, 9822.0], [99.0, 9956.0], [99.1, 9956.0], [99.2, 9956.0], [99.3, 9956.0], [99.4, 9956.0], [99.5, 9956.0], [99.6, 9956.0], [99.7, 9956.0], [99.8, 9956.0], [99.9, 9956.0]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 5.0, "series": [{"data": [[8300.0, 4.0], [8500.0, 4.0], [8600.0, 4.0], [8700.0, 4.0], [8400.0, 2.0], [8800.0, 4.0], [9100.0, 3.0], [9000.0, 3.0], [8900.0, 1.0], [9200.0, 2.0], [9400.0, 4.0], [9300.0, 2.0], [9900.0, 1.0], [9800.0, 1.0], [200.0, 4.0], [3400.0, 1.0], [3900.0, 1.0], [5300.0, 1.0], [5200.0, 1.0], [5500.0, 1.0], [5600.0, 1.0], [5800.0, 3.0], [6000.0, 3.0], [6100.0, 1.0], [5900.0, 4.0], [6200.0, 1.0], [6400.0, 1.0], [6600.0, 2.0], [6500.0, 3.0], [6700.0, 2.0], [7100.0, 2.0], [7000.0, 3.0], [7300.0, 2.0], [7400.0, 5.0], [7200.0, 1.0], [7600.0, 3.0], [7700.0, 3.0], [7800.0, 5.0], [7900.0, 3.0], [8000.0, 2.0], [8100.0, 2.0]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 96.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 96.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 4.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.333333333333332, "minX": 1.71244236E12, "maxY": 10.0, "series": [{"data": [[1.71244242E12, 8.333333333333332], [1.71244236E12, 10.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244242E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3737.5, "minX": 2.0, "maxY": 8100.666666666666, "series": [{"data": [[8.0, 8100.666666666666], [4.0, 5939.0], [2.0, 3737.5], [9.0, 7397.0], [10.0, 7542.132530120483], [6.0, 5828.666666666667], [7.0, 6448.0]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}, {"data": [[9.399999999999999, 7391.300000000001]], "isOverall": false, "label": "HTTP Request (light image)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 143.4, "minX": 1.71244236E12, "maxY": 13116.5, "series": [{"data": [[1.71244242E12, 143.4], [1.71244236E12, 269.8666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71244242E12, 7377.0], [1.71244236E12, 13116.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244242E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 7360.138888888889, "minX": 1.71244236E12, "maxY": 7408.828125000001, "series": [{"data": [[1.71244242E12, 7360.138888888889], [1.71244236E12, 7408.828125000001]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244242E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 7360.0277777777765, "minX": 1.71244236E12, "maxY": 7408.734374999998, "series": [{"data": [[1.71244242E12, 7360.0277777777765], [1.71244236E12, 7408.734374999998]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244242E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 17.265625, "minX": 1.71244236E12, "maxY": 23.944444444444446, "series": [{"data": [[1.71244242E12, 23.944444444444446], [1.71244236E12, 17.265625]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244242E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3494.0, "minX": 1.71244236E12, "maxY": 9956.0, "series": [{"data": [[1.71244242E12, 9822.0], [1.71244236E12, 9956.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71244242E12, 3494.0], [1.71244236E12, 5306.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71244242E12, 9350.2], [1.71244236E12, 9110.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71244242E12, 9822.0], [1.71244236E12, 9956.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71244242E12, 7306.0], [1.71244236E12, 8006.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71244242E12, 9487.949999999999], [1.71244236E12, 9408.25]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244242E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 232.0, "minX": 1.0, "maxY": 8060.5, "series": [{"data": [[2.0, 7863.0], [1.0, 8060.5], [4.0, 7280.5], [3.0, 7876.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 232.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 232.0, "minX": 1.0, "maxY": 8060.5, "series": [{"data": [[2.0, 7863.0], [1.0, 8060.5], [4.0, 7280.5], [3.0, 7876.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 232.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.71244236E12, "maxY": 1.2333333333333334, "series": [{"data": [[1.71244242E12, 0.43333333333333335], [1.71244236E12, 1.2333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244242E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.71244236E12, "maxY": 1.0, "series": [{"data": [[1.71244242E12, 0.6], [1.71244236E12, 1.0]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71244236E12, 0.06666666666666667]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244242E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.71244236E12, "maxY": 1.0, "series": [{"data": [[1.71244236E12, 0.06666666666666667]], "isOverall": false, "label": "HTTP Request (light image)-failure", "isController": false}, {"data": [[1.71244242E12, 0.6], [1.71244236E12, 1.0]], "isOverall": false, "label": "HTTP Request (light image)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244242E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.71244236E12, "maxY": 1.0, "series": [{"data": [[1.71244242E12, 0.6], [1.71244236E12, 1.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71244236E12, 0.06666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244242E12, "title": "Total Transactions Per Second"}},
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

