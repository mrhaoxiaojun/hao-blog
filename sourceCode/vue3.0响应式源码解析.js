

// vue3.0 响应式原理

/**
 * vue2.0缺点
 * 
 * 1、默认会递归
 * 2、数组改变length是无效的
 * 3、对象不存在的属性不能够被拦截
 */

//  es6知识点：
// Proxy 
// Reflect 
// WeakMap

let toProxy = new WeakMap() // es6 弱引用映射表； 放置 源对象：代理过的对象
let toRaw = new WeakMap() // 被代理过的对象：源对象

// 判断是不是对象
function isObject(val) {
  return typeof val === "object" && val !== null
}

// 对象是否包含该属性
function hasOwn(target,key){
  return target.hasOwnProperty(key)
}

// ------------------------------- 响应式的核心 -------------------------------

// 响应式的核心方法
function reactive(target) {
  // ...
  // 创建响应式对象
  return createReactiveObject(target)
}


// 创建响应式对象
function createReactiveObject(target) {
  
  // 是否是对象，不是对象返回即可
  if (!isObject(target)) return target

  
  // 如果已经代理过，直接返回代理结果即可
  let proxy = toProxy.get(target)
  if (toProxy.get(target)) {
    return proxy
  }

  // 防止代理对象再次被代理
  if (toRaw.has(target)) { 
    return target
  }
  
  
  let baseHandler = {
    // reflect 优点 不会报错，而且有返回值 会替代Oject上的方法

    get(target, key, receiver) {
      console.log("get")
      // proxy + Reflect 反射
      let result = Reflect.get(target, key, receiver)

      // 收集依赖 订阅 =》把当前的key和effect 建立关联
      
      track(target,key) // 如果目标上key变化了，重新让数组中的effect执行

      return isObject(result) ? reactive(result) : result
    },
    set(target, key, value, receiver) {
      console.log('set')
      
      let hadKey = hasOwn(target,key) // 判断以前有没有这个属性
      let oldValue = target[key]
      let res = Reflect.set(target, key, value, receiver)
      if(!hadKey){
        trigger(target,'add',key)
        console.log("新增属性")
      }else if (oldValue !== value){
        // 表示这个属性改过了
        trigger(target,'set',key)
        console.log("修改属性")
      }

      return res
    }
  }
  let observed = new Proxy(target, baseHandler) //es6

  toProxy.set(target, observed)
  toRaw.set(observed, target)

  return observed
}

// ------------------------------- track 动态创建依赖关系 -------------------------------

// 数据结构
// {
//   target:{
//     key:[fn,fn]
//   }
// }

// 栈 先进后出  [{name:[effect]}]
let activeEffectStacks = [] //栈型结构

let targetMap= new WeakMap()

// 跟踪变化，如果target中的key变化了，就执行数组里的方法 
function track(target,key){
  let effect = activeEffectStacks[activeEffectStacks.length-1]
  // 有对应关系才创建关联
  if(effect){
    // 建立第一步映射表
    let depsMap = targetMap.get(target)
    console.log(depsMap)
    if(!depsMap){
      // {target:{}}
      targetMap.set(target,depsMap = new Map)
    }
    // 建立第二步映射表的value的键值
    let deps = depsMap.get(key)
    if(!deps){
      // {target:{key:[]}}
      depsMap.set(key,deps = new Set())
    }
    console.log(deps.has(effect))
    // 不包含的添加到Set中
    if(!deps.has(effect)){
      deps.add(effect) 
    }
  }
}

// ------------------------------- trigger 数据更新 -------------------------------

function trigger(target,type,key){
  let desMap = targetMap.get(target)
  if(desMap){
    let deps = desMap.get(key)
    if(deps){ // 将当前key 对应的effect依次执行
      deps.forEach(effect => {
        effect() 
      });
    }
  }
}

// ------------------------------- effect 保存函数到数据映射表中 -------------------------------

function effect (fn){
  // ...
  // 需要把fn这个函数变成响应式函数
  let effect = createReactiveEffect(fn)
  // 默认应该先执行一次
  effect() 
}


function createReactiveEffect(fn){
  let effect = function(){
    // 创建响应式的effect

    return run(effect,fn)
  }
  return effect
}

// 允许fn 并且将effect 存起来
function run(effect,fn){
  try{
    activeEffectStacks.push(effect)
    fn() // v2利用了js单线程
  }finally{
    activeEffectStacks.pop()
  }
}


// 依赖收集 发布订阅
let obj = reactive({name:{a:1}})
effect(()=>{
  // effect 默认执行一次；之后依赖数据变化了会再次执行
  console.log(obj.name) 
})

// obj.name = 2
obj.name = 2


// 代理对象
// let proxy = reactive({name:1})
// proxy.name = '2'
// console.log(proxy.name)


// let arr = [1, 2, 3]
// let proxy = reactive(arr)
// proxy.push(4)