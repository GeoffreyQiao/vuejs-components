<template>
<div>
    <h1>{{startItem}}</h1>
    <table>
        <colgroup
        :class="{'columns'}"
        >
            <col
            v-for="col in Columns"
            :class="[ 'all-cols', col.id, col.display ? 'col-visible': 'col-unVisible' ]"
            span="col.span">
        </colgroup>

        <thead is="GridHeader">
            <tr
            is="GridRow"
            :type="th"
            :columns="Columns"
            ></tr>
        </thead>

        <tbody>
            <tr
            is="GridRow"
            v-for="item in DataList | limitBy perPageShow startItem"
            :item.sync="item"
            :row-index.sync="$index"
            >
            </tr>
        </tbody>

        <tfoot is="GridFooter">
            
        </tfoot>
    </table>
</div>
</template>

<script>

    import GridHeader from './GridHeader.vue';
    import GridFooter from './GridFooter.vue';
    import GridRow from './GridRow.vue';

    class HeadCols {
        constructor ( col ) => {
            this.id = col.id;
            this.text = col.text;
            this.display = col.display;
            // this.isCalc = col.isCalc;
            // this.colspan = col.colspan;
            // this.rowspan = col.rowspan;
            this.value = col.exps(this);
        }
    };

    export default {

//----------------------------------------  D a t a   --------------------------------------

        data: ()=>{

            return ({
            /** @type {Object} 所有需要显示的列头信息 */
            Columns: [],
            /** @type {Object} 列表数据 */
            DataList: [],
            /** @type {Number} 当前视图显示起始条目 id / 编号 */
            startItem: 1,
            /** @type {Number} 每页显示最大条目数量 */
            perPageShow: 15
            })
        },
//---------------------------------------  P r o p s   -------------------------------------
        props: {
            data: {
                type: Object,
                required: true
            }
        },

//--------------------------------   C o m p o n e n t  s   -------------------------------

        components: {
            GridHeader: GridHeader,
            GridFooter: GridFooter,
            GridRow: GridRow
        }
    }
</script>
