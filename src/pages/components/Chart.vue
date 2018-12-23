<template>
<div class='chart'>
    <!-- import font awesome for legend icons -->
    <chart-axis :data='chartData'></chart-axis>
</div>
</template>

<script>
import {
    svgArea,
    svgLine,
    svgScatter
} from 'd2b'
import {
    ChartAxis
} from 'vue-d2b'

export default {
    props: ['coinChart'],
    data() {
        return {

        }
    },
    computed: {
        chartData() {
            var values  = []
            for(let i = 0;i< this.$props.coinChart.data.prices.length;i++ ){
                values.push({
                    x: this.$props.coinChart.data.prices[i][0],
                    y: 100,
                })
            }
            
            
           // console.log(newARR)
            return {
                sets: [{
                    generators: [svgArea(), svgLine(), svgScatter()],
                     graphs: [
                {
                  label: 'area 1',
                 values
                },
                     ]

                }]
            }
        }
    },
    components: {
        ChartAxis
    },

}
</script>

<style scoped>
.chart {
    width: 100%;
    height: 300px;
}
</style>
