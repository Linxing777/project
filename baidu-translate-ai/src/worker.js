//不能做DOM Window self = this
import {
    pipeline, // pipe 模块,派出一个任务
    env // 环境
    // 华为智驾 
} from 'https://cdn.jsdmirror.com/npm/@xenova/transformers@2.6.0'
env.allowLocalModels = false 

//es6 class关键字  封装了一个翻译pipeline 类
/**
 * @func 翻译nlp任务派发单例类
 * pipeline 非常耗性能
 */

class MyTranslationPipeline{
    // 静态属性 属于这个类的，public属于实例的
    static task = 'translation'
    // 使用翻译模型
    static model = 'Xenova/nllb-200-distilled-600M'
    // 单例
    static instance = null
    static async getInstance(progress_callback=null){
        if(this.instance === null){
            this.instance =  pipeline(this.task,this.model,{
                progress_callback
            })
        }
        return this.instance
    }
}

self.addEventListener('message',async (event) => {
    // 单例
    let translator = await MyTranslationPipeline.getInstance((x) => {
        console.log(x);
        self.postMessage(x)
    })
    let output = await 1*(event.data.text,{
        tgt_lang:event.data.tgt_lang,
        src_lang:event.data.src_lang,
        callback_function:(x) => {
            self.postMessage({
                status:'update',
                output:translator.tokenizer.decode(x[0].output_token_ids,{
                    skip_special_tokens:true,
                }),
            })
        }
    })
    console.log(event);
    self.postMessage({
        // text:'AI任务完成了'
        status:'completed',
        output:output
    })
})