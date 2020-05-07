// vue2.0 vue 实现响应式原理



let oldArrayPrototype = Array.prototype
// 继承
let proto = Object.create(oldArrayPrototype)
let methods = ['push','shift','unshift']
methods.forEach(method=>{
  // 做函数劫持，函数重写不影响old方法，内部继续调用老的方法
  proto[method] = function(){
    updatedView()
    oldArrayPrototype[method].call(this,...arguments)
  }
})


// --------------------main--------------------

function observer(target){
  
  // 非对象 返回原理数据
  if(typeof target !== 'object' || target == null) return target
  
  // 数组类型 修改其原型链，为劫持其原型链方法而用
  if(Array.isArray(target)){

    Object.setPrototypeOf(target,proto)
    // target.__proto__ = proto
  }

  // 循环所有key去走数据劫持
  for(let key in target){
    defineReactive(target,key,target[key])
  }
}
function defineReactive(target,key,value){
  // 递归，数据嵌套需要劫持深层次key
  observer(value)
  // 数据劫持
  // 使用Object.defineProperty 就可以重写定义属性 添加描述符 getter和setter
  Object.defineProperty(target,key,{
    get(){
      // get中略----- Dep.target 即将当前的Watcher对象存入dep的subs中--也就是依赖收集

      return value
    },
    set(newValue){
      if(newValue !== value){
        // 如果赋新值为Object类型，同样需要递归，做新的数据劫持，否则数据无法更新到视图
        observer(newValue)
        // 更新视图
        updatedView()
        value = newValue

        // set里略------ dep.notify() 在set的时候出发dep的notify来通知所有的watcher对象更新视图
      }
    }
  })
}

function updatedView() {
  console.log("updateView") 
}


// ---------------------调用------------------------
let data = {name:1,age:{n:10},ids:[1,2,3]}
observer(data);

console.log(data.name)


// 测试赋值一层
data.name = 2

// 测试赋值新对象
data.age = {n:20} 
// 测试赋值新对象后数据是否被get和set
data.age.n = 30
// 测试数组  需要对数组的方法重写
data.ids.push(4) 

// 问题1:如果属性不存在 新增的属性 会是响应式吗？ 不会
