import Message from '../../../views/shared/message';

const DEFAULT_ERROR_MESSAGE = 'Something Went Wrong.';

const selectErrorMessage = error => {
  if (error && error.data && error.data.errors && error.data.errors.length) {
    return error.data.errors[0].msg;
  }

  if (error && error.data && error.data.msg) {
    return error.data.msg;
  }

  return DEFAULT_ERROR_MESSAGE;
};

const selectErrorCode = error => {
  if (error && error.status) {
    return error.status;
  }

  if (error && error.response && error.response.data) {
    return error.response.status;
  }

  return 500;
};

export default class Errors {
  static handle(error) {
    if (selectErrorCode(error) === 403) {
      Message.error("You don't have permissions");
      return;
    }

    if (selectErrorCode(error) === 400) {
      Message.error(selectErrorMessage(error));
      return;
    }

    return Message.error(this.selectMessage(error));
  }

  static errorCode(error) {
    return selectErrorCode(error);
  }

  static selectMessage(error) {
    return selectErrorMessage(error);
  }

  static showErrorMessage(error) {
    Message.error(selectErrorMessage(error));
  }
}
