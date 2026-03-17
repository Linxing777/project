export default function Progress({ text, percentage = 0 }) {
    return (
        <div
            className="progress-container"
            role="progressbar"
            aria-valuenow={Math.round(percentage)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${text} 下载进度`}
        >
            <div className="progress-bar" style={{ width: `${percentage}%` }} />
            <span className="progress-text">{text} {percentage.toFixed(2)}%</span>
        </div>
    )
}
