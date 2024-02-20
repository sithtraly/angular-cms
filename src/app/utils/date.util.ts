export class DateUtil {
  public static standardDate(date?: string) {
    const d = new Date(date || Date.now())
    const year = d.getFullYear()
    const month = (d.getMonth() + 1).toString().padStart(2, '0')
    const day = d.getDate().toString().padStart(2, '0')
    return `${day}-${month}-${year}`
  }

  public static standardDateAndTime(date?: string) {
    const stdDate = DateUtil.standardDate(date)
    const d = new Date(date || Date.now())
    const hour = d.getHours().toString().padStart(2, '0')
    const minute = d.getMinutes().toString().padStart(2, '0')
    const second = d.getSeconds().toString().padStart(2, '0')
    return `${stdDate} ${hour}:${minute}:${second}`
  }
}