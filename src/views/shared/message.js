import { notification } from 'antd';

export default class Message {
  static success(message) {
    notification.success({
      message: message,
      description: '',
    });
  }

  static error(message) {
    notification.error({
      message: message,
      description: '',
    });
  }
}
