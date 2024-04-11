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
        data: {"result": {"minY": 3528.0, "minX": 0.0, "maxY": 32766.0, "series": [{"data": [[0.0, 3528.0], [0.1, 3528.0], [0.2, 3528.0], [0.3, 3528.0], [0.4, 3528.0], [0.5, 3528.0], [0.6, 3528.0], [0.7, 3528.0], [0.8, 3528.0], [0.9, 3528.0], [1.0, 3528.0], [1.1, 3528.0], [1.2, 3528.0], [1.3, 3528.0], [1.4, 3528.0], [1.5, 3528.0], [1.6, 3528.0], [1.7, 3528.0], [1.8, 3528.0], [1.9, 3528.0], [2.0, 3528.0], [2.1, 3528.0], [2.2, 3528.0], [2.3, 3528.0], [2.4, 3528.0], [2.5, 3528.0], [2.6, 3528.0], [2.7, 3528.0], [2.8, 3528.0], [2.9, 3528.0], [3.0, 3528.0], [3.1, 3528.0], [3.2, 3528.0], [3.3, 3528.0], [3.4, 3528.0], [3.5, 3528.0], [3.6, 3528.0], [3.7, 3528.0], [3.8, 3528.0], [3.9, 3528.0], [4.0, 3528.0], [4.1, 3528.0], [4.2, 3528.0], [4.3, 3528.0], [4.4, 3528.0], [4.5, 3528.0], [4.6, 3528.0], [4.7, 3528.0], [4.8, 3528.0], [4.9, 3528.0], [5.0, 3528.0], [5.1, 3528.0], [5.2, 3528.0], [5.3, 3528.0], [5.4, 3528.0], [5.5, 3528.0], [5.6, 3528.0], [5.7, 3528.0], [5.8, 3528.0], [5.9, 3528.0], [6.0, 3528.0], [6.1, 3528.0], [6.2, 3528.0], [6.3, 3528.0], [6.4, 3528.0], [6.5, 3528.0], [6.6, 3528.0], [6.7, 3528.0], [6.8, 3528.0], [6.9, 3528.0], [7.0, 3528.0], [7.1, 3528.0], [7.2, 3528.0], [7.3, 3528.0], [7.4, 3528.0], [7.5, 3528.0], [7.6, 3528.0], [7.7, 3528.0], [7.8, 3528.0], [7.9, 3528.0], [8.0, 3528.0], [8.1, 3528.0], [8.2, 3528.0], [8.3, 3528.0], [8.4, 3528.0], [8.5, 3528.0], [8.6, 3528.0], [8.7, 3528.0], [8.8, 3528.0], [8.9, 3528.0], [9.0, 3528.0], [9.1, 3528.0], [9.2, 3528.0], [9.3, 3528.0], [9.4, 3528.0], [9.5, 3528.0], [9.6, 3528.0], [9.7, 3528.0], [9.8, 3528.0], [9.9, 3528.0], [10.0, 3528.0], [10.1, 3528.0], [10.2, 3528.0], [10.3, 3528.0], [10.4, 3528.0], [10.5, 3528.0], [10.6, 3528.0], [10.7, 3528.0], [10.8, 3528.0], [10.9, 3528.0], [11.0, 3528.0], [11.1, 3528.0], [11.2, 3528.0], [11.3, 3528.0], [11.4, 3528.0], [11.5, 3528.0], [11.6, 3528.0], [11.7, 3528.0], [11.8, 3528.0], [11.9, 3528.0], [12.0, 3535.0], [12.1, 3535.0], [12.2, 3535.0], [12.3, 3535.0], [12.4, 3535.0], [12.5, 3535.0], [12.6, 3535.0], [12.7, 3535.0], [12.8, 3535.0], [12.9, 3535.0], [13.0, 3535.0], [13.1, 3535.0], [13.2, 3535.0], [13.3, 3535.0], [13.4, 3535.0], [13.5, 3535.0], [13.6, 3535.0], [13.7, 3535.0], [13.8, 3535.0], [13.9, 3535.0], [14.0, 3535.0], [14.1, 3535.0], [14.2, 3535.0], [14.3, 3535.0], [14.4, 3535.0], [14.5, 3535.0], [14.6, 3535.0], [14.7, 3535.0], [14.8, 3535.0], [14.9, 3535.0], [15.0, 3535.0], [15.1, 3535.0], [15.2, 3535.0], [15.3, 3535.0], [15.4, 3535.0], [15.5, 3535.0], [15.6, 3535.0], [15.7, 3535.0], [15.8, 3535.0], [15.9, 3535.0], [16.0, 3651.0], [16.1, 3651.0], [16.2, 3651.0], [16.3, 3651.0], [16.4, 3651.0], [16.5, 3651.0], [16.6, 3651.0], [16.7, 3651.0], [16.8, 3651.0], [16.9, 3651.0], [17.0, 3651.0], [17.1, 3651.0], [17.2, 3651.0], [17.3, 3651.0], [17.4, 3651.0], [17.5, 3651.0], [17.6, 3651.0], [17.7, 3651.0], [17.8, 3651.0], [17.9, 3651.0], [18.0, 22656.0], [18.1, 22656.0], [18.2, 22656.0], [18.3, 22656.0], [18.4, 22656.0], [18.5, 22656.0], [18.6, 22656.0], [18.7, 22656.0], [18.8, 22656.0], [18.9, 22656.0], [19.0, 22656.0], [19.1, 22656.0], [19.2, 22656.0], [19.3, 22656.0], [19.4, 22656.0], [19.5, 22656.0], [19.6, 22656.0], [19.7, 22656.0], [19.8, 22656.0], [19.9, 22656.0], [20.0, 22962.0], [20.1, 22962.0], [20.2, 22962.0], [20.3, 22962.0], [20.4, 22962.0], [20.5, 22962.0], [20.6, 22962.0], [20.7, 22962.0], [20.8, 22962.0], [20.9, 22962.0], [21.0, 22962.0], [21.1, 22962.0], [21.2, 22962.0], [21.3, 22962.0], [21.4, 22962.0], [21.5, 22962.0], [21.6, 22962.0], [21.7, 22962.0], [21.8, 22962.0], [21.9, 22962.0], [22.0, 23666.0], [22.1, 23666.0], [22.2, 23666.0], [22.3, 23666.0], [22.4, 23666.0], [22.5, 23666.0], [22.6, 23666.0], [22.7, 23666.0], [22.8, 23666.0], [22.9, 23666.0], [23.0, 23666.0], [23.1, 23666.0], [23.2, 23666.0], [23.3, 23666.0], [23.4, 23666.0], [23.5, 23666.0], [23.6, 23666.0], [23.7, 23666.0], [23.8, 23666.0], [23.9, 23666.0], [24.0, 25215.0], [24.1, 25215.0], [24.2, 25215.0], [24.3, 25215.0], [24.4, 25215.0], [24.5, 25215.0], [24.6, 25215.0], [24.7, 25215.0], [24.8, 25215.0], [24.9, 25215.0], [25.0, 25215.0], [25.1, 25215.0], [25.2, 25215.0], [25.3, 25215.0], [25.4, 25215.0], [25.5, 25215.0], [25.6, 25215.0], [25.7, 25215.0], [25.8, 25215.0], [25.9, 25215.0], [26.0, 25522.0], [26.1, 25522.0], [26.2, 25522.0], [26.3, 25522.0], [26.4, 25522.0], [26.5, 25522.0], [26.6, 25522.0], [26.7, 25522.0], [26.8, 25522.0], [26.9, 25522.0], [27.0, 25522.0], [27.1, 25522.0], [27.2, 25522.0], [27.3, 25522.0], [27.4, 25522.0], [27.5, 25522.0], [27.6, 25522.0], [27.7, 25522.0], [27.8, 25522.0], [27.9, 25522.0], [28.0, 25522.0], [28.1, 25522.0], [28.2, 25522.0], [28.3, 25522.0], [28.4, 25522.0], [28.5, 25522.0], [28.6, 25522.0], [28.7, 25522.0], [28.8, 25522.0], [28.9, 25522.0], [29.0, 25522.0], [29.1, 25522.0], [29.2, 25522.0], [29.3, 25522.0], [29.4, 25522.0], [29.5, 25522.0], [29.6, 25522.0], [29.7, 25522.0], [29.8, 25522.0], [29.9, 25522.0], [30.0, 26446.0], [30.1, 26446.0], [30.2, 26446.0], [30.3, 26446.0], [30.4, 26446.0], [30.5, 26446.0], [30.6, 26446.0], [30.7, 26446.0], [30.8, 26446.0], [30.9, 26446.0], [31.0, 26446.0], [31.1, 26446.0], [31.2, 26446.0], [31.3, 26446.0], [31.4, 26446.0], [31.5, 26446.0], [31.6, 26446.0], [31.7, 26446.0], [31.8, 26446.0], [31.9, 26446.0], [32.0, 26751.0], [32.1, 26751.0], [32.2, 26751.0], [32.3, 26751.0], [32.4, 26751.0], [32.5, 26751.0], [32.6, 26751.0], [32.7, 26751.0], [32.8, 26751.0], [32.9, 26751.0], [33.0, 26751.0], [33.1, 26751.0], [33.2, 26751.0], [33.3, 26751.0], [33.4, 26751.0], [33.5, 26751.0], [33.6, 26751.0], [33.7, 26751.0], [33.8, 26751.0], [33.9, 26751.0], [34.0, 26936.0], [34.1, 26936.0], [34.2, 26936.0], [34.3, 26936.0], [34.4, 26936.0], [34.5, 26936.0], [34.6, 26936.0], [34.7, 26936.0], [34.8, 26936.0], [34.9, 26936.0], [35.0, 26936.0], [35.1, 26936.0], [35.2, 26936.0], [35.3, 26936.0], [35.4, 26936.0], [35.5, 26936.0], [35.6, 26936.0], [35.7, 26936.0], [35.8, 26936.0], [35.9, 26936.0], [36.0, 26976.0], [36.1, 26976.0], [36.2, 26976.0], [36.3, 26976.0], [36.4, 26976.0], [36.5, 26976.0], [36.6, 26976.0], [36.7, 26976.0], [36.8, 26976.0], [36.9, 26976.0], [37.0, 26976.0], [37.1, 26976.0], [37.2, 26976.0], [37.3, 26976.0], [37.4, 26976.0], [37.5, 26976.0], [37.6, 26976.0], [37.7, 26976.0], [37.8, 26976.0], [37.9, 26976.0], [38.0, 27151.0], [38.1, 27151.0], [38.2, 27151.0], [38.3, 27151.0], [38.4, 27151.0], [38.5, 27151.0], [38.6, 27151.0], [38.7, 27151.0], [38.8, 27151.0], [38.9, 27151.0], [39.0, 27151.0], [39.1, 27151.0], [39.2, 27151.0], [39.3, 27151.0], [39.4, 27151.0], [39.5, 27151.0], [39.6, 27151.0], [39.7, 27151.0], [39.8, 27151.0], [39.9, 27151.0], [40.0, 27151.0], [40.1, 27151.0], [40.2, 27151.0], [40.3, 27151.0], [40.4, 27151.0], [40.5, 27151.0], [40.6, 27151.0], [40.7, 27151.0], [40.8, 27151.0], [40.9, 27151.0], [41.0, 27151.0], [41.1, 27151.0], [41.2, 27151.0], [41.3, 27151.0], [41.4, 27151.0], [41.5, 27151.0], [41.6, 27151.0], [41.7, 27151.0], [41.8, 27151.0], [41.9, 27151.0], [42.0, 27570.0], [42.1, 27570.0], [42.2, 27570.0], [42.3, 27570.0], [42.4, 27570.0], [42.5, 27570.0], [42.6, 27570.0], [42.7, 27570.0], [42.8, 27570.0], [42.9, 27570.0], [43.0, 27570.0], [43.1, 27570.0], [43.2, 27570.0], [43.3, 27570.0], [43.4, 27570.0], [43.5, 27570.0], [43.6, 27570.0], [43.7, 27570.0], [43.8, 27570.0], [43.9, 27570.0], [44.0, 28401.0], [44.1, 28401.0], [44.2, 28401.0], [44.3, 28401.0], [44.4, 28401.0], [44.5, 28401.0], [44.6, 28401.0], [44.7, 28401.0], [44.8, 28401.0], [44.9, 28401.0], [45.0, 28401.0], [45.1, 28401.0], [45.2, 28401.0], [45.3, 28401.0], [45.4, 28401.0], [45.5, 28401.0], [45.6, 28401.0], [45.7, 28401.0], [45.8, 28401.0], [45.9, 28401.0], [46.0, 28725.0], [46.1, 28725.0], [46.2, 28725.0], [46.3, 28725.0], [46.4, 28725.0], [46.5, 28725.0], [46.6, 28725.0], [46.7, 28725.0], [46.8, 28725.0], [46.9, 28725.0], [47.0, 28725.0], [47.1, 28725.0], [47.2, 28725.0], [47.3, 28725.0], [47.4, 28725.0], [47.5, 28725.0], [47.6, 28725.0], [47.7, 28725.0], [47.8, 28725.0], [47.9, 28725.0], [48.0, 28726.0], [48.1, 28726.0], [48.2, 28726.0], [48.3, 28726.0], [48.4, 28726.0], [48.5, 28726.0], [48.6, 28726.0], [48.7, 28726.0], [48.8, 28726.0], [48.9, 28726.0], [49.0, 28726.0], [49.1, 28726.0], [49.2, 28726.0], [49.3, 28726.0], [49.4, 28726.0], [49.5, 28726.0], [49.6, 28726.0], [49.7, 28726.0], [49.8, 28726.0], [49.9, 28726.0], [50.0, 28975.0], [50.1, 28975.0], [50.2, 28975.0], [50.3, 28975.0], [50.4, 28975.0], [50.5, 28975.0], [50.6, 28975.0], [50.7, 28975.0], [50.8, 28975.0], [50.9, 28975.0], [51.0, 28975.0], [51.1, 28975.0], [51.2, 28975.0], [51.3, 28975.0], [51.4, 28975.0], [51.5, 28975.0], [51.6, 28975.0], [51.7, 28975.0], [51.8, 28975.0], [51.9, 28975.0], [52.0, 29036.0], [52.1, 29036.0], [52.2, 29036.0], [52.3, 29036.0], [52.4, 29036.0], [52.5, 29036.0], [52.6, 29036.0], [52.7, 29036.0], [52.8, 29036.0], [52.9, 29036.0], [53.0, 29036.0], [53.1, 29036.0], [53.2, 29036.0], [53.3, 29036.0], [53.4, 29036.0], [53.5, 29036.0], [53.6, 29036.0], [53.7, 29036.0], [53.8, 29036.0], [53.9, 29036.0], [54.0, 29311.0], [54.1, 29311.0], [54.2, 29311.0], [54.3, 29311.0], [54.4, 29311.0], [54.5, 29311.0], [54.6, 29311.0], [54.7, 29311.0], [54.8, 29311.0], [54.9, 29311.0], [55.0, 29311.0], [55.1, 29311.0], [55.2, 29311.0], [55.3, 29311.0], [55.4, 29311.0], [55.5, 29311.0], [55.6, 29311.0], [55.7, 29311.0], [55.8, 29311.0], [55.9, 29311.0], [56.0, 29567.0], [56.1, 29567.0], [56.2, 29567.0], [56.3, 29567.0], [56.4, 29567.0], [56.5, 29567.0], [56.6, 29567.0], [56.7, 29567.0], [56.8, 29567.0], [56.9, 29567.0], [57.0, 29567.0], [57.1, 29567.0], [57.2, 29567.0], [57.3, 29567.0], [57.4, 29567.0], [57.5, 29567.0], [57.6, 29567.0], [57.7, 29567.0], [57.8, 29567.0], [57.9, 29567.0], [58.0, 30438.0], [58.1, 30438.0], [58.2, 30438.0], [58.3, 30438.0], [58.4, 30438.0], [58.5, 30438.0], [58.6, 30438.0], [58.7, 30438.0], [58.8, 30438.0], [58.9, 30438.0], [59.0, 30438.0], [59.1, 30438.0], [59.2, 30438.0], [59.3, 30438.0], [59.4, 30438.0], [59.5, 30438.0], [59.6, 30438.0], [59.7, 30438.0], [59.8, 30438.0], [59.9, 30438.0], [60.0, 30438.0], [60.1, 30438.0], [60.2, 30438.0], [60.3, 30438.0], [60.4, 30438.0], [60.5, 30438.0], [60.6, 30438.0], [60.7, 30438.0], [60.8, 30438.0], [60.9, 30438.0], [61.0, 30438.0], [61.1, 30438.0], [61.2, 30438.0], [61.3, 30438.0], [61.4, 30438.0], [61.5, 30438.0], [61.6, 30438.0], [61.7, 30438.0], [61.8, 30438.0], [61.9, 30438.0], [62.0, 30745.0], [62.1, 30745.0], [62.2, 30745.0], [62.3, 30745.0], [62.4, 30745.0], [62.5, 30745.0], [62.6, 30745.0], [62.7, 30745.0], [62.8, 30745.0], [62.9, 30745.0], [63.0, 30745.0], [63.1, 30745.0], [63.2, 30745.0], [63.3, 30745.0], [63.4, 30745.0], [63.5, 30745.0], [63.6, 30745.0], [63.7, 30745.0], [63.8, 30745.0], [63.9, 30745.0], [64.0, 30920.0], [64.1, 30920.0], [64.2, 30920.0], [64.3, 30920.0], [64.4, 30920.0], [64.5, 30920.0], [64.6, 30920.0], [64.7, 30920.0], [64.8, 30920.0], [64.9, 30920.0], [65.0, 30920.0], [65.1, 30920.0], [65.2, 30920.0], [65.3, 30920.0], [65.4, 30920.0], [65.5, 30920.0], [65.6, 30920.0], [65.7, 30920.0], [65.8, 30920.0], [65.9, 30920.0], [66.0, 31257.0], [66.1, 31257.0], [66.2, 31257.0], [66.3, 31257.0], [66.4, 31257.0], [66.5, 31257.0], [66.6, 31257.0], [66.7, 31257.0], [66.8, 31257.0], [66.9, 31257.0], [67.0, 31257.0], [67.1, 31257.0], [67.2, 31257.0], [67.3, 31257.0], [67.4, 31257.0], [67.5, 31257.0], [67.6, 31257.0], [67.7, 31257.0], [67.8, 31257.0], [67.9, 31257.0], [68.0, 31374.0], [68.1, 31374.0], [68.2, 31374.0], [68.3, 31374.0], [68.4, 31374.0], [68.5, 31374.0], [68.6, 31374.0], [68.7, 31374.0], [68.8, 31374.0], [68.9, 31374.0], [69.0, 31374.0], [69.1, 31374.0], [69.2, 31374.0], [69.3, 31374.0], [69.4, 31374.0], [69.5, 31374.0], [69.6, 31374.0], [69.7, 31374.0], [69.8, 31374.0], [69.9, 31374.0], [70.0, 31440.0], [70.1, 31440.0], [70.2, 31440.0], [70.3, 31440.0], [70.4, 31440.0], [70.5, 31440.0], [70.6, 31440.0], [70.7, 31440.0], [70.8, 31440.0], [70.9, 31440.0], [71.0, 31440.0], [71.1, 31440.0], [71.2, 31440.0], [71.3, 31440.0], [71.4, 31440.0], [71.5, 31440.0], [71.6, 31440.0], [71.7, 31440.0], [71.8, 31440.0], [71.9, 31440.0], [72.0, 31544.0], [72.1, 31544.0], [72.2, 31544.0], [72.3, 31544.0], [72.4, 31544.0], [72.5, 31544.0], [72.6, 31544.0], [72.7, 31544.0], [72.8, 31544.0], [72.9, 31544.0], [73.0, 31544.0], [73.1, 31544.0], [73.2, 31544.0], [73.3, 31544.0], [73.4, 31544.0], [73.5, 31544.0], [73.6, 31544.0], [73.7, 31544.0], [73.8, 31544.0], [73.9, 31544.0], [74.0, 32179.0], [74.1, 32179.0], [74.2, 32179.0], [74.3, 32179.0], [74.4, 32179.0], [74.5, 32179.0], [74.6, 32179.0], [74.7, 32179.0], [74.8, 32179.0], [74.9, 32179.0], [75.0, 32179.0], [75.1, 32179.0], [75.2, 32179.0], [75.3, 32179.0], [75.4, 32179.0], [75.5, 32179.0], [75.6, 32179.0], [75.7, 32179.0], [75.8, 32179.0], [75.9, 32179.0], [76.0, 32179.0], [76.1, 32179.0], [76.2, 32179.0], [76.3, 32179.0], [76.4, 32179.0], [76.5, 32179.0], [76.6, 32179.0], [76.7, 32179.0], [76.8, 32179.0], [76.9, 32179.0], [77.0, 32179.0], [77.1, 32179.0], [77.2, 32179.0], [77.3, 32179.0], [77.4, 32179.0], [77.5, 32179.0], [77.6, 32179.0], [77.7, 32179.0], [77.8, 32179.0], [77.9, 32179.0], [78.0, 32179.0], [78.1, 32179.0], [78.2, 32179.0], [78.3, 32179.0], [78.4, 32179.0], [78.5, 32179.0], [78.6, 32179.0], [78.7, 32179.0], [78.8, 32179.0], [78.9, 32179.0], [79.0, 32179.0], [79.1, 32179.0], [79.2, 32179.0], [79.3, 32179.0], [79.4, 32179.0], [79.5, 32179.0], [79.6, 32179.0], [79.7, 32179.0], [79.8, 32179.0], [79.9, 32179.0], [80.0, 32245.0], [80.1, 32245.0], [80.2, 32245.0], [80.3, 32245.0], [80.4, 32245.0], [80.5, 32245.0], [80.6, 32245.0], [80.7, 32245.0], [80.8, 32245.0], [80.9, 32245.0], [81.0, 32245.0], [81.1, 32245.0], [81.2, 32245.0], [81.3, 32245.0], [81.4, 32245.0], [81.5, 32245.0], [81.6, 32245.0], [81.7, 32245.0], [81.8, 32245.0], [81.9, 32245.0], [82.0, 32327.0], [82.1, 32327.0], [82.2, 32327.0], [82.3, 32327.0], [82.4, 32327.0], [82.5, 32327.0], [82.6, 32327.0], [82.7, 32327.0], [82.8, 32327.0], [82.9, 32327.0], [83.0, 32327.0], [83.1, 32327.0], [83.2, 32327.0], [83.3, 32327.0], [83.4, 32327.0], [83.5, 32327.0], [83.6, 32327.0], [83.7, 32327.0], [83.8, 32327.0], [83.9, 32327.0], [84.0, 32341.0], [84.1, 32341.0], [84.2, 32341.0], [84.3, 32341.0], [84.4, 32341.0], [84.5, 32341.0], [84.6, 32341.0], [84.7, 32341.0], [84.8, 32341.0], [84.9, 32341.0], [85.0, 32341.0], [85.1, 32341.0], [85.2, 32341.0], [85.3, 32341.0], [85.4, 32341.0], [85.5, 32341.0], [85.6, 32341.0], [85.7, 32341.0], [85.8, 32341.0], [85.9, 32341.0], [86.0, 32356.0], [86.1, 32356.0], [86.2, 32356.0], [86.3, 32356.0], [86.4, 32356.0], [86.5, 32356.0], [86.6, 32356.0], [86.7, 32356.0], [86.8, 32356.0], [86.9, 32356.0], [87.0, 32356.0], [87.1, 32356.0], [87.2, 32356.0], [87.3, 32356.0], [87.4, 32356.0], [87.5, 32356.0], [87.6, 32356.0], [87.7, 32356.0], [87.8, 32356.0], [87.9, 32356.0], [88.0, 32428.0], [88.1, 32428.0], [88.2, 32428.0], [88.3, 32428.0], [88.4, 32428.0], [88.5, 32428.0], [88.6, 32428.0], [88.7, 32428.0], [88.8, 32428.0], [88.9, 32428.0], [89.0, 32428.0], [89.1, 32428.0], [89.2, 32428.0], [89.3, 32428.0], [89.4, 32428.0], [89.5, 32428.0], [89.6, 32428.0], [89.7, 32428.0], [89.8, 32428.0], [89.9, 32428.0], [90.0, 32532.0], [90.1, 32532.0], [90.2, 32532.0], [90.3, 32532.0], [90.4, 32532.0], [90.5, 32532.0], [90.6, 32532.0], [90.7, 32532.0], [90.8, 32532.0], [90.9, 32532.0], [91.0, 32532.0], [91.1, 32532.0], [91.2, 32532.0], [91.3, 32532.0], [91.4, 32532.0], [91.5, 32532.0], [91.6, 32532.0], [91.7, 32532.0], [91.8, 32532.0], [91.9, 32532.0], [92.0, 32617.0], [92.1, 32617.0], [92.2, 32617.0], [92.3, 32617.0], [92.4, 32617.0], [92.5, 32617.0], [92.6, 32617.0], [92.7, 32617.0], [92.8, 32617.0], [92.9, 32617.0], [93.0, 32617.0], [93.1, 32617.0], [93.2, 32617.0], [93.3, 32617.0], [93.4, 32617.0], [93.5, 32617.0], [93.6, 32617.0], [93.7, 32617.0], [93.8, 32617.0], [93.9, 32617.0], [94.0, 32632.0], [94.1, 32632.0], [94.2, 32632.0], [94.3, 32632.0], [94.4, 32632.0], [94.5, 32632.0], [94.6, 32632.0], [94.7, 32632.0], [94.8, 32632.0], [94.9, 32632.0], [95.0, 32632.0], [95.1, 32632.0], [95.2, 32632.0], [95.3, 32632.0], [95.4, 32632.0], [95.5, 32632.0], [95.6, 32632.0], [95.7, 32632.0], [95.8, 32632.0], [95.9, 32632.0], [96.0, 32632.0], [96.1, 32632.0], [96.2, 32632.0], [96.3, 32632.0], [96.4, 32632.0], [96.5, 32632.0], [96.6, 32632.0], [96.7, 32632.0], [96.8, 32632.0], [96.9, 32632.0], [97.0, 32632.0], [97.1, 32632.0], [97.2, 32632.0], [97.3, 32632.0], [97.4, 32632.0], [97.5, 32632.0], [97.6, 32632.0], [97.7, 32632.0], [97.8, 32632.0], [97.9, 32632.0], [98.0, 32766.0], [98.1, 32766.0], [98.2, 32766.0], [98.3, 32766.0], [98.4, 32766.0], [98.5, 32766.0], [98.6, 32766.0], [98.7, 32766.0], [98.8, 32766.0], [98.9, 32766.0], [99.0, 32766.0], [99.1, 32766.0], [99.2, 32766.0], [99.3, 32766.0], [99.4, 32766.0], [99.5, 32766.0], [99.6, 32766.0], [99.7, 32766.0], [99.8, 32766.0], [99.9, 32766.0]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 3500.0, "maxY": 8.0, "series": [{"data": [[22600.0, 1.0], [22900.0, 1.0], [23600.0, 1.0], [25200.0, 1.0], [25500.0, 2.0], [26400.0, 1.0], [26700.0, 1.0], [26900.0, 2.0], [27100.0, 2.0], [27500.0, 1.0], [28400.0, 1.0], [28700.0, 2.0], [28900.0, 1.0], [29000.0, 1.0], [29300.0, 1.0], [29500.0, 1.0], [30400.0, 2.0], [30700.0, 1.0], [30900.0, 1.0], [31200.0, 1.0], [31300.0, 1.0], [31400.0, 1.0], [31500.0, 1.0], [32100.0, 3.0], [32200.0, 1.0], [32300.0, 3.0], [32400.0, 1.0], [32500.0, 1.0], [32600.0, 3.0], [32700.0, 1.0], [3500.0, 8.0], [3600.0, 1.0]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 32700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 41.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 41.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 9.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 21.195121951219512, "minX": 1.71244464E12, "maxY": 47.77777777777778, "series": [{"data": [[1.71244464E12, 47.77777777777778], [1.7124447E12, 21.195121951219512]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7124447E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3528.0, "minX": 1.0, "maxY": 32766.0, "series": [{"data": [[33.0, 26936.0], [32.0, 26976.0], [35.0, 26446.0], [34.0, 26751.0], [37.0, 25522.0], [39.0, 23666.0], [38.0, 25215.0], [41.0, 22656.0], [40.0, 22962.0], [42.0, 3651.0], [44.0, 3535.0], [3.0, 32632.0], [50.0, 3528.0], [4.0, 32617.0], [5.0, 32532.0], [6.0, 32428.0], [7.0, 32356.0], [8.0, 32341.0], [9.0, 32327.0], [10.0, 32245.0], [13.0, 32179.0], [14.0, 31544.0], [15.0, 31440.0], [16.0, 31374.0], [1.0, 32766.0], [17.0, 31257.0], [18.0, 30920.0], [19.0, 30745.0], [21.0, 30438.0], [22.0, 29567.0], [23.0, 29311.0], [24.0, 29036.0], [25.0, 28975.0], [27.0, 28725.5], [28.0, 28401.0], [29.0, 27570.0], [31.0, 27151.0]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}, {"data": [[25.980000000000004, 24774.460000000006]], "isOverall": false, "label": "HTTP Request (light image)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 69.45, "minX": 1.71244464E12, "maxY": 8403.0, "series": [{"data": [[1.71244464E12, 69.45], [1.7124447E12, 163.31666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71244464E12, 1843.85], [1.7124447E12, 8403.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7124447E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3543.222222222222, "minX": 1.71244464E12, "maxY": 29434.975609756093, "series": [{"data": [[1.71244464E12, 3543.222222222222], [1.7124447E12, 29434.975609756093]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7124447E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3541.222222222222, "minX": 1.71244464E12, "maxY": 29434.95121951219, "series": [{"data": [[1.71244464E12, 3541.222222222222], [1.7124447E12, 29434.95121951219]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7124447E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 174.22222222222223, "minX": 1.71244464E12, "maxY": 174.3658536585366, "series": [{"data": [[1.71244464E12, 174.22222222222223], [1.7124447E12, 174.3658536585366]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7124447E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 22656.0, "minX": 1.7124447E12, "maxY": 32766.0, "series": [{"data": [[1.7124447E12, 32766.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7124447E12, 22656.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7124447E12, 32600.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7124447E12, 32766.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7124447E12, 30438.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7124447E12, 32632.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7124447E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3528.0, "minX": 1.0, "maxY": 32356.0, "series": [{"data": [[1.0, 22656.0], [2.0, 25056.0], [4.0, 29173.5], [5.0, 29245.0], [3.0, 28725.0], [13.0, 32356.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 3528.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3525.0, "minX": 1.0, "maxY": 32356.0, "series": [{"data": [[1.0, 22656.0], [2.0, 25056.0], [4.0, 29173.5], [5.0, 29245.0], [3.0, 28725.0], [13.0, 32356.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 3525.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.71244464E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.71244464E12, 0.8333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244464E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.71244464E12, "maxY": 0.6833333333333333, "series": [{"data": [[1.7124447E12, 0.6833333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71244464E12, 0.15]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7124447E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.71244464E12, "maxY": 0.6833333333333333, "series": [{"data": [[1.71244464E12, 0.15]], "isOverall": false, "label": "HTTP Request (light image)-failure", "isController": false}, {"data": [[1.7124447E12, 0.6833333333333333]], "isOverall": false, "label": "HTTP Request (light image)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7124447E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.15, "minX": 1.71244464E12, "maxY": 0.6833333333333333, "series": [{"data": [[1.7124447E12, 0.6833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71244464E12, 0.15]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7124447E12, "title": "Total Transactions Per Second"}},
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

