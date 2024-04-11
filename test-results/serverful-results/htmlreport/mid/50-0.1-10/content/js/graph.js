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
        data: {"result": {"minY": 374.0, "minX": 0.0, "maxY": 28285.0, "series": [{"data": [[0.0, 374.0], [0.1, 374.0], [0.2, 430.0], [0.3, 430.0], [0.4, 430.0], [0.5, 430.0], [0.6, 430.0], [0.7, 430.0], [0.8, 441.0], [0.9, 441.0], [1.0, 460.0], [1.1, 460.0], [1.2, 460.0], [1.3, 460.0], [1.4, 460.0], [1.5, 460.0], [1.6, 485.0], [1.7, 485.0], [1.8, 487.0], [1.9, 487.0], [2.0, 487.0], [2.1, 487.0], [2.2, 487.0], [2.3, 487.0], [2.4, 541.0], [2.5, 541.0], [2.6, 592.0], [2.7, 592.0], [2.8, 592.0], [2.9, 606.0], [3.0, 606.0], [3.1, 616.0], [3.2, 616.0], [3.3, 621.0], [3.4, 621.0], [3.5, 656.0], [3.6, 656.0], [3.7, 800.0], [3.8, 800.0], [3.9, 825.0], [4.0, 825.0], [4.1, 867.0], [4.2, 867.0], [4.3, 867.0], [4.4, 867.0], [4.5, 868.0], [4.6, 868.0], [4.7, 868.0], [4.8, 868.0], [4.9, 898.0], [5.0, 898.0], [5.1, 898.0], [5.2, 898.0], [5.3, 1007.0], [5.4, 1007.0], [5.5, 1126.0], [5.6, 1126.0], [5.7, 1671.0], [5.8, 1671.0], [5.9, 2298.0], [6.0, 2298.0], [6.1, 8706.0], [6.2, 8706.0], [6.3, 10188.0], [6.4, 10188.0], [6.5, 10207.0], [6.6, 10207.0], [6.7, 10936.0], [6.8, 10936.0], [6.9, 14091.0], [7.0, 14091.0], [7.1, 14304.0], [7.2, 14304.0], [7.3, 14544.0], [7.4, 14544.0], [7.5, 14568.0], [7.6, 14568.0], [7.7, 14823.0], [7.8, 14823.0], [7.9, 15658.0], [8.0, 15658.0], [8.1, 15970.0], [8.2, 15970.0], [8.3, 16041.0], [8.4, 16041.0], [8.5, 16334.0], [8.6, 16334.0], [8.7, 16433.0], [8.8, 16553.0], [8.9, 16553.0], [9.0, 16593.0], [9.1, 16593.0], [9.2, 17756.0], [9.3, 17756.0], [9.4, 17876.0], [9.5, 17876.0], [9.6, 17917.0], [9.7, 17917.0], [9.8, 17927.0], [9.9, 17927.0], [10.0, 17953.0], [10.1, 17953.0], [10.2, 18069.0], [10.3, 18069.0], [10.4, 18088.0], [10.5, 18088.0], [10.6, 18282.0], [10.7, 18282.0], [10.8, 18353.0], [10.9, 18353.0], [11.0, 18646.0], [11.1, 18646.0], [11.2, 18660.0], [11.3, 18660.0], [11.4, 18673.0], [11.5, 18673.0], [11.6, 18679.0], [11.7, 18679.0], [11.8, 18746.0], [11.9, 18746.0], [12.0, 18836.0], [12.1, 18836.0], [12.2, 19079.0], [12.3, 19079.0], [12.4, 19347.0], [12.5, 19347.0], [12.6, 19556.0], [12.7, 19556.0], [12.8, 19625.0], [12.9, 19625.0], [13.0, 19765.0], [13.1, 19765.0], [13.2, 19770.0], [13.3, 19770.0], [13.4, 19880.0], [13.5, 19880.0], [13.6, 19896.0], [13.7, 19896.0], [13.8, 19896.0], [13.9, 19896.0], [14.0, 19952.0], [14.1, 19952.0], [14.2, 20024.0], [14.3, 20024.0], [14.4, 20483.0], [14.5, 20483.0], [14.6, 20573.0], [14.7, 20573.0], [14.8, 20702.0], [14.9, 20702.0], [15.0, 20892.0], [15.1, 20892.0], [15.2, 20909.0], [15.3, 20909.0], [15.4, 20989.0], [15.5, 20989.0], [15.6, 21008.0], [15.7, 21008.0], [15.8, 21064.0], [15.9, 21064.0], [16.0, 21149.0], [16.1, 21149.0], [16.2, 21193.0], [16.3, 21193.0], [16.4, 21226.0], [16.5, 21226.0], [16.6, 21236.0], [16.7, 21236.0], [16.8, 21259.0], [16.9, 21259.0], [17.0, 21333.0], [17.1, 21333.0], [17.2, 21415.0], [17.3, 21415.0], [17.4, 21415.0], [17.5, 21415.0], [17.6, 21425.0], [17.7, 21425.0], [17.8, 21458.0], [17.9, 21458.0], [18.0, 21494.0], [18.1, 21494.0], [18.2, 21531.0], [18.3, 21531.0], [18.4, 21602.0], [18.5, 21602.0], [18.6, 21634.0], [18.7, 21634.0], [18.8, 21780.0], [18.9, 21780.0], [19.0, 21842.0], [19.1, 21842.0], [19.2, 21885.0], [19.3, 21885.0], [19.4, 21898.0], [19.5, 21898.0], [19.6, 21989.0], [19.7, 21989.0], [19.8, 22024.0], [19.9, 22024.0], [20.0, 22026.0], [20.1, 22026.0], [20.2, 22043.0], [20.3, 22043.0], [20.4, 22064.0], [20.5, 22064.0], [20.6, 22065.0], [20.7, 22065.0], [20.8, 22071.0], [20.9, 22071.0], [21.0, 22092.0], [21.1, 22092.0], [21.2, 22150.0], [21.3, 22150.0], [21.4, 22180.0], [21.5, 22180.0], [21.6, 22238.0], [21.7, 22238.0], [21.8, 22245.0], [21.9, 22245.0], [22.0, 22245.0], [22.1, 22245.0], [22.2, 22306.0], [22.3, 22306.0], [22.4, 22353.0], [22.5, 22353.0], [22.6, 22370.0], [22.7, 22370.0], [22.8, 22401.0], [22.9, 22401.0], [23.0, 22477.0], [23.1, 22477.0], [23.2, 22498.0], [23.3, 22498.0], [23.4, 22509.0], [23.5, 22509.0], [23.6, 22524.0], [23.7, 22524.0], [23.8, 22524.0], [23.9, 22524.0], [24.0, 22554.0], [24.1, 22554.0], [24.2, 22593.0], [24.3, 22593.0], [24.4, 22597.0], [24.5, 22597.0], [24.6, 22622.0], [24.7, 22622.0], [24.8, 22679.0], [24.9, 22679.0], [25.0, 22693.0], [25.1, 22693.0], [25.2, 22696.0], [25.3, 22696.0], [25.4, 22724.0], [25.5, 22724.0], [25.6, 22751.0], [25.7, 22751.0], [25.8, 22781.0], [25.9, 22781.0], [26.0, 22852.0], [26.1, 22852.0], [26.2, 22931.0], [26.3, 22931.0], [26.4, 22968.0], [26.5, 22968.0], [26.6, 22974.0], [26.7, 22974.0], [26.8, 23036.0], [26.9, 23036.0], [27.0, 23062.0], [27.1, 23062.0], [27.2, 23083.0], [27.3, 23083.0], [27.4, 23098.0], [27.5, 23098.0], [27.6, 23100.0], [27.7, 23100.0], [27.8, 23100.0], [27.9, 23100.0], [28.0, 23119.0], [28.1, 23119.0], [28.2, 23161.0], [28.3, 23161.0], [28.4, 23163.0], [28.5, 23163.0], [28.6, 23177.0], [28.7, 23177.0], [28.8, 23178.0], [28.9, 23178.0], [29.0, 23180.0], [29.1, 23180.0], [29.2, 23206.0], [29.3, 23206.0], [29.4, 23214.0], [29.5, 23214.0], [29.6, 23214.0], [29.7, 23214.0], [29.8, 23232.0], [29.9, 23232.0], [30.0, 23273.0], [30.1, 23273.0], [30.2, 23284.0], [30.3, 23284.0], [30.4, 23308.0], [30.5, 23308.0], [30.6, 23341.0], [30.7, 23341.0], [30.8, 23369.0], [30.9, 23369.0], [31.0, 23372.0], [31.1, 23372.0], [31.2, 23401.0], [31.3, 23401.0], [31.4, 23417.0], [31.5, 23417.0], [31.6, 23422.0], [31.7, 23422.0], [31.8, 23428.0], [31.9, 23428.0], [32.0, 23445.0], [32.1, 23445.0], [32.2, 23457.0], [32.3, 23457.0], [32.4, 23467.0], [32.5, 23467.0], [32.6, 23504.0], [32.7, 23504.0], [32.8, 23505.0], [32.9, 23505.0], [33.0, 23521.0], [33.1, 23521.0], [33.2, 23549.0], [33.3, 23549.0], [33.4, 23549.0], [33.5, 23549.0], [33.6, 23567.0], [33.7, 23567.0], [33.8, 23613.0], [33.9, 23613.0], [34.0, 23632.0], [34.1, 23632.0], [34.2, 23632.0], [34.3, 23632.0], [34.4, 23634.0], [34.5, 23634.0], [34.6, 23643.0], [34.7, 23643.0], [34.8, 23674.0], [34.9, 23674.0], [35.0, 23686.0], [35.1, 23686.0], [35.2, 23692.0], [35.3, 23692.0], [35.4, 23712.0], [35.5, 23712.0], [35.6, 23723.0], [35.7, 23723.0], [35.8, 23755.0], [35.9, 23755.0], [36.0, 23768.0], [36.1, 23768.0], [36.2, 23780.0], [36.3, 23780.0], [36.4, 23781.0], [36.5, 23781.0], [36.6, 23812.0], [36.7, 23812.0], [36.8, 23813.0], [36.9, 23813.0], [37.0, 23821.0], [37.1, 23821.0], [37.2, 23837.0], [37.3, 23837.0], [37.4, 23849.0], [37.5, 23849.0], [37.6, 23850.0], [37.7, 23850.0], [37.8, 23853.0], [37.9, 23853.0], [38.0, 23867.0], [38.1, 23867.0], [38.2, 23879.0], [38.3, 23879.0], [38.4, 23887.0], [38.5, 23887.0], [38.6, 23890.0], [38.7, 23890.0], [38.8, 23890.0], [38.9, 23894.0], [39.0, 23894.0], [39.1, 23907.0], [39.2, 23907.0], [39.3, 23915.0], [39.4, 23915.0], [39.5, 23917.0], [39.6, 23917.0], [39.7, 23958.0], [39.8, 23958.0], [39.9, 23963.0], [40.0, 23963.0], [40.1, 23963.0], [40.2, 23963.0], [40.3, 23977.0], [40.4, 23977.0], [40.5, 23998.0], [40.6, 23998.0], [40.7, 24021.0], [40.8, 24021.0], [40.9, 24024.0], [41.0, 24024.0], [41.1, 24046.0], [41.2, 24046.0], [41.3, 24047.0], [41.4, 24047.0], [41.5, 24076.0], [41.6, 24076.0], [41.7, 24077.0], [41.8, 24077.0], [41.9, 24082.0], [42.0, 24082.0], [42.1, 24090.0], [42.2, 24090.0], [42.3, 24101.0], [42.4, 24101.0], [42.5, 24107.0], [42.6, 24107.0], [42.7, 24117.0], [42.8, 24117.0], [42.9, 24119.0], [43.0, 24119.0], [43.1, 24132.0], [43.2, 24132.0], [43.3, 24135.0], [43.4, 24135.0], [43.5, 24145.0], [43.6, 24145.0], [43.7, 24156.0], [43.8, 24156.0], [43.9, 24172.0], [44.0, 24172.0], [44.1, 24172.0], [44.2, 24172.0], [44.3, 24174.0], [44.4, 24174.0], [44.5, 24177.0], [44.6, 24177.0], [44.7, 24188.0], [44.8, 24188.0], [44.9, 24198.0], [45.0, 24198.0], [45.1, 24201.0], [45.2, 24201.0], [45.3, 24202.0], [45.4, 24202.0], [45.5, 24211.0], [45.6, 24211.0], [45.7, 24225.0], [45.8, 24225.0], [45.9, 24234.0], [46.0, 24234.0], [46.1, 24245.0], [46.2, 24245.0], [46.3, 24258.0], [46.4, 24258.0], [46.5, 24259.0], [46.6, 24259.0], [46.7, 24260.0], [46.8, 24260.0], [46.9, 24274.0], [47.0, 24274.0], [47.1, 24294.0], [47.2, 24294.0], [47.3, 24309.0], [47.4, 24309.0], [47.5, 24313.0], [47.6, 24313.0], [47.7, 24334.0], [47.8, 24334.0], [47.9, 24354.0], [48.0, 24354.0], [48.1, 24360.0], [48.2, 24360.0], [48.3, 24381.0], [48.4, 24381.0], [48.5, 24384.0], [48.6, 24384.0], [48.7, 24394.0], [48.8, 24394.0], [48.9, 24398.0], [49.0, 24398.0], [49.1, 24403.0], [49.2, 24403.0], [49.3, 24407.0], [49.4, 24407.0], [49.5, 24409.0], [49.6, 24409.0], [49.7, 24420.0], [49.8, 24420.0], [49.9, 24427.0], [50.0, 24427.0], [50.1, 24434.0], [50.2, 24434.0], [50.3, 24447.0], [50.4, 24447.0], [50.5, 24454.0], [50.6, 24454.0], [50.7, 24455.0], [50.8, 24455.0], [50.9, 24456.0], [51.0, 24456.0], [51.1, 24462.0], [51.2, 24462.0], [51.3, 24471.0], [51.4, 24471.0], [51.5, 24488.0], [51.6, 24488.0], [51.7, 24495.0], [51.8, 24495.0], [51.9, 24502.0], [52.0, 24502.0], [52.1, 24507.0], [52.2, 24507.0], [52.3, 24511.0], [52.4, 24511.0], [52.5, 24514.0], [52.6, 24514.0], [52.7, 24514.0], [52.8, 24514.0], [52.9, 24521.0], [53.0, 24521.0], [53.1, 24522.0], [53.2, 24522.0], [53.3, 24532.0], [53.4, 24532.0], [53.5, 24534.0], [53.6, 24534.0], [53.7, 24542.0], [53.8, 24542.0], [53.9, 24549.0], [54.0, 24549.0], [54.1, 24558.0], [54.2, 24558.0], [54.3, 24581.0], [54.4, 24581.0], [54.5, 24581.0], [54.6, 24581.0], [54.7, 24589.0], [54.8, 24589.0], [54.9, 24604.0], [55.0, 24604.0], [55.1, 24604.0], [55.2, 24604.0], [55.3, 24608.0], [55.4, 24608.0], [55.5, 24609.0], [55.6, 24609.0], [55.7, 24610.0], [55.8, 24610.0], [55.9, 24638.0], [56.0, 24638.0], [56.1, 24655.0], [56.2, 24655.0], [56.3, 24665.0], [56.4, 24665.0], [56.5, 24675.0], [56.6, 24675.0], [56.7, 24677.0], [56.8, 24677.0], [56.9, 24681.0], [57.0, 24681.0], [57.1, 24703.0], [57.2, 24703.0], [57.3, 24703.0], [57.4, 24703.0], [57.5, 24708.0], [57.6, 24708.0], [57.7, 24719.0], [57.8, 24719.0], [57.9, 24720.0], [58.0, 24720.0], [58.1, 24727.0], [58.2, 24727.0], [58.3, 24728.0], [58.4, 24728.0], [58.5, 24748.0], [58.6, 24748.0], [58.7, 24758.0], [58.8, 24758.0], [58.9, 24766.0], [59.0, 24766.0], [59.1, 24776.0], [59.2, 24776.0], [59.3, 24830.0], [59.4, 24830.0], [59.5, 24832.0], [59.6, 24832.0], [59.7, 24853.0], [59.8, 24853.0], [59.9, 24856.0], [60.0, 24856.0], [60.1, 24859.0], [60.2, 24859.0], [60.3, 24871.0], [60.4, 24871.0], [60.5, 24873.0], [60.6, 24873.0], [60.7, 24889.0], [60.8, 24889.0], [60.9, 24896.0], [61.0, 24896.0], [61.1, 24903.0], [61.2, 24903.0], [61.3, 24906.0], [61.4, 24906.0], [61.5, 24910.0], [61.6, 24910.0], [61.7, 24914.0], [61.8, 24914.0], [61.9, 24917.0], [62.0, 24917.0], [62.1, 24920.0], [62.2, 24920.0], [62.3, 24923.0], [62.4, 24923.0], [62.5, 24962.0], [62.6, 24962.0], [62.7, 24963.0], [62.8, 24963.0], [62.9, 24965.0], [63.0, 24965.0], [63.1, 24976.0], [63.2, 24976.0], [63.3, 24977.0], [63.4, 24977.0], [63.5, 24994.0], [63.6, 24994.0], [63.7, 24996.0], [63.8, 24996.0], [63.9, 24998.0], [64.0, 24998.0], [64.1, 24998.0], [64.2, 24998.0], [64.3, 25023.0], [64.4, 25023.0], [64.5, 25029.0], [64.6, 25029.0], [64.7, 25034.0], [64.8, 25034.0], [64.9, 25040.0], [65.0, 25040.0], [65.1, 25058.0], [65.2, 25058.0], [65.3, 25059.0], [65.4, 25059.0], [65.5, 25060.0], [65.6, 25060.0], [65.7, 25071.0], [65.8, 25071.0], [65.9, 25074.0], [66.0, 25074.0], [66.1, 25097.0], [66.2, 25097.0], [66.3, 25099.0], [66.4, 25099.0], [66.5, 25104.0], [66.6, 25104.0], [66.7, 25112.0], [66.8, 25112.0], [66.9, 25114.0], [67.0, 25114.0], [67.1, 25120.0], [67.2, 25120.0], [67.3, 25139.0], [67.4, 25139.0], [67.5, 25140.0], [67.6, 25140.0], [67.7, 25150.0], [67.8, 25150.0], [67.9, 25181.0], [68.0, 25181.0], [68.1, 25201.0], [68.2, 25201.0], [68.3, 25209.0], [68.4, 25209.0], [68.5, 25209.0], [68.6, 25209.0], [68.7, 25210.0], [68.8, 25210.0], [68.9, 25212.0], [69.0, 25212.0], [69.1, 25222.0], [69.2, 25222.0], [69.3, 25234.0], [69.4, 25234.0], [69.5, 25237.0], [69.6, 25237.0], [69.7, 25248.0], [69.8, 25248.0], [69.9, 25260.0], [70.0, 25260.0], [70.1, 25268.0], [70.2, 25268.0], [70.3, 25290.0], [70.4, 25290.0], [70.5, 25291.0], [70.6, 25291.0], [70.7, 25295.0], [70.8, 25295.0], [70.9, 25300.0], [71.0, 25300.0], [71.1, 25305.0], [71.2, 25305.0], [71.3, 25318.0], [71.4, 25318.0], [71.5, 25322.0], [71.6, 25322.0], [71.7, 25330.0], [71.8, 25330.0], [71.9, 25335.0], [72.0, 25335.0], [72.1, 25337.0], [72.2, 25337.0], [72.3, 25340.0], [72.4, 25340.0], [72.5, 25365.0], [72.6, 25365.0], [72.7, 25367.0], [72.8, 25367.0], [72.9, 25381.0], [73.0, 25381.0], [73.1, 25398.0], [73.2, 25398.0], [73.3, 25406.0], [73.4, 25406.0], [73.5, 25415.0], [73.6, 25415.0], [73.7, 25415.0], [73.8, 25415.0], [73.9, 25425.0], [74.0, 25425.0], [74.1, 25438.0], [74.2, 25438.0], [74.3, 25443.0], [74.4, 25443.0], [74.5, 25449.0], [74.6, 25449.0], [74.7, 25465.0], [74.8, 25465.0], [74.9, 25469.0], [75.0, 25469.0], [75.1, 25470.0], [75.2, 25470.0], [75.3, 25473.0], [75.4, 25473.0], [75.5, 25502.0], [75.6, 25502.0], [75.7, 25509.0], [75.8, 25509.0], [75.9, 25511.0], [76.0, 25511.0], [76.1, 25517.0], [76.2, 25517.0], [76.3, 25542.0], [76.4, 25542.0], [76.5, 25548.0], [76.6, 25548.0], [76.7, 25550.0], [76.8, 25550.0], [76.9, 25551.0], [77.0, 25551.0], [77.1, 25552.0], [77.2, 25552.0], [77.3, 25556.0], [77.4, 25556.0], [77.5, 25556.0], [77.6, 25556.0], [77.7, 25558.0], [77.8, 25558.0], [77.9, 25561.0], [78.0, 25561.0], [78.1, 25568.0], [78.2, 25568.0], [78.3, 25590.0], [78.4, 25590.0], [78.5, 25610.0], [78.6, 25610.0], [78.7, 25617.0], [78.8, 25617.0], [78.9, 25617.0], [79.0, 25617.0], [79.1, 25621.0], [79.2, 25621.0], [79.3, 25646.0], [79.4, 25646.0], [79.5, 25647.0], [79.6, 25647.0], [79.7, 25652.0], [79.8, 25652.0], [79.9, 25663.0], [80.0, 25663.0], [80.1, 25670.0], [80.2, 25670.0], [80.3, 25697.0], [80.4, 25697.0], [80.5, 25699.0], [80.6, 25699.0], [80.7, 25702.0], [80.8, 25702.0], [80.9, 25715.0], [81.0, 25715.0], [81.1, 25723.0], [81.2, 25723.0], [81.3, 25723.0], [81.4, 25723.0], [81.5, 25736.0], [81.6, 25736.0], [81.7, 25751.0], [81.8, 25751.0], [81.9, 25754.0], [82.0, 25754.0], [82.1, 25754.0], [82.2, 25754.0], [82.3, 25775.0], [82.4, 25775.0], [82.5, 25780.0], [82.6, 25780.0], [82.7, 25800.0], [82.8, 25800.0], [82.9, 25805.0], [83.0, 25805.0], [83.1, 25816.0], [83.2, 25816.0], [83.3, 25846.0], [83.4, 25846.0], [83.5, 25863.0], [83.6, 25863.0], [83.7, 25864.0], [83.8, 25864.0], [83.9, 25875.0], [84.0, 25875.0], [84.1, 25912.0], [84.2, 25912.0], [84.3, 25926.0], [84.4, 25926.0], [84.5, 25940.0], [84.6, 25940.0], [84.7, 25954.0], [84.8, 25954.0], [84.9, 25955.0], [85.0, 25955.0], [85.1, 25965.0], [85.2, 25965.0], [85.3, 25974.0], [85.4, 25974.0], [85.5, 25990.0], [85.6, 25990.0], [85.7, 26022.0], [85.8, 26022.0], [85.9, 26029.0], [86.0, 26029.0], [86.1, 26046.0], [86.2, 26046.0], [86.3, 26049.0], [86.4, 26049.0], [86.5, 26059.0], [86.6, 26059.0], [86.7, 26088.0], [86.8, 26088.0], [86.9, 26104.0], [87.0, 26104.0], [87.1, 26105.0], [87.2, 26105.0], [87.3, 26105.0], [87.4, 26105.0], [87.5, 26120.0], [87.6, 26120.0], [87.7, 26135.0], [87.8, 26135.0], [87.9, 26137.0], [88.0, 26137.0], [88.1, 26149.0], [88.2, 26149.0], [88.3, 26161.0], [88.4, 26161.0], [88.5, 26176.0], [88.6, 26176.0], [88.7, 26176.0], [88.8, 26176.0], [88.9, 26184.0], [89.0, 26184.0], [89.1, 26187.0], [89.2, 26187.0], [89.3, 26191.0], [89.4, 26191.0], [89.5, 26198.0], [89.6, 26198.0], [89.7, 26203.0], [89.8, 26203.0], [89.9, 26207.0], [90.0, 26207.0], [90.1, 26211.0], [90.2, 26211.0], [90.3, 26220.0], [90.4, 26220.0], [90.5, 26224.0], [90.6, 26224.0], [90.7, 26230.0], [90.8, 26230.0], [90.9, 26254.0], [91.0, 26254.0], [91.1, 26255.0], [91.2, 26255.0], [91.3, 26266.0], [91.4, 26266.0], [91.5, 26270.0], [91.6, 26270.0], [91.7, 26271.0], [91.8, 26271.0], [91.9, 26273.0], [92.0, 26273.0], [92.1, 26337.0], [92.2, 26337.0], [92.3, 26350.0], [92.4, 26350.0], [92.5, 26358.0], [92.6, 26358.0], [92.7, 26360.0], [92.8, 26360.0], [92.9, 26361.0], [93.0, 26361.0], [93.1, 26388.0], [93.2, 26388.0], [93.3, 26477.0], [93.4, 26477.0], [93.5, 26483.0], [93.6, 26483.0], [93.7, 26500.0], [93.8, 26500.0], [93.9, 26576.0], [94.0, 26576.0], [94.1, 26619.0], [94.2, 26619.0], [94.3, 26680.0], [94.4, 26680.0], [94.5, 26681.0], [94.6, 26681.0], [94.7, 26717.0], [94.8, 26717.0], [94.9, 26732.0], [95.0, 26732.0], [95.1, 26757.0], [95.2, 26757.0], [95.3, 26757.0], [95.4, 26757.0], [95.5, 26801.0], [95.6, 26801.0], [95.7, 26870.0], [95.8, 26870.0], [95.9, 26891.0], [96.0, 26891.0], [96.1, 26894.0], [96.2, 26894.0], [96.3, 26908.0], [96.4, 26908.0], [96.5, 26964.0], [96.6, 26964.0], [96.7, 26964.0], [96.8, 26964.0], [96.9, 26969.0], [97.0, 26969.0], [97.1, 26976.0], [97.2, 26976.0], [97.3, 27055.0], [97.4, 27055.0], [97.5, 27073.0], [97.6, 27073.0], [97.7, 27084.0], [97.8, 27084.0], [97.9, 27085.0], [98.0, 27085.0], [98.1, 27109.0], [98.2, 27109.0], [98.3, 27135.0], [98.4, 27135.0], [98.5, 27296.0], [98.6, 27296.0], [98.7, 27299.0], [98.8, 27299.0], [98.9, 27365.0], [99.0, 27365.0], [99.1, 27409.0], [99.2, 27409.0], [99.3, 27733.0], [99.4, 27733.0], [99.5, 27993.0], [99.6, 27993.0], [99.7, 28211.0], [99.8, 28211.0], [99.9, 28285.0], [100.0, 28285.0]], "isOverall": false, "label": "HTTP Request (Mid image)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 16.0, "series": [{"data": [[300.0, 1.0], [400.0, 11.0], [500.0, 2.0], [600.0, 4.0], [800.0, 8.0], [1000.0, 1.0], [1100.0, 1.0], [1600.0, 1.0], [2200.0, 1.0], [8700.0, 1.0], [10100.0, 1.0], [10200.0, 1.0], [10900.0, 1.0], [14300.0, 1.0], [14000.0, 1.0], [14500.0, 2.0], [14800.0, 1.0], [15600.0, 1.0], [15900.0, 1.0], [16300.0, 1.0], [16000.0, 1.0], [16500.0, 2.0], [16400.0, 1.0], [18000.0, 2.0], [17900.0, 3.0], [17700.0, 1.0], [17800.0, 1.0], [18300.0, 1.0], [18200.0, 1.0], [18600.0, 4.0], [19000.0, 1.0], [19300.0, 1.0], [18700.0, 1.0], [18800.0, 1.0], [19600.0, 1.0], [19800.0, 3.0], [19900.0, 1.0], [20000.0, 1.0], [19500.0, 1.0], [19700.0, 2.0], [20400.0, 1.0], [20700.0, 1.0], [20900.0, 2.0], [21000.0, 2.0], [21200.0, 3.0], [21400.0, 5.0], [21300.0, 1.0], [20800.0, 1.0], [21100.0, 2.0], [20500.0, 1.0], [21500.0, 1.0], [22400.0, 3.0], [21800.0, 3.0], [22000.0, 7.0], [22100.0, 2.0], [22200.0, 3.0], [22500.0, 6.0], [21900.0, 1.0], [21700.0, 1.0], [22300.0, 3.0], [21600.0, 2.0], [23300.0, 4.0], [23100.0, 8.0], [23200.0, 6.0], [23400.0, 7.0], [22900.0, 3.0], [22800.0, 1.0], [22600.0, 4.0], [22700.0, 3.0], [23000.0, 4.0], [23500.0, 6.0], [24100.0, 14.0], [23600.0, 8.0], [24200.0, 11.0], [24400.0, 14.0], [24500.0, 15.0], [24300.0, 9.0], [23700.0, 6.0], [24000.0, 8.0], [23800.0, 12.0], [23900.0, 8.0], [25400.0, 11.0], [24700.0, 11.0], [24600.0, 11.0], [25200.0, 14.0], [24800.0, 9.0], [25000.0, 11.0], [25300.0, 12.0], [25500.0, 15.0], [25100.0, 8.0], [24900.0, 16.0], [26400.0, 2.0], [26200.0, 12.0], [26100.0, 14.0], [26300.0, 6.0], [26600.0, 3.0], [25700.0, 10.0], [25800.0, 7.0], [26000.0, 6.0], [25900.0, 8.0], [25600.0, 11.0], [26500.0, 2.0], [26900.0, 5.0], [26800.0, 4.0], [26700.0, 4.0], [27300.0, 1.0], [27000.0, 4.0], [27200.0, 2.0], [27100.0, 2.0], [27400.0, 1.0], [27700.0, 1.0], [28200.0, 2.0], [27900.0, 1.0]], "isOverall": false, "label": "HTTP Request (Mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 28200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 30.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 470.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 470.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 30.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 22.391304347826093, "minX": 1.71235866E12, "maxY": 50.0, "series": [{"data": [[1.71235872E12, 50.0], [1.7123589E12, 22.391304347826093], [1.71235878E12, 50.0], [1.71235866E12, 50.0], [1.71235884E12, 47.53906249999998]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123589E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 8706.0, "minX": 1.0, "maxY": 25166.333333333332, "series": [{"data": [[2.0, 10188.0], [3.0, 8706.0], [4.0, 10936.0], [5.0, 14091.0], [6.0, 14568.0], [7.0, 14823.0], [8.0, 16553.0], [9.0, 16041.0], [10.0, 14544.0], [11.0, 16433.0], [12.0, 15658.0], [13.0, 17917.0], [14.0, 16334.0], [15.0, 16593.0], [16.0, 15970.0], [17.0, 18282.0], [18.0, 17927.0], [19.0, 18353.0], [20.0, 19765.0], [21.0, 18679.0], [22.0, 20483.0], [23.0, 17876.0], [24.0, 18646.0], [25.0, 17756.0], [26.0, 18836.0], [27.0, 19880.0], [28.0, 17953.0], [29.0, 18746.0], [30.0, 19770.0], [31.0, 20407.5], [32.0, 21328.0], [35.0, 21531.0], [34.0, 21731.333333333332], [37.0, 20573.0], [36.0, 23180.0], [39.0, 21149.0], [38.0, 22554.0], [41.0, 22780.5], [40.0, 21667.8], [43.0, 25015.333333333332], [42.0, 22073.199999999997], [45.0, 23505.0], [44.0, 24471.0], [47.0, 25166.333333333332], [46.0, 24460.5], [49.0, 24676.333333333336], [48.0, 22607.4], [50.0, 22861.36718749998], [1.0, 10207.0]], "isOverall": false, "label": "HTTP Request (Mid image)", "isController": false}, {"data": [[46.82999999999999, 22516.803999999975]], "isOverall": false, "label": "HTTP Request (Mid image)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 171.73333333333332, "minX": 1.71235866E12, "maxY": 167798.75, "series": [{"data": [[1.71235872E12, 508.4], [1.7123589E12, 171.73333333333332], [1.71235878E12, 463.26666666666665], [1.71235866E12, 354.43333333333334], [1.71235884E12, 489.56666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71235872E12, 167798.75], [1.7123589E12, 58474.4], [1.71235878E12, 155086.55], [1.71235866E12, 91525.65], [1.71235884E12, 162712.05]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123589E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 16536.55555555555, "minX": 1.71235866E12, "maxY": 24640.852459016398, "series": [{"data": [[1.71235872E12, 23712.515151515156], [1.7123589E12, 18184.21739130434], [1.71235878E12, 24640.852459016398], [1.71235866E12, 16536.55555555555], [1.71235884E12, 24180.156249999993]], "isOverall": false, "label": "HTTP Request (Mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123589E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 16536.291666666668, "minX": 1.71235866E12, "maxY": 24640.622950819674, "series": [{"data": [[1.71235872E12, 23712.32575757576], [1.7123589E12, 18184.04347826087], [1.71235878E12, 24640.622950819674], [1.71235866E12, 16536.291666666668], [1.71235884E12, 24180.031250000007]], "isOverall": false, "label": "HTTP Request (Mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123589E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 84.08593749999997, "minX": 1.71235866E12, "maxY": 117.1111111111111, "series": [{"data": [[1.71235872E12, 84.95454545454547], [1.7123589E12, 86.04347826086958], [1.71235878E12, 85.09016393442623], [1.71235866E12, 117.1111111111111], [1.71235884E12, 84.08593749999997]], "isOverall": false, "label": "HTTP Request (Mid image)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123589E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 8706.0, "minX": 1.71235866E12, "maxY": 28285.0, "series": [{"data": [[1.71235872E12, 28211.0], [1.7123589E12, 23180.0], [1.71235878E12, 27135.0], [1.71235866E12, 28285.0], [1.71235884E12, 27993.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71235872E12, 20024.0], [1.7123589E12, 8706.0], [1.71235878E12, 23372.0], [1.71235866E12, 14304.0], [1.71235884E12, 20989.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71235872E12, 26351.1], [1.7123589E12, 22036.0], [1.71235878E12, 26210.6], [1.71235866E12, 26950.0], [1.71235884E12, 26171.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71235872E12, 27965.659999999996], [1.7123589E12, 23180.0], [1.71235878E12, 27064.859999999997], [1.71235866E12, 28285.0], [1.71235884E12, 27841.159999999996]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71235872E12, 24440.5], [1.7123589E12, 18662.5], [1.71235878E12, 25100.5], [1.71235866E12, 23100.0], [1.71235884E12, 24896.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.71235872E12, 26920.899999999998], [1.7123589E12, 22445.85], [1.71235878E12, 26353.649999999998], [1.71235866E12, 27278.8], [1.71235884E12, 26950.7]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123589E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 487.0, "minX": 1.0, "maxY": 26360.0, "series": [{"data": [[1.0, 24521.0], [2.0, 24758.0], [4.0, 24396.0], [5.0, 24609.0], [3.0, 24636.5], [6.0, 23524.5], [7.0, 26360.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 1126.0], [2.0, 1671.0], [18.0, 487.0], [5.0, 728.0], [3.0, 811.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 487.0, "minX": 1.0, "maxY": 26360.0, "series": [{"data": [[1.0, 24521.0], [2.0, 24758.0], [4.0, 24396.0], [5.0, 24609.0], [3.0, 24636.5], [6.0, 23524.5], [7.0, 26360.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 1126.0], [2.0, 1671.0], [18.0, 487.0], [5.0, 728.0], [3.0, 811.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.71235866E12, "maxY": 2.2, "series": [{"data": [[1.71235872E12, 2.2], [1.7123589E12, 0.1], [1.71235878E12, 2.033333333333333], [1.71235866E12, 2.033333333333333], [1.71235884E12, 1.9666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123589E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71235866E12, "maxY": 2.1333333333333333, "series": [{"data": [[1.71235872E12, 2.1333333333333333], [1.7123589E12, 0.7666666666666667], [1.71235878E12, 2.0], [1.71235866E12, 0.85], [1.71235884E12, 2.0833333333333335]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71235872E12, 0.06666666666666667], [1.71235878E12, 0.03333333333333333], [1.71235866E12, 0.35], [1.71235884E12, 0.05]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7123589E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71235866E12, "maxY": 2.1333333333333333, "series": [{"data": [[1.71235872E12, 2.1333333333333333], [1.7123589E12, 0.7666666666666667], [1.71235878E12, 2.0], [1.71235866E12, 0.85], [1.71235884E12, 2.0833333333333335]], "isOverall": false, "label": "HTTP Request (Mid image)-success", "isController": false}, {"data": [[1.71235872E12, 0.06666666666666667], [1.71235878E12, 0.03333333333333333], [1.71235866E12, 0.35], [1.71235884E12, 0.05]], "isOverall": false, "label": "HTTP Request (Mid image)-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123589E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.71235866E12, "maxY": 2.1333333333333333, "series": [{"data": [[1.71235872E12, 2.1333333333333333], [1.7123589E12, 0.7666666666666667], [1.71235878E12, 2.0], [1.71235866E12, 0.85], [1.71235884E12, 2.0833333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71235872E12, 0.06666666666666667], [1.71235878E12, 0.03333333333333333], [1.71235866E12, 0.35], [1.71235884E12, 0.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7123589E12, "title": "Total Transactions Per Second"}},
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

