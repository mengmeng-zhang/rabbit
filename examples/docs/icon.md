<script>
  const iconList = require('../icon.json')
  export default {
    data() {
      return {
        icons: iconList
      };
    }
  }
</script>
# Icon 图标
---

提供了一套常用的图标集合。

## 使用方法

直接通过设置name为 iconName 来使用即可。例如：

<div class="demo-block">
  <div class="md-icon">
    <ul class="md-icon-class">
      <li>
        <r-icon class="md-icon-i" name="cloud-upload"></r-icon>
      </li>
      <li>
        <r-icon class="md-icon-i" name="star"></r-icon>
      </li>
      <li>
        <r-icon class="md-icon-i" name="share"></r-icon>
      </li>
      <li>
        <r-button type="primary"><r-icon name="search"></r-icon><span style="margin-left: 5px">搜索</span></r-button>
      </li>
    </ul>
  </div>
</div>

::: demo
```html

<r-icon class="md-icon-i" name="cloud-upload"></r-icon>
<r-icon class="md-icon-i" name="star"></r-icon>
<r-icon class="md-icon-i" name="share"></r-icon>
<r-button type="primary"><r-icon name="search"></r-icon><span style="margin-left: 5px">搜索</span></r-button>

```
:::
----

## 图标集合

<ul class="md-icon-list icon-list">
  <li v-for="item in icons" :key="item">
    <r-icon class="md-icon-i" :name="item"></r-icon>
    {{ item }}
  </li>
</ul>



<style>
  .md-icon{
    padding: 20px
  }
  .md-icon-class, .md-icon-list{
    display: flex;
    flex-wrap: wrap;
  }
  .md-icon-class li{
    padding-right: 40px;
  }
  .md-icon-list{
    text-align: center;
    justify-content: center;
  }
  .md-icon-list li{
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    color: #000
  }
  .md-icon-list li i:hover{
    color: #73b8ff
  }
  .md-icon-i{
    font-size: 30px
  }


