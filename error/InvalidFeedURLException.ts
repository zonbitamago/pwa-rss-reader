class InvalidFeedURLException implements Error {
  name: string = "InvalidFeedURLException";
  message: string = "このURLは登録できません。";

  toString() {
    return this.name + ":" + this.message;
  }
}

export default InvalidFeedURLException;
