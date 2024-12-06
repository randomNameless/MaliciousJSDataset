
function translate(key) {
    if (window.TRANSLATIONS && key in TRANSLATIONS) return TRANSLATIONS[key];

    if (window.DEBUG_TRANSLATIONS) {
        alert('can not found javascript translation for key: "' + key + '"');
    }

    return key;
};

var TRANSLATIONS = {
    // common
    'OK': gettext('Ok'),
    'YES': gettext('Да'),
    'NO': gettext('Нет'),

    'OR': gettext('или'),

    // common/wg_dev.js
    'WG_DEV_DEBUG_INFO': gettext('Отладочная информация'),
    'WG_DEV_CLOSE_BUTTON': gettext('Закрыть'),

    // common/tooltips.js
    'TOOLTIP_DOES_NOT_FOUND': gettext('Подсказка не найдена'),
    'TOOLTIP_LOADING': gettext('Загрузка...'),

    // wgportlsdk/js/wgsdk.forms.js
    'FORMS_UNKNOWN_ERROR': gettext('Неизвестная ошибка, повторите попытку позже.'),
    'FORMS_AUTH_NOT_CONFIRMED': gettext('Вы не подтвердили операцию'),
    'FORMS_TIMEOUT': gettext('Превышено время ожидания, попробуйте ещё раз.'),
    'FORMS_SERVER_UNAVAILABLE': gettext('Сервер временно недоступен, повторите попытку позже'),
    'FORMS_WRONG_SERVER_ANSWER': gettext('Неверный ответ сервера'),

    'FORMS_ERROR_413': gettext('Превышен допустимый размер загружаемых файлов'),
    'FORMS_ERROR_413_WITH_LIMIT': gettext('Превышен допустимый размер загружаемых файлов (максимум: %(size)i)'),

    'FORMS_VALIDATION_MIN_LENGTH_ERROR': gettext('Недопустимая длина'),
    'FORMS_VALIDATION_MAX_LENGTH_ERROR': gettext('Недопустимая длина'),
    'FORMS_VALIDATION_EMPTY_FIELD_ERROR': gettext('Поле должно быть заполнено'),

    // wgportalsdk/js/wgsdk.time.js
    'TIME_SUNDAY': gettext('Воскресенье'),
    'TIME_MONDAY': gettext('Понедельник'),
    'TIME_TUESDAY': gettext('Вторник'),
    'TIME_WEDNESDAY': gettext('Среда'),
    'TIME_THURSDAY': gettext('Четверг'),
    'TIME_FRIDAY': gettext('Пятница'),
    'TIME_SATURDAY': gettext('Суббота'),

    'TIME_SHORT_SUNDAY': gettext('вск'),
    'TIME_SHORT_MONDAY': gettext('пнд'),
    'TIME_SHORT_TUESDAY': gettext('втр'),
    'TIME_SHORT_WEDNESDAY': gettext('срд'),
    'TIME_SHORT_THURSDAY': gettext('чтв'),
    'TIME_SHORT_FRIDAY': gettext('птн'),
    'TIME_SHORT_SATURDAY': gettext('сбт'),

    'TIME_MIN_SUNDAY': gettext('Вс'),
    'TIME_MIN_MONDAY': gettext('Пн'),
    'TIME_MIN_TUESDAY': gettext('Вт'),
    'TIME_MIN_WEDNESDAY': gettext('Ср'),
    'TIME_MIN_THURSDAY': gettext('Чт'),
    'TIME_MIN_FRIDAY': gettext('Пт'),
    'TIME_MIN_SATURDAY': gettext('Сб'),

    'TIME_JANUARY': gettext('Январь'),
    'TIME_FEBRUARY': gettext('Февраль'),
    'TIME_MARCH': gettext('Март'),
    'TIME_APRIL': gettext('Апрель'),
    'TIME_MAY': gettext('Май'),
    'TIME_JUNE': gettext('Июнь'),
    'TIME_JULY': gettext('Июль'),
    'TIME_AUGUST': gettext('Август'),
    'TIME_SEPTEMBER': gettext('Сентябрь'),
    'TIME_OCTOBER': gettext('Октябрь'),
    'TIME_NOVEMBER': gettext('Ноябрь'),
    'TIME_DECEMBER': gettext('Декабрь'),

    'TIME_SHORT_JANUARY': gettext('Янв'),
    'TIME_SHORT_FEBRUARY': gettext('Фев'),
    'TIME_SHORT_MARCH': gettext('Мар'),
    'TIME_SHORT_APRIL': gettext('Апр'),
    'TIME_SHORT_MAY': gettext('Май'),
    'TIME_SHORT_JUNE': gettext('Июн'),
    'TIME_SHORT_JULY': gettext('Июл'),
    'TIME_SHORT_AUGUST': gettext('Авг'),
    'TIME_SHORT_SEPTEMBER': gettext('Сен'),
    'TIME_SHORT_OCTOBER': gettext('Окт'),
    'TIME_SHORT_NOVEMBER': gettext('Ноя'),
    'TIME_SHORT_DECEMBER': gettext('Дек'),

    'TIME_YEAR_REDUCTION': gettext('г.'),

    'TIME_DT_PICKER_CLOSE': gettext('Сохранить'),
    'TIME_DT_PICKER_CANCEL': gettext('Отмена'),
    'TIME_DT_PICKER_PREV': gettext('&#x3c;Пред'),
    'TIME_DT_PICKER_NEXT': gettext('След&#x3e;'),
    'TIME_DT_PICKER_TODAY': gettext('Сегодня'),
    'TIME_DT_PICKER_WEEK_HEADER': gettext('Не'),

    'TIME_DT_PICKER_CHOOSE_TIME': gettext('Выберите время'),
    'TIME_DT_PICKER_TIME': gettext('Время (UTC)'),
    'TIME_DT_PICKER_HOURS': gettext('Часы'),
    'TIME_DT_PICKER_MINUTES': gettext('Минуты'),
    'TIME_DT_PICKER_SECONDS': gettext('Секунды'),
    'TIME_DT_PICKER_CURRENT': gettext('Теперь'),

    // common/wgsdk.dialog.js
    'DIALOG_CAN_NOT_RECEIVE_DATA': gettext('При получении данных произошла ошибка!'),
    'DIALOG_ERROR': gettext('Ошибка'),
    'DIALOG_CLOSE_BUTTON': gettext('Закрыть'),
    'DIALOG_INFORMATION_BUTTON': gettext('Информация...'),
    'DIALOG_REPEATE_BUTTON': gettext('Повторить'),
    'DIALOG_EMPTY_SERVER_RESPONSE': gettext('Неверный тип данных (пустой ответ сервера).'),
    'DIALOG_WRONG_SERVER_RESPONSE': gettext('Неверный ответ сервера.'),
    'DIALOG_WRONG_DATA_TYPE': gettext('Неверный тип данных.')
};
