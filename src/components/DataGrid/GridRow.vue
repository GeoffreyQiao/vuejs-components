<template>
<!-- ////////////////////////////  T D  //////////////////////////////// -->
    <tr
    v-if="!isHeaderCol"
    :class="{ 'item', className, customClass }"
    :index="rowIndex"
    :id="item.id"
    >
        <td
        is="GridColumn"
        v-ref="columns"
        v-for="column in item"
        :column.sync="column"
        :col-index.sync="$index"
        ></td>
    </tr>
<!-- ////////////////////////////  T H  //////////////////////////////// -->
    <tr
    v-else
    id="t-head"
    :class="{ 'thead-r', className, customClass }"
    :index="rowIndex"
    >
        <th
        is="GridColumn"
        v-ref="headerColumns"
        v-for="column in columns"
        :is-header-col="isHeaderCol"
        :column.sync="column"
        :col-index.sync="$index"
        >
        </th>
    </tr>
</template>

<script>

    import GridColumn from './GridColumn.vue';

    export default {
//-----------------------------------   C r e a t e  d  ------------------------------------

        created: () => {
            if (this.type && this.type === 'th') this.isHeaderCol = true;
            // this.item.forEach((idx, col) => {
            //     if(col.isCalc) this.$set(col, 'value', (item)=>{
            //         /** @TODO 完成计算字段的智能化。 目前思路: 引用 */
            //     });
            // })
        },

//----------------------------------------  D a t a   --------------------------------------
        data: () => {
            return ({
                isHeaderCol: false,
                customClass: '',
            })
        },

//---------------------------------------  P r o p s   -------------------------------------
        props: {
            type: String,
            columns: {
                type: Object,
                twoWay: true
            },
            item: {
                type: Object,
                twoWay: true
            },
            rowIndex: {
                type: Number,
                required: true,
                twoWay: true
            }
        },

//--------------------------------   C o m p o n e n t  s   -------------------------------
        components: {
            /** @type {column}  单元格组件 */
            GridColumn: GridColumn
        }
    }
</script>