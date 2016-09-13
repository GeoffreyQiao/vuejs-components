<template>
  <section class="viewProduct">
  <my-grid :options.sync="options" :table-data.sync="tableData"></my-grid>
  </section>
</template>

<style lang="scss" scoped>
  /** @type {attrs}   大号字体 */
  $bigFonts: 3rem;
  /** @type {attrs}   小号字体 */
  $nomalFonts: 1.8rem;

  #tools-bar, #product-list {
    width: 75%;
    margin: 0 auto;
  }

  #tools-bar {
    margin-top: 3%;
    height: 12%;
    background-color: rgba(222,133,155,.3);
  }

  #product-list {
    height: 70%;

    thead {
      font-size: $bigFonts;
    }

    tbody {
      font-size: $nomalFonts;
    }

  }
</style>

<script>
  /**
   * @module src/views/Product.view
   * @param {Array[Object]} products  -   商品数据
   * @param {Array[Object]} columns   -   列信息
   *
   */
  import MyGrid from '../components/DataGrid';

  export default{

    data () {
      return {
        /** @type {Object} 需要传递给DataGrid组件的设置 */
        options: {
          tableTitle: true,
          columnTitle: true,
          hasComputed: true,
          totalLine: true
        },

        /** @type {Object} 传递给DataGrid组件的数据 */
        tableData: {
          /** @type {String} 表名 */
          // title: 'Geoffrey',

          /** @type {Array} 需要渲染的数据 */
          dataList: [
            {pid: 1, name: 'Cola', cate: '饮料', price: 3, numsHave: 20, numsSelled: 153},
            {pid: 2, name: '百事', cate: '饮料', price: 5, numsHave: 54, numsSelled: 39}
          ],

            /** @type {Array} 字段名及配置 */
            columns: [
                {
                  id : 'pid',
                  text: 'ID',
                  display: true
                },
                {
                  id : 'name',
                  text: '商品名称',
                  display: true
                },
                {
                  id : 'cate',
                  text: '类别',
                  display: true
                },
                {
                  id : 'price',
                  text: '单价',
                  display: true
                },
                {
                  id : 'numsHave',
                  text: '存量',
                  display: true
                },
                {
                  id : 'numsSelled',
                  text: '销量',
                  display: true
                }
            ],
            /** @type {Object} 计算字段配置信息  */
            computedColumns: [
              {
                type: 'computed',
                id: 'sum',
                text: '销售额',
                value: function (item) {
                     return item[this.id] = item.price * item.numsSelled;
                }
              }
          ]
        }
      }
    },

    methods: {
      checkVal(k, v){
        return k === 'price' ? this.read(v) : v;
      },
      read: val =>'￥'+val.toFixed(2)
    },

    components: {
      MyGrid
    }
  }
</script>
