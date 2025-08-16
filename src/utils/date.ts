// 轉換為英文的星期
export function dayOfWeek(dt: number): string {
    return new Date(dt * 1000).toLocaleDateString("en-US", {
      weekday: "long",
    });
  }

//  轉換成tw語言格式的日期字串
export function formatUnixTimestamp(
    timestamp: number,
    locale: string = 'zh-TW'
): string {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString(locale);
}

// 回傳該時間開始起算 3 小時時段的時間範圍字串，格式化成當地時間
export function format3HourPeriod(
    timestamp: number,
    locale: string = 'zh-TW'
): string {
    const start = new Date(timestamp * 1000);
    const end = new Date(start.getTime() + 3 * 60 * 60 * 1000);

    const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    };

    const startStr = start.toLocaleTimeString(locale, options);
    const endStr = end.toLocaleTimeString(locale, options);

    return `${startStr} ~ ${endStr}`;
}