class DuplicactionFeedError implements Error {
  name: string = "DuplicationFeedError";
  message: string = "登録内容が重複しています。";

  toString() {
    return this.name + ":" + this.message;
  }
}

export default DuplicactionFeedError;
