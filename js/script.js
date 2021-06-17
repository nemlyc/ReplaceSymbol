/*
onKeyUp()時に、textArea の値を取得
解析をかける（文字数計測、空白削除、その他2バイト文字の扱い等）
文字数を表示する。
解析し、処理した結果を右側に表示する。
 */

function calcTextAreaData(value) {
  // 文字数を計測して出力する。
  const textLength = value.length;
  document.getElementById("length").innerHTML =
    "文字数 : " + textLength + " 字";

  // []があればコードブロックで囲む。
  const isImport = document.getElementById("about_import").value;
  if (isImport) {
    const start = new RegExp(/\[/, "g");
    const end = new RegExp(/\]/, "g");

    const startReplaced = value.replace(start, "`[");
    const result = startReplaced.replace(end, "]`");
    document.getElementById("output_text").innerHTML = result;
  }
}

function clearText() {
  const text_in = document.getElementById("input_text");

  if (text_in.value != "") {
    text_in.value = "";
    calcTextAreaData("");
  }
}
