# 文档

<style src="../.vuepress/public/quickly-css.css"></style>

## background


**设置背景颜色**

`.bg-`
- 参数: white / black / grey / green / blue / yellow / red

<div class="flex flex-wrap">
  <div class="bg-white w-p-33 h-100 flex a-center j-center">.bg-white</div>
  <div class="bg-black w-p-33 h-100 flex a-center j-center text-white">.bg-black</div>
  <div class="bg-grey w-p-33 h-100 flex a-center j-center">.bg-grey</div>
  <div class="bg-green w-p-33 h-100 flex a-center j-center">.bg-green</div>
  <div class="bg-blue w-p-33 h-100 flex a-center j-center">.bg-blue</div>
  <div class="bg-yellow w-p-33 h-100 flex a-center j-center">.bg-yellow</div>
  <div class="bg-red w-p-33 h-100 flex a-center j-center">.bg-red</div>
</div>

## border

**设置边框**

`.border`

<div class="border text-center p-5 fs-14 w-100">边框</div>

---

`.b-v[-dotted / -dashed]`

<div class="flex j-between">
  <div class="b-v text-center p-10 fs-14">.b-v 上下边框</div>
  <div class="b-v-dotted text-center p-10 fs-14 m-l-10">.b-v-dotted 上下边框dotted</div>
  <div class="b-v-dashed text-center p-10 fs-14 m-l-10">.b-v-dashed 上下边框dashed</div>
</div>

---

`.b-h[-dotted / -dashed]`


<div class="flex j-between">
  <div class="b-h text-center p-10 fs-14">.b-h 左右边框</div>
  <div class="b-h-dotted text-center p-10 fs-14 m-l-10">.b-h-dotted 左右边框dotted</div>
  <div class="b-h-dashed text-center p-10 fs-14 m-l-10">.b-h-dashed 左右边框dashed</div>
</div>

---

`.b-double`

<div class="b-double text-center p-5 fs-14 w-100">两条线边框</div>

---

`.b-w-thin`

<div class="b-w-thin text-center p-5 fs-14 w-100">半像素边框</div>

---

`.b-round`

<div class="b-round w-80 h-80 bg-green flex a-center j-center">圆形</div>

---

`.b-none`

<div class="b-none text-center p-5 fs-14 w-100">清除边框</div>

---

`.b-`
- 参数 l[-dotted / dashed] / r[-dotted / dashed] / t[-dotted / dashed] / b[-dotted / dashed]

<div class="flex j-between">
  <div class="b-l p-5">.b-l 左边框</div>
  <div class="b-r p-5">.b-r 右边框</div>
  <div class="b-t p-5">.b-t 上边框</div>
  <div class="b-b p-5">.b-b 下边框</div>
</div>

<div class="flex j-between m-t-20">
  <div class="b-l-dotted p-5">.b-l-dotted 左边框</div>
  <div class="b-r-dotted p-5">.b-r-dotted 右边框</div>
  <div class="b-t-dotted p-5">.b-t-dotted 上边框</div>
  <div class="b-b-dotted p-5">.b-b-dotted 下边框</div>
</div>

<div class="flex j-between m-t-20">
  <div class="b-l-dashed p-5">.b-l-dashed 左边框</div>
  <div class="b-r-dashed p-5">.b-r-dashed 右边框</div>
  <div class="b-t-dashed p-5">.b-t-dashed 上边框</div>
  <div class="b-b-dashed p-5">.b-b-dashed 下边框</div>
</div>

---

`.border-`
- 参数 dotted / dashed

<div class="flex">
  <div class="border-dotted p-5">.border-dotted</div>
  <div class="border-dashed p-5 m-l-20">.border-dashed</div>
</div>

---

`.b-`
- 参数 从0到20的值, 包括0和20

<div class="flex">
  <div class="border b-10 p-5">.b-10</div>
  <div class="border b-20 p-5 m-l-20">.b-20</div>
</div>

---

`.b-radius-` 或者 `.b-r-`
- 参数 从0到20的值, 包括0和20

<div class="flex">
  <div class="bg-green text-center text-white b-r-10 p-5 w-100 h-20">.b-r-10</div>
  <div class="bg-green text-center text-white b-radius-20 p-5 w-100 h-20 m-l-20">.b-radius-20</div>
</div>


## box

`.m-auto` 居中显示

<div class="m-auto w-200 bg-green text-center">123</div>

`.m-` 居左显示

- 参数  -20 / -15 / -12 / -10 / -8 / -6 / -5 / -4 / -3 / -2 / -1,
  0 / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 12 / 15 / 20 / 25 / 30 / 35 / 40 / 50 / 60 / 80 / 100

<div>
  <span class="bg-green p-5 m-l-0">.m-l-0</span>
  <span class="bg-green p-5 m-l-10">.m-l-10</span>
</div>

---

`.p-` 或者 `.padding-`

- 参数 0 / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 12 / 15 / 20 / 25 / 30 / 35 / 40 / 50 / 60 / 80 / 100

<div>
  <span class="bg-green p-5 m-l-0">.m-l-0</span>
  <span class="bg-green p-10 m-l-10">.m-l-10</span>
  <span class="bg-green p-20 m-l-10">.m-l-10</span>
</div>

---

`.m-h-` / `.m-v-` 横向 / 纵向margin间距

- 参数 -20 / -15 / -12 / -10 / -8 / -6 / -5 / -4 / -3 / -2 / -1,
  0 / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 12 / 15 / 20 / 25 / 30 / 35 / 40 / 50 / 60 / 80 / 100

<div>
  <div class="bg-green m-v-0 m-h-0">.m-v-0 .m-h-0</div>
  <div class="bg-green m-v-10 m-h-10">.m-v-10 .m-h-10</div>
  <div class="bg-green m-v-20 m-h-20">.m-v-20 .m-h-20</div>
</div>

---

`.p-h-` / `.p-v-` 横向 / 纵向padding间距

- 参数 0 / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 12 / 15 / 20 / 25 / 30 / 35 / 40 / 50 / 60 / 80 / 100

<div>
  <div class="bg-green p-h-0 p-v-0 m-t-10">.p-h-0 .p-v-0</div>
  <div class="bg-green p-h-10 p-v-10 m-t-10">.p-h-10 .p-v-10</div>
  <div class="bg-green p-h-20 p-v-20 m-t-10">.p-h-20 .p-v-20</div>
</div>

---

`.m-[direction]-[size]` / `.p-[direction]-[size]`

> 注意 `.p-[direction]-[size]`中的参数从0开始, padding没有负值

- 参数 direction: t / r / b / l (分别对应 top / right / bottom / left)
- 参数 size: -20 / -15 / -12 / -10 / -8 / -6 / -5 / -4 / -3 / -2 / -1,
  0 / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 12 / 15 / 20 / 25 / 30 / 35 / 40 / 50 / 60 / 80 / 100

<div>
  <div class="bg-green m-l-0 p-l-0 m-t-10">.m-l-0 .p-l-0</div>
  <div class="bg-green m-l-10 p-l-10 m-t-10">.m-l-10 .p-l-10</div>
  <div class="bg-green m-l-20 p-l-20 m-t-10">.m-l-20 .p-l-20</div>
</div>

---

`.m-[direction]-[size]` 或 `.l-[direction]-[size]`

- 参数 direction: t / r / b / l (分别对应 top / right / bottom / left)

- 参数 size: 从0到10的值, 包括0和10

<div>
  <div class="bg-green p-l-2vw p-t-2vw">.p-l-2vw .p-t-2vw</div>
  <div class="bg-green p-l-2vh p-t-2vh m-t-10">.p-l-2vh .p-t-2vh</div>
  <div class="bg-green m-l-2vw m-t-2vw">.m-l-2vw .m-t-2vw</div>
  <div class="bg-green m-l-2vh m-t-2vh">.m-l-2vh .m-t-2vh</div>
</div>


## cursor

`.cursor-`

- 参数 default / auto / crosshair / pointer / move / text / wait / help

<div class="flex flex-wrap">
  <div class="bg-green w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-default">default</div>
  <div class="bg-green w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-auto">auto</div>
  <div class="bg-green w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-crosshair">crosshair</div>
  <div class="bg-green w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-pointer">pointer</div>
  <div class="bg-green w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-move">move</div>
  <div class="bg-green w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-text">text</div>
  <div class="bg-green w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-wait">wait</div>
  <div class="bg-green w-p-20 m-t-10 h-100 m-l-10 flex a-center j-center cursor-help">help</div>
</div>

## display

`.d-`

- 参数 inherit / none / inline / inline-block / block / table / inline-table / table-cell

```html
<div class="d-inherit"></div>
<div class="d-none"></div>
<div class="d-inline"></div>
<div class="d-inline-block"></div>
```

## flex

`.flex`

```html
<div class="flex"></div>
```

## float

`.clearfixed` 清除浮动

`.pull-` 浮动

- 参数 left / right

<div class="clearfixed bg-grey">
  <div class="bg-green p-10 pull-left">.pull-left</div>
  <div class="bg-green p-10 pull-right">.pull-right</div>
</div>

```html
<div class="clearfixed">
  <div class="pull-left">.pull-left</div>
  <div class="pull-right">.pull-right</div>
</div>
```

## font-size

## font-weight

`.bold` 字体加粗

---

`.normal` 字体正常

---

`.lighter` 字体更亮

---

`fw-` 字体宽度, 数值表示

- 参数 100, 200, 300, 400, 500, 600, 700, 800, 900

<div>
  <div class="bg-greey fw-100 m-t-20">.fw-100 数值表示字体的粗度</div>
  <div class="bg-greey fw-200 m-t-20">.fw-200 数值表示字体的粗度</div>
  <div class="bg-greey fw-300 m-t-20">.fw-300 数值表示字体的粗度</div>
  <div class="bg-greey fw-400 m-t-20">.fw-400 数值表示字体的粗度</div>
  <div class="bg-greey fw-500 m-t-20">.fw-500 数值表示字体的粗度</div>
  <div class="bg-greey fw-600 m-t-20">.fw-600 数值表示字体的粗度</div>
  <div class="bg-greey fw-700 m-t-20">.fw-700 数值表示字体的粗度</div>
  <div class="bg-greey fw-800 m-t-20">.fw-800 数值表示字体的粗度</div>
  <div class="bg-greey fw-900 m-t-20">.fw-900 数值表示字体的粗度</div>
</div>

## line-height

## link

## overflow

## position

## size

## text-align

## text-color

## vertical-align

## visbility

## white-space
