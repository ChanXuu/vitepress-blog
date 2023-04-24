## 模板写法

3.0写法（混合写法）

```js
//parent.vue
<template>
    <Child2 :msg1="msg1" :msg2="msg2" @on-change='getEmit'></Child2>
</template>

<script lang='ts'>
    import Child2 from "../components/Child2.vue"
    import { ref, reactive } from "vue"
    export default {
        components: {
            Child2
        },
        data(){
            return {
                msg1:"123"
            }
        },
        setup(){
            const msg2 =ref('这是父标签setup函数创建的') 
            
            //emit
            const getEmit = (item:any)=>{
                console.log(item)
            }


            return {
                msg2,
                getEmit
            }
        }
    }
</script>


//child.vue
<template>
    <p>这是2.0的data的值:{{msg1}}</p>
    <p>这是3.0,使用setup函数的值:{{msg2}}</p>
    <p>{{count}}</p>
    <p>{{name}}-----{{age}}</p>
    <p>{{plusOne}}</p>
    <button @click="changeNum">改变count</button>
    <button @click="changeNum1">改变count1</button>
    <button @click="emitValue">emitValue</button>
</template>

<script lang='ts'>
import { computed, onBeforeMount, onMounted, watch } from "@vue/runtime-core"
import { ref, reactive } from "vue"
    export default {
        props: ["msg1", "msg2"],
        beforeCreate(){
            console.log('这是beforCreated')
        },
        created(){
            console.log('这是created')
        },
        beforeMount(){
            console.log('这是beforeMount')
        },
        mounted(){
            console.log('这是mounted')
        },
      	beforeUnmount(){
            console.log('这是beforeUnmount')
        },
        unmounted(){
            console.log('这是unmounted')
        },
        beforeDestroy(){
            console.log('这是beforeDestroy')
        },
        destroyed(){
            console.log('这是destroyed')
        },
        setup(props: any,{ attrs, slots, emit }:any){
            // console.log(this) //undefined
            //sutup函数参数
            console.log(props)
            console.log(attrs)
            console.log(slots)
            console.log(emit)
            
            //钩子函数
            onBeforeMount(()=>{
                console.log('这是onBeforeMount')
            })
            onMounted(()=>{
                console.log('这是onMounted')
            })
            
           

            //创建变量
            const count = ref(0)
            const count1 = reactive({name:'cx',age:12})

             setTimeout(() => {
                count.value++;
                count1.age = 18
                console.log(count)
                console.log(count1)
            }, 2000);


            
            //计算属性
            const plusOne = computed(() => count.value + 1)

            //watch
            watch(count, (count, prevCount) => {
                console.log(count,'=====watch函数')
            })

            const changeNum = ()=> {
                count.value ++
            }
            const changeNum1 = ()=>{
                count1.age = 25
                count1.name = 'ccc'
                console.log(count1)
            }
            //emit
            const emitValue = ()=>{
                emit('onChange',count)
            }


            return {
                count,
                ...count1,
                plusOne,
                changeNum,
                changeNum1,
                emitValue
            }

        }
    }

</script>
```



3.2写法(Vue3`script setup`语法糖写法) 

```vue
<script lang='ts' setup>
</script>
```

注意：

如果父组件是混合写法，子组件纯 Vue3 写法的话，是接收不到父组件里 data 的属性，只能接收到父组件里 setup 函数里传的属性

如果父组件是纯 Vue3 写法，子组件混合写法，可以通过 props 接收到 data 和 setup 函数里的属性，但是子组件要是在 setup 里接收，同样只能接收到父组件中 setup 函数里的属性，接收不到 data 里的属性

官方也说了，既然用了 3，就不要写 2 了，所以不推荐混合写法。



好处：

- 更少的样板内容，更简洁的代码。
- 能够使用纯 Typescript 声明 props 和发出事件。
- 更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)。
- 更好的 IDE 类型推断性能 (减少语言服务器从代码中抽离类型的工作)。



## 钩子函数

[setup ()](https://vue3js.cn/docs/zh/guide/composition-api-setup.html) 内部调用生命周期钩子：

<img src="https://gitee.com/ChanXuu/myPicgoImg/raw/master/image-20210826164419532.png" alt="image-20210826164419532" style="zoom: 50%;" />

![adw8o-ih4n0 (1)](https://gitee.com/ChanXuu/myPicgoImg/raw/master/adw8o-ih4n0%20(1).png)

## reactive、ref 与 toRefs

###  ref

ref() 函数用来根据给定的值创建一个响应式的数据对象，传入的为基本数据类型，例如字符串、数字、boolean 等,返回值是一个对象，这个对象上只包含一个 value 属性
ref定义的变量，改变值要.value,而且在template中不用写.value

```js

```



###  reactive

reactive函数传入的为引用类型，例如数组、对象等，但不能代理基本类型值,返回一个响应式的数据对象, 想要使用创建的响应式数据也很简单，创建出来之后,直接在template中调用即可。

```js
```



### toRefs()

toRefs() 函数可以将 reactive() 创建出来的响应式对象，转换为普通的对象，相当于变成一个个的ref(),类似使用拓展用算符…的方法返回数据data
使用toRefs和reactive()区别在于可以直接使用msg属性,不用state.

```js

```







## props

Vue 2中不允许直接修改props，得用this.$emit，但是Vue 3允许直接修改，只不过修改的是组件内props的值，并不会影响父组件的传入值。

```js
<template>
    <Child1 v-model:msg='count' v-model:msg1="count1" @my-click="myClick"  @my-click2="myClick2" @update:msg1="count1 = $event" @update:msg='count = $event' ></Child1>
</template>

<script lang='ts' setup>
import { ref, reactive, toRef, computed } from 'vue';
import Child1 from '../components/Child1.vue' 
import { getNowDate } from './fuc'
    
    //创建变量
    const count = ref(0)
    let count1 =reactive({name:'cc',age:18})
</script>
    
    
//Child1.vue
<template>
    <p>父组件传来的props:{{msg}}</p>
    <p>父组件传来的props:{{msg1}}</p>
</template>

<script lang='ts' setup>
import { ref } from "@vue/reactivity"
  // props
  const prop = defineProps({
      msg:{
          type:Number,
          default:0
      },
      msg1:{
          type:Object,
          default:()=> {}
      }
  })
</script>


```





## 计算属性

```js
<template>
  {{num}}
</template>

<script lang='ts' setup>
import { ref, computed } from 'vue';
    
    //创建变量
    const count = ref(0)

    //computed
    const num = computed(()=>{
       return count.value++
    })
</script>

```



## watch

作用：监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调，默认初始时不执行回调, 但可以通过配置`immediate`为`true`, 来指定初始时立即执行第一次通过配置`deep`为`true`, 来指定深度监视

```js
<template>
    <Child1 v-model:msg='count' v-model:msg1="count1" @my-click="myClick"  @my-click2="myClick2" @update:msg1="count1 = $event" @update:msg='count = $event' ></Child1>
</template>

<script lang='ts' setup>
import { ref, reactive, toRef, computed, watch, watchEffect } from 'vue';
import Child1 from '../components/Child1.vue' 
    
    //创建变量
    const count = ref(0)
    let count1 =reactive({name:'cc',age:18})

    console.log(getNowDate())


    //computed
    const num = computed(()=>{
       return count.value++
    })

    //watch
    watch(count,()=>{
        console.log('执行watch')
    },{ immediate: true, deep: true })


</script>

```





## watchEffect

作用：监视数据发生变化时执行回调，不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据，默认初始时就会执行第一次, 从而可以收集需要监视的数据。

```js
<template>
    <Child1 v-model:msg='count' v-model:msg1="count1" @my-click="myClick"  @my-click2="myClick2" @update:msg1="count1 = $event" @update:msg='count = $event' ></Child1>
</template>

<script lang='ts' setup>
import { ref, reactive, toRef, computed, watch, watchEffect } from 'vue';
import Child1 from '../components/Child1.vue' 
    
    //创建变量
    const count = ref(0)
    let count1 =reactive({name:'cc',age:18})

    console.log(getNowDate())


    //computed
    const num = computed(()=>{
       return count.value++
    })

    //watchEffect
    watchEffect(()=>{
        count.value++
        console.log('执行watchEffect')
    })


</script>


```



## emit

```js
<template>
    <Child1 v-model:msg='count' v-model:msg1="count1" @my-click="myClick"  @my-click2="myClick2" @update:msg1="count1 = $event" @update:msg='count = $event' ></Child1>
</template>

<script lang='ts' setup>
import { ref, reactive, toRef, computed } from 'vue';
import Child1 from '../components/Child1.vue' 

    //emit
    const myClick = (item:any)=>{
        console.log(item)
        console.log(count.value)
    }

    const myClick2 = (item:any)=>{
        console.log(item)
        console.log(count1)
    }


</script>

//Child1.vue
<template>
    <button @click="setEmit">setEmit</button>
</template>

<script lang='ts' setup>
import { ref } from "@vue/reactivity"

const emit =  defineEmits(["myClick","myClick2",'update:msg','update:msg1'])
//$emit
const setEmit = ()=> {
    emit('update:msg1',{name:'hhh',age:20})
    emit('update:msg',2)
    emit('myClick',num.value)
    emit('myClick2',num.value)
}
</script>

```



## v-model 升级

- 变更：在自定义组件上使用`v-model`时， 属性以及事件的默认名称变了
- 变更：`v-bind`的`.sync`修饰符在 Vue 3 中又被去掉了, 合并到了`v-model`里
- 新增：同一组件可以同时设置多个 `v-model`
- 新增：开发者可以自定义 `v-model`修饰符



## expose / ref

父组件获取子组件的属性或者调用子组件方法

```js
// Child.vue

 defineExpose({
      childName: "这是子组件的属性",
      someMethod(){
          console.log("这是子组件的方法")
      }
  })


// Parent.vue 

<template>
    <child ref="comp"></child>
    <button @click="handlerClick">按钮</button>
</template>
<script setup>
    import child from "./child.vue"
    import { ref } from "vue"
    const comp = ref(null)
    const handlerClick = () => {
        console.log(comp.value.childName) // 获取子组件对外暴露的属性
        comp.value.someMethod() // 调用子组件对外暴露的方法
    }
</script>
```



## 新增`<style> v-bind`（成为正式功能）

简单地来说就是可以在内使用组件定义的动态值。官方给出了例子：

```vue
<script setup>
const theme = {
  color: 'red'
}
</script>

<template>
  <p>hello</p>
</template>

<style scoped>
p {
  color: v-bind('theme.color');
}
</style>
```



## Ref Transform（在试验阶段）

$语法糖，有了它可以忘了.value

![image-20211023232418090](https://gitee.com/ChanXuu/myPicgoImg/raw/master/image-20211023232418090.png)



$$使用，通常用于hooks编写

![image-20211023232458269](https://gitee.com/ChanXuu/myPicgoImg/raw/master/image-20211023232458269.png)



## 结构props转换

又演示了另一个开发痛点是关于属性解构会导致的心智负担问题，通过props transform即可解决。

比如下面代码中对属性做解构之后，甚至可以设置默认值，起别名，和rest展开，可以看到foo是响应式的，秀的一批。

![image-20211023232536711](https://gitee.com/ChanXuu/myPicgoImg/raw/master/image-20211023232536711.png)

