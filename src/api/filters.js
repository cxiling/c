// import Vue from 'vue';

/*
    格式化时间,时间戳转化为时间格式 ——
        参数 ——
            value： 时间戳10位
            type:   为需要的时间格式 'yyyy-MM-dd hh:mm:ss'
        返回 ——
            格式化后的字符串

    使用方式 —— 
        {{data | format_time type}}
*/
export const format_time  = (value,type) => {
    if(!value) return null
    let time = new Date(parseInt(value)*1000)
    let formatTime = type ? type : 'yyyy-MM-dd'
    let date = {
              "M+": time.getMonth() + 1,
              "d+": time.getDate(),
              "h+": time.getHours(),
              "m+": time.getMinutes(),
              "s+": time.getSeconds(),
              "q+": Math.floor((time.getMonth() + 3) / 3),
              "S+": time.getMilliseconds()
       };
       if (/(y+)/i.test(formatTime)) {
              formatTime = formatTime.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length));
       }
       for (let k in date) {
              if (new RegExp("(" + k + ")").test(formatTime)) {
                     formatTime = formatTime.replace(RegExp.$1, RegExp.$1.length == 1
                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
              }
       }
       return formatTime;
};

/*
    换算方法,大于1w显示1万 少于显示实际 数量格式 ——
        参数 ——
            total：1000 总数
            limit: 4 默认为万位单位 (可以不填) 
            type:  '万'|'千'|'w'|'k' 默认为需要的时间格式 '万'(可以不填)
        返回 ——
            格式化后的字符串

    使用方式 —— 
        {{ total | format_number type limit   }}
*/

export const format_number  = (total,limit,type) => {
    if(!total) return 0
    let tyleNum = type ? type : '万'
    let limitNum = limit ? limit : 4
    let totalNum 
    
    totalNum = (total.toString().length > limitNum) ? (total / Math.pow(10,limitNum)).toFixed(1)+tyleNum : total

    return totalNum

};
/*
    延迟方法 ——
        参数 ——
            idle: 延迟时间
            action: callback 回调函数
        返回 ——
            执行action函数

    使用方式 —— 
        delayBounceAction(300,callback)
*/
export const delayBounceAction = function(idle, action){
    function delayBounces(){
        let ctx = this, args = arguments
        clearTimeout(delayBounceContainer)
        delayBounceContainer = setTimeout(function(){
            action.apply(ctx, args)
        }, idle)
    }
    return delayBounces()
}