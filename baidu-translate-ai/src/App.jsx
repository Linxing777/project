import { useState, useRef, useEffect, useMemo } from "react"
import LanguageSelector from "./components/LanguageSelector"
import './App.css'
import Progress from "./components/Progress"

const App = () => {
  const [sourceLanguage, setSourceLanguage] = useState('eng_Latn')
  const [targetLanguage, setTargetLanguage] = useState('zho_Hans')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [ready, setReady] = useState(true)
  const [modelLoaded, setModelLoaded] = useState(false)
  const [error, setError] = useState('')
  const [progressItems, setProgressItems] = useState([])

  const worker = useRef(null)

  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(
        new URL('./worker.js', import.meta.url), {
          type: 'module'
        }
      )

      worker.current.addEventListener('message', (e) => {
        switch (e.data.status) {
          case 'initiate':
            setReady(false)
            setError('')
            setProgressItems((prev) => [...prev, e.data])
            break
          case 'progress':
            setProgressItems(
              prev => {
                const idx = prev.findIndex(item => item.file === e.data.file)
                if (idx === -1 || prev[idx].progress === e.data.progress) return prev
                const next = [...prev]
                next[idx] = { ...next[idx], progress: e.data.progress }
                return next
              }
            )
            break
          case 'done':
            setProgressItems(prev => prev.filter(
              item => item.file !== e.data.file
            ))
            break
          case 'ready':
            setReady(true)
            setModelLoaded(true)
            break
          case 'update':
            setOutput(e.data.output)
            break
          case 'completed':
            setDisabled(false)
            break
          case 'error':
            setDisabled(false)
            setError(e.data.message || '翻译失败，请重试')
            break
        }
      })

      worker.current.addEventListener('error', () => {
        setDisabled(false)
        setReady(true)
        setError('翻译服务异常，请刷新页面重试')
      })
    }

    return () => {
      if (worker.current) {
        worker.current.terminate()
        worker.current = null
      }
    }
  }, [])

  const translate = () => {
    if (!input.trim()) return
    setDisabled(true)
    setError('')
    worker.current.postMessage({
      text: input,
      src_lang: sourceLanguage,
      tgt_lang: targetLanguage
    })
  }

  const swapLanguages = () => {
    setSourceLanguage(targetLanguage)
    setTargetLanguage(sourceLanguage)
    setInput(output)
    setOutput(input)
  }

  const overallProgress = useMemo(() => {
    if (progressItems.length === 0) return 0
    const total = progressItems.reduce((sum, item) => sum + (item.progress ?? 0), 0)
    return Math.round(total / progressItems.length)
  }, [progressItems])

  const isLoading = !ready

  return (
    <main className="app">
      <header className="app-header">
        <h1>AI 翻译</h1>
        <p className="app-subtitle">浏览器端离线翻译，数据不出设备，支持 200+ 语言</p>
      </header>

      {isLoading && (
        <section className="loading-panel" aria-live="polite">
          <div className="loading-header">
            <span className="loading-title">正在准备翻译模型</span>
            <span className="loading-percent">{overallProgress}%</span>
          </div>
          <div className="loading-bar-track">
            <div
              className="loading-bar-fill"
              style={{ width: `${overallProgress}%` }}
              role="progressbar"
              aria-valuenow={overallProgress}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <p className="loading-hint">
            首次使用需下载翻译模型（约 300MB），完成后自动缓存到浏览器，下次打开无需再等。
          </p>
          {progressItems.length > 0 && (
            <details className="loading-details">
              <summary>查看详细进度</summary>
              <div className="loading-files">
                {progressItems.map((data) => (
                  <Progress key={data.file} text={data.file} percentage={data.progress} />
                ))}
              </div>
            </details>
          )}
        </section>
      )}

      <section className={`translator ${isLoading ? 'translator--loading' : ''}`}>
        <div className="translator-row">
          <div className="translator-col">
            <LanguageSelector
              type="原文"
              id="source-lang"
              value={sourceLanguage}
              onChange={setSourceLanguage}
            />
            <textarea
              value={input}
              rows={5}
              onChange={(e) => setInput(e.target.value)}
              aria-label="源文本"
              placeholder="请输入要翻译的文本..."
              disabled={isLoading}
            />
          </div>

          <button
            className="swap-btn"
            onClick={swapLanguages}
            aria-label="互换源语言和目标语言"
            title="互换语言"
            disabled={isLoading}
          >
            ⇄
          </button>

          <div className="translator-col">
            <LanguageSelector
              type="译文"
              id="target-lang"
              value={targetLanguage}
              onChange={setTargetLanguage}
            />
            <textarea
              value={output}
              rows={5}
              readOnly
              aria-label="翻译结果"
              placeholder={isLoading ? '等待模型加载...' : '译文'}
            />
          </div>
        </div>

        <button
          className="translate-btn"
          disabled={disabled || !input.trim() || isLoading}
          onClick={translate}
          aria-busy={disabled}
        >
          {disabled ? '翻译中...' : '翻译'}
        </button>

        {error && (
          <p className="error-message" role="alert">{error}</p>
        )}
      </section>

      {modelLoaded && (
        <p className="ready-hint">模型已就绪，可以离线使用</p>
      )}

      <footer className="app-footer">
        <p>基于 <a href="https://huggingface.co/docs/transformers.js" target="_blank" rel="noopener noreferrer">Transformer.js</a>，支持 200+ 语言的端侧翻译模型</p>
      </footer>
    </main>
  )
}

export default App
