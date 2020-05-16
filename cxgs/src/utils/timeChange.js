export function format(time) {
  var time = new Date(time);
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return add0(h)+':'+add0(mm)+':'+add0(s);
}
function add0(m){return m<10?'0'+m:m }