---
layout: post
title: last-type not working？
category: css
tags: css, css3, last-type
description: 理解 CSS 中的 last-type

---

发现对 last-type（其他以此类推）这个属性存在误解，所以简单区分下。以 demo 为例。

MDN 解释如下：

> The :last-child CSS pseudo-class represents the last element among a group of sibling elements.

示例 DOM 如下：

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>

<ul>
  <li class="item">4</li>
  <li class="item">5</li>
  <li class="item">6</li>
</ul>

<ul>
  <li class="item">7</li>
  <li class="item">8</li>
  <li>9</li>
  <ul class="item">
    <li>10</li>
  </ul>
</ul>
```

分别配合如下两种样式，哪些数字是红色。

- style one

  ```html
  <style>
    li:last-child {
      color: red;
    }
  </style>
  ```

- style two

  ```html
  <style>
    li.item:last-child {
      color: red;
    }
  </style>
  ```

- style three

  ```html
  <style>
    .item:last-child {
      color: red;
    }
  </style>
  ```

第一个是3、6、10。第二个是6。第三个是3、10（因为 ul 红色）。

`last-child` 选择相对于某个父元素下所有兄弟元素中的最后一个元素，而不是筛选最后一个指定标签指定类名的元素。所以它不能用于选择相对于某个父元素下带有指定类或指定标签的兄弟元素中的最后一个。`first-child` 等同理。