# Button 按钮
----
常用的操作按钮。

## 基础用法

基础的按钮用法。

<div class="demo-block">
    <div style="padding:10px ">
      <r-button>默认按钮</r-button>
      <r-button type="primary">主要按钮</r-button>
      <r-button type="success">成功按钮</r-button>
      <r-button type="info">信息按钮</r-button>
      <r-button type="warning">警告按钮</r-button>
      <r-button type="danger">危险按钮</r-button>
    </div>
    <div style="padding:10px">
      <r-button plain>默认按钮</r-button>
      <r-button type="primary" plain>主要按钮</r-button>
      <r-button type="success" plain>成功按钮</r-button>
      <r-button type="info" plain>信息按钮</r-button>
      <r-button type="warning" plain>警告按钮</r-button>
      <r-button type="danger" plain>危险按钮</r-button>
    </div>
    <div style="padding:10px">
      <r-button round>默认按钮</r-button>
      <r-button type="primary" round>主要按钮</r-button>
      <r-button type="success" round>成功按钮</r-button>
      <r-button type="info" round>信息按钮</r-button>
      <r-button type="warning" round>警告按钮</r-button>
      <r-button type="danger" round>危险按钮</r-button>
    </div>
    <div style="padding:10px">
      <r-button circle><r-icon name="search"></r-icon></r-button>
      <r-button type="primary" circle><r-icon name="bug"></r-icon></r-button>
      <r-button type="success" circle><r-icon name="cloud-download"></r-icon></r-button>
      <r-button type="info" circle><r-icon name="map-marker"></r-icon></r-button>
      <r-button type="warning" circle><r-icon name="paper-plane-o"></r-icon></r-button>
      <r-button type="danger" circle><r-icon name="star"></r-icon></r-button>
    </div>
</div>

::: demo
```html
    <r-button>默认按钮</r-button>
    <r-button type="primary">主要按钮</r-button>
    <r-button type="success">成功按钮</r-button>
    <r-button type="info">信息按钮</r-button>
    <r-button type="warning">警告按钮</r-button>
    <r-button type="danger">危险按钮</r-button>

    <r-button plain>默认按钮</r-button>
    <r-button type="primary" plain>主要按钮</r-button>
    <r-button type="success" plain>成功按钮</r-button>
    <r-button type="info" plain>信息按钮</r-button>
    <r-button type="warning" plain>警告按钮</r-button>
    <r-button type="danger" plain>危险按钮</r-button>

    <r-button round>默认按钮</r-button>
    <r-button type="primary" round>主要按钮</r-button>
    <r-button type="success" round>成功按钮</r-button>
    <r-button type="info" round>信息按钮</r-button>
    <r-button type="warning" round>警告按钮</r-button>
    <r-button type="danger" round>危险按钮</r-button>

    <r-button circle><r-icon name="search"></r-icon></r-button>
    <r-button type="primary" circle><r-icon name="bug"></r-icon></r-button>
    <r-button type="success" circle><r-icon name="cloud-download"></r-icon></r-button>
    <r-button type="info" circle><r-icon name="map-marker"></r-icon></r-button>
    <r-button type="warning" circle><r-icon name="paper-plane-o"></r-icon></r-button>
    <r-button type="danger" circle><r-icon name="star"></r-icon></r-button>
```
:::

## 禁用状态

按钮不可用状态。


<div class="demo-block">
    <div style="padding:10px ">
      <r-button disabled>默认按钮</r-button>
      <r-button type="primary" disabled>主要按钮</r-button>
      <r-button type="success" disabled>成功按钮</r-button>
      <r-button type="info" disabled>信息按钮</r-button>
      <r-button type="warning" disabled>警告按钮</r-button>
      <r-button type="danger" disabled>危险按钮</r-button>
    </div>
    <div style="padding:10px">
      <r-button plain disabled>默认按钮</r-button>
      <r-button type="primary" plain disabled>主要按钮</r-button>
      <r-button type="success" plain disabled>成功按钮</r-button>
      <r-button type="info" plain disabled>信息按钮</r-button>
      <r-button type="warning" plain disabled>警告按钮</r-button>
      <r-button type="danger" plain disabled>危险按钮</r-button>
    </div>
</div>

::: demo
```html
    <r-button disabled>默认按钮</r-button>
    <r-button type="primary" disabled>主要按钮</r-button>
    <r-button type="success" disabled>成功按钮</r-button>
    <r-button type="info" disabled>信息按钮</r-button>
    <r-button type="warning" disabled>警告按钮</r-button>
    <r-button type="danger" disabled>危险按钮</r-button>

    <r-button plain disabled>默认按钮</r-button>
    <r-button type="primary" plain disabled>主要按钮</r-button>
    <r-button type="success" plain disabled>成功按钮</r-button>
    <r-button type="info" plain disabled>信息按钮</r-button>
    <r-button type="warning" plain disabled>警告按钮</r-button>
    <r-button type="danger" plain disabled>危险按钮</r-button>
```
:::

## 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

<div class="demo-block">
    <div style="padding:10px ">
      <r-button type="primary"><r-icon name="search"></r-icon><span style="margin-left: 5px">搜索</span></r-button>
      <r-button type="primary"><r-icon name="share"></r-icon></r-button>
      <r-button type="primary"><r-icon name="star"></r-icon></r-button>
      <r-button type="primary"><r-icon name="signal"></r-icon></r-button>
    </div>
</div>

::: demo
```html
    <r-button type="primary"><r-icon name="search"></r-icon></r-button>
    <r-button type="primary"><r-icon name="share"></r-icon></r-button>
    <r-button type="primary"><r-icon name="star"></r-icon></r-button>
    <r-button type="primary"><r-icon name="signal"></r-icon></r-button>
```
:::
