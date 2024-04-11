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
        data: {"result": {"minY": 6971.0, "minX": 0.0, "maxY": 16136.0, "series": [{"data": [[0.0, 6971.0], [0.1, 6971.0], [0.2, 6971.0], [0.3, 6971.0], [0.4, 6971.0], [0.5, 6971.0], [0.6, 6971.0], [0.7, 6971.0], [0.8, 6971.0], [0.9, 6971.0], [1.0, 7598.0], [1.1, 7598.0], [1.2, 7598.0], [1.3, 7598.0], [1.4, 7598.0], [1.5, 7598.0], [1.6, 7598.0], [1.7, 7598.0], [1.8, 7598.0], [1.9, 7598.0], [2.0, 7864.0], [2.1, 7864.0], [2.2, 7864.0], [2.3, 7864.0], [2.4, 7864.0], [2.5, 7864.0], [2.6, 7864.0], [2.7, 7864.0], [2.8, 7864.0], [2.9, 7864.0], [3.0, 8192.0], [3.1, 8192.0], [3.2, 8192.0], [3.3, 8192.0], [3.4, 8192.0], [3.5, 8192.0], [3.6, 8192.0], [3.7, 8192.0], [3.8, 8192.0], [3.9, 8192.0], [4.0, 8887.0], [4.1, 8887.0], [4.2, 8887.0], [4.3, 8887.0], [4.4, 8887.0], [4.5, 8887.0], [4.6, 8887.0], [4.7, 8887.0], [4.8, 8887.0], [4.9, 8887.0], [5.0, 9031.0], [5.1, 9031.0], [5.2, 9031.0], [5.3, 9031.0], [5.4, 9031.0], [5.5, 9031.0], [5.6, 9031.0], [5.7, 9031.0], [5.8, 9031.0], [5.9, 9031.0], [6.0, 9323.0], [6.1, 9323.0], [6.2, 9323.0], [6.3, 9323.0], [6.4, 9323.0], [6.5, 9323.0], [6.6, 9323.0], [6.7, 9323.0], [6.8, 9323.0], [6.9, 9323.0], [7.0, 9420.0], [7.1, 9420.0], [7.2, 9420.0], [7.3, 9420.0], [7.4, 9420.0], [7.5, 9420.0], [7.6, 9420.0], [7.7, 9420.0], [7.8, 9420.0], [7.9, 9420.0], [8.0, 10137.0], [8.1, 10137.0], [8.2, 10137.0], [8.3, 10137.0], [8.4, 10137.0], [8.5, 10137.0], [8.6, 10137.0], [8.7, 10137.0], [8.8, 10137.0], [8.9, 10137.0], [9.0, 10161.0], [9.1, 10161.0], [9.2, 10161.0], [9.3, 10161.0], [9.4, 10161.0], [9.5, 10161.0], [9.6, 10161.0], [9.7, 10161.0], [9.8, 10161.0], [9.9, 10161.0], [10.0, 10181.0], [10.1, 10181.0], [10.2, 10181.0], [10.3, 10181.0], [10.4, 10181.0], [10.5, 10181.0], [10.6, 10181.0], [10.7, 10181.0], [10.8, 10181.0], [10.9, 10181.0], [11.0, 10322.0], [11.1, 10322.0], [11.2, 10322.0], [11.3, 10322.0], [11.4, 10322.0], [11.5, 10322.0], [11.6, 10322.0], [11.7, 10322.0], [11.8, 10322.0], [11.9, 10322.0], [12.0, 10363.0], [12.1, 10363.0], [12.2, 10363.0], [12.3, 10363.0], [12.4, 10363.0], [12.5, 10363.0], [12.6, 10363.0], [12.7, 10363.0], [12.8, 10363.0], [12.9, 10363.0], [13.0, 10538.0], [13.1, 10538.0], [13.2, 10538.0], [13.3, 10538.0], [13.4, 10538.0], [13.5, 10538.0], [13.6, 10538.0], [13.7, 10538.0], [13.8, 10538.0], [13.9, 10538.0], [14.0, 10648.0], [14.1, 10648.0], [14.2, 10648.0], [14.3, 10648.0], [14.4, 10648.0], [14.5, 10648.0], [14.6, 10648.0], [14.7, 10648.0], [14.8, 10648.0], [14.9, 10648.0], [15.0, 10649.0], [15.1, 10649.0], [15.2, 10649.0], [15.3, 10649.0], [15.4, 10649.0], [15.5, 10649.0], [15.6, 10649.0], [15.7, 10649.0], [15.8, 10649.0], [15.9, 10649.0], [16.0, 10965.0], [16.1, 10965.0], [16.2, 10965.0], [16.3, 10965.0], [16.4, 10965.0], [16.5, 10965.0], [16.6, 10965.0], [16.7, 10965.0], [16.8, 10965.0], [16.9, 10965.0], [17.0, 11008.0], [17.1, 11008.0], [17.2, 11008.0], [17.3, 11008.0], [17.4, 11008.0], [17.5, 11008.0], [17.6, 11008.0], [17.7, 11008.0], [17.8, 11008.0], [17.9, 11008.0], [18.0, 11111.0], [18.1, 11111.0], [18.2, 11111.0], [18.3, 11111.0], [18.4, 11111.0], [18.5, 11111.0], [18.6, 11111.0], [18.7, 11111.0], [18.8, 11111.0], [18.9, 11111.0], [19.0, 11129.0], [19.1, 11129.0], [19.2, 11129.0], [19.3, 11129.0], [19.4, 11129.0], [19.5, 11129.0], [19.6, 11129.0], [19.7, 11129.0], [19.8, 11129.0], [19.9, 11129.0], [20.0, 11182.0], [20.1, 11182.0], [20.2, 11182.0], [20.3, 11182.0], [20.4, 11182.0], [20.5, 11182.0], [20.6, 11182.0], [20.7, 11182.0], [20.8, 11182.0], [20.9, 11182.0], [21.0, 11232.0], [21.1, 11232.0], [21.2, 11232.0], [21.3, 11232.0], [21.4, 11232.0], [21.5, 11232.0], [21.6, 11232.0], [21.7, 11232.0], [21.8, 11232.0], [21.9, 11232.0], [22.0, 11255.0], [22.1, 11255.0], [22.2, 11255.0], [22.3, 11255.0], [22.4, 11255.0], [22.5, 11255.0], [22.6, 11255.0], [22.7, 11255.0], [22.8, 11255.0], [22.9, 11255.0], [23.0, 11261.0], [23.1, 11261.0], [23.2, 11261.0], [23.3, 11261.0], [23.4, 11261.0], [23.5, 11261.0], [23.6, 11261.0], [23.7, 11261.0], [23.8, 11261.0], [23.9, 11261.0], [24.0, 11418.0], [24.1, 11418.0], [24.2, 11418.0], [24.3, 11418.0], [24.4, 11418.0], [24.5, 11418.0], [24.6, 11418.0], [24.7, 11418.0], [24.8, 11418.0], [24.9, 11418.0], [25.0, 11424.0], [25.1, 11424.0], [25.2, 11424.0], [25.3, 11424.0], [25.4, 11424.0], [25.5, 11424.0], [25.6, 11424.0], [25.7, 11424.0], [25.8, 11424.0], [25.9, 11424.0], [26.0, 11490.0], [26.1, 11490.0], [26.2, 11490.0], [26.3, 11490.0], [26.4, 11490.0], [26.5, 11490.0], [26.6, 11490.0], [26.7, 11490.0], [26.8, 11490.0], [26.9, 11490.0], [27.0, 11514.0], [27.1, 11514.0], [27.2, 11514.0], [27.3, 11514.0], [27.4, 11514.0], [27.5, 11514.0], [27.6, 11514.0], [27.7, 11514.0], [27.8, 11514.0], [27.9, 11514.0], [28.0, 11567.0], [28.1, 11567.0], [28.2, 11567.0], [28.3, 11567.0], [28.4, 11567.0], [28.5, 11567.0], [28.6, 11567.0], [28.7, 11567.0], [28.8, 11567.0], [28.9, 11567.0], [29.0, 11606.0], [29.1, 11606.0], [29.2, 11606.0], [29.3, 11606.0], [29.4, 11606.0], [29.5, 11606.0], [29.6, 11606.0], [29.7, 11606.0], [29.8, 11606.0], [29.9, 11606.0], [30.0, 11760.0], [30.1, 11760.0], [30.2, 11760.0], [30.3, 11760.0], [30.4, 11760.0], [30.5, 11760.0], [30.6, 11760.0], [30.7, 11760.0], [30.8, 11760.0], [30.9, 11760.0], [31.0, 11763.0], [31.1, 11763.0], [31.2, 11763.0], [31.3, 11763.0], [31.4, 11763.0], [31.5, 11763.0], [31.6, 11763.0], [31.7, 11763.0], [31.8, 11763.0], [31.9, 11763.0], [32.0, 11888.0], [32.1, 11888.0], [32.2, 11888.0], [32.3, 11888.0], [32.4, 11888.0], [32.5, 11888.0], [32.6, 11888.0], [32.7, 11888.0], [32.8, 11888.0], [32.9, 11888.0], [33.0, 11980.0], [33.1, 11980.0], [33.2, 11980.0], [33.3, 11980.0], [33.4, 11980.0], [33.5, 11980.0], [33.6, 11980.0], [33.7, 11980.0], [33.8, 11980.0], [33.9, 11980.0], [34.0, 12236.0], [34.1, 12236.0], [34.2, 12236.0], [34.3, 12236.0], [34.4, 12236.0], [34.5, 12236.0], [34.6, 12236.0], [34.7, 12236.0], [34.8, 12236.0], [34.9, 12236.0], [35.0, 12286.0], [35.1, 12286.0], [35.2, 12286.0], [35.3, 12286.0], [35.4, 12286.0], [35.5, 12286.0], [35.6, 12286.0], [35.7, 12286.0], [35.8, 12286.0], [35.9, 12286.0], [36.0, 12288.0], [36.1, 12288.0], [36.2, 12288.0], [36.3, 12288.0], [36.4, 12288.0], [36.5, 12288.0], [36.6, 12288.0], [36.7, 12288.0], [36.8, 12288.0], [36.9, 12288.0], [37.0, 12288.0], [37.1, 12288.0], [37.2, 12288.0], [37.3, 12288.0], [37.4, 12288.0], [37.5, 12288.0], [37.6, 12288.0], [37.7, 12288.0], [37.8, 12288.0], [37.9, 12288.0], [38.0, 12314.0], [38.1, 12314.0], [38.2, 12314.0], [38.3, 12314.0], [38.4, 12314.0], [38.5, 12314.0], [38.6, 12314.0], [38.7, 12314.0], [38.8, 12314.0], [38.9, 12314.0], [39.0, 12390.0], [39.1, 12390.0], [39.2, 12390.0], [39.3, 12390.0], [39.4, 12390.0], [39.5, 12390.0], [39.6, 12390.0], [39.7, 12390.0], [39.8, 12390.0], [39.9, 12390.0], [40.0, 12398.0], [40.1, 12398.0], [40.2, 12398.0], [40.3, 12398.0], [40.4, 12398.0], [40.5, 12398.0], [40.6, 12398.0], [40.7, 12398.0], [40.8, 12398.0], [40.9, 12398.0], [41.0, 12473.0], [41.1, 12473.0], [41.2, 12473.0], [41.3, 12473.0], [41.4, 12473.0], [41.5, 12473.0], [41.6, 12473.0], [41.7, 12473.0], [41.8, 12473.0], [41.9, 12473.0], [42.0, 12542.0], [42.1, 12542.0], [42.2, 12542.0], [42.3, 12542.0], [42.4, 12542.0], [42.5, 12542.0], [42.6, 12542.0], [42.7, 12542.0], [42.8, 12542.0], [42.9, 12542.0], [43.0, 12565.0], [43.1, 12565.0], [43.2, 12565.0], [43.3, 12565.0], [43.4, 12565.0], [43.5, 12565.0], [43.6, 12565.0], [43.7, 12565.0], [43.8, 12565.0], [43.9, 12565.0], [44.0, 12632.0], [44.1, 12632.0], [44.2, 12632.0], [44.3, 12632.0], [44.4, 12632.0], [44.5, 12632.0], [44.6, 12632.0], [44.7, 12632.0], [44.8, 12632.0], [44.9, 12632.0], [45.0, 12761.0], [45.1, 12761.0], [45.2, 12761.0], [45.3, 12761.0], [45.4, 12761.0], [45.5, 12761.0], [45.6, 12761.0], [45.7, 12761.0], [45.8, 12761.0], [45.9, 12761.0], [46.0, 12848.0], [46.1, 12848.0], [46.2, 12848.0], [46.3, 12848.0], [46.4, 12848.0], [46.5, 12848.0], [46.6, 12848.0], [46.7, 12848.0], [46.8, 12848.0], [46.9, 12848.0], [47.0, 12902.0], [47.1, 12902.0], [47.2, 12902.0], [47.3, 12902.0], [47.4, 12902.0], [47.5, 12902.0], [47.6, 12902.0], [47.7, 12902.0], [47.8, 12902.0], [47.9, 12902.0], [48.0, 12909.0], [48.1, 12909.0], [48.2, 12909.0], [48.3, 12909.0], [48.4, 12909.0], [48.5, 12909.0], [48.6, 12909.0], [48.7, 12909.0], [48.8, 12909.0], [48.9, 12909.0], [49.0, 12914.0], [49.1, 12914.0], [49.2, 12914.0], [49.3, 12914.0], [49.4, 12914.0], [49.5, 12914.0], [49.6, 12914.0], [49.7, 12914.0], [49.8, 12914.0], [49.9, 12914.0], [50.0, 12918.0], [50.1, 12918.0], [50.2, 12918.0], [50.3, 12918.0], [50.4, 12918.0], [50.5, 12918.0], [50.6, 12918.0], [50.7, 12918.0], [50.8, 12918.0], [50.9, 12918.0], [51.0, 12922.0], [51.1, 12922.0], [51.2, 12922.0], [51.3, 12922.0], [51.4, 12922.0], [51.5, 12922.0], [51.6, 12922.0], [51.7, 12922.0], [51.8, 12922.0], [51.9, 12922.0], [52.0, 12961.0], [52.1, 12961.0], [52.2, 12961.0], [52.3, 12961.0], [52.4, 12961.0], [52.5, 12961.0], [52.6, 12961.0], [52.7, 12961.0], [52.8, 12961.0], [52.9, 12961.0], [53.0, 13004.0], [53.1, 13004.0], [53.2, 13004.0], [53.3, 13004.0], [53.4, 13004.0], [53.5, 13004.0], [53.6, 13004.0], [53.7, 13004.0], [53.8, 13004.0], [53.9, 13004.0], [54.0, 13059.0], [54.1, 13059.0], [54.2, 13059.0], [54.3, 13059.0], [54.4, 13059.0], [54.5, 13059.0], [54.6, 13059.0], [54.7, 13059.0], [54.8, 13059.0], [54.9, 13059.0], [55.0, 13106.0], [55.1, 13106.0], [55.2, 13106.0], [55.3, 13106.0], [55.4, 13106.0], [55.5, 13106.0], [55.6, 13106.0], [55.7, 13106.0], [55.8, 13106.0], [55.9, 13106.0], [56.0, 13125.0], [56.1, 13125.0], [56.2, 13125.0], [56.3, 13125.0], [56.4, 13125.0], [56.5, 13125.0], [56.6, 13125.0], [56.7, 13125.0], [56.8, 13125.0], [56.9, 13125.0], [57.0, 13157.0], [57.1, 13157.0], [57.2, 13157.0], [57.3, 13157.0], [57.4, 13157.0], [57.5, 13157.0], [57.6, 13157.0], [57.7, 13157.0], [57.8, 13157.0], [57.9, 13157.0], [58.0, 13211.0], [58.1, 13211.0], [58.2, 13211.0], [58.3, 13211.0], [58.4, 13211.0], [58.5, 13211.0], [58.6, 13211.0], [58.7, 13211.0], [58.8, 13211.0], [58.9, 13211.0], [59.0, 13243.0], [59.1, 13243.0], [59.2, 13243.0], [59.3, 13243.0], [59.4, 13243.0], [59.5, 13243.0], [59.6, 13243.0], [59.7, 13243.0], [59.8, 13243.0], [59.9, 13243.0], [60.0, 13290.0], [60.1, 13290.0], [60.2, 13290.0], [60.3, 13290.0], [60.4, 13290.0], [60.5, 13290.0], [60.6, 13290.0], [60.7, 13290.0], [60.8, 13290.0], [60.9, 13290.0], [61.0, 13395.0], [61.1, 13395.0], [61.2, 13395.0], [61.3, 13395.0], [61.4, 13395.0], [61.5, 13395.0], [61.6, 13395.0], [61.7, 13395.0], [61.8, 13395.0], [61.9, 13395.0], [62.0, 13413.0], [62.1, 13413.0], [62.2, 13413.0], [62.3, 13413.0], [62.4, 13413.0], [62.5, 13413.0], [62.6, 13413.0], [62.7, 13413.0], [62.8, 13413.0], [62.9, 13413.0], [63.0, 13494.0], [63.1, 13494.0], [63.2, 13494.0], [63.3, 13494.0], [63.4, 13494.0], [63.5, 13494.0], [63.6, 13494.0], [63.7, 13494.0], [63.8, 13494.0], [63.9, 13494.0], [64.0, 13517.0], [64.1, 13517.0], [64.2, 13517.0], [64.3, 13517.0], [64.4, 13517.0], [64.5, 13517.0], [64.6, 13517.0], [64.7, 13517.0], [64.8, 13517.0], [64.9, 13517.0], [65.0, 13529.0], [65.1, 13529.0], [65.2, 13529.0], [65.3, 13529.0], [65.4, 13529.0], [65.5, 13529.0], [65.6, 13529.0], [65.7, 13529.0], [65.8, 13529.0], [65.9, 13529.0], [66.0, 13591.0], [66.1, 13591.0], [66.2, 13591.0], [66.3, 13591.0], [66.4, 13591.0], [66.5, 13591.0], [66.6, 13591.0], [66.7, 13591.0], [66.8, 13591.0], [66.9, 13591.0], [67.0, 13603.0], [67.1, 13603.0], [67.2, 13603.0], [67.3, 13603.0], [67.4, 13603.0], [67.5, 13603.0], [67.6, 13603.0], [67.7, 13603.0], [67.8, 13603.0], [67.9, 13603.0], [68.0, 13693.0], [68.1, 13693.0], [68.2, 13693.0], [68.3, 13693.0], [68.4, 13693.0], [68.5, 13693.0], [68.6, 13693.0], [68.7, 13693.0], [68.8, 13693.0], [68.9, 13693.0], [69.0, 13744.0], [69.1, 13744.0], [69.2, 13744.0], [69.3, 13744.0], [69.4, 13744.0], [69.5, 13744.0], [69.6, 13744.0], [69.7, 13744.0], [69.8, 13744.0], [69.9, 13744.0], [70.0, 13781.0], [70.1, 13781.0], [70.2, 13781.0], [70.3, 13781.0], [70.4, 13781.0], [70.5, 13781.0], [70.6, 13781.0], [70.7, 13781.0], [70.8, 13781.0], [70.9, 13781.0], [71.0, 13843.0], [71.1, 13843.0], [71.2, 13843.0], [71.3, 13843.0], [71.4, 13843.0], [71.5, 13843.0], [71.6, 13843.0], [71.7, 13843.0], [71.8, 13843.0], [71.9, 13843.0], [72.0, 13910.0], [72.1, 13910.0], [72.2, 13910.0], [72.3, 13910.0], [72.4, 13910.0], [72.5, 13910.0], [72.6, 13910.0], [72.7, 13910.0], [72.8, 13910.0], [72.9, 13910.0], [73.0, 13936.0], [73.1, 13936.0], [73.2, 13936.0], [73.3, 13936.0], [73.4, 13936.0], [73.5, 13936.0], [73.6, 13936.0], [73.7, 13936.0], [73.8, 13936.0], [73.9, 13936.0], [74.0, 14020.0], [74.1, 14020.0], [74.2, 14020.0], [74.3, 14020.0], [74.4, 14020.0], [74.5, 14020.0], [74.6, 14020.0], [74.7, 14020.0], [74.8, 14020.0], [74.9, 14020.0], [75.0, 14022.0], [75.1, 14022.0], [75.2, 14022.0], [75.3, 14022.0], [75.4, 14022.0], [75.5, 14022.0], [75.6, 14022.0], [75.7, 14022.0], [75.8, 14022.0], [75.9, 14022.0], [76.0, 14202.0], [76.1, 14202.0], [76.2, 14202.0], [76.3, 14202.0], [76.4, 14202.0], [76.5, 14202.0], [76.6, 14202.0], [76.7, 14202.0], [76.8, 14202.0], [76.9, 14202.0], [77.0, 14213.0], [77.1, 14213.0], [77.2, 14213.0], [77.3, 14213.0], [77.4, 14213.0], [77.5, 14213.0], [77.6, 14213.0], [77.7, 14213.0], [77.8, 14213.0], [77.9, 14213.0], [78.0, 14261.0], [78.1, 14261.0], [78.2, 14261.0], [78.3, 14261.0], [78.4, 14261.0], [78.5, 14261.0], [78.6, 14261.0], [78.7, 14261.0], [78.8, 14261.0], [78.9, 14261.0], [79.0, 14309.0], [79.1, 14309.0], [79.2, 14309.0], [79.3, 14309.0], [79.4, 14309.0], [79.5, 14309.0], [79.6, 14309.0], [79.7, 14309.0], [79.8, 14309.0], [79.9, 14309.0], [80.0, 14384.0], [80.1, 14384.0], [80.2, 14384.0], [80.3, 14384.0], [80.4, 14384.0], [80.5, 14384.0], [80.6, 14384.0], [80.7, 14384.0], [80.8, 14384.0], [80.9, 14384.0], [81.0, 14388.0], [81.1, 14388.0], [81.2, 14388.0], [81.3, 14388.0], [81.4, 14388.0], [81.5, 14388.0], [81.6, 14388.0], [81.7, 14388.0], [81.8, 14388.0], [81.9, 14388.0], [82.0, 14509.0], [82.1, 14509.0], [82.2, 14509.0], [82.3, 14509.0], [82.4, 14509.0], [82.5, 14509.0], [82.6, 14509.0], [82.7, 14509.0], [82.8, 14509.0], [82.9, 14509.0], [83.0, 14572.0], [83.1, 14572.0], [83.2, 14572.0], [83.3, 14572.0], [83.4, 14572.0], [83.5, 14572.0], [83.6, 14572.0], [83.7, 14572.0], [83.8, 14572.0], [83.9, 14572.0], [84.0, 14590.0], [84.1, 14590.0], [84.2, 14590.0], [84.3, 14590.0], [84.4, 14590.0], [84.5, 14590.0], [84.6, 14590.0], [84.7, 14590.0], [84.8, 14590.0], [84.9, 14590.0], [85.0, 14605.0], [85.1, 14605.0], [85.2, 14605.0], [85.3, 14605.0], [85.4, 14605.0], [85.5, 14605.0], [85.6, 14605.0], [85.7, 14605.0], [85.8, 14605.0], [85.9, 14605.0], [86.0, 14632.0], [86.1, 14632.0], [86.2, 14632.0], [86.3, 14632.0], [86.4, 14632.0], [86.5, 14632.0], [86.6, 14632.0], [86.7, 14632.0], [86.8, 14632.0], [86.9, 14632.0], [87.0, 14697.0], [87.1, 14697.0], [87.2, 14697.0], [87.3, 14697.0], [87.4, 14697.0], [87.5, 14697.0], [87.6, 14697.0], [87.7, 14697.0], [87.8, 14697.0], [87.9, 14697.0], [88.0, 14697.0], [88.1, 14697.0], [88.2, 14697.0], [88.3, 14697.0], [88.4, 14697.0], [88.5, 14697.0], [88.6, 14697.0], [88.7, 14697.0], [88.8, 14697.0], [88.9, 14697.0], [89.0, 14843.0], [89.1, 14843.0], [89.2, 14843.0], [89.3, 14843.0], [89.4, 14843.0], [89.5, 14843.0], [89.6, 14843.0], [89.7, 14843.0], [89.8, 14843.0], [89.9, 14843.0], [90.0, 14908.0], [90.1, 14908.0], [90.2, 14908.0], [90.3, 14908.0], [90.4, 14908.0], [90.5, 14908.0], [90.6, 14908.0], [90.7, 14908.0], [90.8, 14908.0], [90.9, 14908.0], [91.0, 14954.0], [91.1, 14954.0], [91.2, 14954.0], [91.3, 14954.0], [91.4, 14954.0], [91.5, 14954.0], [91.6, 14954.0], [91.7, 14954.0], [91.8, 14954.0], [91.9, 14954.0], [92.0, 15000.0], [92.1, 15000.0], [92.2, 15000.0], [92.3, 15000.0], [92.4, 15000.0], [92.5, 15000.0], [92.6, 15000.0], [92.7, 15000.0], [92.8, 15000.0], [92.9, 15000.0], [93.0, 15022.0], [93.1, 15022.0], [93.2, 15022.0], [93.3, 15022.0], [93.4, 15022.0], [93.5, 15022.0], [93.6, 15022.0], [93.7, 15022.0], [93.8, 15022.0], [93.9, 15022.0], [94.0, 15052.0], [94.1, 15052.0], [94.2, 15052.0], [94.3, 15052.0], [94.4, 15052.0], [94.5, 15052.0], [94.6, 15052.0], [94.7, 15052.0], [94.8, 15052.0], [94.9, 15052.0], [95.0, 15204.0], [95.1, 15204.0], [95.2, 15204.0], [95.3, 15204.0], [95.4, 15204.0], [95.5, 15204.0], [95.6, 15204.0], [95.7, 15204.0], [95.8, 15204.0], [95.9, 15204.0], [96.0, 15219.0], [96.1, 15219.0], [96.2, 15219.0], [96.3, 15219.0], [96.4, 15219.0], [96.5, 15219.0], [96.6, 15219.0], [96.7, 15219.0], [96.8, 15219.0], [96.9, 15219.0], [97.0, 15388.0], [97.1, 15388.0], [97.2, 15388.0], [97.3, 15388.0], [97.4, 15388.0], [97.5, 15388.0], [97.6, 15388.0], [97.7, 15388.0], [97.8, 15388.0], [97.9, 15388.0], [98.0, 15893.0], [98.1, 15893.0], [98.2, 15893.0], [98.3, 15893.0], [98.4, 15893.0], [98.5, 15893.0], [98.6, 15893.0], [98.7, 15893.0], [98.8, 15893.0], [98.9, 15893.0], [99.0, 16136.0], [99.1, 16136.0], [99.2, 16136.0], [99.3, 16136.0], [99.4, 16136.0], [99.5, 16136.0], [99.6, 16136.0], [99.7, 16136.0], [99.8, 16136.0], [99.9, 16136.0]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 6900.0, "maxY": 6.0, "series": [{"data": [[6900.0, 1.0], [7500.0, 1.0], [7800.0, 1.0], [8100.0, 1.0], [9000.0, 1.0], [8800.0, 1.0], [9300.0, 1.0], [9400.0, 1.0], [10100.0, 3.0], [10600.0, 2.0], [10500.0, 1.0], [10300.0, 2.0], [11100.0, 3.0], [11200.0, 3.0], [11000.0, 1.0], [10900.0, 1.0], [11400.0, 3.0], [11700.0, 2.0], [11500.0, 2.0], [11600.0, 1.0], [12200.0, 4.0], [11800.0, 1.0], [11900.0, 1.0], [12600.0, 1.0], [12300.0, 3.0], [12500.0, 2.0], [12400.0, 1.0], [12700.0, 1.0], [13300.0, 1.0], [12900.0, 6.0], [13000.0, 2.0], [13100.0, 3.0], [12800.0, 1.0], [13200.0, 3.0], [13700.0, 2.0], [13500.0, 3.0], [13400.0, 2.0], [13600.0, 2.0], [13800.0, 1.0], [14200.0, 3.0], [13900.0, 2.0], [14000.0, 2.0], [14300.0, 3.0], [14500.0, 3.0], [14600.0, 4.0], [14800.0, 1.0], [15000.0, 3.0], [15200.0, 2.0], [15300.0, 1.0], [14900.0, 2.0], [15800.0, 1.0], [16100.0, 1.0]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.249999999999998, "minX": 1.71244518E12, "maxY": 10.0, "series": [{"data": [[1.7124453E12, 8.249999999999998], [1.71244518E12, 10.0], [1.71244524E12, 10.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7124453E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 6971.0, "minX": 1.0, "maxY": 12914.0, "series": [{"data": [[8.0, 12880.666666666666], [4.0, 7864.0], [2.0, 10181.0], [1.0, 6971.0], [9.0, 11360.0], [10.0, 12905.494117647058], [5.0, 10363.0], [6.0, 7598.0], [3.0, 8887.0], [7.0, 12914.0]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}, {"data": [[9.440000000000003, 12617.49]], "isOverall": false, "label": "HTTP Request (mid image)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 83.96666666666667, "minX": 1.71244518E12, "maxY": 58478.76666666667, "series": [{"data": [[1.7124453E12, 122.13333333333334], [1.71244518E12, 83.96666666666667], [1.71244524E12, 175.56666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7124453E12, 40680.88333333333], [1.71244518E12, 27967.466666666667], [1.71244524E12, 58478.76666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7124453E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 11980.0625, "minX": 1.71244518E12, "maxY": 13037.913043478262, "series": [{"data": [[1.7124453E12, 11980.0625], [1.71244518E12, 12665.59090909091], [1.71244524E12, 13037.913043478262]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7124453E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 11979.875000000005, "minX": 1.71244518E12, "maxY": 13037.891304347828, "series": [{"data": [[1.7124453E12, 11979.875000000005], [1.71244518E12, 12665.454545454546], [1.71244524E12, 13037.891304347828]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7124453E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71244518E12, "maxY": 73.22727272727272, "series": [{"data": [[1.7124453E12, 0.0], [1.71244518E12, 73.22727272727272], [1.71244524E12, 19.391304347826082]], "isOverall": false, "label": "HTTP Request (mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7124453E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6971.0, "minX": 1.71244518E12, "maxY": 16136.0, "series": [{"data": [[1.7124453E12, 15893.0], [1.71244518E12, 15219.0], [1.71244524E12, 16136.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7124453E12, 6971.0], [1.71244518E12, 9031.0], [1.71244524E12, 10137.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7124453E12, 14472.7], [1.71244518E12, 15015.4], [1.71244524E12, 14983.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7124453E12, 15893.0], [1.71244518E12, 15219.0], [1.71244524E12, 16136.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7124453E12, 12651.5], [1.71244518E12, 12577.0], [1.71244524E12, 13082.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7124453E12, 15046.049999999997], [1.71244518E12, 15189.449999999999], [1.71244524E12, 15323.6]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7124453E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 12651.5, "minX": 1.0, "maxY": 13010.0, "series": [{"data": [[2.0, 12651.5], [1.0, 12953.0], [3.0, 13010.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 12651.5, "minX": 1.0, "maxY": 13010.0, "series": [{"data": [[2.0, 12651.5], [1.0, 12953.0], [3.0, 13010.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.71244518E12, "maxY": 0.7666666666666667, "series": [{"data": [[1.7124453E12, 0.36666666666666664], [1.71244518E12, 0.5333333333333333], [1.71244524E12, 0.7666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7124453E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.71244518E12, "maxY": 0.7666666666666667, "series": [{"data": [[1.7124453E12, 0.5333333333333333], [1.71244518E12, 0.36666666666666664], [1.71244524E12, 0.7666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7124453E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.71244518E12, "maxY": 0.7666666666666667, "series": [{"data": [[1.7124453E12, 0.5333333333333333], [1.71244518E12, 0.36666666666666664], [1.71244524E12, 0.7666666666666667]], "isOverall": false, "label": "HTTP Request (mid image)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7124453E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.71244518E12, "maxY": 0.7666666666666667, "series": [{"data": [[1.7124453E12, 0.5333333333333333], [1.71244518E12, 0.36666666666666664], [1.71244524E12, 0.7666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7124453E12, "title": "Total Transactions Per Second"}},
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

