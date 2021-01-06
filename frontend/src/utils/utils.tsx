import { message, notification } from 'antd';

export const openNotificationBallon = (title: string, description: string, onCloseCallback: Function,
    duration: number | null) => {
    notification.open({
        message: title,
        description: description,
        duration: duration,
        onClose: () => onCloseCallback(),
    });
}

export const successMessage = (text: string) => {
    message.success(text);
};

export const errorMessage = (text: string) => {
    message.error(text);
};

export const warningMessage = (text: string) => {
    message.warning(text);
};

export const returnMessage = () => {
    return message;
}


export function downloadFile(response: any, fileName: string, extension: string) {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.target = "_blank";
    link.setAttribute('download', fileName + '.csv'); //or any other extension
    document.body.appendChild(link);
    link.click();
}

export function verifyValueInObjectArray(value: any, array: any[], property: string) {
    return array.some(function (element) {
        return element[property] === value;
    });
}