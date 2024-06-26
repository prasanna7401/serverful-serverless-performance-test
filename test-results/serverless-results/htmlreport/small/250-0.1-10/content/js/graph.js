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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 32910.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 1.0], [2.7, 1.0], [2.8, 1.0], [2.9, 1.0], [3.0, 1.0], [3.1, 1.0], [3.2, 1.0], [3.3, 1.0], [3.4, 1.0], [3.5, 1.0], [3.6, 1.0], [3.7, 1.0], [3.8, 1.0], [3.9, 1.0], [4.0, 1.0], [4.1, 1.0], [4.2, 1.0], [4.3, 1.0], [4.4, 1.0], [4.5, 1.0], [4.6, 1.0], [4.7, 1.0], [4.8, 1.0], [4.9, 1.0], [5.0, 1.0], [5.1, 1.0], [5.2, 1.0], [5.3, 1.0], [5.4, 1.0], [5.5, 1.0], [5.6, 2.0], [5.7, 2.0], [5.8, 2.0], [5.9, 2.0], [6.0, 2.0], [6.1, 2.0], [6.2, 2.0], [6.3, 2.0], [6.4, 2.0], [6.5, 2.0], [6.6, 2.0], [6.7, 2.0], [6.8, 2.0], [6.9, 2.0], [7.0, 2.0], [7.1, 2.0], [7.2, 2.0], [7.3, 2.0], [7.4, 2.0], [7.5, 2.0], [7.6, 2.0], [7.7, 2.0], [7.8, 2.0], [7.9, 2.0], [8.0, 2.0], [8.1, 2.0], [8.2, 2.0], [8.3, 2.0], [8.4, 2.0], [8.5, 2.0], [8.6, 2.0], [8.7, 2.0], [8.8, 2.0], [8.9, 2.0], [9.0, 2.0], [9.1, 2.0], [9.2, 2.0], [9.3, 2.0], [9.4, 2.0], [9.5, 2.0], [9.6, 2.0], [9.7, 2.0], [9.8, 2.0], [9.9, 2.0], [10.0, 2.0], [10.1, 2.0], [10.2, 2.0], [10.3, 2.0], [10.4, 2.0], [10.5, 2.0], [10.6, 2.0], [10.7, 2.0], [10.8, 2.0], [10.9, 2.0], [11.0, 2.0], [11.1, 2.0], [11.2, 2.0], [11.3, 2.0], [11.4, 2.0], [11.5, 2.0], [11.6, 2.0], [11.7, 2.0], [11.8, 2.0], [11.9, 2.0], [12.0, 2.0], [12.1, 2.0], [12.2, 2.0], [12.3, 2.0], [12.4, 2.0], [12.5, 2.0], [12.6, 2.0], [12.7, 2.0], [12.8, 2.0], [12.9, 2.0], [13.0, 2.0], [13.1, 2.0], [13.2, 2.0], [13.3, 2.0], [13.4, 2.0], [13.5, 2.0], [13.6, 2.0], [13.7, 2.0], [13.8, 2.0], [13.9, 2.0], [14.0, 2.0], [14.1, 2.0], [14.2, 2.0], [14.3, 2.0], [14.4, 2.0], [14.5, 2.0], [14.6, 2.0], [14.7, 2.0], [14.8, 3.0], [14.9, 3.0], [15.0, 3.0], [15.1, 3.0], [15.2, 3.0], [15.3, 3.0], [15.4, 3.0], [15.5, 3.0], [15.6, 3.0], [15.7, 3.0], [15.8, 3.0], [15.9, 3.0], [16.0, 3.0], [16.1, 3.0], [16.2, 3.0], [16.3, 3.0], [16.4, 3.0], [16.5, 3.0], [16.6, 3.0], [16.7, 3.0], [16.8, 3.0], [16.9, 3.0], [17.0, 3.0], [17.1, 3.0], [17.2, 3.0], [17.3, 3.0], [17.4, 3.0], [17.5, 3.0], [17.6, 3.0], [17.7, 3.0], [17.8, 3.0], [17.9, 3.0], [18.0, 3.0], [18.1, 3.0], [18.2, 3.0], [18.3, 3.0], [18.4, 3.0], [18.5, 3.0], [18.6, 3.0], [18.7, 3.0], [18.8, 3.0], [18.9, 3.0], [19.0, 3.0], [19.1, 3.0], [19.2, 3.0], [19.3, 3.0], [19.4, 3.0], [19.5, 3.0], [19.6, 3.0], [19.7, 3.0], [19.8, 3.0], [19.9, 3.0], [20.0, 3.0], [20.1, 3.0], [20.2, 3.0], [20.3, 3.0], [20.4, 3.0], [20.5, 3.0], [20.6, 3.0], [20.7, 3.0], [20.8, 3.0], [20.9, 3.0], [21.0, 3.0], [21.1, 3.0], [21.2, 3.0], [21.3, 3.0], [21.4, 3.0], [21.5, 3.0], [21.6, 3.0], [21.7, 3.0], [21.8, 3.0], [21.9, 3.0], [22.0, 3.0], [22.1, 3.0], [22.2, 3.0], [22.3, 3.0], [22.4, 3.0], [22.5, 3.0], [22.6, 3.0], [22.7, 3.0], [22.8, 3.0], [22.9, 3.0], [23.0, 3.0], [23.1, 3.0], [23.2, 3.0], [23.3, 4.0], [23.4, 4.0], [23.5, 4.0], [23.6, 4.0], [23.7, 4.0], [23.8, 4.0], [23.9, 4.0], [24.0, 4.0], [24.1, 4.0], [24.2, 4.0], [24.3, 4.0], [24.4, 4.0], [24.5, 4.0], [24.6, 4.0], [24.7, 4.0], [24.8, 4.0], [24.9, 4.0], [25.0, 4.0], [25.1, 4.0], [25.2, 4.0], [25.3, 4.0], [25.4, 4.0], [25.5, 4.0], [25.6, 4.0], [25.7, 4.0], [25.8, 4.0], [25.9, 4.0], [26.0, 4.0], [26.1, 4.0], [26.2, 4.0], [26.3, 4.0], [26.4, 4.0], [26.5, 4.0], [26.6, 4.0], [26.7, 4.0], [26.8, 4.0], [26.9, 4.0], [27.0, 4.0], [27.1, 4.0], [27.2, 4.0], [27.3, 4.0], [27.4, 4.0], [27.5, 4.0], [27.6, 4.0], [27.7, 4.0], [27.8, 4.0], [27.9, 4.0], [28.0, 4.0], [28.1, 5.0], [28.2, 5.0], [28.3, 5.0], [28.4, 5.0], [28.5, 5.0], [28.6, 5.0], [28.7, 5.0], [28.8, 5.0], [28.9, 6.0], [29.0, 6.0], [29.1, 6.0], [29.2, 7.0], [29.3, 7.0], [29.4, 7.0], [29.5, 10.0], [29.6, 12.0], [29.7, 12.0], [29.8, 12.0], [29.9, 13.0], [30.0, 13.0], [30.1, 13.0], [30.2, 13.0], [30.3, 13.0], [30.4, 13.0], [30.5, 13.0], [30.6, 13.0], [30.7, 13.0], [30.8, 14.0], [30.9, 14.0], [31.0, 14.0], [31.1, 14.0], [31.2, 14.0], [31.3, 14.0], [31.4, 14.0], [31.5, 15.0], [31.6, 16.0], [31.7, 28.0], [31.8, 28.0], [31.9, 29.0], [32.0, 30.0], [32.1, 30.0], [32.2, 30.0], [32.3, 30.0], [32.4, 39.0], [32.5, 40.0], [32.6, 40.0], [32.7, 40.0], [32.8, 41.0], [32.9, 50.0], [33.0, 50.0], [33.1, 50.0], [33.2, 50.0], [33.3, 51.0], [33.4, 51.0], [33.5, 51.0], [33.6, 54.0], [33.7, 55.0], [33.8, 55.0], [33.9, 60.0], [34.0, 64.0], [34.1, 64.0], [34.2, 64.0], [34.3, 64.0], [34.4, 64.0], [34.5, 65.0], [34.6, 65.0], [34.7, 65.0], [34.8, 65.0], [34.9, 67.0], [35.0, 67.0], [35.1, 68.0], [35.2, 68.0], [35.3, 68.0], [35.4, 68.0], [35.5, 68.0], [35.6, 68.0], [35.7, 75.0], [35.8, 75.0], [35.9, 75.0], [36.0, 75.0], [36.1, 76.0], [36.2, 76.0], [36.3, 77.0], [36.4, 77.0], [36.5, 77.0], [36.6, 82.0], [36.7, 82.0], [36.8, 82.0], [36.9, 82.0], [37.0, 82.0], [37.1, 83.0], [37.2, 83.0], [37.3, 83.0], [37.4, 83.0], [37.5, 88.0], [37.6, 88.0], [37.7, 88.0], [37.8, 88.0], [37.9, 88.0], [38.0, 88.0], [38.1, 88.0], [38.2, 88.0], [38.3, 88.0], [38.4, 88.0], [38.5, 88.0], [38.6, 88.0], [38.7, 89.0], [38.8, 89.0], [38.9, 89.0], [39.0, 89.0], [39.1, 89.0], [39.2, 96.0], [39.3, 99.0], [39.4, 100.0], [39.5, 100.0], [39.6, 100.0], [39.7, 100.0], [39.8, 101.0], [39.9, 101.0], [40.0, 101.0], [40.1, 101.0], [40.2, 102.0], [40.3, 102.0], [40.4, 102.0], [40.5, 106.0], [40.6, 110.0], [40.7, 110.0], [40.8, 115.0], [40.9, 115.0], [41.0, 115.0], [41.1, 115.0], [41.2, 115.0], [41.3, 122.0], [41.4, 123.0], [41.5, 123.0], [41.6, 124.0], [41.7, 125.0], [41.8, 126.0], [41.9, 129.0], [42.0, 130.0], [42.1, 130.0], [42.2, 130.0], [42.3, 130.0], [42.4, 130.0], [42.5, 130.0], [42.6, 130.0], [42.7, 130.0], [42.8, 131.0], [42.9, 136.0], [43.0, 136.0], [43.1, 137.0], [43.2, 138.0], [43.3, 139.0], [43.4, 141.0], [43.5, 144.0], [43.6, 145.0], [43.7, 145.0], [43.8, 146.0], [43.9, 146.0], [44.0, 148.0], [44.1, 148.0], [44.2, 149.0], [44.3, 149.0], [44.4, 150.0], [44.5, 150.0], [44.6, 150.0], [44.7, 151.0], [44.8, 151.0], [44.9, 151.0], [45.0, 151.0], [45.1, 151.0], [45.2, 152.0], [45.3, 152.0], [45.4, 152.0], [45.5, 152.0], [45.6, 152.0], [45.7, 153.0], [45.8, 153.0], [45.9, 153.0], [46.0, 154.0], [46.1, 154.0], [46.2, 154.0], [46.3, 154.0], [46.4, 155.0], [46.5, 155.0], [46.6, 155.0], [46.7, 156.0], [46.8, 156.0], [46.9, 156.0], [47.0, 157.0], [47.1, 157.0], [47.2, 157.0], [47.3, 158.0], [47.4, 158.0], [47.5, 159.0], [47.6, 159.0], [47.7, 159.0], [47.8, 159.0], [47.9, 160.0], [48.0, 160.0], [48.1, 160.0], [48.2, 160.0], [48.3, 161.0], [48.4, 161.0], [48.5, 162.0], [48.6, 162.0], [48.7, 162.0], [48.8, 162.0], [48.9, 162.0], [49.0, 162.0], [49.1, 162.0], [49.2, 162.0], [49.3, 162.0], [49.4, 163.0], [49.5, 163.0], [49.6, 163.0], [49.7, 163.0], [49.8, 163.0], [49.9, 163.0], [50.0, 164.0], [50.1, 164.0], [50.2, 164.0], [50.3, 164.0], [50.4, 164.0], [50.5, 164.0], [50.6, 164.0], [50.7, 164.0], [50.8, 164.0], [50.9, 164.0], [51.0, 164.0], [51.1, 164.0], [51.2, 165.0], [51.3, 165.0], [51.4, 165.0], [51.5, 165.0], [51.6, 165.0], [51.7, 165.0], [51.8, 165.0], [51.9, 165.0], [52.0, 165.0], [52.1, 166.0], [52.2, 166.0], [52.3, 166.0], [52.4, 167.0], [52.5, 167.0], [52.6, 167.0], [52.7, 167.0], [52.8, 168.0], [52.9, 168.0], [53.0, 168.0], [53.1, 169.0], [53.2, 169.0], [53.3, 169.0], [53.4, 170.0], [53.5, 170.0], [53.6, 170.0], [53.7, 170.0], [53.8, 170.0], [53.9, 170.0], [54.0, 170.0], [54.1, 171.0], [54.2, 171.0], [54.3, 171.0], [54.4, 172.0], [54.5, 173.0], [54.6, 173.0], [54.7, 173.0], [54.8, 173.0], [54.9, 173.0], [55.0, 174.0], [55.1, 174.0], [55.2, 175.0], [55.3, 175.0], [55.4, 175.0], [55.5, 175.0], [55.6, 175.0], [55.7, 175.0], [55.8, 175.0], [55.9, 175.0], [56.0, 176.0], [56.1, 176.0], [56.2, 176.0], [56.3, 176.0], [56.4, 176.0], [56.5, 176.0], [56.6, 176.0], [56.7, 176.0], [56.8, 176.0], [56.9, 176.0], [57.0, 176.0], [57.1, 176.0], [57.2, 176.0], [57.3, 176.0], [57.4, 177.0], [57.5, 177.0], [57.6, 177.0], [57.7, 177.0], [57.8, 177.0], [57.9, 177.0], [58.0, 177.0], [58.1, 178.0], [58.2, 178.0], [58.3, 178.0], [58.4, 178.0], [58.5, 178.0], [58.6, 178.0], [58.7, 178.0], [58.8, 178.0], [58.9, 178.0], [59.0, 178.0], [59.1, 178.0], [59.2, 178.0], [59.3, 179.0], [59.4, 179.0], [59.5, 179.0], [59.6, 179.0], [59.7, 179.0], [59.8, 179.0], [59.9, 179.0], [60.0, 179.0], [60.1, 179.0], [60.2, 180.0], [60.3, 180.0], [60.4, 180.0], [60.5, 180.0], [60.6, 180.0], [60.7, 181.0], [60.8, 182.0], [60.9, 183.0], [61.0, 183.0], [61.1, 183.0], [61.2, 185.0], [61.3, 185.0], [61.4, 186.0], [61.5, 186.0], [61.6, 187.0], [61.7, 187.0], [61.8, 187.0], [61.9, 188.0], [62.0, 188.0], [62.1, 189.0], [62.2, 189.0], [62.3, 189.0], [62.4, 189.0], [62.5, 190.0], [62.6, 190.0], [62.7, 190.0], [62.8, 190.0], [62.9, 190.0], [63.0, 190.0], [63.1, 191.0], [63.2, 191.0], [63.3, 192.0], [63.4, 193.0], [63.5, 193.0], [63.6, 193.0], [63.7, 194.0], [63.8, 194.0], [63.9, 194.0], [64.0, 196.0], [64.1, 197.0], [64.2, 197.0], [64.3, 197.0], [64.4, 198.0], [64.5, 198.0], [64.6, 198.0], [64.7, 203.0], [64.8, 204.0], [64.9, 204.0], [65.0, 205.0], [65.1, 206.0], [65.2, 209.0], [65.3, 211.0], [65.4, 211.0], [65.5, 212.0], [65.6, 212.0], [65.7, 212.0], [65.8, 212.0], [65.9, 213.0], [66.0, 213.0], [66.1, 213.0], [66.2, 214.0], [66.3, 214.0], [66.4, 214.0], [66.5, 215.0], [66.6, 215.0], [66.7, 216.0], [66.8, 217.0], [66.9, 217.0], [67.0, 217.0], [67.1, 219.0], [67.2, 220.0], [67.3, 220.0], [67.4, 221.0], [67.5, 223.0], [67.6, 224.0], [67.7, 225.0], [67.8, 228.0], [67.9, 228.0], [68.0, 229.0], [68.1, 229.0], [68.2, 231.0], [68.3, 233.0], [68.4, 234.0], [68.5, 234.0], [68.6, 235.0], [68.7, 237.0], [68.8, 238.0], [68.9, 238.0], [69.0, 239.0], [69.1, 245.0], [69.2, 249.0], [69.3, 249.0], [69.4, 250.0], [69.5, 250.0], [69.6, 250.0], [69.7, 252.0], [69.8, 252.0], [69.9, 259.0], [70.0, 259.0], [70.1, 259.0], [70.2, 260.0], [70.3, 261.0], [70.4, 262.0], [70.5, 262.0], [70.6, 264.0], [70.7, 264.0], [70.8, 265.0], [70.9, 266.0], [71.0, 267.0], [71.1, 267.0], [71.2, 267.0], [71.3, 268.0], [71.4, 277.0], [71.5, 277.0], [71.6, 278.0], [71.7, 280.0], [71.8, 284.0], [71.9, 284.0], [72.0, 285.0], [72.1, 286.0], [72.2, 286.0], [72.3, 286.0], [72.4, 287.0], [72.5, 287.0], [72.6, 287.0], [72.7, 287.0], [72.8, 288.0], [72.9, 288.0], [73.0, 288.0], [73.1, 288.0], [73.2, 288.0], [73.3, 288.0], [73.4, 288.0], [73.5, 288.0], [73.6, 288.0], [73.7, 289.0], [73.8, 289.0], [73.9, 291.0], [74.0, 291.0], [74.1, 292.0], [74.2, 292.0], [74.3, 296.0], [74.4, 297.0], [74.5, 297.0], [74.6, 297.0], [74.7, 297.0], [74.8, 297.0], [74.9, 297.0], [75.0, 297.0], [75.1, 297.0], [75.2, 297.0], [75.3, 297.0], [75.4, 297.0], [75.5, 297.0], [75.6, 304.0], [75.7, 316.0], [75.8, 316.0], [75.9, 332.0], [76.0, 333.0], [76.1, 336.0], [76.2, 341.0], [76.3, 343.0], [76.4, 350.0], [76.5, 353.0], [76.6, 354.0], [76.7, 357.0], [76.8, 357.0], [76.9, 368.0], [77.0, 369.0], [77.1, 371.0], [77.2, 383.0], [77.3, 402.0], [77.4, 404.0], [77.5, 404.0], [77.6, 422.0], [77.7, 432.0], [77.8, 433.0], [77.9, 444.0], [78.0, 458.0], [78.1, 460.0], [78.2, 473.0], [78.3, 498.0], [78.4, 506.0], [78.5, 511.0], [78.6, 516.0], [78.7, 528.0], [78.8, 528.0], [78.9, 569.0], [79.0, 573.0], [79.1, 608.0], [79.2, 641.0], [79.3, 688.0], [79.4, 766.0], [79.5, 815.0], [79.6, 848.0], [79.7, 859.0], [79.8, 859.0], [79.9, 1032.0], [80.0, 1126.0], [80.1, 1147.0], [80.2, 1147.0], [80.3, 1150.0], [80.4, 1150.0], [80.5, 1151.0], [80.6, 1152.0], [80.7, 1154.0], [80.8, 1155.0], [80.9, 1155.0], [81.0, 1156.0], [81.1, 1160.0], [81.2, 1161.0], [81.3, 1162.0], [81.4, 1162.0], [81.5, 1162.0], [81.6, 1163.0], [81.7, 1163.0], [81.8, 1164.0], [81.9, 1165.0], [82.0, 1166.0], [82.1, 1168.0], [82.2, 1168.0], [82.3, 1169.0], [82.4, 1169.0], [82.5, 1169.0], [82.6, 1169.0], [82.7, 1170.0], [82.8, 1174.0], [82.9, 1174.0], [83.0, 1174.0], [83.1, 1175.0], [83.2, 1178.0], [83.3, 1180.0], [83.4, 1180.0], [83.5, 1247.0], [83.6, 1297.0], [83.7, 1369.0], [83.8, 1370.0], [83.9, 1382.0], [84.0, 1398.0], [84.1, 1425.0], [84.2, 1591.0], [84.3, 1797.0], [84.4, 1825.0], [84.5, 1831.0], [84.6, 1870.0], [84.7, 1897.0], [84.8, 1931.0], [84.9, 1931.0], [85.0, 1938.0], [85.1, 1985.0], [85.2, 2043.0], [85.3, 2087.0], [85.4, 2087.0], [85.5, 2105.0], [85.6, 2116.0], [85.7, 2132.0], [85.8, 2133.0], [85.9, 2170.0], [86.0, 2185.0], [86.1, 2186.0], [86.2, 2186.0], [86.3, 2187.0], [86.4, 2187.0], [86.5, 2187.0], [86.6, 2187.0], [86.7, 2188.0], [86.8, 2188.0], [86.9, 2188.0], [87.0, 2188.0], [87.1, 2188.0], [87.2, 2188.0], [87.3, 2189.0], [87.4, 2189.0], [87.5, 2189.0], [87.6, 2190.0], [87.7, 2198.0], [87.8, 2199.0], [87.9, 2199.0], [88.0, 2200.0], [88.1, 2200.0], [88.2, 2243.0], [88.3, 2254.0], [88.4, 2254.0], [88.5, 2255.0], [88.6, 2268.0], [88.7, 2270.0], [88.8, 2283.0], [88.9, 2284.0], [89.0, 2297.0], [89.1, 2304.0], [89.2, 2305.0], [89.3, 2324.0], [89.4, 2434.0], [89.5, 2434.0], [89.6, 2435.0], [89.7, 2436.0], [89.8, 6167.0], [89.9, 9983.0], [90.0, 15408.0], [90.1, 20839.0], [90.2, 22899.0], [90.3, 28785.0], [90.4, 29118.0], [90.5, 29292.0], [90.6, 29692.0], [90.7, 30713.0], [90.8, 30713.0], [90.9, 30714.0], [91.0, 30714.0], [91.1, 30714.0], [91.2, 30714.0], [91.3, 30714.0], [91.4, 30714.0], [91.5, 30714.0], [91.6, 30715.0], [91.7, 30715.0], [91.8, 30715.0], [91.9, 30715.0], [92.0, 30715.0], [92.1, 30715.0], [92.2, 30715.0], [92.3, 30715.0], [92.4, 30715.0], [92.5, 30715.0], [92.6, 30715.0], [92.7, 30715.0], [92.8, 30715.0], [92.9, 30715.0], [93.0, 30716.0], [93.1, 30716.0], [93.2, 30716.0], [93.3, 30716.0], [93.4, 30716.0], [93.5, 30716.0], [93.6, 30716.0], [93.7, 30717.0], [93.8, 30717.0], [93.9, 30717.0], [94.0, 30718.0], [94.1, 30718.0], [94.2, 30718.0], [94.3, 30719.0], [94.4, 30719.0], [94.5, 30719.0], [94.6, 30719.0], [94.7, 30719.0], [94.8, 30719.0], [94.9, 30720.0], [95.0, 30720.0], [95.1, 30720.0], [95.2, 30720.0], [95.3, 30721.0], [95.4, 30971.0], [95.5, 31020.0], [95.6, 31075.0], [95.7, 32901.0], [95.8, 32901.0], [95.9, 32902.0], [96.0, 32902.0], [96.1, 32902.0], [96.2, 32902.0], [96.3, 32902.0], [96.4, 32902.0], [96.5, 32902.0], [96.6, 32903.0], [96.7, 32903.0], [96.8, 32903.0], [96.9, 32903.0], [97.0, 32903.0], [97.1, 32903.0], [97.2, 32903.0], [97.3, 32903.0], [97.4, 32903.0], [97.5, 32903.0], [97.6, 32903.0], [97.7, 32903.0], [97.8, 32904.0], [97.9, 32904.0], [98.0, 32904.0], [98.1, 32904.0], [98.2, 32904.0], [98.3, 32904.0], [98.4, 32904.0], [98.5, 32904.0], [98.6, 32905.0], [98.7, 32905.0], [98.8, 32905.0], [98.9, 32905.0], [99.0, 32906.0], [99.1, 32906.0], [99.2, 32907.0], [99.3, 32908.0], [99.4, 32908.0], [99.5, 32908.0], [99.6, 32908.0], [99.7, 32908.0], [99.8, 32909.0], [99.9, 32909.0], [100.0, 32910.0]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 983.0, "series": [{"data": [[0.0, 983.0], [600.0, 6.0], [700.0, 4.0], [800.0, 8.0], [900.0, 2.0], [1000.0, 2.0], [1100.0, 88.0], [1200.0, 3.0], [1300.0, 10.0], [1400.0, 4.0], [1500.0, 1.0], [1600.0, 2.0], [1700.0, 1.0], [1800.0, 10.0], [1900.0, 10.0], [2000.0, 8.0], [2100.0, 63.0], [2200.0, 28.0], [2300.0, 7.0], [2400.0, 9.0], [5000.0, 1.0], [6100.0, 2.0], [9800.0, 1.0], [9900.0, 1.0], [10900.0, 1.0], [15400.0, 1.0], [17400.0, 1.0], [20800.0, 1.0], [20700.0, 1.0], [21900.0, 1.0], [22800.0, 1.0], [24500.0, 1.0], [100.0, 634.0], [27800.0, 1.0], [29600.0, 2.0], [29200.0, 3.0], [28700.0, 1.0], [28800.0, 1.0], [29100.0, 1.0], [30700.0, 119.0], [31000.0, 3.0], [31200.0, 1.0], [31700.0, 1.0], [30900.0, 3.0], [32900.0, 108.0], [200.0, 272.0], [300.0, 43.0], [400.0, 27.0], [500.0, 18.0]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 32900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2499.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2499.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 197.03508064516132, "minX": 1.7124432E12, "maxY": 250.0, "series": [{"data": [[1.7124432E12, 250.0], [1.71244326E12, 197.03508064516132]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244326E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 3.0, "maxY": 10751.961139896375, "series": [{"data": [[3.0, 166.33333333333334], [5.0, 173.5], [7.0, 159.5], [8.0, 174.0], [9.0, 145.0], [10.0, 145.0], [12.0, 185.0], [15.0, 123.25], [16.0, 168.5], [17.0, 1.0], [18.0, 0.0], [23.0, 157.14285714285714], [24.0, 1.0], [30.0, 158.11111111111111], [33.0, 2.0], [32.0, 3.0], [34.0, 2.0], [37.0, 170.0], [41.0, 149.41666666666669], [40.0, 156.75], [42.0, 1.5], [49.0, 165.00000000000003], [51.0, 169.0], [50.0, 1.0], [53.0, 2.0], [55.0, 2.0], [54.0, 156.0], [57.0, 2.0], [56.0, 173.5], [59.0, 167.75], [61.0, 3.0], [60.0, 2.25], [63.0, 90.0], [62.0, 2.0], [66.0, 118.0], [65.0, 1.0], [64.0, 599.1818181818182], [71.0, 3.0], [70.0, 204.38461538461542], [69.0, 3.0], [68.0, 3.0], [75.0, 300.0], [74.0, 2.0], [73.0, 2.0], [72.0, 474.6451612903227], [79.0, 3.0], [77.0, 3.0], [76.0, 4.333333333333333], [83.0, 13.0], [82.0, 87.5], [81.0, 663.6153846153846], [87.0, 3.0], [85.0, 3.5], [91.0, 161.0], [90.0, 130.0], [89.0, 4.0], [88.0, 3.8571428571428568], [95.0, 4.0], [93.0, 83.37500000000001], [92.0, 181.89999999999998], [99.0, 3.25], [98.0, 4.0], [97.0, 88.5], [96.0, 176.0], [103.0, 2.5], [102.0, 2.0], [101.0, 2.0], [100.0, 3.0], [106.0, 86.02083333333334], [104.0, 156.79999999999995], [110.0, 658.0], [109.0, 151.99999999999997], [108.0, 130.5], [115.0, 823.8695652173914], [114.0, 310.9200000000001], [113.0, 655.3076923076923], [112.0, 3.0], [119.0, 2.0], [118.0, 516.1538461538463], [117.0, 832.1666666666666], [116.0, 3.0], [123.0, 161.25], [122.0, 951.8571428571429], [120.0, 352.5238095238095], [127.0, 109.0], [126.0, 345.85714285714283], [125.0, 217.12500000000006], [124.0, 406.0769230769231], [134.0, 1.0], [133.0, 542.4], [132.0, 545.3333333333334], [131.0, 39.25], [130.0, 166.0], [128.0, 1.0], [140.0, 103.0], [139.0, 149.66666666666666], [138.0, 171.0], [150.0, 154.0], [147.0, 166.0], [156.0, 152.0], [155.0, 152.0], [152.0, 1.5], [167.0, 179.5], [166.0, 179.0], [162.0, 1.0], [161.0, 225.125], [160.0, 151.0], [171.0, 163.0], [169.0, 345.0], [168.0, 165.66666666666669], [182.0, 165.0], [177.0, 167.0], [176.0, 252.62500000000003], [191.0, 3.0], [190.0, 178.33333333333334], [189.0, 3.0], [188.0, 310.57142857142856], [186.0, 2.0], [185.0, 2.0], [184.0, 159.66666666666666], [199.0, 66.15384615384616], [197.0, 5.0], [196.0, 4.0], [194.0, 242.0], [192.0, 3.0], [207.0, 93.63636363636364], [206.0, 3.0], [205.0, 3.0], [204.0, 2.6666666666666665], [203.0, 171.42857142857142], [202.0, 1.0], [200.0, 243.6153846153846], [215.0, 162.28571428571428], [214.0, 107.04761904761904], [213.0, 2.0], [212.0, 2.3333333333333335], [210.0, 3.0], [209.0, 3.0], [208.0, 202.08333333333334], [222.0, 129.7356321839081], [221.0, 195.57692307692307], [220.0, 2.0833333333333335], [219.0, 107.09090909090911], [218.0, 129.89999999999998], [217.0, 2.1428571428571432], [231.0, 108.12499999999999], [230.0, 2.6666666666666665], [229.0, 230.08333333333334], [228.0, 81.66666666666666], [226.0, 2.5], [224.0, 163.72413793103445], [239.0, 88.0], [238.0, 90.62500000000001], [237.0, 137.14285714285717], [236.0, 100.0], [235.0, 100.25], [234.0, 83.57142857142857], [233.0, 166.80582524271844], [232.0, 224.77777777777777], [247.0, 156.0], [246.0, 141.0], [245.0, 170.0], [244.0, 9891.137349397595], [242.0, 354.61538461538464], [241.0, 125.07499999999997], [240.0, 88.0], [250.0, 10751.961139896375], [249.0, 65.5], [248.0, 96.2]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}, {"data": [[197.45759999999976, 3431.637599999993]], "isOverall": false, "label": "HTTP Request (light image)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 250.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 154.33333333333334, "minX": 1.7124432E12, "maxY": 305583.1, "series": [{"data": [[1.7124432E12, 154.33333333333334], [1.71244326E12, 41566.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7124432E12, 4098.55], [1.71244326E12, 305583.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244326E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3427.5681451612886, "minX": 1.7124432E12, "maxY": 3936.25, "series": [{"data": [[1.7124432E12, 3936.25], [1.71244326E12, 3427.5681451612886]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244326E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3418.616532258073, "minX": 1.7124432E12, "maxY": 3936.1499999999996, "series": [{"data": [[1.7124432E12, 3936.1499999999996], [1.71244326E12, 3418.616532258073]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244326E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 143.19032258064496, "minX": 1.7124432E12, "maxY": 611.1999999999999, "series": [{"data": [[1.7124432E12, 611.1999999999999], [1.71244326E12, 143.19032258064496]], "isOverall": false, "label": "HTTP Request (light image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244326E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 24529.0, "minX": 1.71244326E12, "maxY": 24529.0, "series": [{"data": [[1.71244326E12, 24529.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71244326E12, 24529.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71244326E12, 24529.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71244326E12, 24529.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71244326E12, 24529.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71244326E12, 24529.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244326E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 150.5, "minX": 1.0, "maxY": 24529.0, "series": [{"data": [[2.0, 24529.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 9876.0], [1.0, 10919.0], [8.0, 150.5], [549.0, 156.0], [704.0, 193.0], [374.0, 165.0], [13.0, 1826.0], [843.0, 163.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 843.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 150.0, "minX": 1.0, "maxY": 24529.0, "series": [{"data": [[2.0, 24529.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 9876.0], [1.0, 10919.0], [8.0, 150.0], [549.0, 156.0], [704.0, 193.0], [374.0, 165.0], [13.0, 1826.0], [843.0, 162.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 843.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.5, "minX": 1.7124432E12, "maxY": 37.166666666666664, "series": [{"data": [[1.7124432E12, 4.5], [1.71244326E12, 37.166666666666664]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244326E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7124432E12, "maxY": 24.816666666666666, "series": [{"data": [[1.71244326E12, 0.016666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7124432E12, 0.3333333333333333], [1.71244326E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.71244326E12, 24.816666666666666]], "isOverall": false, "label": "502", "isController": false}, {"data": [[1.71244326E12, 16.483333333333334]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71244326E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7124432E12, "maxY": 41.31666666666667, "series": [{"data": [[1.7124432E12, 0.3333333333333333], [1.71244326E12, 41.31666666666667]], "isOverall": false, "label": "HTTP Request (light image)-failure", "isController": false}, {"data": [[1.71244326E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request (light image)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244326E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7124432E12, "maxY": 41.31666666666667, "series": [{"data": [[1.71244326E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7124432E12, 0.3333333333333333], [1.71244326E12, 41.31666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71244326E12, "title": "Total Transactions Per Second"}},
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

