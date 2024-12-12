import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function CircularProgress() {

    const percentage = 76

    return (
        <>
            <div style={{ width: 200, height: 200, }}>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    strokeWidth={10}
                    styles={buildStyles({
                        // 路徑和軌蹟的旋轉，以圈數為單位 (0-1)
                        /* rotation : 0.25 , */

                        // 末端是否使用圓角或平角 - 可以使用 'butt' 或 'round' 
                        strokeLinecap: 'round',

                        // 文字大小
                        textSize: '16px',

                        //
                        // 動畫從一個百分比轉到另一個百分比需要多長時間（以秒為單位）
                        pathTransitionDuration: 0.5,

                        // 可以更詳細地指定路徑轉換，或完全刪除它
                        // pathTransition: 'none',

                        // 顏色
                        pathColor: `rgba(222, 91, 91)`, //內圈顏色
                        textColor: '#f88', //文字顏色
                        trailColor: '#fff', //剩餘圈數顏色
                        backgroundColor: '#fff',
                    })}
                />
            </div>
        </>
    )
}
export default CircularProgress