<template>
    <td
    v-if="!isHeaderCol"
    v-text="value"
    :index="colIndex"
    :colspan="colspan" 
    :rowspan="rowspan" 
    :headers="tagName"
    :class="{ 'column', className, 'calc-column': isCalc }"
    >
    </td>
    <th
    v-else
    v-text="value"
    :index="colIndex"
    :colspan="colspan"
    :rowspan="rowspan" 
    :headers="tagName" 
    scope="col">
    </th>
</template>

<script>

    export default {
//-----------------------------------   C r e a t e  d  ------------------------------------

        created: () => {
            this.value = this.data.value;
            this.isCalc = this.column.isCalc ? true : false;
            if(this.column.className) this.className = this.data.className;
            if(this.data.colspan && this.data.colspan !== 1) this.colspan = this.data.colspan;
            if(this.data.rowspan && this.data.rowspan !== 1) this.rowspan = this.data.rowspan;
        },
//----------------------------------------  D a t a   --------------------------------------
        data: () =>{
            return ({
                /** @type {Boolean} 是否是计算属性     默认 default: false  */
                isCalc: false,
                /** @type {Object}  该单元格的 tagName 属性 (对应所属的表头 id )*/
                tagName: ' 空 ',
                /** @type {String} 自定义 class */
                className: '',
                /** @type {String} 单元格显示的内容 */
                value: '',
                /** @type {Number} 跨列数量      默认 default: 1 */
                colspan: 1,
                /** @type {Number} 跨行数量      默认 default: 1 */
                rowspan: 1,
            })
        },

//---------------------------------------  P r o p s   -------------------------------------
        /** @type {Object} 外部传入数据的 schema */
        props: {
            isHeaderCol: Boolean,
            /** @type {Object} 外部传入数据条件 */
            column: {
                type: Object,
                required: true,
                twoWay: true
            },
            /** @type {Object} 列号验证条件 */
            colIndex: {
                type: Number,
                required: true,
                twoWay: true
            }
        }
    }
</script>