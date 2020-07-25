/*
onKeyUp()時に、textArea の値を取得
解析をかける（文字数計測、空白削除、その他2バイト文字の扱い等）
文字数を表示する。
解析し、処理した結果を右側に表示する。
 */

function calcTextAreaData(value) {
  const textLength = value.length;
  document.getElementById("length").innerHTML =
    "文字数 : " + textLength + " 字";

  document.getElementById("output_text").innerHTML = value;
}
