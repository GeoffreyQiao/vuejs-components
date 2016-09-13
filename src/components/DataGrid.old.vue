
<template>
    <section class="dataGrid">
        <form class="obj-list">
            <section class="filter-bar">
                <input type="text" class="filter-input" v-model="queryString">
            </section>
            <table>
                <thead>
                <!-- 表头区域. 包含表名区域和字段名区域. 其显示与否取决于接收到的 options 参数 -->
                    <tr
                    class="t-title"
                    v-if="options.tableTitle" ><!-- 表名 -->{{tableData.title}}</tr>
                    <tr
                    v-if="options.columnTitle"
                    class="t-head-row">

                        <!-- 列头 -->
                        <th
                        class="t-column"
                        v-for="col in displayAllow"
                        :id="col.id" 
                        @click="sortBy(col.id)">
                        {{col.text}}</th>
                    </tr>
                </thead>

                <tbody>
                    <tr
                    v-for="item of tableData.dataList | orderBy param ordered"
                    class="t-row"
                    :id="item.id"
                    :index="$index">
                        <td
                        class="item-column"
                        v-for="param of item"
                        v-if="$key === colsDisplay[$index].id"
                        :class="$key">{{ param }}</td>
                        <td
                        v-for="(k, v) of colsComputed"
                        class="item-column computed"
                        :class="colsComputed[v].id">
                        {{ colsComputed[v].value(item) | currency '￥'}}
                        </td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr 
                    class="t-title" 
                    v-if="options.totalLine">
                        <td colspan="5"></td>
                        <td>
                          合计：
                        </td>
                        <td>
<!--                           {{ totalSells() | currency '￥'}}
                         -->                        </td>
                    </tr>
                </tfoot>
            </table>
        </form>
        <pre style="text-align: left; font-size:  .8rem; margin-left: 15vw;">{{ $data | json 8}}</pre>
    </section>
</template>

<script>

import DataGrid from '../components/DataGrid'
  export default {

    created(){
      // console.dir(this.options);
    },

    data: () => {
      return {
            queryString: '',
            colsDisplay: [],
            colsComputed: [],
            param: '',
            ordered: 1,
            calcList: {},
            calcColId: ''
          }
    },

    /** @type {Object} 组件生成所需的设置和数据定义 */
    props: {

      /** @type {Object} 生成该组件实例的配置信息 */
      options: {
        type: Object,
        required: true,
        twoWay: true,
        /** @type {Boolean} tableTitle   是否显示表名  */
        tableTitle: {
            type: Boolean,
            required: true,
            default: true
        },
        /** @type {Boolean} columnTitle  是否显示表头/字段名  */
        columnTitle: {
            type: Boolean,
            required: true,
            default: true
        },
        /** @type {Boolean} hasComputed  是否含有且显示计算字段 */
        hasComputed: {
            type: Boolean,
            required: true,
            default: true
        }
      },

      /**
       *  组件渲染所需数据
       *  @type  {Object}
       */
      tableData: {
        type: Object,
        required: true,
        twoWay: true,
        /** @type {String} 表头/表名 */
        title: {
            type: String,
            default: '表格名称, 属性 options.tableTitle, 默认值 true'
        },
        /** @type {Array}   包含 @type{Object} column 的配置列表 */
        columns: {
            type: Array
        },
        /** @type {Object} 包含 @type{Object} computedColumn 的配置信息 */
        computedColumns: {
            type: Object
        },
        /** @type [Object, Array] dataList   组件渲染的具体数据 */
        dataList: {
            type: [Array, Object],
            required: true
        }
      }
    },

    computed: {
      /**
       * 筛选 display 属性为 true 的列，以及计算属性
       * @return {Array} 表中要显示的列
       */
      displayAllow () {
          let arr = [];
          if (this.options.tableTitle) {
            for(let i = 0, len = this.tableData.columns.length; i < len; i++){
              if(this.tableData.columns[i].display) {
                arr.push(this.tableData.columns[i]);
              }
            }
            if(this.options.hasComputed !== -1){
              let clac = [];
              for(
                let s = 0,
                lens = this.tableData.computedColumns.length;
                s < lens;
                s++) {
                calc.push(this.tableData.computedColumns[s]);
              };
              this.colsComputed = calc;
              }
          };
          this.colsDisplay = arr;
          return arr;
        }
      },

      methods: {
        /**
         *  @method   displayAble      在组件内设置该字段是否渲染的配置
         *  @param   {Object}   col     组件设置 options 中该字段的配置信息
         *  @return   {Boolean}
         */
        displayAble(col) {
            return this.colsDisplay[col.id] = col.display;
        },

        addCalcCol(id){
          this.calcCols.set([col.$index], col.id);
          return col.id;
        },

        totalSells(){
          let value = 0,
          id = this.calcColId,
          col = this.calcList[id],
          len = col.length;
          for( let i = 0; i < len; i++){
            value += col[i];
          }
          return value;
        },
        /**
         *  @method sortBy                      升降排序切换
         *  @param  {String}  param     排序依据的字段名
         *  @return
         */
        sortBy(param){
          this.ordered *= -1;
          this.param = param;
          return;
        },

        calcColMaster(mid, item){
           let calcVal = this.tableData.computedColumns[mid].value(item);
           if(!this.calcList[mid]){
             this.calcList[mid] = [];
           };
           this.calcList[mid].push(calcVal);
           return calcVal;
         },

        // gai(){
        //   this.tableData.dataList[1].price++;
        // }
      },
      components: {

      }
  }
</script>

<style lang="scss">
    .obj-list {
      width: 100%;
      height: 100%;
      font-size: 1.1rem;

      .filter-bar{
        height: 10%;
        width: 80%;
        margin: 3% auto;
        text-align: left;

        .filter-input{
          display: table-cell;
          height: 60%;
          font-size: 1.5rem;
          margin-left: 0;
          border-radius: .2rem;
          padding: auto .5rem;
          background-color: rgba(22,33,55,.3);
          outline: none;
          cursor: pointer;

          @at-root &:focus{
            display: input;
            cursor: text;
          }
        }
      }
      table{
        width: 80%;
        height: 70%;
        margin: auto;
        background-color: rgba(22,33,55,.6);
        border-radius: 1rem;

        tfoot tr {
          line-height: 4rem;

          td {
            font-weight: 400;
          }
        }

        th {
          font-size: 1.5rem;
          text-align: center;
          font-weight: 200;
          &:hover{
            cursor: pointer;
          }
        }

        td{
          font-weight: 300;
          font-size: 1rem;
          text-align: center;
        }
      }
    }
</style>
