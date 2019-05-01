class DuplicactionFeedURLError implements Error {
  name: string = "DuplicationFeedURLError";
  message: string = "登録内容が重複しています。";

  toString() {
    return this.name + ":" + this.message;
  }
}

export default DuplicactionFeedURLError;
