- 巴菲特 卖了一般苹果股票
    - 端模型要来了 
    - 小一点，但是性能还行
    - 前端AI未来
- Transformers.js 前端AI库
    来自全球最大的AI社区 huggingFace(LLM开源社区)
- AI 是技术趋势，拥抱AI，
- AIGC现在已经很成熟，生成代码，快速学习
- coze agent 开发，也调用过接口完成项目中的AI应用
- 了解OpenAI 等LLM接口，完成过文生图，语义搜索等
- AI带来了全新的开发体验，前端工程师需要实施AI应用用户体验
    - prompt engineer
        - 角色 role
        - 清晰的描述任务
        - 分步，交给多个工作流
        - 可以做什么，不做什么
        - 给大模型一些思考时间
    - button  disable

- AI 端模型能力是一个风口，我了解transformer.js


- react 学的怎么样？
    了解语法，写过一个AI项目，一周内能上手
- react 组件？
    返回 JSX 的函数就是组件 .jsx
    (vue:template/script/css 三段写法 .vue)
    函数就是对象
    React(函数式组件)/Vue 函数式编程setup
- react 坚持不用v-model 双向绑定 性能不好 单项数据流
    vue v-model 双向绑定 
- MVVM(函数) + 组件化思想 + 函数式编程
    - vue 优势是 API 简洁，好上手 setup(ref,reactive,definProps) v-for/v-if
    - react 优势是纯JS风格 函数的参数解构就是props map，上手难
- react <></>
    做容器  又没有多加节点
    但是又不用div等
    文档碎片组件 Fragment 

- 请你介绍react 的hook 函数
    react在hook 上很激进  vue借鉴hook思想
    - useState  引入一个响应式的状态(ref)
        参数是默认值， 返回是一个数组，第一个是状态，第二个是更新状态的函数
    - useRef
        vue中 ref动态绑定节点/对象
        useRef null -> current 
        要快速显示组件优先，web worker的实例化 推迟，useRef 动态绑定worker对象
        - worker 组件函数内局部变量(null) 访问问题
        - useEffect 实例化 性能问题
        - 任何地方都可以访问 
        - 卸载的时候，回收这个对象
    - useEffect
        生命周期钩子函数
        - onMounted
        - onUnMounted  return () => { ...卸载功能 }
        - onUpdated
- 数据通信
    - 状态管理 pinia  redux
    - 父子组件通信 

- html5 功能
    - 拖拽
    - form 表单新特性
    - 语义化标签
    - canvas audio
    - 本地存储 localStorage sessionStorage
    - web socket
    - html5 file
    - web woker 多线程
    - LBS  附近的位置
    - WebGL  three.js 3D小米汽车

- Web Worker 
    - JS 因复杂任务启动worker 线程
    - 性能优化,压缩,加密,AI...  不做DOM编程
    - 实例化 new Worker(new URL('./worker.ks'),{type:'module'})
    - 消息机制完成主线程和worker线程间的通信
        时间监听
        postMessage 发送事件

- Transformer.js
    - import from 从cdn 加载nlp js库
    - pipeline('sentiment-analysis') pipe() 功能函数
        - 下载大模型 前端反馈
        - pipeline(task,model,options)
        - 放在worker线程 单例模式实例化 下载大模型等文件
        - 调用 options中，progress_callback 实时反馈下载进度
        - web worker postMessage 消息机制，通知主线程
            Progress 模块更新
        - 从而完成pipeline 功能准备和实例化，pipeline 准备的UI用户体验 
    - pipe(text) 拿到结果
        postMessage 
## 百度翻译
    - NLP 翻译任务 机器学习
    - 数据驱动界面
        源语言  英文
        结果语言  中文
        待翻译文本
        翻译结果

- es6+ 介绍
    - 阮一峰 
    - 2015
    - 代码简洁 
        空值合并运算符  ES2020
        我在开发AI项目的Progress 组件时
        percentage = percentage ? percentage : 0 三元运算符
        当不为空的值就是返回本身时，可以使用空值合并运算符 简化
        percentage ?? 0
    - 大型项目
        class extend 块级作用域...
    - 使用了es6 class封装了 MyTranslationPiple 类
        - 将复杂留给自己
        - 方便别人调用
- 设计模式
    - 单例模式
        - pipeline 实例化的时候，只需要实例化一次 下载大模型还有实例化开销特别大

- 介绍项目小作文
    - 本项目基于React 和来自HuggingFace社区的Transformers.js，实现了AI翻译功能，它让我感受到前端
    未来独立开发AI项目的魅力
    - 不管是操作系统，还是手机，甚至未来的机器人，端LLM的未来即将到来，
    前端AI大机会到来了，前端，后端，AI，js都可以搞。
    本项目focus了 AI功能的实现 性能优化 和 良好反馈的AI用户体验
    - react 开发了 LanguageSelector 组件，Progress 组件，使用了 useState
    useEffect useRef 等hook函数
    - AI 功能需要下载大模型，执行开销比较大，选择web worker 多线程方案，
    将ai 任务交给worker线程，主线程只做UI
    主线程和worker 线程，通过消息机制通信
    模型下载会有 initiate、progress、down... 文件名字+下载进度
    通过postMessage 交给主线程，更新进度条
    执行翻译拿到结果后，再次通知主线程显示结果
    - transformer.js 核心功能
        - pipeline(task,model,options) AI功能有很多，使用es6单例模式1
        封装了MyTranslationPipeline类，做了性能优化，只需要下载大模型，初始化一次
        options progress_callback 它是我们获取下载进度的回调函数
        - pipe(text,options) 调用上一步返回的pipe函数，传递文本，及相关语言，
        执行AI翻译，再次postMessage通知页面，显示结果
